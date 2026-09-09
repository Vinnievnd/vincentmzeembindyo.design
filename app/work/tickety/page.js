"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Lead Product Designer","body":"<p>Owned attendee + organiser experience. Designed a QR check-in app for door staff. Built a design system from scratch.</p>"},"m-industry":{"eyebrow":"Industry","title":"Events · Ticketing","body":"<p>Direct competitors: Eventbrite, Universe. Differentiator: regional inventory + lower organiser fees + better mobile UX.</p>"},"m-skills":{"eyebrow":"Skills","title":"Two-sided marketplace UX","body":"<p>Discovery UX · Booking funnel · Two-sided marketplace · QR check-in · Organiser dashboard · Design system.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"11 weeks","body":"<p>11 weeks. Discovery 2 · Design 6 · Prototype + test 2 · Handoff 1.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>Ticketing is a two-sided marketplace where the organiser side is underserved. Small organisers want event creation in &lt;5 minutes, sales analytics, and a check-in app that works on their phone.</p><ul><li>Existing platforms felt corporate — small organisers (parties, workshops, meetups) didn't see themselves represented.</li><li>Check-in at events was chaotic — paper lists or buggy scanner apps.</li><li>Organisers had no real-time visibility into ticket sales or guest flow.</li><li>Mobile ticket purchase was 6+ steps — too many for impulse-buyers at concerts.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>Ticketing platforms make money on the take-rate; the only way to compete with Eventbrite is to be cheaper, faster, or more local. We were all three.</p><ul><li>Events live or die on the door — bad check-in flow ruins the attendee mood before the show.</li><li>Organiser experience is the network effect — happy organisers bring repeat events + word of mouth.</li><li>Impulse-purchase tickets need a sub-90-second flow on mobile.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>Field-tested at 3 live events during launch month. Door-staff debriefed after each.</p><ul><li>Mobile ticket purchase time: target &lt; 90 sec from event-page open.</li><li>Organiser event-creation time: target &lt; 5 min for first event.</li><li>Check-in success rate: target 98%+ scans succeed on first try.</li><li>Organiser repeat rate: target 60% of organisers run a 2nd event within 60 days.</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"Event-goers","body":"<p>Concert, festival, meetup attendees. Mobile-first, impulse-prone, low patience for friction.</p>"},"m-u-02":{"eyebrow":"Segment · Supply","title":"Small organisers","body":"<p>Parties, workshops, meetups. Want event creation in &lt;5 minutes.</p>"},"m-u-03":{"eyebrow":"Segment · Growth","title":"Pro organisers","body":"<p>Concert promoters, festival organisers. Need advanced ticket types, analytics, payout schedules.</p>"},"m-u-04":{"eyebrow":"Segment · Operations","title":"Door staff","body":"<p>Volunteers or hired staff scanning tickets at the door. Need offline-capable, fast scanner.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Event detail","body":"<p>One of the eight key surfaces from the shipped product. Designed to sub-90-second mobile purchase.</p>"},"m-s-1":{"eyebrow":"Screen","title":"Checkout","body":"<p>One of the eight key surfaces from the shipped product. Designed to event creation in &lt; 5 minutes.</p>"},"m-s-2":{"eyebrow":"Screen","title":"Wallet ticket","body":"<p>One of the eight key surfaces from the shipped product. Designed to offline-capable qr check-in.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Organiser dashboard","body":"<p>One of the eight key surfaces from the shipped product. Designed to real-time organiser dashboard.</p>"},"m-s-4":{"eyebrow":"Screen","title":"Scanner app","body":"<p>One of the eight key surfaces from the shipped product. Designed to sub-90-second mobile purchase.</p>"},"m-s-5":{"eyebrow":"Screen","title":"Event creation","body":"<p>One of the eight key surfaces from the shipped product. Designed to event creation in &lt; 5 minutes.</p>"}};

const DEVICE_COPY = {"web":"<strong>Web</strong> — discovery + organiser dashboard. Mobile-responsive throughout.","mobile":"<strong>Mobile Web</strong> — primary purchase surface. 80% of ticket purchases happen here. Optimised for sub-90-sec flow.","scanner":"<strong>Scanner App</strong> — door-staff PWA for QR check-in. Works offline; syncs when back online.","organiser":"<strong>Organiser Dashboard</strong> — event creation, ticket types, real-time sales, payout management."};

export default function TicketyPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2025</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">Tickety Web App</h1>
          <p className="proj-tagline">A modern event &amp; ticketing platform — discover events, buy tickets, manage RSVPs, and check guests in via QR. Designed for both attendees and event organisers.</p>
          <div className="proj-tags"><span className="pill">UI/UX</span><span className="pill">Events</span><span className="pill">Ticketing</span><span className="pill">Design System</span><span className="pill">QR Check-in</span><span className="pill">Two-sided Marketplace</span><span className="pill">Mobile-first</span></div>
        </header>

        <section className="hero-mockup">
          <div className="hero-mockup-grid web-grid">
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">tickety.com</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7a7a7a', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: '#1f4d3f' }}>Tickety</div>
                <div style={{ display: 'flex', gap: '10px' }}><span>Home</span><span>Browse</span><span style={{ background: '#e5b33a', color: '#163a30', padding: '2px 8px', borderRadius: '99px', fontWeight: '600' }}>Sign up</span></div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '20px', color: '#1f4d3f', letterSpacing: '-.02em', lineHeight: '1.05' }}>A modern event &amp; ticketing platform — discover events, buy tickets, manage RSVPs, and check guests in via QR.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '10px' }}>
                <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.5' }}></div>
                <div style={{ background: '#f6f1e3', borderRadius: '6px', aspectRatio: '1.5' }}></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">tickety.com/discover</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '8px' }}>Browse Tickety</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}><div style={{ background: '#e5b33a', color: '#163a30', padding: '3px 10px', borderRadius: '99px', fontSize: '10px', fontWeight: '600' }}>All</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Filter</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Sort</div></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">tickety.com/detail</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '18px', color: '#1f4d3f', letterSpacing: '-.02em' }}>Detail view</div>
              <div style={{ background: '#f3f1ec', aspectRatio: '2', borderRadius: '8px', margin: '8px 0' }}></div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', fontSize: '10px' }}><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span></div>
              <div style={{ background: '#e5b33a', color: '#163a30', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', alignSelf: 'flex-start', display: 'inline-block' }}>78s</div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">tickety.com/checkout</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
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
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Tickety Web App — coming soon</a>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Tickety Organiser Dashboard — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">Lead Product Designer</div>
              <div className="info-d">UI/UX · Events · Ticketing · Design System</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">Events · Ticketing</div>
              <div className="info-d">Event ticketing platform</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Two-sided marketplace UX</div>
              <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">11 weeks</div>
              <div className="info-d">2025 · Organiser repeat.</div>
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
              <ul className="three-list"><li>Existing platforms felt corporate — small organisers (parties, workshops, meetups) didn't see themselves represented.</li><li>Check-in at events was chaotic — paper lists or buggy scanner apps.</li><li>Organisers had no real-time visibility into ticket sales or guest flow.</li><li>Mobile ticket purchase was 6+ steps — too many for impulse-buyers at concerts.</li></ul>
              <span className="three-cta">Read full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>Events live or die on the door — bad check-in flow ruins the attendee mood before the show.</li><li>Organiser experience is the network effect — happy organisers bring repeat events + word of mouth.</li><li>Impulse-purchase tickets need a sub-90-second flow on mobile.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Mobile ticket purchase time: target &lt; 90 sec from event-page open.</li><li>Organiser event-creation time: target &lt; 5 min for first event.</li><li>Check-in success rate: target 98%+ scans succeed on first try.</li><li>Organiser repeat rate: target 60% of organisers run a 2nd event within 60 days.</li></ul>
              <span className="three-cta">See test plan →</span>
            </ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="users-devices">
          <h3 className="ps-title">Users &amp; Devices</h3>
          <p className="ps-sub">Channels we designed for and the segments they serve.</p>
          <div className="users-grid">
            <DeviceChipsProvider copy={DEVICE_COPY} defaultDevice="web">
              <div className="ud-block">
                <div className="ud-block-h">Devices &amp; Channels</div>
                <div className="device-chips">
                  <DeviceChip device="web" className="dchip"><div className="dchip-ico">🖥</div><div className="dchip-l">Web</div></DeviceChip>
                  <DeviceChip device="mobile" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Mobile Web</div></DeviceChip>
                  <DeviceChip device="scanner" className="dchip"><div className="dchip-ico">📷</div><div className="dchip-l">Scanner App</div></DeviceChip>
                  <DeviceChip device="organiser" className="dchip"><div className="dchip-ico">🎉</div><div className="dchip-l">Organiser Dashboard</div></DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
                  <span className="user-num">01</span><span className="user-name">Event-goers</span><span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
                  <span className="user-num">02</span><span className="user-name">Small organisers</span><span className="user-tag">Supply</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
                  <span className="user-num">03</span><span className="user-name">Pro organisers</span><span className="user-tag">Growth</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-04" as="button" className="user-row clickable">
                  <span className="user-num">04</span><span className="user-name">Door staff</span><span className="user-tag">Operations</span>
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
                <div className="istat lift"><div className="n">78s</div><div className="l">Mobile Purchase</div></div>
                <div className="istat lift"><div className="n">4 min</div><div className="l">Event Creation</div></div>
                <div className="istat lift"><div className="n">98.4%</div><div className="l">Scan Success</div></div>
                <div className="istat lift"><div className="n">+68%</div><div className="l">Organiser Repeat</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">3</div><div className="l">Surfaces Shipped</div></div>
                <div className="istat lift"><div className="n">0→1</div><div className="l">Design System</div></div>
                <div className="istat lift"><div className="n">11w</div><div className="l">Build Timeline</div></div>
                <div className="istat lift"><div className="n">PWA</div><div className="l">Offline Scanner</div></div>
              </div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary>
                <span className="pillar-num">01</span>
                <span className="pillar-h">Sub-90-second mobile purchase</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Apple Pay / Google Pay first</div><p>No card-entry on first purchase. One tap to commit.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Persistent ticket summary</div><p>Cart sticky bottom-sheet, always visible.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Saved tickets in wallet</div><p>One-tap "Add to Wallet" so the QR is in the right place at the door.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Event creation in &lt; 5 minutes</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Templates by event type</div><p>Workshop, party, concert — each with pre-filled fields and sensible defaults.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Inline preview</div><p>Live preview of the event page as the organiser fills in fields.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Publish then refine</div><p>Default to draft → publish in one click. Edits are forgiving.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">Offline-capable QR check-in</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">PWA, no app store</div><p>Door staff load a URL, log in once, then it works.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Offline guest list</div><p>Last sync 24 hrs back. Scans queued and synced when online.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Audible confirmation</div><p>Door noise is loud — a clear chime + colour confirms scans.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">04</span>
                <span className="pillar-h">Real-time organiser dashboard</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Sales updates live</div><p>WebSocket-driven, no refresh.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Door flow at-a-glance</div><p>See guests scanned in vs. expected — flag bottlenecks early.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Payout transparency</div><p>See fee breakdown + payout date upfront. No bill shock.</p></div>
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
              { id: '0', label: 'Event detail' },
              { id: '1', label: 'Checkout' },
              { id: '2', label: 'Wallet ticket' },
              { id: '3', label: 'Organiser dashboard' },
              { id: '4', label: 'Scanner app' },
              { id: '5', label: 'Event creation' },
            ]}
          >
            <div className="scr-stage">
              <TabGroup.Pane id="0">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">tickety.africa</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Tickety</div><div className="sp-links"><span>Discover</span><span>Create</span><span>Organisers</span><span>Help</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-hero"><div><div className="sp-eyebrow">SAT 14 SEP · NAIROBI</div><div className="sp-h1">Blankets &amp; Wine · September</div><div className="sp-p">An all-day outdoor music event at the Lunar Park grounds. Gates open at noon, five acts across two stages, and food vendors on site until close.</div><div className="sp-chips"><span className="sp-chip on">Gates 12:00</span><span className="sp-chip">Two stages</span><span className="sp-chip">Food vendors</span><span className="sp-chip">Re-entry allowed</span></div><div className="sp-btns"><span className="sp-cta">Get tickets · from KSh 2,500</span><span className="sp-cta ghost">Add to calendar</span></div></div><div className="sp-art "></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im g"></div><b>Early bird</b><span>KSh 2,500 · 42 left</span></div><div className="sp-card"><div className="im "></div><b>General</b><span>KSh 3,500</span></div><div className="sp-card"><div className="im w"></div><b>VIP · Stage side</b><span>KSh 8,000 · 12 left</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Event detail</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Everything needed to commit sits above the fold. Apple Pay and Google Pay lead, so no card entry is required on a first purchase.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="1">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">tickety.africa</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Tickety</div><div className="sp-links"><span>Discover</span><span>Create</span><span>Organisers</span><span>Help</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-h2">Blankets &amp; Wine · September</div><div className="sp-steps"><i className="on"></i><i className="on"></i><i className=""></i></div><div className="sp-split"><div className="sp-form"><div className="sp-input">Apple Pay / Google Pay</div><div className="sp-input">M-Pesa · +254 712 ··· 982</div><div className="sp-input">Email for tickets</div><div className="sp-input">Ticket holder name</div><div className="sp-input">Promo code</div><div className="sp-cta dark" style={{ textAlign: 'center' }}>Pay KSh 7,000</div></div><div className="sp-panel"><div className="sp-tr"><span>2 × Early bird</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 5,000</span></div><div className="sp-tr"><span>1 × General</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 3,500</span></div><div className="sp-tr"><span>Promo · EARLY20</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>−KSh 1,500</span></div><div className="sp-tr"><span>Total</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 7,000</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Checkout</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Averages 78 seconds from event page to paid. Wallet pay first, sticky cart summary, and a one-tap add-to-wallet at the end.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="2">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">tickety.africa</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Tickety</div><div className="sp-links"><span>Discover</span><span>Create</span><span>Organisers</span><span>Help</span></div><div className="sp-cta ">My tickets</div></div><div className="sp-hero"><div><div className="sp-eyebrow">YOUR TICKET · CONFIRMED</div><div className="sp-h1">Blankets &amp; Wine</div><div className="sp-p">Saturday 14 September · Gates 12:00 · Lunar Park, Nairobi. Present this QR at any gate. Your ticket works offline once added to your wallet.</div><div className="sp-chips"><span className="sp-chip on">2 × Early bird</span><span className="sp-chip">1 × General</span><span className="sp-chip">Re-entry allowed</span><span className="sp-chip">Transferable</span></div><div className="sp-btns"><span className="sp-cta">Add to Apple Wallet</span><span className="sp-cta ghost">Transfer a ticket</span></div></div><div className="sp-art "></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im g"></div><b>Gate A</b><span>Early bird + General</span></div><div className="sp-card"><div className="im "></div><b>Getting there</b><span>Lunar Park · parking on site</span></div><div className="sp-card"><div className="im w"></div><b>Refunds</b><span>Free until 12 Sep</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Wallet ticket</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">The QR lives in the phone wallet, not an email thread. Offline-readable, so a dead signal at the gate is not a problem.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="3">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">tickety.africa</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Tickety</div><div className="sp-links"><span>Discover</span><span>Create</span><span>Organisers</span><span>Help</span></div><div className="sp-cta ">Blankets &amp; Wine</div></div><div className="sp-split"><div className="sp-side"><b>Organiser</b><span className="on">Overview</span><span className="">Tickets</span><span className="">Attendees</span><span className="">Door flow</span><span className="">Payouts</span></div><div className="sp-panel"><div className="sp-h2">Blankets &amp; Wine · September</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Tickets sold</div><div className="n">1,842</div><div className="d">+126 today</div></div><div className="sp-stat"><div className="l">Revenue</div><div className="n">KSh 6.1M</div><div className="d">+8%</div></div><div className="sp-stat"><div className="l">Scanned in</div><div className="n">1,204</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none" /><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4" /></svg></div><div className="sp-table"><div className="sp-tr h"><span>Ticket type</span><span>Sold</span><span>Status</span><span>Left</span></div><div className="sp-tr"><span className="">Early bird</span><span className="">800</span><span className="pend">Sold out</span><span className="">0</span></div><div className="sp-tr"><span className="">General</span><span className="">902</span><span className="ok">Live</span><span className="">598</span></div><div className="sp-tr"><span className="">VIP · Stage side</span><span className="">140</span><span className="ok">Live</span><span className="">12</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Organiser dashboard</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Live sales over WebSocket with no refresh, door-flow against expected attendance, and a fee breakdown with the payout date up front.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="4">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">tickety.africa</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Tickety</div><div className="sp-links"><span>Discover</span><span>Create</span><span>Organisers</span><span>Help</span></div><div className="sp-cta ">Gate A</div></div><div className="sp-split"><div className="sp-side"><b>Scanner</b><span className="on">Scan</span><span className="">Guest list</span><span className="">Queued · 4</span><span className="">Gate stats</span><span className="">Sign out</span></div><div className="sp-panel"><div className="sp-h2">Gate A · 1,204 scanned</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Scan success</div><div className="n">98.4%</div></div><div className="sp-stat"><div className="l">Queued offline</div><div className="n">4</div></div><div className="sp-stat"><div className="l">Rate</div><div className="n">62 / min</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none" /><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4" /></svg></div><div className="sp-table"><div className="sp-tr h"><span>Time</span><span>Ticket</span><span>Status</span><span>Gate</span></div><div className="sp-tr"><span className="">13:42:08</span><span className="">#TK-8841 · Early bird</span><span className="ok">Confirmed</span><span className="">A</span></div><div className="sp-tr"><span className="">13:42:02</span><span className="">#TK-8839 · General</span><span className="ok">Confirmed</span><span className="">A</span></div><div className="sp-tr"><span className="">13:41:55</span><span className="">#TK-8836 · VIP</span><span className="pend">Pending sync</span><span className="">A</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Scanner app</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">A progressive web app for door staff. Loads from a URL with no app store, holds a 24-hour offline guest list, and queues scans until back online.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="5">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">tickety.africa</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Tickety</div><div className="sp-links"><span>Discover</span><span>Create</span><span>Organisers</span><span>Help</span></div><div className="sp-cta ">Blankets &amp; Wine</div></div><div className="sp-h2">Create an event · Concert template</div><div className="sp-steps"><i className="on"></i><i className="on"></i><i className=""></i><i className=""></i></div><div className="sp-split"><div className="sp-form"><div className="sp-input">Event name · Blankets &amp; Wine September</div><div className="sp-input">Venue · Lunar Park, Nairobi</div><div className="sp-input">Date · Sat 14 Sep · Gates 12:00</div><div className="sp-input">Ticket types · 3 configured</div><div className="sp-input">Cover image · uploaded</div><div className="sp-cta dark" style={{ textAlign: 'center' }}>Publish event</div></div><div className="sp-panel"><div className="sp-tr"><span>Template</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Concert</span></div><div className="sp-tr"><span>Setup time</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>4 minutes</span></div><div className="sp-tr"><span>Platform fee</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>6% + KSh 30</span></div><div className="sp-tr"><span>Payout</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>3 days after event</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Event creation</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Templates by event type with sensible defaults, a live preview of the public page, and publish-then-refine so edits stay forgiving.</span></div>
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
                <div className="ds-block ds-logo"><div className="logo-large">T</div><div className="ds-meta">Primary mark</div></div>
                <div className="ds-block ds-logo dark"><div className="logo-large inv">T</div><div className="ds-meta dim">Reverse</div></div>
                <div className="ds-block ds-logo"><div className="logo-mono">T</div><div className="ds-meta">Mono</div></div>
                <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">T</span>TICKETY</div><div className="ds-meta">Wordmark</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#1F4D3F' }}></div><div className="cs-meta"><div className="cs-name">Tickety Green</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Spotlight</div><div className="cs-hex">#E5B33A</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#F8F0E1' }}></div><div className="cs-meta"><div className="cs-name">Cream</div><div className="cs-hex">#F8F0E1</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#161616' }}></div><div className="cs-meta"><div className="cs-name">Ink</div><div className="cs-hex">#161616</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E6E3DC' }}></div><div className="cs-meta"><div className="cs-name">Mist</div><div className="cs-hex">#E6E3DC</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E16A86' }}></div><div className="cs-meta"><div className="cs-name">Hot Pink</div><div className="cs-hex">#E16A86</div></div></div>
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
                <div className="poster p1"><div className="p-eyebrow">TICKETY</div><div className="p-h">Event ticketing platform</div><div className="p-foot">tickety.com</div></div>
                <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">78s<br />Mobile Purchase</div><div className="p-foot">2025</div></div>
                <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">T</div><div className="p-foot">From any device.</div></div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card"><div className="oc-n">78s</div><div className="oc-l">Mobile purchase</div><div className="oc-d">Avg time-to-buy</div></div>
            <div className="oc-card"><div className="oc-n">98.4%</div><div className="oc-l">Scan success</div><div className="oc-d">First-try at door</div></div>
            <div className="oc-card"><div className="oc-n">+68%</div><div className="oc-l">Organiser repeat</div><div className="oc-d">60-day window</div></div>
            <div className="oc-card"><div className="oc-n">11 wks</div><div className="oc-l">Total build</div><div className="oc-d">On-time launch</div></div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>Ticketing is two products — attendee + organiser. The organiser side gets the network effect, so it gets the design priority.</li>
            <li>Sub-90-second mobile purchase wasn't a stretch goal; it was the price of admission.</li>
            <li>Offline check-in saved three of our launch events from disaster — wifi at venues is a fairy tale.</li>
            <li>Apple Pay / Google Pay first removed more friction than any other single change.</li>
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
