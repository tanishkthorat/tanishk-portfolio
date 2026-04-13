# Dark Phosphor Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle every page of the Next.js portfolio to a restrained dark-phosphor aesthetic — dark near-black background, JetBrains Mono display headlines, Geist Sans body, single phosphor-green accent color — without touching content, routes, or metadata.

**Architecture:** CSS custom properties defined once in `app/globals.css`, consumed via Tailwind v4 arbitrary-value syntax (`bg-[var(--bg)]`) inline in JSX. No `tailwind.config` changes, no React component library extraction, no new dependencies beyond `JetBrains Mono` via `next/font/google`. Existing Geist Mono import is replaced, Geist Sans stays.

**Tech Stack:** Next.js 16.2.3, React 19, Tailwind CSS v4, `next/font/google` (Geist Sans, JetBrains Mono), TypeScript (for layout only; pages are `.js`).

**Verification approach:** This is a pure visual redesign. No unit tests exist in the repo and none should be added. Verification for each page is (1) `next dev` browser walkthrough of the target page and (2) `next build` at the end of the plan. Each task ends with a commit once its page renders correctly in the browser.

**Design reference:** See `docs/superpowers/specs/2026-04-13-dark-phosphor-redesign-design.md` for the full spec, token rationale, and accent-discipline rules. This plan assumes the spec as truth.

---

## Shared Reference: Class Patterns

These class strings recur across tasks. Copy them verbatim so pages stay consistent. Every class that references a token uses Tailwind v4 arbitrary-value syntax.

**Page shell**
```
min-h-screen bg-[var(--bg)] text-[var(--fg-muted)] font-sans
```

**Section container (constrained column)**
```
max-w-4xl mx-auto px-6
```

**Eyebrow** (`//` in dim, label in accent)
```jsx
<p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3">
  <span className="text-[var(--accent-dim)]">// </span>
  <span className="text-[var(--accent)]">SECTION NAME</span>
</p>
```

**Section headline**
```
font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mb-6
```

**Hero headline** (larger)
```
font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6
```

**Body paragraph**
```
font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]
```

**Primary CTA**
```
inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors
```

**Ghost CTA**
```
inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[9px] border border-[var(--accent-dim)] text-[var(--accent)] hover:border-[var(--accent)] transition-colors
```

**Divider**
```jsx
<div className="border-t border-[var(--rule)] my-16" />
```

**Card** (standard)
```
block bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors
```
(note: no `rounded-*` — square corners)

**Status pill — "IN DEVELOPMENT"**
```jsx
<span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">
  IN DEVELOPMENT
</span>
```

**Status pill — "STRATEGY EXERCISE"**
```jsx
<span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--fg-dim)] text-[var(--fg-dim)]">
  FICTIONAL CLIENT · STRATEGY EXERCISE
</span>
```

**Inline link (in body)**
```
text-[var(--accent)] underline decoration-[var(--accent-dim)] underline-offset-4 hover:decoration-[var(--accent)]
```

**Pull-quote (case-study interior)**
```jsx
<blockquote className="border-l-[3px] border-[var(--accent)] pl-5 my-8 text-[var(--fg)] font-sans text-lg leading-[1.6]">
  …
</blockquote>
```

**Code block**
```
bg-[var(--bg-raised)] border border-[var(--accent-dim)] p-4 font-mono text-[13px] text-[var(--fg-muted)] overflow-x-auto
```

---

## Task 1: Design tokens, global styles, and fonts

**Files:**
- Modify: `app/globals.css` (full rewrite of the file body — currently 27 lines)
- Modify: `app/layout.tsx` (swap font import, update className)

- [ ] **Step 1: Rewrite `app/globals.css`**

Replace the entire contents of `app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --bg: #080a09;
  --bg-raised: #0f1210;
  --fg: #eef1ea;
  --fg-muted: #b4bab0;
  --fg-dim: #6b7268;
  --accent: #8db580;
  --accent-dim: #4a5a46;
  --rule: #1e2620;
}

@theme inline {
  --color-background: var(--bg);
  --color-foreground: var(--fg);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-jetbrains-mono);
}

html, body {
  background: var(--bg);
  color: var(--fg-muted);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: var(--accent);
  color: var(--bg);
}
```

