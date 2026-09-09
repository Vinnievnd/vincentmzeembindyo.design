"use client";

import Link from "next/link";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import ProcessRail from "@/components/ProcessRail";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";
import BeforeAfterCompare from "@/components/BeforeAfterCompare";

const MODALS = {
  // Project Info
  'm-role': {
    eyebrow: 'Role',
    title: 'User Experience Designer',
    body: `<p>Owned the end-to-end customer experience for the Fortune Sacco Mobile App, Marketing Content (Online &amp; Offline), Web Design, and Admin Dashboard, from problem framing through dev handoff to post-launch monitoring &amp; Testing.</p>
    <ul><li>UI / UX across mobile (iOS · Android) and responsive web.</li>
    <li>UX research — moderated &amp; remote, IDEO-aligned protocols.</li>
    <li>Product marketing strategy: funnel segmented creative system.</li>
    <li>Stakeholder facilitation across the Sacco Onsite Team, Sales Team, Dev, Design Teams, Marketing, and Customer Support teams.</li></ul>
    <div class="modal-meta"><span class="pill">UI/UX Design</span><span class="pill">UX Research</span><span class="pill">A/B Testing</span><span class="pill">User Interviews</span><span class="pill">Prototyping</span><span class="pill">Information Architecture</span><span class="pill">Human Centred Design</span><span class="pill">Quality Assurance(QA)</span><span class="pill">Accessibility</span><span class="pill">WCAG Alignment</span><span class="pill">Photography</span><span class="pill">Usability Testing</span><span class="pill">Marketing</span><span class="pill">Onsite Merchandising</span><span class="pill">Marketing</span></div>`
  },
  'm-industry': {
    eyebrow: 'Industry',
    title: 'Fintech · Sacco Banking',
    body: `<p>Cooperative banking is the most regulated, lowest-trust-margin product I've ever designed for. Member-owned Saccos in Kenya serve MSMEs, smallholder farmers, and the underbanked — segments where one bad screen forfeits a relationship.</p>
    <ul><li>Compliance: Sacco Societies Regulatory Authority (SASRA), CRB integration.</li>
    <li>Channels: branch, USSD, agents, app, merchants — designed for all of them.</li>
    <li>Inclusion: 5-step KYC reduced to 3 steps with agent-assisted onboarding.</li></ul>`
  },
  'm-skills': {
    eyebrow: 'Skills',
    title: 'Research → Ship',
    body: `<p>The full HCD loop, applied at fintech scale.</p>
    <ul>
      <li><strong>Discover</strong> — User interviews, branch shadowing, funnel analytics.</li>
      <li><strong>Define</strong> — Information architecture, journey mapping, problem framing.</li>
      <li><strong>Design</strong> — Crazy 8s, design sprints, hi-fi prototypes, design systems.</li>
      <li><strong>Validate</strong> — Usability testing, A/B, SUS scoring, heuristic eval.</li>
      <li><strong>Ship</strong> — Dev handoff specs, accessibility (WCAG-AA), launch metrics.</li>
    </ul>`
  },
  'm-timeline': {
    eyebrow: 'Timeline',
    title: '14 weeks · Sep 2023 → Jan 2024',
    body: `<p>Phased delivery against a fixed launch window.</p>
    <ul>
      <li><strong>Weeks 1–3</strong> — Research, branch shadowing, persona synthesis.</li>
      <li><strong>Weeks 4–6</strong> — Lo-Fi prototypes, IA validation, sprint with stakeholders.</li>
      <li><strong>Weeks 7–9</strong> — Hi-Fi v0 → v2, design system, dev handoff.</li>
      <li><strong>Weeks 10–12</strong> — Usability, A/B, marketing creative.</li>
      <li><strong>Weeks 13–14</strong> — Pre-launch QA, branch staff training, soft launch.</li>
    </ul>`
  },

  // Challenge
  'm-current': {
    eyebrow: 'Current Problem',
    title: 'Every service starts at the branch counter',
    body: `<p>Fortune Sacco customers have had to visit the branch every time they want to access their finances — that's the problem statement in Fortune's own Value Proposition, and it compounds across the base:</p>
    <ul>
      <li><strong>No remote visibility</strong> — members can't check savings, membership shares, or investment shares without a counter visit.</li>
      <li><strong>Manual collection</strong> — dividend and loan payouts, and deposit collection for farmers, are still paper-and-queue processes.</li>
      <li><strong>No mobile credit</strong> — no access to quick, cheap mobile loans, and no way to pay for goods or services from the Sacco account directly.</li>
    </ul>
    <p>The branch becomes the only channel. Member time — and Fortune's own growth targets — are the casualty.</p>`
  },
  'm-why': {
    eyebrow: 'Why It Matters',
    title: 'The window for Fortune is now, not later',
    body: `<p>Expansion, retention, and revenue growth all stall when the branch is the only working channel — and the sector is moving fast around Fortune:</p>
    <ul>
      <li>Kenya's cooperative banking sector named fintech partnerships its top strategic priority for 2026 — Saccos slow to modernise are losing members to those that already have.</li>
      <li>SACCO agent-network digital transaction values grew over 14% industry-wide in the past year — mobile-first Saccos are pulling share from branch-only ones.</li>
      <li>Fortune's own marketing objectives — improve usage, grow revenue, cut in-branch traffic — depend entirely on members trusting and adopting the app, not just having it exist.</li>
      <li>Women, youth, and smallholder farmers are Fortune's fastest-growing and most branch-dependent segments; losing them to a mobile-first competitor is the costliest failure mode.</li>
    </ul>`
  },
  'm-validation': {
    eyebrow: 'Validation Plan',
    title: 'How we know it worked',
    body: `<p>Validation is tied directly to the marketing objectives and KPIs set out in Fortune's own Value Proposition, plus a field-tested rollout:</p>
    <ul>
      <li><strong>Usage &amp; revenue</strong> — sign-up conversion, transaction volume, and Sacco revenue impact, reviewed monthly against Fortune's own KPI targets.</li>
      <li><strong>Branch traffic</strong> — reduction in in-branch visits, Fortune's stated marketing objective, tracked against a pre-launch baseline.</li>
      <li><strong>Training completion</strong> — % of new sign-ups completing in-app feature training, a leading indicator called out in the Value Proposition's marketing strategy.</li>
      <li><strong>Field validation</strong> — with cash-crop, dairy-farmer, and business-member cohorts across branches in Kirinyaga County, Fortune's core base.</li>
    </ul>
    <p>Field validation conducted in three counties pre &amp; post-launch with mixed urban / rural cohorts.</p>`
  },

  // Users
  'm-msmes': { eyebrow: 'Segment · Primary', title: 'Cash Crop &amp; Dairy Farmers', body: `<p>Rice, coffee, tea, and dairy farmers — Fortune's founding customer base. Motivated by family and business success; frustrated by manual deposit collection and no remote access to balances or statements.</p><ul><li>Need cheaper loans tied to planting and feeding cycles, not calendar months.</li><li>Prefer trusted, low-literacy-friendly channels over app-only flows.</li></ul>` },
  'm-old': { eyebrow: 'Segment · Core', title: 'Business People', body: `<p>Members running shops and trading businesses. Today they visit the branch for every payment, dividend, and loan collection, with no access to emergency or lower-cost business credit.</p><ul><li>Want float and balance visibility before restocking decisions.</li><li>Highest transaction volume segment; most sensitive to processing delays.</li></ul>` },
  'm-young': { eyebrow: 'Segment · Growth', title: 'Youth &amp; Women (Traders)', body: `<p>Kirinyaga has a lot of female and youth entrepreneurs in informal markets, with youth tech savviness making it easy to use and recommend Fortune eCash Mobile App.</p>` },
  'm-farmers': { eyebrow: 'Segment · Retention', title: 'Corporate Customers', body: `<p>Institutional and salaried members named directly in Fortune's customer base. Want the same self-service visibility as retail members, plus consolidated reporting across shares, savings, and investment products.</p>` },
  'm-partners': { eyebrow: 'Segment · Ecosystem', title: 'Local Fintech &amp; Agent Partners', body: `<p>Kenya's SACCO sector named fintech collaboration its top strategic priority for 2026. Fortune's roadmap includes agent-assisted sign-up, M-Pesa interoperability for deposits and merchant biller codes, and agency-banking partnerships to extend reach into rural branches without new brick-and-mortar cost.</p>` },

  // Research
  'm-survey': {
    eyebrow: 'Research',
    title: 'Survey · 412 respondents',
    body: `<p>Three-county survey on channel use, conducted via field officers and CATI.</p>
    <ul><li><strong>78%</strong> — used Branch as primary channel pre-launch.</li>
    <li><strong>54%</strong> — used USSD as a fallback.</li>
    <li><strong>31%</strong> — had ever heard the app existed (awareness gap).</li></ul>
    <p>The awareness gap drove the entire marketing strategy.</p>`
  },
  'm-funnel': {
    eyebrow: 'Funnel',
    title: 'Account → First Transaction',
    body: `<p>Baseline funnel from 6-week post-launch cohort.</p>
    <ul><li>Visit → Signup: 64% (industry benchmark 70%)</li>
    <li>Signup → KYC: 38% — the biggest drop, addressed in v2 with agent-assisted KYC.</li>
    <li>KYC → First Transaction: 22% — fixed by Day-0 incentive (KES 50 airtime).</li></ul>`
  },
  'm-personas': {
    eyebrow: 'Persona',
    title: 'Jane Wanjiru, 34 · Trader',
    body: `<p>Nairobi market trader. Mobile-first since 2017. USSD heavy. Trust-driven choices — prefers cooperatives over banks for the "they know me" factor.</p>
    <ul><li>Spends 2+ hrs/month in branch — directly competes with market hours.</li>
    <li>Needs instant float visibility before restocking decisions.</li>
    <li>PIN-entry friction surfaced in PIN-rhythm research.</li></ul>`
  },
  'm-heatmap': {
    eyebrow: 'Heatmap · Web',
    title: 'First-screen attention',
    body: `<p>Click + cursor heatmap on the public marketing site, 14-day window.</p>
    <ul><li>"Get a Loan" CTA — 41% of clicks (concentrated heat).</li>
    <li>"Open Account" — 28%.</li>
    <li>"Help" — 11% (a flag — too high for a landing page).</li></ul>
    <p>The Help cluster informed in-app contextual help additions.</p>`
  },
  'm-audit': {
    eyebrow: 'Competitor Audit',
    title: 'Channel parity matrix',
    body: `<p>Compared Fortune Sacco vs. an established commercial bank vs. a digital-native fintech.</p>
    <ul><li>Sacco was the only one without a mobile app — biggest single gap.</li>
    <li>All three had USSD — table stakes.</li>
    <li>None had in-app loans — competitive opportunity.</li>
    <li>Sacco had no self-serve KYC — friction tax.</li></ul>`
  },

  // IA / Flow
  'm-sitemap': {
    eyebrow: 'IA',
    title: 'Sitemap · App',
    body: `<p>Four-pillar IA: <strong>Send · Save · Loan · Pay</strong>. Each pillar has 2–3 sub-flows, kept under three taps deep.</p>
    <ul><li>Send → P2P, To Account, To Agent</li>
    <li>Save → Lengo, Goals, Fixed</li>
    <li>Loan → Quick, Asset, Recovery</li>
    <li>Pay → Bills, Goods, Cards</li></ul>`
  },
  'm-flow': {
    eyebrow: 'Userflow',
    title: 'Send Money · 3 steps shipped',
    body: `<p>Original branch flow: 9 steps. v0 lo-fi: 6 steps. Shipped v2: 3 steps + confirmation.</p>
    <ul><li>Open → Tap Send → Recipient → Amount → Confirm → Receipt</li>
    <li>Persisted recipients reduce step count on repeat sends.</li>
    <li>Biometric confirm replaces re-PIN-entry for amounts &lt; KES 10K.</li></ul>`
  },
  'm-p-sme': { eyebrow: 'Persona', title: 'Peter M., 41 · Shop Owner', body: `<p>Runs a wholesale shop in Kibera. Cares about <strong>float visibility</strong> — knowing in real time what's available before he restocks. Biggest pain: branch wait + uncertainty.</p>` },
  'm-p-farmer': { eyebrow: 'Persona', title: "Ruth M., 52 · Smallholder", body: `<p>Maize farmer in Murang'a. Needs loans tied to <strong>growing cycles</strong>, not calendar months. Low literacy with English UI — copy register adjusted for v2.</p>` },
  'm-p-staff': { eyebrow: 'Persona', title: 'Aisha K., 28 · Branch Officer', body: `<p>The queue is her workload. We designed the admin dashboard so that ticket creation in-app reduces her counter time by ~30%.</p>` },
  'm-p-crm': { eyebrow: 'Persona', title: 'David N., 35 · CRM Admin', body: `<p>Needed a single dashboard for SLA tracking across branches. Result: ticket SLA visibility moved from end-of-month report → real-time.</p>` },
  'm-journey': {
    eyebrow: 'Journey',
    title: 'Six-phase emotional arc',
    body: `<p>Aware → Curious → Sign-up → Onboard → First-use → Loyal. The two emotional dips we designed for: pre-KYC (anxiety) and first-failed-transaction (trust shock).</p>
    <ul><li>Pre-KYC: agent-assisted opt-in path.</li>
    <li>First-failure: in-app recovery copy + 1-tap chat handoff.</li></ul>`
  },

  // Wireframes
  'm-lofi': {
    eyebrow: 'v0 Lo-Fi',
    title: 'Greybox · Week 2',
    body: `<p>Greybox prototype tested with 8 members at the Sacco main branch. Goal was to validate IA, not visual decisions.</p>
    <ul><li>3 of 8 completed Send Money unaided.</li>
    <li>Surface: no icons → "I don't know what these buttons do."</li>
    <li>Top finding: members expect a balance hero, not a menu.</li></ul>`
  },
  'm-hifi-v0': {
    eyebrow: 'v0 Hi-Fi',
    title: 'First Hi-Fi pass · Week 4',
    body: `<p>Brought visual hierarchy and brand. Balance promoted to hero. Still felt "bank-y" — needed warmth.</p>
    <ul><li>Surface: typography too small for older members.</li>
    <li>Color contrast initially failed WCAG-AA on action buttons.</li>
    <li>SUS: 64.</li></ul>`
  },
  'm-hifi-v1': {
    eyebrow: 'v1 Hi-Fi',
    title: 'Re-greeted home · Week 5',
    body: `<p>Vernacular greeting ("Hujambo"), gold-on-green logo, chip-style top actions. Tested as warmer; conversion lifted but still missed activity feedback.</p>
    <ul><li>SUS: 76.</li>
    <li>Day-7 retention +12% vs v0.</li></ul>`
  },
  'm-hifi-v2': {
    eyebrow: 'v2 Hi-Fi · Shipped',
    title: 'Activity feedback added · Week 6',
    body: `<p>Added "▲ +KES 12,800 this week" feedback above actions. This single change drove the SUS jump from 76 → 87.</p>
    <ul><li>SUS: 87 ("Best" band).</li>
    <li>Day-7 retention +28% vs baseline.</li>
    <li>Shipped to production Q1 2024.</li></ul>`
  },

  // Marketing
  'm-bill': { eyebrow: 'OOH', title: 'Billboard · 6 × 3 m', body: `<p>Awareness placement at urban transit hubs in Nairobi, Kisumu, and Mombasa. Tagline "Take charge of your future" tested against three alternatives — won on recall.</p>` },
  'm-ig': { eyebrow: 'Social', title: 'Instagram · 1:1', body: `<p>Retention asset for active members. Cream + gold palette to feel distinct from green-heavy Sacco brand. Tested 5% p.a. headline vs. an aspiration headline — numbers won.</p>` },
  'm-story': { eyebrow: 'Story · 9:16', title: 'Acquisition story ad', body: `<p>+35% New User Login was the headline. Story format had the highest swipe-up rate of any creative we tested. Hard data > soft promise.</p>` },
  'm-banner': { eyebrow: 'Web banner', title: 'Loan acquisition · 1200 × 300', body: `<p>"Borrow up to KES 250,000" loan banner served on partner sites and Sacco's own properties. Funnel-segmented: lapsed members saw 9.5%, actives saw 8.5%.</p>` },
  'm-flyer': { eyebrow: 'Branch flyer', title: 'A5 · Counter handout', body: `<p>Distributed at branch counters during the 3-week handoff window. Three-bullet structure (Open · Send-Pay-Save · Loans) outperformed long-copy alternates 2.4×.</p>` },
  'm-sms': { eyebrow: 'CRM', title: 'SMS &amp; Push templates', body: `<p>Funnel-segmented template library: welcome, balance nudge, pre-approved loan, recovery, win-back. Short-code "fsacco.co/lengo" for low-bandwidth opens.</p>` }
};

