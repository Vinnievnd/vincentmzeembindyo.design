# Portfolio → Next.js Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the 20-page static HTML portfolio into a Next.js (App Router, JavaScript) app deployed on Vercel, with a shared component library replacing copy-pasted interaction markup, while preserving the existing visual design and behavior exactly across all breakpoints.

**Architecture:** A root layout carries global CSS (ported ~as-is), fonts, Nav/Footer/ScrollReveal. Each of the 20 pages is its own server-component route composed from a shared library of client components (Modal, DeviceChips, ProcessRail, TabGroup, ThemeToggle, PrototypeDock, BeforeAfterCompare, ProjectFilter) that reproduce the exact behavior of `motion.js` / `interactions.js` / `interactions-lib.js` using React state instead of global DOM queries.

**Tech Stack:** Next.js (App Router, latest stable — do not hand-pin an old major; `create-next-app@latest` as of the implementation date), React (whatever major ships with it), JavaScript, npm, plain global CSS, deployed on Vercel.

**Spec:** `docs/superpowers/specs/2026-09-09-nextjs-conversion-design.md`

**Source of truth for content:** the existing static site at `/Users/mac/Downloads/Draft Portfolio/` (the `.html` files and `assets/` directory *outside* this Next.js project). Every page-port task names the exact source file(s) to copy content from — copy that content verbatim unless a step says otherwise.

## Global Constraints

- No redesign: colors, type, spacing, motion, and layout stay exactly as in the source files (spec Non-goals).
- No TypeScript, no Tailwind, no CSS Modules — plain global CSS, ported ~unchanged, imported once from `app/layout.js` (spec Styling).
- No automated test suite — verification is manual, per the checklist in each task, at the site's three existing breakpoints: **≥1024px**, **640–1024px**, **<640px** (spec Verification).
- `Home.html`, `Fortune eCash.html` (v1), and `uploads/` are not ported (spec Cleanup).
- `assets/project-data.js` is **not** ported — see "Correction to the spec" below.
- Routes are grouped by kind and kebab-cased per the spec's Routing section: `/`, `/projects`, `/concepts`, `/resume`, `/work/<slug>` (9), `/brand/<slug>` (5), `/posterfolio`, `/logofolio`.
- Every modal/device-readout body is author-trusted static HTML (lists, `<strong>`, pill spans) copied verbatim from the source `.html`/`.js` files — rendered via `dangerouslySetInnerHTML` exactly as the original vanilla JS did via `.innerHTML`. This is intentional and safe (fixed, author-owned content, not user input) — do **not** attempt to hand-convert modal bodies to JSX; that both balloons the diff and risks HTML-entity bugs (see Task 4).

## Correction to the spec

Investigation during planning found that `assets/project-data.js` (1013 lines, one `window.PROJECT_DATA[...]` entry per case study) is **not loaded by any page** — no `.html` file has a `<script src="assets/project-data.js">` tag, confirmed by grepping every page's script tags. It's leftover from an earlier, abandoned approach and doesn't drive the Home/Projects card grids as the spec assumed. It also isn't a complete data source for those grids (e.g. it has no entries for the 5 brand pages, Posterfolio, or Logofolio, all of which appear in the `/projects` grid).

This plan treats it like `uploads/`: **excluded from the port**. Task 13 instead builds a new, minimal `lib/projects.js` sourced directly from the actual current card markup in `Home.html` and `Projects.html` (title, tags, category, thumbnail data) — this is what really drives the grids today, and centralizing it still serves the spec's de-duplication goal (one array feeds both the Home "top 3" and the full `/projects` grid, replacing the current copy-pasted card markup).

---

### Task 1: Scaffold the Next.js app

**Files:**
- Create: `vincent-portfolio/` (this repo, already initialized with git + `.gitignore`)

**Interfaces:**
- Produces: a working `npx next dev` dev server; `app/page.js`, `app/layout.js` exist (from the scaffold, to be overwritten in Task 3).

- [ ] **Step 1: Scaffold**

From `/Users/mac/Downloads/Draft Portfolio/vincent-portfolio`, run:

```bash
npx create-next-app@latest . --js --no-typescript --eslint --no-tailwind --app --no-src-dir --import-alias "@/*" --use-npm
```

When prompted about the existing `.git`/`.gitignore`/`docs/`, keep them (don't let it overwrite `.gitignore`; if it asks to install into a non-empty directory, confirm yes).

- [ ] **Step 2: Verify it runs**

```bash
npm run dev
```

Expected: server starts on `http://localhost:3000`, default Next.js starter page loads with no console errors. Stop the server (Ctrl+C) once confirmed.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Scaffold Next.js app

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 2: Port global CSS and fonts

**Files:**
- Create: `app/globals.css`
- Create: `app/styles/styles.css`, `app/styles/hero-nav.css`, `app/styles/motion.css`, `app/styles/home-extras.css`, `app/styles/concepts.css`, `app/styles/resume.css`, `app/styles/mockups.css`, `app/styles/interactions.css`, `app/styles/screens.css`, `app/styles/pikabox.css`, `app/styles/brand.css`, `app/styles/showcase.css` — verbatim copies of the same-named files under `/Users/mac/Downloads/Draft Portfolio/assets/`
- Modify: `app/layout.js` (font + CSS import wiring only — full Nav/Footer wiring happens in Task 3)
- Delete: `app/globals.css`'s scaffold-generated content (replace entirely), `app/page.module.css` if created by the scaffold

**Interfaces:**
- Produces: every design token (`--green`, `--gold`, spacing, radii, etc.) and every class name from the original site, available globally, in the exact cascade order the original `<link>` tags used.

- [ ] **Step 1: Copy the CSS files unmodified**

```bash
mkdir -p app/styles
for f in styles hero-nav motion home-extras concepts resume mockups interactions screens pikabox brand showcase; do
  cp "/Users/mac/Downloads/Draft Portfolio/assets/$f.css" "app/styles/$f.css"
done
```

- [ ] **Step 2: Write `app/globals.css`**

This is the union cascade order observed across every page's `<link>` tags (verified by grepping all 20 source files' `<link rel="stylesheet">` order — `styles.css` → `hero-nav.css` → `motion.css` always come first everywhere; the rest follow in the order below, which never conflicts because no two of `home-extras`/`concepts`/`resume`/`pikabox`/`brand`/`screens` ever load together on the same original page):

```css
@import "./styles/styles.css";
@import "./styles/hero-nav.css";
@import "./styles/motion.css";
@import "./styles/home-extras.css";
@import "./styles/concepts.css";
@import "./styles/resume.css";
@import "./styles/mockups.css";
@import "./styles/interactions.css";
@import "./styles/screens.css";
@import "./styles/pikabox.css";
@import "./styles/brand.css";
@import "./styles/showcase.css";
```

- [ ] **Step 3: Wire fonts in `app/layout.js`**

Replace the scaffold's font imports with:

