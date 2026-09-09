"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import ProcessRail from "@/components/ProcessRail";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Product Designer","body":"<p>Owned UX end-to-end across two surfaces (Farmer app + Buyer portal). Conducted 16 field interviews in 3 counties; designed for low-literacy users; shipped a light + dark theme.</p>"},"m-industry":{"eyebrow":"Industry","title":"AgriTech · Procurement","body":"<p>Direct-to-institution procurement of farm produce. Buyers: schools, hospitals, food processors. Adjacent: crop insurance, soil testing services, agro-input retailers.</p>"},"m-skills":{"eyebrow":"Skills","title":"Field Research → Ship","body":"<p>Field research · Multilingual UI · SMS fallback design · Icon-first navigation · Light + dark mode · Buyer portal IA.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"16 weeks","body":"<p>Jan – Apr 2024. 16 weeks. Field research 4 wks · Design 6 wks · Prototype + test 4 wks · Handoff 2 wks.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>Smallholder farmers relied on brokers to access institutional buyers. Low digital literacy and patchy connectivity meant most digital products simply didn't work in the field. Buyers needed structured, data-rich procurement; farmers needed simple, trustworthy tools. We had to design for both — and neither could compromise.</p><ul><li>Farmers had no tools to track yield cycles, soil health, or irrigation — decisions were reactive, not informed.</li><li>No crop insurance access or awareness — farmers financially exposed to weather and pest events.</li><li>Stock &amp; sales management was manual — no visibility into inventory, pricing trends, or buyer demand.</li><li>Buyers lacked supplier discovery — procurement was relational, with no quality or delivery history visibility.</li><li>Operations were fragmented — delivery, KYC, and disputes managed across disconnected surfaces.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>AgriFlow's thesis is that structured data — once captured — collapses the cost of every downstream service: insurance, lending, procurement, advisory. The hard part is capturing it from farmers who don't see it as their job.</p><ul><li>Broker-dependent procurement leaks 15–25% of farm-gate value before it reaches the farmer.</li><li>Yield prediction depends on continuous data — soil tests, irrigation logs, weather — none of which farmers were capturing.</li><li>Crop insurance uptake hinges on awareness + simple enrolment. Awareness was &lt;10% in surveyed counties.</li><li>Institutional buyers will pay a premium for verified quality &amp; delivery history — but the data has to exist first.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>Field validation can't be a smoke test — the network is the test. We ran sessions on 3G, on 2G, and offline (with SMS fallback) to confirm critical flows held up.</p><ul><li>Field validation with 16 farmers across Kiambu, Nakuru, and Machakos — 3 counties, mixed altitudes.</li><li>Low-literacy task tests: can a participant complete a crop listing in &lt;3 minutes with no help?</li><li>Language toggle test: does the Swahili UI render correctly across all primary screens?</li><li>Buyer-side: can a procurement officer build a 50-supplier filtered shortlist in &lt;5 minutes?</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"Smallholder farmers","body":"<p>Mixed crops, 0.5–5 acres. Mixed literacy. Low digital savviness. Need simplicity and trust.</p>"},"m-u-02":{"eyebrow":"Segment · Growth","title":"Commercial farmers","body":"<p>Larger holdings, savvier on tech, often already using buyer-side platforms. Want data &amp; insights.</p>"},"m-u-03":{"eyebrow":"Segment · Demand","title":"Institutional buyers","body":"<p>Schools, hospitals, processors. Need supplier discovery + delivery history + quality assurance.</p>"},"m-u-04":{"eyebrow":"Segment · Ecosystem","title":"Insurance partners","body":"<p>Crop insurance providers. Need farm-data to underwrite efficiently; AgriFlow is the data layer.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Home · Dashboard","body":"<p>One of the eight key surfaces from the shipped product. Designed to icon-first navigation for low literacy.</p>"},"m-s-1":{"eyebrow":"Screen","title":"My Store","body":"<p>One of the eight key surfaces from the shipped product. Designed to 3-step crop listing flow.</p>"},"m-s-2":{"eyebrow":"Screen","title":"Product Management","body":"<p>One of the eight key surfaces from the shipped product. Designed to sms fallback for critical actions.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Soil Testing","body":"<p>One of the eight key surfaces from the shipped product. Designed to multilingual ui (english + swahili).</p>"},"m-s-4":{"eyebrow":"Screen","title":"Crop Insurance","body":"<p>One of the eight key surfaces from the shipped product. Designed to buyer portal · supplier discovery.</p>"},"m-s-5":{"eyebrow":"Screen","title":"Checkout","body":"<p>One of the eight key surfaces from the shipped product. Designed to icon-first navigation for low literacy.</p>"},"m-s-6":{"eyebrow":"Screen","title":"Order Tracking","body":"<p>One of the eight key surfaces from the shipped product. Designed to 3-step crop listing flow.</p>"},"m-s-7":{"eyebrow":"Screen","title":"Light + Dark","body":"<p>One of the eight key surfaces from the shipped product. Designed to sms fallback for critical actions.</p>"}};
const DEVICE_COPY = {"app":"<strong>Farmer App</strong> — primary tool. Optimised for low-end Android, English + Swahili, icon-first nav. Offline-first for crop listing.","sms":"<strong>SMS Fallback</strong> — confirmation messages for critical actions. Works on any phone, no data required. Designed for the moment when the app fails.","buyer":"<strong>Buyer Portal</strong> — web-based procurement dashboard for institutional buyers. Filterable supplier discovery, bulk orders, quality dispute workflow.","agent":"<strong>Agent Tablet</strong> — field officers use a tablet UI for assisted onboarding, KYC, and soil-test scheduling."};

