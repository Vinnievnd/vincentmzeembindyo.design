"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import PrototypeDock from "@/components/PrototypeDock";
import useBodyClass from "@/lib/useBodyClass";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Brand Designer","body":"<p>Owned the identity end to end: naming support, logo system, colour and type, packaging application, and a 28-page brand guideline document handed to the client's print and export partners.</p>"},"m-industry":{"eyebrow":"Deliverable","title":"Full identity system","body":"<p>Primary and secondary marks, a monogram, clear-space and misuse rules, a six-colour system, a two-typeface hierarchy, an icon set, a produce-crate pattern, and applications across cartons, labels, signage, and stationery.</p>"},"m-skills":{"eyebrow":"Sector","title":"Agriculture · Export","body":"<p>Fresh produce grown in Kirinyaga and Nyandarua, sold into local wholesale markets and exported to EU buyers. Packaging carries regulatory traceability data alongside brand.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"7 weeks","body":"<p>Seven weeks across discovery, three logo routes, refinement, and guideline production.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Where the brand stood","body":"<p>Amarachi had built a genuine export business on relationships, not on brand. Every touchpoint — cartons, crate labels, market banners, the WhatsApp catalogue — had been produced separately by a different vendor. The result read as several small businesses rather than one exporter with a supply chain behind it.</p><ul><li>The business traded under a hand-set wordmark that changed with whichever printer produced the cartons that season.</li><li>No colour specification existed, so the same green rendered differently across print, vinyl, and screen.</li><li>Export buyers could not distinguish Amarachi cartons from unbranded produce at the receiving dock.</li><li>Traceability data was printed as an afterthought, competing with the logo for space on the carton face.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"What was at stake","body":"<p>Fresh produce is a low-margin, high-trust category. Buyers commit to suppliers who look like they will still be operating next season, and a coherent identity is the cheapest available signal of that.</p><ul><li>In produce export, the carton is the brand. It is the only thing a European buyer physically handles before the fruit.</li><li>Inconsistent colour across print runs signals inconsistent product quality, whether or not that is fair.</li><li>Traceability is a regulatory requirement and a selling point; the layout should make it legible, not bury it.</li><li>A single recognisable mark shortens the distance between a market stall sale and an export contract.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"How we tested it","body":"<p>Tested with the client's own dock team and two EU buyers, using printed proofs rather than screen mockups. The 40 mm crate label was the hardest constraint and drove the monogram design.</p><ul><li>Recognition test: can a buyer identify an Amarachi carton at ten metres on a loading dock?</li><li>Print fidelity: does the green hold across offset, flexographic carton print, and vinyl?</li><li>Legibility: is traceability data readable at arm's length without competing with the mark?</li><li>Application coverage: does the system survive on a crate label at 40 mm and a market banner at 3 m?</li></ul>"}};