```js
import { Plus_Jakarta_Sans, Source_Serif_4, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  title: "Vincent Mzee Mbindyo — Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${sourceSerif4.variable} ${jetBrainsMono.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Point the CSS custom properties at the font variables**

Open `app/styles/styles.css`, find the `:root` block's `--font-sans`, `--font-serif`, `--font-mono` declarations (and wherever Caveat is referenced — check for a `--font-caveat`-style token or an inline `font-family: 'Caveat'` rule; grep the file for `Caveat` to find it), and change each to reference the corresponding CSS variable Next.js generates, e.g.:

```css
--font-sans: var(--font-sans), sans-serif;
--font-serif: var(--font-serif), serif;
--font-mono: var(--font-mono), monospace;
```

For the Caveat rule specifically (wherever `font-family: 'Caveat', ...` appears, likely scoped to `.work-quote` or similar per the README), change it to `font-family: var(--font-caveat), cursive;`.

- [ ] **Step 5: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000` — the default Next.js scaffold page will look broken/unstyled by the new CSS (expected, real pages aren't built yet), but open devtools and confirm: `getComputedStyle(document.documentElement).getPropertyValue('--green')` returns `#1f4d3f`, and the `<body>` renders in Plus Jakarta Sans (check the Network/Font tab — no 404s on font files, no FOUC).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Port global CSS and fonts

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 3: Nav, Footer, ScrollReveal, and root layout wiring

**Files:**
- Create: `components/Nav.js`
- Create: `components/Footer.js`
- Create: `components/ScrollReveal.js`
- Modify: `app/layout.js` (render `<Nav />`, `{children}`, `<Footer />`, `<ScrollReveal />`)

**Interfaces:**
- Produces: `<Nav />` (client, no props — reads `usePathname()` itself), `<Footer />` (server, no props), `<ScrollReveal />` (client, no props, renders nothing — side-effect only). All three are used unmodified by every later page task via the root layout; no page imports them directly.

- [ ] **Step 1: Build `components/Nav.js`**

Source: nav markup is identical across all pages — copied here from `index.html`. The only per-page difference in the original was which link got `class="active"`, which we replace with `usePathname()`.

```js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/concepts", label: "Concepts" },
  { href: "#contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Mzee Design Agency">M</Link>
        <span className="nav-name">Vincent Mzee Mbindyo</span>
        <div className={`nav-links${isOpen ? " is-open" : ""}`} id="navLinks">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/resume" className="nav-cta">Resume</Link>
        </div>
        <Link href="/resume" className="btn-resume">Resume</Link>
        <button
          className={`nav-toggle${isOpen ? " is-open" : ""}`}
          aria-label="Menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Build `components/Footer.js`**

Copy the `<footer class="cta-footer">` block verbatim from `index.html`, converting `class` → `className`, `href="Home.html"` → `href="/"`, `href="Projects.html"` → `href="/projects"`, `href="Concepts.html"` → `href="/concepts"`, and every inline SVG `<svg>`/`<path>`/`<rect>`/`<circle>` attribute to camelCase (`stroke-width` → `strokeWidth`, `viewBox` stays as-is, `fill` stays as-is). Use plain `<a>` tags (not `next/link`) for `#contact`/`#testimonials` anchors and the social `href="#"` placeholders, since those aren't real routes. Use `next/link` for Home/Projects/Concepts.

- [ ] **Step 3: Build `components/ScrollReveal.js`**

Direct port of `/Users/mac/Downloads/Draft Portfolio/assets/motion.js` into a `useEffect`. Same selector list, same classes (`rv`, `rv-h`, `is-in`, `motion`, `motion-ready`), same IntersectionObserver + scroll/resize sweep fallback, same reduced-motion short-circuit, same ds-tab reveal hook. Renders nothing.

```js
"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".hero .lead", ".hero-standfirst", ".markets",
  ".section-head", ".h-section", ".kicker", ".ps-title", ".ps-sub", ".ps-body", ".ps-list",
  ".disc-card", ".process-card", ".stat", ".istat", ".work-row",
  ".project-card", ".info-card", ".three-card", ".rcard", ".iacard", ".wf-card", ".ma-card",
  ".oc-card", ".pillar", ".users-grid", ".metrics-bar", ".process-rail",
  ".ds-tabs", ".cmp", ".ab-table-wrap",
  ".lf-card", ".pf-card", ".cp-toolkit", ".cp-meta", ".cp-filter",
  ".vs-card", ".mg-card", ".vs-bar",
  ".skills-list", ".tools-row", ".showcase-meta", ".showcase-filter",
  ".work-list > *", ".impact-stats > *",
];

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion");
    if (reduce) {
      root.classList.add("motion-ready");
      return;
    }

    const nodes = [];
    SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.closest(".nav") || el.closest(".cta-footer")) return;
        if (el.closest(".ds-pane")) return;
        if (el.classList.contains("concept-card") || el.classList.contains("cp-card")) return;
        if (el.hasAttribute("data-load")) return;
        if (el.dataset.rvSet) return;
        el.dataset.rvSet = "1";
        el.classList.add("rv");
        if (el.classList.contains("h-section") || el.classList.contains("kicker")) {
          el.classList.add("rv-h");
        }
        nodes.push(el);
      });
    });

    function show(el) {
      el.classList.add("is-in");
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(show);
      root.classList.add("motion-ready");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -4% 0px" }
    );
    nodes.forEach((el) => io.observe(el));

    function sweep() {
      const vh = window.innerHeight;
      nodes.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.98) {
          show(el);
          io.unobserve(el);
        }
      });
    }

    function kickoff() {
      root.classList.add("motion-ready");
      sweep();
    }
    if (document.readyState === "complete") {
      requestAnimationFrame(kickoff);
    } else {
      window.addEventListener("load", () => requestAnimationFrame(kickoff));
    }
    requestAnimationFrame(() => root.classList.add("motion-ready"));

    let t;
    function onScroll() {
      clearTimeout(t);
      t = setTimeout(sweep, 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    function onDsTabClick(e) {
      if (!e.target.closest(".ds-tab")) return;
      setTimeout(() => {
        document.querySelectorAll(".ds-pane.active .rv").forEach(show);
      }, 30);
    }
    document.addEventListener("click", onDsTabClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("click", onDsTabClick);
      io.disconnect();
    };
  }, []);

  return null;
}
```

- [ ] **Step 4: Wire into `app/layout.js`**

```js
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
// ...font imports and metadata from Task 2 stay...

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${sourceSerif4.variable} ${jetBrainsMono.variable} ${caveat.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify**

`npm run dev`, open `http://localhost:3000`. Confirm: nav renders with logo/name/links, resume CTA, footer renders with all 4 columns and social icons. Resize to <640px and click the hamburger — `.nav-links` gets `is-open`, drawer opens/closes. No console errors about the page body being empty (fine, no page content yet).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Add Nav, Footer, ScrollReveal and wire root layout

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 4: Modal component

**Files:**
- Create: `components/Modal.js`

**Interfaces:**
- Produces:
  - `<ModalProvider modals={modalsObject}>children</ModalProvider>` — `modalsObject` shape: `{ [key: string]: { eyebrow: string, title: string, body: string /* HTML */ } }`.
  - `<ModalTrigger modalKey={string} className={string}>children</ModalTrigger>` — renders the trigger element.
  - `<ModalRoot />` — renders the modal overlay; must be rendered once, inside a `ModalProvider`.
- Consumes: nothing from earlier tasks.

**Why one combined `dangerouslySetInnerHTML` block:** the original `openModal()` builds one HTML string (`<div class="modal-eyebrow">${eyebrow}</div><h3>${title}</h3><div>${body}</div>`) and sets it via `.innerHTML` in one shot. Some titles/eyebrows in the source data contain HTML entities (e.g. `&amp;`) that rely on the browser's HTML parser to decode — if `title`/`eyebrow` were instead rendered as plain JSX text, React would NOT decode those entities and `&amp;` would show literally on screen. Reconstructing the exact same one-block HTML string and rendering it with a single `dangerouslySetInnerHTML` avoids that bug entirely and matches the original mechanism 1:1. This is safe because all modal content is fixed, author-owned copy from the site's own source files — never user input.

- [ ] **Step 1: Write the component**

```js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ modals, children }) {
  const [openKey, setOpenKey] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openKey ? "hidden" : "";
  }, [openKey]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpenKey(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openKey, open: setOpenKey, close: () => setOpenKey(null) }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ modalKey, className, children, as: Tag = "div" }) {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalTrigger must be used inside a ModalProvider");

  return (
    <Tag
      className={className}
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        ctx.open(modalKey);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          ctx.open(modalKey);
        }
      }}
    >
      {children}
    </Tag>
  );
}

export function ModalRoot() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalRoot must be used inside a ModalProvider");
  const data = ctx.openKey ? ctx.modals[ctx.openKey] : null;
  const isOpen = Boolean(ctx.openKey);

  return (
    <div id="modalRoot" className={isOpen ? "modal-root is-open" : "modal-root"} aria-hidden={isOpen ? "false" : "true"}>
      <div className="modal-overlay" data-close="" onClick={ctx.close}></div>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" data-close="" aria-label="Close" onClick={ctx.close}>×</button>
        <div
          className="modal-body"
          id="modalBody"
          dangerouslySetInnerHTML={{
            __html: data
              ? `<div class="modal-eyebrow">${data.eyebrow}</div><h3>${data.title}</h3><div>${data.body}</div>`
              : "",
          }}
        />
      </div>
    </div>
  );
}
```

This is the exact structure read from `PikaBox.html`'s `#modalRoot` block, and confirmed against `assets/interactions.css:883` (`.modal-root.is-open { ... }` is the selector that actually drives the open/close transition): `.modal-root` (outer, `id="modalRoot"`, gets `is-open`) → `.modal-overlay` (click-to-close backdrop) + `.modal-card` (`role="dialog" aria-modal="true"`) → `.modal-close` (`×` glyph button) + `.modal-body` (`id="modalBody"`, the `dangerouslySetInnerHTML` target). Both the overlay and the close button had `data-close` in the original (either one closes the modal) — reproduced here as `onClick={ctx.close}` on both rather than a global `[data-close]` listener, since React scopes the handler directly.

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add Modal component (ModalProvider/ModalTrigger/ModalRoot)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

(No standalone visual verification yet — this is exercised for real in Task 12's PikaBox port.)

---

### Task 5: DeviceChips component

**Files:**
- Create: `components/DeviceChips.js`

**Interfaces:**
- Produces:
  - `<DeviceChipsProvider copy={copyObject}>children</DeviceChipsProvider>` — `copyObject` shape: `{ [device: string]: string /* HTML */ }`.
  - `<DeviceChip device={string} className="dchip">children</DeviceChip>`.
  - `<DeviceReadout id="deviceReadout" />`.
- Consumes: nothing from earlier tasks.

- [ ] **Step 1: Write the component**

Same `dangerouslySetInnerHTML` rationale as Task 4 applies to the readout copy (it's raw HTML with `<strong>` tags).

```js
"use client";

import { createContext, useContext, useState } from "react";

const DeviceChipsContext = createContext(null);

export function DeviceChipsProvider({ copy, children }) {
  const [active, setActive] = useState(null);
  return (
    <DeviceChipsContext.Provider value={{ copy, active, setActive }}>
      {children}
    </DeviceChipsContext.Provider>
  );
}

export function DeviceChip({ device, className = "dchip", children }) {
  const ctx = useContext(DeviceChipsContext);
  if (!ctx) throw new Error("DeviceChip must be used inside a DeviceChipsProvider");
  const isActive = ctx.active === device;
  return (
    <button
      type="button"
      className={isActive ? `${className} active` : className}
      onClick={() => ctx.setActive(device)}
      data-device={device}
    >
      {children}
    </button>
  );
}

export function DeviceReadout({ id = "deviceReadout" }) {
  const ctx = useContext(DeviceChipsContext);
  if (!ctx) throw new Error("DeviceReadout must be used inside a DeviceChipsProvider");
  const html = ctx.active ? ctx.copy[ctx.active] : "";
  return (
    <div
      id={id}
      key={ctx.active}
      style={{ animation: "fadeIn .25s ease" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
```

Confirmed from the original: `deviceReadout.style.animation = 'fadeIn .25s ease'` is set via inline style on every click (not a CSS class), reading `@keyframes fadeIn` at `assets/interactions.css:533`. `key={ctx.active}` makes React remount the element on every device change so the inline-style animation re-triggers exactly like the original's re-assignment did.

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add DeviceChips component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 6: ProcessRail component

**Files:**
- Create: `components/ProcessRail.js`

**Interfaces:**
- Produces: `<ProcessRail steps={[{ line1: string, line2: string }]} scrollTargets={string[] | undefined} />`. `line1`/`line2` reproduce the original two-line button labels (e.g. "Research" / "& Analysis", rendered as `line1<br/><span>line2</span>`). When `scrollTargets` is provided, clicking step `i` also scrolls to the first `.ps-title` element whose text starts with `scrollTargets[i].split(' ')[0]` (matches the original Fortune eCash v2-only enhancement). When omitted, it only updates the active step and fill width (matches the plain `interactions-lib.js` version used by AgriFlow and PikaBox).

- [ ] **Step 1: Write the component**

Exact wrapper structure, confirmed from `PikaBox.html`'s `#process` section: `.process-rail` → `.rail-line` (contains `.rail-fill`, `id="railFill"`) + `.rail-steps` (contains the `.rail-step` buttons, each with `data-phase="N"`).

```js
"use client";

import { useState } from "react";

export default function ProcessRail({ steps, scrollTargets }) {
  const [active, setActive] = useState(0);

  function handleClick(idx) {
    setActive(idx);
    if (scrollTargets && scrollTargets[idx]) {
      const target = scrollTargets[idx];
      const titles = Array.from(document.querySelectorAll(".ps-title"));
      const match = titles.find((t) => t.textContent.startsWith(target.split(" ")[0]));
      if (match) {
        const y = match.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }

  const pct = (active / Math.max(steps.length - 1, 1)) * 100;

  return (
    <div className="process-rail">
      <div className="rail-line">
        <div className="rail-fill" id="railFill" style={{ width: `${pct}%` }} />
      </div>
      <div className="rail-steps">
        {steps.map((step, idx) => (
          <button
            key={`${step.line1}-${step.line2}`}
            type="button"
            data-phase={idx}
            className={idx === active ? "rail-step active" : "rail-step"}
            onClick={() => handleClick(idx)}
          >
            {step.line1}<br /><span>{step.line2}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add ProcessRail component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 7: TabGroup component (design-system tabs + screens chip nav)

**Files:**
- Create: `components/TabGroup.js`

**Interfaces:**
- Produces: `<TabGroup id={string} tabClassName={string} paneClassName={string} tabs={[{ id: string, label: string }]} defaultActive={string}>` wrapping `<TabGroup.Pane id={string}>children</TabGroup.Pane>` entries. Used with `tabClassName="ds-tab" paneClassName="ds-pane"` for the Design System tabs (`#dsTabs`), and `tabClassName="scr-tab" paneClassName="scr-pane"` for the Screens chip navigator (`#scrTabs`) — same component, different class/id props, matching each original's CSS hooks exactly.

- [ ] **Step 1: Write the component**

```js
"use client";

import { createContext, useContext, useState, Children } from "react";

const TabGroupContext = createContext(null);

export default function TabGroup({ id, tabClassName, paneClassName, tabs, defaultActive, children }) {
  const [active, setActive] = useState(defaultActive ?? tabs[0]?.id);

  return (
    <TabGroupContext.Provider value={{ active, paneClassName }}>
      <div id={id} className={`${tabClassName}s`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === active ? `${tabClassName} active` : tabClassName}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children}
    </TabGroupContext.Provider>
  );
}

function Pane({ id, children }) {
  const ctx = useContext(TabGroupContext);
  if (!ctx) throw new Error("TabGroup.Pane must be a descendant of TabGroup");
  const isActive = ctx.active === id;
  return (
    <div className={isActive ? `${ctx.paneClassName} active` : ctx.paneClassName} data-pane={id}>
      {children}
    </div>
  );
}
TabGroup.Pane = Pane;
```

Note: `Children`/`createContext` imports — remove the unused `Children` import if not used (it isn't, in this version; keep only `createContext, useContext, useState`).

- [ ] **Step 2: Fix the unused import**

Edit the file to import only `{ createContext, useContext, useState }` from `"react"`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Add generic TabGroup component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 8: ThemeToggle component

**Files:**
- Create: `components/ThemeToggle.js`

**Interfaces:**
- Produces: `<ThemeToggle boardId="colorBoard">` self-contained pair — internally renders both the two `.tt-btn` buttons (light/dark) and expects the color board itself to be rendered as a sibling with `id={boardId}` reading the toggle's state. Simplest faithful port: make `ThemeToggle` own the board's `is-dark` class directly via a render-prop / children-function, since the original always keeps the buttons and the board next to each other in the same section.

- [ ] **Step 1: Write the component**

Exact labels confirmed from `PikaBox.html:468`: `<div class="theme-toggle"><button class="tt-btn active" data-theme="light">☀ Light Mode</button><button class="tt-btn" data-theme="dark">☾ Dark Mode</button></div>` — this is generic design-system chrome (not project-specific copy), so the same text is hardcoded in the shared component.

```js
"use client";

import { useState } from "react";

export default function ThemeToggle({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="theme-toggle">
        <button
          type="button"
          className={!isDark ? "tt-btn active" : "tt-btn"}
          data-theme="light"
          onClick={() => setIsDark(false)}
        >
          ☀ Light Mode
        </button>
        <button
          type="button"
          className={isDark ? "tt-btn active" : "tt-btn"}
          data-theme="dark"
          onClick={() => setIsDark(true)}
        >
          ☾ Dark Mode
        </button>
      </div>
      {children(isDark)}
    </>
  );
}
```

Usage in a page: `<ThemeToggle>{(isDark) => (<div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>...</div>)}</ThemeToggle>`.

**Note for the page-port task:** if a page's `.tt-btn` text differs from "☀ Light Mode"/"☾ Dark Mode" (unlikely, but confirm against that page's own source if the visual check in verification shows a mismatch), pass the labels as props instead of relying on the hardcoded default.

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add ThemeToggle component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 9: PrototypeDock component

**Files:**
- Create: `components/PrototypeDock.js`

**Interfaces:**
- Produces: `<PrototypeDock label="Open Prototype">{popoverContent}</PrototypeDock>`. Self-contained open/close state; closes on outside click or Escape (scoped to this instance only — every source page has exactly one `.proto-dock`, confirmed by grep, so there's no need to replicate the original's "close every dock on the page" global behavior).

- [ ] **Step 1: Write the component**

Exact structure and DOM order confirmed from `PikaBox.html:65-73`: `.proto-dock` → `.proto-pop` (`role="menu"`, listed **first** in source order, positioned via CSS) then `.proto-trigger` (`aria-expanded`, `aria-haspopup="true"`, label text + `.pt-ico` icon span). Trigger label "Open Prototype" is generic design-system chrome (confirmed on PikaBox; pass a different `label` prop if a later page's source differs).

```js
"use client";

import { useEffect, useRef, useState } from "react";

export default function PrototypeDock({ label = "Open Prototype", children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dockRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function onDocClick(e) {
      if (dockRef.current && !dockRef.current.contains(e.target)) setIsOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dockRef} className={isOpen ? "proto-dock is-open" : "proto-dock"}>
      <div className="proto-pop" role="menu" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <button
        type="button"
        className="proto-trigger"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((v) => !v);
        }}
      >
        {label}
        <span className="pt-ico"></span>
      </button>
    </div>
  );
}
```

**Note for each page-port task:** copy the exact `.proto-pop` inner content (a `.proto-pop-h` heading, e.g. "Prototypes", plus one `<a class="is-pending" aria-disabled="true"><span class="pl-dot"></span>...— coming soon</a>` per prototype link — see PikaBox's 3-link example) from that page's own `.proto-dock` block as `children` — this content differs per page even though the dock's behavior is identical everywhere.

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add PrototypeDock component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 10: BeforeAfterCompare component

**Files:**
- Create: `components/BeforeAfterCompare.js`

**Interfaces:**
- Produces: `<BeforeAfterCompare frames={[{ id: string, label: string }]} defaultActive={string}>` wrapping `<BeforeAfterCompare.Frame id={string}>children</BeforeAfterCompare.Frame>` entries. Used only by Fortune eCash v2 (Task 18) — confirmed by grep to be the only source page with `.cmp-btn`/`.cmp-frame`.

- [ ] **Step 1: Write the component**

```js
"use client";

import { createContext, useContext, useState } from "react";

const CompareContext = createContext(null);

export default function BeforeAfterCompare({ frames, defaultActive, children }) {
  const [active, setActive] = useState(defaultActive ?? frames[0]?.id);
  return (
    <CompareContext.Provider value={{ active }}>
      <div className="cmp">
        {frames.map((f) => (
          <button
            key={f.id}
            type="button"
            className={f.id === active ? "cmp-btn active" : "cmp-btn"}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
        {children}
      </div>
    </CompareContext.Provider>
  );
}

function Frame({ id, children }) {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("BeforeAfterCompare.Frame must be a descendant of BeforeAfterCompare");
  return (
    <div className={ctx.active === id ? "cmp-frame active" : "cmp-frame"} data-frame={id}>
      {children}
    </div>
  );
}
BeforeAfterCompare.Frame = Frame;
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add BeforeAfterCompare component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 11: ConceptCardReveal component

**Files:**
- Create: `components/ConceptCardReveal.js`

**Interfaces:**
- Produces: `<ConceptCardReveal />` — client, no props, renders nothing. Mounted once on any page that has `.concept-card` elements (Home, Concepts — Task 14 and Task 16). Direct port of the inline `<script>` at the bottom of `index.html`. `motion.js`/`ScrollReveal` explicitly skips `.concept-card` elements (see the `el.classList.contains('concept-card')` guard in Task 3's `ScrollReveal`), so this is a separate, required effect — not a duplicate of `ScrollReveal`.

- [ ] **Step 1: Write the component**

```js
"use client";

import { useEffect } from "react";

export default function ConceptCardReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(".concept-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    cards.forEach((c, i) => {
      c.style.transitionDelay = `${(i % 2) * 90}ms`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "Add ConceptCardReveal component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 12: Port PikaBox (reference case study) — `/work/pikabox`

**Files:**
- Create: `app/work/pikabox/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/PikaBox.html`

**Interfaces:**
- Consumes: `ModalProvider`/`ModalTrigger`/`ModalRoot` (Task 4), `DeviceChipsProvider`/`DeviceChip`/`DeviceReadout` (Task 5), `ProcessRail` (Task 6), `TabGroup`/`TabGroup.Pane` (Task 7, `ds` variant only — PikaBox has no `scrTabs`), `ThemeToggle` (Task 8), `PrototypeDock` (Task 9). Does **not** use `BeforeAfterCompare` (no `.cmp-btn` in this page).
- Produces: the proven page-port pattern every later case-study/brand-page task follows.

This is the task where the shared library gets proven end-to-end — take the time to get it right; every later page task is a repeat of this recipe.

- [ ] **Step 1: Extract the page-local data**

Open `PikaBox.html`. Find its inline `<script>` block (before the `interactions-lib.js`/`motion.js` `<script src>` tags) containing `window.__MODALS = {...}` and `window.__DEVICE_COPY = {...}`. Copy both objects verbatim into the top of `app/work/pikabox/page.js` as local `const MODALS = {...}` and `const DEVICE_COPY = {...}` (drop the `window.` prefix; keep every key/value exactly, including embedded HTML).

- [ ] **Step 2: Convert the body markup**

Copy everything between `<body ...>` and the closing `</body>` (excluding `<script>` tags, `#modalRoot`, and the nav/footer — those are now `<Nav>`/`<Footer>` from the root layout) into the JSX `return` of a default-exported function component. Apply these conversions throughout:

- `class="..."` → `className="..."`
- `for="..."` → `htmlFor="..."`
- Self-close void elements (`<img ...>` → `<img ... />`, `<br>` → `<br />`, `<input ...>` → `<input ... />`)
- Inline `style="a: b; c: d"` strings → `style={{ a: 'b', c: 'd' }}` objects (camelCase CSS properties)
- SVG attributes → camelCase (`stroke-width` → `strokeWidth`, `fill-rule` → `fillRule`, etc.)
- Any element with `[data-modal="key"]` → wrap/replace with `<ModalTrigger modalKey="key" className="...">...same children...</ModalTrigger>` (drop the manually-added `role`/`tabIndex`/`data-modal` attributes — `ModalTrigger` adds those itself)
- Every `.dchip[data-device="x"]` → `<DeviceChip device="x" className="dchip">...same children...</DeviceChip>`
- `#deviceReadout` → `<DeviceReadout />`
- `.process-rail` block with `.rail-step` buttons → replace with `<ProcessRail steps={[{line1:'...', line2:'...'}, ...]} />`, reading each step's two-line label from the source buttons' `line1<br><span>line2</span>` content (PikaBox has no scroll-to enhancement — omit `scrollTargets`)
- `#dsTabs` + `.ds-tab` buttons + `.ds-pane` blocks → `<TabGroup id="dsTabs" tabClassName="ds-tab" paneClassName="ds-pane" tabs={[{id:'...',label:'...'}, ...]}>` wrapping one `<TabGroup.Pane id="...">...original pane content...</TabGroup.Pane>` per original `.ds-pane`
- `.tt-btn` pair + `#colorBoard` → `<ThemeToggle>{(isDark) => (<div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>...original board content...</div>)}</ThemeToggle>`
- `.proto-dock` block → `<PrototypeDock label="Open Prototype">...original .proto-pop content (heading + link list)...</PrototypeDock>` (omit the `label` prop unless this page's trigger text differs from "Open Prototype")
- `<details class="pillar">...</details>` blocks → leave as native `<details className="pillar">` (no component needed, per spec)

- [ ] **Step 3: Wrap with the Modal provider and root**

```js
export default function PikaBoxPage() {
  return (
    <ModalProvider modals={MODALS}>
      {/* ...converted body markup... */}
      <ModalRoot />
    </ModalProvider>
  );
}
```

Wrap the `DeviceChip`/`DeviceReadout` section specifically in `<DeviceChipsProvider copy={DEVICE_COPY}>...</DeviceChipsProvider>` (it can nest inside the `ModalProvider` tree; the two contexts are independent).

- [ ] **Step 4: Verify against the original**

Run `npm run dev`, open `http://localhost:3000/work/pikabox` side by side with `PikaBox.html` opened directly in a browser (`open "/Users/mac/Downloads/Draft Portfolio/PikaBox.html"`). At **≥1024px**, **640–1024px**, and **<640px**:

- Layout, spacing, type, and color match with no visible regressions
- Every modal trigger opens the correct modal content; Escape and the close button both close it; background scroll is locked while open
- Every device chip updates the readout to the matching copy; active state moves correctly
- Process rail: clicking each step moves the active state and fill width
- Design-system tabs switch panes; light/dark toggle switches the color board
- Prototype dock opens on trigger click, closes on outside click and Escape
- Pillar `<details>` accordions open/close natively
- Scroll-reveal: sections fade/slide in on scroll, matching the original's stagger
- No console errors, no horizontal overflow at any width

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Port PikaBox case study (/work/pikabox)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 13: `lib/projects.js` data module + `ProjectCard`/`ProjectFilter` components

**Files:**
- Create: `lib/projects.js`
- Create: `components/ProjectCard.js`
- Create: `components/ProjectFilter.js`

**Interfaces:**
- Produces: `PROJECTS` (array of 16 objects, shape below), `FEATURED_SLUGS` (array of 3 slugs) from `lib/projects.js`; `<ProjectCard project={projectObject} />` from `components/ProjectCard.js`; `<ProjectFilter categories={[{id,label}]} projects={PROJECTS} />` from `components/ProjectFilter.js`.
- Consumed by: Task 14 (Home, via `FEATURED_SLUGS`) and Task 15 (Projects, via `ProjectFilter`).

This data and every field value below was extracted directly from the actual card markup in `Home.html` and `Projects.html` (not from the unused `project-data.js` — see "Correction to the spec" above).

- [ ] **Step 1: Write `lib/projects.js`**

```js
export const PROJECTS = [
  { slug: "fortune-ecash", href: "/work/fortune-ecash", title: "Fortune eCash App", category: "mobile",
    tags: ["UI/UX", "Fintech", "Research", "Marketing"],
    thumb: { type: "mobile", alt: "Fortune eCash phone mockups" } },
  { slug: "pikabox", href: "/work/pikabox", title: "PikaBox App", category: "mobile",
    tags: ["UI/UX", "Marketplace", "Design System", "Prototyping"],
    thumb: { type: "mobile", alt: "PikaBox mockups" } },
  { slug: "agriflow", href: "/work/agriflow", title: "AgriFlow App", category: "mobile",
    tags: ["UI/UX", "AgriTech", "Field Research", "Localisation"],
    thumb: { type: "mobile", alt: "AgriFlow mockups" } },
  { slug: "advenio", href: "/work/advenio", title: "Advenio Web App", category: "web",
    tags: ["UI/UX", "Hospitality", "Booking", "Prototyping"],
    thumb: { type: "browser", variant: "web", headline: "Find your stay.", lineShort: false, goldTiles: [1, 2], cta: "Book now" } },
  { slug: "mlearn", href: "/work/mlearn", title: "MLearn Web App", category: "web",
    tags: ["UI/UX", "EdTech", "LMS", "Design System"],
    thumb: { type: "browser", variant: "web", headline: "Learn with MLearn.", lineShort: true, goldTiles: [0, 3], cta: "Start a course" } },
  { slug: "toedur", href: "/work/toedur", title: "Toedur Web App", category: "web",
    tags: ["UI/UX", "Education", "Mentorship", "Research"],
    thumb: { type: "browser", variant: "web", headline: "Mentors who get it.", lineShort: false, goldTiles: [1, 2], cta: "Find a mentor" } },
  { slug: "simplia", href: "/work/simplia", title: "Simplia Website", category: "web",
    tags: ["Web Design", "Marketing", "Branding", "SEO"],
    thumb: { type: "browser", variant: "site", headline: "Marketing made simple.", lineShort: true, goldTiles: [0, 3], cta: "Talk to us" } },
  { slug: "chii-neema", href: "/work/chii-neema", title: "Chii Neema Website", category: "web",
    tags: ["Web Design", "Wellness", "Branding", "CMS"],
    thumb: { type: "browser", variant: "site", headline: "Bioresonance therapy.", lineShort: false, goldTiles: [1, 2], cta: "Book a session" } },
  { slug: "tickety", href: "/work/tickety", title: "Tickety Web App", category: "web",
    tags: ["UI/UX", "Events", "Ticketing", "Design System"],
    thumb: { type: "browser", variant: "web", headline: "Tickets, sorted.", lineShort: true, goldTiles: [0, 3], cta: "Get tickets" } },
  { slug: "amarachi", href: "/brand/amarachi", title: "Amarachi Fresh Produce", category: "brand",
    tags: ["Brand Identity", "Logo System", "Packaging", "Colour System"],
    thumb: { type: "monogram", bg: "#1F4227", circle1: "#C7D94F", circle2: "#9CB52F", letter: "A", letterColor: "#C7D94F", wordmark: "AMARACHI", wordmarkColor: "#F7F5EC" } },
  { slug: "everything-riri", href: "/brand/everything-riri", title: "Everything Riri", category: "brand",
    tags: ["Brand Identity", "Packaging Design", "Logo System", "Colour System"],
    thumb: { type: "monogram", bg: "#3B1B2E", circle1: "#E8927C", circle2: "#D0705A", letter: "R", letterColor: "#E8927C", wordmark: "RIRI", wordmarkColor: "#FBF3EF" } },
  { slug: "kindhearts", href: "/brand/kindhearts", title: "Kindhearts Foundation", category: "brand",
    tags: ["Brand Identity", "Non-profit", "Logo System", "Colour System"],
    thumb: { type: "monogram", bg: "#1B3A5C", circle1: "#F0A93B", circle2: "#D18C22", letter: "K", letterColor: "#F0A93B", wordmark: "KINDHEARTS", wordmarkColor: "#F6F4EF" } },
  { slug: "daftari-kenya", href: "/brand/daftari-kenya", title: "Daftari Kenya", category: "brand",
    tags: ["Brand Identity", "Logo System", "Print", "Colour System"],
    thumb: { type: "monogram", bg: "#22304A", circle1: "#E4572E", circle2: "#C3441F", letter: "D", letterColor: "#E4572E", wordmark: "DAFTARI", wordmarkColor: "#F5F3EE" } },
  { slug: "brea-cakes", href: "/brand/brea-cakes", title: "Brea Cakes", category: "brand",
    tags: ["Brand Identity", "Logo System", "Packaging", "Colour System"],
    thumb: { type: "monogram", bg: "#4A2B33", circle1: "#E9B7A5", circle2: "#D0937E", letter: "B", letterColor: "#E9B7A5", wordmark: "BREA", wordmarkColor: "#FCF6F0" } },
  { slug: "posterfolio", href: "/posterfolio", title: "Posterfolio", category: "poster",
    tags: ["Print", "Editorial", "Typography", "Layout"],
    thumb: { type: "posterfolio-preview" } },
  { slug: "logofolio", href: "/logofolio", title: "Logofolio", category: "logo",
    tags: ["Identity", "Marks", "Branding", "Wordmarks"],
    thumb: { type: "logofolio-preview" } },
];

export const FEATURED_SLUGS = ["fortune-ecash", "pikabox", "agriflow"];
```

- [ ] **Step 2: Write `components/ProjectCard.js`**

Renders the right thumbnail markup per `thumb.type`. Copy the exact thumb JSX shapes from `Projects.html`'s card markup (already gathered during planning — reproduce verbatim, converting attributes to JSX):

```js
import Link from "next/link";

function Thumb({ project }) {
  const { thumb } = project;
  if (thumb.type === "mobile") {
    return (
      <div className="thumb">
        <img src="/phone-card.png" alt={thumb.alt} />
      </div>
    );
  }
  if (thumb.type === "browser") {
    return (
      <div className={`thumb ${thumb.variant}`}>
        <div className="thumb-browser">
          <div className="tb-bar"><span></span><span></span><span></span></div>
          <div className="tb-body">
            <div className="tb-h">{thumb.headline}</div>
            <div className={thumb.lineShort ? "tb-line short" : "tb-line"}></div>
            <div className="tb-grid">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={thumb.goldTiles.includes(i) ? "tb-tile gold" : "tb-tile"}></div>
              ))}
            </div>
            <div className="tb-cta">{thumb.cta}</div>
          </div>
        </div>
      </div>
    );
  }
  if (thumb.type === "monogram") {
    return (
      <div className="thumb" style={{ background: thumb.bg, display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "52%", aspectRatio: "1", borderRadius: "50%", background: thumb.circle1, right: "-12%", top: "-14%" }}></div>
        <div style={{ position: "absolute", width: "34%", aspectRatio: "1", borderRadius: "50%", background: thumb.circle2, right: "10%", top: "6%", opacity: 0.6 }}></div>
        <div style={{ position: "relative", fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: "clamp(64px,11vw,120px)", color: thumb.letterColor, letterSpacing: "-.045em", lineHeight: 1 }}>{thumb.letter}</div>
        <div style={{ position: "absolute", left: 18, bottom: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: thumb.wordmarkColor, opacity: 0.7 }}>{thumb.wordmark}</div>
      </div>
    );
  }
  if (thumb.type === "posterfolio-preview") {
    return (
      <div className="thumb poster">
        <div className="thumb-posters">
          <div className="p-mini"><div className="p-mini-mark">·01</div><div className="p-mini-h">Save</div></div>
          <div className="p-mini"><div className="p-mini-mark">·02</div><div className="p-mini-h">Grow</div></div>
          <div className="p-mini"><div className="p-mini-mark">·03</div><div className="p-mini-h">Build</div></div>
        </div>
      </div>
    );
  }
  // logofolio-preview
  return (
    <div className="thumb logo">
      <div className="thumb-logos">
        {["M", "F", "P", "A", "S", "T", "C", "L", "V"].map((letter, i) => (
          <div key={i} className="l-mini">{letter}</div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <Link href={project.href} className="project-card" data-cat={project.category}>
      <Thumb project={project} />
      <div className="row">
        <span className="title">{project.title}</span>
        <span className="btn">View <span className="arrow-icon"></span></span>
      </div>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="pill">{tag}</span>
        ))}
      </div>
    </Link>
  );
}
```

- [ ] **Step 3: Copy `phone-card.png` into `public/`**

```bash
cp "/Users/mac/Downloads/Draft Portfolio/assets/phone-card.png" public/phone-card.png
```

(This is why `ProjectCard`'s mobile thumb uses `/phone-card.png`, not `assets/phone-card.png` — Next.js serves `public/` from the site root.)

- [ ] **Step 4: Write `components/ProjectFilter.js`**

Port of `Projects.html`'s inline filter script (`.filter` buttons toggling `.project-card` visibility by `data-cat`), as React state instead of direct DOM manipulation:

```js
"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectFilter({ categories, projects }) {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="cp-filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={active === cat.id ? "filter active" : "filter"}
            data-cat={cat.id}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
```

Check `Projects.html` for the exact filter button labels and the exact class name of the grid wrapper (grep for `class="filter"` and the parent of the `.project-card` links) — match both exactly; the names above (`cp-filter`, `projects-grid`, `filter`) are best guesses from the CSS file list and must be confirmed against the source.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add projects data module, ProjectCard, ProjectFilter

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 14: Home page — `/`

**Files:**
- Create: `app/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/index.html`

**Interfaces:**
- Consumes: `PROJECTS`, `FEATURED_SLUGS` (Task 13), `ProjectCard` (Task 13), `ConceptCardReveal` (Task 11).

- [ ] **Step 1: Convert page-specific `<style>` block**

`index.html` has a `<style>` block in its `<head>` (hero padding, `.top-projects` grid, `.process-grid`, `.skills-block`, `.impact-stats`, `.work-row`, responsive tweaks — already read in full during planning). Move it into `app/page.js` as a plain CSS file: create `app/page.module.css`? — **no**, per the Global Constraints (no CSS Modules). Instead, append this block's content to a new `app/styles/home.css` file, imported from `app/globals.css` right after `home-extras.css`, and add `@import "./styles/home.css";` to `app/globals.css`. Copy the `<style>` block's contents verbatim into `app/styles/home.css` (drop the `<style>`/`</style>` tags, keep the CSS as-is — it's already plain CSS, no conversion needed).

- [ ] **Step 2: Convert the body markup**

Copy `index.html`'s body content (hero, disciplines, top-projects section, design process, skills/tools/impact blocks, work history, concepts teaser, `#contact` anchor) into `app/page.js`'s JSX, applying the same HTML→JSX conversions as Task 12 Step 2 (class→className, self-closing tags, style strings→objects).

Replace the hardcoded top-projects cards with:

```js
const featured = FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug));
// ...
<div className="top-projects">
  {featured.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ))}
</div>
```

For the concepts-teaser section's `.concept-card` elements, copy them verbatim (they're static, non-interactive besides the hover CSS and the reveal-on-scroll `ConceptCardReveal` handles).

- [ ] **Step 3: Mount `ConceptCardReveal`**

At the end of the component's returned JSX (a client component isn't needed for the whole page — mount `<ConceptCardReveal />` as a leaf; it's already `"use client"` internally, and a client component can be rendered as a child of a server component):

```js
export default function HomePage() {
  return (
    <>
      {/* ...converted markup... */}
      <ConceptCardReveal />
    </>
  );
}
```

- [ ] **Step 4: Add page metadata**

```js
export const metadata = {
  title: "Vincent Mzee Mbindyo — Product Designer",
  description: "Product design portfolio — case studies, brand identity, and motion work by Vincent Mzee Mbindyo.",
};
```

(This overrides nothing from the root layout's `metadata` — Next.js merges/overrides per-segment automatically.)

- [ ] **Step 5: Verify**

`npm run dev`, compare `http://localhost:3000/` against `index.html` opened directly, at all three breakpoints: hero, disciplines grid, top 3 project cards (links go to `/work/fortune-ecash`, `/work/pikabox`, `/work/agriflow` — these routes don't exist until Tasks 12/18/19, so a 404 here is expected until those land; just confirm the `href`s are correct and the cards render), design process grid, skills/tools/impact stats, work history rows, concepts teaser cards (hover + reveal-on-scroll work), footer CTA.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Port Home page (/)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 15: Projects page — `/projects`

**Files:**
- Create: `app/projects/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/Projects.html`

**Interfaces:**
- Consumes: `PROJECTS` (Task 13), `ProjectFilter` (Task 13).

- [ ] **Step 1: Convert the body markup**

Copy `Projects.html`'s body content (hero/heading section) into JSX, same conversions as before. Replace the entire filter-buttons + card-grid block with:

```js
<ProjectFilter
  categories={[
    { id: "all", label: "All" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
    { id: "brand", label: "Brand" },
    { id: "poster", label: "Poster" },
    { id: "logo", label: "Logo" },
  ]}
  projects={PROJECTS}
/>
```

Confirm the exact filter category list/order/labels against `Projects.html`'s actual `.filter` buttons (grep `data-cat=` — the values found during planning were `all, brand, framer, logo, marketing, mobile, photo, poster, video, web`; only `all, mobile, web, brand, poster, logo` have matching `PROJECTS` entries per Task 13's data — check whether the source page actually renders filter buttons for `framer`/`marketing`/`photo`/`video` with zero matching cards, or whether those `data-cat` values only exist on elements elsewhere on the page. Match whatever the source page actually shows.)

- [ ] **Step 2: Add page metadata**

```js
export const metadata = {
  title: "Projects — Vincent Mzee Mbindyo",
  description: "All product design, brand identity, and showcase projects by Vincent Mzee Mbindyo.",
};
```

- [ ] **Step 3: Verify**

Compare against `Projects.html` at all three breakpoints: all 16 cards render with correct thumbnails/tags, each filter button shows only its category's cards, "All" shows everything, links go to the correct routes (some will 404 until later tasks land — confirm the `href`s only, per Task 14 Step 5's note).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Port Projects page (/projects)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 16: Concepts page — `/concepts`

**Files:**
- Create: `app/concepts/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/Concepts.html`

**Interfaces:**
- Consumes: `ConceptCardReveal` (Task 11).

- [ ] **Step 1: Convert the body markup**

Copy `Concepts.html`'s body content verbatim (hero, "How these get made" section, concept cards grid, "Related Projects" section, footer CTA heading) into JSX with the standard conversions. No modal/pillar/tab markup exists on this page (confirmed by grep — 0 matches for all interaction patterns).

- [ ] **Step 2: Mount `ConceptCardReveal`**

Same as Task 14 Step 3.

- [ ] **Step 3: Add page metadata**

```js
export const metadata = {
  title: "Concepts — Vincent Mzee Mbindyo",
  description: "Motion design and micro-interaction concepts by Vincent Mzee Mbindyo.",
};
```

- [ ] **Step 4: Verify**

Compare against `Concepts.html` at all three breakpoints: concept cards hover correctly, reveal-on-scroll staggers by index parity.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Port Concepts page (/concepts)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 17: Resume page — `/resume`

**Files:**
- Create: `app/resume/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/Resume.html`

**Interfaces:**
- Consumes: nothing beyond the root layout (no interaction components — confirmed by grep, no modal/pillar/tab markers, and its only script is `motion.js`, already covered by the root `ScrollReveal`).

- [ ] **Step 1: Copy the resume PDF**

```bash
cp "/Users/mac/Downloads/Draft Portfolio/assets/resume.pdf" public/resume.pdf
```

- [ ] **Step 2: Convert the body markup**

Copy `Resume.html`'s body content verbatim into JSX with the standard conversions. Update the download/print button's `href="assets/resume.pdf"` → `href="/resume.pdf"`.

- [ ] **Step 3: Add page metadata**

```js
export const metadata = {
  title: "Resume — Vincent Mzee Mbindyo",
  description: "Resume and work experience — Vincent Mzee Mbindyo, Senior Product Designer.",
};
```

- [ ] **Step 4: Verify**

Compare against `Resume.html` at all three breakpoints, and check print styles (`window.print()` or the browser's print preview) match `resume.css`'s print rules. Confirm the download link fetches `/resume.pdf` successfully.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Port Resume page (/resume)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Phase 3 — Remaining case studies (8 tasks)

Each task below follows the **exact same recipe as Task 12** (PikaBox): extract the page-local `MODALS`/`DEVICE_COPY` data from the source file's inline `<script>`, convert the body markup with the same HTML→JSX rules, wire the shared components per that page's component matrix (given per task below, derived from grepping every source file's interaction markers during planning), verify against the original at three breakpoints, commit. Only the differences from Task 12 are spelled out per task; don't re-derive the conversion rules — reuse Task 12 Steps 2–4 verbatim, substituting the source file, destination route, and component matrix below.

---

### Task 18: Fortune eCash v2 — `/work/fortune-ecash`

**Files:** Create `app/work/fortune-ecash/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Fortune eCash v2.html` and `/Users/mac/Downloads/Draft Portfolio/assets/interactions.js` (this page's `MODALS`/device-copy data was already fully read during planning — it's defined in `interactions.js`, not inline in the HTML, unlike every other case study; copy the `MODALS` object and the `deviceCopy` object from that file instead of from an inline `<script>` in the HTML).

**Component matrix:** `ModalProvider`/`ModalTrigger`/`ModalRoot` ✓, `DeviceChipsProvider`/`DeviceChip`/`DeviceReadout` ✓, `ProcessRail` ✓ **with `scrollTargets={['Research & Analysis', 'Define & Ideate', 'Wireframing & Prototyping', 'Usability Testing', 'Design System', 'Design Comparison']}`** (this is the one page with the scroll-to enhancement — see Task 6), `TabGroup` (`ds` variant) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, `BeforeAfterCompare`/`BeforeAfterCompare.Frame` ✓ (first and only use — read the `.cmp-btn`/`.cmp-frame` markup in this source file directly, since no earlier task exercised it), native `<details className="pillar">` ✓. No `TabGroup` `screens` variant (no `scrTabs` in this page).

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4 against this source/destination/matrix.
- [ ] **Step 5: Commit** — `git commit -m "Port Fortune eCash v2 case study (/work/fortune-ecash)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 19: AgriFlow — `/work/agriflow`

**Files:** Create `app/work/agriflow/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/AgriFlow.html`.

**Component matrix:** Same shape as PikaBox (Task 12) — `Modal` ✓, `DeviceChips` ✓, `ProcessRail` ✓ (no `scrollTargets` — this page uses the plain `interactions-lib.js` behavior, not Fortune's enhancement), `TabGroup` (`ds` variant) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓. No `BeforeAfterCompare`, no `screens` variant.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port AgriFlow case study (/work/agriflow)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 20: Advenio — `/work/advenio`

**Files:** Create `app/work/advenio/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Advenio.html`.

**Component matrix:** `Modal` ✓, `DeviceChips` ✓, `TabGroup` (`ds` variant) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓, **`TabGroup` (`screens` variant, `tabClassName="scr-tab" paneClassName="scr-pane"` id `"scrTabs"`) ✓ — first use of this variant; read the `#scrTabs`/`.scr-tab`/`.scr-pane` markup in this source file directly and confirm `TabGroup` renders it correctly with `screens.css`'s styling.** No `ProcessRail`, no `BeforeAfterCompare`.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port Advenio case study (/work/advenio)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 21: MLearn — `/work/mlearn`

**Files:** Create `app/work/mlearn/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/MLearn.html`.

**Component matrix:** Same shape as Advenio (Task 20) — `Modal` ✓, `DeviceChips` ✓, `TabGroup` (`ds` variant) ✓, `TabGroup` (`screens` variant) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓. No `ProcessRail`, no `BeforeAfterCompare`.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port MLearn case study (/work/mlearn)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 22: Toedur — `/work/toedur`

**Files:** Create `app/work/toedur/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Toedur.html`.

**Component matrix:** Same shape as Advenio/MLearn — `Modal` ✓, `DeviceChips` ✓, `TabGroup` (`ds` + `screens` variants) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓. No `ProcessRail`, no `BeforeAfterCompare`.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port Toedur case study (/work/toedur)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 23: Simplia — `/work/simplia`

**Files:** Create `app/work/simplia/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Simplia.html`.

**Component matrix:** Same shape as Toedur — `Modal` ✓, `DeviceChips` ✓, `TabGroup` (`ds` + `screens` variants) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓. No `ProcessRail`, no `BeforeAfterCompare`.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port Simplia case study (/work/simplia)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 24: Chii Neema — `/work/chii-neema`

**Files:** Create `app/work/chii-neema/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Chii Neema.html`.

**Component matrix:** Same shape as Toedur/Simplia — `Modal` ✓, `DeviceChips` ✓, `TabGroup` (`ds` + `screens` variants) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓. No `ProcessRail`, no `BeforeAfterCompare`.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port Chii Neema case study (/work/chii-neema)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 25: Tickety — `/work/tickety`

**Files:** Create `app/work/tickety/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Tickety.html`.

**Component matrix:** Same shape as Advenio/MLearn — `Modal` ✓, `DeviceChips` ✓, `TabGroup` (`ds` + `screens` variants) ✓, `ThemeToggle` ✓, `PrototypeDock` ✓, native pillar accordion ✓. No `ProcessRail`, no `BeforeAfterCompare`.

- [ ] **Step 1–4:** Follow Task 12 Steps 1–4.
- [ ] **Step 5: Commit** — `git commit -m "Port Tickety case study (/work/tickety)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

## Phase 4 — Brand identity pages (5 tasks)

Simpler than the case studies: only `Modal` and `PrototypeDock` apply (confirmed by grep — no `dchip`, `tt-btn`, `dsTabs`, `scrTabs`, or `rail-step` on any of the 5 brand pages), plus native `<details className="pillar">` accordions. Each source file's inline `<script>` (before `interactions-lib.js`/`motion.js`) holds that page's `window.__MODALS` (device copy is not used on brand pages — there's no `window.__DEVICE_COPY` to extract). Follow Task 12 Steps 1–4 with this narrower component matrix; the page-specific `--bi-*` CSS custom properties are already in `brand.css` (ported in Task 2) and need no JS wiring.

---

### Task 26: Amarachi — `/brand/amarachi`

**Files:** Create `app/brand/amarachi/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Amarachi.html`.

- [ ] **Step 1–4:** Extract `MODALS` from the inline script; convert body markup; wire `ModalProvider`/`ModalTrigger`/`ModalRoot` and `PrototypeDock`; leave `<details className="pillar">` native; verify against the source at three breakpoints.
- [ ] **Step 5: Commit** — `git commit -m "Port Amarachi brand identity page (/brand/amarachi)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 27: Everything Riri — `/brand/everything-riri`

**Files:** Create `app/brand/everything-riri/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Everything Riri.html`.

- [ ] **Step 1–4:** Same recipe as Task 26.
- [ ] **Step 5: Commit** — `git commit -m "Port Everything Riri brand identity page (/brand/everything-riri)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 28: Kindhearts — `/brand/kindhearts`

**Files:** Create `app/brand/kindhearts/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Kindhearts.html`.

- [ ] **Step 1–4:** Same recipe as Task 26.
- [ ] **Step 5: Commit** — `git commit -m "Port Kindhearts brand identity page (/brand/kindhearts)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 29: Daftari Kenya — `/brand/daftari-kenya`

**Files:** Create `app/brand/daftari-kenya/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Daftari Kenya.html`.

- [ ] **Step 1–4:** Same recipe as Task 26.
- [ ] **Step 5: Commit** — `git commit -m "Port Daftari Kenya brand identity page (/brand/daftari-kenya)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

### Task 30: Brea Cakes — `/brand/brea-cakes`

**Files:** Create `app/brand/brea-cakes/page.js`. Source: `/Users/mac/Downloads/Draft Portfolio/Brea Cakes.html`.

- [ ] **Step 1–4:** Same recipe as Task 26.
- [ ] **Step 5: Commit** — `git commit -m "Port Brea Cakes brand identity page (/brand/brea-cakes)\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"`

---

## Phase 5 — Showcases

### Task 31: ShowcaseFilterButtons component + Posterfolio — `/posterfolio`

**Files:**
- Create: `components/ShowcaseFilterButtons.js`
- Create: `app/posterfolio/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/Posterfolio.html`

**Interfaces:**
- Produces: `<ShowcaseFilterButtons labels={string[]} />` — port of the identical inline script both Posterfolio and Logofolio use (`.showcase-filter button` click toggles `.active`; purely a visual active-state, no content filtering, confirmed by reading both source scripts during planning).

- [ ] **Step 1: Write `components/ShowcaseFilterButtons.js`**

```js
"use client";

import { useState } from "react";

export default function ShowcaseFilterButtons({ labels }) {
  const [active, setActive] = useState(0);
  return (
    <div className="showcase-filter">
      {labels.map((label, i) => (
        <button
          key={label}
          type="button"
          className={i === active ? "active" : undefined}
          onClick={() => setActive(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
```

Confirm the exact button labels against `Posterfolio.html`'s `.showcase-filter` block (grep for `showcase-filter` and read its button text) before finalizing the `labels` array passed in from the page.

- [ ] **Step 2: Convert the body markup**

Copy `Posterfolio.html`'s body content into JSX with the standard conversions, replacing its `.showcase-filter` block with `<ShowcaseFilterButtons labels={[...]} />` using the confirmed labels.

- [ ] **Step 3: Add page metadata**

```js
export const metadata = {
  title: "Posterfolio — Vincent Mzee Mbindyo",
  description: "Poster and print design showcase by Vincent Mzee Mbindyo.",
};
```

- [ ] **Step 4: Verify**

Compare against `Posterfolio.html` at all three breakpoints.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add ShowcaseFilterButtons and port Posterfolio (/posterfolio)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 32: Logofolio — `/logofolio`

**Files:**
- Create: `app/logofolio/page.js`
- Source: `/Users/mac/Downloads/Draft Portfolio/Logofolio.html`

**Interfaces:**
- Consumes: `ShowcaseFilterButtons` (Task 31).

- [ ] **Step 1: Convert the body markup**

Same recipe as Task 31 Steps 2–4, using `Logofolio.html` as the source and confirming its own `.showcase-filter` button labels (they may differ from Posterfolio's).

- [ ] **Step 2: Add page metadata**

```js
export const metadata = {
  title: "Logofolio — Vincent Mzee Mbindyo",
  description: "Logo and wordmark design showcase by Vincent Mzee Mbindyo.",
};
```

- [ ] **Step 3: Verify**

Compare against `Logofolio.html` at all three breakpoints.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Port Logofolio (/logofolio)

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

## Phase 6 — Metadata & deployment

### Task 33: Sitemap and robots

**Files:**
- Create: `app/sitemap.js`
- Create: `app/robots.js`

**Interfaces:**
- Produces: `/sitemap.xml` and `/robots.txt` routes, auto-generated by Next.js's file conventions.

Per-page `metadata` exports were already added in each page's own task (14–17, 26–32) plus Task 12/18–25 for case studies (add `export const metadata = {...}` with a title/description to each of those 9 case-study `page.js` files now if not already present as part of finishing this task — case studies didn't get an explicit metadata step in Tasks 12/18–25 above, since the title/description text needs deciding per project; use each project's `title`/`tagline`-equivalent copy from its own hero section as the description).

- [ ] **Step 1: Add metadata to the 9 case-study pages**

For each of `app/work/*/page.js`, add near the top:

```js
export const metadata = {
  title: "<Project Title> — Vincent Mzee Mbindyo",
  description: "<one-sentence summary from that page's own hero/tagline copy>",
};
```

- [ ] **Step 2: Write `app/sitemap.js`**

```js
const routes = [
  "", "/projects", "/concepts", "/resume",
  "/work/pikabox", "/work/fortune-ecash", "/work/agriflow", "/work/advenio",
  "/work/mlearn", "/work/toedur", "/work/simplia", "/work/chii-neema", "/work/tickety",
  "/brand/amarachi", "/brand/everything-riri", "/brand/kindhearts",
  "/brand/daftari-kenya", "/brand/brea-cakes",
  "/posterfolio", "/logofolio",
];

export default function sitemap() {
  const base = "https://vincentmzeembindyo.design";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
```

- [ ] **Step 3: Write `app/robots.js`**

```js
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://vincentmzeembindyo.design/sitemap.xml",
  };
}
```

- [ ] **Step 4: Verify**

`npm run dev`, visit `http://localhost:3000/sitemap.xml` and `http://localhost:3000/robots.txt` — both render valid output listing all 20 routes.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add per-page metadata, sitemap, and robots.txt

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 34: Production build check and Vercel deployment wiring

**Files:** none created — verification and (optional, ask-first) deployment only.

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: build completes with no errors. Fix any errors surfaced (missing `"use client"` directives, invalid JSX, etc.) before proceeding.

- [ ] **Step 2: Full-site link check**

```bash
npm run start
```

With the production server running, click through every nav link, every `/projects` card, every footer link, confirming no 404s and no console errors, at all three breakpoints on at least the Home, one case study, one brand page, and Projects.

- [ ] **Step 3: Deploy — only after explicit go-ahead**

Do not run `vercel deploy` or push to the `origin` remote without asking first (this is outward-facing and was not part of the approved spec's execution — the spec named Vercel as the target host but didn't authorize an unattended deploy). When ready, either use the `claude.ai Vercel` MCP tools available in this environment, or hand off:

```bash
git push -u origin main
```

then import the repo in the Vercel dashboard (framework preset: Next.js, no config needed).

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "Final verification pass

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```
