"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Web Design Manager","body":"<p>Owned the mentor + mentee experience end-to-end. Managed a 3-person design team. Shipped a v1 web app with 200 onboarded mentors.</p>"},"m-industry":{"eyebrow":"Industry","title":"EdTech · Mentorship","body":"<p>Student-to-mentor marketplace. Adjacent: LinkedIn Learning, ADPList, region-specific programs.</p>"},"m-skills":{"eyebrow":"Skills","title":"Marketplace UX · Matching","body":"<p>Marketplace UX · Matching algorithms · Async messaging · Scheduling UX · Profile design.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"8 weeks","body":"<p>March – May 2024 · 8 weeks. Rapid build against a fixed launch window.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>Mentorship is high-friction. Students hesitate to \"waste a mentor's time\"; mentors find it hard to filter quality requests. Async-first messaging removes the booking pressure.</p><ul><li>Students didn't know who to ask, what to ask, or when to ask — mentorship had no on-ramp.</li><li>Existing platforms felt transactional (\"book a call\") — students wanted lower-stakes async first.</li><li>Mentors' availability lived on calendars no one could see; back-and-forth scheduling killed momentum.</li><li>No browsing pattern — students bounced from category to category without finding their match.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>Mentorship isn't a calendar problem; it's a permission problem. The UX has to give students permission to ask, and mentors permission to decline.</p><ul><li>Career outcomes in early adulthood correlate strongly with mentorship access — and it's deeply unequal.</li><li>Mentor supply is the bottleneck in any marketplace; their UX has to feel like a 5-minute commitment, not 5 hours.</li><li>Async-first lowers the activation energy by an order of magnitude — students will message before they'll book.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>Two-sided NPS — mentor + mentee — surveyed at 30 days. Conversation completion rate tracked end-to-end.</p><ul><li>Message-send rate: % of profile views that result in an outbound message. Target 12%.</li><li>Mentor reply rate: target 60% reply within 48 hrs.</li><li>Time-to-first-conversation: target &lt; 24 hrs from signup.</li><li>Mentor NPS — easy to filter requests without feeling rude.</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"Students","body":"<p>University students, 18–24. Looking for industry context and \"what's next\" guidance.</p>"},"m-u-02":{"eyebrow":"Segment · Supply","title":"Mentors","body":"<p>Industry professionals, 5–20 yrs experience. Want to help but have limited time.</p>"},"m-u-03":{"eyebrow":"Segment · Partner","title":"Universities","body":"<p>Career-services offices using Toedur as their mentorship layer.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Discover · Mentors","body":"<p>One of the eight key surfaces from the shipped product. Designed to async-first messaging.</p>"},"m-s-1":{"eyebrow":"Screen","title":"Mentor profile","body":"<p>One of the eight key surfaces from the shipped product. Designed to discovery without overwhelm.</p>"},"m-s-2":{"eyebrow":"Screen","title":"Conversation","body":"<p>One of the eight key surfaces from the shipped product. Designed to mentor experience that respects time.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Mentor dashboard","body":"<p>One of the eight key surfaces from the shipped product. Designed to async-first messaging.</p>"},"m-s-4":{"eyebrow":"Screen","title":"Onboarding · Student","body":"<p>One of the eight key surfaces from the shipped product. Designed to discovery without overwhelm.</p>"},"m-s-5":{"eyebrow":"Screen","title":"University admin","body":"<p>One of the eight key surfaces from the shipped product. Designed to mentor experience that respects time.</p>"}};

const DEVICE_COPY = {"web":"<strong>Desktop Web</strong> — primary discovery surface. Profile browsing, async messaging, scheduled calls.","mobile":"<strong>Mobile Web</strong> — message-heavy. Optimised for chat reading, quick \"thank you\" replies.","mentor":"<strong>Mentor Dashboard</strong> — request filtering, calendar block-out, reply templates for common questions."};