export default function AgriFlowPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">
  <header className="proj-header">
    <div className="case-meta">
      <span className="case-pill">Case Study · 2024</span>
      <span className="case-pill subtle">7 min read</span>
    </div>
    <h1 className="h-block-title">AgriFlow App</h1>
    <p className="proj-tagline">A farm-to-buyer platform connecting smallholder farmers to institutional procurement — designed for low literacy, patchy connectivity, and bilingual UX (English + Swahili).</p>
    <div className="proj-tags"><span className="pill">UI/UX</span><span className="pill">AgriTech</span><span className="pill">Field Research</span><span className="pill">Localisation</span><span className="pill">Low-Literacy UX</span><span className="pill">SMS Fallback</span><span className="pill">Light + Dark Mode</span></div>
  </header>
  <section className="hero-mockup">
      <div className="hero-mockup-grid">
        <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div style={{ padding: '24px 14px 14px', display: 'flex', flexDirection: 'column', height: '100%', background: 'linear-gradient(180deg,#fff 0%,#ffd76a 50%,#fff 100%)' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px' }}>A</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '13px', color: '#1f4d3f', borderLeft: '2px solid #1f4d3f', paddingLeft: '6px', marginTop: '10px' }}>AgriFlow<br />Account</div>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ background: '#2bb74a', color: '#fff', borderRadius: '999px', textAlign: 'center', padding: '7px', fontSize: '9px', fontWeight: '600' }}>Get Started</div>
            <div style={{ border: '1px solid #1f4d3f', color: '#1f4d3f', borderRadius: '999px', textAlign: 'center', padding: '7px', fontSize: '9px', fontWeight: '600' }}>Login</div>
          </div>
        </div></div></div></div>
        <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div style={{ padding: '22px 10px 10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div><div style={{ fontSize: '8px', color: '#7a7a7a' }}>Welcome</div><div style={{ fontWeight: '700', fontSize: '10px' }}>AgriFlow App</div></div>
            <div style={{ width: '18px', height: '18px', borderRadius: '5px', background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px' }}>A</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg,#1c3a31,#2e6b58)', color: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '8px', fontSize: '8.5px' }}>
            <div style={{ opacity: '.9' }}>AgriTech marketplace · field-tested</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '13px', letterSpacing: '-.02em' }}>+38%</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '4px', marginBottom: '8px' }}>
            <div style={{ background: 'linear-gradient(180deg,#2bb74a,#1f8a37)', color: '#fff', borderRadius: '6px', padding: '6px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ fontSize: '10px' }}>●</div>Action</div>
            <div style={{ background: 'linear-gradient(180deg,#2bb74a,#1f8a37)', color: '#fff', borderRadius: '6px', padding: '6px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ fontSize: '10px' }}>●</div>Action</div>
            <div style={{ background: 'linear-gradient(180deg,#2bb74a,#1f8a37)', color: '#fff', borderRadius: '6px', padding: '6px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ fontSize: '10px' }}>●</div>Action</div>
            <div style={{ background: 'linear-gradient(180deg,#2bb74a,#1f8a37)', color: '#fff', borderRadius: '6px', padding: '6px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ fontSize: '10px' }}>●</div>Action</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '4px' }}>
            <div style={{ background: '#e7f0ff', borderRadius: '8px', padding: '5px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#5b86d6', margin: '0 auto 3px' }}></div>Tile</div>
            <div style={{ background: '#e7fff3', borderRadius: '8px', padding: '5px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#27a55a', margin: '0 auto 3px' }}></div>Tile</div>
            <div style={{ background: '#ffe7ec', borderRadius: '8px', padding: '5px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#e16a86', margin: '0 auto 3px' }}></div>Tile</div>
            <div style={{ background: '#f1e7ff', borderRadius: '8px', padding: '5px 2px', textAlign: 'center', fontSize: '6.5px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#8a5bd6', margin: '0 auto 3px' }}></div>Tile</div>
          </div>
        </div></div></div></div>
        <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div style={{ padding: '24px 10px 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}><div style={{ fontSize: '12px' }}>‹</div><div style={{ fontWeight: '700', fontSize: '10px' }}>Detail</div></div>
          <div style={{ background: '#f6f1e3', borderRadius: '7px', padding: '8px', marginBottom: '6px', fontSize: '7.5px' }}><div style={{ color: '#7a7a7a', fontSize: '6.5px' }}>Top label</div><div style={{ fontWeight: '600' }}>Content row</div></div>
          <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', borderRadius: '9px', padding: '10px', marginBottom: '8px' }}><div style={{ fontSize: '7.5px', opacity: '.9' }}>Headline</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', letterSpacing: '-.02em' }}>+44%</div></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '8px' }}>
            <div style={{ background: '#f3f1ec', borderRadius: '5px', padding: '5px', fontSize: '7.5px' }}>Row item</div><div style={{ background: '#f3f1ec', borderRadius: '5px', padding: '5px', fontSize: '7.5px' }}>Row item</div><div style={{ background: '#f3f1ec', borderRadius: '5px', padding: '5px', fontSize: '7.5px' }}>Row item</div><div style={{ background: '#f3f1ec', borderRadius: '5px', padding: '5px', fontSize: '7.5px' }}>Row item</div>
          </div>
          <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '6px', fontSize: '8.5px', fontWeight: '700' }}>Continue</div>
        </div></div></div></div>
        <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div style={{ padding: '24px 10px 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}><div style={{ fontSize: '12px' }}>‹</div><div style={{ fontWeight: '700', fontSize: '10px' }}>Confirm</div></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '10px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1f4d3f' }}></span><span style={{ flex: '1', height: '2px', background: '#1f4d3f' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1f4d3f' }}></span><span style={{ flex: '1', height: '2px', background: '#1f4d3f' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e5b33a' }}></span>
          </div>
          <div style={{ color: '#7a7a7a', fontSize: '7.5px' }}>Total</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '17px', color: '#1f4d3f', letterSpacing: '-.02em', marginBottom: '10px' }}>-25%</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '8px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #eee' }}><span>Detail</span><span style={{ fontWeight: '700' }}>Yes</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #eee' }}><span>Detail</span><span style={{ fontWeight: '700' }}>Verified</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span>Detail</span><span style={{ fontWeight: '700' }}>Ready</span></div>
          </div>
          <div style={{ background: '#1f4d3f', color: '#fff', borderRadius: '999px', textAlign: 'center', padding: '6px', fontSize: '9px', fontWeight: '600' }}>Confirm</div>
        </div></div></div></div>
      </div>
      <PrototypeDock>
        <div className="proto-pop-h">Prototypes</div>
        <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>AgriFlow Application — coming soon</a>
        <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>AgriFlow Buyer Portal — coming soon</a>
      </PrototypeDock>
  </section>
  <section className="proj-section" id="info">
    <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
    <p className="ps-sub">Scope, role, and the runway we operated on.</p>
    <div className="info-grid">
      <ModalTrigger modalKey="m-role" className="info-card clickable">
        <div className="info-eyebrow">Role</div>
        <div className="info-h">Product Designer</div>
        <div className="info-d">UI/UX · AgriTech · Field Research · Localisation</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-industry" className="info-card clickable">
        <div className="info-eyebrow">Industry</div>
        <div className="info-h">AgriTech · Procurement</div>
        <div className="info-d">AgriTech marketplace · field-tested</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-skills" className="info-card clickable">
        <div className="info-eyebrow">Skills</div>
        <div className="info-h">Field Research → Ship</div>
        <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-timeline" className="info-card clickable">
        <div className="info-eyebrow">Timeline</div>
        <div className="info-h">16 weeks</div>
        <div className="info-d">2024 · Languages shipped.</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section" id="challenge">
    <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge & Hypothesis</h2></div>
    <p className="ps-sub">Three lenses: what's broken, why it matters, how we'll know it's fixed.</p>
    <div className="three-up">
      <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
        <div className="three-num">A</div>
        <h3 className="three-h">Current Problem</h3>
        <ul className="three-list"><li>Farmers had no tools to track yield cycles, soil health, or irrigation — decisions were reactive, not informed.</li><li>No crop insurance access or awareness — farmers financially exposed to weather and pest events.</li><li>Stock & sales management was manual — no visibility into inventory, pricing trends, or buyer demand.</li><li>Buyers lacked supplier discovery — procurement was relational, with no quality or delivery history visibility.</li><li>Operations were fragmented — delivery, KYC, and disputes managed across disconnected surfaces.</li></ul>
        <span className="three-cta">Read full diagnosis →</span>
      </ModalTrigger>
      <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
        <div className="three-num">B</div>
        <h3 className="three-h">Why It Matters</h3>
        <ul className="three-list"><li>Broker-dependent procurement leaks 15–25% of farm-gate value before it reaches the farmer.</li><li>Yield prediction depends on continuous data — soil tests, irrigation logs, weather — none of which farmers were capturing.</li><li>Crop insurance uptake hinges on awareness + simple enrolment. Awareness was &lt;10% in surveyed counties.</li><li>Institutional buyers will pay a premium for verified quality & delivery history — but the data has to exist first.</li></ul>
        <span className="three-cta">See the impact case →</span>
      </ModalTrigger>
      <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
        <div className="three-num">C</div>
        <h3 className="three-h">Validation Plan</h3>
        <ul className="three-list"><li>Field validation with 16 farmers across Kiambu, Nakuru, and Machakos — 3 counties, mixed altitudes.</li><li>Low-literacy task tests: can a participant complete a crop listing in &lt;3 minutes with no help?</li><li>Language toggle test: does the Swahili UI render correctly across all primary screens?</li><li>Buyer-side: can a procurement officer build a 50-supplier filtered shortlist in &lt;5 minutes?</li></ul>
        <span className="three-cta">See test plan →</span>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section" id="users-devices">
    <h3 className="ps-title">Users & Devices</h3>
    <p className="ps-sub">Channels we designed for and the segments they serve.</p>
    <div className="users-grid">
      <DeviceChipsProvider copy={DEVICE_COPY} defaultDevice="app">
        <div className="ud-block">
          <div className="ud-block-h">Devices & Channels</div>
          <div className="device-chips">
            <DeviceChip device="app" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Farmer App</div></DeviceChip>
            <DeviceChip device="sms" className="dchip"><div className="dchip-ico">✉</div><div className="dchip-l">SMS Fallback</div></DeviceChip>
            <DeviceChip device="buyer" className="dchip"><div className="dchip-ico">🏢</div><div className="dchip-l">Buyer Portal</div></DeviceChip>
            <DeviceChip device="agent" className="dchip"><div className="dchip-ico">🤝</div><div className="dchip-l">Agent Tablet</div></DeviceChip>
          </div>
          <DeviceReadout />
        </div>
      </DeviceChipsProvider>
      <div className="ud-block">
        <div className="ud-block-h">Target Users</div>
        <div className="user-list">
          <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
            <span className="user-num">01</span><span className="user-name">Smallholder farmers</span><span className="user-tag">Primary</span>
          </ModalTrigger>
          <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
            <span className="user-num">02</span><span className="user-name">Commercial farmers</span><span className="user-tag">Growth</span>
          </ModalTrigger>
          <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
            <span className="user-num">03</span><span className="user-name">Institutional buyers</span><span className="user-tag">Demand</span>
          </ModalTrigger>
          <ModalTrigger modalKey="m-u-04" as="button" className="user-row clickable">
            <span className="user-num">04</span><span className="user-name">Insurance partners</span><span className="user-tag">Ecosystem</span>
          </ModalTrigger>
        </div>
      </div>
    </div>
  </section>
  <section className="proj-section" id="results">
    <div className="kicker"><span className="kicker-num">03</span><h2 className="kicker-title">Results & Solution</h2></div>
    <p className="ps-sub">Headline outcomes — primary KPIs followed by the secondary lifts.</p>
    <div className="results-split">
      <div className="results-side">
        <div className="rs-h">Primary</div>
        <div className="impact-strip primary-strip">
          <div className="istat lift"><div className="n">+38%</div><div className="l">Listings/Farmer</div></div><div className="istat lift"><div className="n">+44%</div><div className="l">Repeat Buyers</div></div><div className="istat lift neg"><div className="n">-25%</div><div className="l">Broker Dependency</div></div><div className="istat lift"><div className="n">+62%</div><div className="l">SUS · Field Score</div></div>
        </div>
      </div>
      <div className="results-side">
        <div className="rs-h">Secondary</div>
        <div className="impact-strip secondary-strip">
          <div className="istat lift"><div className="n">16</div><div className="l">Field Interviews</div></div><div className="istat lift"><div className="n">3</div><div className="l">Counties Tested</div></div><div className="istat lift"><div className="n">2</div><div className="l">Languages (En · Sw)</div></div><div className="istat lift"><div className="n">Both</div><div className="l">Light + Dark Mode</div></div>
        </div>
      </div>
    </div>
    <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
    <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
    <div className="pillars">
      <details className="pillar" open>
        <summary>
          <span className="pillar-num">01</span>
          <span className="pillar-h">Icon-first navigation for low literacy</span>
          <span className="pillar-toggle">+</span>
        </summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Always icon + text</div><p>No icon stands alone. Field-tested against monolingual Swahili speakers.</p></div><div className="pillar-col"><div className="pillar-col-h">Consistent grammar</div><p>Verb-noun pairs everywhere. "Ongeza Mazao" (Add Crop) instead of "Crops &gt; New".</p></div><div className="pillar-col"><div className="pillar-col-h">Visual hierarchy</div><p>Three sizes only: action, supporting, meta. No surprise typography.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary>
          <span className="pillar-num">02</span>
          <span className="pillar-h">3-step crop listing flow</span>
          <span className="pillar-toggle">+</span>
        </summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Photo first</div><p>Camera-default capture. AI suggests crop type from image. Farmer just confirms.</p></div><div className="pillar-col"><div className="pillar-col-h">Quantity & price</div><p>Numeric pad with units pre-selected by crop type — kg for grains, bunches for greens.</p></div><div className="pillar-col"><div className="pillar-col-h">Delivery window</div><p>Three preset windows. SMS confirmation sent before listing goes live.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary>
          <span className="pillar-num">03</span>
          <span className="pillar-h">SMS fallback for critical actions</span>
          <span className="pillar-toggle">+</span>
        </summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Order accepted</div><p>SMS within 30 sec of buyer acceptance. Works on any phone, even offline.</p></div><div className="pillar-col"><div className="pillar-col-h">Payment received</div><p>M-Pesa integration sends both push + SMS. Belt and braces.</p></div><div className="pillar-col"><div className="pillar-col-h">Delivery confirmed</div><p>Agent confirms delivery → farmer + buyer get SMS receipt.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary>
          <span className="pillar-num">04</span>
          <span className="pillar-h">Multilingual UI (English + Swahili)</span>
          <span className="pillar-toggle">+</span>
        </summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Language toggle on first launch</div><p>Big, visual, top-of-app. Persisted per device — no surprise switches.</p></div><div className="pillar-col"><div className="pillar-col-h">Co-translated copy</div><p>Translations done with native-speaker farmers, not contractors. Tone-tested in field.</p></div><div className="pillar-col"><div className="pillar-col-h">Cultural icons</div><p>Local crops use local visual references — sukuma wiki, maharagwe — not stock icons.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary>
          <span className="pillar-num">05</span>
          <span className="pillar-h">Buyer portal · supplier discovery</span>
          <span className="pillar-toggle">+</span>
        </summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Filterable discovery</div><p>Crop, location, quality grade, delivery history. Result: 12 → 4 click discovery.</p></div><div className="pillar-col"><div className="pillar-col-h">Bulk order management</div><p>Single PO across multiple suppliers. Auto-allocates to nearest farmers.</p></div><div className="pillar-col"><div className="pillar-col-h">Quality dispute workflow</div><p>In-portal dispute → agent verifies on-farm → resolution &lt; 48 hrs.</p></div>
        </div>
      </details>
    </div>
  </section>
  <section className="proj-section" id="process">
    <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Process</h2></div>
    <p className="ps-sub">Six phases. Click a step to jump to its section.</p>
    <ProcessRail
      steps={[
        { line1: 'Research', line2: '& Analysis' },
        { line1: 'Define', line2: '& Ideate' },
        { line1: 'Wireframe', line2: '& Prototype' },
        { line1: 'Usability', line2: '& A/B' },
        { line1: 'Iteration', line2: '& Design System' },
        { line1: 'Dev', line2: '& Testing' },
      ]}
    />
  </section>
  <section className="proj-section" id="screens">
    <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Screens & Prototypes</h2></div>
    <p className="ps-sub">Eight key surfaces from the shipped product.</p>
    <div className="wireframe-grid eight-up">
      <ModalTrigger modalKey="m-s-0" className="wf-card clickable">
            <div className="wf-label">Home · Dashboard</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Home · Dashboard</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>+38%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-1" className="wf-card clickable">
            <div className="wf-label">My Store</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>My Store</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>+44%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-2" className="wf-card clickable">
            <div className="wf-label">Product Management</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Product Management</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>-25%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-3" className="wf-card clickable">
            <div className="wf-label">Soil Testing</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Soil Testing</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>+62%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-4" className="wf-card clickable">
            <div className="wf-label">Crop Insurance</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Crop Insurance</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>+38%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-5" className="wf-card clickable">
            <div className="wf-label">Checkout</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Checkout</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>+44%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-6" className="wf-card clickable">
            <div className="wf-label">Order Tracking</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Order Tracking</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>-25%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger><ModalTrigger modalKey="m-s-7" className="wf-card clickable">
            <div className="wf-label">Light + Dark</div>
            <div className="phone-frame-inline small">
              <div className="ph-notch"></div>
              <div className="ph-screen" style={{ padding: '22px 10px 10px' }}>
                <div style={{ background: 'linear-gradient(135deg,#1f4d3f,#2e6b58)', color: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '8px' }}><div style={{ opacity: '.8', fontSize: '7px' }}>Light + Dark</div><div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '11px', letterSpacing: '-.02em' }}>+62%</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4px', marginBottom: '6px' }}>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#fbe6a6', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                  <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.3' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '80%' }}></div>
                  <div style={{ background: '#f6f1e3', height: '8px', borderRadius: '2px', width: '60%' }}></div>
                </div>
                <div style={{ background: '#e5b33a', color: '#163a30', borderRadius: '999px', textAlign: 'center', padding: '5px', fontSize: '8px', fontWeight: '700', marginTop: '6px' }}>Action</div>
              </div>
            </div>
          </ModalTrigger>
    </div>
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
          <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">A</span>AGRIFLOW</div><div className="ds-meta">Wordmark</div></div>
        </div>
      </TabGroup.Pane>

      <TabGroup.Pane id="color">
        <ThemeToggle>
          {(isDark) => (
            <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
              <div className="cs"><div className="cs-swatch" style={{ background: '#3B7A3A' }}></div><div className="cs-meta"><div className="cs-name">Field Green</div><div className="cs-hex">#3B7A3A</div></div></div><div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Harvest Gold</div><div className="cs-hex">#E5B33A</div></div></div><div className="cs"><div className="cs-swatch" style={{ background: '#7A5230' }}></div><div className="cs-meta"><div className="cs-name">Soil Brown</div><div className="cs-hex">#7A5230</div></div></div><div className="cs"><div className="cs-swatch" style={{ background: '#F8F0E1' }}></div><div className="cs-meta"><div className="cs-name">Cream</div><div className="cs-hex">#F8F0E1</div></div></div><div className="cs"><div className="cs-swatch" style={{ background: '#161616' }}></div><div className="cs-meta"><div className="cs-name">Ink</div><div className="cs-hex">#161616</div></div></div><div className="cs"><div className="cs-swatch" style={{ background: '#0c1a14' }}></div><div className="cs-meta"><div className="cs-name">Night</div><div className="cs-hex">#0c1a14</div></div></div>
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
          <div className="ic"><div className="ic-svg">🏠</div><span>Icon 1</span></div><div className="ic"><div className="ic-svg">🔍</div><span>Icon 2</span></div><div className="ic"><div className="ic-svg">📑</div><span>Icon 3</span></div><div className="ic"><div className="ic-svg">💰</div><span>Icon 4</span></div><div className="ic"><div className="ic-svg">📞</div><span>Icon 5</span></div><div className="ic"><div className="ic-svg">🪙</div><span>Icon 6</span></div><div className="ic"><div className="ic-svg">🔒</div><span>Icon 7</span></div><div className="ic"><div className="ic-svg">👤</div><span>Icon 8</span></div>
        </div>
        <p className="ps-sub" style={{ marginTop: '14px' }}>Stroke 1.5 px · 24 px grid · always paired with text.</p>
      </TabGroup.Pane>

      <TabGroup.Pane id="comp">
        <div className="ds-grid">
          <div className="ds-block ds-comp"><div className="ds-meta">Buttons</div><button className="ds-btn">Primary</button><button className="ds-btn green">Secondary</button><button className="ds-btn ghost">Ghost</button></div>
          <div className="ds-block ds-comp"><div className="ds-meta">Inputs & chips</div><div className="ds-input"><span>Input field</span></div><div className="ds-chip">Chip</div><div className="ds-chip dark">Active</div></div>
          <div className="ds-block ds-comp"><div className="ds-meta">Nav</div><div className="ds-navbar"><span className="on">Home</span><span>Browse</span><span>More</span></div><div className="ds-tabbar"><span className="active">🏠<br />Home</span><span>↗<br />Send</span><span>💰<br />Save</span><span>≡<br />More</span></div></div>
          <div className="ds-block ds-comp"><div className="ds-meta">Toasts</div><div className="ds-toast success">✓ Success</div><div className="ds-toast danger">! Error</div><div className="ds-toast info">i Info</div></div>
        </div>
      </TabGroup.Pane>

      <TabGroup.Pane id="posters">
        <div className="poster-grid">
          <div className="poster p1"><div className="p-eyebrow">AGRIFLOW</div><div className="p-h">AgriTech marketplace · field-tested</div><div className="p-foot">agriflow.com</div></div>
          <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">+38%<br />Listings/Farmer</div><div className="p-foot">2024</div></div>
          <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">A</div><div className="p-foot">From any device.</div></div>
        </div>
      </TabGroup.Pane>
    </TabGroup>
  </section>
  <section className="proj-section" id="outcome">
    <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
    <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
    <div className="outcome-grid">
      <div className="oc-card"><div className="oc-n">76</div><div className="oc-l">SUS · Field-validated</div><div className="oc-d">"Good-Excellent" band</div></div><div className="oc-card"><div className="oc-n">16</div><div className="oc-l">Field interviews</div><div className="oc-d">3 counties, mixed literacy</div></div><div className="oc-card"><div className="oc-n">En·Sw</div><div className="oc-l">Languages shipped</div><div className="oc-d">Both pre-launch</div></div><div className="oc-card"><div className="oc-n">☀☾</div><div className="oc-l">Themes shipped</div><div className="oc-d">Light + dark, full parity</div></div>
    </div>
  </section>
  <section className="proj-section" id="reflection">
    <div className="kicker"><span className="kicker-num">07</span><h2 className="kicker-title">Reflection & Learnings</h2></div>
    <ul className="ps-list"><li>Designing for low-literacy users surfaces problems your "savvy" testers will never find — every project should have one in every test round.</li><li>SMS fallback isn't a backup — for the segments AgriFlow serves, it's the primary trust signal.</li><li>Multilingual UX is more than translation — tone, register, and cultural references all need field validation.</li><li>Buyer-side and farmer-side need different velocity — we shipped the farmer-side first and re-paced buyer-side feedback against real listings.</li></ul>
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
      <Link href="/work/advenio" className="project-card">
        <div className="thumb web">
          <div className="thumb-browser">
            <div className="tb-bar"><span></span><span></span><span></span></div>
            <div className="tb-body">
              <div className="tb-h">Advenio</div>
              <div className="tb-line"></div>
              <div className="tb-grid"><div className="tb-tile"></div><div className="tb-tile gold"></div><div className="tb-tile gold"></div><div className="tb-tile"></div></div>
              <div className="tb-cta">View</div>
            </div>
          </div>
        </div>
        <div className="row"><span className="title">Advenio Web App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
        <div className="tags"><span className="pill">UI/UX</span><span className="pill">Hospitality</span><span className="pill">Booking</span><span className="pill">Prototyping</span></div>
      </Link>
    </div>
  </section>
      </main>

      <ModalRoot />
    </ModalProvider>
  );
}
