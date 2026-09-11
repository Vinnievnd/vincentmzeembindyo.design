"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import PrototypeDock from "@/components/PrototypeDock";
import useBodyClass from "@/lib/useBodyClass";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Brand & Packaging Designer","body":"<p>Led identity and packaging: logo system, colour and type, a scalable label architecture across five product formats, social templates, and the production artwork handed to the fulfilment partner.</p>"},"m-industry":{"eyebrow":"Deliverable","title":"Identity + packaging system","body":"<p>Primary wordmark, monogram, a five-colour palette with per-line accent, a two-typeface hierarchy, label templates for tube, jar, bottle, sachet, and carton, plus a nine-tile social system.</p>"},"m-skills":{"eyebrow":"Sector","title":"Beauty · DTC","body":"<p>Direct-to-consumer skincare and body care, sold through Instagram and a Shopify storefront, with regulatory ingredient labelling required on every unit.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"9 weeks","body":"<p>Nine weeks: discovery and audit, three identity routes, packaging architecture, then production artwork and guidelines.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Where the brand stood","body":"<p>Everything Riri had product-market fit before it had a brand. Growth came from the founder's own audience, and every new SKU was designed reactively by whoever was available. The range worked individually and failed collectively.</p><ul><li>Each product launched with its own label design, so the range read as five unrelated brands on a shelf.</li><li>Ingredient and compliance copy was added last and squeezed wherever it fit, often at illegible sizes.</li><li>The logo existed only as a raster file at one size, with no vector, no clear-space rule, and no reverse version.</li><li>Social content was designed per post, making a consistent grid impossible and slowing the founder down.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"What was at stake","body":"<p>The brand was scaling faster than its design process. Without a system the founder could operate herself, every future SKU would reintroduce the same inconsistency the rebrand was meant to fix.</p><ul><li>In beauty, the unboxing is the marketing. Packaging is the highest-leverage surface the brand owns.</li><li>A range that reads as one system lets a customer buy a second product without re-deciding.</li><li>Regulatory copy is not negotiable; designing for it up front is the only way it does not ruin the layout.</li><li>A founder-led brand needs templates, not bespoke design, or the identity degrades the moment the designer leaves.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"How we tested it","body":"<p>Validated with printed dielines rather than flat mockups, plus a founder-run test where she produced a new SKU label from the template with no design support.</p><ul><li>Shelf test: do five products photographed together read as one range?</li><li>Legibility: is INCI ingredient copy readable at 5.5 pt on a 30 ml tube?</li><li>Founder autonomy: can she produce a compliant new SKU label from the template unaided?</li><li>Social coherence: does a nine-tile grid hold without bespoke design per post?</li></ul>"}};

