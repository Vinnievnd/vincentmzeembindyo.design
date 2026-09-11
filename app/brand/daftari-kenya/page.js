"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import PrototypeDock from "@/components/PrototypeDock";
import useBodyClass from "@/lib/useBodyClass";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Brand Designer","body":"<p>Designed the identity, a pattern system derived from ruled-page geometry, cover architecture across eight notebook formats, and the production specification for the client's own press.</p>"},"m-industry":{"eyebrow":"Deliverable","title":"Identity + pattern system","body":"<p>Wordmark, monogram, a six-colour system, a two-typeface hierarchy, a rule-based pattern family, cover templates for eight formats, retail signage, and a 24-page guideline.</p>"},"m-skills":{"eyebrow":"Sector","title":"Manufacturing · Stationery","body":"<p>Notebook and exercise-book manufacturing for the Kenyan school and office market, printed in-house, sold through wholesale and retail.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"6 weeks","body":"<p>Six weeks. Compressed to hit the school-year print schedule.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Where the brand stood","body":"<p>Daftari competed against cheap imports on quality and local manufacture, but nothing about the product communicated either. The covers were the only marketing the business had, and they were being redesigned from scratch every season.</p><ul><li>Covers were designed per SKU with no shared architecture, so a retail shelf of eight formats looked like eight suppliers.</li><li>The wordmark had three circulating versions, and the press used whichever file was nearest.</li><li>Nothing on the product signalled local manufacture, which was the client's main competitive advantage.</li><li>Retail signage was produced ad hoc by each stockist, with no supplied artwork.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"What was at stake","body":"<p>Purchase happens at the shelf, in seconds, usually by a parent buying to a school list. The cover has to do identification, quality signalling, and range navigation simultaneously.</p><ul><li>In stationery, the cover is the entire brand experience. There is no advertising budget behind it.</li><li>A shelf of eight formats that reads as one range earns more space from the retailer.</li><li>Local manufacture is the differentiator against imports, so it needs to be visible on the product.</li><li>The client prints in-house, so the system had to be specified against their actual press capability.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"How we tested it","body":"<p>Printed on the client's press during a live run rather than a proofing house, so what was approved is exactly what production can hold.</p><ul><li>Shelf test: do eight formats photographed together read as one range?</li><li>Press test: does every colour and pattern reproduce on the client's own two-colour press?</li><li>Origin cue: can a shopper identify local manufacture without reading fine print?</li><li>Retailer uptake: do stockists use the supplied signage rather than making their own?</li></ul>"}};

