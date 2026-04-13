# Dark Phosphor Redesign — Design Spec

**Date:** 2026-04-13
**Status:** Approved, ready for implementation plan
**Scope:** Visual redesign of the entire portfolio site. Content, routes, and IA are untouched.

## Aesthetic Thesis

A restrained dark-phosphor portfolio where the voice lives in typography and a single accent color, not in terminal-chrome decoration.

The "hackerman" feeling comes from four disciplined choices:
1. Near-black background with a faint green undertone.
2. Monospace display headlines (JetBrains Mono) contrasted with a clean sans body (Geist Sans).
3. One accent color — phosphor green — used sparingly for eyebrows, CTAs, and status marks.
4. A consistent `//` prefix on every section eyebrow as a signature mark.

Everything else — layout, whitespace, rhythm — stays grown-up and readable. This is Level 1 ("restrained"), not Level 2 or 3: no scanline overlays, no terminal window chrome, no boot sequences, no ASCII dividers, no keyboard-shortcut nav, no typing animations.

## Design Tokens

Defined as CSS custom properties in `app/globals.css` and consumed via Tailwind arbitrary-value syntax (e.g. `bg-[var(--bg)]`). No `tailwind.config` changes.

### Color

| Token | Value | Role |
|---|---|---|
| `--bg` | `#080a09` | Page background. Near-black with faint green undertone. |
| `--bg-raised` | `#0f1210` | Card background. One notch lighter than `--bg`. |
| `--fg` | `#eef1ea` | Primary text: headlines, CTAs on dark. |
| `--fg-muted` | `#b4bab0` | Body text, descriptions. |
| `--fg-dim` | `#6b7268` | Eyebrows, captions, metadata, `//` prefix. |
| `--accent` | `#8db580` | Phosphor green. The only color. Used sparingly. |
| `--accent-dim` | `#4a5a46` | Accent borders, inactive states, code color. |
| `--rule` | `#1e2620` | Hairline borders and dividers. |

Contrast check: `--fg-muted` on `--bg` ≈ 11.5:1 (AAA). `--accent` on `--bg` ≈ 9:1 (AAA). No accessibility concerns.

### Typography

| Token | Value | Role |
|---|---|---|
| `--font-display` | JetBrains Mono (via `next/font/google`) | Headlines, eyebrows, CTAs, numerals, inline code. Replaces the current Geist Mono. |
| `--font-body` | Geist Sans (already loaded) | Paragraphs, descriptions, long-form content. |

The existing `Geist_Mono` import in `app/layout.tsx` is removed and replaced with `JetBrains_Mono`. One mono font, not two.

- Headlines: mono, weight 500, negative tracking `-0.005em`, tight leading (1.2–1.25).
- Body: sans, weight 400, line-height 1.65, max-width ~640px for reading flow.
- Eyebrows: mono, 10px, uppercase, letter-spacing 0.18em.

### Accent Discipline (important)

Green is used ONLY for:
- Eyebrow accent label (after the `//` dim prefix)
- Primary CTA background
- Link underlines and inline links
- Status pill for "IN DEVELOPMENT"
- Small active-state markers and hover borders

Green is NEVER used for:
- Body paragraph text
- Large display headlines
- Decorative fills

Rule of thumb: if green appears more than once or twice per visible viewport, pull it back.

## Component Inventory

Each component is used across every page and defined by its class pattern, not a React abstraction (see Implementation Strategy below).

1. **Eyebrow** — `// SECTION NAME`. The `//` is `--accent-dim`, the label is `--accent`. Mono 10px, uppercase, letter-spacing 0.18em. Sits above every section headline.
2. **Section headline** — mono, 26–40px depending on depth, `--fg`, tight leading, negative tracking.
3. **Body paragraph** — sans, 15–17px, `--fg-muted`, line-height 1.65, max-width ~640px.
4. **Primary CTA** — solid `--accent` background, `--bg` text, mono uppercase 11px, square corners, no border-radius.
5. **Ghost CTA** — transparent background, `--accent` text, 1px `--accent-dim` border.
6. **Divider** — 1px `--rule` horizontal line between sections. No ornament.
7. **Status pill** — mono 9px, 1px border, square corners. Variants:
   - `IN DEVELOPMENT`: `--accent` border and text.
   - `STRATEGY EXERCISE`: `--fg-dim` border and muted text.
8. **Card** — `--bg-raised` background, 1px `--rule` border, square corners. Hover: border lifts to `--accent-dim`. No shadows.
9. **Inline code / filename** — mono, `--accent-dim` color, no background fill.
10. **Pull-quote (case-study interior only)** — 3px `--accent` left border, body copy in sans, italic optional.

## Page-Level Treatments

### Home (`app/page.js`)

