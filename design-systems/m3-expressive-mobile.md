# Material 3 Expressive — мобильное приложение

Дизайн-система для адаптивных мобильных экранов в духе Material 3 Expressive.
Единица — dp (в Pixso 1 dp = 1 px). Шрифт — Roboto Flex (если нет — Roboto).

## Как собирать в Pixso
- Перед первым экраном проверь файл: если нет коллекции переменных «M3 Colors» (режимы Light и Dark) и текстовых стилей «M3/…» — создай их по таблицам ниже. Дальше используй только их, без «голых» HEX и размеров шрифта.
- Всё на auto-layout. Экран — вертикальный auto-layout; блоки внутри — Fill container по ширине, Hug по высоте. Абсолютное позиционирование — только для FAB и оверлеев.
- Имена слоёв осмысленные: «Screen / Home / Compact», «Top app bar», «Card / Product», «Button / Filled / M».
- Повторяющиеся элементы делай компонентами с вариантами (size, style, state).
- По умолчанию светлая тема. Тёмную собирай переключением режима переменных, а не перекраской.

## Адаптивность
| Класс ширины | Ширина окна | Фрейм для макета | Поля экрана | Колонки |
|---|---|---|---|---|
| Compact | < 600 | 360 × 800 (и проверка на 412 × 915) | 16 | 4 |
| Medium | 600–839 | 700 × 1000 | 24 | 8 |
| Expanded | 840+ | 1024 × 768 | 24 | 12 |

- Базовый макет — Compact 360 × 800. Контент должен тянуться: никаких фиксированных ширин у блоков, кроме иконок, аватаров и кнопок-иконок.
- Системные зоны: статус-бар 24 сверху, зона жеста навигации 24 снизу — внутрь них контент не ставь.
- На Medium/Expanded: навигация уходит из нижней панели в navigation rail слева (ширина 96); текстовый контент ограничивай шириной 600–840 и центрируй; списки и карточки раскладывай в 2–3 колонки.
- Минимальная зона нажатия — 48 × 48, даже если сам элемент меньше.

## Сетка и отступы
Шаг 4. Токены: space/4 = 4, space/8 = 8, space/12 = 12, space/16 = 16, space/24 = 24, space/32 = 32, space/48 = 48, space/64 = 64.
- Внутри компонента: 8–16. Между элементами в группе: 8–12. Между секциями экрана: 24–32. Поля экрана: 16 (Compact) / 24 (Medium+).

## Типографика
Обычные стили — для основного текста и интерфейса. Emphasized — для акцентов: заголовков экранов, ключевых цифр, выбранных состояний, крупных кнопок. Размер и межстрочный у Emphasized те же, вес выше.

| Стиль | Размер / межстрочный | Вес | Вес Emphasized | Трекинг, px |
|---|---|---|---|---|
| M3/Display Large | 57 / 64 | 400 | 500 | -0.25 |
| M3/Display Medium | 45 / 52 | 400 | 500 | 0 |
| M3/Display Small | 36 / 44 | 400 | 500 | 0 |
| M3/Headline Large | 32 / 40 | 400 | 500 | 0 |
| M3/Headline Medium | 28 / 36 | 400 | 500 | 0 |
| M3/Headline Small | 24 / 32 | 400 | 500 | 0 |
| M3/Title Large | 22 / 28 | 400 | 500 | 0 |
| M3/Title Medium | 16 / 24 | 500 | 700 | 0.15 |
| M3/Title Small | 14 / 20 | 500 | 700 | 0.1 |
| M3/Body Large | 16 / 24 | 400 | 500 | 0.5 |
| M3/Body Medium | 14 / 20 | 400 | 500 | 0.25 |
| M3/Body Small | 12 / 16 | 400 | 500 | 0.4 |
| M3/Label Large | 14 / 20 | 500 | 700 | 0.1 |
| M3/Label Medium | 12 / 16 | 500 | 700 | 0.5 |
| M3/Label Small | 11 / 16 | 500 | 700 | 0.5 |

