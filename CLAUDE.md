# TrendX Landing

Next.js 14 (App Router) marketing site. Two pages — landing (`/[locale]`) and business (`/[locale]/business`) — with full Arabic/English bilingual support and RTL layout.

Static export (`output: "export"`). No backend.

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS 3** (no `tw-` prefix — standard Tailwind)
- **i18n via JSON dictionaries** (no library — `getDictionary(locale)` reads `src/lib/dictionaries/{ar,en}.json`)
- **Locale routing** via `[locale]` segment + `src/middleware.ts`

## Conventions

### i18n — always via dictionary

Every user-visible string lives in `src/lib/dictionaries/ar.json` and `src/lib/dictionaries/en.json`. Components receive strings as props from the page-level `getDictionary` call.

**Don't** hardcode strings in components. **Don't** use `title.includes("أنشئ")` tricks to detect language — pass explicit props.

When adding a new section:
1. Add the new key under both `ar.json` and `en.json` at matching paths
2. Type the props on the component
3. Spread `dict.{namespace}.{section}` into the component on the page

### Design tokens

Colors are defined in `tailwind.config.ts`. Use these instead of raw hex:

| Token | Use for |
|---|---|
| `bg-navy` / `text-navy` | Dark sections, headlines |
| `bg-green` / `text-green` | Primary brand accent, CTAs |
| `bg-green-light` / `text-green-light` | Tag pills, soft accents |
| `bg-ice` / `bg-ice-dark` | Light section backgrounds |
| `text-gray-{400,500,700}` | Body copy, captions |

### RTL handling

The `<html dir="rtl">` is set per locale in `[locale]/layout.tsx`. For per-element flips, prefer Tailwind's logical/`rtl:` utilities:

- `rtl:self-end ltr:self-start` for chat-bubble alignment
- `rtl:rounded-bl-[14px] ltr:rounded-bl-[4px]` for asymmetric corners
- Avoid `mr-*` / `ml-*` if both languages need to mirror — let direction-aware positioning handle it

### Shared components

Reach for these before building new wrappers:

- `Container` — max-width + horizontal padding
- `SectionHeader` — label + title + subtitle (`<FadeInSection>` → `<SectionHeader>` is the standard section opener)
- `SectionLabel` — the `✦` / `✨` pill
- `Button` — variants: `green`, `navy`, `white`, `outline`, `outline-white` (sizes: `default`, `sm`)
- `FadeInSection` — scroll-triggered fade-in wrapper

### File layout

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        Locale-aware <html dir>
│   │   ├── page.tsx          Landing page composition
│   │   └── business/page.tsx Business page composition
│   ├── icon.png              Favicon (Next.js auto-discovered)
│   └── globals.css
├── components/
│   ├── landing/      Sections used on the landing page
│   ├── business/     Sections used on the business page
│   ├── layout/       Navbar, Footer, TopBar, MobileMenu
│   └── shared/       Container, Button, SectionHeader, etc.
├── lib/
│   ├── i18n.ts                 getDictionary loader + Locale type
│   └── dictionaries/{ar,en}.json
├── middleware.ts     Locale detection / redirect
└── types/index.ts    Shared TS types (NavLink, ReportCard, …)
```

### Cross-page links

Links between landing (`/`) and business (`/business`) open in a new tab via `target="_blank" rel="noopener noreferrer"`. Same-page anchors (`#section`) and `mailto:` stay in the same tab. Brand logos in nav/footer are intentionally same-tab "go home."

### External images

External URLs in `<img src>` are fine because `next.config.mjs` sets `images.unoptimized: true`. But prefer downloading to `public/images/...` — external CDNs can have expired SSL or go down.

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # static export to ./out/
npm run lint
```

Use `--legacy-peer-deps` if `npm install` complains.