Key changes versus the current file:
- Removes the old `--background`/`--foreground` tokens and the `prefers-color-scheme` block (the site is dark only).
- Adds the eight tokens from the spec.
- Maps `--font-mono` to a new `--font-jetbrains-mono` variable that Task 1 Step 2 will register.
- Adds antialiasing and a green selection color.

- [ ] **Step 2: Update `app/layout.tsx` to swap Geist Mono for JetBrains Mono**

Replace the full contents of `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanishk Thorat — AI Product Design",
  description: "Enterprise AI product design, from the inside. Case study, PRD, and 12-week delivery roadmap for a regulated biotech document intelligence system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg-muted)]">{children}</body>
    </html>
  );
}
```

Key changes:
- `Geist_Mono` import replaced with `JetBrains_Mono`.
- New font variable name `--font-jetbrains-mono` matches the reference in `globals.css`.
- `<body>` gets explicit `bg-[var(--bg)] text-[var(--fg-muted)]` as a safety net.
- Metadata is preserved verbatim.

- [ ] **Step 3: Verify dev server starts and fonts load**

Run: `npm run dev` (in `d:/Developments/tanishk-portfolio`)

Open `http://localhost:3000` in a browser.

Expected: page loads without console errors. The home page will currently look broken because it still uses the old light-mode utility classes — that's fine, this task only verifies tokens and fonts load. Check browser devtools → Network → Fonts → confirm two font families are loaded (Geist, JetBrains Mono). Check devtools → Elements → Computed → confirm `--bg` = `#080a09` on the `:root` element.

Stop the dev server (Ctrl+C) before committing.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "Add dark-phosphor tokens and swap to JetBrains Mono"
```

---

## Task 2: Home page (`app/page.js`)

**Files:**
- Modify: `app/page.js` (full rewrite — currently 97 lines)

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/page.js`. You need to preserve every piece of copy, every `href`, every `src`, and every `alt` exactly. Only classes change.

- [ ] **Step 2: Rewrite `app/page.js` with dark-phosphor classes**

Replace the full file with:

```jsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4">
          <span className="text-[var(--accent-dim)]">// </span>
          <span className="text-[var(--accent)]">TANISHK THORAT</span>
        </p>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.01em] leading-[1.15] text-[var(--fg)] mb-6">Hi, I&apos;m Tanishk.</h1>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]">
          Senior consultant at EY working on Fortune 500 tech transformation programs, which mostly means I get paid to figure out where big companies&apos; tech rollouts are going to break. I also love building things, especially AI projects, so in the evenings I build my own to learn what works and what breaks (mostly the second one..). Some of these are running daily. Others are a work in progress.
        </p>
        <div className="mt-10 flex gap-3 flex-wrap">
          <a href="#case-studies" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors">See the projects</a>
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[9px] border border-[var(--accent-dim)] text-[var(--accent)] hover:border-[var(--accent)] transition-colors">LinkedIn</a>
        </div>
      </section>

      {/* Three case study cards */}
      <section id="case-studies" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--rule)]">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3">
          <span className="text-[var(--accent-dim)]">// </span>
          <span className="text-[var(--accent)]">CASE STUDIES</span>
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mb-12">What I&apos;ve built</h2>

        <div className="space-y-6">

          <a href="/case-studies/ai-research-platform" className="block bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 01</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h3 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">AI Research Platform</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-5">A self-hosted research tool I built to learn where private RAG systems actually break. Dual-GPU inference, a multi-stage pipeline, and a strict no-fabrication discipline. One user: me, daily.</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">Read case study →</span>
              </div>
              <div className="md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-[var(--rule)] bg-[var(--bg)]">
                <img src="/screenshots/research-chat.png" alt="Research platform live query interface" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </a>

          <a href="/case-studies/trading-platform" className="block bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 02</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--accent)] text-[var(--accent)]">IN ACTIVE DEVELOPMENT</span>
                </div>
                <h3 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">AI Powered Trading Platform</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)] mb-5">A swing trading research system built on top of the AI Research Platform. Natural-language strategy compilation, deterministic execution, regime-aware risk controls. One user: me. No live trading.</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">Read case study →</span>
              </div>
              <div className="md:w-80 md:flex-shrink-0 border-t md:border-t-0 md:border-l border-[var(--rule)] bg-[var(--bg)]">
                <img src="/screenshots/trading-strategies.png" alt="Trading platform strategies tab with backtest results" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </a>

          <a href="/case-studies/strategic-synthesis-engine" className="block p-8 bg-[var(--bg-raised)] border border-[var(--rule)] hover:border-[var(--accent-dim)] transition-colors">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">CASE STUDY 03</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-[3px] border border-[var(--fg-dim)] text-[var(--fg-dim)]">FICTIONAL CLIENT · STRATEGY EXERCISE</span>
                </div>
                <h3 className="font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-3">Strategic Synthesis Engine</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-[var(--fg-muted)]">A 12-week deployment plan for a fictional regulated biotech wrestling with 50,000 documents and a legal team that does not trust AI.</p>
              </div>
              <span className="text-[var(--accent-dim)] text-2xl mt-1">→</span>
            </div>
          </a>

        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--rule)]">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3">
          <span className="text-[var(--accent-dim)]">// </span>
          <span className="text-[var(--accent)]">ABOUT</span>
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-medium tracking-[-0.005em] leading-[1.2] text-[var(--fg)] mb-8">Who I am</h2>
        <div className="space-y-4 font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]">
          <p>Three-plus years on Fortune 500 transformation programs: SAP S/4HANA implementations, PMO leadership, change management, stakeholder orchestration across hundred-person programs.</p>
          <p>Master&apos;s in Business Analytics from Fordham. Bachelor&apos;s from Mumbai. Based in NYC.</p>
          <p>Looking for product roles at the intersection of enterprise and AI. If any of this resonates, I&apos;d love to talk.</p>
        </div>
        <div className="mt-10 flex gap-3 flex-wrap">
          <a href="https://www.linkedin.com/in/tanishkthorat" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[10px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--fg)] transition-colors">LinkedIn</a>
          <a href="https://github.com/tanishkthorat" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-[9px] border border-[var(--accent-dim)] text-[var(--accent)] hover:border-[var(--accent)] transition-colors">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[var(--rule)] font-mono text-[11px] text-[var(--fg-dim)]">
        <p>Built with Next.js. Deployed on Vercel. © Tanishk Thorat 2026.</p>
      </footer>
    </main>
  );
}
```

Preservation checklist — before moving on, confirm against the original:
- All four `href` values are unchanged.
- All three case-study card titles, statuses, and descriptions are unchanged.
- Both `<img>` `src` and `alt` values are unchanged.
- About copy is unchanged across all three paragraphs.
- Footer text is unchanged.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev`

Open `http://localhost:3000`. Walk the page top to bottom:
1. Hero: green `// TANISHK THORAT` eyebrow sits above the mono headline. Solid-green "See the projects" CTA and outlined "LinkedIn" CTA render with square corners.
2. Case studies: all three cards have `--bg-raised` background and square hairline borders. Screenshots render on the right side of the first two (they will look bright against the dark card — this is expected and reviewed in Task 4). Hovering a card changes its border to `--accent-dim`.
3. Status pills: "IN ACTIVE DEVELOPMENT" is green-on-transparent with a green border. "FICTIONAL CLIENT · STRATEGY EXERCISE" is dim-on-transparent with a dim border.
4. About: green eyebrow, mono headline, sans body paragraphs, two CTAs matching the hero.
5. Footer: mono text, dim color, hairline top border.

