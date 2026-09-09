# Portfolio → Next.js Conversion — Design

Date: 2026-09-09
Status: Approved (design), pending implementation plan

## Context

The site (`Vincent Mzee Mbindyo — Product Design Portfolio`) is currently a
hand-authored static site: 22 HTML files, plain CSS split by concern under
`assets/`, and a few small vanilla-JS files, deployed to GitHub Pages with no
build step. See the existing `README.md` and `github.md` for the current
inventory, design tokens, and interaction map.

## Goals

- Move the site to a real Next.js app, deployed on Vercel.
- Reduce duplication across the 8 case studies and 5 brand-identity pages by
  extracting shared, reusable components instead of copy-pasted markup.
- Lay a foundation that can grow dynamic features later (contact form
  backend, CMS-driven content, API routes) without another rewrite.
- Improve SEO/meta hygiene (per-page metadata, sitemap, robots) — a gap the
  current README explicitly calls out.
- Preserve the existing visual design and interaction behavior exactly, and
  keep the site fully responsive across the same three breakpoints it uses
  today.

## Non-goals

- No redesign. Colors, type, spacing, motion, and layout stay as they are.
- No CMS integration in this pass — the data model should be friendly to one
  later, not implement one now.
- No rewrite of the design system as Tailwind/CSS Modules — CSS is ported
  as-is (see Styling below).
- No automated test suite is being added as part of this conversion (none
  exists today); verification is manual visual/behavioral QA (see
  Verification).

## Stack

- **Next.js 15**, App Router.
- **JavaScript** (no TypeScript), matching the current codebase.
- **Plain global CSS**, ported from `assets/*.css` largely unchanged.
- **npm** as the package manager.
- Deployed on **Vercel**.

## Cleanup (applied during conversion)

- `Home.html` (identical duplicate of `index.html`) is dropped — the site
  gets a single home route.
- `Fortune eCash.html` (superseded v1) is dropped — only the v2 case study
  is ported.
- `uploads/` (source material, not referenced by any page) is not migrated
  into the app.

## Routing

Grouped by kind, kebab-case, no spaces in URLs:

```
/                          Home (was index.html / Home.html)
/projects                  All projects grid + category filter
/concepts                  Motion/micro-interaction showreel
/resume                    Resume page
/work/pikabox
/work/fortune-ecash        (v2 only)
/work/agriflow
/work/advenio
/work/mlearn
/work/toedur
/work/simplia
/work/chii-neema
/work/tickety
/brand/amarachi
/brand/everything-riri
/brand/kindhearts
/brand/daftari-kenya
/brand/brea-cakes
/posterfolio
/logofolio
```

## Project structure

```
app/
  layout.js              # <html>, next/font setup, global CSS imports,
                          # shared <Nav>/<Footer>
  globals.css             # imports the ported CSS files, same cascade
                          # order as the current <link> tags
  page.js                  → /
  projects/page.js         → /projects
  concepts/page.js         → /concepts
  resume/page.js            → /resume
  work/
    pikabox/page.js         → /work/pikabox
    fortune-ecash/page.js   → /work/fortune-ecash
    agriflow/page.js, advenio/page.js, mlearn/page.js,
    toedur/page.js, simplia/page.js, chii-neema/page.js,
    tickety/page.js
  brand/
    amarachi/page.js, everything-riri/page.js, kindhearts/page.js,
    daftari-kenya/page.js, brea-cakes/page.js
  posterfolio/page.js      → /posterfolio
  logofolio/page.js        → /logofolio
  sitemap.js
  robots.js

components/
  Nav.js
  MobileNavDrawer.js        # client: hamburger drawer, useState
  Footer.js
  Reveal.js / useScrollReveal.js   # client: IntersectionObserver,
                                    # replaces motion.js, same stagger
  Modal.js                  # client: info/research card modal, replaces
                             # interactions-lib.js + window.__MODALS
  DeviceChip.js              # client: device readout, replaces
                             # window.__DEVICE_COPY
  ProcessRail.js              # client: clickable progress rail
  DesignSystemTabs.js          # client: tab switcher + light/dark
                                # palette toggle
  ProjectFilter.js              # client: category filter for /projects
  BeforeAfterCompare.js          # client: cross-fade frame swap
                                  # (Fortune eCash, PikaBox)

lib/
  project-data.js           # ported ~as-is; source for card grids on
                             # Home and /projects

public/
  phone-card.png, resume.pdf
```

Each case-study/brand page is a **server component** — static markup, same
content as the current hand-authored HTML — that imports and composes the
shared client components above for interactive bits, passing that page's
modal/device data as local consts/props instead of `window.__MODALS` /
`window.__DEVICE_COPY` globals.

## Styling