- **Hero.** Eyebrow `// TANISHK THORAT`. Mono headline broken across 2–3 lines. Sans lede paragraph at ~640px. Primary CTA (`see projects`) + ghost CTA (`linkedin`). No image, no illustration — typographic restraint *is* the hero.
- **Case-study cards.** Keep the existing split layout (copy left, screenshot right). Square corners, `--bg-raised` background, `--rule` border, eyebrow with `//` prefix, "Read case study →" in `--accent`. Screenshots stay unmodified — they are one of the strongest assets on the page and the light-on-dark contrast is intentional framing ("a monitor glowing in a dark room"). Add a 1px `--rule` border and a faint `--accent-dim` outer glow on hover.
- **About.** Eyebrow, headline, sans body, two CTAs (LinkedIn primary, GitHub ghost). No flourish.
- **Footer.** Single line, mono, `--fg-dim`, left-aligned.

### Case-study pages (`app/case-studies/*/page.*`)

- Same tokens and components as home.
- Hero gains a metadata row under the headline: `STATUS · STACK · TIMELINE`, mono, `--fg-dim`, separated by middle dots.
- Body flows at max-width 640px.
- Screenshots float full-width with `--rule` borders.
- Pull-quotes use the `--accent` left border treatment.
- PRD links become primary CTAs at the bottom of the page.

### PRD pages (`app/prds/*/page.*`)

- Dense long-form treatment.
- Body column constrained to 640px.
- H2/H3 in mono, body in sans.
- `--accent` reserved for inline links only (no green headlines).
- Code blocks (if present): `--bg-raised` background, 1px `--accent-dim` border, mono text in `--fg-muted`.

### Strategic-synthesis-engine case study

- Identical treatment to the other two case studies.
- Preserves the existing `STRATEGY EXERCISE · FICTIONAL CLIENT` status pill (in the muted variant).

## Scope — Files Touched

1. `app/globals.css` — add CSS custom properties, set base `html`/`body` bg and font color, register fonts.
2. `app/layout.tsx` — register JetBrains Mono variable via `next/font/google`, update `<html>` className.
3. `app/page.js` — rewrite inline classes for hero, case-study cards, about, footer.
4. `app/case-studies/page.js` — index page (if present) restyled.
5. `app/case-studies/ai-research-platform/page.*` — restyled.
6. `app/case-studies/trading-platform/page.*` — restyled.
7. `app/case-studies/strategic-synthesis-engine/page.*` — restyled.
8. `app/prds/ai-research-platform/page.*` — restyled.
9. `app/prds/trading-platform/page.*` — restyled.
10. `app/prds/strategic-synthesis-engine/page.*` — restyled.

## Implementation Strategy

- **Tokens via CSS variables, not Tailwind config.** CSS custom properties in `globals.css` consumed via arbitrary-value syntax (`bg-[var(--bg)]`, `text-[var(--fg-muted)]`). Keeps the footprint tiny and avoids fighting Tailwind v4's config model.
- **No React component extraction in this pass.** Classes stay inline. Extract a local component in `app/_components/` only if the same combination repeats 4 or more times (eyebrow, status pill are the likely candidates). Otherwise leave it alone — the codebase is small enough that premature componentization costs more than it saves.
- **Ordering.**
  1. Tokens and globals.
  2. Home page.
  3. First case study page (ai-research-platform — full treatment).
  4. **Review checkpoint.** Confirm the treatment works against real screenshots and architecture diagrams before replicating.
  5. Remaining case studies.
  6. PRD pages last.
- **Verification.** After each page, start `next dev` and walk the page in a browser. Run typecheck and build at the end.

## Risks & Open Questions

1. **Screenshots on dark background.** Existing screenshots were captured against a light UI. On the dark theme they read as bright windows. The intent is to embrace this ("monitor glowing in a dark room") with a 1px `--rule` border and faint `--accent-dim` outer glow. If review shows the effect is jarring rather than deliberate, the fallbacks are: (a) subtle dark gradient overlay on the edges, (b) re-capture screenshots against a dark UI. **Decision deferred to the first case-study review checkpoint.**
2. **Architecture diagrams from the recent case-study expansion.** These may have been drawn on white. Same review checkpoint applies: invert, re-export, or leave depending on how they land.
3. **Tailwind v4 arbitrary-value noise.** Class lists will be slightly longer than the current gray-based utility approach. Acceptable cost to avoid config file churn.

## Out of Scope

- New pages, new content, new case studies, new copywriting.
- Information-architecture changes. Routes stay as they are.
- Dark-mode toggle. The site is dark. One mode, fully committed.
- Animations, transitions, micro-interactions beyond simple hover states on cards and links.
- Component-library abstraction or design-system package.
- Mobile-specific redesign. Existing responsive classes are carried forward with token substitutions.

## Definition of Done

- All ten files listed in Scope have been restyled using the token system.
- Every page is visually walked in a dev-server browser session before being marked complete.
- Typecheck and production build both pass.
- The review checkpoint after the first case study has been completed and any screenshot/diagram decisions have been made and applied.
- No content, routes, or metadata have changed.