Check the browser devtools console — no errors or warnings about missing CSS variables.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/page.js
git commit -m "Restyle home page with dark-phosphor tokens"
```

---

## Task 3: Case-studies index page (`app/case-studies/page.js`)

**Files:**
- Modify: `app/case-studies/page.js` (81 lines)

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/case-studies/page.js`. Note every section: hero/header, any list of case studies, any navigation back to home, and the page shell wrapper.

- [ ] **Step 2: Apply the dark-phosphor treatment using the shared class patterns**

Use the class patterns from the "Shared Reference" section at the top of this plan. The structure to apply:

- Outer `<main>`: `min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]`
- Any "back to home" link: use the **Inline link** pattern.
- Page hero: eyebrow (`// CASE STUDIES`), section headline, body paragraph with `max-w-[640px]`.
- Any case-study list items: use the **Card** pattern with mono card titles and sans descriptions. If the original file uses the same split layout as the home page, copy the card markup from Task 2 verbatim (same card classes, same eyebrow/title/description classes).
- Any footer or back-link: mono, `text-[var(--fg-dim)]`.

**Do not invent content.** If the original has three cards, the new one has three cards with the exact same titles, descriptions, hrefs, and image src/alt values. If the original omits a screenshot, the new one omits a screenshot.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev`

Open `http://localhost:3000/case-studies`. Confirm:
- Page shell is dark.
- Eyebrow, headline, and body render with the token colors.
- Any cards match the home-page card treatment from Task 2.
- No console errors.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/case-studies/page.js
git commit -m "Restyle case-studies index with dark-phosphor tokens"
```

---

## Task 4: First case study — `ai-research-platform` (review checkpoint)

**Files:**
- Modify: `app/case-studies/ai-research-platform/page.js` (422 lines)

This is the largest and most complex case study page. It includes screenshots and architecture diagrams and will surface every edge case the rest of the plan needs to handle. **Do not proceed to Task 5 until this task has been reviewed.**

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/case-studies/ai-research-platform/page.js`. The file is 422 lines — read it in one call (set `limit` high enough or rely on the default). Before editing, enumerate mentally:
- The hero block (headline, metadata row, any status pill).
- Every section heading (`<h2>`, `<h3>`) and their associated body copy.
- Every `<img>` with its `src` and `alt`.
- Every architecture diagram (inline SVG or component).
- Every pull-quote or callout.
- Every link to the PRD or back to the home page.
- The page footer, if any.

- [ ] **Step 2: Apply the dark-phosphor treatment**

Use the class patterns from the "Shared Reference" section. Treatment rules:

- **Page shell.** `<main>` gets `min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]`. Any outer wrapper div that previously had `bg-white` is replaced.
- **Hero.** Eyebrow with `//` prefix (`// CASE STUDY 01 / AI RESEARCH PLATFORM` or similar — match the original structure). Hero headline with the hero class pattern. Directly under the headline, add a metadata row: `font-mono text-[11px] text-[var(--fg-dim)] tracking-[0.1em] uppercase` with pieces separated by ` · ` (middle dot + space). Pull the metadata from whatever the current hero shows (status, stack, timeline). If the current file does not have metadata, do not invent — skip the row.
- **Body paragraphs.** Every prose `<p>` gets `font-sans text-base md:text-[17px] leading-[1.65] text-[var(--fg-muted)] max-w-[640px]`. Wrap the main prose column in a `max-w-[640px] mx-auto` container if the original had the content in a wide container.
- **Section headings.** `<h2>` uses the **Section headline** pattern. `<h3>` uses `font-mono text-xl font-medium tracking-[-0.005em] text-[var(--fg)] mb-4 mt-10`.
- **Inline links.** Use the **Inline link** pattern for any in-body link.
- **Pull-quotes.** Replace any existing blockquote with the **Pull-quote** pattern.
- **Code blocks.** Replace any existing `<pre>`/`<code>` with the **Code block** pattern.
- **Images.** Wrap every `<img>` in `<figure className="my-10 border border-[var(--rule)]">` and add a caption below if the original had one: `<figcaption className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)] p-3 border-t border-[var(--rule)] bg-[var(--bg-raised)]">…</figcaption>`.
- **Architecture diagrams.** See Step 3 — these get evaluated separately.
- **Status pill.** Use the "IN DEVELOPMENT" pattern.
- **PRD link at bottom.** Promote to a primary CTA (solid green).
- **Back link at top (if present).** Mono, `text-[var(--fg-dim)]`, small, with a `←` glyph.

