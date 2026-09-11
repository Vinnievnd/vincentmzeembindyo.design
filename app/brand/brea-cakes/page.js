"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import PrototypeDock from "@/components/PrototypeDock";
import useBodyClass from "@/lib/useBodyClass";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Brand Designer","body":"<p>Designed the identity, packaging across four box formats, studio signage, and a social system built around the client's own cake photography rather than stock imagery.</p>"},"m-industry":{"eyebrow":"Deliverable","title":"Identity + packaging","body":"<p>Wordmark, monogram, a six-colour palette, a serif and script pairing, box and ribbon applications, studio signage, an order-card system, and a photography direction note.</p>"},"m-skills":{"eyebrow":"Sector","title":"Food · Custom bakery","body":"<p>A custom cake studio taking wedding, celebration, and corporate orders, marketed almost entirely through Instagram and word of mouth.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"5 weeks","body":"<p>Five weeks, run alongside the studio's ordinary order book.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Where the brand stood","body":"<p>Brea Cakes was busy and well reviewed, and none of that was visible in how the studio presented itself. The product photographed beautifully; everything around the product did not.</p><ul><li>The brand existed only as a script font typed in a phone app, with no vector artwork of any kind.</li><li>Boxes were plain white with a sticker, so the most-photographed moment of the experience carried no brand at all.</li><li>Cake photography was inconsistent in background and lighting, so the Instagram grid never cohered.</li><li>Enquiries arrived across three channels with no order form, costing the owner hours a week.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"What was at stake","body":"<p>For a studio this size, the identity has to earn its cost in reach. Every decision was weighed against whether it would show up in a client's photograph.</p><ul><li>A custom cake is bought on trust and photographed on delivery. The packaging is the brand's only physical surface.</li><li>Wedding clients share the box and the cake together; unbranded packaging forfeits that reach entirely.</li><li>A coherent Instagram grid is the studio's primary sales channel, not a vanity metric.</li><li>An order form is a brand touchpoint and an operations fix at the same time.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"How we tested it","body":"<p>Tested by sending three real orders out in prototype packaging and reviewing the photographs clients posted, which is the only test that reflects how the brand is actually seen.</p><ul><li>Box test: does the packaging photograph well alongside the cake, in a client's own lighting?</li><li>Small-scale test: does the monogram emboss legibly on a 15 mm ribbon?</li><li>Grid test: does a nine-post feed cohere using only the studio's own photography?</li><li>Operations: does the order card reduce back-and-forth on a typical enquiry?</li></ul>"}};

