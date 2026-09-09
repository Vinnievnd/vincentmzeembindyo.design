"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Lead Product Designer","body":"<p>Owned the discovery, booking, and post-stay flows. Conducted 8 user interviews with leisure travellers + 4 with corporate buyers. Shipped Hi-Fi prototypes and a booking-funnel design system.</p>"},"m-industry":{"eyebrow":"Industry","title":"Hospitality · Travel","body":"<p>Travel discovery &amp; booking. Direct competitors: Booking.com, Expedia. Differentiator: regional inventory + transparent local pricing.</p>"},"m-skills":{"eyebrow":"Skills","title":"Search UX · Booking flow","body":"<p>Search UX · Filter design · Booking funnel optimisation · Trust signals · Mobile-first responsive · A/B testing.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"10 weeks","body":"<p>Q2 2024 · 10 weeks. Discovery 2 · Design 5 · Prototype + test 2 · Handoff 1.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>Advenio entered a crowded space against global incumbents. The bet was that a regional-focused experience — with cleaner UX, transparent pricing, and a corporate-buyer mode — could win the East African market segment.</p><ul><li>Existing regional booking sites felt like spreadsheets — no visual hierarchy, no trust signals.</li><li>Search filters were buried in modals; comparing two hotels meant opening two tabs.</li><li>Booking funnel was 7 steps with no progress indicator — abandonment was high mid-funnel.</li><li>Corporate buyers had no way to track approvals, budgets, or stay history.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>Hospitality conversion is a trust game. Every screen has to answer: \"is this real, is it priced fairly, can I cancel if plans change?\" Get those three right and the rest is layout.</p><ul><li>Discovery UX is the entire moat in travel — once a user finds two acceptable options, price + reviews close the deal.</li><li>Corporate buyers represent 30% of regional hotel revenue and zero global-platform focus.</li><li>Trust signals (verified reviews, transparent pricing) directly correlate with conversion in our funnel data.</li><li>Mobile-first is non-negotiable — 70% of regional traffic is on mobile.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>A/B test launched at week 8 against a control of the original UX. Measured conversion delta across leisure and corporate segments.</p><ul><li>Conversion rate (search → booking), measured against a fixed funnel baseline.</li><li>Time to first booking: target &lt; 90 seconds for return users.</li><li>Filter-use rate: target 65%+ of search sessions use at least one filter.</li><li>Corporate-mode adoption: target 20% of business-traveller sessions opt-in within first 2 weeks.</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"Leisure travellers","body":"<p>Regional + diaspora visitors. Price-sensitive, review-driven, mobile-first.</p>"},"m-u-02":{"eyebrow":"Segment · Growth","title":"Corporate buyers","body":"<p>Travel managers booking on behalf of teams. Need approvals, budgets, stay history.</p>"},"m-u-03":{"eyebrow":"Segment · Supply","title":"Hoteliers","body":"<p>Property managers and independent hotels. Need easy listing + competitive rate-plan tools.</p>"},"m-u-04":{"eyebrow":"Segment · Channel","title":"Travel agents","body":"<p>Traditional agents using Advenio as their inventory tool. Need bulk booking + commission tracking.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Search · Map view","body":"<p>One of the eight key surfaces from the shipped product. Designed to discovery-first search.</p>"},"m-s-1":{"eyebrow":"Screen","title":"Hotel · Detail","body":"<p>One of the eight key surfaces from the shipped product. Designed to booking funnel 7 → 4 steps.</p>"},"m-s-2":{"eyebrow":"Screen","title":"Compare drawer","body":"<p>One of the eight key surfaces from the shipped product. Designed to trust signals at every step.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Booking · Step 1","body":"<p>One of the eight key surfaces from the shipped product. Designed to corporate buyer mode.</p>"},"m-s-4":{"eyebrow":"Screen","title":"Corporate dashboard","body":"<p>One of the eight key surfaces from the shipped product. Designed to discovery-first search.</p>"},"m-s-5":{"eyebrow":"Screen","title":"Hotelier admin","body":"<p>One of the eight key surfaces from the shipped product. Designed to booking funnel 7 → 4 steps.</p>"}};

const DEVICE_COPY = {"web":"<strong>Desktop Web</strong> — primary research surface. Side-by-side comparison view, multi-tab tolerant, keyboard shortcuts.","mobile":"<strong>Mobile Web</strong> — 70% of regional traffic. Optimised for one-thumb scroll, mobile-first filter sheet.","app":"<strong>Native App</strong> — return users + corporate buyers. Persisted preferences, biometric login, in-app messaging.","admin":"<strong>Hotelier Admin</strong> — inventory management, rate plans, photo uploads. Mobile-responsive for property managers on the go."};

export default function AdvenioPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2024</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">Advenio Web App</h1>
          <p className="proj-tagline">A discovery-first hotel booking platform — search, filter, compare, and book stays across East Africa. Designed for both leisure travellers and corporate procurement.</p>
          <div className="proj-tags"><span className="pill">UI/UX</span><span className="pill">Hospitality</span><span className="pill">Booking</span><span className="pill">Web App</span><span className="pill">Search UX</span><span className="pill">Prototyping</span><span className="pill">Conversion</span></div>
        </header>

        <section className="hero-mockup">
          <div className="hero-mockup-grid web-grid">
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">advenio.com</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7a7a7a', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: '#1f4d3f' }}>Advenio</div>
                <div style={{ display: 'flex', gap: '10px' }}><span>Home</span><span>Browse</span><span style={{ background: '#e5b33a', color: '#163a30', padding: '2px 8px', borderRadius: '99px', fontWeight: '600' }}>Sign up</span></div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '20px', color: '#1f4d3f', letterSpacing: '-.02em', lineHeight: '1.05' }}>A discovery-first hotel booking platform — search, filter, compare, and book stays across East Africa.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '10px' }}>
                <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.5' }}></div>
                <div style={{ background: '#f6f1e3', borderRadius: '6px', aspectRatio: '1.5' }}></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">advenio.com/discover</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '8px' }}>Browse Advenio</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}><div style={{ background: '#e5b33a', color: '#163a30', padding: '3px 10px', borderRadius: '99px', fontSize: '10px', fontWeight: '600' }}>All</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Filter</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Sort</div></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">advenio.com/detail</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '18px', color: '#1f4d3f', letterSpacing: '-.02em' }}>Detail view</div>
              <div style={{ background: '#f3f1ec', aspectRatio: '2', borderRadius: '8px', margin: '8px 0' }}></div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', fontSize: '10px' }}><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span></div>
              <div style={{ background: '#e5b33a', color: '#163a30', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', alignSelf: 'flex-start', display: 'inline-block' }}>+34%</div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">advenio.com/checkout</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
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
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Advenio Web App — coming soon</a>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Advenio Hotelier Admin — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">Lead Product Designer</div>
              <div className="info-d">UI/UX · Hospitality · Booking · Web App</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">Hospitality · Travel</div>
              <div className="info-d">Hotel listing &amp; booking platform</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Search UX · Booking flow</div>
              <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">10 weeks</div>
              <div className="info-d">2024 · Time to launch.</div>
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
              <ul className="three-list"><li>Existing regional booking sites felt like spreadsheets — no visual hierarchy, no trust signals.</li><li>Search filters were buried in modals; comparing two hotels meant opening two tabs.</li><li>Booking funnel was 7 steps with no progress indicator — abandonment was high mid-funnel.</li><li>Corporate buyers had no way to track approvals, budgets, or stay history.</li></ul>
              <span className="three-cta">Read full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>Discovery UX is the entire moat in travel — once a user finds two acceptable options, price + reviews close the deal.</li><li>Corporate buyers represent 30% of regional hotel revenue and zero global-platform focus.</li><li>Trust signals (verified reviews, transparent pricing) directly correlate with conversion in our funnel data.</li><li>Mobile-first is non-negotiable — 70% of regional traffic is on mobile.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Conversion rate (search → booking), measured against a fixed funnel baseline.</li><li>Time to first booking: target &lt; 90 seconds for return users.</li><li>Filter-use rate: target 65%+ of search sessions use at least one filter.</li><li>Corporate-mode adoption: target 20% of business-traveller sessions opt-in within first 2 weeks.</li></ul>
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
                  <DeviceChip device="web" className="dchip"><div className="dchip-ico">🖥</div><div className="dchip-l">Desktop Web</div></DeviceChip>
                  <DeviceChip device="mobile" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Mobile Web</div></DeviceChip>
                  <DeviceChip device="app" className="dchip"><div className="dchip-ico">📲</div><div className="dchip-l">Native App</div></DeviceChip>
                  <DeviceChip device="admin" className="dchip"><div className="dchip-ico">🛠</div><div className="dchip-l">Hotelier Admin</div></DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
                  <span className="user-num">01</span><span className="user-name">Leisure travellers</span><span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
                  <span className="user-num">02</span><span className="user-name">Corporate buyers</span><span className="user-tag">Growth</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
                  <span className="user-num">03</span><span className="user-name">Hoteliers</span><span className="user-tag">Supply</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-04" as="button" className="user-row clickable">
                  <span className="user-num">04</span><span className="user-name">Travel agents</span><span className="user-tag">Channel</span>
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
                <div className="istat lift"><div className="n">+34%</div><div className="l">Search → Booking</div></div>
                <div className="istat lift"><div className="n">+22%</div><div className="l">Filter Usage</div></div>
                <div className="istat lift neg"><div className="n">-31%</div><div className="l">Funnel Steps</div></div>
                <div className="istat lift"><div className="n">+18%</div><div className="l">Repeat Bookings</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">7→4</div><div className="l">Booking Steps</div></div>
                <div className="istat lift"><div className="n">90s</div><div className="l">Time to Book</div></div>
                <div className="istat lift"><div className="n">70%</div><div className="l">Mobile Traffic</div></div>
                <div className="istat lift"><div className="n">12</div><div className="l">User Interviews</div></div>
              </div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary>
                <span className="pillar-num">01</span>
                <span className="pillar-h">Discovery-first search</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Filters in-line</div><p>Filter sidebar always visible on desktop; sticky filter-sheet on mobile.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Map + list view</div><p>Toggle without losing scroll position. Synced selection across views.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Compare drawer</div><p>Star up to 4 hotels and compare side-by-side in a slide-up drawer.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Booking funnel 7 → 4 steps</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Single-page detail + book</div><p>Date, room, guests on one screen with persistent price.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Guest details once</div><p>Saved to profile, autofilled on every subsequent booking.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Cancellable preview</div><p>Cancel terms shown before payment, not after.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">Trust signals at every step</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Verified reviews</div><p>Only post-stay reviews from verified bookers count toward the score.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Photo-first cards</div><p>No stock photography. Property-provided photos with last-updated date.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Transparent pricing</div><p>All taxes &amp; fees in headline price. No checkout surprises.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">04</span>
                <span className="pillar-h">Corporate buyer mode</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Travel policies</div><p>Per-team budgets, approval workflow, audit trail.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Stay history</div><p>Per-traveller and per-property history with cost-per-night trends.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Invoicing</div><p>Consolidated monthly invoices, configurable cost centres.</p></div>
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
              { id: '0', label: 'Search · Map view' },
              { id: '1', label: 'Hotel · Detail' },
              { id: '2', label: 'Compare drawer' },
              { id: '3', label: 'Booking · Step 1' },
              { id: '4', label: 'Corporate dashboard' },
              { id: '5', label: 'Hotelier admin' },
            ]}
          >
            <div className="scr-stage">
              <TabGroup.Pane id="0">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">advenio.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Advenio</div><div className="sp-links"><span>Stays</span><span>Corporate</span><span>Deals</span><span>Help</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-h2">Stays in Nairobi · 248 results</div><div className="sp-chips"><span className="sp-chip on">Map + list</span><span className="sp-chip">Price</span><span className="sp-chip">Rating 4+</span><span className="sp-chip">Free cancellation</span><span className="sp-chip">Breakfast</span></div><div className="sp-split"><div className="sp-side"><b>Refine</b><span className="on">Price per night</span><span className="">Property type</span><span className="">Guest rating</span><span className="">Amenities</span><span className="">Neighbourhood</span><span className="">Cancellation</span></div><div className="sp-grid c2"><div className="sp-card"><div className="im g"></div><b>Sankara Nairobi</b><span>Westlands · 4.7 ★ · KSh 18,400</span></div><div className="sp-card"><div className="im w"></div><b>Trademark Hotel</b><span>Village Market · 4.6 ★</span></div><div className="sp-card"><div className="im "></div><b>Emara Ole-Sereni</b><span>Nairobi NP · 4.5 ★</span></div><div className="sp-card"><div className="im g"></div><b>Hemingways</b><span>Karen · 4.9 ★ · KSh 42,000</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Search · Map view</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Filters sit in-line beside a synced map and list, so a traveller never loses scroll position when switching views.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="1">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">advenio.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Advenio</div><div className="sp-links"><span>Stays</span><span>Corporate</span><span>Deals</span><span>Help</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-hero"><div><div className="sp-eyebrow">WESTLANDS · NAIROBI</div><div className="sp-h1">Sankara Nairobi</div><div className="sp-p">A five-star property on Woodvale Grove with a rooftop pool, two restaurants, and 24-hour business facilities. All taxes and fees included in the price shown.</div><div className="sp-chips"><span className="sp-chip on">4.7 ★ · 1,204 verified reviews</span><span className="sp-chip">Free cancellation</span><span className="sp-chip">Breakfast included</span><span className="sp-chip">Airport transfer</span></div><div className="sp-btns"><span className="sp-cta">Book · KSh 18,400 total</span><span className="sp-cta ghost">Add to compare</span></div></div><div className="sp-art "></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im "></div><b>Rooftop pool</b><span>Open 06:00 – 22:00</span></div><div className="sp-card"><div className="im w"></div><b>Sarabi Lounge</b><span>Rooftop bar · à la carte</span></div><div className="sp-card"><div className="im g"></div><b>Business centre</b><span>24 hr · 4 meeting rooms</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Hotel · Detail</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Photo-first hero with verified-review score, transparent all-in pricing, and cancellation terms surfaced before the booking CTA.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="2">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">advenio.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Advenio</div><div className="sp-links"><span>Stays</span><span>Corporate</span><span>Deals</span><span>Help</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-h2">Comparing 4 properties</div><div className="sp-chips"><span className="sp-chip on">Total price</span><span className="sp-chip">Rating</span><span className="sp-chip">Distance to CBD</span><span className="sp-chip">Cancellation</span><span className="sp-chip">Breakfast</span></div><div className="sp-split"><div className="sp-side"><b>Compare on</b><span className="on">Total price</span><span className="">Guest rating</span><span className="">Distance</span><span className="">Cancellation</span><span className="">Breakfast</span><span className="">Wi-Fi speed</span></div><div className="sp-grid c2"><div className="sp-card"><div className="im g"></div><b>Sankara · KSh 18,400</b><span>4.7 ★ · Free cancellation</span></div><div className="sp-card"><div className="im "></div><b>Trademark · KSh 16,900</b><span>4.6 ★ · Free cancellation</span></div><div className="sp-card"><div className="im w"></div><b>Emara · KSh 14,200</b><span>4.5 ★ · Non-refundable</span></div><div className="sp-card"><div className="im g"></div><b>Hemingways · KSh 42,000</b><span>4.9 ★ · Free cancellation</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Compare drawer</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Star up to four properties and compare them side by side in a slide-up drawer without leaving the results page.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="3">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">advenio.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Advenio</div><div className="sp-links"><span>Stays</span><span>Corporate</span><span>Deals</span><span>Help</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-h2">Book Sankara Nairobi</div><div className="sp-steps"><i className="on"></i><i className=""></i><i className=""></i><i className=""></i></div><div className="sp-split"><div className="sp-form"><div className="sp-input">Lead guest · Amina Kariuki</div><div className="sp-input">Email · amina@···.com</div><div className="sp-input">Phone · +254 712 ··· 982</div><div className="sp-input">Check-in 12 Sep → Check-out 15 Sep</div><div className="sp-input">2 guests · 1 room · King</div><div className="sp-cta dark" style={{ textAlign: 'center' }}>Continue to payment</div></div><div className="sp-panel"><div className="sp-tr"><span>3 nights × KSh 5,800</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 17,400</span></div><div className="sp-tr"><span>Taxes &amp; fees</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 1,000</span></div><div className="sp-tr"><span>Total, all-in</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>KSh 18,400</span></div><div className="sp-tr"><span>Cancellation</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Free until 10 Sep</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Booking · Step 1</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Four-step funnel down from seven. Guest details autofill from profile, and the price panel stays visible throughout.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="4">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">advenio.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Advenio</div><div className="sp-links"><span>Stays</span><span>Corporate</span><span>Deals</span><span>Help</span></div><div className="sp-cta ">Amina K.</div></div><div className="sp-split"><div className="sp-side"><b>Corporate</b><span className="on">Overview</span><span className="">Approvals</span><span className="">Travellers</span><span className="">Policies</span><span className="">Invoices</span></div><div className="sp-panel"><div className="sp-h2">Q3 travel · Safaricom Ltd</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Trips booked</div><div className="n">182</div><div className="d">+12%</div></div><div className="sp-stat"><div className="l">Spend vs budget</div><div className="n">74%</div></div><div className="sp-stat"><div className="l">Avg night</div><div className="n">KSh 12,480</div><div className="d">-4%</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none"/><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4"/></svg></div><div className="sp-table"><div className="sp-tr h"><span>Traveller</span><span>Property</span><span>Status</span><span>Nights</span></div><div className="sp-tr"><span className="">J. Wanjiru</span><span className="">Sankara Nairobi</span><span className="ok">Approved</span><span className="">3</span></div><div className="sp-tr"><span className="">P. Maina</span><span className="">Trademark Hotel</span><span className="pend">Pending</span><span className="">2</span></div><div className="sp-tr"><span className="">R. Mwende</span><span className="">Emara Ole-Sereni</span><span className="ok">Approved</span><span className="">4</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Corporate dashboard</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Travel-manager view: per-team budgets, an approval queue, and cost-per-night trends across the whole booking history.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="5">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">advenio.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Advenio</div><div className="sp-links"><span>Stays</span><span>Corporate</span><span>Deals</span><span>Help</span></div><div className="sp-cta ">Sankara</div></div><div className="sp-split"><div className="sp-side"><b>Property</b><span className="on">Overview</span><span className="">Rates &amp; inventory</span><span className="">Photos</span><span className="">Reviews</span><span className="">Payouts</span></div><div className="sp-panel"><div className="sp-h2">Sankara Nairobi · September</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Occupancy</div><div className="n">86%</div><div className="d">+9%</div></div><div className="sp-stat"><div className="l">ADR</div><div className="n">KSh 18,400</div><div className="d">+6%</div></div><div className="sp-stat"><div className="l">Review score</div><div className="n">4.7</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none"/><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4"/></svg></div><div className="sp-table"><div className="sp-tr h"><span>Room type</span><span>Rate plan</span><span>Status</span><span>Left</span></div><div className="sp-tr"><span className="">Deluxe King</span><span className="">Flexible</span><span className="ok">Live</span><span className="">12</span></div><div className="sp-tr"><span className="">Executive Suite</span><span className="">Non-refundable</span><span className="ok">Live</span><span className="">4</span></div><div className="sp-tr"><span className="">Twin Standard</span><span className="">Corporate</span><span className="pend">Paused</span><span className="">9</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Hotelier admin</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Property-side console for rate plans, inventory, and photo management, responsive down to a phone for managers on the floor.</span></div>
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
                <div className="ds-block ds-logo"><div className="logo-large">A</div><div className="ds-meta">Primary mark</div></div>
                <div className="ds-block ds-logo dark"><div className="logo-large inv">A</div><div className="ds-meta dim">Reverse</div></div>
                <div className="ds-block ds-logo"><div className="logo-mono">A</div><div className="ds-meta">Mono</div></div>
                <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">A</span>ADVENIO</div><div className="ds-meta">Wordmark</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#1F4D3F' }}></div><div className="cs-meta"><div className="cs-name">Advenio Green</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Sunset</div><div className="cs-hex">#E5B33A</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#F8F0E1' }}></div><div className="cs-meta"><div className="cs-name">Cream</div><div className="cs-hex">#F8F0E1</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#161616' }}></div><div className="cs-meta"><div className="cs-name">Ink</div><div className="cs-hex">#161616</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E6E3DC' }}></div><div className="cs-meta"><div className="cs-name">Mist</div><div className="cs-hex">#E6E3DC</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E16A4A' }}></div><div className="cs-meta"><div className="cs-name">Coral</div><div className="cs-hex">#E16A4A</div></div></div>
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
                <div className="poster p1"><div className="p-eyebrow">ADVENIO</div><div className="p-h">Hotel listing &amp; booking platform</div><div className="p-foot">advenio.com</div></div>
                <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">+34%<br />Search → Booking</div><div className="p-foot">2024</div></div>
                <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">A</div><div className="p-foot">From any device.</div></div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card"><div className="oc-n">+34%</div><div className="oc-l">Conversion lift</div><div className="oc-d">A/B vs control</div></div>
            <div className="oc-card"><div className="oc-n">83</div><div className="oc-l">SUS · Booking flow</div><div className="oc-d">"Excellent" band</div></div>
            <div className="oc-card"><div className="oc-n">4 wks</div><div className="oc-l">Time to launch</div><div className="oc-d">From handoff</div></div>
            <div className="oc-card"><div className="oc-n">12</div><div className="oc-l">User interviews</div><div className="oc-d">8 leisure · 4 corp</div></div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>Travel UX is trust UX — every "verify, every "transparent", every "cancel anytime" earns 1–2% of conversion.</li>
            <li>Corporate mode shipped as a hidden bet — it now drives 28% of platform revenue.</li>
            <li>Filter usage was the leading indicator of conversion: optimise for filter discoverability and conversion follows.</li>
            <li>Photo-first cards beat copy-first cards in every cycle of testing — even when copy was sharper.</li>
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