**Preservation rule, repeated:** do not change any copy, any `href`, any `src`, or any `alt`. Only classes and small structural wrappers (`<figure>`) change.

- [ ] **Step 3: Evaluate screenshots and architecture diagrams against the dark background**

Run: `npm run dev` and open `http://localhost:3000/case-studies/ai-research-platform`.

Walk the page and look specifically at:
1. **Screenshots.** They were captured against a light UI. On the dark theme they render as bright rectangles. The intent (per the spec) is to embrace this as "monitor glowing in a dark room" framing — the `<figure>` border and optional caption are the frame.
2. **Architecture diagrams.** If any diagram was drawn with a white background or dark strokes, it will either work (if it has its own bounded canvas) or clash (if it bleeds).

Decide, for each image and diagram, one of three outcomes:
- **(A) Keep as-is with frame.** Bright rectangles that look intentional. Most screenshots fall here.
- **(B) Add subtle dark overlay.** If a screenshot feels too jarringly bright, wrap the `<img>` in a container with `opacity-90` or a CSS `filter: brightness(0.92)`. Acceptable only if (A) clearly fails.
- **(C) Mark for re-capture / re-export.** If a diagram is unreadable or broken against the dark background, note it in the commit message and leave a `{/* TODO: redraw for dark background — see spec section "Risks" */}` comment next to the asset. Move on. Do not block the plan on re-drawing assets.

**Document your decisions.** Before committing, add a short summary as a comment at the top of the file — or, if you dispatched this task as a subagent, include the summary in your final report. This summary feeds Tasks 5 and 6.

Stop the dev server before committing.

- [ ] **Step 4: Review checkpoint**

**Stop here.** Before moving to Task 5, surface the following back to the human reviewer:
- A screenshot or description of how the hero, an in-body section, and one screenshot render.
- Your decision for each image and diagram (A/B/C from Step 3).
- Any content you were unsure whether to preserve or change (there should be none, but surface it anyway).

Wait for the reviewer's go-ahead before proceeding. This checkpoint exists because Tasks 5 and 6 will replicate this treatment, and catching issues here avoids three-page rework.

- [ ] **Step 5: Commit**

```bash
git add app/case-studies/ai-research-platform/page.js
git commit -m "Restyle ai-research-platform case study with dark-phosphor tokens"
```

---

## Task 5: Second case study — `trading-platform`

**Files:**
- Modify: `app/case-studies/trading-platform/page.js` (460 lines)

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/case-studies/trading-platform/page.js`.

- [ ] **Step 2: Apply the dark-phosphor treatment**

Follow the same treatment rules as Task 4 Step 2, verbatim. Reuse the same class patterns. The page structure should be identical in voice to the ai-research-platform case study after Task 4.

Apply the image/diagram decisions you locked in during Task 4 Step 3. Do not re-evaluate per image unless you hit a new kind of asset not present in ai-research-platform.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev` and open `http://localhost:3000/case-studies/trading-platform`. Confirm:
- Hero, body, section headings, images, and PRD link all match the ai-research-platform treatment.
- No console errors.
- Hover states on any in-body links show the `--accent` underline.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/case-studies/trading-platform/page.js
git commit -m "Restyle trading-platform case study with dark-phosphor tokens"
```

---

## Task 6: Third case study — `strategic-synthesis-engine`

**Files:**
- Modify: `app/case-studies/strategic-synthesis-engine/page.js` (216 lines)

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/case-studies/strategic-synthesis-engine/page.js`.