export default function EverythingRiriPage() {
  useBodyClass("bi-theme");

  return (
    <ModalProvider modals={MODALS}>
      <style>{`body.bi-theme{--bi-deep:#3B1B2E;--bi-deep-2:#2C1322;--bi-deep-3:#1E0C17;--bi-accent:#E8927C;--bi-accent-2:#D0705A;--bi-accent-soft:#FAE0D8;--bi-cream:#FBF3EF;--bi-on-deep:#FBF3EF;--bi-on-accent:#2C1322}`}</style>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Brand Identity · 2022</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">Everything Riri</h1>
          <p className="proj-tagline">A cosmetics identity and packaging system built for a founder-led brand — expressive enough to stop a scroll, disciplined enough to carry ingredient and compliance copy on a 30 ml tube.</p>
          <div className="proj-tags"><span className="pill">Brand Identity</span><span className="pill">Packaging Design</span><span className="pill">Logo System</span><span className="pill">Colour System</span><span className="pill">Typography</span><span className="pill">Art Direction</span><span className="pill">Social System</span></div>
        </header>

        <section className="bi-hero" aria-label="Everything Riri identity">
          <div className="bi-hero-grid">
            <div className="bi-stage">
              <span className="bi-orb a"></span><span className="bi-orb b"></span>
              <div className="bi-tag">Brand Identity System</div>
              <div><div className="bi-mark">R</div><div className="bi-name">Everything Riri</div></div>
              <div className="bi-words"><span>Expressive</span><span>Tactile</span><span>Confident</span></div>
            </div>
            <div className="bi-side">
              <div className="bi-mini pal">
                <div className="mini-h">Colour system · 6 tokens</div>
                <div className="bi-swatches"><i style={{ background: '#3B1B2E' }}></i><i style={{ background: '#E8927C' }}></i><i style={{ background: '#FBF3EF' }}></i><i style={{ background: '#D0705A' }}></i><i style={{ background: '#C9A227' }}></i></div>
                <div className="mini-h">#3B1B2E / #E8927C</div>
              </div>
              <div className="bi-mini type">
                <div className="mini-h">Type · Editorial New + Suisse Int&apos;l</div>
                <div className="aa">Aa</div>
                <div className="set">ABCDEFGHIJKLM<br />abcdefghijklm 0123456789</div>
              </div>
            </div>
          </div>
          <PrototypeDock label="Open Case Files">
            <div className="proto-pop-h">Case files</div>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Brand guidelines PDF — coming soon</a>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Behance gallery — coming soon</a>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Asset pack — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway the identity was built on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable"><div className="info-eyebrow">Role</div><div className="info-h">Brand &amp; Packaging Designer</div><div className="info-d">Brand Identity · Packaging Design · Logo System · Colour System</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable"><div className="info-eyebrow">Deliverable</div><div className="info-h">Identity + packaging system</div><div className="info-d">Cosmetics · Packaging system</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable"><div className="info-eyebrow">Sector</div><div className="info-h">Beauty · DTC</div><div className="info-d">Expressive · Tactile · Confident</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable"><div className="info-eyebrow">Timeline</div><div className="info-h">9 weeks</div><div className="info-d">2022 · discovery to vendor handoff.</div><div className="info-more">Tap to expand →</div></ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses on the same problem: where the brand stood, what was at stake, and how we would know the system worked.</p>
          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div><h3 className="three-h">Current Problem</h3>
              <ul className="three-list"><li>Each product launched with its own label design, so the range read as five unrelated brands on a shelf.</li><li>Ingredient and compliance copy was added last and squeezed wherever it fit, often at illegible sizes.</li><li>The logo existed only as a raster file at one size, with no vector, no clear-space rule, and no reverse version.</li><li>Social content was designed per post, making a consistent grid impossible and slowing the founder down.</li></ul>
              <span className="three-cta">Read the full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div><h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>In beauty, the unboxing is the marketing. Packaging is the highest-leverage surface the brand owns.</li><li>A range that reads as one system lets a customer buy a second product without re-deciding.</li><li>Regulatory copy is not negotiable; designing for it up front is the only way it does not ruin the layout.</li><li>A founder-led brand needs templates, not bespoke design, or the identity degrades the moment the designer leaves.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div><h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Shelf test: do five products photographed together read as one range?</li><li>Legibility: is INCI ingredient copy readable at 5.5 pt on a 30 ml tube?</li><li>Founder autonomy: can she produce a compliant new SKU label from the template unaided?</li><li>Social coherence: does a nine-tile grid hold without bespoke design per post?</li></ul>
              <span className="three-cta">See the test plan →</span>
            </ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="identity">
          <div className="kicker"><span className="kicker-num">03</span><h2 className="kicker-title">Brand Identity Elements</h2></div>
          <p className="ps-sub">A guideline is a functional toolkit, not a gallery. Nine elements, each with a rule attached: construction, clear space, minimum size, colour, type, misuse, iconography, pattern, and voice.</p>
          <div className="bento">

            <div className="bx c5 dark">
              <div className="bx-h"><span>01 · Logo construction</span><b>Grid</b></div>
              <div className="lg-grid"><span className="ax h"></span><span className="ax v"></span><span className="ring"></span><span className="m">R</span></div>
              <p className="bx-p">The wordmark is drawn from a single continuous stroke, with the <strong>R</strong> leg extending into an underline that doubles as the range rule on packaging. The monogram nests two Rs into a rounded lozenge that works as an app icon, a jar lid emboss, and a sticker seal.</p>
            </div>
            <div className="bx c4">
              <div className="bx-h"><span>02 · Clear space</span><b>x</b></div>
              <div className="cs-box"><span className="x t">x</span><span className="x l">x</span><div className="inner">R</div></div>
              <p className="bx-p">Clear space equals the width of the <strong>R</strong> bowl on all sides. On packaging the underline stroke may bleed to the edge, which is the one sanctioned exception.</p>
            </div>
            <div className="bx c3 accent">
              <div className="bx-h"><span>03 · Minimum size</span></div>
              <div className="bx-t">5.5pt</div>
              <p className="bx-p">Compliant INCI floor. Below this, the wordmark is dropped and the monogram is used alone.</p>
              <div className="bx-foot">Tested in production</div>
            </div>

            <div className="bx c7">
              <div className="bx-h"><span>04 · Colour system</span><b>6 tokens</b></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#3B1B2E' }}></div><div className="m"><b>Plum</b><span>#3B1B2E · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#E8927C' }}></div><div className="m"><b>Riri Blush</b><span>#E8927C · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#FBF3EF' }}></div><div className="m"><b>Petal</b><span>#FBF3EF · Background</span></div></div></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#D0705A' }}></div><div className="m"><b>Clay</b><span>#D0705A · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#C9A227' }}></div><div className="m"><b>Gilt</b><span>#C9A227 · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#101211' }}></div><div className="m"><b>Ink</b><span>#101211 · Text</span></div></div></div>
              <p className="bx-p">Every pairing is specified for print and screen and tested to WCAG AA before it enters the system.</p>
            </div>
            <div className="bx c5 cream">
              <div className="bx-h"><span>05 · Typography</span><b>2 families</b></div>
              <div className="ty-row"><span className="s">Display</span><span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-.025em', color: 'var(--bi-deep)' }}>Editorial New</span></div>
              <div className="ty-row"><span className="s">Text</span><span style={{ fontWeight: 600, fontSize: 'clamp(16px,2vw,22px)' }}>Suisse Int&apos;l</span></div>
              <div className="ty-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 &amp; @ · % ( ) —</div>
              <p className="bx-p">A high-contrast display serif carries the brand voice on front-of-pack and campaign work. A neutral grotesk handles ingredient lists, directions, and compliance copy, where personality would cost legibility.</p>
            </div>

            <div className="bx c6">
              <div className="bx-h"><span>06 · Forbidden usage</span><b>6 rules</b></div>
              <div className="dont">
                <div className="s1">R<span>Do not letterspace</span></div>
                <div className="s2">R<span>Do not italicise</span></div>
                <div className="s3">R<span>Do not tint</span></div>
                <div className="s4">R<span>Do not resubstitute</span></div>
                <div className="s5">R<span>Do not gradient</span></div>
                <div className="s6"><b>R</b><span>Do not stretch</span></div>
              </div>
              <p className="bx-p">Six explicit misuse cases, each with a visual example. Rules beat guidance — vendors follow what they can see.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>07 · Iconography</span><b>8</b></div>
              <div className="ic-set">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="2.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9.5V5M12 14.5V19M9.5 12H5M14.5 12H19M10.2 10.2 7.1 7.1M13.8 13.8l3.1 3.1M13.8 10.2l3.1-3.1M10.2 13.8l-3.1 3.1"/></svg><span>Botanical</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v3H9zM8.5 6h7v13a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8.5 11h7"/></svg><span>Format</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="9" cy="14" r="4.5"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="16.5" cy="9" r="2.8"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="17.5" cy="16.5" r="1.6"/></svg><span>Cleanse</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13 4.5 11l5.6-2z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M18.5 4v3M17 5.5h3"/></svg><span>Finish</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="3.5" y="8" width="17" height="10" rx="3"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 8V6.5a2.5 2.5 0 0 1 5 0V8"/></svg><span>Body</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c3.5 4 5.5 6.6 5.5 9.5a5.5 5.5 0 0 1-11 0c0-2.9 2-5.5 5.5-9.5Z"/></svg><span>Hydrate</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 5.5 5 11h5M16 5.5 19 11h-5M12 20.5 9 15h6z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 11l-1.2 3M19 11l1.2 3"/></svg><span>Refill</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="8"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-5"/></svg><span>Certified</span></div>
              </div>
              <p className="bx-p">Eight glyphs on a 24 px grid at a single 1.5 px stroke, sharing the wordmark’s rounded terminals. Always paired with a label, including the regulatory symbols on-pack.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>08 · Pattern</span></div>
              <div className="pat c"></div>
              <p className="bx-p">A soft lozenge repeat taken from the monogram counter. Printed as a spot gloss on matte cartons and used at low opacity behind social copy.</p>
            </div>

            <div className="bx c12">
              <div className="bx-h"><span>09 · Voice &amp; tone</span><b>4 pillars</b></div>
              <div className="pillars-row"><div className="vp"><b>Direct</b><span>Says what the product does in one line.</span></div><div className="vp"><b>Unfussy</b><span>No invented science, no borrowed French.</span></div><div className="vp"><b>Generous</b><span>Full ingredient list, front and centre.</span></div><div className="vp"><b>Playful</b><span>Only in campaign copy, never on-pack.</span></div></div>
            </div>
          </div>
        </section>

        <section className="proj-section" id="results">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">Outcomes first, then the decisions that produced them.</p>
          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip"><div className="istat lift"><div className="n">5</div><div className="l">SKU formats systemised</div></div><div className="istat lift"><div className="n">+58%</div><div className="l">Repeat purchase</div></div><div className="istat lift"><div className="n">5.5pt</div><div className="l">Compliant INCI floor</div></div><div className="istat lift"><div className="n">9</div><div className="l">Social template tiles</div></div></div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip"><div className="istat lift"><div className="n">3</div><div className="l">Identity routes</div></div><div className="istat lift"><div className="n">9 wks</div><div className="l">Brief to production</div></div><div className="istat lift"><div className="n">1</div><div className="l">Founder-run template</div></div><div className="istat lift"><div className="n">24pp</div><div className="l">Packaging guideline</div></div></div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the decisions underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary><span className="pillar-num">01</span><span className="pillar-h">One label architecture across five formats</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Fixed zones</div><p>Mark, product name, size, and INCI block occupy the same relative positions on tube, jar, bottle, sachet, and carton.</p></div><div className="pillar-col"><div className="pillar-col-h">Per-line accent</div><p>Each product line gets one accent colour; everything else stays constant, so the range reads as a family.</p></div><div className="pillar-col"><div className="pillar-col-h">Dieline-first</div><p>Every layout designed on the real dieline, not a flat rectangle, so nothing lands on a seam or a curve.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">02</span><span className="pillar-h">Compliance designed in, not squeezed in</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">INCI floor</div><p>Ingredient copy locked at 5.5 pt minimum with a tested line length, proven on printed proofs.</p></div><div className="pillar-col"><div className="pillar-col-h">Fixed lower band</div><p>Directions, warnings, batch, and expiry share a dedicated band that never moves between SKUs.</p></div><div className="pillar-col"><div className="pillar-col-h">Symbols set</div><p>Period-after-opening, recycling, and volume marks drawn to match the icon set rather than pasted in.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">03</span><span className="pillar-h">A system the founder can run</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Editable templates</div><p>Locked-layer artwork files where only copy and accent colour are editable.</p></div><div className="pillar-col"><div className="pillar-col-h">SKU checklist</div><p>A one-page pre-press checklist covering the six things that had previously gone wrong.</p></div><div className="pillar-col"><div className="pillar-col-h">Nine-tile social grid</div><p>Three layout types rotating across a nine-tile grid, so the feed composes itself.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">04</span><span className="pillar-h">Unboxing as the primary campaign</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Carton interior</div><p>Pattern printed inside the carton so it reveals on opening.</p></div><div className="pillar-col"><div className="pillar-col-h">Seal sticker</div><p>Monogram lozenge as a tamper seal that customers photograph without being asked.</p></div><div className="pillar-col"><div className="pillar-col-h">Insert card</div><p>Ingredient rationale in the founder&apos;s voice, one product per card.</p></div></div>
            </details>
          </div>
        </section>

        <section className="proj-section" id="mockups">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Applications &amp; Mockups</h2></div>
          <p className="ps-sub">The system off-screen. Every application below was produced against the rules in Section 03, and each one tested a different constraint.</p>
          <div className="bi-mocks">
            <div className="bm c3">
              <div className="bm-stage dark"><div className="o-pack"><b>Riri</b><em>RIRI</em></div></div>
              <div className="bm-cap"><span className="bm-t">Primary carton</span><span className="bm-m">Matte board · Spot gloss</span></div>
              <p className="bm-d">Front-of-pack architecture with the pattern printed inside so it reveals on opening.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-label"><b>Riri</b><em>Cosmetics · Packaging system</em></div></div>
              <div className="bm-cap"><span className="bm-t">Tube label</span><span className="bm-m">30 ml · Coated</span></div>
              <p className="bm-d">The tightest format. Proved the 5.5 pt INCI floor and the fixed lower band.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-stamp">R</div></div>
              <div className="bm-cap"><span className="bm-t">Seal sticker</span><span className="bm-m">Die-cut · 38 mm</span></div>
              <p className="bm-d">Monogram lozenge as tamper seal. The most photographed element of the unboxing.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage dark"><div className="o-social"><div>Expressive<em>01</em></div><div>Tactile<em>02</em></div><div>Confident<em>03</em></div><div>Riri<em>04</em></div><div>2026<em>05</em></div></div></div>
              <div className="bm-cap"><span className="bm-t">Campaign grid</span><span className="bm-m">Instagram · 9 tiles</span></div>
              <p className="bm-d">Three rotating layout types. The founder composes a month of feed in one sitting.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage brand"><div className="o-app"><i>R</i><i>R</i><i>R</i></div></div>
              <div className="bm-cap"><span className="bm-t">Icon set</span><span className="bm-m">iOS · Android · Web</span></div>
              <p className="bm-d">Monogram in three lockups so the Shopify storefront and app share one mark.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-tote"><span>R</span></div></div>
              <div className="bm-cap"><span className="bm-t">Order tote</span><span className="bm-m">Cotton · Two-colour</span></div>
              <p className="bm-d">Included with orders above a threshold. Wordmark with the underline bleeding off-edge.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage accent"><div className="o-bill"><div><div className="h">Expressive.<br />Tactile.</div><div className="u">riri.co.ke</div></div><div className="dot"></div></div></div>
              <div className="bm-cap"><span className="bm-t">Launch campaign</span><span className="bm-m">OOH · 6 × 3 m</span></div>
              <p className="bm-d">Plum field, blush mark, one line of copy. The underline runs the full width of the board.</p>
            </div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list"><li>Designing on the real dieline rather than a flat rectangle caught six problems that would otherwise have shown up on the first print run.</li><li>Treating compliance copy as a design element instead of an obligation made the packaging better, not worse.</li><li>The founder-run template test was the most useful validation in the project. If she could not produce a SKU unaided, the system had failed.</li></ul>
        </section>

        <section className="proj-section">
          <div className="section-head" style={{ marginTop: '12px' }}>
            <h2 className="h-section" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Other Brand Work</h2>
            <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
          </div>
          <div className="other-grid">
            <Link href="/brand/amarachi" className="project-card">
              <div className="thumb" style={{ background: '#1F4227', display: 'grid', placeItems: 'center', aspectRatio: '760/1009' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: 'clamp(56px,9vw,104px)', color: '#C7D94F', letterSpacing: '-.045em', lineHeight: '1' }}>A</div>
              </div>
              <div className="row"><span className="title">Amarachi Fresh Produce</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">Brand Identity</span><span className="pill">Logo System</span><span className="pill">Packaging</span><span className="pill">Colour System</span></div>
            </Link>
            <Link href="/brand/kindhearts" className="project-card">
              <div className="thumb" style={{ background: '#1B3A5C', display: 'grid', placeItems: 'center', aspectRatio: '760/1009' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: 'clamp(56px,9vw,104px)', color: '#F0A93B', letterSpacing: '-.045em', lineHeight: '1' }}>K</div>
              </div>
              <div className="row"><span className="title">Kindhearts Foundation</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">Brand Identity</span><span className="pill">Non-profit</span><span className="pill">Logo System</span><span className="pill">Colour System</span></div>
            </Link>
            <Link href="/brand/daftari-kenya" className="project-card">
              <div className="thumb" style={{ background: '#22304A', display: 'grid', placeItems: 'center', aspectRatio: '760/1009' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: 'clamp(56px,9vw,104px)', color: '#E4572E', letterSpacing: '-.045em', lineHeight: '1' }}>D</div>
              </div>
              <div className="row"><span className="title">Daftari Kenya</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">Brand Identity</span><span className="pill">Logo System</span><span className="pill">Print</span><span className="pill">Colour System</span></div>
            </Link>
          </div>
        </section>
      </main>

      <ModalRoot />
    </ModalProvider>
  );
}