const DEVICE_COPY = {
  branch: '<strong>Physical Branch</strong> — the baseline. 100% of pre-launch transactions originated here. Long queues, manual paperwork, branch-officer bottleneck. Designed as the "last resort" path post-launch.',
  app: '<strong>Mobile App</strong> — primary self-serve channel post-launch. iOS &amp; Android. Hosts the 3-step send-money flow, loan applications, and in-app member chat support.',
  ussd: '<strong>USSD · *225#</strong> — the inclusion bridge. Parity with the top 5 app flows. Works on any phone, even offline. Critical for members without data bundles.',
  agents: '<strong>Agents (Physical &amp; Mobile)</strong> — assisted onboarding, KYC, and cash-in / cash-out. Equipped with the agent dashboard for in-field ticket triage.',
  merchants: '<strong>Merchants</strong> — accept payments via QR or till number. Settlements pushed in real time to the Sacco platform; daily statements available in-app.'
};

export default function FortuneECashPage() {
  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">

        {/* Project header */}
        <header className="proj-header">
          <div className="case-meta">
            <span className="case-pill">Case Study · 2024</span>
            <span className="case-pill subtle">8 min read</span>
          </div>
          <h1 className="h-block-title">Fortune eCash Mobile App &amp; Web Designs</h1>
          <p className="proj-tagline">Mobile App, USSD, and admin platform for Fortune Sacco. Designed to pull customers out of branch queues and into a self-service banking experience tuned by behavioural data.</p>
          <div className="proj-tags">
            <span className="pill">UI/UX</span>
            <span className="pill">Web Design</span>
            <span className="pill">UX Research</span>
            <span className="pill">Customer Experience</span>
            <span className="pill">UX Writing</span>
            <span className="pill">Wireframes</span>
            <span className="pill">Prototyping</span>
            <span className="pill">User Testing</span>
            <span className="pill">Persona Modelling</span>
            <span className="pill">Pitching</span>
          </div>
        </header>

        {/* Hero mockup ribbon */}
        <section className="hero-mockup" aria-label="Mockup videos and GIFs">
          <div className="hero-mockup-grid">
            <div className="hero-phone phone-screen phone-onboarding">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen ph-screen-onboarding">
                  <div className="ob-bg"></div>
                  <div className="ob-content">
                    <div className="ob-logo">F</div>
                    <div className="ob-title">Mwelekeo<br />Account</div>
                    <div className="ob-tag">take part, take<br />charge of your future<br />with our mwelekeo account</div>
                  </div>
                  <div className="ob-cta">Get Started today</div>
                  <div className="ob-cta ghost">Login to platform</div>
                </div>
              </div>
            </div>
            <div className="hero-phone phone-screen phone-home">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen ph-screen-home">
                  <div className="h-header">
                    <div>
                      <div className="h-greet">Morning Lo</div>
                      <div className="h-greet-bold">Welcome back</div>
                    </div>
                    <div className="h-logo">F</div>
                  </div>
                  <div className="h-account">
                    <div className="h-acct-label">Lengo Savings Account</div>
                    <div className="h-acct-num">10** **** **** *26</div>
                  </div>
                  <div className="h-actions">
                    <div className="h-act"><span>👁</span>View<br />Balance</div>
                    <div className="h-act"><span>▶</span>Deposit<br />to Account</div>
                    <div className="h-act"><span>▤</span>Mini<br />Statement</div>
                    <div className="h-act"><span>▦</span>Full<br />Statement</div>
                  </div>
                  <div className="h-grid">
                    <div className="h-tile" style={{ background: '#e7f0ff' }}><div className="h-tile-ico" style={{ background: '#5b86d6' }}></div><div>Buy<br />Airtime</div></div>
                    <div className="h-tile" style={{ background: '#e7fff3' }}><div className="h-tile-ico" style={{ background: '#27a55a' }}></div><div>Send<br />Money</div></div>
                    <div className="h-tile" style={{ background: '#ffe7ec' }}><div className="h-tile-ico" style={{ background: '#e16a86' }}></div><div>Pay<br />Bill</div></div>
                    <div className="h-tile" style={{ background: '#f1e7ff' }}><div className="h-tile-ico" style={{ background: '#8a5bd6' }}></div><div>Buy<br />Goods</div></div>
                  </div>
                  <div className="h-listrow"><span className="dot dot-mpesa"></span><div><div>MPESA</div><small>23925</small></div><div className="amt red">-KES 50,000.00</div></div>
                  <div className="h-listrow"><span className="dot dot-dep"></span><div><div>Deposit</div></div><div className="amt green">+KES 1,200,000.00</div></div>
                  <div className="h-listrow"><span className="dot dot-with"></span><div><div>Withdraw</div></div><div className="amt red">-KES 50,000.00</div></div>
                </div>
              </div>
            </div>
            <div className="hero-phone phone-screen phone-send">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen ph-screen-send">
                  <div className="s-top"><div className="s-back">‹</div><div className="s-title">Send Money</div></div>
                  <div className="s-from"><div className="s-from-label">From</div><div className="s-from-acct">Lengo Savings · KES 1,250,400</div></div>
                  <div className="s-recipient"><div className="s-recip-label">Recipient</div><div className="s-recip-num">+254 712 ••• 982</div><div className="s-recip-name">JANE WANJIRU M.</div></div>
                  <div className="s-amount"><div className="s-amount-currency">KES</div><div className="s-amount-value">125,000</div></div>
                  <div className="s-keypad">
                    <span>1</span><span>2</span><span>3</span>
                    <span>4</span><span>5</span><span>6</span>
                    <span>7</span><span>8</span><span>9</span>
                    <span>.</span><span>0</span><span>⌫</span>
                  </div>
                  <div className="s-cta">Confirm Transfer</div>
                </div>
              </div>
            </div>
            <div className="hero-phone phone-screen phone-loan">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen ph-screen-loan">
                  <div className="ln-top"><div className="s-back">‹</div><div className="s-title">Loan Application</div></div>
                  <div className="ln-stepper">
                    <span className="dot on"></span><span className="bar on"></span>
                    <span className="dot on"></span><span className="bar"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="ln-amount-label">Amount eligible</div>
                  <div className="ln-amount">KES 250,000</div>
                  <div className="ln-slider"><div className="ln-slider-fill"></div><div className="ln-slider-thumb"></div></div>
                  <div className="ln-row"><span>Repayment</span><span className="bold">12 months</span></div>
                  <div className="ln-row"><span>Interest</span><span className="bold">9.5% p.a.</span></div>
                  <div className="ln-row"><span>Monthly</span><span className="bold">KES 22,800</span></div>
                  <div className="ln-disclosure">By tapping Continue you accept the Loan Terms &amp; Conditions and authorise CRB verification.</div>
                  <div className="ln-cta">Continue</div>
                </div>
              </div>
            </div>
          </div>
          <PrototypeDock>
            <div className="proto-pop-h">Prototypes</div>
            <a href="https://www.figma.com/design/krXLZdKAzmQKbu1apJMOAW/e-cash-web" target="_blank" rel="noopener"><span className="pl-dot"></span>Fortune eCash Website</a>
            <a href="https://www.figma.com/design/krXLZdKAzmQKbu1apJMOAW/e-cash-web" target="_blank" rel="noopener"><span className="pl-dot"></span>Fortune eCash Dashboard</a>
            <a href="https://www.figma.com/design/KxfCH5M3HyvZUg61grnYL0/e-cash-app" target="_blank" rel="noopener"><span className="pl-dot"></span>Fortune eCash Application</a>
          </PrototypeDock>
        </section>

        {/* 1 · PROJECT INFO */}
        <section className="proj-section" id="info">
          <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
          <p className="ps-sub">Scope, role, and the runway we operated on.</p>
          <div className="info-grid">
            <ModalTrigger modalKey="m-role" className="info-card clickable">
              <div className="info-eyebrow">Role</div>
              <div className="info-h">User Experience Designer</div>
              <div className="info-d">UI / UX Design · UX Research · Web Design · Product Marketing</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-industry" className="info-card clickable">
              <div className="info-eyebrow">Industry</div>
              <div className="info-h">Fintech · Sacco</div>
              <div className="info-d">Cooperative banking for MSMEs &amp; farmers in Kenya.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-skills" className="info-card clickable">
              <div className="info-eyebrow">Skills</div>
              <div className="info-h">Research → Ship</div>
              <div className="info-d">HCD, IA, Prototyping, Usability, Design Systems.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-timeline" className="info-card clickable">
              <div className="info-eyebrow">Timeline</div>
              <div className="info-h">14 weeks</div>
              <div className="info-d">Jul 2022 → Oct 2023.</div>
              <div className="info-more">Tap to expand →</div>
            </ModalTrigger>
          </div>
        </section>

        {/* 2 · CHALLENGE / PROBLEM / HYPOTHESIS */}
        <section className="proj-section" id="challenge">
          <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge &amp; Hypothesis</h2></div>
          <p className="ps-sub">Three lenses on the same problem, grounded in Fortune Sacco's own value proposition and where the SACCO sector is heading in 2026: what's broken today, why it matters now, and how we'll know we fixed it.</p>

          <div className="three-up">
            <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
              <div className="three-num">A</div>
              <h3 className="three-h">Current Problem</h3>
              <ul className="three-list">
                <li>Fortune Sacco customers have to visit the branch every time they want to check a balance, collect dividends, or access a loan.</li>
                <li>Cash-crop and dairy farmers cannot track statements remotely, and deposit collection is still a manual, in-person process.</li>
                <li>Business members have no access to emergency or cheaper mobile loans, and no way to pay for goods or services directly from their Sacco account.</li>
                <li>Zero digital awareness of the product among target members; no structured campaign infrastructure to drive sign-up or retention.</li>
              </ul>
              <span className="three-cta">Read the full diagnosis →</span>
            </ModalTrigger>

            <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
              <div className="three-num">B</div>
              <h3 className="three-h">Why It Matters</h3>
              <ul className="three-list">
                <li>Kenya's SACCO sector has named fintech collaboration its top strategic priority for 2026 — Saccos that don't modernise lose members to those that do.</li>
                <li>SACCO agent-network digital transactions grew 14%+ in the past year alone; branch-only Saccos are already losing share to mobile-first cooperatives.</li>
                <li>Fortune's own marketing objectives — improve usage, grow revenue, cut in-branch traffic — only land if members actually adopt and trust the app, not just have access to it.</li>
                <li>Women, youth, and smallholder farmers are Fortune's fastest-growing and most branch-dependent segments — losing them to a mobile-first competitor is the costliest failure mode.</li>
              </ul>
              <span className="three-cta">See the impact case →</span>
            </ModalTrigger>

            <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
              <div className="three-num">C</div>
              <h3 className="three-h">Validation Plan</h3>
              <ul className="three-list">
                <li>Track sign-up conversion, feature adoption, and reduction in in-branch traffic — Fortune's own stated marketing objectives — on a monthly KPI review with the Sacco.</li>
                <li>Field validation with cash-crop, dairy farmer, and business-member cohorts across branches in Kirinyaga County, Fortune's core base.</li>
                <li>Sign-up training completion rate as a leading indicator, per the Value Proposition's "train customers how to interact with features."</li>
                <li>Refer-and-earn and airtime bonus uptake tracked against the branch-traffic reduction goal.</li>
              </ul>
              <span className="three-cta">See the test plan →</span>
            </ModalTrigger>
          </div>
        </section>

        {/* Users & Devices  */}
        <section className="proj-section" id="users-devices">
          <h3 className="ps-title">Users &amp; Devices</h3>
          <p className="ps-sub">Four touchpoints, five member segments — mapped directly from Fortune's customer base and the products in its Value Proposition.</p>

          <div className="users-grid">
            <DeviceChipsProvider copy={DEVICE_COPY} defaultDevice="branch">
              <div className="ud-block">
                <div className="ud-block-h">Devices &amp; Channels</div>
                <div className="device-chips">
                  <DeviceChip device="branch" className="dchip">
                    <div className="dchip-ico">🏛</div>
                    <div className="dchip-l">Physical<br />Branch</div>
                  </DeviceChip>
                  <DeviceChip device="app" className="dchip">
                    <div className="dchip-ico">📱</div>
                    <div className="dchip-l">Mobile<br />App</div>
                  </DeviceChip>
                  <DeviceChip device="ussd" className="dchip">
                    <div className="dchip-ico">⌨</div>
                    <div className="dchip-l">USSD<br />Fallback</div>
                  </DeviceChip>
                  <DeviceChip device="agents" className="dchip">
                    <div className="dchip-ico">🤝</div>
                    <div className="dchip-l">Agents &amp;<br />Fintech Partners</div>
                  </DeviceChip>
                  <DeviceChip device="merchants" className="dchip">
                    <div className="dchip-ico">🛒</div>
                    <div className="dchip-l">Merchant<br />Biller Codes</div>
                  </DeviceChip>
                </div>
                <DeviceReadout />
              </div>
            </DeviceChipsProvider>
            <div className="ud-block">
              <div className="ud-block-h">Target Users</div>
              <div className="user-list">
                <ModalTrigger modalKey="m-msmes" as="button" className="user-row clickable">
                  <span className="user-num">01</span>
                  <span className="user-name">Cash Crop &amp; Dairy Farmers</span>
                  <span className="user-tag">Primary</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-old" as="button" className="user-row clickable">
                  <span className="user-num">02</span>
                  <span className="user-name">Business People</span>
                  <span className="user-tag">Core</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-young" as="button" className="user-row clickable">
                  <span className="user-num">03</span>
                  <span className="user-name">Youth &amp; Women</span>
                  <span className="user-tag">Growth</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-farmers" as="button" className="user-row clickable">
                  <span className="user-num">04</span>
                  <span className="user-name">Corporate Customers</span>
                  <span className="user-tag">Retention</span>
                </ModalTrigger>
                <ModalTrigger modalKey="m-partners" as="button" className="user-row clickable">
                  <span className="user-num">05</span>
                  <span className="user-name">Local Fintech &amp; Agent Partners</span>
                  <span className="user-tag">Ecosystem</span>
                </ModalTrigger>
              </div>
            </div>
          </div>

          <div className="metrics-bar">
            <div className="mb-label">Outcome metrics we track</div>
            <div className="mb-pills">
              <span className="metric-chip"><span className="mc-n">NPS</span><span className="mc-l">Net Promoter Score</span></span>
              <span className="metric-chip"><span className="mc-n">CR</span><span className="mc-l">Conversion Rate</span></span>
              <span className="metric-chip"><span className="mc-n">SUS</span><span className="mc-l">System Usability Scale</span></span>
              <span className="metric-chip"><span className="mc-n">D7</span><span className="mc-l">Day-7 Retention</span></span>
            </div>
          </div>
        </section>

        {/* 3 · RESULTS & SOLUTION (preview) */}
        <section className="proj-section" id="results-preview">
          <div className="kicker"><span className="kicker-num">03</span><h2 className="kicker-title">Results &amp; Solution</h2></div>
          <p className="ps-sub">The headline outcomes — primary KPIs followed by the secondary lifts they pulled forward.</p>

          <div className="results-split">
            <div className="results-side">
              <div className="rs-h">Primary</div>
              <div className="impact-strip primary-strip">
                <div className="istat lift"><div className="n">+35%</div><div className="l">New User Login</div></div>
                <div className="istat neg lift"><div className="n">-22%</div><div className="l">Drop Offs</div></div>
                <div className="istat lift"><div className="n">+31%</div><div className="l">Completed Transactions</div></div>
                <div className="istat lift"><div className="n">+42%</div><div className="l">NPS Lift</div></div>
              </div>
            </div>
            <div className="results-side">
              <div className="rs-h">Secondary</div>
              <div className="impact-strip secondary-strip">
                <div className="istat lift"><div className="n">+28%</div><div className="l">User Reactivation</div></div>
                <div className="istat lift"><div className="n">+80%</div><div className="l">Dev Handoff</div></div>
                <div className="istat lift"><div className="n">+30%</div><div className="l">Product Visibility</div></div>
                <div className="istat lift"><div className="n">+25%</div><div className="l">Feature Acceptance</div></div>
              </div>
            </div>
          </div>

          {/* Solution pillars - clickable accordion-style */}
          <h3 className="ps-title" style={{ marginTop: '36px' }}>Five Solution Pillars</h3>
          <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
          <div className="pillars">
            <details className="pillar" open>
              <summary>
                <span className="pillar-num">01</span>
                <span className="pillar-h">Reduce branch dependency &amp; drive sign-ups</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col">
                  <div className="pillar-col-h">Incentives</div>
                  <p>Cheaper transaction costs compared to competitors, per Fortune's marketing strategy of reduced or free transaction costs at set thresholds.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Refer &amp; Earn</div>
                  <p>Member-gets-member bonus program with airtime rewards — straight from the Value Proposition's bonus-program strategy.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Awards</div>
                  <p>Data driven awards on users with highest rankings on various KPI levels. E.g. the member with the highest transaction rate and sum.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Promotional Messaging</div>
                  <p>Push sign-ups and create feature awareness via SMS and in-app promotion — Fortune's stated first marketing objective.</p>
                </div>
              </div>
            </details>

            <details className="pillar">
              <summary>
                <span className="pillar-num">02</span>
                <span className="pillar-h">Restructure loan &amp; savings products</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col">
                  <div className="pillar-col-h">Cheap mobile loans</div>
                  <p>Access to quick, affordable mobile loans and repayment of other loan products — directly from the Value Proposition's solution list.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Emergency &amp; seasonal credit</div>
                  <p>Emergency business loans and cheaper credit for animal-feed and input costs, tuned to farmer and business-member cash cycles.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Savings &amp; shares visibility</div>
                  <p>Real-time visibility into savings, membership shares, and investment shares — the top request in Fortune's customer frustrations research.</p>
                </div>
              </div>
            </details>

            <details className="pillar">
              <summary>
                <span className="pillar-num">03</span>
                <span className="pillar-h">Marketing Strategy &amp; Campaigns</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col">
                  <div className="pillar-col-h">Marketing</div>
                  <p>Curated Campaigns across online and offline channels addressing key onsite operations.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Localization</div>
                  <p>Localized experiences drive higher conversion, lower acquisition costs, and deeper user trust.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Agency &amp; Fintech Bridge</div>
                  <p>Agent-assisted sign-up and USSD fallback for the top flows, in step with SACCOs naming fintech and agency-banking partnerships their top 2026 priority.</p>
                </div>
              </div>
            </details>

            <details className="pillar">
              <summary>
                <span className="pillar-num">04</span>
                <span className="pillar-h">User support &amp; assistance</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col">
                  <div className="pillar-col-h">Fortune Staff Training</div>
                  <p>Improve Service Design via the Admin Dashboard and eCash App for ticket tracking.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Sign-up Training</div>
                  <p>Members are trained thoroughly during sign-up on app features — the Value Proposition's second marketing-strategy point — not left to self-discover.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Data Driven</div>
                  <p>Funnel-segmented CRM (lapsed, active, churning) with weekly campaign reviews, and prompt handling of customer requests.</p>
                </div>
              </div>
            </details>

            <details className="pillar">
              <summary>
                <span className="pillar-num">05</span>
                <span className="pillar-h">Accessibility &amp; inclusivity</span>
                <span className="pillar-toggle">+</span>
              </summary>
              <div className="pillar-body">
                <div className="pillar-col">
                  <div className="pillar-col-h">Icon + Text always</div>
                  <p>No icon stands alone. WCAG-AA contrast across light + dark, 44px hit targets.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">"How to" posters</div>
                  <p>A5 visual posters and 30-second video micro-tutorials, distributed via agents.</p>
                </div>
                <div className="pillar-col">
                  <div className="pillar-col-h">Gender-inclusive copy</div>
                  <p>IDEO-aligned tone testing with female traders; copy register adjusted in v2.</p>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* 4 · PROCESS */}
        <section className="proj-section" id="process">
          <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Process</h2></div>
          <p className="ps-sub">Six phases, fourteen weeks. Move the dot along the rail to jump to any phase.</p>
          <ProcessRail
            steps={[
              { line1: 'Research', line2: '& Analysis' },
              { line1: 'Define', line2: '& Ideate' },
              { line1: 'Wireframe', line2: '& Prototype' },
              { line1: 'Usability', line2: '& A/B' },
              { line1: 'Iteration', line2: '& Design System' },
              { line1: 'Dev', line2: '& Testing' },
            ]}
            scrollTargets={['Research & Analysis', 'Define & Ideate', 'Wireframing & Prototyping', 'Usability Testing', 'Design System', 'Design Comparison']}
          />
        </section>

        {/* 4.1 Research & Analysis */}
        <section className="proj-section">
          <h3 className="ps-title">Research &amp; Analysis</h3>
          <p className="ps-sub">Funnel analytics, branch shadowing, and IDEO-aligned gender-inclusive interviews across SME owners and smallholder farmers in three counties.</p>
          <div className="research-grid">
            <ModalTrigger modalKey="m-survey" className="rcard clickable">
              <div className="rcard-eyebrow">Survey · 412 respondents</div>
              <div className="rcard-title">"I queue 2&nbsp;hrs every month"</div>
              <div className="rcard-bars">
                <div className="bar"><div className="bar-fill" style={{ width: '78%' }}></div><span>78%</span></div>
                <div className="bar"><div className="bar-fill" style={{ width: '54%' }}></div><span>54%</span></div>
                <div className="bar"><div className="bar-fill" style={{ width: '31%' }}></div><span>31%</span></div>
              </div>
              <div className="rcard-foot">Branch · USSD · Friend</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-funnel" className="rcard clickable">
              <div className="rcard-eyebrow">Funnel</div>
              <div className="rcard-title">Account → First txn</div>
              <svg viewBox="0 0 200 110" className="funnel-svg">
                <rect x="0" y="0" width="200" height="20" rx="3" fill="#1f4d3f"/>
                <text x="100" y="14" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Plus Jakarta Sans">Visit 100%</text>
                <rect x="20" y="28" width="160" height="20" rx="3" fill="#2e6b58"/>
                <text x="100" y="42" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Plus Jakarta Sans">Signup 64%</text>
                <rect x="44" y="56" width="112" height="20" rx="3" fill="#5b9a85"/>
                <text x="100" y="70" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Plus Jakarta Sans">KYC 38%</text>
                <rect x="68" y="84" width="64" height="20" rx="3" fill="#e5b33a"/>
                <text x="100" y="98" textAnchor="middle" fill="#163a30" fontSize="11" fontFamily="Plus Jakarta Sans">Txn 22%</text>
              </svg>
            </ModalTrigger>
            <ModalTrigger modalKey="m-personas" className="rcard clickable">
              <div className="rcard-eyebrow">Persona</div>
              <div className="persona">
                <div className="persona-avatar">JW</div>
                <div>
                  <div className="persona-name">Jane W.</div>
                  <div className="persona-meta">Trader · Nairobi · 34</div>
                </div>
              </div>
              <div className="rcard-quote">"Branch visits eat my market hours."</div>
              <div className="persona-traits">
                <span className="trait">Mobile-first</span>
                <span className="trait">USSD heavy</span>
                <span className="trait">Trust-driven</span>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-heatmap" className="rcard clickable">
              <div className="rcard-eyebrow">Heatmap · Web</div>
              <div className="heat-grid">
                <div className="heat" style={{ background: '#fef0d2' }}></div>
                <div className="heat" style={{ background: '#f7c569' }}></div>
                <div className="heat" style={{ background: '#e5b33a' }}></div>
                <div className="heat" style={{ background: '#fef0d2' }}></div>
                <div className="heat" style={{ background: '#cf9b20' }}></div>
                <div className="heat" style={{ background: '#e5b33a' }}></div>
                <div className="heat" style={{ background: '#f7c569' }}></div>
                <div className="heat" style={{ background: '#fef0d2' }}></div>
                <div className="heat" style={{ background: '#fef0d2' }}></div>
              </div>
              <div className="rcard-foot">Loan CTA · Account · Help</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-audit" className="rcard clickable">
              <div className="rcard-eyebrow">Competitor Audit</div>
              <table className="aud-table">
                <tbody>
                <tr><td>Mobile App</td><td>✕</td><td className="ok">✓</td></tr>
                <tr><td>USSD</td><td className="ok">✓</td><td className="ok">✓</td></tr>
                <tr><td>Loans In-App</td><td>✕</td><td>✕</td></tr>
                <tr><td>Self KYC</td><td>✕</td><td className="ok">✓</td></tr>
                </tbody>
              </table>
              <div className="rcard-foot">Sacco · Bank A · Fintech B</div>
            </ModalTrigger>
          </div>
        </section>

        {/* 4.2 Define & Ideate + IA / Flows */}
        <section className="proj-section">
          <h3 className="ps-title">Define &amp; Ideate · IA, Userflows &amp; Personas</h3>
          <p className="ps-sub">Mapped end-to-end flows, simplified primary task structures from 9 → 3 steps, and aligned IA against five mental models surfaced in research.</p>
          <div className="iaflow-grid">
            <ModalTrigger modalKey="m-sitemap" className="iacard tall clickable">
              <div className="rcard-eyebrow">Sitemap</div>
              <div className="sitemap">
                <div className="node root">Home</div>
                <div className="branch">
                  <div className="node">Send</div>
                  <div className="node">Save</div>
                  <div className="node">Loan</div>
                  <div className="node">Pay</div>
                </div>
                <div className="branch sub">
                  <div className="node sm">P2P</div>
                  <div className="node sm">Bills</div>
                  <div className="node sm">Goods</div>
                  <div className="node sm">Cards</div>
                </div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-flow" className="iacard tall clickable">
              <div className="rcard-eyebrow">Userflow · Send Money</div>
              <div className="flow">
                <div className="flow-step">Open App</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">Tap Send</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step diamond">Recipient?</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">Amount</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">Confirm</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step success">Receipt</div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-p-sme" className="iacard clickable">
              <div className="rcard-eyebrow">Persona · MSME</div>
              <div className="persona">
                <div className="persona-avatar">PM</div>
                <div><div className="persona-name">Peter M.</div><div className="persona-meta">Shop owner · 41</div></div>
              </div>
              <div className="rcard-quote">"Float visibility makes or breaks my day."</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-p-farmer" className="iacard clickable">
              <div className="rcard-eyebrow">Persona · Farmer</div>
              <div className="persona">
                <div className="persona-avatar">RM</div>
                <div><div className="persona-name">Ruth M.</div><div className="persona-meta">Smallholder · 52</div></div>
              </div>
              <div className="rcard-quote">"I need loans on the seed I can grow."</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-p-staff" className="iacard clickable">
              <div className="rcard-eyebrow">Persona · Staff</div>
              <div className="persona">
                <div className="persona-avatar">AK</div>
                <div><div className="persona-name">Aisha K.</div><div className="persona-meta">Branch Officer · 28</div></div>
              </div>
              <div className="rcard-quote">"My queue should not become my workload."</div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-p-crm" className="iacard clickable">
              <div className="rcard-eyebrow">Persona · CRM</div>
              <div className="persona">
                <div className="persona-avatar">DN</div>
                <div><div className="persona-name">David N.</div><div className="persona-meta">CRM Admin · 35</div></div>
              </div>
              <div className="rcard-quote">"Ticket SLAs need a single dashboard."</div>
            </ModalTrigger>
            <div className="iacard">
              <div className="rcard-eyebrow">Userflow · Onboard</div>
              <div className="flow vertical">
                <div className="flow-step">Phone +</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">OTP</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step">ID Capture</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step success">Account</div>
              </div>
            </div>
            <ModalTrigger modalKey="m-journey" className="iacard clickable">
              <div className="rcard-eyebrow">Journey Map</div>
              <svg viewBox="0 0 200 100" className="journey-svg">
                <polyline points="0,80 30,55 60,70 100,30 140,50 180,20 200,35" stroke="#1f4d3f" strokeWidth="2" fill="none"/>
                <circle cx="30" cy="55" r="3" fill="#e5b33a"/>
                <circle cx="100" cy="30" r="3" fill="#e5b33a"/>
                <circle cx="180" cy="20" r="3" fill="#e5b33a"/>
                <text x="30" y="95" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#7a7a7a" textAnchor="middle">Aware</text>
                <text x="100" y="95" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#7a7a7a" textAnchor="middle">Onboard</text>
                <text x="180" y="95" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#7a7a7a" textAnchor="middle">Loyal</text>
              </svg>
              <div className="rcard-foot">Emotional arc · 6 phases</div>
            </ModalTrigger>
          </div>
        </section>

        {/* 4.3 Wireframing & Prototyping (Lo-Fi + Hi-Fi) */}
        <section className="proj-section">
          <h3 className="ps-title">Wireframing &amp; Prototyping (Lo-Fi → Hi-Fi)</h3>
          <p className="ps-sub">From greyboxed flows tested in week 2 to a converged Hi-Fi system at week 6, validated against the +35% New User Login KPI.</p>
          <div className="wireframe-grid">
            <ModalTrigger modalKey="m-lofi" className="wf-card clickable">
              <div className="wf-label">v0 Lo-Fi</div>
              <div className="phone-frame-inline small">
                <div className="ph-notch"></div>
                <div className="ph-screen lofi">
                  <div className="lo-row"></div>
                  <div className="lo-row tall"></div>
                  <div className="lo-row"></div>
                  <div className="lo-grid">
                    <div className="lo-box"></div><div className="lo-box"></div>
                    <div className="lo-box"></div><div className="lo-box"></div>
                  </div>
                  <div className="lo-row"></div>
                  <div className="lo-row"></div>
                  <div className="lo-row"></div>
                </div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-hifi-v0" className="wf-card clickable">
              <div className="wf-label">v0 Hi-Fi</div>
              <div className="phone-frame-inline small">
                <div className="ph-notch"></div>
                <div className="ph-screen hifi-v0">
                  <div className="hf-top"><div><div className="hf-greet">Good morning</div><div className="hf-greet-bold">Joseph</div></div><div className="hf-logo">F</div></div>
                  <div className="hf-balance"><div>Lengo Savings</div><div className="hf-amt">KES 250,400</div></div>
                  <div className="hf-tabs"><span className="on">View</span><span>Deposit</span><span>Mini</span><span>Full</span></div>
                  <div className="hf-grid"><div></div><div></div><div></div><div></div></div>
                </div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-hifi-v1" className="wf-card clickable">
              <div className="wf-label">v1 Hi-Fi</div>
              <div className="phone-frame-inline small">
                <div className="ph-notch"></div>
                <div className="ph-screen hifi-v1">
                  <div className="hf-top"><div><div className="hf-greet">Hujambo,</div><div className="hf-greet-bold">Wanjiru</div></div><div className="hf-logo green">F</div></div>
                  <div className="hf-balance green"><div>Lengo · Active</div><div className="hf-amt">KES 1,250,400</div></div>
                  <div className="hf-actions-row"><div className="hf-act">Send</div><div className="hf-act">Save</div><div className="hf-act">Loan</div><div className="hf-act">Pay</div></div>
                  <div className="hf-list">
                    <div className="hf-li"><span></span><div></div></div>
                    <div className="hf-li"><span></span><div></div></div>
                    <div className="hf-li"><span></span><div></div></div>
                  </div>
                </div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-hifi-v2" className="wf-card clickable">
              <div className="wf-label">v2 Hi-Fi <span className="ship-chip">Shipped</span></div>
              <div className="phone-frame-inline small">
                <div className="ph-notch"></div>
                <div className="ph-screen hifi-v2">
                  <div className="hf-top"><div><div className="hf-greet">Welcome back</div><div className="hf-greet-bold">Wanjiru</div></div><div className="hf-logo green">F</div></div>
                  <div className="hf-balance hero-green">
                    <div className="dim">Lengo Savings · ****26</div>
                    <div className="hf-amt big">KES 1,250,400</div>
                    <div className="hf-trend">▲ +KES 12,800 this week</div>
                  </div>
                  <div className="hf-grid four chip">
                    <div className="chip-tile"><div className="c-ico c1"></div>Send</div>
                    <div className="chip-tile"><div className="c-ico c2"></div>Save</div>
                    <div className="chip-tile"><div className="c-ico c3"></div>Loan</div>
                    <div className="chip-tile"><div className="c-ico c4"></div>Pay</div>
                  </div>
                </div>
              </div>
            </ModalTrigger>
          </div>

          <div className="wf-pair">
            <div className="wf-card wide">
              <div className="wf-label">Fortune eCash Website</div>
              <div className="browser-frame">
                <div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">fortunesacco.co.ke</div></div>
                <div className="bf-body site">
                  <div className="site-nav">
                    <div className="site-logo">F · Fortune</div>
                    <div className="site-links"><span>Home</span><span>Products</span><span>Loans</span><span>About</span><span className="cta">Open Account</span></div>
                  </div>
                  <div className="site-hero">
                    <div>
                      <div className="site-eyebrow">MWELEKEO · 2026</div>
                      <div className="site-h1">Banking that<br />moves with you.</div>
                      <div className="site-sub">Open a Lengo Savings Account in three steps. Save, send, borrow from any phone.</div>
                      <div className="site-ctas"><span className="cta">Get the App</span><span className="cta ghost">Talk to us</span></div>
                    </div>
                    <div className="site-hero-art">
                      <div className="phone-frame-inline tiny"><div className="ph-notch"></div><div className="ph-screen tiny-screen"></div></div>
                    </div>
                  </div>
                  <div className="site-feats">
                    <div className="site-feat"><div className="ff"></div><span>P2P Transfers</span></div>
                    <div className="site-feat"><div className="ff"></div><span>Instant Loans</span></div>
                    <div className="site-feat"><div className="ff"></div><span>Savings Goals</span></div>
                    <div className="site-feat"><div className="ff"></div><span>Branch Lite</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wf-card wide">
              <div className="wf-label">Admin Dashboard</div>
              <div className="browser-frame">
                <div className="bf-bar"><span></span><span></span><span></span><div className="bf-url">admin.fortunesacco.co.ke</div></div>
                <div className="bf-body dash">
                  <aside className="dash-side">
                    <div className="dash-logo">F</div>
                    <div className="dash-nav"><span className="on">Overview</span><span>Tickets</span><span>Members</span><span>Loans</span><span>Reports</span></div>
                  </aside>
                  <main className="dash-main">
                    <div className="dash-cards">
                      <div className="dash-stat"><div className="ds-l">Open Tickets</div><div className="ds-n">214</div><div className="ds-d up">+12%</div></div>
                      <div className="dash-stat"><div className="ds-l">Approvals</div><div className="ds-n">88</div><div className="ds-d up">+4%</div></div>
                      <div className="dash-stat"><div className="ds-l">SLA</div><div className="ds-n">94%</div><div className="ds-d down">-2%</div></div>
                    </div>
                    <div className="dash-chart">
                      <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                        <polyline points="0,60 30,50 60,55 90,30 120,40 150,20 180,30 210,15 240,25 270,12 300,20" stroke="#1f4d3f" strokeWidth="2" fill="none"/>
                        <polyline points="0,70 30,65 60,60 90,55 120,52 150,45 180,42 210,38 240,32 270,30 300,25" stroke="#e5b33a" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                      </svg>
                    </div>
                    <div className="dash-table">
                      <div className="dt-row dt-head"><span>Ticket</span><span>Member</span><span>Status</span><span>SLA</span></div>
                      <div className="dt-row"><span>#FT-2841</span><span>J. Wanjiru</span><span className="dt-on">Open</span><span>1h 42m</span></div>
                      <div className="dt-row"><span>#FT-2839</span><span>P. Maina</span><span className="dt-resolved">Resolved</span><span>—</span></div>
                      <div className="dt-row"><span>#FT-2836</span><span>R. Mwende</span><span className="dt-pending">Pending</span><span>3h 12m</span></div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.4 Usability & A/B testing */}
        <section className="proj-section">
          <h3 className="ps-title">Usability Testing &amp; A/B Tests</h3>
          <p className="ps-sub">5 task batteries × 3 versions, with SUS scoring and quantitative validation. v2 carried into production with a System Usability Scale of 87/100.</p>
          <div className="ab-table-wrap">
            <table className="ab-table">
              <thead>
                <tr><th></th><th>test 1</th><th>test 1</th><th>test 1</th><th>test 2</th><th>test 3</th><th>test 4</th><th>test 5</th></tr>
                <tr><th></th><th>Onboarding</th><th>Stakeholders<br />(KPIs)</th><th>Product<br />(KPIs)</th><th>Marketing<br />Alignment</th><th>Cross<br />Functional</th><th>Cross<br />Functional</th><th>Cross<br />Functional</th></tr>
              </thead>
              <tbody>
                <tr><td className="row-label"><span className="vchip">v0</span></td><td className="score">4/5</td><td className="score">4/5</td><td className="score">4/5</td><td className="score">4/5</td><td className="score">4/5</td><td className="score">4/5</td><td className="score">4/5</td></tr>
                <tr><td className="row-label"><span className="vchip">v1</span></td><td colSpan="7" className="empty"></td></tr>
                <tr><td className="row-label"><span className="vchip">v2</span></td><td colSpan="7" className="empty"></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4.5 Design System */}
        <section className="proj-section" id="design-system">
          <h3 className="ps-title">Design System</h3>
          <p className="ps-sub">A WCAG-aligned token system across 7 facets — switch tabs to inspect each one.</p>
          <TabGroup
            id="dsTabs"
            tabClassName="ds-tab"
            paneClassName="ds-pane"
            tabs={[
              { id: 'logo', label: 'Logo Variations' },
              { id: 'color', label: 'Color Palette · Light + Dark' },
              { id: 'type', label: 'Typography' },
              { id: 'spacing', label: 'Spacing & Layout' },
              { id: 'icons', label: 'Iconography' },
              { id: 'comp', label: 'Buttons & Nav Components' },
              { id: 'posters', label: 'Posters' },
            ]}
          >
            {/* Logo */}
            <TabGroup.Pane id="logo">
              <div className="ds-grid">
                <div className="ds-block ds-logo">
                  <div className="logo-large">F</div>
                  <div className="ds-meta">Primary mark · Green on cream</div>
                </div>
                <div className="ds-block ds-logo dark">
                  <div className="logo-large inv">F</div>
                  <div className="ds-meta dim">Reverse · Gold on green</div>
                </div>
                <div className="ds-block ds-logo">
                  <div className="logo-mono">F</div>
                  <div className="ds-meta">Mono · Single-color print</div>
                </div>
                <div className="ds-block ds-logo">
                  <div className="logo-wordmark"><span className="logo-mark-sm">F</span>FORTUNE</div>
                  <div className="ds-meta">Wordmark · Horizontal lockup</div>
                </div>
              </div>
            </TabGroup.Pane>

            {/* Color */}
            <TabGroup.Pane id="color">
              <ThemeToggle>
                {(isDark) => (
                  <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
                    <div className="cs cs-1"><div className="cs-swatch"></div><div className="cs-meta"><div className="cs-name">Sacco Green</div><div className="cs-hex">#1F4D3F</div></div></div>
                    <div className="cs cs-2"><div className="cs-swatch"></div><div className="cs-meta"><div className="cs-name">Mwelekeo Gold</div><div className="cs-hex">#E5B33A</div></div></div>
                    <div className="cs cs-3"><div className="cs-swatch"></div><div className="cs-meta"><div className="cs-name">Cream</div><div className="cs-hex">#F6F1E3</div></div></div>
                    <div className="cs cs-4"><div className="cs-swatch"></div><div className="cs-meta"><div className="cs-name">Ink</div><div className="cs-hex">#161616</div></div></div>
                    <div className="cs cs-5"><div className="cs-swatch"></div><div className="cs-meta"><div className="cs-name">Success</div><div className="cs-hex">#2BB74A</div></div></div>
                    <div className="cs cs-6"><div className="cs-swatch"></div><div className="cs-meta"><div className="cs-name">Danger</div><div className="cs-hex">#B04141</div></div></div>
                  </div>
                )}
              </ThemeToggle>
            </TabGroup.Pane>

            {/* Typography */}
            <TabGroup.Pane id="type">
              <div className="ds-grid">
                <div className="ds-block">
                  <div className="type-spec"><span className="serif" style={{ fontSize: '48px', lineHeight: '1' }}>Aa</span>
                    <div className="type-meta-block"><strong>Source Serif 4</strong><div className="dim">Display · Headings</div><div className="dim">600 / 700</div></div>
                  </div>
                  <div className="type-scale">
                    <span style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 32</span>
                    <span style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 24</span>
                    <span style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 20</span>
                  </div>
                </div>
                <div className="ds-block">
                  <div className="type-spec"><span style={{ fontSize: '48px', fontWeight: '600' }}>Aa</span>
                    <div className="type-meta-block"><strong>Plus Jakarta Sans</strong><div className="dim">Body · UI</div><div className="dim">400 / 500 / 600</div></div>
                  </div>
                  <div className="type-scale">
                    <span style={{ fontSize: '16px' }}>Body 16 · The quick brown fox</span>
                    <span style={{ fontSize: '14px' }}>Body 14 · The quick brown fox</span>
                    <span style={{ fontSize: '12px' }}>Body 12 · The quick brown fox</span>
                  </div>
                </div>
              </div>
            </TabGroup.Pane>

            {/* Spacing */}
            <TabGroup.Pane id="spacing">
              <div className="ds-grid spacing-grid">
                <div className="ds-block">
                  <div className="ds-meta">Spacing scale · 4-point grid</div>
                  <div className="space-stack">
                    <div className="sp" style={{ width: '4px' }}><span>4</span></div>
                    <div className="sp" style={{ width: '8px' }}><span>8</span></div>
                    <div className="sp" style={{ width: '12px' }}><span>12</span></div>
                    <div className="sp" style={{ width: '16px' }}><span>16</span></div>
                    <div className="sp" style={{ width: '24px' }}><span>24</span></div>
                    <div className="sp" style={{ width: '32px' }}><span>32</span></div>
                    <div className="sp" style={{ width: '48px' }}><span>48</span></div>
                    <div className="sp" style={{ width: '64px' }}><span>64</span></div>
                  </div>
                </div>
                <div className="ds-block">
                  <div className="ds-meta">Radius scale</div>
                  <div className="radius-row">
                    <div className="rad" style={{ borderRadius: '4px' }}><span>4</span></div>
                    <div className="rad" style={{ borderRadius: '8px' }}><span>8</span></div>
                    <div className="rad" style={{ borderRadius: '14px' }}><span>14</span></div>
                    <div className="rad" style={{ borderRadius: '22px' }}><span>22</span></div>
                    <div className="rad" style={{ borderRadius: '999px' }}><span>999</span></div>
                  </div>
                </div>
              </div>
            </TabGroup.Pane>

            {/* Icons */}
            <TabGroup.Pane id="icons">
              <div className="icon-grid">
                <div className="ic"><div className="ic-svg">📱</div><span>Send</span></div>
                <div className="ic"><div className="ic-svg">💰</div><span>Save</span></div>
                <div className="ic"><div className="ic-svg">📑</div><span>Statement</span></div>
                <div className="ic"><div className="ic-svg">🛒</div><span>Pay Goods</span></div>
                <div className="ic"><div className="ic-svg">📞</div><span>Airtime</span></div>
                <div className="ic"><div className="ic-svg">🪙</div><span>Loan</span></div>
                <div className="ic"><div className="ic-svg">🔒</div><span>Secure</span></div>
                <div className="ic"><div className="ic-svg">👤</div><span>Profile</span></div>
              </div>
              <p className="ps-sub" style={{ marginTop: '14px' }}>Stroke 1.5 px · 24 px grid · always paired with text label for accessibility.</p>
            </TabGroup.Pane>

            {/* Components */}
            <TabGroup.Pane id="comp">
              <div className="ds-grid">
                <div className="ds-block ds-comp">
                  <div className="ds-meta">Buttons</div>
                  <button className="ds-btn">Primary</button>
                  <button className="ds-btn green">Secondary</button>
                  <button className="ds-btn ghost">Ghost</button>
                  <button className="ds-btn ghost" disabled style={{ opacity: '.5', cursor: 'not-allowed' }}>Disabled</button>
                </div>
                <div className="ds-block ds-comp">
                  <div className="ds-meta">Inputs &amp; chips</div>
                  <div className="ds-input"><span>Phone +254 ___</span></div>
                  <div className="ds-input"><span>KES amount</span></div>
                  <div className="ds-chip">Lengo · ****26</div>
                  <div className="ds-chip dark">Active · NPS 87</div>
                </div>
                <div className="ds-block ds-comp">
                  <div className="ds-meta">Nav</div>
                  <div className="ds-navbar"><span className="on">Home</span><span>Send</span><span>Save</span><span>More</span></div>
                  <div className="ds-tabbar">
                    <span className="active">🏠<br />Home</span>
                    <span>↗<br />Send</span>
                    <span>💰<br />Save</span>
                    <span>≡<br />More</span>
                  </div>
                </div>
                <div className="ds-block ds-comp">
                  <div className="ds-meta">Toasts</div>
                  <div className="ds-toast success">✓ Transfer complete</div>
                  <div className="ds-toast danger">! Insufficient funds</div>
                  <div className="ds-toast info">i CRB consent required</div>
                </div>
              </div>
            </TabGroup.Pane>

            {/* Posters */}
            <TabGroup.Pane id="posters">
              <div className="poster-grid">
                <div className="poster p1">
                  <div className="p-eyebrow">MWELEKEO</div>
                  <div className="p-h">Save 5% p.a.<br />on Lengo.</div>
                  <div className="p-foot">fortunesacco.co.ke</div>
                </div>
                <div className="poster p2">
                  <div className="p-eyebrow">LOAN</div>
                  <div className="p-h">Up to<br />KES 250,000.</div>
                  <div className="p-foot">In 3 steps.</div>
                </div>
                <div className="poster p3">
                  <div className="p-eyebrow">USSD</div>
                  <div className="p-h big">*225#</div>
                  <div className="p-foot">From any phone.</div>
                </div>
              </div>
            </TabGroup.Pane>
          </TabGroup>
        </section>

        {/* 4.6 Design Comparison · Before / After / Proposed (toggle) */}
        <section className="proj-section">
          <h3 className="ps-title">Design Comparison · Before, After &amp; Proposed</h3>
          <p className="ps-sub">Slide through the same home screen across three points in time.</p>
          <BeforeAfterCompare
            frames={[
              { id: 'before', label: 'Before' },
              { id: 'after', label: 'After' },
              { id: 'proposed', label: 'Proposed (next)' },
            ]}
            defaultActive="before"
          >
            <BeforeAfterCompare.Frame id="before">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen lofi" style={{ background: '#fcfaf3' }}>
                  <div style={{ background: '#d8d3c5', height: '14px', borderRadius: '3px', marginBottom: '6px' }}></div>
                  <div style={{ background: '#d8d3c5', height: '36px', borderRadius: '6px', marginBottom: '6px' }}></div>
                  <div style={{ background: '#ede9de', height: '14px', borderRadius: '3px', marginBottom: '8px', width: '60%' }}></div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '6px', marginBottom: '6px' }}>
                    <div style={{ background: '#d8d3c5', aspectRatio: '1', borderRadius: '6px' }}></div>
                    <div style={{ background: '#d8d3c5', aspectRatio: '1', borderRadius: '6px' }}></div>
                  </div>
                  <div style={{ background: '#d8d3c5', height: '14px', borderRadius: '3px', marginBottom: '4px' }}></div>
                  <div style={{ background: '#d8d3c5', height: '14px', borderRadius: '3px', marginBottom: '4px' }}></div>
                </div>
              </div>
              <div className="cmp-info">
                <div className="cmp-tag">Pre-launch · Branch flow translated 1:1 to mobile</div>
                <ul className="cmp-list">
                  <li>9-step send-money flow.</li>
                  <li>No icon language — all-text menus.</li>
                  <li>SUS 41 / 100 in moderated testing.</li>
                </ul>
              </div>
            </BeforeAfterCompare.Frame>
            <BeforeAfterCompare.Frame id="after">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen hifi-v1">
                  <div className="hf-top"><div><div className="hf-greet">Hujambo,</div><div className="hf-greet-bold">Wanjiru</div></div><div className="hf-logo green">F</div></div>
                  <div className="hf-balance green"><div>Lengo · Active</div><div className="hf-amt">KES 1,250,400</div></div>
                  <div className="hf-actions-row"><div className="hf-act">Send</div><div className="hf-act">Save</div><div className="hf-act">Loan</div><div className="hf-act">Pay</div></div>
                  <div className="hf-list">
                    <div className="hf-li"><span></span><div></div></div>
                    <div className="hf-li"><span></span><div></div></div>
                    <div className="hf-li"><span></span><div></div></div>
                  </div>
                </div>
              </div>
              <div className="cmp-info">
                <div className="cmp-tag">Shipped · v2 Hi-Fi (Q1 2024)</div>
                <ul className="cmp-list">
                  <li>3-step send-money flow.</li>
                  <li>Icon + text components meet WCAG-AA.</li>
                  <li>SUS 87 / 100 · +35% New User Login.</li>
                </ul>
              </div>
            </BeforeAfterCompare.Frame>
            <BeforeAfterCompare.Frame id="proposed">
              <div className="phone-frame-inline">
                <div className="ph-notch"></div>
                <div className="ph-screen hifi-v2">
                  <div className="hf-top"><div><div className="hf-greet">Welcome back</div><div className="hf-greet-bold">Wanjiru</div></div><div className="hf-logo green">F</div></div>
                  <div className="hf-balance hero-green">
                    <div className="dim">Lengo · ****26</div>
                    <div className="hf-amt big">KES 1,250,400</div>
                    <div className="hf-trend">▲ +KES 12,800 this week · AI nudge</div>
                  </div>
                  <div className="hf-grid four chip">
                    <div className="chip-tile"><div className="c-ico c1"></div>Send</div>
                    <div className="chip-tile"><div className="c-ico c2"></div>Save</div>
                    <div className="chip-tile"><div className="c-ico c3"></div>Loan</div>
                    <div className="chip-tile"><div className="c-ico c4"></div>Pay</div>
                  </div>
                </div>
              </div>
              <div className="cmp-info">
                <div className="cmp-tag">Proposed · v3 (Q3 2026 roadmap)</div>
                <ul className="cmp-list">
                  <li>AI-driven nudges based on cashflow patterns.</li>
                  <li>Predictive lending offers surfaced in-line.</li>
                  <li>Dark-mode + low-bandwidth render mode.</li>
                </ul>
              </div>
            </BeforeAfterCompare.Frame>
          </BeforeAfterCompare>
        </section>

        {/* 4.7 Marketing Assets */}
        <section className="proj-section">
          <h3 className="ps-title">Marketing Assets (Online &amp; Offline)</h3>
          <p className="ps-sub">A funnel-data informed creative system: OOH at urban hubs for awareness, in-app and social retention banners, CRM templates for member outreach.</p>
          <div className="marketing-grid">
            <ModalTrigger modalKey="m-bill" className="ma-card billboard clickable">
              <div className="ma-tag">OOH · 6 × 3 m</div>
              <div className="bill">
                <div className="bill-eyebrow">MWELEKEO</div>
                <div className="bill-h">Take charge<br />of your future.</div>
                <div className="bill-cta">Open today · Dial *225#</div>
                <div className="bill-logo">F</div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-ig" className="ma-card social-card clickable">
              <div className="ma-tag">Instagram · 1:1</div>
              <div className="ig">
                <div className="ig-stamp">Mwelekeo</div>
                <div className="ig-h">Save like a pro.</div>
                <div className="ig-sub">5% p.a. on Lengo Savings</div>
                <div className="ig-foot">@fortunesacco</div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-story" className="ma-card social-card clickable">
              <div className="ma-tag">Story · 9:16</div>
              <div className="story">
                <div className="story-h">+35%<br />New User<br />Login</div>
                <div className="story-sub">Mwelekeo Lengo<br />Open in 3 steps.</div>
                <div className="story-cta">Swipe up</div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-banner" className="ma-card banner-card clickable">
              <div className="ma-tag">Web banner · 1200 × 300</div>
              <div className="webban">
                <div>
                  <div className="webban-h">Borrow up to KES 250,000.</div>
                  <div className="webban-sub">9.5% p.a. · 12 months · Instant.</div>
                </div>
                <div className="webban-cta">Get a Loan →</div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-flyer" className="ma-card flyer-card clickable">
              <div className="ma-tag">Branch flyer · A5</div>
              <div className="flyer">
                <div className="flyer-strip"></div>
                <div className="flyer-eyebrow">Fortune Sacco</div>
                <div className="flyer-h">Banking on the go.</div>
                <div className="flyer-list">
                  <div>✓ Open in 3 steps</div>
                  <div>✓ Send · Pay · Save</div>
                  <div>✓ Loans up to 250K</div>
                </div>
                <div className="flyer-foot">www.fortunesacco.co.ke</div>
              </div>
            </ModalTrigger>
            <ModalTrigger modalKey="m-sms" className="ma-card sms-card clickable">
              <div className="ma-tag">CRM · SMS &amp; Push</div>
              <div className="sms">
                <div className="msg in">Hi Wanjiru, your Lengo balance is KES 1,250,400. Tap to view → fsacco.co/lengo</div>
                <div className="msg out">Karibu Mwelekeo! Open in 3 steps.</div>
                <div className="msg in">Pre-approved: KES 250,000 loan at 9.5% p.a. Accept by 18:00.</div>
              </div>
            </ModalTrigger>
          </div>
        </section>

        {/* 5 · CONCLUSION / OUTCOME */}
        <section className="proj-section" id="outcome">
          <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
          <p className="ps-sub">Success metrics 90 days post-launch — measured against the validation plan defined in Section 02.</p>
          <div className="outcome-grid">
            <div className="oc-card">
              <div className="oc-n">87</div>
              <div className="oc-l">SUS Score</div>
              <div className="oc-d">Industry "Best" band</div>
            </div>
            <div className="oc-card">
              <div className="oc-n">+42</div>
              <div className="oc-l">NPS Lift (pts)</div>
              <div className="oc-d">Within target segment</div>
            </div>
            <div className="oc-card">
              <div className="oc-n">3</div>
              <div className="oc-l">Surfaces shipped</div>
              <div className="oc-d">App · Web · Admin</div>
            </div>
            <div className="oc-card">
              <div className="oc-n">14w</div>
              <div className="oc-l">Research → Launch</div>
              <div className="oc-d">2 wks under runway</div>
            </div>
          </div>
        </section>

        {/* 6 · REFLECTION & LEARNINGS */}
        <section className="proj-section" id="reflection">
          <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Reflection &amp; Learnings</h2></div>
          <ul className="ps-list">
            <li>Designing for trust in financial services means front-loading clarity — every screen must surface "what happens next" before "what you can do".</li>
            <li>Gender-inclusive research with female traders surfaced subtle UI assumptions (PIN-entry rhythm, language register) that shifted v1 → v2 conversion by +9 pts.</li>
            <li>Investing in a shared design system early collapsed dev handoff time by 80% and removed inconsistency across three surfaces (app, web, admin).</li>
            <li>Funnel-data informed marketing creative — the +35% New User Login lift came directly from copy and channel mix tuned on first-week behavioural data.</li>
            <li>USSD parity for the top 5 flows turned out to be the single biggest accessibility win — it kept low-bandwidth members on-platform during launch month.</li>
          </ul>
        </section>

        {/* Other projects */}
        <section className="proj-section">
          <div className="section-head" style={{ marginTop: '12px' }}>
            <h2 className="h-section" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Other Projects</h2>
            <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
          </div>
          <div className="other-grid">
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
            <Link href="/work/advenio" className="project-card">
              <div className="thumb web">
                <div className="thumb-browser">
                  <div className="tb-bar"><span></span><span></span><span></span></div>
                  <div className="tb-body">
                    <div className="tb-h">Find your stay.</div>
                    <div className="tb-line"></div>
                    <div className="tb-grid"><div className="tb-tile"></div><div className="tb-tile gold"></div><div className="tb-tile gold"></div><div className="tb-tile"></div></div>
                    <div className="tb-cta">Book now</div>
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