export default function ToedurPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2024</span>
            <span className="case-pill subtle">5 min read</span>
          </div>
          <h1 className="h-block-title">Toedur Web App</h1>
          <p className="proj-tagline">A mentorship platform connecting university students to industry mentors — discovery, matching, scheduling, and async messaging in one calm, low-pressure surface.</p>
          <div className="proj-tags"><span className="pill">UI/UX</span><span className="pill">Education</span><span className="pill">Mentorship</span><span className="pill">Matching UX</span><span className="pill">Async Messaging</span><span className="pill">Research</span><span className="pill">Web App</span></div>
        </header>

        <section className="hero-mockup">
          <div className="hero-mockup-grid web-grid">
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">toedur.com</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7a7a7a', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: '#1f4d3f' }}>Toedur</div>
                <div style={{ display: 'flex', gap: '10px' }}><span>Home</span><span>Browse</span><span style={{ background: '#e5b33a', color: '#163a30', padding: '2px 8px', borderRadius: '99px', fontWeight: '600' }}>Sign up</span></div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '20px', color: '#1f4d3f', letterSpacing: '-.02em', lineHeight: '1.05' }}>A mentorship platform connecting university students to industry mentors — discovery, matching, scheduling, and async messaging in one calm, low-pressure surface.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '10px' }}>
                <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.5' }}></div>
                <div style={{ background: '#f6f1e3', borderRadius: '6px', aspectRatio: '1.5' }}></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">toedur.com/discover</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '8px' }}>Browse Toedur</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}><div style={{ background: '#e5b33a', color: '#163a30', padding: '3px 10px', borderRadius: '99px', fontSize: '10px', fontWeight: '600' }}>All</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Filter</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Sort</div></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">toedur.com/detail</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '18px', color: '#1f4d3f', letterSpacing: '-.02em' }}>Detail view</div>
              <div style={{ background: '#f3f1ec', aspectRatio: '2', borderRadius: '8px', margin: '8px 0' }}></div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', fontSize: '10px' }}><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span></div>
              <div style={{ background: '#e5b33a', color: '#163a30', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', alignSelf: 'flex-start', display: 'inline-block' }}>+47%</div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">toedur.com/checkout</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
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
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Toedur Web App — coming soon</a>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Toedur Mentor Dashboard — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">Web Design Manager</div>
              <div className="info-d">UI/UX · Education · Mentorship · Matching UX</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">EdTech · Mentorship</div>
              <div className="info-d">Student mentorship marketplace</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Marketplace UX · Matching</div>
              <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">8 weeks</div>
              <div className="info-d">2024 · Mentors onboarded.</div>
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
              <ul className="three-list"><li>Students didn't know who to ask, what to ask, or when to ask — mentorship had no on-ramp.</li><li>Existing platforms felt transactional ("book a call") — students wanted lower-stakes async first.</li><li>Mentors' availability lived on calendars no one could see; back-and-forth scheduling killed momentum.</li><li>No browsing pattern — students bounced from category to category without finding their match.</li></ul>
              <span className="three-cta">Read full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>Career outcomes in early adulthood correlate strongly with mentorship access — and it's deeply unequal.</li><li>Mentor supply is the bottleneck in any marketplace; their UX has to feel like a 5-minute commitment, not 5 hours.</li><li>Async-first lowers the activation energy by an order of magnitude — students will message before they'll book.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Message-send rate: % of profile views that result in an outbound message. Target 12%.</li><li>Mentor reply rate: target 60% reply within 48 hrs.</li><li>Time-to-first-conversation: target &lt; 24 hrs from signup.</li><li>Mentor NPS — easy to filter requests without feeling rude.</li></ul>
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
                  <DeviceChip device="mentor" className="dchip"><div className="dchip-ico">🎓</div><div className="dchip-l">Mentor Dashboard</div></DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
                  <span className="user-num">01</span><span className="user-name">Students</span><span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
                  <span className="user-num">02</span><span className="user-name">Mentors</span><span className="user-tag">Supply</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
                  <span className="user-num">03</span><span className="user-name">Universities</span><span className="user-tag">Partner</span>
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
                <div className="istat lift"><div className="n">+47%</div><div className="l">Message Send Rate</div></div>
                <div className="istat lift"><div className="n">64%</div><div className="l">Mentor Reply Rate</div></div>
                <div className="istat lift"><div className="n">18h</div><div className="l">First Conversation</div></div>
                <div className="istat lift"><div className="n">+52</div><div className="l">Mentor NPS</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">200</div><div className="l">Mentors Onboarded</div></div>
                <div className="istat lift"><div className="n">8w</div><div className="l">Build Timeline</div></div>
                <div className="istat lift"><div className="n">60%</div><div className="l">Async-First Sessions</div></div>
                <div className="istat lift"><div className="n">3</div><div className="l">Universities Live</div></div>
              </div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary>
                <span className="pillar-num">01</span>
                <span className="pillar-h">Async-first messaging</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">No booking required to message</div><p>Students can ask a question; mentor replies on their schedule.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Templates for mentors</div><p>Decline-with-suggestion, "ask me again in 2 weeks", "here's a resource".</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Conversation, not chat</div><p>Threaded by topic, not chronologically. Closeable when resolved.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Discovery without overwhelm</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">5 mentor cards at a time</div><p>No infinite scroll. Curated batches with a "show me more" beat.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Profile-first matching</div><p>Mentors write what they help with, not what they've done.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Saved for later</div><p>Bookmark mentors without obligation. Reminder nudge 7 days later.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">Mentor experience that respects time</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Pause &amp; unpause</div><p>Mentors can pause incoming requests with a single click. No guilt.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Quality filter</div><p>Students self-tag their question type before sending — auto-grouped for mentors.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Calendar block-out</div><p>Sync with Google/Apple calendar — no manual availability management.</p></div>
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
              { id: '0', label: 'Discover · Mentors' },
              { id: '1', label: 'Mentor profile' },
              { id: '2', label: 'Conversation' },
              { id: '3', label: 'Mentor dashboard' },
              { id: '4', label: 'Onboarding · Student' },
              { id: '5', label: 'University admin' },
            ]}
          >
            <div className="scr-stage">
              <TabGroup.Pane id="0">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">toedur.com</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Toedur</div><div className="sp-links"><span>Discover</span><span>How it works</span><span>For mentors</span><span>Blog</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-h2">Mentors who work in product design</div><div className="sp-chips"><span className="sp-chip on">All</span><span className="sp-chip">Product design</span><span className="sp-chip">Software</span><span className="sp-chip">Finance</span><span className="sp-chip">Open to async</span></div><div className="sp-split"><div className="sp-side"><b>Filter by</b><span className="on">Field</span><span className="">Availability</span><span className="">Years experience</span><span className="">Language</span><span className="">University</span></div><div className="sp-grid c2"><div className="sp-card"><div className="im g"></div><b>Wanjiru K.</b><span>Product Design · Safaricom · replies in 12 h</span></div><div className="sp-card"><div className="im "></div><b>Brian O.</b><span>Software · Andela · replies in 1 day</span></div><div className="sp-card"><div className="im w"></div><b>Aisha M.</b><span>Finance · KCB · replies in 6 h</span></div><div className="sp-card"><div className="im "></div><b>Daniel N.</b><span>Data · Twiga · replies in 2 days</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Discover · Mentors</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Five mentor cards at a time instead of infinite scroll. Each profile leads with what the mentor helps with, not a career résumé.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="1">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">toedur.com</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Toedur</div><div className="sp-links"><span>Discover</span><span>How it works</span><span>For mentors</span><span>Blog</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-hero"><div><div className="sp-eyebrow">PRODUCT DESIGN · NAIROBI</div><div className="sp-h1">Wanjiru Kamau</div><div className="sp-p">Eight years in product design across fintech and logistics. Happy to review portfolios, talk through a first design role, or sanity-check a career switch.</div><div className="sp-chips"><span className="sp-chip on">Replies in 12 h</span><span className="sp-chip">Async first</span><span className="sp-chip">Portfolio reviews</span><span className="sp-chip">Career switches</span></div><div className="sp-btns"><span className="sp-cta">Send a message</span><span className="sp-cta ghost">Save for later</span></div></div><div className="sp-art "></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im g"></div><b>Portfolio reviews</b><span>Async · 2–3 day turnaround</span></div><div className="sp-card"><div className="im "></div><b>First design role</b><span>30 min call</span></div><div className="sp-card"><div className="im w"></div><b>Career switching</b><span>Async or call</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Mentor profile</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Profiles are written around what a mentor can help with. The primary action is a message, not a booking, which lowers the activation energy.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="2">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">toedur.com</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Toedur</div><div className="sp-links"><span>Discover</span><span>How it works</span><span>For mentors</span><span>Blog</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-split"><div className="sp-side"><b>Threads</b><span className="on">Portfolio review · open</span><span className="">First role advice · open</span><span className="">Salary question · closed</span><span className="">Intro · closed</span></div><div className="sp-panel"><div className="sp-h2">Portfolio review · Wanjiru K.</div><div className="sp-msg out">Hi Wanjiru, I am applying for junior product roles and would value a second opinion on my case studies.</div><div className="sp-msg in">Happy to look. Send the link and tell me which two roles you are targeting.</div><div className="sp-msg out">Here it is. Targeting fintech and marketplace roles in Nairobi.</div><div className="sp-msg in">Good work overall. Your process sections are strong but the outcomes are buried — lead with the numbers.</div><div className="sp-input">Write a reply…</div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Conversation</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Threads are grouped by topic rather than chronology, and can be closed when resolved. Mentors get decline-with-suggestion templates.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="3">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">toedur.com</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Toedur</div><div className="sp-links"><span>Discover</span><span>How it works</span><span>For mentors</span><span>Blog</span></div><div className="sp-cta ">Wanjiru K.</div></div><div className="sp-split"><div className="sp-side"><b>Mentor</b><span className="on">Requests</span><span className="">Threads</span><span className="">Availability</span><span className="">Templates</span><span className="">Impact</span></div><div className="sp-panel"><div className="sp-h2">Requests · 6 waiting</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Reply rate</div><div className="n">64%</div><div className="d">+11%</div></div><div className="sp-stat"><div className="l">Avg reply</div><div className="n">12 h</div></div><div className="sp-stat"><div className="l">Students helped</div><div className="n">48</div><div className="d">+6</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none"/><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4"/></svg></div><div className="sp-table"><div className="sp-tr h"><span>Student</span><span>Topic</span><span>Status</span><span>Waiting</span></div><div className="sp-tr"><span className="">Sofia W.</span><span className="">Portfolio review</span><span className="pend">Pending</span><span className="">4 h</span></div><div className="sp-tr"><span className="">Kevin M.</span><span className="">First design role</span><span className="pend">Replied</span><span className="">—</span></div><div className="sp-tr"><span className="">Grace A.</span><span className="">Career switch</span><span className="pend">Pending</span><span className="">1 day</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Mentor dashboard</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Pause and unpause incoming requests in one click. Students self-tag their question type, so requests arrive pre-grouped.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="4">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">toedur.com</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Toedur</div><div className="sp-links"><span>Discover</span><span>How it works</span><span>For mentors</span><span>Blog</span></div><div className="sp-cta ">Sign in</div></div><div className="sp-h2">Set up your student profile</div><div className="sp-steps"><i className="on"></i><i className="on"></i><i className=""></i></div><div className="sp-split"><div className="sp-form"><div className="sp-input">University · Strathmore</div><div className="sp-input">Year of study · Third year</div><div className="sp-input">Field of interest · Product design</div><div className="sp-input">What do you want help with? · Portfolio review</div><div className="sp-input">Preferred format · Async messages</div><div className="sp-cta dark" style={{ textAlign: 'center' }}>See my mentor matches</div></div><div className="sp-panel"><div className="sp-tr"><span>Profile</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>60% complete</span></div><div className="sp-tr"><span>Matches waiting</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>12 mentors</span></div><div className="sp-tr"><span>Avg reply time</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>14 hours</span></div><div className="sp-tr"><span>Cost</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Free for students</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Onboarding · Student</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Three steps to a first conversation. Field and question type are captured up front so the first mentor batch is already relevant.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="5">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">toedur.com</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Toedur</div><div className="sp-links"><span>Discover</span><span>How it works</span><span>For mentors</span><span>Blog</span></div><div className="sp-cta ">Strathmore</div></div><div className="sp-split"><div className="sp-side"><b>University</b><span className="on">Overview</span><span className="">Students</span><span className="">Mentors</span><span className="">Fields</span><span className="">Reports</span></div><div className="sp-panel"><div className="sp-h2">Strathmore · 2026 cohort</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Students active</div><div className="n">412</div><div className="d">+38</div></div><div className="sp-stat"><div className="l">Conversations</div><div className="n">1,106</div><div className="d">+14%</div></div><div className="sp-stat"><div className="l">Mentor coverage</div><div className="n">9 fields</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none"/><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4"/></svg></div><div className="sp-table"><div className="sp-tr h"><span>Field</span><span>Students</span><span>Status</span><span>Mentors</span></div><div className="sp-tr"><span className="">Product design</span><span className="">86</span><span className="ok">Active</span><span className="">14</span></div><div className="sp-tr"><span className="">Software</span><span className="">142</span><span className="ok">Active</span><span className="">21</span></div><div className="sp-tr"><span className="">Actuarial</span><span className="">38</span><span className="pend">Pending</span><span className="">3</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">University admin</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Career-services view for partner universities: cohort uptake, mentor coverage per field, and conversation outcomes.</span></div>
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
                <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">T</span>TOEDUR</div><div className="ds-meta">Wordmark</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#1F4D3F' }}></div><div className="cs-meta"><div className="cs-name">Toedur Green</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Spark</div><div className="cs-hex">#E5B33A</div></div></div>
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
                <div className="poster p1"><div className="p-eyebrow">TOEDUR</div><div className="p-h">Student mentorship marketplace</div><div className="p-foot">toedur.com</div></div>
                <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">+47%<br />Message Send Rate</div><div className="p-foot">2024</div></div>
                <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">T</div><div className="p-foot">From any device.</div></div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card"><div className="oc-n">+47%</div><div className="oc-l">Message send rate</div><div className="oc-d">Profile views → messages</div></div>
            <div className="oc-card"><div className="oc-n">64%</div><div className="oc-l">Mentor reply rate</div><div className="oc-d">Within 48 hrs</div></div>
            <div className="oc-card"><div className="oc-n">200</div><div className="oc-l">Mentors onboarded</div><div className="oc-d">In 8 weeks</div></div>
            <div className="oc-card"><div className="oc-n">+52</div><div className="oc-l">Mentor NPS</div><div className="oc-d">"Light to help" segment</div></div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>Mentorship isn't a marketplace; it's a permission slip. Async-first messaging gave both sides permission.</li>
            <li>Mentor UX is mentee UX — make mentors feel respected and they reply faster, which makes mentees happier.</li>
            <li>Five cards at a time beat infinite scroll on every conversion metric we tracked.</li>
            <li>Templates for mentors weren't a feature, they were the feature.</li>
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
