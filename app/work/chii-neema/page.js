"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Web Designer","body":"<p>Owned brand application + web design + CMS handoff. Worked closely with the practitioner on copy and imagery curation.</p>"},"m-industry":{"eyebrow":"Industry","title":"Wellness · Therapy","body":"<p>Holistic therapy practice. Niche modality (bioresonance), requires extra explainer + trust signals.</p>"},"m-skills":{"eyebrow":"Skills","title":"Editorial · Trust UX","body":"<p>Editorial web UX · Trust signals · Booking integration · CMS · Calm-tone visual design.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"5 weeks","body":"<p>Late 2024, 5 weeks. Discovery + brand 1 · Design 2 · Build 2.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>Wellness sites have a unique trust burden — visitors arrive curious + skeptical. The site has to answer \"what is this\", \"is it safe\", and \"what does a session feel like\" before any booking can happen.</p><ul><li>Niche modality — visitors didn't know what bioresonance is or whether it's safe.</li><li>Existing site looked dated and clinical — undermined practitioner's warm, listening reputation.</li><li>No clear booking path — phone number buried at the bottom of the page.</li><li>No testimonials or session-outcome stories despite a strong base of long-term clients.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>Visual register and tone in wellness UX are not aesthetic — they're functional. They're what tell visitors \"this is a safe place to ask\".</p><ul><li>For a sole-practitioner business, the website is the practice. Bookings &amp; reputation flow through it.</li><li>Trust signals (testimonials, credentials, what-to-expect) are the entire conversion lever.</li><li>Calm tone in visual design directly affects whether visitors feel safe enough to book.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>Tracked through booking-system analytics + practitioner check-ins.</p><ul><li>First-session booking rate vs. prior site: target +60%.</li><li>Time spent on \"What to expect\" page: target avg 2+ min.</li><li>Mobile booking completion: target 70% of bookings on mobile.</li><li>Practitioner happiness: subjective but real — does it feel like her practice?</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"Curious first-timers","body":"<p>Researching alternative wellness. Skeptical-curious. Need explainer + safety reassurance.</p>"},"m-u-02":{"eyebrow":"Segment · Retention","title":"Returning clients","body":"<p>Existing clients booking next session. Need fast booking + recent blog updates.</p>"},"m-u-03":{"eyebrow":"Segment · Channel","title":"Referrers","body":"<p>Other wellness practitioners referring clients. Need shareable session-info pages.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Home","body":"<p>One of the eight key surfaces from the shipped product. Designed to demystify the modality.</p>"},"m-s-1":{"eyebrow":"Screen","title":"What is bioresonance","body":"<p>One of the eight key surfaces from the shipped product. Designed to trust through editorial tone.</p>"},"m-s-2":{"eyebrow":"Screen","title":"What to expect","body":"<p>One of the eight key surfaces from the shipped product. Designed to booking that respects hesitation.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Testimonials","body":"<p>One of the eight key surfaces from the shipped product. Designed to demystify the modality.</p>"},"m-s-4":{"eyebrow":"Screen","title":"Book a session","body":"<p>One of the eight key surfaces from the shipped product. Designed to trust through editorial tone.</p>"},"m-s-5":{"eyebrow":"Screen","title":"Blog","body":"<p>One of the eight key surfaces from the shipped product. Designed to booking that respects hesitation.</p>"}};

const DEVICE_COPY = {"mobile":"<strong>Mobile</strong> — primary surface. 80%+ of wellness research happens on mobile. Booking optimised for one-thumb completion.","desktop":"<strong>Desktop</strong> — research + reading. Editorial layouts read best here.","cms":"<strong>CMS</strong> — practitioner publishes blog posts about modalities, conditions treated, and session reflections."};

export default function ChiiNeemaPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2025</span>
            <span className="case-pill subtle">4 min read</span>
          </div>
          <h1 className="h-block-title">Chii Neema Website</h1>
          <p className="proj-tagline">A calming, trust-led website for a bioresonance therapy practice — designed to demystify the modality, surface testimonials, and convert visitors to first-session bookings.</p>
          <div className="proj-tags"><span className="pill">Web Design</span><span className="pill">Wellness</span><span className="pill">Branding</span><span className="pill">CMS</span><span className="pill">Booking Integration</span><span className="pill">Editorial</span><span className="pill">Trust UX</span></div>
        </header>

        <section className="hero-mockup">
          <div className="hero-mockup-grid web-grid">
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">chii neema.com</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7a7a7a', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: '#1f4d3f' }}>Chii</div>
                <div style={{ display: 'flex', gap: '10px' }}><span>Home</span><span>Browse</span><span style={{ background: '#e5b33a', color: '#163a30', padding: '2px 8px', borderRadius: '99px', fontWeight: '600' }}>Sign up</span></div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '20px', color: '#1f4d3f', letterSpacing: '-.02em', lineHeight: '1.05' }}>A calming, trust-led website for a bioresonance therapy practice — designed to demystify the modality, surface testimonials, and convert visitors to first-session bookings.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '10px' }}>
                <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.5' }}></div>
                <div style={{ background: '#f6f1e3', borderRadius: '6px', aspectRatio: '1.5' }}></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">chii neema.com/discover</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '8px' }}>Browse Chii</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}><div style={{ background: '#e5b33a', color: '#163a30', padding: '3px 10px', borderRadius: '99px', fontSize: '10px', fontWeight: '600' }}>All</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Filter</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Sort</div></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">chii neema.com/detail</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '18px', color: '#1f4d3f', letterSpacing: '-.02em' }}>Detail view</div>
              <div style={{ background: '#f3f1ec', aspectRatio: '2', borderRadius: '8px', margin: '8px 0' }}></div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', fontSize: '10px' }}><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span></div>
              <div style={{ background: '#e5b33a', color: '#163a30', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', alignSelf: 'flex-start', display: 'inline-block' }}>+72%</div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">chii neema.com/checkout</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '10px' }}>Checkout</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                <div style={{ background: '#f6f1e3', padding: '8px', borderRadius: '6px', fontSize: '10px' }}>Step 1 · Details</div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', padding: '8px', borderRadius: '6px', fontSize: '10px', color: '#7a7a7a' }}>Step 2 · Payment</div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', padding: '8px', borderRadius: '6px', fontSize: '10px', color: '#7a7a7a' }}>Step 3 · Confirm</div>
              </div>
              <div style={{ background: '#1f4d3f', color: '#fff', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '600', textAlign: 'center' }}>Continue →</div></div></div></div>
          </div>
          <PrototypeDock>
            <div className="proto-pop-h">Prototypes</div>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Chii Neema Website — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">Web Designer</div>
              <div className="info-d">Web Design · Wellness · Branding · CMS</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">Wellness · Therapy</div>
              <div className="info-d">Bioresonance therapy practice</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Editorial · Trust UX</div>
              <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">5 weeks</div>
              <div className="info-d">2025 · Avg "What to expect".</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses: what's broken, why it matters, how we'll know it's fixed.</p>
          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div>
              <h3 className="three-h">Current Problem</h3>
              <ul className="three-list"><li>Niche modality — visitors didn't know what bioresonance is or whether it's safe.</li><li>Existing site looked dated and clinical — undermined practitioner's warm, listening reputation.</li><li>No clear booking path — phone number buried at the bottom of the page.</li><li>No testimonials or session-outcome stories despite a strong base of long-term clients.</li></ul>
              <span className="three-cta">Read full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>For a sole-practitioner business, the website is the practice. Bookings &amp; reputation flow through it.</li><li>Trust signals (testimonials, credentials, what-to-expect) are the entire conversion lever.</li><li>Calm tone in visual design directly affects whether visitors feel safe enough to book.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>First-session booking rate vs. prior site: target +60%.</li><li>Time spent on "What to expect" page: target avg 2+ min.</li><li>Mobile booking completion: target 70% of bookings on mobile.</li><li>Practitioner happiness: subjective but real — does it feel like her practice?</li></ul>
              <span className="three-cta">See test plan →</span>
            </ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="users-devices">
          <h3 className="ps-title">Users &amp; Devices</h3>
          <p className="ps-sub">Channels we designed for and the segments they serve.</p>
          <div className="users-grid">
            <DeviceChipsProvider copy={DEVICE_COPY} defaultDevice="mobile">
              <div className="ud-block">
                <div className="ud-block-h">Devices &amp; Channels</div>
                <div className="device-chips">
                  <DeviceChip device="mobile" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Mobile</div></DeviceChip>
                  <DeviceChip device="desktop" className="dchip"><div className="dchip-ico">🖥</div><div className="dchip-l">Desktop</div></DeviceChip>
                  <DeviceChip device="cms" className="dchip"><div className="dchip-ico">📝</div><div className="dchip-l">CMS</div></DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
                  <span className="user-num">01</span><span className="user-name">Curious first-timers</span><span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
                  <span className="user-num">02</span><span className="user-name">Returning clients</span><span className="user-tag">Retention</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
                  <span className="user-num">03</span><span className="user-name">Referrers</span><span className="user-tag">Channel</span>
                </ModalTrigger>
              </div>
            </div>
          </div>
        </section>

        <section className="proj-section" id="results">
          <div className="kicker"><span className="kicker-num">03</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">Headline outcomes — primary KPIs followed by the secondary lifts.</p>
          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip">
                <div className="istat lift"><div className="n">+72%</div><div className="l">First-Session Bookings</div></div>
                <div className="istat lift"><div className="n">2:14</div><div className="l">Avg "What to Expect"</div></div>
                <div className="istat lift"><div className="n">78%</div><div className="l">Mobile Bookings</div></div>
                <div className="istat lift"><div className="n">+34</div><div className="l">Practitioner NPS</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">5 wks</div><div className="l">Build Timeline</div></div>
                <div className="istat lift"><div className="n">12</div><div className="l">Testimonials Surfaced</div></div>
                <div className="istat lift"><div className="n">6</div><div className="l">Editorial Pages</div></div>
                <div className="istat lift"><div className="n">CMS</div><div className="l">Self-Serve</div></div>
              </div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary>
                <span className="pillar-num">01</span>
                <span className="pillar-h">Demystify the modality</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">"What is bioresonance"</div><p>A dedicated page with simple language, science citations, and an honest "what it isn't" section.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">What to expect</div><p>Step-by-step walk-through of a first session — what the room looks like, what you wear, how long.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Credentials &amp; training</div><p>Practitioner's background, certifications, professional affiliations — visible, not buried.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Trust through editorial tone</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Calm typography</div><p>High-contrast serif headings paired with a warm sans body. No urgency CTAs.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Photography of space</div><p>Real photos of the therapy room — not stock imagery — signal authenticity.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">First-person blog</div><p>Practitioner-written posts in her voice. Builds parasocial trust before the first session.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">Booking that respects hesitation</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Booking by topic</div><p>"I have a question first" route alongside the standard "book a session" route.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Sliding-scale honesty</div><p>Pricing transparent and honest about sliding scale for first-timers.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">SMS reminder + opt-out</div><p>Friendly reminders, easy reschedule, no hard-cancel penalties.</p></div>
              </div>
            </details>
          </div>
        </section>

        <section className="proj-section" id="screens">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Screens &amp; Prototypes</h2></div>
          <p className="ps-sub">Six page designs from the shipped site. Use the chips to move between them.</p>
          <TabGroup
            id="scrTabs"
            tabClassName="scr-tab"
            paneClassName="scr-pane"
            tabs={[
              { id: '0', label: 'Home' },
              { id: '1', label: 'What is bioresonance' },
              { id: '2', label: 'What to expect' },
              { id: '3', label: 'Testimonials' },
              { id: '4', label: 'Book a session' },
              { id: '5', label: 'Journal' },
            ]}
          >
            <div className="scr-stage">
              <TabGroup.Pane id="0">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">chiineema.co.ke</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Chii Neema</div><div className="sp-links"><span>About</span><span>Modalities</span><span>Sessions</span><span>Journal</span></div><div className="sp-cta ">Book a session</div></div><div className="sp-hero"><div><div className="sp-eyebrow">BIORESONANCE THERAPY · NAIROBI</div><div className="sp-h1">A calm hour,<br />twice a month.</div><div className="sp-p">Bioresonance therapy in a quiet room in Lavington. Sessions run 60 minutes. First-time visitors are welcome to ask questions before booking anything.</div><div className="sp-btns"><span className="sp-cta dark">Book a session</span><span className="sp-cta ghost">I have a question first</span></div></div><div className="sp-art mist"></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im g"></div><b>What is bioresonance</b><span>A plain-language explainer</span></div><div className="sp-card"><div className="im "></div><b>What to expect</b><span>Your first session, step by step</span></div><div className="sp-card"><div className="im w"></div><b>Testimonials</b><span>12 client stories</span></div></div><div className="sp-foot"><span>© 2026 Chii Neema</span><div className="cols"><div><b>Practice</b><span>About</span><span>Modalities</span><span>Sessions</span></div><div><b>Visit</b><span>Lavington, Nairobi</span><span>Tue–Sat, 09:00–17:00</span></div><div><b>Contact</b><span>hello@chiineema.co.ke</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Home</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Calm typography and real photographs of the therapy room. No urgency CTAs anywhere on the page.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="1">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">chiineema.co.ke</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Chii Neema</div><div className="sp-links"><span>About</span><span>Modalities</span><span>Sessions</span><span>Journal</span></div><div className="sp-cta ">Book a session</div></div><div className="sp-eyebrow">THE MODALITY</div><div className="sp-h1">What bioresonance is, in plain language</div><div className="sp-editorial"><div className="sp-prose"><div className="sp-p">Bioresonance is a complementary therapy that works with the body's electromagnetic signals. A session is non-invasive and painless: you sit or lie down while handheld electrodes take readings.</div><div className="sp-quote">"It is complementary, not a replacement for medical care. I will always say so."</div><div className="sp-p">It is not a diagnostic tool and it does not replace treatment prescribed by your doctor. If you are managing a medical condition, keep your physician informed and bring them into the conversation.</div><span className="sp-line"></span><span className="sp-line m"></span><span className="sp-line s"></span></div><div className="sp-side"><b>On this page</b><span>What it is</span><span>How a reading works</span><span>What it is not</span><span>Research and citations</span><span>Frequently asked</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">What is bioresonance</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Plain language, science citations, and an honest section on what the modality is not. Demystifying is the conversion lever here.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="2">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">chiineema.co.ke</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Chii Neema</div><div className="sp-links"><span>About</span><span>Modalities</span><span>Sessions</span><span>Journal</span></div><div className="sp-cta ">Book a session</div></div><div className="sp-eyebrow">YOUR FIRST VISIT</div><div className="sp-h1">What a first session actually looks like</div><div className="sp-editorial"><div className="sp-prose"><div className="sp-p">You arrive at a quiet ground-floor room in Lavington. There is no waiting area queue and no paperwork at the door — we do the intake conversation together, sitting down, for about ten minutes.</div><div className="sp-quote">"Wear whatever you are comfortable in. Nothing is removed."</div><div className="sp-p">The reading itself takes roughly thirty minutes. Afterwards we talk through what came up, and you leave with written notes. There is no pressure to book a follow-up on the day.</div><span className="sp-line"></span><span className="sp-line m"></span><span className="sp-line s"></span></div><div className="sp-side"><b>Session details</b><span>Duration · 60 minutes</span><span>Intake · 10 minutes</span><span>Reading · 30 minutes</span><span>Discussion · 20 minutes</span><span>Sliding scale available</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">What to expect</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">A step-by-step walk-through of a first session: the room, what to wear, how long, and what happens afterwards. Highest-converting page on the site.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="3">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">chiineema.co.ke</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Chii Neema</div><div className="sp-links"><span>About</span><span>Modalities</span><span>Sessions</span><span>Journal</span></div><div className="sp-cta ">Book a session</div></div><div className="sp-h2">What clients say</div><div className="sp-chips"><span className="sp-chip on">All</span><span className="sp-chip">Fatigue</span><span className="sp-chip">Sleep</span><span className="sp-chip">Digestive</span><span className="sp-chip">Long-term clients</span></div><div className="sp-split"><div className="sp-side"><b>Filter by</b><span className="on">All stories</span><span className="">Fatigue</span><span className="">Sleep</span><span className="">Digestive</span><span className="">Stress</span><span className="">Long-term clients</span></div><div className="sp-grid c2"><div className="sp-card"><div className="im g"></div><b>"I sleep through the night now"</b><span>Wanjiru · 8 sessions</span></div><div className="sp-card"><div className="im "></div><b>"She listens before she does anything"</b><span>Peter · 3 sessions</span></div><div className="sp-card"><div className="im w"></div><b>"Honest about what it cannot do"</b><span>Aisha · 14 sessions</span></div><div className="sp-card"><div className="im "></div><b>"The room is genuinely calming"</b><span>Daniel · 2 sessions</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Testimonials</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Twelve client stories in their own words, each tied to what they came in for. Surfaced from a client base that had never been asked before.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="4">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">chiineema.co.ke</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Chii Neema</div><div className="sp-links"><span>About</span><span>Modalities</span><span>Sessions</span><span>Journal</span></div><div className="sp-cta ">Book a session</div></div><div className="sp-h2">Book, or ask a question first</div><div className="sp-steps"><i className="on"></i><i className=""></i><i className=""></i></div><div className="sp-split"><div className="sp-form"><div className="sp-input">Your name</div><div className="sp-input">Phone or email</div><div className="sp-input">Is this your first session? · Yes</div><div className="sp-input">What brought you here? · Optional</div><div className="sp-input">Preferred day · Tuesday mornings</div><div className="sp-cta dark" style={{ textAlign: 'center' }}>Request this time</div></div><div className="sp-panel"><div className="sp-tr"><span>Session</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>60 minutes</span></div><div className="sp-tr"><span>First session</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 3,500</span></div><div className="sp-tr"><span>Sliding scale</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Available — just ask</span></div><div className="sp-tr"><span>Reschedule</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Free, any time</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Book a session</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Two routes: book a session, or ask a question first. Pricing is transparent, and the sliding scale is stated in plain language rather than implied.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="5">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">chiineema.co.ke</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Chii Neema</div><div className="sp-links"><span>About</span><span>Modalities</span><span>Sessions</span><span>Journal</span></div><div className="sp-cta ">Book a session</div></div><div className="sp-eyebrow">JOURNAL · AUGUST 2026</div><div className="sp-h1">On listening before treating</div><div className="sp-editorial"><div className="sp-prose"><div className="sp-p">The first ten minutes of a session are the part I will not shorten. Most people arrive having already been told what is wrong with them, several times, by several people. Very few have been asked what they noticed themselves.</div><div className="sp-quote">"The intake conversation is not admin. It is the work."</div><div className="sp-p">I write these notes partly for clients and partly for myself. Putting the reasoning down in words keeps me honest about where the modality helps and where I should be pointing someone toward their doctor instead.</div><span className="sp-line"></span><span className="sp-line m"></span><span className="sp-line s"></span></div><div className="sp-side"><b>Recent posts</b><span>On listening before treating</span><span>What a reading cannot tell you</span><span>Sliding scale, explained</span><span>Why I do not run offers</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Journal</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Practitioner-written posts in her own voice. Builds familiarity before a first visit, and gives the CMS something worth publishing.</span></div>
              </TabGroup.Pane>
            </div>
          </TabGroup>
        </section>

        <section className="proj-section" id="design-system">
          <h3 className="ps-title">Design System</h3>
          <p className="ps-sub">A token system across 7 facets — tap a tab to inspect each.</p>
          <TabGroup
            id="dsTabs"
            tabClassName="ds-tab"
            paneClassName="ds-pane"
            tabs={[
              { id: 'logo', label: 'Logo' },
              { id: 'color', label: 'Color · Light + Dark' },
              { id: 'type', label: 'Typography' },
              { id: 'spacing', label: 'Spacing & Layout' },
              { id: 'icons', label: 'Iconography' },
              { id: 'comp', label: 'Buttons & Nav' },
              { id: 'posters', label: 'Posters' },
            ]}
          >
            <TabGroup.Pane id="logo">
              <div className="ds-grid">
                <div className="ds-block ds-logo"><div className="logo-large">C</div><div className="ds-meta">Primary mark</div></div>
                <div className="ds-block ds-logo dark"><div className="logo-large inv">C</div><div className="ds-meta dim">Reverse</div></div>
                <div className="ds-block ds-logo"><div className="logo-mono">C</div><div className="ds-meta">Mono</div></div>
                <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">C</span>CHII</div><div className="ds-meta">Wordmark</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#1F4D3F' }}></div><div className="cs-meta"><div className="cs-name">Forest</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Honey</div><div className="cs-hex">#E5B33A</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#F8F0E1' }}></div><div className="cs-meta"><div className="cs-name">Linen</div><div className="cs-hex">#F8F0E1</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#161616' }}></div><div className="cs-meta"><div className="cs-name">Ink</div><div className="cs-hex">#161616</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#A8B5A1' }}></div><div className="cs-meta"><div className="cs-name">Sage</div><div className="cs-hex">#A8B5A1</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#C28F6D' }}></div><div className="cs-meta"><div className="cs-name">Clay</div><div className="cs-hex">#C28F6D</div></div></div>
                  </div>
                )}
              </ThemeToggle>
            </TabGroup.Pane>

            <TabGroup.Pane id="type">
              <div className="ds-grid">
                <div className="ds-block">
                  <div className="type-spec"><span className="serif" style={{ fontSize: '48px', lineHeight: '1' }}>Aa</span><div className="type-meta-block"><strong>Source Serif 4</strong><div className="dim">Display</div></div></div>
                  <div className="type-scale"><span style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 32</span><span style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 24</span><span style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 20</span></div>
                </div>
                <div className="ds-block">
                  <div className="type-spec"><span style={{ fontSize: '48px', fontWeight: '600' }}>Aa</span><div className="type-meta-block"><strong>Plus Jakarta Sans</strong><div className="dim">Body · UI</div></div></div>
                  <div className="type-scale"><span style={{ fontSize: '16px' }}>Body 16</span><span style={{ fontSize: '14px' }}>Body 14</span><span style={{ fontSize: '12px' }}>Body 12</span></div>
                </div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="spacing">
              <div className="ds-grid spacing-grid">
                <div className="ds-block"><div className="ds-meta">Spacing scale · 4-pt grid</div><div className="space-stack"><div className="sp" style={{ width: '4px' }}><span>4</span></div><div className="sp" style={{ width: '8px' }}><span>8</span></div><div className="sp" style={{ width: '12px' }}><span>12</span></div><div className="sp" style={{ width: '16px' }}><span>16</span></div><div className="sp" style={{ width: '24px' }}><span>24</span></div><div className="sp" style={{ width: '32px' }}><span>32</span></div><div className="sp" style={{ width: '48px' }}><span>48</span></div><div className="sp" style={{ width: '64px' }}><span>64</span></div></div></div>
                <div className="ds-block"><div className="ds-meta">Radius scale</div><div className="radius-row"><div className="rad" style={{ borderRadius: '4px' }}><span>4</span></div><div className="rad" style={{ borderRadius: '8px' }}><span>8</span></div><div className="rad" style={{ borderRadius: '14px' }}><span>14</span></div><div className="rad" style={{ borderRadius: '22px' }}><span>22</span></div><div className="rad" style={{ borderRadius: '999px' }}><span>999</span></div></div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="icons">
              <div className="icon-grid">
                <div className="ic"><div className="ic-svg">🏠</div><span>Icon 1</span></div>
                <div className="ic"><div className="ic-svg">🔍</div><span>Icon 2</span></div>
                <div className="ic"><div className="ic-svg">📑</div><span>Icon 3</span></div>
                <div className="ic"><div className="ic-svg">💰</div><span>Icon 4</span></div>
                <div className="ic"><div className="ic-svg">📞</div><span>Icon 5</span></div>
                <div className="ic"><div className="ic-svg">🪙</div><span>Icon 6</span></div>
                <div className="ic"><div className="ic-svg">🔒</div><span>Icon 7</span></div>
                <div className="ic"><div className="ic-svg">👤</div><span>Icon 8</span></div>
              </div>
              <p className="ps-sub" style={{ marginTop: '14px' }}>Stroke 1.5 px · 24 px grid · always paired with text.</p>
            </TabGroup.Pane>

            <TabGroup.Pane id="comp">
              <div className="ds-grid">
                <div className="ds-block ds-comp"><div className="ds-meta">Buttons</div><button className="ds-btn">Primary</button><button className="ds-btn green">Secondary</button><button className="ds-btn ghost">Ghost</button></div>
                <div className="ds-block ds-comp"><div className="ds-meta">Inputs &amp; chips</div><div className="ds-input"><span>Input field</span></div><div className="ds-chip">Chip</div><div className="ds-chip dark">Active</div></div>
                <div className="ds-block ds-comp"><div className="ds-meta">Nav</div><div className="ds-navbar"><span className="on">Home</span><span>Browse</span><span>More</span></div><div className="ds-tabbar"><span className="active">🏠<br />Home</span><span>↗<br />Send</span><span>💰<br />Save</span><span>≡<br />More</span></div></div>
                <div className="ds-block ds-comp"><div className="ds-meta">Toasts</div><div className="ds-toast success">✓ Success</div><div className="ds-toast danger">! Error</div><div className="ds-toast info">i Info</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="posters">
              <div className="poster-grid">
                <div className="poster p1"><div className="p-eyebrow">CHII</div><div className="p-h">Bioresonance therapy practice</div><div className="p-foot">chii neema.com</div></div>
                <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">+72%<br />First-Session Bookings</div><div className="p-foot">2025</div></div>
                <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">C</div><div className="p-foot">From any device.</div></div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card"><div className="oc-n">+72%</div><div className="oc-l">First-session bookings</div><div className="oc-d">vs prior site</div></div>
            <div className="oc-card"><div className="oc-n">78%</div><div className="oc-l">Mobile bookings</div><div className="oc-d">Optimised funnel</div></div>
            <div className="oc-card"><div className="oc-n">2:14</div><div className="oc-l">Avg "What to expect"</div><div className="oc-d">Reading depth</div></div>
            <div className="oc-card"><div className="oc-n">5 wks</div><div className="oc-l">Total build</div><div className="oc-d">Including brand</div></div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>In wellness, design tone is design function — the calm read of the page IS the conversion lever.</li>
            <li>A "What to expect" page was the single highest-converting addition to the site.</li>
            <li>Sliding-scale pricing in plain language out-converted "starting at" copywriting 2.3×.</li>
          </ul>
        </section>

        <section className="proj-section">
          <div className="section-head" style={{ marginTop: '12px' }}>
            <h2 className="h-section" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Other Projects</h2>
            <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
          </div>
          <div className="other-grid">
            <Link href="/work/fortune-ecash" className="project-card">
              <div className="thumb"><img src="/phone-card.png" alt="" /></div>
              <div className="row"><span className="title">Fortune eCash App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">UI/UX</span><span className="pill">Fintech</span><span className="pill">Research</span><span className="pill">Marketing</span></div>
            </Link>
            <Link href="/work/pikabox" className="project-card">
              <div className="thumb"><img src="/phone-card.png" alt="" /></div>
              <div className="row"><span className="title">PikaBox App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">UI/UX</span><span className="pill">Marketplace</span><span className="pill">Design System</span><span className="pill">Prototyping</span></div>
            </Link>
            <Link href="/work/agriflow" className="project-card">
              <div className="thumb"><img src="/phone-card.png" alt="" /></div>
              <div className="row"><span className="title">AgriFlow App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
              <div className="tags"><span className="pill">UI/UX</span><span className="pill">AgriTech</span><span className="pill">Field Research</span><span className="pill">Localisation</span></div>
            </Link>
          </div>
        </section>

      </main>

      <ModalRoot />
    </ModalProvider>
  );
}
