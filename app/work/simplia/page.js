"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Web Designer · Lead","body":"<p>Owned IA, visual design, copy support, and CMS handoff. Built a flexible block-based template system in Webflow.</p>"},"m-industry":{"eyebrow":"Industry","title":"Marketing · Agency","body":"<p>Full-service digital marketing for SMEs — paid, content, web, SEO. Long sales cycle, proof-led conversion.</p>"},"m-skills":{"eyebrow":"Skills","title":"Conversion-focused web","body":"<p>Marketing site UX · Conversion copy · CMS structure · SEO foundations · Brand application.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"6 weeks","body":"<p>6 weeks. Discovery 1 · Design 3 · Build 2.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>The agency was getting calls but losing the qualifying step. The site needed to do more pre-qualification before a sales call so the right leads converted faster.</p><ul><li>Old site read like an agency portfolio — services were vague, case studies were thin.</li><li>Conversion path was buried — no clear lead capture, no scheduling integration.</li><li>CMS was hand-coded — every blog post required a developer.</li><li>SEO foundations were absent — no schema, slow load, no metadata structure.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>A marketing agency's website is its proof of work. If it feels generic or slow, no SME will trust the agency with theirs.</p><ul><li>Marketing-agency sites are credibility tests — every block has to feel intentional.</li><li>SME buyers want to self-qualify before talking to sales — let them.</li><li>A bad CMS slows publishing cadence, which kills organic-search momentum.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>Tracked through GA4 + Search Console for the 90 days post-launch.</p><ul><li>Lead-form completion rate: target +50% vs. old site.</li><li>Page-load score: target ≥ 90 Lighthouse on all primary pages.</li><li>Time-to-publish a blog post: target &lt; 10 min from draft to live.</li><li>Organic-search impressions: target +35% in 90 days.</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"SME marketers","body":"<p>In-house marketers at 10–200 person SMEs. Have a budget, need a partner.</p>"},"m-u-02":{"eyebrow":"Segment · Growth","title":"Founders","body":"<p>Bootstrapped founders who outgrew DIY marketing. Want a strategic partner, not a vendor.</p>"},"m-u-03":{"eyebrow":"Segment · Internal","title":"Agency team","body":"<p>Agency staff publishing case studies and blog posts via CMS.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Home","body":"<p>One of the eight key surfaces from the shipped product. Designed to proof-led storytelling.</p>"},"m-s-1":{"eyebrow":"Screen","title":"Service · Detail","body":"<p>One of the eight key surfaces from the shipped product. Designed to conversion paths everywhere.</p>"},"m-s-2":{"eyebrow":"Screen","title":"Case study","body":"<p>One of the eight key surfaces from the shipped product. Designed to cms that lets the team ship.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Blog · Post","body":"<p>One of the eight key surfaces from the shipped product. Designed to proof-led storytelling.</p>"},"m-s-4":{"eyebrow":"Screen","title":"Contact","body":"<p>One of the eight key surfaces from the shipped product. Designed to conversion paths everywhere.</p>"},"m-s-5":{"eyebrow":"Screen","title":"About","body":"<p>One of the eight key surfaces from the shipped product. Designed to cms that lets the team ship.</p>"}};

const DEVICE_COPY = {"desktop":"<strong>Desktop</strong> — primary discovery surface for B2B buyers. Case studies, service detail pages, and lead form here.","mobile":"<strong>Mobile</strong> — secondary research. Optimised for one-thumb scroll, mobile lead form.","cms":"<strong>CMS (Webflow)</strong> — internal team publishes blog posts, case studies, and team updates without dev help."};

export default function SimpliaPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2024</span>
            <span className="case-pill subtle">4 min read</span>
          </div>
          <h1 className="h-block-title">Simplia Website</h1>
          <p className="proj-tagline">A clean, conversion-focused marketing website for Simplia — a full-service digital marketing agency. Built to convert SME leads with a clear services menu and proof-led case studies.</p>
          <div className="proj-tags"><span className="pill">Web Design</span><span className="pill">Marketing</span><span className="pill">Branding</span><span className="pill">SEO</span><span className="pill">CMS</span><span className="pill">Conversion</span><span className="pill">Case Studies</span></div>
        </header>

        <section className="hero-mockup">
          <div className="hero-mockup-grid web-grid">
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">simplia.com</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7a7a7a', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: '#1f4d3f' }}>Simplia</div>
                <div style={{ display: 'flex', gap: '10px' }}><span>Home</span><span>Browse</span><span style={{ background: '#e5b33a', color: '#163a30', padding: '2px 8px', borderRadius: '99px', fontWeight: '600' }}>Sign up</span></div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '20px', color: '#1f4d3f', letterSpacing: '-.02em', lineHeight: '1.05' }}>A clean, conversion-focused marketing website for Simplia — a full-service digital marketing agency.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '10px' }}>
                <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.5' }}></div>
                <div style={{ background: '#f6f1e3', borderRadius: '6px', aspectRatio: '1.5' }}></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">simplia.com/discover</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '8px' }}>Browse Simplia</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}><div style={{ background: '#e5b33a', color: '#163a30', padding: '3px 10px', borderRadius: '99px', fontSize: '10px', fontWeight: '600' }}>All</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Filter</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Sort</div></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">simplia.com/detail</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '18px', color: '#1f4d3f', letterSpacing: '-.02em' }}>Detail view</div>
              <div style={{ background: '#f3f1ec', aspectRatio: '2', borderRadius: '8px', margin: '8px 0' }}></div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', fontSize: '10px' }}><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span></div>
              <div style={{ background: '#e5b33a', color: '#163a30', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', alignSelf: 'flex-start', display: 'inline-block' }}>+54%</div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">simplia.com/checkout</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
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
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>Simplia Website — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">Web Designer · Lead</div>
              <div className="info-d">Web Design · Marketing · Branding · SEO</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">Marketing · Agency</div>
              <div className="info-d">Marketing agency website</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Conversion-focused web</div>
              <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">6 weeks</div>
              <div className="info-d">2024 · Organic impressions.</div>
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
              <ul className="three-list"><li>Old site read like an agency portfolio — services were vague, case studies were thin.</li><li>Conversion path was buried — no clear lead capture, no scheduling integration.</li><li>CMS was hand-coded — every blog post required a developer.</li><li>SEO foundations were absent — no schema, slow load, no metadata structure.</li></ul>
              <span className="three-cta">Read full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>Marketing-agency sites are credibility tests — every block has to feel intentional.</li><li>SME buyers want to self-qualify before talking to sales — let them.</li><li>A bad CMS slows publishing cadence, which kills organic-search momentum.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Lead-form completion rate: target +50% vs. old site.</li><li>Page-load score: target ≥ 90 Lighthouse on all primary pages.</li><li>Time-to-publish a blog post: target &lt; 10 min from draft to live.</li><li>Organic-search impressions: target +35% in 90 days.</li></ul>
              <span className="three-cta">See test plan →</span>
            </ModalTrigger>
          </div>
        </section>

        <section className="proj-section" id="users-devices">
          <h3 className="ps-title">Users &amp; Devices</h3>
          <p className="ps-sub">Channels we designed for and the segments they serve.</p>
          <div className="users-grid">
            <DeviceChipsProvider copy={DEVICE_COPY} defaultDevice="desktop">
              <div className="ud-block">
                <div className="ud-block-h">Devices &amp; Channels</div>
                <div className="device-chips">
                  <DeviceChip device="desktop" className="dchip"><div className="dchip-ico">🖥</div><div className="dchip-l">Desktop</div></DeviceChip>
                  <DeviceChip device="mobile" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Mobile</div></DeviceChip>
                  <DeviceChip device="cms" className="dchip"><div className="dchip-ico">📝</div><div className="dchip-l">CMS</div></DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
                  <span className="user-num">01</span><span className="user-name">SME marketers</span><span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
                  <span className="user-num">02</span><span className="user-name">Founders</span><span className="user-tag">Growth</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
                  <span className="user-num">03</span><span className="user-name">Agency team</span><span className="user-tag">Internal</span>
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
                <div className="istat lift"><div className="n">+54%</div><div className="l">Lead Form Conversion</div></div>
                <div className="istat lift"><div className="n">94</div><div className="l">Lighthouse Score</div></div>
                <div className="istat lift"><div className="n">+38%</div><div className="l">Organic Impressions</div></div>
                <div className="istat lift"><div className="n">8 min</div><div className="l">Time-to-Publish</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">12</div><div className="l">Case Studies Live</div></div>
                <div className="istat lift"><div className="n">6 wks</div><div className="l">Build Timeline</div></div>
                <div className="istat lift"><div className="n">6</div><div className="l">Service Pages</div></div>
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
                <span className="pillar-h">Proof-led storytelling</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Case-study first</div><p>Every service page opens with a relevant case study, not a description.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Numbers on the page</div><p>Every case study leads with the lift number, not the brand logo.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Quote &gt; testimonial</div><p>Customer quotes are in their words, not agency-paraphrased.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Conversion paths everywhere</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Contextual CTA</div><p>Every section has its own CTA matched to intent — read more, book a call, get audit.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Sticky lead bar</div><p>A non-intrusive lead bar appears after 30% scroll on every page.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Calendly inline</div><p>Booking integrated into the lead form, no redirect.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">CMS that lets the team ship</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Block library</div><p>14 content blocks covering 95% of post layouts. New posts in 8 min.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Preview-first</div><p>Editors preview the live page before publishing — no surprises.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">SEO checklist</div><p>Built-in checklist in CMS (alt tags, meta, schema) before publish.</p></div>
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
              { id: '1', label: 'Service · Detail' },
              { id: '2', label: 'Case study' },
              { id: '3', label: 'Blog · Post' },
              { id: '4', label: 'Contact' },
              { id: '5', label: 'About' },
            ]}
          >
            <div className="scr-stage">
              <TabGroup.Pane id="0">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">simplia.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Simplia</div><div className="sp-links"><span>Services</span><span>Work</span><span>About</span><span>Insights</span></div><div className="sp-cta ">Book a call</div></div><div className="sp-hero"><div><div className="sp-eyebrow">FULL-SERVICE DIGITAL MARKETING</div><div className="sp-h1">Marketing made<br />simple.</div><div className="sp-p">We run paid, content, web, and SEO for SMEs who have outgrown doing it themselves. You set the budget, we do the rest.</div><div className="sp-btns"><span className="sp-cta dark">Book a call</span><span className="sp-cta ghost">See our work</span></div></div><div className="sp-art "></div></div><div className="sp-grid c4"><div className="sp-card"><div className="im g"></div><b>+54% lead conv.</b><span>Fortune Sacco</span></div><div className="sp-card"><div className="im "></div><b>+38% organic</b><span>PikaBox</span></div><div className="sp-card"><div className="im w"></div><b>94 Lighthouse</b><span>Advenio</span></div><div className="sp-card"><div className="im "></div><b>12 case studies</b><span>Since 2018</span></div></div><div className="sp-foot"><span>© 2026 Simplia</span><div className="cols"><div><b>Services</b><span>Paid</span><span>Content</span><span>SEO</span><span>Web</span></div><div><b>Company</b><span>About</span><span>Team</span><span>Careers</span></div><div><b>Contact</b><span>hello@simplia.co</span><span>+254 700 000 000</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Home</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Proof-led structure. The headline is followed immediately by case-study numbers rather than a services description.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="1">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">simplia.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Simplia</div><div className="sp-links"><span>Services</span><span>Work</span><span>About</span><span>Insights</span></div><div className="sp-cta ">Book a call</div></div><div className="sp-hero"><div><div className="sp-eyebrow">SERVICE · SEARCH</div><div className="sp-h1">SEO that compounds</div><div className="sp-p">Technical foundations, content architecture, and a publishing cadence your team can actually sustain. Measured on impressions and qualified leads, not rankings alone.</div><div className="sp-chips"><span className="sp-chip on">90-day roadmap</span><span className="sp-chip">Technical audit</span><span className="sp-chip">Content architecture</span><span className="sp-chip">Monthly reporting</span></div><div className="sp-btns"><span className="sp-cta">Book a call</span><span className="sp-cta ghost">Download the audit checklist</span></div></div><div className="sp-art "></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im g"></div><b>+38% impressions</b><span>Fortune Sacco · 90 days</span></div><div className="sp-card"><div className="im "></div><b>94 Lighthouse</b><span>Advenio · post-rebuild</span></div><div className="sp-card"><div className="im w"></div><b>8 min to publish</b><span>Simplia CMS</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Service · Detail</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Each service page opens with a relevant case study, so the proof arrives before the pitch.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="2">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">simplia.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Simplia</div><div className="sp-links"><span>Services</span><span>Work</span><span>About</span><span>Insights</span></div><div className="sp-cta ">Book a call</div></div><div className="sp-eyebrow">CASE STUDY · FINTECH</div><div className="sp-h1">+54% lead conversion for Fortune Sacco</div><div className="sp-editorial"><div className="sp-prose"><div className="sp-p">Fortune Sacco was getting calls but losing the qualifying step. Prospects arrived without understanding which product suited them, so sales spent the first ten minutes of every call on triage.</div><div className="sp-quote">"The site now does the qualifying for us. Calls start at the second question."</div><div className="sp-p">We restructured the site around self-qualification: a product selector, transparent pricing, and case studies mapped to each segment. Lead-form completion rose 54% within the first 90 days.</div><span className="sp-line"></span><span className="sp-line m"></span><span className="sp-line s"></span></div><div className="sp-side"><b>At a glance</b><span>Client · Fortune Sacco</span><span>Sector · Fintech</span><span>Duration · 6 weeks</span><span>Lead conv. · +54%</span><span>Organic · +38%</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Case study</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Every case study leads with the lift number and closes with a customer quote in their own words, not agency paraphrase.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="3">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">simplia.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Simplia</div><div className="sp-links"><span>Services</span><span>Work</span><span>About</span><span>Insights</span></div><div className="sp-cta ">Book a call</div></div><div className="sp-eyebrow">INSIGHTS · SEO</div><div className="sp-h1">What a sustainable publishing cadence looks like</div><div className="sp-editorial"><div className="sp-prose"><div className="sp-p">Most SME content programmes fail on cadence, not quality. Two well-researched posts a month beats eight rushed ones, and the compounding effect on organic search shows up around month four.</div><div className="sp-quote">"Publish what you can sustain for a year, not what you can sustain for a quarter."</div><div className="sp-p">Start with a keyword cluster you can genuinely own, build the pillar page first, then add supporting posts monthly. Review the cluster quarterly and prune what is not earning impressions.</div><span className="sp-line"></span><span className="sp-line m"></span><span className="sp-line s"></span></div><div className="sp-side"><b>Post details</b><span>Author · Vincent M.</span><span>Published · Aug 2026</span><span>Reading time · 6 min</span><span>Category · SEO</span><span>Share</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Blog · Post</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Fourteen content blocks cover 95% of post layouts, so the team publishes in about eight minutes with no developer involved.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="4">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">simplia.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Simplia</div><div className="sp-links"><span>Services</span><span>Work</span><span>About</span><span>Insights</span></div><div className="sp-cta ">Book a call</div></div><div className="sp-h2">Tell us what you need</div><div className="sp-steps"><i className="on"></i><i className="on"></i><i className=""></i></div><div className="sp-split"><div className="sp-form"><div className="sp-input">Your name</div><div className="sp-input">Work email</div><div className="sp-input">Company · 10–200 employees</div><div className="sp-input">Monthly budget · KSh 200k–500k</div><div className="sp-input">What are you trying to fix?</div><div className="sp-cta dark" style={{ textAlign: 'center' }}>Book a call</div></div><div className="sp-panel"><div className="sp-tr"><span>Response time</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Under 4 hours</span></div><div className="sp-tr"><span>First call</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>30 minutes</span></div><div className="sp-tr"><span>Proposal</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Within 5 days</span></div><div className="sp-tr"><span>No obligation</span><span></span><span></span><span style={{ textAlign: 'right', fontWeight: '600' }}>Cancel anytime</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Contact</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Booking is integrated into the lead form rather than redirecting to a scheduler, and a sticky lead bar appears after 30% scroll on every page.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="5">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">simplia.co</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">Simplia</div><div className="sp-links"><span>Services</span><span>Work</span><span>About</span><span>Insights</span></div><div className="sp-cta ">Book a call</div></div><div className="sp-hero"><div><div className="sp-eyebrow">ABOUT SIMPLIA</div><div className="sp-h1">A small team that<br />ships in public.</div><div className="sp-p">Eight people across strategy, design, and engineering. We publish our process, our pricing, and our results, because that is how SMEs decide who to trust.</div><div className="sp-btns"><span className="sp-cta dark">Meet the team</span><span className="sp-cta ghost">See our work</span></div></div><div className="sp-art mist"></div></div><div className="sp-grid c4"><div className="sp-card"><div className="im g"></div><b>Strategy</b><span>2 people</span></div><div className="sp-card"><div className="im "></div><b>Design</b><span>3 people</span></div><div className="sp-card"><div className="im w"></div><b>Engineering</b><span>2 people</span></div><div className="sp-card"><div className="im "></div><b>Ops</b><span>1 person</span></div></div><div className="sp-foot"><span>© 2026 Simplia</span><div className="cols"><div><b>Services</b><span>Paid</span><span>Content</span><span>SEO</span><span>Web</span></div><div><b>Company</b><span>About</span><span>Team</span><span>Careers</span></div><div><b>Contact</b><span>hello@simplia.co</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">About</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Team, values, and process in one scroll. The same proof-first rule applies: outcomes before philosophy.</span></div>
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
                <div className="ds-block ds-logo"><div className="logo-large">S</div><div className="ds-meta">Primary mark</div></div>
                <div className="ds-block ds-logo dark"><div className="logo-large inv">S</div><div className="ds-meta dim">Reverse</div></div>
                <div className="ds-block ds-logo"><div className="logo-mono">S</div><div className="ds-meta">Mono</div></div>
                <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">S</span>SIMPLIA</div><div className="ds-meta">Wordmark</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#1F4D3F' }}></div><div className="cs-meta"><div className="cs-name">Simplia Green</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Highlight</div><div className="cs-hex">#E5B33A</div></div></div>
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
                <div className="poster p1"><div className="p-eyebrow">SIMPLIA</div><div className="p-h">Marketing agency website</div><div className="p-foot">simplia.com</div></div>
                <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">+54%<br />Lead Form Conversion</div><div className="p-foot">2024</div></div>
                <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">S</div><div className="p-foot">From any device.</div></div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card"><div className="oc-n">+54%</div><div className="oc-l">Lead form conv.</div><div className="oc-d">vs prior site</div></div>
            <div className="oc-card"><div className="oc-n">94</div><div className="oc-l">Lighthouse</div><div className="oc-d">Performance</div></div>
            <div className="oc-card"><div className="oc-n">+38%</div><div className="oc-l">Organic impressions</div><div className="oc-d">90-day window</div></div>
            <div className="oc-card"><div className="oc-n">6 wks</div><div className="oc-l">Total build</div><div className="oc-d">On-time launch</div></div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>Agency sites are credibility checks — the proof-first structure was the highest-leverage decision.</li>
            <li>Sticky lead bar felt aggressive in design review; it doubled qualified leads.</li>
            <li>Letting the team ship blog posts unaided was the biggest unlock for organic search.</li>
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
