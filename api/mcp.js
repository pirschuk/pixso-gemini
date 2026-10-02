// Прокси к Pixso MCP: браузер → этот сайт → Pixso. Нужен из-за CORS.
// В логах Vercel (проект → Logs) видно каждый вызов: метод, статус, время.
const ALLOWED = /(^|\.)pixso\.(net|cn)$/;
const PASS_REQ = ['content-type', 'accept', 'token', 'authorization', 'mcp-session-id', 'mcp-protocol-version', 'last-event-id'];
const PASS_RES = ['content-type', 'mcp-session-id', 'cache-control'];

async function handle(request) {
  let target;
  try { target = new URL(request.headers.get('x-pixso-target') || 'https://pixso.net/mcp'); }
  catch { return new Response('Неверный MCP URL', { status: 400 }); }
  if (target.protocol !== 'https:' || !ALLOWED.test(target.hostname))
    return new Response('Прокси работает только с https://*.pixso.net и https://*.pixso.cn', { status: 400 });

  const headers = new Headers();
  for (const h of PASS_REQ) { const v = request.headers.get(h); if (v) headers.set(h, v); }

  const body = request.method === 'GET' || request.method === 'DELETE' ? undefined : await request.arrayBuffer();
  let label = request.method;
  if (body) {
    try {
      const j = JSON.parse(new TextDecoder().decode(body));
      label = j.method ? `${j.method}${j.params?.name ? ' ' + j.params.name : ''}` : `reply id=${j.id}`;
    } catch {}
  }

  const t0 = Date.now();
  let up;
  try {
    up = await fetch(target, { method: request.method, headers, body, signal: request.signal });
  } catch (e) {
    console.log(`[mcp] ${label} → ошибка соединения: ${e.message}`);
    return new Response('Прокси не смог достучаться до Pixso: ' + e.message, { status: 502 });
  }
  console.log(`[mcp] ${label} → ${up.status} ${up.headers.get('content-type') || ''} за ${Date.now() - t0} мс`);

  const out = new Headers();
  for (const h of PASS_RES) { const v = up.headers.get(h); if (v) out.set(h, v); }
  if (!up.body) return new Response(null, { status: up.status, headers: out });

  let bytes = 0;
  const tap = new TransformStream({
    transform(chunk, ctrl) { bytes += chunk.byteLength; ctrl.enqueue(chunk); },
    flush() { console.log(`[mcp] ${label} — поток закрыт, ${bytes} байт за ${Date.now() - t0} мс`); },
  });
  return new Response(up.body.pipeThrough(tap), { status: up.status, headers: out });
}

export const GET = handle;
export const POST = handle;
export const DELETE = handle;
