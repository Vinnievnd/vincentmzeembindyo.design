"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import PrototypeDock from "@/components/PrototypeDock";
import useBodyClass from "@/lib/useBodyClass";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Brand Designer","body":"<p>Designed the parent identity and a sub-brand system for four programmes, plus donor-facing report templates, field signage, and a guideline document written for volunteers rather than designers.</p>"},"m-industry":{"eyebrow":"Deliverable","title":"Identity + programme system","body":"<p>Primary mark, a circles motif, four programme sub-marks, a six-colour system, typographic hierarchy, iconography, report and prospectus templates, signage specification, and merchandise.</p>"},"m-skills":{"eyebrow":"Sector","title":"Non-profit · Community","body":"<p>A community foundation running education, water, health, and livelihood programmes, funded by institutional donors and individual giving.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"8 weeks","body":"<p>Eight weeks, including two community consultation sessions that changed the colour direction.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Where the brand stood","body":"<p>Kindhearts had a credibility problem that was purely presentational. The programmes were well run and well audited, but the materials suggested four small unconnected efforts rather than one accountable foundation.</p><ul><li>Four programmes had grown their own logos independently, so nothing tied them back to the foundation.</li><li>Donor reports and field materials looked like they came from different organisations, undermining accountability.</li><li>The existing mark used a hand-drawn heart that could not be reproduced at signage scale or in single colour.</li><li>Volunteers produced their own materials with no template, which was reasonable given none existed.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"What was at stake","body":"<p>Institutional donors run due diligence on presentation as a proxy for operational discipline. The rebrand was, in practical terms, a fundraising intervention.</p><ul><li>For a foundation, visual coherence reads as governance. Donors infer how funds are managed from how the organisation presents itself.</li><li>Programme sub-brands need their own identity to build local trust, but must clearly ladder up to the parent.</li><li>Field materials are produced by volunteers under time pressure; only templates survive that reality.</li><li>Signage in served communities is a permanent, high-visibility asset and deserves a proper specification.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"How we tested it","body":"<p>Community consultation sessions in two programme areas tested the colour direction and the circles motif directly with the people the signage is for. The original palette was rejected there and redesigned.</p><ul><li>Sub-brand test: is a programme mark recognisably part of the Kindhearts family at a glance?</li><li>Volunteer test: can a field volunteer produce a compliant poster from the template in under ten minutes?</li><li>Signage legibility: is the mark readable at 30 m in full sun on a dusty road?</li><li>Donor review: do two institutional donors rate the prospectus as clearer than the previous version?</li></ul>"}};