- [ ] **Step 2: Apply the dark-phosphor treatment**

Follow the same treatment rules as Task 4 Step 2. One difference: the status pill for this page is the **"STRATEGY EXERCISE"** variant (dim border, dim text), not "IN DEVELOPMENT". Use the `FICTIONAL CLIENT · STRATEGY EXERCISE` pill pattern from the Shared Reference.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev` and open `http://localhost:3000/case-studies/strategic-synthesis-engine`. Confirm:
- Status pill is dim (not green).
- Everything else matches the other two case studies.
- No console errors.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/case-studies/strategic-synthesis-engine/page.js
git commit -m "Restyle strategic-synthesis-engine case study with dark-phosphor tokens"
```

---

## Task 7: PRD — `ai-research-platform`

**Files:**
- Modify: `app/prds/ai-research-platform/page.js` (208 lines)

PRDs are dense long-form. Treatment is slightly more conservative: sans body at 640px, green reserved for inline links only, no decorative use of green in headings.

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/prds/ai-research-platform/page.js`.

- [ ] **Step 2: Apply the PRD treatment**

Rules specific to PRDs:
- **Page shell.** Same as other pages: `min-h-screen bg-[var(--bg)] text-[var(--fg-muted)]`.
- **Hero.** Eyebrow `// PRD / AI RESEARCH PLATFORM` (or match the original wording), hero headline, metadata row if present, sans lede. A "← back to case study" mono link above the eyebrow.
- **Body column.** Wrap the main content in `<article className="max-w-[640px] mx-auto px-6 py-16">`. All paragraphs flow inside this container.
- **H2.** `font-mono text-2xl font-medium tracking-[-0.005em] text-[var(--fg)] mt-16 mb-6`. No green.
- **H3.** `font-mono text-lg font-medium text-[var(--fg)] mt-10 mb-4`. No green.
- **Body paragraphs.** `font-sans text-[16px] leading-[1.7] text-[var(--fg-muted)] mb-5`.
- **Lists.** `<ul>` and `<ol>` get `pl-6 my-5 space-y-2 text-[var(--fg-muted)]`. `<li>` stays default sans.
- **Inline links.** Use the **Inline link** pattern. This is the only green in the body.
- **Code blocks.** Use the **Code block** pattern from the Shared Reference.
- **Pull-quotes.** Use the **Pull-quote** pattern.
- **Tables** (if present). `<table>` gets `w-full border-collapse my-8 font-sans text-[14px]`. `<th>` gets `text-left font-mono uppercase tracking-[0.1em] text-[var(--fg-dim)] border-b border-[var(--rule)] p-3`. `<td>` gets `border-b border-[var(--rule)] p-3 text-[var(--fg-muted)]`.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev` and open `http://localhost:3000/prds/ai-research-platform`. Confirm:
- Body column is visually narrow (~640px) and centered.
- H2/H3 render as `--fg` (bright off-white), no green.
- Inline links render green with an underline.
- Code blocks have the `--bg-raised` background and accent-dim border.
- No console errors.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/prds/ai-research-platform/page.js
git commit -m "Restyle ai-research-platform PRD with dark-phosphor tokens"
```

---

## Task 8: PRD — `trading-platform`

**Files:**
- Modify: `app/prds/trading-platform/page.js` (279 lines)

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/prds/trading-platform/page.js`.

- [ ] **Step 2: Apply the PRD treatment**

