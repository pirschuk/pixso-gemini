// Прокси к Pixso MCP: браузер → этот сайт → Pixso. Нужен из-за CORS.
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

  let up;
  try {
    up = await fetch(target, {
      method: request.method, headers,
      body: request.method === 'GET' || request.method === 'DELETE' ? undefined : await request.arrayBuffer(),
    });
  } catch (e) {
    return new Response('Прокси не смог достучаться до Pixso: ' + e.message, { status: 502 });
  }
  const out = new Headers();
  for (const h of PASS_RES) { const v = up.headers.get(h); if (v) out.set(h, v); }
  return new Response(up.body, { status: up.status, headers: out });
}

export const GET = handle;
export const POST = handle;
export const DELETE = handle;
