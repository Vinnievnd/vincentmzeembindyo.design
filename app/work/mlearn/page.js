"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS = {"m-role":{"eyebrow":"Role","title":"Product Designer","body":"<p>Owned learner-side UX across web and mobile. Co-designed the tutor dashboard. Built a 60-component design system from scratch.</p>"},"m-industry":{"eyebrow":"Industry","title":"EdTech · LMS","body":"<p>Hybrid LMS bridging K12 and adult learners. Competitors: Coursera (adult), Khan Academy (K12). Differentiator: live tutoring + structured curriculum.</p>"},"m-skills":{"eyebrow":"Skills","title":"Curriculum UX · Gamification","body":"<p>Curriculum UX · Progress tracking · Gamification mechanics · Accessibility (WCAG-AA) · Tutor-side workflows.</p>"},"m-timeline":{"eyebrow":"Timeline","title":"14 weeks","body":"<p>14 weeks. Discovery 3 · Curriculum + design 7 · Prototype + test 3 · Handoff 1.</p>"},"m-current":{"eyebrow":"Current Problem","title":"Current Problem","body":"<p>Hybrid LMS is a hard product — two audiences (kids + adults) with opposite needs. Progress signal had to be richer for kids (gamification), more discrete for adults (career framing).</p><ul><li>Existing platforms felt like file dumps — no progress signal, no momentum, no celebration of wins.</li><li>K12 learners need different UI affordances (parental visibility, time limits) than adult upskillers.</li><li>Live tutoring lived in a separate Zoom-style app, breaking learning context.</li><li>No structured curriculum — courses were ad-hoc collections of videos with no spine.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Why It Matters","body":"<p>EdTech retention is brutal. The only platforms that retain are the ones where every session ends with a \"what I learned today\" beat. That's a UX problem, not a content problem.</p><ul><li>Course completion in EdTech hovers at 5–15% industry-wide — the biggest lever is the learning experience itself.</li><li>Live tutoring is the differentiator vs. self-paced platforms; it has to feel native, not bolted on.</li><li>K12 parents are the buyer, not the user — UX must serve both surfaces.</li><li>Accessibility is a regulatory must in education + a humanitarian must — we designed WCAG-AA from day one.</li></ul>"},"m-validation":{"eyebrow":"Validation","title":"Validation Plan","body":"<p>A/B test against a control LMS at week 10. Cohort tracking over 6 weeks. Parent and learner NPS surveyed separately.</p><ul><li>Course completion rate: target +25% vs. control over a 6-week cohort.</li><li>Session duration: target 22+ min average for K12, 32+ min for adult learners.</li><li>Live-tutor booking rate: target 18% of active learners book ≥1 session/month.</li><li>Parent satisfaction: target NPS ≥ 40 from parent-side survey.</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"K12 students","body":"<p>Ages 9–17. Mixed device access. Need gamified momentum and clear progress signals.</p>"},"m-u-02":{"eyebrow":"Segment · Growth","title":"Adult upskillers","body":"<p>24–45 career-track. Want certifications, project-based learning, peer cohorts.</p>"},"m-u-03":{"eyebrow":"Segment · Buyer","title":"Parents","body":"<p>Buy on behalf of K12 students. Need visibility without surveillance.</p>"},"m-u-04":{"eyebrow":"Segment · Supply","title":"Tutors","body":"<p>Live tutors. Need scheduling, lesson tools, and post-session notes that auto-share with learner + parent.</p>"},"m-s-0":{"eyebrow":"Screen","title":"Home · Continue","body":"<p>One of the eight key surfaces from the shipped product. Designed to structured curriculum spine.</p>"},"m-s-1":{"eyebrow":"Screen","title":"Course detail","body":"<p>One of the eight key surfaces from the shipped product. Designed to gamification (k12) + framing (adult).</p>"},"m-s-2":{"eyebrow":"Screen","title":"Lesson · Video + notes","body":"<p>One of the eight key surfaces from the shipped product. Designed to live tutoring in context.</p>"},"m-s-3":{"eyebrow":"Screen","title":"Live tutor session","body":"<p>One of the eight key surfaces from the shipped product. Designed to parent dashboard without surveillance.</p>"},"m-s-4":{"eyebrow":"Screen","title":"Parent dashboard","body":"<p>One of the eight key surfaces from the shipped product. Designed to structured curriculum spine.</p>"},"m-s-5":{"eyebrow":"Screen","title":"Tutor console","body":"<p>One of the eight key surfaces from the shipped product. Designed to gamification (k12) + framing (adult).</p>"}};

const DEVICE_COPY = {"web":"<strong>Desktop Learner</strong> — primary surface for video lessons, assignments, and live tutoring sessions.","mobile":"<strong>Mobile Learner</strong> — quick review, flashcards, and short-form content. Works offline for downloaded lessons.","parent":"<strong>Parent Dashboard</strong> — read-only progress view, time limits, and conference booking with tutors.","tutor":"<strong>Tutor Console</strong> — schedule, lesson plans, live-session whiteboard, and learner notes."};

export default function MLearnPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2024</span>
            <span className="case-pill subtle">6 min read</span>
          </div>
          <h1 className="h-block-title">MLearn Web App</h1>
          <p className="proj-tagline">A unified learning platform for K12 students and adult upskillers — course discovery, structured lessons, progress tracking, and live tutoring in one experience.</p>
          <div className="proj-tags"><span className="pill">UI/UX</span><span className="pill">EdTech</span><span className="pill">LMS</span><span className="pill">Design System</span><span className="pill">Gamification</span><span className="pill">Progress Tracking</span><span className="pill">Accessibility</span></div>
        </header>

        <section className="hero-mockup">
          <div className="hero-mockup-grid web-grid">
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">mlearn.com</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7a7a7a', marginBottom: '12px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '14px', color: '#1f4d3f' }}>MLearn</div>
                <div style={{ display: 'flex', gap: '10px' }}><span>Home</span><span>Browse</span><span style={{ background: '#e5b33a', color: '#163a30', padding: '2px 8px', borderRadius: '99px', fontWeight: '600' }}>Sign up</span></div>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '20px', color: '#1f4d3f', letterSpacing: '-.02em', lineHeight: '1.05' }}>A unified learning platform for K12 students and adult upskillers — course discovery, structured lessons, progress tracking, and live tutoring in one experience.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '10px' }}>
                <div style={{ background: '#f3f1ec', borderRadius: '6px', aspectRatio: '1.5' }}></div>
                <div style={{ background: '#f6f1e3', borderRadius: '6px', aspectRatio: '1.5' }}></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">mlearn.com/discover</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '16px', color: '#1f4d3f', marginBottom: '8px' }}>Browse MLearn</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}><div style={{ background: '#e5b33a', color: '#163a30', padding: '3px 10px', borderRadius: '99px', fontSize: '10px', fontWeight: '600' }}>All</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Filter</div><div style={{ background: '#f3f1ec', padding: '3px 10px', borderRadius: '99px', fontSize: '10px' }}>Sort</div></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
                <div style={{ background: '#fff', border: '1px solid #e6e3dc', borderRadius: '8px', padding: '8px' }}><div style={{ background: '#f3f1ec', aspectRatio: '1.6', borderRadius: '4px', marginBottom: '6px' }}></div><div style={{ fontSize: '10px', fontWeight: '600' }}>Item</div><div style={{ fontSize: '9px', color: '#7a7a7a' }}>Sub label</div></div>
              </div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">mlearn.com/detail</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: '700', fontSize: '18px', color: '#1f4d3f', letterSpacing: '-.02em' }}>Detail view</div>
              <div style={{ background: '#f3f1ec', aspectRatio: '2', borderRadius: '8px', margin: '8px 0' }}></div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', fontSize: '10px' }}><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span><span style={{ background: '#fbe6a6', padding: '3px 8px', borderRadius: '99px' }}>Tag</span></div>
              <div style={{ background: '#e5b33a', color: '#163a30', padding: '8px 16px', borderRadius: '99px', fontSize: '11px', fontWeight: '700', alignSelf: 'flex-start', display: 'inline-block' }}>+28%</div></div></div></div>
            <div className="hero-browser"><div className="browser-frame"><div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">mlearn.com/checkout</div></div><div className="bf-body site" style={{ padding: '14px', fontSize: '11px', minHeight: '200px' }}>
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
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>MLearn Web App — coming soon</a>
            <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>MLearn Tutor Console — coming soon</a>
          </PrototypeDock>
        </section>

        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">Product Designer</div>
              <div className="info-d">UI/UX · EdTech · LMS · Design System</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">EdTech · LMS</div>
              <div className="info-d">E-learning platform · K12 + adult</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Curriculum UX · Gamification</div>
              <div className="info-d">HCD, IA, Prototyping, Testing, Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">14 weeks</div>
              <div className="info-d">2024 · Parent NPS.</div>
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
              <ul className="three-list"><li>Existing platforms felt like file dumps — no progress signal, no momentum, no celebration of wins.</li><li>K12 learners need different UI affordances (parental visibility, time limits) than adult upskillers.</li><li>Live tutoring lived in a separate Zoom-style app, breaking learning context.</li><li>No structured curriculum — courses were ad-hoc collections of videos with no spine.</li></ul>
              <span className="three-cta">Read full diagnosis →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list"><li>Course completion in EdTech hovers at 5–15% industry-wide — the biggest lever is the learning experience itself.</li><li>Live tutoring is the differentiator vs. self-paced platforms; it has to feel native, not bolted on.</li><li>K12 parents are the buyer, not the user — UX must serve both surfaces.</li><li>Accessibility is a regulatory must in education + a humanitarian must — we designed WCAG-AA from day one.</li></ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>
            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list"><li>Course completion rate: target +25% vs. control over a 6-week cohort.</li><li>Session duration: target 22+ min average for K12, 32+ min for adult learners.</li><li>Live-tutor booking rate: target 18% of active learners book ≥1 session/month.</li><li>Parent satisfaction: target NPS ≥ 40 from parent-side survey.</li></ul>
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
                  <DeviceChip device="web" className="dchip"><div className="dchip-ico">🖥</div><div className="dchip-l">Desktop Learner</div></DeviceChip>
                  <DeviceChip device="mobile" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Mobile Learner</div></DeviceChip>
                  <DeviceChip device="parent" className="dchip"><div className="dchip-ico">👨‍👩‍👧</div><div className="dchip-l">Parent Dashboard</div></DeviceChip>
                  <DeviceChip device="tutor" className="dchip"><div className="dchip-ico">🎓</div><div className="dchip-l">Tutor Console</div></DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable">
                  <span className="user-num">01</span><span className="user-name">K12 students</span><span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable">
                  <span className="user-num">02</span><span className="user-name">Adult upskillers</span><span className="user-tag">Growth</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable">
                  <span className="user-num">03</span><span className="user-name">Parents</span><span className="user-tag">Buyer</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-u-04" as="button" className="user-row clickable">
                  <span className="user-num">04</span><span className="user-name">Tutors</span><span className="user-tag">Supply</span>
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
                <div className="istat lift"><div className="n">+28%</div><div className="l">Course Completion</div></div>
                <div className="istat lift"><div className="n">+44%</div><div className="l">Session Duration</div></div>
                <div className="istat lift"><div className="n">+22%</div><div className="l">Tutor Bookings</div></div>
                <div className="istat lift"><div className="n">+38</div><div className="l">Parent NPS</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">60</div><div className="l">Components Shipped</div></div>
                <div className="istat lift"><div className="n">AA</div><div className="l">WCAG Compliance</div></div>
                <div className="istat lift"><div className="n">2</div><div className="l">Audiences Served</div></div>
                <div className="istat lift"><div className="n">14w</div><div className="l">Build Timeline</div></div>
              </div>
            </div>
          </div>
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary>
                <span className="pillar-num">01</span>
                <span className="pillar-h">Structured curriculum spine</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Course → Module → Lesson</div><p>Three-level IA. Every lesson knows its position in the spine.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Outcomes-first</div><p>Each module opens with "by the end you will…" and closes with a recall check.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Spaced review</div><p>Auto-scheduled flashcards based on Ebbinghaus forgetting curve.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Gamification (K12) + framing (Adult)</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Streaks &amp; XP</div><p>Daily streak with forgiveness windows for K12. Adults see a discreet "you're on track" weekly summary.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Mastery badges</div><p>Unlocked per skill, not per video. Surfaces mastery, not engagement-farming.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Peer cohorts (Adult)</div><p>Adult learners opt into 6-week cohorts with a kickoff + close session.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">Live tutoring in context</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">In-product video</div><p>Tutoring happens inside the lesson, not in Zoom. Whiteboard syncs to course materials.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">1-click rebooking</div><p>Repeat-tutor relationships persist; quick rebook from session summary.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Parent CC</div><p>Parents can opt into receiving session notes. Always opt-in, never default-on.</p></div>
              </div>
            </details>
            <details className="pillar">
              <summary>
                <span className="pillar-num">04</span>
                <span className="pillar-h">Parent dashboard without surveillance</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col"><div className="pillar-col-h">Trust by default</div><p>Parents see progress + tutor notes — never raw activity logs.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Time limits, not blockers</div><p>Soft caps + heads-up timers; respect learner autonomy.</p></div>
                <div className="pillar-col"><div className="pillar-col-h">Conference booking</div><p>Triadic parent + learner + tutor sessions every 6 weeks.</p></div>
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
              { id: '0', label: 'Home · Continue' },
              { id: '1', label: 'Course detail' },
              { id: '2', label: 'Lesson · Video + notes' },
              { id: '3', label: 'Live tutor session' },
              { id: '4', label: 'Parent dashboard' },
              { id: '5', label: 'Tutor console' },
            ]}
          >
            <div className="scr-stage">
              <TabGroup.Pane id="0">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">mlearn.io</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">MLearn</div><div className="sp-links"><span>Courses</span><span>Live</span><span>Paths</span><span>Pricing</span></div><div className="sp-cta ">My learning</div></div><div className="sp-hero"><div><div className="sp-eyebrow">WELCOME BACK, JOY</div><div className="sp-h1">Pick up where<br />you left off.</div><div className="sp-p">Algebra II · Module 3 of 6. Two lessons remain before the mastery check unlocks.</div><div className="sp-btns"><span className="sp-cta dark">Continue lesson</span><span className="sp-cta ghost">Browse courses</span></div></div><div className="sp-art "></div></div><div className="sp-grid c4"><div className="sp-card"><div className="im g"></div><b>Algebra II</b><span>Module 3 · 62%</span></div><div className="sp-card"><div className="im "></div><b>Physics I</b><span>Module 1 · 14%</span></div><div className="sp-card"><div className="im w"></div><b>Essay Craft</b><span>Module 5 · 88%</span></div><div className="sp-card"><div className="im "></div><b>Data Basics</b><span>Not started</span></div></div><div className="sp-foot"><span>© 2026 MLearn</span><div className="cols"><div><b>Learn</b><span>Courses</span><span>Paths</span><span>Live tutoring</span></div><div><b>Company</b><span>About</span><span>Careers</span></div><div><b>Support</b><span>Help centre</span><span>Contact</span></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Home · Continue</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Session opens on what the learner was last doing, then the curriculum spine underneath it. Progress is the first thing on the page.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="1">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">mlearn.io</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">MLearn</div><div className="sp-links"><span>Courses</span><span>Live</span><span>Paths</span><span>Pricing</span></div><div className="sp-cta ">My learning</div></div><div className="sp-hero"><div><div className="sp-eyebrow">MATHEMATICS · GRADE 11</div><div className="sp-h1">Algebra II</div><div className="sp-p">Six modules covering quadratics, polynomials, logarithms, and sequences. Includes live tutoring, spaced-review flashcards, and a mastery badge per skill.</div><div className="sp-chips"><span className="sp-chip on">6 modules</span><span className="sp-chip">42 lessons</span><span className="sp-chip">Live tutoring included</span><span className="sp-chip">Mastery badges</span></div><div className="sp-btns"><span className="sp-cta">Enrol free</span><span className="sp-cta ghost">Preview module 1</span></div></div><div className="sp-art "></div></div><div className="sp-grid c3"><div className="sp-card"><div className="im g"></div><b>Module 1 · Quadratics</b><span>8 lessons · outcome check</span></div><div className="sp-card"><div className="im "></div><b>Module 2 · Polynomials</b><span>7 lessons · outcome check</span></div><div className="sp-card"><div className="im w"></div><b>Module 3 · Logarithms</b><span>6 lessons · in progress</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Course detail</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Every module opens with a stated outcome and closes with a recall check, so the spine of the course is legible before enrolling.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="2">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">mlearn.io</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">MLearn</div><div className="sp-links"><span>Courses</span><span>Live</span><span>Paths</span><span>Pricing</span></div><div className="sp-cta ">My learning</div></div><div className="sp-eyebrow">ALGEBRA II · MODULE 3 · LESSON 4</div><div className="sp-h1">Logarithm laws in practice</div><div className="sp-editorial"><div className="sp-prose"><div className="sp-p">By the end of this lesson you will be able to expand and condense logarithmic expressions using the product, quotient, and power laws.</div><div className="sp-quote">log(ab) = log a + log b</div><div className="sp-p">Work through the two examples, then attempt the recall check. Your answers feed the spaced-review schedule automatically.</div><span className="sp-line"></span><span className="sp-line m"></span><span className="sp-line s"></span></div><div className="sp-side"><b>In this lesson</b><span>Video · 8 min</span><span>Worked examples · 2</span><span>Recall check · 5 questions</span><span>Flashcards · added</span><span>Ask a tutor</span></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Lesson · Video + notes</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Video, transcript, and notes share one surface. The recall check sits at the end of the lesson, not in a separate quiz section.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="3">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">mlearn.io</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">MLearn</div><div className="sp-links"><span>Courses</span><span>Live</span><span>Paths</span><span>Pricing</span></div><div className="sp-cta ">My learning</div></div><div className="sp-split"><div className="sp-side"><b>Session</b><span className="on">Whiteboard</span><span className="">Course materials</span><span className="">Shared notes</span><span className="">Recording</span><span className="">Rebook</span></div><div className="sp-panel"><div className="sp-h2">Live session · Grace N. · 45 min</div><div className="sp-msg in">Let us start with question 3 from the recall check. Can you show me your working?</div><div className="sp-msg out">I expanded log(4x) into log 4 + log x, then got stuck.</div><div className="sp-msg in">That is exactly right. Now apply the power law to the second term and tell me what you get.</div><div className="sp-msg out">log 4 + 2 log x?</div><div className="sp-input">Write a reply…</div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Live tutor session</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Tutoring happens inside the lesson rather than in a separate video app, so the whiteboard stays synced to the course materials.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="4">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">mlearn.io</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">MLearn</div><div className="sp-links"><span>Courses</span><span>Live</span><span>Paths</span><span>Pricing</span></div><div className="sp-cta ">Joy M.</div></div><div className="sp-split"><div className="sp-side"><b>Parent</b><span className="on">Overview</span><span className="">Progress</span><span className="">Tutor notes</span><span className="">Time limits</span><span className="">Conferences</span></div><div className="sp-panel"><div className="sp-h2">Amani · Grade 11</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Modules done</div><div className="n">14</div><div className="d">+3</div></div><div className="sp-stat"><div className="l">Weekly time</div><div className="n">4h 20m</div></div><div className="sp-stat"><div className="l">Mastery badges</div><div className="n">9</div><div className="d">+2</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none"/><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4"/></svg></div><div className="sp-table"><div className="sp-tr h"><span>Course</span><span>Last active</span><span>Status</span><span>Progress</span></div><div className="sp-tr"><span className="">Algebra II</span><span className="">Today</span><span className="ok">Active</span><span className="">62%</span></div><div className="sp-tr"><span className="">Physics I</span><span className="">2 days ago</span><span className="ok">Active</span><span className="">14%</span></div><div className="sp-tr"><span className="">Essay Craft</span><span className="">Today</span><span className="ok">Active</span><span className="">88%</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Parent dashboard</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Parents see progress and tutor notes, never raw activity logs. Time limits are soft caps with a heads-up timer, not hard blockers.</span></div>
              </TabGroup.Pane>
              <TabGroup.Pane id="5">
                <div className="scr-browser">
                  <div className="scr-bar"><i></i><i></i><i></i><div className="scr-url">mlearn.io</div></div>
                  <div className="scr-body"><div className="sp-nav"><div className="sp-logo">MLearn</div><div className="sp-links"><span>Courses</span><span>Live</span><span>Paths</span><span>Pricing</span></div><div className="sp-cta ">Grace N.</div></div><div className="sp-split"><div className="sp-side"><b>Tutor</b><span className="on">Schedule</span><span className="">Learners</span><span className="">Lesson plans</span><span className="">Notes</span><span className="">Earnings</span></div><div className="sp-panel"><div className="sp-h2">This week · 11 sessions</div><div className="sp-grid c3"><div className="sp-stat"><div className="l">Sessions</div><div className="n">11</div><div className="d">+2</div></div><div className="sp-stat"><div className="l">Rebook rate</div><div className="n">78%</div><div className="d">+9%</div></div><div className="sp-stat"><div className="l">Rating</div><div className="n">4.9</div></div></div><div className="sp-chart"><svg viewBox="0 0 300 80" preserveAspectRatio="none"><polyline points="0,62 30,52 60,57 90,32 120,42 150,22 180,32 210,16 240,26 270,12 300,20" stroke="var(--green)" strokeWidth="2" fill="none"/><polyline points="0,72 30,67 60,62 90,57 120,54 150,47 180,44 210,40 240,34 270,32 300,27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeDasharray="4,4"/></svg></div><div className="sp-table"><div className="sp-tr h"><span>Learner</span><span>Course</span><span>Status</span><span>When</span></div><div className="sp-tr"><span className="">Amani M.</span><span className="">Algebra II</span><span className="ok">Confirmed</span><span className="">Today 16:00</span></div><div className="sp-tr"><span className="">Dennis K.</span><span className="">Physics I</span><span className="pend">Pending</span><span className="">Thu 17:30</span></div><div className="sp-tr"><span className="">Sofia W.</span><span className="">Essay Craft</span><span className="ok">Confirmed</span><span className="">Fri 15:00</span></div></div></div></div></div>
                </div>
                <div className="scr-cap"><span className="scr-cap-t">Tutor console</span><span className="scr-cap-m">Desktop · 1440</span><span className="scr-cap-d">Schedule, lesson plans, and post-session notes in one place. Notes auto-share with the learner and, if opted in, the parent.</span></div>
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
                <div className="ds-block ds-logo"><div className="logo-large">M</div><div className="ds-meta">Primary mark</div></div>
                <div className="ds-block ds-logo dark"><div className="logo-large inv">M</div><div className="ds-meta dim">Reverse</div></div>
                <div className="ds-block ds-logo"><div className="logo-mono">M</div><div className="ds-meta">Mono</div></div>
                <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm">M</span>MLEARN</div><div className="ds-meta">Wordmark</div></div>
              </div>
            </TabGroup.Pane>

            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#1F4D3F' }}></div><div className="cs-meta"><div className="cs-name">Study Green</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E5B33A' }}></div><div className="cs-meta"><div className="cs-name">Highlight</div><div className="cs-hex">#E5B33A</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E16A4A' }}></div><div className="cs-meta"><div className="cs-name">Mastery Coral</div><div className="cs-hex">#E16A4A</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#F8F0E1' }}></div><div className="cs-meta"><div className="cs-name">Cream</div><div className="cs-hex">#F8F0E1</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#161616' }}></div><div className="cs-meta"><div className="cs-name">Ink</div><div className="cs-hex">#161616</div></div></div>
                    <div className="cs"><div className="cs-swatch" style={{ background: '#E6E3DC' }}></div><div className="cs-meta"><div className="cs-name">Mist</div><div className="cs-hex">#E6E3DC</div></div></div>
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
                <div className="poster p1"><div className="p-eyebrow">MLEARN</div><div className="p-h">E-learning platform · K12 + adult</div><div className="p-foot">mlearn.com</div></div>
                <div className="poster p2"><div className="p-eyebrow">PROOF</div><div className="p-h">+28%<br />Course Completion</div><div className="p-foot">2024</div></div>
                <div className="poster p3"><div className="p-eyebrow">CTA</div><div className="p-h big">M</div><div className="p-foot">From any device.</div></div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics measured against the validation plan from Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card"><div className="oc-n">+28%</div><div className="oc-l">Course completion</div><div className="oc-d">Cohort over 6 wks</div></div>
            <div className="oc-card"><div className="oc-n">83</div><div className="oc-l">SUS · Learner side</div><div className="oc-d">"Excellent"</div></div>
            <div className="oc-card"><div className="oc-n">+38</div><div className="oc-l">Parent NPS</div><div className="oc-d">Above target of 40</div></div>
            <div className="oc-card"><div className="oc-n">AA</div><div className="oc-l">WCAG accessibility</div><div className="oc-d">Shipped day one</div></div>
          </div>
        </section>

        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>Two audiences in one product is twice the work — every component had K12 + Adult variants from day one.</li>
            <li>Gamification cuts both ways. The win was making it mastery-based, not engagement-based.</li>
            <li>Parent UX is buyer UX — designing for parents without surveilling kids was the hardest design choice.</li>
            <li>Live tutoring inside the product (vs. Zoom) doubled rebooking rates. Context is conversion.</li>
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