Follow the same rules as Task 7 Step 2, verbatim. Same class patterns, same body-column width, same heading and link treatments.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev` and open `http://localhost:3000/prds/trading-platform`. Confirm the same checklist as Task 7 Step 3.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/prds/trading-platform/page.js
git commit -m "Restyle trading-platform PRD with dark-phosphor tokens"
```

---

## Task 9: PRD — `strategic-synthesis-engine`

**Files:**
- Modify: `app/prds/strategic-synthesis-engine/page.js` (521 lines)

This is the longest file in the repo. Expect more tables, more code blocks, and more section headings than the other PRDs. Take the time to read it fully before editing.

- [ ] **Step 1: Read the current file in full**

Use the Read tool on `app/prds/strategic-synthesis-engine/page.js`. Read it in one call.

- [ ] **Step 2: Apply the PRD treatment**

Follow the same rules as Task 7 Step 2. The table treatment from the PRD rules will likely apply here more than in the other PRDs — double-check every `<table>` gets the full treatment.

- [ ] **Step 3: Dev-server browser walkthrough**

Run: `npm run dev` and open `http://localhost:3000/prds/strategic-synthesis-engine`. Walk the full page. Confirm:
- Every section heading renders bright, not green.
- Every table has the mono uppercase header row and `--rule` borders.
- No console errors.
- Page scrolls without any visual gaps or broken backgrounds (bg should be continuous `--bg`).

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/prds/strategic-synthesis-engine/page.js
git commit -m "Restyle strategic-synthesis-engine PRD with dark-phosphor tokens"
```

---

## Task 10: Final verification — build, typecheck, full-site walk

**Files:** none modified.

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: exit code 0, no errors. Warnings about unused classes or image optimization are acceptable but note them. If the build fails:
- Read the error carefully.
- If it's a TypeScript error in `app/layout.tsx`, re-read Task 1 Step 2 and compare.
- If it's a missing-module error for `JetBrains_Mono`, confirm it was imported from `next/font/google`, not a standalone package.
- Fix the root cause. Do not bypass the error.

- [ ] **Step 2: Run linter**

Run: `npm run lint`

Expected: exit code 0 or warnings only. If there are errors introduced by the redesign, fix them.

- [ ] **Step 3: Full-site dev-server walk**

Run: `npm run dev`

Walk every route in order and confirm each one renders without console errors:
1. `http://localhost:3000/` — home
2. `http://localhost:3000/case-studies` — index
3. `http://localhost:3000/case-studies/ai-research-platform`
4. `http://localhost:3000/case-studies/trading-platform`
5. `http://localhost:3000/case-studies/strategic-synthesis-engine`
6. `http://localhost:3000/prds/ai-research-platform`
7. `http://localhost:3000/prds/trading-platform`
8. `http://localhost:3000/prds/strategic-synthesis-engine`

For each, verify:
- Page background is `--bg` end to end (no white flashes).
- Eyebrows all use the `//` prefix pattern.
- Typography is consistent (mono for headings, sans for body).
- Green is used sparingly — per viewport, count visible green elements. If any viewport shows more than three green things at once outside of status pills, something is off.

Navigate between pages using in-page links. Confirm all internal links work.

Stop the dev server.

- [ ] **Step 4: Final commit, if any fix-ups were needed**

If Steps 1–3 surfaced any issues and you made fixes, commit them:

```bash
git add .
git commit -m "Fix dark-phosphor redesign verification issues"
```

If nothing needed fixing, skip this step.

- [ ] **Step 5: Mark the redesign done**

The plan is complete when:
- `npm run build` passes.
- `npm run lint` passes (or warnings only).
- All eight routes render without console errors.
- Green is disciplined across every viewport.
- No content, routes, or metadata have changed relative to the pre-plan state.

---

## Out of Scope (do not do in this plan)

- Creating new pages, new case studies, new copywriting, or new routes.
- Information-architecture changes.
- Dark-mode toggle or a light-mode fallback.
- React component extraction beyond what's explicitly allowed in the spec (eyebrow and status pill, only if a pattern repeats 4+ times).
- Animated cursors, scanline overlays, boot sequences, typing effects, ASCII dividers, terminal window chrome, keyboard-shortcut navigation. Explicitly rejected during brainstorming.
- Redrawing architecture diagrams. Task 4 Step 3 allows marking them for later; the re-draw itself is out of scope.
- Mobile-specific redesign. Existing responsive classes are carried forward with token substitutions.