export default function KindheartsPage() {
  useBodyClass("bi-theme");

  return (
    <ModalProvider modals={MODALS}>
      <style>{`body.bi-theme{--bi-deep:#1B3A5C;--bi-deep-2:#132B45;--bi-deep-3:#0C1D2F;--bi-accent:#F0A93B;--bi-accent-2:#D18C22;--bi-accent-soft:#FBE5BE;--bi-cream:#F6F4EF;--bi-on-deep:#F6F4EF;--bi-on-accent:#132B45}`}</style>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Brand Identity · 2022</span>
            <span className="case-pill subtle">7 min read</span>
          </div>
          <h1 className="h-block-title">Kindhearts Foundation</h1>
          <p className="proj-tagline">An identity system for a community foundation, designed to hold equal weight in a donor prospectus, on a field volunteer&apos;s shirt, and across the programme signage in the communities it serves.</p>
          <div className="proj-tags"><span className="pill">Brand Identity</span><span className="pill">Non-profit</span><span className="pill">Logo System</span><span className="pill">Colour System</span><span className="pill">Typography</span><span className="pill">Brand Guidelines</span><span className="pill">Signage</span></div>
        </header>

        <section className="bi-hero" aria-label="Kindhearts Foundation identity">
          <div className="bi-hero-grid">
            <div className="bi-stage">
              <span className="bi-orb a"></span><span className="bi-orb b"></span>
              <div className="bi-tag">Brand Identity System</div>
              <div><div className="bi-mark">K</div><div className="bi-name">Kindhearts Foundation</div></div>
              <div className="bi-words"><span>Open</span><span>Dependable</span><span>Human</span></div>
            </div>
            <div className="bi-side">
              <div className="bi-mini pal">
                <div className="mini-h">Colour system · 6 tokens</div>
                <div className="bi-swatches"><i style={{ background: '#1B3A5C' }}></i><i style={{ background: '#F0A93B' }}></i><i style={{ background: '#F6F4EF' }}></i><i style={{ background: '#2E8C7E' }}></i><i style={{ background: '#C4674A' }}></i></div>
                <div className="mini-h">#1B3A5C / #F0A93B</div>
              </div>
              <div className="bi-mini type">
                <div className="mini-h">Type · Tiempos Headline + Inter</div>
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
            <ModalTrigger modalKey="m-role" className="info-card clickable"><div className="info-eyebrow">Role</div><div className="info-h">Brand Designer</div><div className="info-d">Brand Identity · Non-profit · Logo System · Colour System</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable"><div className="info-eyebrow">Deliverable</div><div className="info-h">Identity + programme system</div><div className="info-d">Non-profit · Community foundation</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable"><div className="info-eyebrow">Sector</div><div className="info-h">Non-profit · Community</div><div className="info-d">Open · Dependable · Human</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable"><div className="info-eyebrow">Timeline</div><div className="info-h">8 weeks</div><div className="info-d">2022 · discovery to vendor handoff.</div><div className="info-more">Tap to expand →</div></ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses on the same problem: where the brand stood, what was at stake, and how we would know the system worked.</p>
          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div><h3 className="three-h">Current Problem</h3>
              <ul className="three-list"><li>Four programmes had grown their own logos independently, so nothing tied them back to the foundation.</li><li>Donor reports and field materials looked like they came from different organisations, undermining accountability.</li><li>The existing mark used a hand-drawn heart that could not be reproduced at signage scale or in single colour.</li><li>Volunteers produced their own materials with no template, which was reasonable given none existed.</li></ul>
              <span className="three-cta">Read the full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div><h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>For a foundation, visual coherence reads as governance. Donors infer how funds are managed from how the organisation presents itself.</li><li>Programme sub-brands need their own identity to build local trust, but must clearly ladder up to the parent.</li><li>Field materials are produced by volunteers under time pressure; only templates survive that reality.</li><li>Signage in served communities is a permanent, high-visibility asset and deserves a proper specification.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div><h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Sub-brand test: is a programme mark recognisably part of the Kindhearts family at a glance?</li><li>Volunteer test: can a field volunteer produce a compliant poster from the template in under ten minutes?</li><li>Signage legibility: is the mark readable at 30 m in full sun on a dusty road?</li><li>Donor review: do two institutional donors rate the prospectus as clearer than the previous version?</li></ul>
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
              <div className="lg-grid"><span className="ax h"></span><span className="ax v"></span><span className="ring"></span><span className="m">K</span></div>
              <p className="bx-p">The mark is built from <strong>overlapping circles</strong> — one per programme — meeting at a shared centre. The <strong>K</strong> is drawn inside the overlap, so the parent mark and the four sub-marks are literally the same construction with different circles emphasised.</p>
            </div>
            <div className="bx c4">
              <div className="bx-h"><span>02 · Clear space</span><b>x</b></div>
              <div className="cs-box"><span className="x t">x</span><span className="x l">x</span><div className="inner">K</div></div>
              <p className="bx-p">Clear space equals the radius of one circle on all sides. Signage applications double this. The mark is never placed on a photographic background without the solid containing field.</p>
            </div>
            <div className="bx c3 accent">
              <div className="bx-h"><span>03 · Minimum size</span></div>
              <div className="bx-t">30m</div>
              <p className="bx-p">Signage legibility. Below this, the wordmark is dropped and the monogram is used alone.</p>
              <div className="bx-foot">Tested in production</div>
            </div>

            <div className="bx c7">
              <div className="bx-h"><span>04 · Colour system</span><b>6 tokens</b></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#1B3A5C' }}></div><div className="m"><b>Deep Water</b><span>#1B3A5C · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#F0A93B' }}></div><div className="m"><b>Kind Amber</b><span>#F0A93B · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#F6F4EF' }}></div><div className="m"><b>Paper</b><span>#F6F4EF · Background</span></div></div></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#2E8C7E' }}></div><div className="m"><b>Programme Teal</b><span>#2E8C7E · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#C4674A' }}></div><div className="m"><b>Clay</b><span>#C4674A · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#101211' }}></div><div className="m"><b>Ink</b><span>#101211 · Text</span></div></div></div>
              <p className="bx-p">Every pairing is specified for print and screen and tested to WCAG AA before it enters the system.</p>
            </div>
            <div className="bx c5 cream">
              <div className="bx-h"><span>05 · Typography</span><b>2 families</b></div>
              <div className="ty-row"><span className="s">Display</span><span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-.025em', color: 'var(--bi-deep)' }}>Tiempos Headline</span></div>
              <div className="ty-row"><span className="s">Text</span><span style={{ fontWeight: 600, fontSize: 'clamp(16px,2vw,22px)' }}>Inter</span></div>
              <div className="ty-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 &amp; @ · % ( ) —</div>
              <p className="bx-p">A humanist serif for report headings and prospectus covers gives the foundation gravity. A highly legible grotesk carries body copy, data tables, and field signage, where clarity at distance and at small size both matter.</p>
            </div>

            <div className="bx c6">
              <div className="bx-h"><span>06 · Forbidden usage</span><b>6 rules</b></div>
              <div className="dont">
                <div className="s1">K<span>Do not letterspace</span></div>
                <div className="s2">K<span>Do not italicise</span></div>
                <div className="s3">K<span>Do not tint</span></div>
                <div className="s4">K<span>Do not resubstitute</span></div>
                <div className="s5">K<span>Do not gradient</span></div>
                <div className="s6"><b>K</b><span>Do not stretch</span></div>
              </div>
              <p className="bx-p">Six explicit misuse cases, each with a visual example. Rules beat guidance — vendors follow what they can see.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>07 · Iconography</span><b>8</b></div>
              <div className="ic-set">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 5.5V20.5M20 18v3H6.5"/></svg><span>Education</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c3.5 4 5.5 6.6 5.5 9.5a5.5 5.5 0 0 1-11 0c0-2.9 2-5.5 5.5-9.5Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5"/></svg><span>Water</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="3.5" y="6" width="17" height="13" rx="2"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9.5v6M9 12.5h6M9 6V4h6v2"/></svg><span>Health</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 15C7.5 15 4 11.5 4 7c4.5 0 8 3.5 8 8Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 13c0-3.9 3.1-7 7-7 0 3.9-3.1 7-7 7Z"/></svg><span>Livelihood</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2.5 12.5 6 9l4 3 4-3 3.5 3.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 9V6.5M18 12.5V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3.5"/></svg><span>Volunteer</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 21s6.5-6 6.5-10.5a6.5 6.5 0 0 0-13 0C5.5 15 12 21 12 21Z"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="10.5" r="2.3"/></svg><span>Site</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 20V4M4 20h16"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 20v-6M12.5 20V8M17 20v-9"/></svg><span>Outcomes</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="8"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-5"/></svg><span>Audited</span></div>
              </div>
              <p className="bx-p">Eight glyphs on a 24 px grid at a single 1.5 px stroke — four programme icons and four utility icons. Always labelled, on signage and in reports alike.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>08 · Pattern</span></div>
              <div className="pat c"></div>
              <p className="bx-p">The circles motif repeated as an open lattice. Used as a watermark on report covers and printed at full scale on programme signage borders.</p>
            </div>

            <div className="bx c12">
              <div className="bx-h"><span>09 · Voice &amp; tone</span><b>4 pillars</b></div>
              <div className="pillars-row"><div className="vp"><b>Accountable</b><span>Every claim carries a number and a source.</span></div><div className="vp"><b>Plain</b><span>Written for a reader who is not in the sector.</span></div><div className="vp"><b>Local</b><span>Names the community, not &quot;beneficiaries&quot;.</span></div><div className="vp"><b>Steady</b><span>Same tone in a donor report and a village poster.</span></div></div>
            </div>
          </div>
        </section>

        <section className="proj-section" id="results">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">Outcomes first, then the decisions that produced them.</p>
          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip"><div className="istat lift"><div className="n">4</div><div className="l">Programme sub-brands</div></div><div className="istat lift"><div className="n">+63%</div><div className="l">Prospectus clarity rating</div></div><div className="istat lift"><div className="n">30m</div><div className="l">Signage legibility</div></div><div className="istat lift"><div className="n">2</div><div className="l">Community consultations</div></div></div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip"><div className="istat lift"><div className="n">8 wks</div><div className="l">Discovery to handoff</div></div><div className="istat lift"><div className="n">36pp</div><div className="l">Guideline document</div></div><div className="istat lift"><div className="n">10 min</div><div className="l">Volunteer poster build</div></div><div className="istat lift"><div className="n">1</div><div className="l">Shared construction</div></div></div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the decisions underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary><span className="pillar-num">01</span><span className="pillar-h">One construction, five marks</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Shared geometry</div><p>Parent mark and all four programme marks are built from the same four-circle construction.</p></div><div className="pillar-col"><div className="pillar-col-h">Programme emphasis</div><p>Each sub-brand fills one circle in its programme colour and leaves the others as outlines.</p></div><div className="pillar-col"><div className="pillar-col-h">Single-colour parity</div><p>Every mark has a tested one-ink version for signage, embroidery, and stamps.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">02</span><span className="pillar-h">Colour chosen with the communities served</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Consultation-led</div><p>The first palette was rejected in community sessions; the amber and deep water direction came from those conversations.</p></div><div className="pillar-col"><div className="pillar-col-h">Programme colours</div><p>Four accents, one per programme, all tested against the parent palette for contrast.</p></div><div className="pillar-col"><div className="pillar-col-h">Sun and dust</div><p>Signage colours specified after outdoor testing rather than screen approval.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">03</span><span className="pillar-h">Templates volunteers can actually use</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Ten-minute poster</div><p>A locked template where only headline, date, and location are editable.</p></div><div className="pillar-col"><div className="pillar-col-h">Programme kit</div><p>Each programme gets its own folder of pre-built assets in the right colour.</p></div><div className="pillar-col"><div className="pillar-col-h">One-page rules</div><p>A single laminated sheet of do and do-not, distributed to every field office.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">04</span><span className="pillar-h">Donor materials that show the working</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Prospectus template</div><p>Programme outcomes tabled with sources, before the narrative rather than after it.</p></div><div className="pillar-col"><div className="pillar-col-h">Annual report grid</div><p>A fixed twelve-column grid so financial tables and photography share one rhythm.</p></div><div className="pillar-col"><div className="pillar-col-h">Data style</div><p>Chart colours drawn from the programme palette so figures are self-labelling.</p></div></div>
            </details>
          </div>
        </section>

        <section className="proj-section" id="mockups">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Applications &amp; Mockups</h2></div>
          <p className="ps-sub">The system off-screen. Every application below was produced against the rules in Section 03, and each one tested a different constraint.</p>
          <div className="bi-mocks">
            <div className="bm c6 wide">
              <div className="bm-stage brand"><div className="o-signage">KINDHEARTS</div></div>
              <div className="bm-cap"><span className="bm-t">Programme signage</span><span className="bm-m">Vinyl on steel · 2.4 m</span></div>
              <p className="bm-d">Permanent installation at programme sites. Specified after outdoor legibility testing in full sun.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-shirt"><span>K</span></div></div>
              <div className="bm-cap"><span className="bm-t">Volunteer shirt</span><span className="bm-m">Cotton · Embroidered</span></div>
              <p className="bm-d">Field uniform. Single-colour mark at chest, programme colour on the sleeve.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-card"><div className="k">K</div><div className="l">KINDHEARTS · 2022</div></div></div>
              <div className="bm-cap"><span className="bm-t">Donor prospectus</span><span className="bm-m">Print · A4</span></div>
              <p className="bm-d">Outcomes tabled with sources before the narrative. Circles motif as a cover watermark.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-stamp">K</div></div>
              <div className="bm-cap"><span className="bm-t">Receipt stamp</span><span className="bm-m">Rubber · 30 mm</span></div>
              <p className="bm-d">Applied to donation receipts and field paperwork. Single-ink construction test.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-tote"><span>K</span></div></div>
              <div className="bm-cap"><span className="bm-t">Community tote</span><span className="bm-m">Cotton · Two-colour</span></div>
              <p className="bm-d">Distributed at programme events. Wordmark with the circles lattice as a base band.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage dark"><div className="o-social"><div>Open<em>01</em></div><div>Dependable<em>02</em></div><div>Human<em>03</em></div><div>Kindhearts<em>04</em></div><div>2026<em>05</em></div></div></div>
              <div className="bm-cap"><span className="bm-t">Campaign set</span><span className="bm-m">Digital · 5 tiles</span></div>
              <p className="bm-d">Giving-season campaign. One outcome number per tile, sourced in the caption.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage brand"><div className="o-app"><i>K</i><i>K</i><i>K</i></div></div>
              <div className="bm-cap"><span className="bm-t">Programme marks</span><span className="bm-m">Digital · 3 of 4</span></div>
              <p className="bm-d">Education, Water, and Health sub-marks showing the shared construction.</p>
            </div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list"><li>Building the sub-brands from the same construction as the parent solved the family-resemblance problem structurally, so it could not drift later.</li><li>Taking the palette to community consultation and having it rejected was the most valuable two days of the project.</li><li>A laminated one-page rules sheet in every field office did more for consistency than the 36-page document it summarised.</li></ul>
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