export default function BreaCakesPage() {
  useBodyClass("bi-theme");

  return (
    <ModalProvider modals={MODALS}>
      <style>{`body.bi-theme{--bi-deep:#4A2B33;--bi-deep-2:#382026;--bi-deep-3:#26161A;--bi-accent:#E9B7A5;--bi-accent-2:#D0937E;--bi-accent-soft:#F8E4DB;--bi-cream:#FCF6F0;--bi-on-deep:#FCF6F0;--bi-on-accent:#382026}`}</style>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Brand Identity · 2023</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">Brea Cakes</h1>
          <p className="proj-tagline">A warm, hand-drawn identity for a custom cake studio — a system that survives being piped onto a box lid, embossed on a ribbon, and photographed for a client&apos;s wedding gallery.</p>
          <div className="proj-tags"><span className="pill">Brand Identity</span><span className="pill">Logo System</span><span className="pill">Packaging</span><span className="pill">Colour System</span><span className="pill">Typography</span><span className="pill">Signage</span><span className="pill">Social System</span></div>
        </header>

        <section className="bi-hero" aria-label="Brea Cakes identity">
          <div className="bi-hero-grid">
            <div className="bi-stage">
              <span className="bi-orb a"></span><span className="bi-orb b"></span>
              <div className="bi-tag">Brand Identity System</div>
              <div><div className="bi-mark">B</div><div className="bi-name">Brea Cakes</div></div>
              <div className="bi-words"><span>Handmade</span><span>Generous</span><span>Occasion</span></div>
            </div>
            <div className="bi-side">
              <div className="bi-mini pal">
                <div className="mini-h">Colour system · 6 tokens</div>
                <div className="bi-swatches"><i style={{ background: '#4A2B33' }}></i><i style={{ background: '#E9B7A5' }}></i><i style={{ background: '#FCF6F0' }}></i><i style={{ background: '#9E3B52' }}></i><i style={{ background: '#C9A227' }}></i></div>
                <div className="mini-h">#4A2B33 / #E9B7A5</div>
              </div>
              <div className="bi-mini type">
                <div className="mini-h">Type · Canela + Graphik</div>
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
            <ModalTrigger modalKey="m-industry" className="info-card clickable"><div className="info-eyebrow">Deliverable</div><div className="info-h">Identity + packaging</div><div className="info-d">Bakery · Custom cakes &amp; patisserie</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable"><div className="info-eyebrow">Sector</div><div className="info-h">Food · Custom bakery</div><div className="info-d">Handmade · Generous · Occasion</div><div className="info-more">Tap to expand →</div></ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable"><div className="info-eyebrow">Timeline</div><div className="info-h">5 weeks</div><div className="info-d">2023 · discovery to vendor handoff.</div><div className="info-more">Tap to expand →</div></ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses on the same problem: where the brand stood, what was at stake, and how we would know the system worked.</p>
          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div><h3 className="three-h">Current Problem</h3>
              <ul className="three-list"><li>The brand existed only as a script font typed in a phone app, with no vector artwork of any kind.</li><li>Boxes were plain white with a sticker, so the most-photographed moment of the experience carried no brand at all.</li><li>Cake photography was inconsistent in background and lighting, so the Instagram grid never cohered.</li><li>Enquiries arrived across three channels with no order form, costing the owner hours a week.</li></ul>
              <span className="three-cta">Read the full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div><h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>A custom cake is bought on trust and photographed on delivery. The packaging is the brand&apos;s only physical surface.</li><li>Wedding clients share the box and the cake together; unbranded packaging forfeits that reach entirely.</li><li>A coherent Instagram grid is the studio&apos;s primary sales channel, not a vanity metric.</li><li>An order form is a brand touchpoint and an operations fix at the same time.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div><h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Box test: does the packaging photograph well alongside the cake, in a client&apos;s own lighting?</li><li>Small-scale test: does the monogram emboss legibly on a 15 mm ribbon?</li><li>Grid test: does a nine-post feed cohere using only the studio&apos;s own photography?</li><li>Operations: does the order card reduce back-and-forth on a typical enquiry?</li></ul>
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
              <div className="lg-grid"><span className="ax h"></span><span className="ax v"></span><span className="ring"></span><span className="m">B</span></div>
              <p className="bx-p">The wordmark pairs a warm serif with a single hand-drawn <strong>ribbon stroke</strong> that loops from the <strong>B</strong>. The monogram isolates that loop into a mark that embosses cleanly at 15 mm and pipes legibly in buttercream, which was the real design constraint.</p>
            </div>
            <div className="bx c4">
              <div className="bx-h"><span>02 · Clear space</span><b>x</b></div>
              <div className="cs-box"><span className="x t">x</span><span className="x l">x</span><div className="inner">B</div></div>
              <p className="bx-p">Clear space equals the height of the <strong>B</strong> bowl. On boxes the ribbon stroke may extend past the clear-space boundary, which is the one permitted exception.</p>
            </div>
            <div className="bx c3 accent">
              <div className="bx-h"><span>03 · Minimum size</span></div>
              <div className="bx-t">15mm</div>
              <p className="bx-p">Ribbon emboss floor. Below this, the wordmark is dropped and the monogram is used alone.</p>
              <div className="bx-foot">Tested in production</div>
            </div>

            <div className="bx c7">
              <div className="bx-h"><span>04 · Colour system</span><b>6 tokens</b></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#4A2B33' }}></div><div className="m"><b>Cocoa</b><span>#4A2B33 · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#E9B7A5' }}></div><div className="m"><b>Buttercream</b><span>#E9B7A5 · Primary</span></div></div><div className="sw2"><div className="c" style={{ background: '#FCF6F0' }}></div><div className="m"><b>Icing</b><span>#FCF6F0 · Background</span></div></div></div>
              <div className="pal-row p3"><div className="sw2"><div className="c" style={{ background: '#9E3B52' }}></div><div className="m"><b>Berry</b><span>#9E3B52 · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#C9A227' }}></div><div className="m"><b>Gold Leaf</b><span>#C9A227 · Accent</span></div></div><div className="sw2"><div className="c" style={{ background: '#101211' }}></div><div className="m"><b>Ink</b><span>#101211 · Text</span></div></div></div>
              <p className="bx-p">Every pairing is specified for print and screen and tested to WCAG AA before it enters the system.</p>
            </div>
            <div className="bx c5 cream">
              <div className="bx-h"><span>05 · Typography</span><b>2 families</b></div>
              <div className="ty-row"><span className="s">Display</span><span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-.025em', color: 'var(--bi-deep)' }}>Canela</span></div>
              <div className="ty-row"><span className="s">Text</span><span style={{ fontWeight: 600, fontSize: 'clamp(16px,2vw,22px)' }}>Graphik</span></div>
              <div className="ty-spec">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 &amp; @ · % ( ) —</div>
              <p className="bx-p">A warm high-contrast serif carries the wordmark and occasion copy. A neutral grotesk handles allergens, storage instructions, and order details, where warmth would get in the way of clarity.</p>
            </div>

            <div className="bx c6">
              <div className="bx-h"><span>06 · Forbidden usage</span><b>6 rules</b></div>
              <div className="dont">
                <div className="s1">B<span>Do not letterspace</span></div>
                <div className="s2">B<span>Do not italicise</span></div>
                <div className="s3">B<span>Do not tint</span></div>
                <div className="s4">B<span>Do not resubstitute</span></div>
                <div className="s5">B<span>Do not gradient</span></div>
                <div className="s6"><b>B</b><span>Do not stretch</span></div>
              </div>
              <p className="bx-p">Six explicit misuse cases, each with a visual example. Rules beat guidance — vendors follow what they can see.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>07 · Iconography</span><b>8</b></div>
              <div className="ic-set">
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M4.5 20v-6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.5c1.6 0 1.6 1.4 3.2 1.4s1.6-1.4 3.2-1.4 1.6 1.4 3.2 1.4 1.6-1.4 3.2-1.4M12 12V8.5"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="6.8" r="1.3"/></svg><span>Celebration</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 19.5 12 5l8 14.5z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7.2 14h9.6"/></svg><span>Servings</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12c-2.5 0-4.5-1.6-4.5-3.5S9.5 5 12 5s4.5 1.6 4.5 3.5S14.5 12 12 12Z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m9.6 11.4-3.4 8 5.8-3 5.8 3-3.4-8"/></svg><span>Finish</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 12h12l-1.6 8H7.6z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 12a3.2 3.2 0 0 1 .6-5.6 3.4 3.4 0 0 1 6.4-1.2 3 3 0 0 1 3 6.8"/></svg><span>Patisserie</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="14.5" r="5.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9V5M12 5c-1.6-1.4-3.4-1.6-4.6-1.2.4 1.7 2.2 2.8 4.6 1.2ZM12 5c1.6-1.4 3.4-1.6 4.6-1.2-.4 1.7-2.2 2.8-4.6 1.2Z"/></svg><span>Flavour</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" x="8.5" y="10" width="7" height="11" rx="1.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 10V7.5"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.6 1.5 2.2 2.5 2.2 3.4a2.2 2.2 0 0 1-4.4 0C9.8 5.5 10.4 4.5 12 3Z"/></svg><span>Occasion</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m12 3 8 4v10l-8 4-8-4V7z"/><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 4 8-4M12 11v10"/></svg><span>Delivery</span></div>
                <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="8"/><circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="5" strokeDasharray="2 2"/></svg><span>Seal</span></div>
              </div>
              <p className="bx-p">Eight glyphs on a 24 px grid at a single 1.5 px stroke, echoing the ribbon loop’s open curves. Always paired with a label on cards and packaging.</p>
            </div>
            <div className="bx c3">
              <div className="bx-h"><span>08 · Pattern</span></div>
              <div className="pat a"></div>
              <p className="bx-p">A loose dot-and-ribbon repeat drawn from the wordmark loop. Printed as a blind emboss on box lids and used at low opacity behind social copy.</p>
            </div>

            <div className="bx c12">
              <div className="bx-h"><span>09 · Voice &amp; tone</span><b>4 pillars</b></div>
              <div className="pillars-row"><div className="vp"><b>Warm</b><span>Writes like a person, not a shopfront.</span></div><div className="vp"><b>Clear</b><span>Allergens and storage stated plainly, always.</span></div><div className="vp"><b>Occasion-led</b><span>Names the moment, not the product category.</span></div><div className="vp"><b>Unhurried</b><span>No countdowns, no scarcity language.</span></div></div>
            </div>
          </div>
        </section>

        <section className="proj-section" id="results">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">Outcomes first, then the decisions that produced them.</p>
          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip"><div className="istat lift"><div className="n">4</div><div className="l">Box formats systemised</div></div><div className="istat lift"><div className="n">+72%</div><div className="l">Tagged client photos</div></div><div className="istat lift"><div className="n">15mm</div><div className="l">Ribbon emboss floor</div></div><div className="istat lift"><div className="n">1</div><div className="l">Order card, three channels</div></div></div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip"><div className="istat lift"><div className="n">5 wks</div><div className="l">Brief to launch</div></div><div className="istat lift"><div className="n">20pp</div><div className="l">Guideline document</div></div><div className="istat lift"><div className="n">9</div><div className="l">Social grid templates</div></div><div className="istat lift"><div className="n">3</div><div className="l">Live order tests</div></div></div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the decisions underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary><span className="pillar-num">01</span><span className="pillar-h">A mark that pipes as well as it prints</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Ribbon loop</div><p>A single continuous stroke that a decorator can reproduce freehand in buttercream.</p></div><div className="pillar-col"><div className="pillar-col-h">Emboss floor</div><p>Monogram tested at 15 mm on ribbon before the wordmark was finalised.</p></div><div className="pillar-col"><div className="pillar-col-h">Blind emboss</div><p>Box lids use an unprinted emboss, which photographs better than ink under warm light.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">02</span><span className="pillar-h">Packaging designed to be photographed</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Neutral interior</div><p>Box interiors in icing white so the cake, not the packaging, holds the colour.</p></div><div className="pillar-col"><div className="pillar-col-h">Lid geometry</div><p>Mark positioned to stay visible when the lid is set beside the cake, which is how clients shoot it.</p></div><div className="pillar-col"><div className="pillar-col-h">Ribbon system</div><p>Three ribbon colours by occasion, each embossed with the monogram.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">03</span><span className="pillar-h">A grid built on the studio&apos;s own photos</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">Photography direction</div><p>A one-page note on background, light, and angle so the owner&apos;s phone shots cohere.</p></div><div className="pillar-col"><div className="pillar-col-h">Nine-tile rotation</div><p>Three template types rotating across a nine-tile grid.</p></div><div className="pillar-col"><div className="pillar-col-h">Copy templates</div><p>Occasion-led captions with allergen and lead-time details in a fixed footer.</p></div></div>
            </details>
            <details className="pillar">
              <summary><span className="pillar-num">04</span><span className="pillar-h">The order card as a brand touchpoint</span><span className="pillar-toggle">+</span></summary>
              <div className="pillar-body"><div className="pillar-col"><div className="pillar-col-h">One form, three channels</div><p>A single order card used on Instagram, WhatsApp, and in the studio.</p></div><div className="pillar-col"><div className="pillar-col-h">Structured enquiry</div><p>Occasion, servings, date, flavour, allergens, and reference images captured up front.</p></div><div className="pillar-col"><div className="pillar-col-h">Lead-time clarity</div><p>Turnaround stated on the card, which removed most of the back-and-forth.</p></div></div>
            </details>
          </div>
        </section>

        <section className="proj-section" id="mockups">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Applications &amp; Mockups</h2></div>
          <p className="ps-sub">The system off-screen. Every application below was produced against the rules in Section 03, and each one tested a different constraint.</p>
          <div className="bi-mocks">
            <div className="bm c3">
              <div className="bm-stage "><div className="o-card"><div className="k">B</div><div className="l">BREA · 2023</div></div></div>
              <div className="bm-cap"><span className="bm-t">Cake box lid</span><span className="bm-m">Board · Blind emboss</span></div>
              <p className="bm-d">The most-photographed surface. Unprinted emboss reads better than ink under warm light.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-stamp">B</div></div>
              <div className="bm-cap"><span className="bm-t">Ribbon monogram</span><span className="bm-m">Satin · 15 mm</span></div>
              <p className="bm-d">The smallest application and the constraint that shaped the mark.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage dark"><div className="o-pack"><b>Brea</b><em>BREA</em></div></div>
              <div className="bm-cap"><span className="bm-t">Patisserie box</span><span className="bm-m">Board · Two-colour</span></div>
              <p className="bm-d">Smaller format for single-serve and tasting boxes.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage brand"><div className="o-signage">BREA</div></div>
              <div className="bm-cap"><span className="bm-t">Studio signage</span><span className="bm-m">Painted · 1.8 m</span></div>
              <p className="bm-d">Studio frontage. Cocoa field, buttercream mark, ribbon stroke running off the edge.</p>
            </div>
            <div className="bm c6 wide">
              <div className="bm-stage dark"><div className="o-social"><div>Handmade<em>01</em></div><div>Generous<em>02</em></div><div>Occasion<em>03</em></div><div>Brea<em>04</em></div><div>2026<em>05</em></div></div></div>
              <div className="bm-cap"><span className="bm-t">Instagram grid</span><span className="bm-m">Digital · 9 tiles</span></div>
              <p className="bm-d">Built entirely from the studio&apos;s own photography using the direction note.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-label"><b>Brea</b><em>Bakery · Custom cakes &amp; patisserie</em></div></div>
              <div className="bm-cap"><span className="bm-t">Order card</span><span className="bm-m">Print · A6</span></div>
              <p className="bm-d">One form across three enquiry channels. Fixed a real operations problem.</p>
            </div>
            <div className="bm c3">
              <div className="bm-stage "><div className="o-tote"><span>B</span></div></div>
              <div className="bm-cap"><span className="bm-t">Client tote</span><span className="bm-m">Cotton · Two-colour</span></div>
              <p className="bm-d">Included with wedding orders. Ribbon stroke wrapping the side seam.</p>
            </div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list"><li>Testing the monogram at 15 mm on ribbon before finalising the wordmark meant the whole system was built up from its hardest constraint.</li><li>Sending three real orders out in prototype packaging told me more than any mockup review would have.</li><li>The order card was not in the brief. It became the piece of the project the client valued most.</li></ul>
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