export default function AmarachiPage() {
  useBodyClass("bi-theme");

  return (
    <ModalProvider modals={MODALS}>
      <style>{`body.bi-theme{--bi-deep:#1F4227;--bi-deep-2:#16311D;--bi-deep-3:#0E2013;--bi-accent:#C7D94F;--bi-accent-2:#9CB52F;--bi-accent-soft:#EAF2BE;--bi-cream:#F7F5EC;--bi-on-deep:#F7F5EC;--bi-on-accent:#16311D}`}</style>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Brand Identity · 2022</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">Amarachi Fresh Produce</h1>
          <p className="proj-tagline">A visual identity for a Kenyan fresh-produce exporter, built to read as clean and traceable on a shipping carton, a market stall banner, and a European buyer&apos;s procurement deck alike.</p>
          <div className="proj-tags"><span className="pill">Brand Identity</span><span className="pill">Logo System</span><span className="pill">Packaging</span><span className="pill">Colour System</span><span className="pill">Typography</span><span className="pill">Brand Guidelines</span><span className="pill">Art Direction</span></div>
        </header>

        <section className="bi-hero" aria-label="Amarachi Fresh Produce identity">
          <div className="bi-hero-grid">
            <div className="bi-stage">
              <span className="bi-orb a"></span><span className="bi-orb b"></span>
              <div className="bi-tag">Brand Identity System</div>
              <div><div className="bi-mark">A</div><div className="bi-name">Amarachi Fresh Produce</div></div>
              <div className="bi-words"><span>Fresh</span><span>Traceable</span><span>Grounded</span></div>
            </div>
            <div className="bi-side">
              <div className="bi-mini pal">
                <div className="mini-h">Colour system · 6 tokens</div>
                <div className="bi-swatches"><i style={{ background: '#1F4227' }}></i><i style={{ background: '#C7D94F' }}></i><i style={{ background: '#F7F5EC' }}></i><i style={{ background: '#5E4A32' }}></i><i style={{ background: '#9CB52F' }}></i></div>
                <div className="mini-h">#1F4227 / #C7D94F</div>
              </div>
              <div className="bi-mini type">
                <div className="mini-h">Type · Recia + Söhne</div>
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
            <ModalTrigger modalKey="m-role" className="info-card clickable"><div className="info-eyebrow">Role</div><div className="info-h">Brand Designer</div><div className="info-d">Brand Identity · Logo System · Packaging · Colour System</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable"><div className="info-eyebrow">Deliverable</div><div className="info-h">Full identity system</div><div className="info-d">Fresh produce · Export &amp; wholesale</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable"><div className="info-eyebrow">Sector</div><div className="info-h">Agriculture · Export</div><div className="info-d">Fresh · Traceable · Grounded</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable"><div className="info-eyebrow">Timeline</div><div className="info-h">7 weeks</div><div className="info-d">2022 · discovery to vendor handoff.</div><div className="info-more">Tap to expand →</div></ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses on the same problem: where the brand stood, what was at stake, and how we would know the system worked.</p>
          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div><h3 className="three-h">Current Problem</h3>
              <ul className="three-list"><li>The business traded under a hand-set wordmark that changed with whichever printer produced the cartons that season.</li><li>No colour specification existed, so the same green rendered differently across print, vinyl, and screen.</li><li>Export buyers could not distinguish Amarachi cartons from unbranded produce at the receiving dock.</li><li>Traceability data was printed as an afterthought, competing with the logo for space on the carton face.</li></ul>
              <span className="three-cta">Read the full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div><h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>In produce export, the carton is the brand. It is the only thing a European buyer physically handles before the fruit.</li><li>Inconsistent colour across print runs signals inconsistent product quality, whether or not that is fair.</li><li>Traceability is a regulatory requirement and a selling point; the layout should make it legible, not bury it.</li><li>A single recognisable mark shortens the distance between a market stall sale and an export contract.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div><h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Recognition test: can a buyer identify an Amarachi carton at ten metres on a loading dock?</li><li>Print fidelity: does the green hold across offset, flexographic carton print, and vinyl?</li><li>Legibility: is traceability data readable at arm&apos;s length without competing with the mark?</li><li>Application coverage: does the system survive on a crate label at 40 mm and a market banner at 3 m?</li></ul>
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
              <div className="lg-grid"><span className="ax h"></span><span className="ax v"></span><span className="ring"></span><span className="m">A</span></div>
              <p className="bx-p">The mark is an <strong>A</strong> whose crossbar is drawn as a horizon line, with the counter reading as a seed. Built on a nine-unit grid with a circular containing form, so it reduces cleanly to a 12 mm crate stamp without losing the horizon cue.</p>
            </div>
            <div className="bx c4">
              <div className="bx-h"><span>02 · Clear space</span><b>x</b></div>
              <div className="cs-box"><span className="x t">x</span><span className="x l">x</span><div className="inner">A</div></div>
              <p className="bx-p">Clear space equals the height of the crossbar (<strong>x</strong>) on all four sides. On carton faces this rises to <strong>2x</strong> to keep the mark clear of regulatory print.</p>
            </div>
            <div className="bx c3 accent">
              <div className="bx-h"><span>03 · Minimum size</span></div>
              <div className="bx-t">12mm</div>
              <p className="bx-p">Smallest legible mark. Below this, the wordmark is dropped and the monogram is used alone.</p>
              <div className="bx-foot">Tested in production</div>
            </div>

            <div className="bx c7">
              <div className="bx-h"><span>04 · Colour system</span><b>6 tokens</b></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#1F4227' }}></div><div className="m"><b>Field Green</b><span>#1F4227 · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#C7D94F' }}></div><div className="m"><b>Leaf Lime</b><span>#C7D94F · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#F7F5EC' }}></div><div className="m"><b>Harvest Cream</b><span>#F7F5EC · Background</span></div></div></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#5E4A32' }}></div><div className="m"><b>Soil</b><span>#5E4A32 · Support</span></div></div><div className="sw2"><div className="c" style={{ background: '#9CB52F' }}></div><div className="m"><b>Stalk</b><span>#9CB52F · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#101211' }}></div><div className="m"><b>Ink</b><span>#101211 · Text</span></div></div></div>
              <p className="bx-p">Every pairing is specified for print and screen and tested to WCAG AA before it enters the system.</p>
            </div>
            <div className="bx c5 cream">
              <div className="bx-h"><span>05 · Typography</span><b>2 families</b></div>
              <div className="ty-row"><span className="s">Display</span><span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-.025em', color: 'var(--bi-deep)' }}>Recia</span></div>
              <div className="ty-row"><span className="s">Text</span><span style={{ fontWeight: 600, fontSize: 'clamp(16px,2vw,22px)' }}>Söhne</span></div>
              <div className="ty-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 &amp; @ · % ( ) —</div>
              <p className="bx-p">A high-contrast serif for the wordmark and headlines, paired with a neutral grotesk for specification, address, and traceability text. The pairing keeps the brand warm while the compliance information stays plainly functional.</p>
            </div>

            <div className="bx c6">
              <div className="bx-h"><span>06 · Forbidden usage</span><b>6 rules</b></div>
              <div className="dont">
                <div className="s1">A<span>Do not letterspace</span></div>
                <div className="s2">A<span>Do not italicise</span></div>
                <div className="s3">A<span>Do not tint</span></div>
                <div className="s4">A<span>Do not resubstitute</span></div>
                <div className="s5">A<span>Do not gradient</span></div>
                <div className="s6"><b>A</b><span>Do not stretch</span></div>
              </div>
              <p className="bx-p">Six explicit misuse cases, each with a visual example. Rules beat guidance — vendors follow what they can see.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>07 · Iconography</span><b>8</b></div>
              <div className="ic-set">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4C11 4 4 9 4 16a4 4 0 0 0 4 4c7 0 12-7 12-16Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 20 14 10"/></svg><span>Produce</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="3" y="7" width="18" height="12" rx="1.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M9 7v12M15 7v12"/></svg><span>Carton</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 7h11v9H2zM13 10h4l3 3v3h-7z"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="6.5" cy="18.5" r="1.8"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="16.5" cy="18.5" r="1.8"/></svg><span>Logistics</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18l-2 10H5L3 9Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 9 11 3M16 9 13 3M9 13v3M15 13v3"/></svg><span>Wholesale</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="8"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7"/></svg><span>Grade</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21V10"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 13C8 13 5 10 5 6c4 0 7 3 7 7Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z"/></svg><span>Harvest</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 4v14M15 6v14"/></svg><span>Origin</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="8"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-5"/></svg><span>Traceable</span></div>
              </div>
              <p className="bx-p">Eight glyphs drawn on a 24 px grid at a single 1.5 px stroke, built from the same circle-and-rule primitives as the mark. Every icon is paired with its label — none is used alone.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>08 · Pattern</span></div>
              <div className="pat a"></div>
              <p className="bx-p">A seed-dot lattice derived from the counter of the A. Used as a 12% tint on inner carton walls and at full strength on tissue and market banners.</p>
            </div>

            <div className="bx c12">
              <div className="bx-h"><span>09 · Voice &amp; tone</span><b>4 pillars</b></div>
              <div className="pillars-row"><div className="vp"><b>Plain</b><span>States what it is. No superlatives, no &quot;premium&quot;.</span></div><div className="vp"><b>Specific</b><span>Names the county, the farm, the harvest week.</span></div><div className="vp"><b>Steady</b><span>Reads the same in a contract and on a banner.</span></div><div className="vp"><b>Warm</b><span>Kiswahili greeting on consumer-facing pieces only.</span></div></div>
            </div>
          </div>
        </section>

        <section className="proj-section" id="results">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">Outcomes first, then the decisions that produced them.</p>
          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip"><div className="istat lift"><div className="n">+41%</div><div className="l">Buyer recall at dock</div></div><div className="istat lift"><div className="n">6</div><div className="l">Print substrates covered</div></div><div className="istat lift"><div className="n">12mm</div><div className="l">Smallest legible mark</div></div><div className="istat lift"><div className="n">28pp</div><div className="l">Guideline document</div></div></div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip"><div className="istat lift"><div className="n">3</div><div className="l">Logo routes explored</div></div><div className="istat lift"><div className="n">7 wks</div><div className="l">Discovery to handoff</div></div><div className="istat lift"><div className="n">2</div><div className="l">EU buyers consulted</div></div><div className="istat lift"><div className="n">100%</div><div className="l">Carton line converted</div></div></div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the decisions underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary><span className="pillar-num">01</span><span className="pillar-h">A mark that survives the smallest substrate</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Nine-unit grid</div><p>Every curve and terminal lands on the grid, so the mark redraws identically at any size or in any vendor&apos;s artwork file.</p></div><div className="pillar-col"><div className="pillar-col-h">Monogram cut-down</div><p>A standalone A for 40 mm crate labels and the 12 mm quality stamp.</p></div><div className="pillar-col"><div className="pillar-col-h">Single-colour lockup</div><p>A one-ink version for flexographic carton print, where registration cannot be trusted.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">02</span><span className="pillar-h">A colour system specified for print first</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Field Green + Leaf Lime</div><p>The two primaries, specified in Pantone, CMYK, RGB, and vinyl reference so the green holds across every vendor.</p></div><div className="pillar-col"><div className="pillar-col-h">Substrate rules</div><p>Kraft carton, coated label, and vinyl each get a tested colour build rather than a converted approximation.</p></div><div className="pillar-col"><div className="pillar-col-h">Contrast floor</div><p>Every brand pairing tested to WCAG AA so digital catalogue and website inherit the same palette safely.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">03</span><span className="pillar-h">Carton architecture, not carton decoration</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Zoned layout</div><p>Mark, produce name, and traceability block occupy fixed zones so nothing competes for the same space.</p></div><div className="pillar-col"><div className="pillar-col-h">Traceability first</div><p>Farm, county, and harvest week set in the grotesk at a fixed size, always in the lower third.</p></div><div className="pillar-col"><div className="pillar-col-h">Stackable orientation</div><p>The mark repeats on two adjacent faces so it reads however cartons are stacked on a pallet.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">04</span><span className="pillar-h">A guideline document the printers actually use</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Rules, not suggestions</div><p>Clear space, minimum size, and six explicit misuse cases with visual examples.</p></div><div className="pillar-col"><div className="pillar-col-h">Vendor pack</div><p>Ready-made artwork files per substrate, so no printer has to rebuild the mark.</p></div><div className="pillar-col"><div className="pillar-col-h">Handover session</div><p>Two-hour walkthrough with the client&apos;s three regular print vendors before launch.</p></div></div>
            </details>
          </div>
        </section>

        <section className="proj-section" id="mockups">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Applications &amp; Mockups</h2></div>
          <p className="ps-sub">The system off-screen. Every application below was produced against the rules in Section 03, and each one tested a different constraint.</p>
          <div className="bi-mocks">
            <div className="bm c6 wide">
              <div className="bm-stage accent"><div className="o-bill"><div><div className="h">Fresh.<br />Traceable.</div><div className="u">amarachi.co.ke</div></div><div className="dot"></div></div></div>
              <div className="bm-cap"><span className="bm-t">Export carton</span><span className="bm-m">Corrugated · 400 × 300</span></div>
              <p className="bm-d">The primary brand surface. Mark on two adjacent faces, produce name centred, traceability block fixed in the lower third.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-label"><b>Amarachi</b><em>Fresh produce · Export & wholesale</em></div></div>
              <div className="bm-cap"><span className="bm-t">Crate label</span><span className="bm-m">Coated · 40 mm</span></div>
              <p className="bm-d">The smallest application, and the constraint that shaped the monogram. Single-colour, no gradient, no fine detail.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-tote"><span>A</span></div></div>
              <div className="bm-cap"><span className="bm-t">Market tote</span><span className="bm-m">Cotton · Screen print</span></div>
              <p className="bm-d">Handed out at wholesale markets. Wordmark cropped so it reads at stall distance.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-stamp">A</div></div>
              <div className="bm-cap"><span className="bm-t">Quality stamp</span><span className="bm-m">Rubber · 12 mm</span></div>
              <p className="bm-d">Applied to inspection paperwork. The absolute floor test for the monogram.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage brand"><div className="o-signage">AMARACHI</div></div>
              <div className="bm-cap"><span className="bm-t">Depot signage</span><span className="bm-m">Vinyl · 3 m</span></div>
              <p className="bm-d">Packhouse and depot frontage. Cream field with a deep green frame so it holds against the dust.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage dark"><div className="o-social"><div>Fresh<em>01</em></div><div>Traceable<em>02</em></div><div>Grounded<em>03</em></div><div>Amarachi<em>04</em></div><div>2026<em>05</em></div></div></div>
              <div className="bm-cap"><span className="bm-t">Buyer catalogue</span><span className="bm-m">Digital · 5 slides</span></div>
              <p className="bm-d">Sent to procurement teams ahead of each season with harvest windows and volumes.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-shirt"><span>A</span></div></div>
              <div className="bm-cap"><span className="bm-t">Packhouse uniform</span><span className="bm-m">Cotton · Embroidered</span></div>
              <p className="bm-d">Worn by the dock and grading teams. The monogram at chest height, no wordmark.</p>
            </div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list"><li>Designing for a 40 mm crate label first, rather than last, is what made the whole system hold together. Every other application had room to spare.</li><li>Specifying colour per substrate instead of per colour space was the single change that ended the inconsistent-green problem.</li><li>The vendor handover session was worth more than another ten pages of guidelines. Printers follow rules they have been walked through.</li></ul>
        </section>

        <section className="proj-section">
          <div className="section-head" style={{ marginTop: '12px' }}>
            <h2 className="h-section" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Other Brand Work</h2>
            <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
          </div>
          <div className="other-grid">
            <Link href="/brand/everything-riri" className="project-card">
              <div className="thumb" style={{ background: '#3B1B2E', display: 'grid', placeItems: 'center', aspectRatio: '760/1009' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: 'clamp(56px,9vw,104px)', color: '#E8927C', letterSpacing: '-.045em', lineHeight: '1' }}>R</div>
              </div>
              <div className="row"><span className="title">Everything Riri</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">Brand Identity</span><span className="pill">Packaging Design</span><span className="pill">Logo System</span><span className="pill">Colour System</span></div>
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