export default function DaftariKenyaPage() {
  useBodyClass("bi-theme");

  return (
    <ModalProvider modals={MODALS}>
      <style>{`body.bi-theme{--bi-deep:#22304A;--bi-deep-2:#19243A;--bi-deep-3:#101828;--bi-accent:#E4572E;--bi-accent-2:#C3441F;--bi-accent-soft:#FBDCD1;--bi-cream:#F5F3EE;--bi-on-deep:#F5F3EE;--bi-on-accent:#F5F3EE}`}</style>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Brand Identity · 2022</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">Daftari Kenya</h1>
          <p className="proj-tagline">An identity for a Kenyan stationery manufacturer, built on the grid of the ruled page itself — a system where the product&apos;s own geometry becomes the brand&apos;s.</p>
          <div className="proj-tags"><span className="pill">Brand Identity</span><span className="pill">Logo System</span><span className="pill">Print</span><span className="pill">Colour System</span><span className="pill">Typography</span><span className="pill">Pattern System</span><span className="pill">Stationery</span></div>
        </header>

        <section className="bi-hero" aria-label="Daftari Kenya identity">
          <div className="bi-hero-grid">
            <div className="bi-stage">
              <span className="bi-orb a"></span><span className="bi-orb b"></span>
              <div className="bi-tag">Brand Identity System</div>
              <div><div className="bi-mark">D</div><div className="bi-name">Daftari Kenya</div></div>
              <div className="bi-words"><span>Precise</span><span>Everyday</span><span>Made here</span></div>
            </div>
            <div className="bi-side">
              <div className="bi-mini pal">
                <div className="mini-h">Colour system · 6 tokens</div>
                <div className="bi-swatches"><i style={{ background: '#22304A' }}></i><i style={{ background: '#E4572E' }}></i><i style={{ background: '#F5F3EE' }}></i><i style={{ background: '#5A5F6B' }}></i><i style={{ background: '#D9C39A' }}></i></div>
                <div className="mini-h">#22304A / #E4572E</div>
              </div>
              <div className="bi-mini type">
                <div className="mini-h">Type · GT Sectra + Founders Grotesk</div>
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
            <ModalTrigger modalKey="m-role" className="info-card clickable"><div className="info-eyebrow">Role</div><div className="info-h">Brand Designer</div><div className="info-d">Brand Identity · Logo System · Print · Colour System</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable"><div className="info-eyebrow">Deliverable</div><div className="info-h">Identity + pattern system</div><div className="info-d">Stationery · Notebooks &amp; print</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable"><div className="info-eyebrow">Sector</div><div className="info-h">Manufacturing · Stationery</div><div className="info-d">Precise · Everyday · Made here</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable"><div className="info-eyebrow">Timeline</div><div className="info-h">6 weeks</div><div className="info-d">2022 · discovery to vendor handoff.</div><div className="info-more">Tap to expand →</div></ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses on the same problem: where the brand stood, what was at stake, and how we would know the system worked.</p>
          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div><h3 className="three-h">Current Problem</h3>
              <ul className="three-list"><li>Covers were designed per SKU with no shared architecture, so a retail shelf of eight formats looked like eight suppliers.</li><li>The wordmark had three circulating versions, and the press used whichever file was nearest.</li><li>Nothing on the product signalled local manufacture, which was the client&apos;s main competitive advantage.</li><li>Retail signage was produced ad hoc by each stockist, with no supplied artwork.</li></ul>
              <span className="three-cta">Read the full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div><h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>In stationery, the cover is the entire brand experience. There is no advertising budget behind it.</li><li>A shelf of eight formats that reads as one range earns more space from the retailer.</li><li>Local manufacture is the differentiator against imports, so it needs to be visible on the product.</li><li>The client prints in-house, so the system had to be specified against their actual press capability.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div><h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Shelf test: do eight formats photographed together read as one range?</li><li>Press test: does every colour and pattern reproduce on the client&apos;s own two-colour press?</li><li>Origin cue: can a shopper identify local manufacture without reading fine print?</li><li>Retailer uptake: do stockists use the supplied signage rather than making their own?</li></ul>
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
              <div className="lg-grid"><span className="ax h"></span><span className="ax v"></span><span className="ring"></span><span className="m">D</span></div>
              <p className="bx-p">The <strong>D</strong> is constructed from a ruled-page margin line and a bowl set on the line spacing itself. The monogram places the D inside a page-proportioned rectangle at 1:1.414, the same ratio as the paper it prints on.</p>
            </div>
            <div className="bx c4">
              <div className="bx-h"><span>02 · Clear space</span><b>x</b></div>
              <div className="cs-box"><span className="x t">x</span><span className="x l">x</span><div className="inner">D</div></div>
              <p className="bx-p">Clear space equals one line-space unit (<strong>1L</strong>) on all sides — the same measure as the ruling on the page. On covers this becomes <strong>2L</strong> from the trim edge.</p>
            </div>
            <div className="bx c3 accent">
              <div className="bx-h"><span>03 · Minimum size</span></div>
              <div className="bx-t">2-colour</div>
              <p className="bx-p">Press constraint met. Below this, the wordmark is dropped and the monogram is used alone.</p>
              <div className="bx-foot">Tested in production</div>
            </div>

            <div className="bx c7">
              <div className="bx-h"><span>04 · Colour system</span><b>6 tokens</b></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#22304A' }}></div><div className="m"><b>Rule Navy</b><span>#22304A · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#E4572E' }}></div><div className="m"><b>Margin Red</b><span>#E4572E · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#F5F3EE' }}></div><div className="m"><b>Page</b><span>#F5F3EE · Background</span></div></div></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#5A5F6B' }}></div><div className="m"><b>Graphite</b><span>#5A5F6B · Support</span></div></div><div className="sw2"><div className="c" style={{ background: '#D9C39A' }}></div><div className="m"><b>Manila</b><span>#D9C39A · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#101211' }}></div><div className="m"><b>Ink</b><span>#101211 · Text</span></div></div></div>
              <p className="bx-p">Every pairing is specified for print and screen and tested to WCAG AA before it enters the system.</p>
            </div>
            <div className="bx c5 cream">
              <div className="bx-h"><span>05 · Typography</span><b>2 families</b></div>
              <div className="ty-row"><span className="s">Display</span><span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-.025em', color: 'var(--bi-deep)' }}>GT Sectra</span></div>
              <div className="ty-row"><span className="s">Text</span><span style={{ fontWeight: 600, fontSize: 'clamp(16px,2vw,22px)' }}>Founders Grotesk</span></div>
              <div className="ty-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 &amp; @ · % ( ) —</div>
              <p className="bx-p">A sharp, slightly calligraphic serif for the wordmark and cover titles references handwriting without imitating it. A precise grotesk handles format, page count, ruling type, and the origin mark, where accuracy is the point.</p>
            </div>

            <div className="bx c6">
              <div className="bx-h"><span>06 · Forbidden usage</span><b>6 rules</b></div>
              <div className="dont">
                <div className="s1">D<span>Do not letterspace</span></div>
                <div className="s2">D<span>Do not italicise</span></div>
                <div className="s3">D<span>Do not tint</span></div>
                <div className="s4">D<span>Do not resubstitute</span></div>
                <div className="s5">D<span>Do not gradient</span></div>
                <div className="s6"><b>D</b><span>Do not stretch</span></div>
              </div>
              <p className="bx-p">Six explicit misuse cases, each with a visual example. Rules beat guidance — vendors follow what they can see.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>07 · Iconography</span><b>8</b></div>
              <div className="ic-set">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="5" y="3" width="14" height="18" rx="1.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M12 8h4M12 12h4"/></svg><span>Notebook</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 20v-3.5L16.5 4a1.8 1.8 0 0 1 2.5 0l1 1a1.8 1.8 0 0 1 0 2.5L7.5 20z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m15 5.5 3.5 3.5"/></svg><span>Write</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="2.5" y="8.5" width="19" height="7" rx="1" transform="rotate(-8 12 12)"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 9.2v2.4M11 8.6v2.4M15 8v2.4M19 7.4v2.4"/></svg><span>Ruling</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M18 8.5v8a5 5 0 0 1-10 0V7a3.2 3.2 0 0 1 6.4 0v9a1.5 1.5 0 0 1-3 0V8.5"/></svg><span>Bind</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 21V4"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 4.5h12l-2.2 3.7L17 12H5z"/></svg><span>Made here</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 16.5h4"/></svg><span>Format</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6.5 3.5h11v17l-5.5-4-5.5 4z"/></svg><span>Series</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="8"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-5"/></svg><span>Checked</span></div>
              </div>
              <p className="bx-p">Eight glyphs on a 24 px grid at a single 1.5 px stroke, set to the same line-spacing unit as the mark. Always paired with a label on covers and shelf-talkers.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>08 · Pattern</span></div>
              <div className="pat b"></div>
              <p className="bx-p">A family of three patterns built from the ruling itself: single-rule, squared, and margin-repeat. Each notebook format uses the pattern matching its interior ruling, so the cover tells you what is inside.</p>
            </div>

            <div className="bx c12">
              <div className="bx-h"><span>09 · Voice &amp; tone</span><b>4 pillars</b></div>
              <div className="pillars-row"><div className="vp"><b>Exact</b><span>Format, ruling, page count, always stated.</span></div><div className="vp"><b>Unshowy</b><span>No aspiration copy on a school exercise book.</span></div><div className="vp"><b>Proud</b><span>Made in Kenya, stated plainly, on every cover.</span></div><div className="vp"><b>Useful</b><span>Back cover carries a genuinely useful reference.</span></div></div>
            </div>
          </div>
        </section>

        <section className="proj-section" id="results">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">Outcomes first, then the decisions that produced them.</p>
          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip"><div className="istat lift"><div className="n">8</div><div className="l">Formats systemised</div></div><div className="istat lift"><div className="n">+34%</div><div className="l">Retail shelf facings</div></div><div className="istat lift"><div className="n">2-colour</div><div className="l">Press constraint met</div></div><div className="istat lift"><div className="n">3</div><div className="l">Pattern variants</div></div></div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip"><div className="istat lift"><div className="n">6 wks</div><div className="l">Brief to press-ready</div></div><div className="istat lift"><div className="n">24pp</div><div className="l">Guideline document</div></div><div className="istat lift"><div className="n">1:1.414</div><div className="l">Monogram ratio</div></div><div className="istat lift"><div className="n">100%</div><div className="l">Stockist signage uptake</div></div></div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the decisions underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary><span className="pillar-num">01</span><span className="pillar-h">The product&apos;s geometry becomes the brand&apos;s</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Ruled-line construction</div><p>The mark is built on line-spacing units, so it sits natively on any Daftari page.</p></div><div className="pillar-col"><div className="pillar-col-h">Paper-ratio monogram</div><p>The containing rectangle uses the 1:1.414 paper ratio, tying the mark to the object.</p></div><div className="pillar-col"><div className="pillar-col-h">Pattern from ruling</div><p>Three cover patterns derived from the three interior rulings the factory produces.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">02</span><span className="pillar-h">One cover architecture, eight formats</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Fixed zones</div><p>Wordmark, format name, ruling type, page count, and origin mark occupy the same relative positions across all formats.</p></div><div className="pillar-col"><div className="pillar-col-h">Pattern signals interior</div><p>Single-rule, squared, or margin-repeat cover pattern tells the shopper what ruling is inside.</p></div><div className="pillar-col"><div className="pillar-col-h">Colour by subject</div><p>A fixed colour per subject line so a school list can be filled by colour alone.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">03</span><span className="pillar-h">Specified for the client&apos;s own press</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Two-colour maximum</div><p>Every application designed to reproduce in two inks on the existing press.</p></div><div className="pillar-col"><div className="pillar-col-h">Live-run approval</div><p>Colour approved during a production run, not at a proofing house.</p></div><div className="pillar-col"><div className="pillar-col-h">Registration tolerance</div><p>No element depends on tighter registration than the press reliably holds.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">04</span><span className="pillar-h">Made in Kenya, on the product</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Origin mark</div><p>A fixed lockup on every cover front, not hidden on the back.</p></div><div className="pillar-col"><div className="pillar-col-h">Factory story</div><p>Back cover carries a two-line note on where and how the book was made.</p></div><div className="pillar-col"><div className="pillar-col-h">Retail signage</div><p>Supplied shelf-talkers and header cards so stockists stop making their own.</p></div></div>
            </details>
          </div>
        </section>

        <section className="proj-section" id="mockups">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Applications &amp; Mockups</h2></div>
          <p className="ps-sub">The system off-screen. Every application below was produced against the rules in Section 03, and each one tested a different constraint.</p>
          <div className="bi-mocks">
            <div className="bm c3">
              <div className="bm-stage "><div className="o-card"><div className="k">D</div><div className="l">DAFTARI · 2022</div></div></div>
              <div className="bm-cap"><span className="bm-t">Notebook cover</span><span className="bm-m">A5 · Two-colour</span></div>
              <p className="bm-d">The core application. Fixed zones, subject colour, and a cover pattern matching the interior ruling.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage dark"><div className="o-pack"><b>Daftari</b><em>DAFTARI</em></div></div>
              <div className="bm-cap"><span className="bm-t">Format range</span><span className="bm-m">8 SKUs · Shelf set</span></div>
              <p className="bm-d">Photographed together to test whether the range reads as one system.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage brand"><div className="o-signage">DAFTARI</div></div>
              <div className="bm-cap"><span className="bm-t">Retail header card</span><span className="bm-m">Card · 600 mm</span></div>
              <p className="bm-d">Supplied to stockists. Ended the ad-hoc signage problem in the first season.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-stamp">D</div></div>
              <div className="bm-cap"><span className="bm-t">Origin mark</span><span className="bm-m">Print · 18 mm</span></div>
              <p className="bm-d">Made in Kenya lockup, placed on every cover front rather than hidden on the back.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-tote"><span>D</span></div></div>
              <div className="bm-cap"><span className="bm-t">Trade tote</span><span className="bm-m">Cotton · Two-colour</span></div>
              <p className="bm-d">Handed out at wholesale trade days. Margin-repeat pattern as a base band.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage accent"><div className="o-bill"><div><div className="h">Precise.<br />Everyday.</div><div className="u">daftari.co.ke</div></div><div className="dot"></div></div></div>
              <div className="bm-cap"><span className="bm-t">Back-to-school campaign</span><span className="bm-m">OOH · 6 × 3 m</span></div>
              <p className="bm-d">Navy field, margin-red rule, one line of copy set on the ruling grid.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage dark"><div className="o-social"><div>Precise<em>01</em></div><div>Everyday<em>02</em></div><div>Made here<em>03</em></div><div>Daftari<em>04</em></div><div>2026<em>05</em></div></div></div>
              <div className="bm-cap"><span className="bm-t">Stockist kit</span><span className="bm-m">Digital · 5 tiles</span></div>
              <p className="bm-d">Supplied artwork for retailer social feeds during the school-year rush.</p>
            </div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list"><li>Deriving the pattern system from the interior ruling meant the cover became functional navigation, not decoration.</li><li>Approving colour on the client&apos;s own press during a live run removed every colour dispute that would have followed.</li><li>Putting the origin mark on the cover front rather than the back was a small decision that carried the brand&apos;s main competitive claim.</li></ul>
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
          </div>
        </section>
      </main>

      <ModalRoot />
    </ModalProvider>
  );
}