- The ~12 CSS files (`styles.css`, `hero-nav.css`, `motion.css`,
  `home-extras.css`, `concepts.css`, `mockups.css`, `interactions.css`,
  `screens.css`, `pikabox.css`, `brand.css`, `showcase.css`, `resume.css`)
  are copied into the app largely unchanged and imported globally from
  `app/layout.js`, in the same order the original `<link>` tags appear, so
  the cascade behaves identically.
- Design tokens (`--green`, `--gold`, spacing scale, radii, container width,
  etc.) stay exactly as defined in `:root` today — no renaming, no
  re-theming.
- Fonts (Source Serif 4, Plus Jakarta Sans, JetBrains Mono, Caveat) move
  from a Google Fonts `<link>` to `next/font/google` for automatic
  self-hosting/preloading — same fonts, no visual change.

## Interactivity (ported to React idioms)

| Behavior | Current | Next.js |
|---|---|---|
| Scroll reveal / load-in | `motion.js`, IntersectionObserver | `useScrollReveal` hook / `<Reveal>` wrapper, same stagger-by-set behavior |
| Mobile nav drawer | inline `onclick` toggling `.is-open` | `useState` on `<MobileNavDrawer>` |
| Project category filter | inline script, `data-cat` matching | `useState` on `<ProjectFilter>` |
| Info/research modals | `interactions-lib.js` + `window.__MODALS` | `<Modal>` client component, page-local data as props |
| Device chip readout | `window.__DEVICE_COPY` | `<DeviceChip>` client component, page-local data as props |
| Solution pillar accordion | native `<details>`/`<summary>` | unchanged — native element, no port needed |
| Process rail | click to advance, fills progress bar | `<ProcessRail>` client component |
| Design system tabs | class toggle on `.ds-pane` | `<DesignSystemTabs>` client component |
| Light/dark palette toggle | class toggle on `.color-board` | state inside `<DesignSystemTabs>` (or a sibling toggle) |
| Screens chip navigator | `screens.css` + shared lib | folded into the shared case-study components |
| Before/after comparison | frame swap with cross-fade | `<BeforeAfterCompare>` client component |
| Concept card hover preview | CSS transitions on `.concept-card` | unchanged — pure CSS, no port needed |

All animation stays CSS-driven (`ease-in-out`); React only toggles
state/classes, same division of responsibility as today.

## Metadata & SEO

- Every `page.js` exports a Next.js `metadata` object (title, description,
  OG tags) — addresses the README's "no per-page meta descriptions/OG tags"
  gap.
- `app/sitemap.js` and `app/robots.js` added at the root.

## `project-data.js`

Ported into `lib/project-data.js` mostly as-is — it is already the case
study content source ("used by the page generator" per the current README)
and continues to back the Home top-projects grid and the `/projects` grid.

## Build order

1. Scaffold the Next.js app (App Router, JS, npm), port all CSS + fonts +
   global `layout.js` (Nav/Footer/drawer).
2. Build the shared client component library (Reveal, Modal, DeviceChip,
   ProcessRail, DesignSystemTabs, ProjectFilter, BeforeAfterCompare)
   against one reference case study — **PikaBox**, the most feature-complete
   page — until it matches the original pixel-for-pixel.
3. Port Home, Projects, Concepts, Resume (simpler, mostly static content).
4. Port the remaining 7 case studies and 5 brand pages using the
   now-proven shared components. These pages are independent of each
   other, so this batch is well-suited to parallel work once the pattern
   from step 2 is locked in.
5. Port Posterfolio, Logofolio.
6. Add `metadata`/`sitemap.js`/`robots.js`, wire up Vercel deployment.

## Verification (manual — no existing test suite)

For every page, at each of the site's three existing breakpoints
(**≥1024px** full grids, **640–1024px** 2-col/condensed nav, **<640px**
single column/hamburger drawer):

- Visual comparison against the original HTML rendering (layout, spacing,
  type, color) — no regressions.
- All interactive behaviors re-tested: nav drawer, modals, device chip,
  process rail, design-system tabs, palette toggle, project filter,
  before/after compare, concept card hover.
- No horizontal scroll/overflow on narrow viewports; touch targets remain
  usable on mobile (drawer, filter pills, tabs).
- `next build` completes cleanly, no console errors, all internal links
  resolve to the new routes (including the renamed/grouped ones).

## Open items carried forward (not part of this conversion)

These are pre-existing gaps noted in the current README and are out of
scope here unless raised separately:

- Prototype CTAs on 8 case studies are inert "coming soon" placeholders.
- Concept cards use CSS-drawn placeholder scenes, not real `<video>`.
- `Contact Us` in the nav is an anchor stub; no contact page yet.
- Custom domain (`vincentmzeembindyo.design`) not yet purchased/configured.