Emphasized-стили называй «M3/<Стиль> Emphasized», например «M3/Headline Large Emphasized».

Где что использовать на мобильном:
- Заголовок экрана в крупной шапке — Headline Medium Emphasized; в обычной шапке — Title Large.
- Крупные цифры, приветствия, hero-блоки — Display Small / Headline Large Emphasized.
- Заголовок карточки, пункта списка — Title Medium; подзаголовок — Body Medium + on-surface-variant.
- Основной текст — Body Large; второстепенный — Body Medium; подписи — Body Small.
- Кнопки, табы, чипы — Label Large; бейджи и мелкие метки — Label Small.

## Цвета
Роли Material 3 (схема Tonal Spot, спецификация 2025, исходный цвет #6750A4). Переменные — в коллекции «M3 Colors», режимы Light / Dark.

### Primary
| Токен | Light | Dark |
|---|---|---|
| color/primary | #655789 | #CDC0EC |
| color/on-primary | #FDF7FF | #443A5F |
| color/primary-container | #D4C3FD | #574D72 |
| color/on-primary-container | #493C6C | #E9DEFF |

### Secondary
| Токен | Light | Dark |
|---|---|---|
| color/secondary | #625C71 | #CBC2DB |
| color/on-secondary | #FDF7FF | #433D51 |
| color/secondary-container | #E8DEF8 | #3E384C |
| color/on-secondary-container | #554F63 | #C4BBD4 |

### Tertiary
| Токен | Light | Dark |
|---|---|---|
| color/tertiary | #7B5270 | #FFCFEF |
| color/on-tertiary | #FFF7F9 | #69415F |
| color/tertiary-container | #F4BFE3 | #F4BFE3 |
| color/on-tertiary-container | #5F3956 | #5F3956 |

### Error
| Токен | Light | Dark |
|---|---|---|
| color/error | #A8364B | #F97386 |
| color/on-error | #FFF7F7 | #490013 |
| color/error-container | #F97386 | #871C34 |
| color/on-error-container | #6E0523 | #FF97A3 |

### Surface
| Токен | Light | Dark |
|---|---|---|
| color/surface | #FDF7FE | #0F0D12 |
| color/on-surface | #34313A | #EAE3EF |
| color/on-surface-variant | #615D68 | #AEA9B4 |
| color/surface-dim | #DED8E4 | #0F0D12 |
| color/surface-bright | #FDF7FE | #2E2B34 |
| color/surface-container-lowest | #FFFFFF | #000000 |
| color/surface-container-low | #F8F1FA | #141218 |
| color/surface-container | #F2ECF5 | #1B181F |
| color/surface-container-high | #ECE6F0 | #211E26 |
| color/surface-container-highest | #E7E0EC | #27242D |

### Outline и инверсия
| Токен | Light | Dark |
|---|---|---|
| color/outline | #7D7983 | #78737E |
| color/outline-variant | #B5B0BB | #4A4650 |
| color/inverse-surface | #0F0D12 | #FDF7FE |
| color/inverse-on-surface | #A09BA1 | #575459 |
| color/inverse-primary | #D4C3FD | #645980 |
| color/scrim | #000000 | #000000 |
| color/shadow | #000000 | #000000 |


Правила:
- Текст и иконки на цветной подложке — всегда парный on-цвет: на primary — on-primary, на primary-container — on-primary-container, на surface-* — on-surface или on-surface-variant.
- Фон экрана — surface. Карточки и поднятые блоки отделяй тоном, а не тенью: surface-container-low → surface-container → surface-container-high по мере «подъёма».
- Главное действие экрана — primary (одно на экран). Выбранные и активные состояния — secondary-container. Яркие акценты, бейджи, иллюстративные блоки — tertiary / tertiary-container.
- Разделители и обводки полей — outline-variant; обводка кнопки Outlined — outline-variant, фокус — primary.
- Состояния (слой поверх элемента цветом его on-цвета): hover 8 %, focus 10 %, pressed 10 %, drag 16 %. Disabled: контент on-surface 38 %, подложка on-surface 12 %.

## Форма (скругления)
shape/none 0 · shape/extra-small 4 · shape/small 8 · shape/medium 12 · shape/large 16 · shape/large-increased 20 · shape/extra-large 28 · shape/extra-large-increased 32 · shape/extra-extra-large 48 · shape/full — полностью круглое.

Expressive смешивает формы: круглые кнопки рядом с квадратными, крупные скругления у шапок и hero-карточек (extra-large и больше). При нажатии кнопка «сжимает» скругление на шаг (full → small у малых, large → medium у средних).

## Тени
Почти всё — тоном поверхности. Тень только у плавающих элементов:
- Level 1 (карточка Elevated, меню): 0 1 2 0 rgba(0,0,0,.30) + 0 1 3 1 rgba(0,0,0,.15)
- Level 3 (FAB, плавающие панели): 0 1 3 0 rgba(0,0,0,.30) + 0 4 8 3 rgba(0,0,0,.15)

## Компоненты
**Кнопки** (Filled — primary, Tonal — secondary-container, Outlined, Text):
| Размер | Высота | Поля по бокам | Иконка | Отступ иконка–текст | Скругление round / square |
|---|---|---|---|---|---|
| XS | 32 | 16 | 20 | 8 | full / 12 |
| S (по умолчанию) | 40 | 16 | 20 | 8 | full / 12 |
| M | 56 | 24 | 24 | 8 | full / 16 |
| L | 96 | 48 | 32 | 12 | full / 28 |
Текст: XS и S — Label Large; M — Title Medium; L — Headline Small. Главная кнопка внизу экрана — M во всю ширину (минус поля 16).

**FAB:** 56 × 56, скругление 16; Medium FAB 80 × 80, скругление 20; Large FAB 96 × 96, скругление 28. Цвет — primary-container, иконка on-primary-container. Отступ от краёв 16.

**Top app bar:** высота 64, поля 16 (иконка-кнопка 48 у краёв), заголовок Title Large. Крупная шапка для главных экранов: заголовок Headline Medium Emphasized под строкой с иконками, общая высота ~112–152.

**Navigation bar (низ, Compact):** высота 64–80, 3–5 пунктов, иконки 24, подпись Label Medium. Активный пункт — индикатор-пилюля (скругление full) цвета secondary-container, иконка on-secondary-container. Фон — surface-container.

**Карточки:** скругление 12 (hero-карточки 28), внутренние поля 16, отступ между карточками 8–12. Filled — surface-container-highest, Elevated — surface-container-low + Level 1, Outlined — surface + обводка outline-variant.

**Список:** пункт 56 (одна строка) / 72 (две) / 88 (три), поля 16, ведущий элемент 24 (иконка) или 40 (аватар), отступ до текста 16. Заголовок — Body Large, вторая строка — Body Medium on-surface-variant.

**Поля ввода:** высота 56, поля 16, текст Body Large, подпись Body Small. Filled — фон surface-container-highest, скругление 4 только сверху, нижняя линия on-surface-variant. Outlined — обводка outline, скругление 4.

**Чипы:** высота 32, скругление 8, поля 16 (12 при иконке), текст Label Large. Выбранный — secondary-container.

**Bottom sheet:** скругление 28 сверху, ручка 32 × 4 (on-surface-variant 40 %), поля 24, фон surface-container-low.

**Диалог:** скругление 28, поля 24, ширина 280–560, заголовок Headline Small, текст Body Medium, кнопки Text справа.

**Иконки:** Material Symbols Rounded, 24, вес 400.

## Характер Expressive
- Смелая иерархия: один крупный Emphasized-заголовок или цифра на экран, остальное спокойнее.
- Цвет — со смыслом: акцентные контейнеры (primary-, tertiary-container) для главного, нейтральные поверхности для остального.
- Разные формы и размеры рядом: крупная кнопка M/L рядом с маленькими, круглые и квадратные элементы.
- Много воздуха: секции через 24–32, не забивай экран.
- Не больше одного главного действия на экран.
