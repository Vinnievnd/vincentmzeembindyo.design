"use client";

import { useEffect, useState } from "react";
import { ModalProvider, ModalTrigger, ModalRoot } from "@/components/Modal";
import { DeviceChipsProvider, DeviceChip, DeviceReadout } from "@/components/DeviceChips";
import ProcessRail from "@/components/ProcessRail";
import TabGroup from "@/components/TabGroup";
import ThemeToggle from "@/components/ThemeToggle";
import PrototypeDock from "@/components/PrototypeDock";

const MODALS ={"m-role":{"eyebrow":"Role","title":"Product Designer","body":"<p>Owned the consumer and chef experience end to end on a 0 to 1 dual-sided platform: discovery, information architecture, hi-fi prototypes, the design system, and dev handoff.</p><ul><li>Led full discovery with 10 user interviews and competitive benchmarking.</li><li>Redesigned consumer IA and cut checkout from 9 steps to 4.</li><li>Designed the PikaChef onboarding, KYC, and My Kitchen dashboard.</li><li>Established the Figma component library and style guide.</li><li>Ran 3 usability cycles on hi-fi prototypes before handoff.</li></ul><div class=\"modal-meta\"><span class=\"pill\">UI/UX Design</span><span class=\"pill\">UX Research</span><span class=\"pill\">Service Design</span><span class=\"pill\">Design System</span><span class=\"pill\">Usability Testing</span><span class=\"pill\">Product Marketing</span></div>"},"m-industry":{"eyebrow":"Platform","title":"Mobile App","body":"<p>Three surfaces shipped from one design system.</p><ul><li><strong>Consumer app</strong> — recipes, meal kits, PikaChef booking, checkout, order tracking.</li><li><strong>PikaChef app</strong> — onboarding, KYC, availability, rates, bookings, payments.</li><li><strong>My Kitchen dashboard</strong> — order board, bulk inventory, fulfilment status, order chat.</li></ul>"},"m-skills":{"eyebrow":"Industry","title":"Foodtech · Marketplace","body":"<p>Meal kits, a recipe library, and on-demand private chefs, operating in Nairobi with a plan to expand across East Africa.</p><ul><li>Two-sided: demand from households, supply from verified chefs.</li><li>Verification is regulatory and reputational at once — chefs cook in members\\u2019 homes.</li><li>Adjacent services designed for: event catering, housekeeper placement, nanny cooking training.</li></ul>"},"m-timeline":{"eyebrow":"Timeline","title":"Jun 2022 — Mar 2024","body":"<p>Phased against a public launch window.</p><ul><li><strong>Discovery</strong> — 10 interviews, competitive benchmarking, funnel audit, chef ops shadowing.</li><li><strong>Define</strong> — four core journeys mapped: recipe to chef, meal plan to chef, unstructured request, chef onboarding.</li><li><strong>Design</strong> — lo-fi to V1 to V2, design system built alongside.</li><li><strong>Validate</strong> — three usability cycles scored on task completion and error rate.</li><li><strong>Handoff</strong> — component specs per screen, then launch support.</li></ul>"},"m-current":{"eyebrow":"Current Problem","title":"A dual-sided 0 to 1 problem","body":"<p>PikaBox had two parallel UX debts and one launch date. Consumers were dropping out of a nine-step checkout. Chefs and suppliers had no digital structure at all — onboarding documents lived in chat threads, inventory lived in spreadsheets, and fulfilment was a phone call.</p><ul><li>Consumers lacked an efficient, all-inclusive platform to browse, customise recipes, and order meal kits without confusion around portions, pricing, and prep complexity.</li><li>Consumer checkout flow had 9 steps, leading to a high abandonment rate based on funnel data.</li><li>No information hierarchy on recipe cards; allergen, portion, and difficulty data was buried or absent.</li><li>Chef onboarding and KYC was entirely manual, with no bulk inventory upload and no order status visibility.</li><li>No design system, with every screen built inconsistently, slowing design sprint velocity and dev handoff.</li></ul>"},"m-why":{"eyebrow":"Why It Matters","title":"Stakes for a 0 to 1 marketplace","body":"<p>Marketplaces fail on the supply side first. We had weeks to build trust with founding chefs while the consumer app was still in design, which meant chef UX had to ship before consumer UX in several flows.</p><ul><li>Chef supply decided whether consumers had anything to buy at launch.</li><li>A 9-step checkout in on-demand food is a viability problem, not a polish problem.</li><li>Letting a stranger cook in your kitchen makes verification a product feature, not back-office admin.</li><li>Without a design system, sprint velocity halves and every screen gets rebuilt twice.</li><li>Personalisation onboarding is the cheapest retention moat available to a 0 to 1 marketplace.</li></ul>"},"m-validation":{"eyebrow":"Validation Plan","title":"How we knew it worked","body":"<p>Three usability cycles, each gating promotion to the next design stage. Every cycle ran with consumers and chefs, not consumers alone.</p><ul><li><strong>Task Completion Rate</strong> on the browse to order journey.</li><li><strong>SUS</strong> scored on hi-fi prototypes each cycle: 54 lo-fi, 68 V1, 86 V2.</li><li><strong>Error rate</strong> and funnel drop-off against the 9-step baseline.</li><li><strong>Dev Handoff Rate</strong> as the share of components shipped without rework.</li><li>10 user interviews plus competitive benchmarking set the baseline before design started.</li></ul>"},"m-u-01":{"eyebrow":"Segment · Primary","title":"Busy professionals","body":"<p>Urban, 28 to 40, time-starved and willing to pay for convenience. Highest lifetime value segment and the reason checkout length mattered more than feature count.</p>"},"m-u-02":{"eyebrow":"Segment · Growth","title":"Health-led households","body":"<p>Allergen and nutrition conscious. This segment would not consider the platform at all without structured recipe metadata, which is why allergens moved above ingredients in V2.</p>"},"m-u-03":{"eyebrow":"Segment · Supply","title":"PikaChefs","body":"<p>Private and professional chefs onboarding to take bookings. Verification speed mattered more than interface polish — a chef with no verified badge gets no first booking.</p>"},"m-u-04":{"eyebrow":"Segment · Expansion","title":"Event & housekeeper clients","body":"<p>Hosts booking multi-day service, and households hiring for regular cooking. Both needed serving, cleaning, and cutlery hire priced up front rather than quoted after the fact.</p>"},"m-u-05":{"eyebrow":"Segment · Operations","title":"Riders & support staff","body":"<p>Riders assigned when a meal is marked ready for delivery, and the support team handling withheld payments and dispute resolution. Both needed one unambiguous status source.</p>"},"m-survey":{"eyebrow":"Research","title":"10 user interviews","body":"<p>Moderated interviews with prospective members across Nairobi, alongside competitive benchmarking of regional and global meal-kit products.</p><ul><li><strong>70%</strong> named checkout length as the reason they abandoned an order.</li><li><strong>60%</strong> could not tell how many people a kit would feed.</li><li><strong>40%</strong> said they had no idea how difficult a recipe would be before starting.</li></ul>"},"m-funnel":{"eyebrow":"Funnel","title":"Browse to paid order","body":"<p>The pre-redesign funnel across a nine-step checkout.</p><ul><li>Browse to kit built: 58%.</li><li>Kit built to checkout entry: 31%.</li><li>Checkout entry to paid: 17% — the drop that defined the whole project.</li></ul><p>Cutting to four steps with smart defaults was aimed squarely at the last two stages.</p>"},"m-personas":{"eyebrow":"Persona","title":"Amina K., 33 · Consultant","body":"<p>Works long hours, orders in three or four nights a week, and treats cooking as a weekend activity. Wants dinner solved, not a project.</p><ul><li>Will abandon any flow that asks for the same detail twice.</li><li>Books a chef for hosting, orders kits on weeknights.</li><li>Drove the smart-defaults and persistent-summary decisions in checkout.</li></ul>"},"m-audit":{"eyebrow":"Recipe card audit","title":"What was missing","body":"<p>We audited PikaBox V1 against two competitors on the four data points members asked for.</p><ul><li>Allergens: absent in V1, present in one competitor.</li><li>Portion control: absent in V1 — the single most-requested addition.</li><li>Difficulty: absent everywhere, which made it a differentiator.</li><li>Prep versus cook split: absent in V1, and the reason members mis-planned their evenings.</li></ul>"},"m-chefops":{"eyebrow":"Chef ops shadowing","title":"Where the manual work sat","body":"<p>Shadowing founding chefs through a full order cycle showed the admin load, not the cooking load, was the bottleneck.</p><ul><li><strong>KYC</strong> — the largest single time sink, handled over chat and email.</li><li><strong>Stock</strong> — inventory tracked in personal spreadsheets, re-keyed per order.</li><li><strong>Status</strong> — order progress communicated by phone call, with no shared record.</li></ul>"},"m-sitemap":{"eyebrow":"IA","title":"Sitemap · Consumer app","body":"<p>Four pillars: <strong>PikRecipes</strong>, <strong>PikaChef</strong>, <strong>PikaSocial</strong>, and <strong>Cart</strong>. No primary task sits more than three taps deep.</p><ul><li>PikRecipes → meal kits, meal plans, guided cooking.</li><li>PikaChef → book chef, chef profiles, order chat.</li><li>PikaSocial → feed, posts, chef announcements.</li><li>Cart → checkout, orders, tracking.</li></ul>"},"m-flow":{"eyebrow":"Core flow","title":"Recipe to Chef","body":"<p>The headline journey. A member picks a recipe, then books a verified chef to cook it.</p><ul><li>Select recipe from the library, with ingredients, steps, and time visible.</li><li>Tap PikaChef, then set location — at home or at the chef\\u2019s kitchen.</li><li>Set date, budget, and whether serving and cleaning are included.</li><li>Review filtered chefs with ratings and cost estimates, open a profile, then book.</li><li>Await chef confirmation. If declined, pick another chef or adjust criteria.</li><li>Pay, track the chef\\u2019s commute and preparation, then confirm, rate, and optionally post.</li></ul>"},"m-flow-chef":{"eyebrow":"Flow","title":"Chef onboarding","body":"<p>The supply-side journey, built to be finishable in one sitting with clear state at every step.</p><ul><li>Role selection splits normal user from chef at the welcome screen.</li><li>Account creation, then email or phone verification.</li><li>Personal information, bio, and government ID upload.</li><li>Culinary background, diplomas, professional certifications, work-experience documents.</li><li>KYC verification automated through SmileID; terms signed via DocuSign.</li><li>Interview booked through Calendly, then admin review and approval.</li><li>Guided readiness check with mandatory explainer videos before the profile goes live.</li></ul>"},"m-p-health":{"eyebrow":"Persona","title":"Joy M., 38 · Parent of two","body":"<p>Cooks for a household with a nut allergy. Allergen data is not a nice-to-have — it is the gate on whether she uses the product at all.</p>"},"m-p-chef":{"eyebrow":"Persona","title":"Robert F. · Private chef, Langata","body":"<p>Four years cooking privately, 4.8 star average. Treats the verified badge as his marketing. Needs verification fast and availability management that takes under a minute a week.</p>"},"m-p-event":{"eyebrow":"Persona","title":"Daniel N., 44 · Host","books":"","body":"<p>Books chefs for parties of 10 to 30. Wants serving, cleaning, and cutlery hire selectable up front, and a single negotiated price rather than a running tab.</p>"},"m-p-ops":{"eyebrow":"Persona","title":"Sarah W., 29 · Support lead","body":"<p>Handles complaints and withheld payments. Needed one resolution path with visible state, since payment release depends on it.</p>"},"m-journey":{"eyebrow":"Journey","title":"Member emotional arc","body":"<p>Six phases: browse, build kit, book, pay, track, rate. Two dips we designed against.</p><ul><li><strong>Pre-payment</strong> — anxiety about total cost and cancellation. Fixed with terms above the pay button.</li><li><strong>First-order confirmation</strong> — uncertainty about whether the chef actually accepted. Fixed with explicit accepted and declined states plus tracking.</li></ul>"},"m-lofi":{"eyebrow":"Lo-Fi","title":"Greybox · Cycle 1","body":"<p>Greybox prototype tested with 6 consumers and 6 chefs. The goal was IA validation, not visual decisions.</p><ul><li>SUS 54. Only 3 of 6 consumers completed browse to kit unaided.</li><li>Top finding: members expected a photo-led shelf, not a text menu.</li><li>Chefs regrouped their own tools into a single board, which became My Kitchen.</li></ul>"},"m-hifi-v1":{"eyebrow":"Hi-Fi V1","title":"First shipped design","body":"<p>Brought brand and visual hierarchy, but kept the nine-step checkout and unstructured recipe cards.</p><ul><li>SUS 68.</li><li>Competing top actions and unlabelled filter chips surfaced as the main friction.</li><li>Typography ran small for older members; several action buttons failed contrast.</li></ul>"},"m-hifi-v2":{"eyebrow":"Hi-Fi V2 · Shipped","title":"Converged system","body":"<p>Dark, photo-led surfaces with amber accents. Four-step checkout, structured recipe cards, guided cooking, and a persistent tab bar.</p><ul><li>SUS 86.</li><li>Task completion up 40% on the browse to order journey.</li><li>Carried into production and into the design system as the reference implementation.</li></ul>"},"m-hifi-chef":{"eyebrow":"Hi-Fi V2 · Chef side","title":"PikaChef booking","body":"<p>Date, time, and location promoted above the chef list so members set criteria before they browse. Chef rows show rating, area, and hourly rate for direct comparison.</p><ul><li>Booking criteria first, results second.</li><li>Comparison-friendly rows replaced a two-column card grid.</li><li>PikaChef CTA repeated per row so booking never needs a detour.</li></ul>"}}
;

const DEVICE_COPY ={"app":"<strong>Consumer App</strong> — the demand surface. Recipe library, meal-kit customisation, PikaChef booking, checkout, and order tracking. Personalisation onboarding runs here and feeds every downstream recommendation.","chef":"<strong>PikaChef App</strong> — the supply surface. Role-split onboarding, SmileID KYC, certificate uploads, DocuSign terms, Calendly interview booking, availability, and rate configuration for both the chef's kitchen and the member's.","kitchen":"<strong>My Kitchen Dashboard</strong> — the chef's operating board. Ongoing, new, and completed orders in one task-prioritised view, with bulk inventory CSV upload, one-click fulfilment status, and in-order chat.","social":"<strong>PikaSocial Feed</strong> — the community layer. Chefs announce themselves, members post meals with chef consent, and positive reviews become shareable content that feeds acquisition.","admin":"<strong>Admin Console</strong> — internal staff tooling. Preliminary document review, interview stage tracking, approval notifications, dispute resolution, and withheld-payment release."}
;

export default function PikaBoxPage() {
  const [vsFilter, setVsFilter] = useState('both');

  useEffect(() => {
    document.body.classList.add("pika-theme");
    document.body.setAttribute("data-screen-label", "PikaBox Project");
    return () => {
      document.body.classList.remove("pika-theme");
      document.body.removeAttribute("data-screen-label");
    };
  }, []);

  return (
    <ModalProvider modals={MODALS}>
      <main className="container project-page">
  <header className="proj-header">
    <div className="case-meta">
      <span className="case-pill">Case Study · 2022 — 2024</span>
      <span className="case-pill subtle">9 min read</span>
    </div>
    <h1 className="h-block-title">PikaBox Mobile App & Chef Marketplace</h1>
    <p className="proj-tagline">A 0 to 1 dual-sided platform. Consumers browse recipes, customise meal kits, and book a verified chef on demand. Chefs onboard, get KYC-verified, and run bookings, inventory, and fulfilment from one structured dashboard.</p>
    <div className="proj-tags">
      <span className="pill">UI/UX Design</span>
      <span className="pill">UX Research</span>
      <span className="pill">Marketplace</span>
      <span className="pill">Service Design</span>
      <span className="pill">Information Architecture</span>
      <span className="pill">Design System</span>
      <span className="pill">Prototyping</span>
      <span className="pill">Usability Testing</span>
      <span className="pill">UX Writing</span>
      <span className="pill">Product Marketing</span>
    </div>
  </header>
  <section className="hero-mockup" aria-label="PikaBox app screens">
    <div className="hero-mockup-grid">
      <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-photo"></div><div className="pk-veil"></div><div className="pk-mt"><div className="pk-title lg">Discover <span className="am">culinary</span> delights!</div><div className="pk-sub">Explore mouthwatering recipes with a chef on demand & meal kits.</div><div className="pk-flex" style={{ marginTop: '7px' }}><div className="pk-btn ghost" style={{ flex: '1' }}>Back</div><div className="pk-btn" style={{ flex: '1.4' }}>Next</div></div></div></div></div></div></div>
      <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaBox</span><span className="pk-sp">◔ ♡</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>Find your flavor <span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>Filter</span></div><div className="pk-chips" style={{ marginBottom: '6px' }}><span className="pk-chip on">For you</span><span className="pk-chip">Top rated</span><span className="pk-chip">Meal kits</span></div><div className="pk-grid" style={{ marginBottom: '5px' }}><div className="pk-tile"><div className="im"></div><div className="tx"><b>Chicken Tikka</b><span>15 min · 4.3 ★</span></div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>25 min · 4.6 ★</span></div></div></div><div className="pk-lbl">Continue cooking</div><div className="pk-grid"><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Beef Pilau</b><span>Step 3 of 6</span></div></div><div className="pk-tile"><div className="im"></div><div className="tx"><b>Coconut Curry</b><span>Step 1 of 5</span></div></div></div><div className="pk-tabbar"><span className="on"><i>⌂</i>Home</span><span><i>◍</i>Recipes</span><span><i>♨</i>PikaChef</span><span><i>≡</i>More</span></div></div></div></div></div>
      <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaChef</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>I want a chef<span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>◉ Nairobi</span></div><div className="pk-flex" style={{ marginBottom: '5px', fontSize: '6px' }}><div className="pk-chip" style={{ flex: '1', textAlign: 'center' }}>Select date</div><div className="pk-chip" style={{ flex: '1', textAlign: 'center' }}>Choose time</div></div><div className="pk-chips" style={{ marginBottom: '6px' }}><span className="pk-chip on">4★+</span><span className="pk-chip">Near me</span><span className="pk-chip">Swahili</span></div><div className="pk-gap" style={{ flex: '1' }}><div className="pk-row"><span className="av"></span><div className="tx"><b>Robert Fox</b><span>Langata · 4.8 ★</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Marvin McKinney</b><span>Kilimani · 4.6 ★</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Cody Fisher</b><span>Westlands · 4.5 ★</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div></div><div className="pk-tabbar"><span><i>⌂</i>Home</span><span><i>◍</i>Recipes</span><span className="on"><i>♨</i>PikaChef</span><span><i>≡</i>More</span></div></div></div></div></div>
      <div className="hero-phone"><div className="phone-frame-inline"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-back">‹</span><span>Verify your chef account</span></div><div className="pk-verify" style={{ marginBottom: '6px' }}><span className="pk-ring"><b>40%</b></span><div><b>40% complete</b><div style={{ opacity: '.65' }}>Unlock the curated PikaBox chef experience</div></div></div><div className="pk-steps"><i className="on"></i><i className="on"></i><i></i><i></i><i></i><i></i></div><div className="pk-lbl">Step 2 of 6 · Verification</div><div className="pk-gap" style={{ flex: '1', marginTop: '3px' }}><div className="pk-row"><span style={{ color: 'var(--pk-teal)' }}>✓</span><div className="tx"><b>Government ID</b><span>Verified via SmileID</span></div></div><div className="pk-row"><span style={{ color: 'var(--pk-teal)' }}>✓</span><div className="tx"><b>Culinary background</b><span>2 employers added</span></div></div><div className="pk-row"><span style={{ color: 'var(--pk-amber)' }}>◔</span><div className="tx"><b>Certificates</b><span>Diplomas · ServSafe</span></div><span className="pk-amt am">Upload</span></div><div className="pk-row"><span style={{ opacity: '.4' }}>○</span><div className="tx"><b>Terms & legal</b><span>DocuSign</span></div></div><div className="pk-row"><span style={{ opacity: '.4' }}>○</span><div className="tx"><b>Interview</b><span>Calendly</span></div></div></div><div className="pk-flex" style={{ marginTop: '5px' }}><div className="pk-btn ghost" style={{ flex: '1' }}>Skip</div><div className="pk-btn" style={{ flex: '1.6' }}>Verify profile</div></div></div></div></div></div>
    </div>
    <PrototypeDock label="Open Prototype">
      <div className="proto-pop-h">Prototypes</div>
      <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>PikaBox Consumer App — coming soon</a>
      <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>PikaChef App — coming soon</a>
      <a className="is-pending" aria-disabled="true"><span className="pl-dot"></span>My Kitchen Dashboard — coming soon</a>
    </PrototypeDock>
  </section>
  <section className="proj-section" id="info">
    <div className="kicker"><span className="kicker-num">01</span><h2 className="kicker-title">Project Info</h2></div>
    <p className="ps-sub">Scope, role, and the runway we operated on.</p>
    <div className="info-grid">
      <ModalTrigger modalKey="m-role" className="info-card clickable">
        <div className="info-eyebrow">Role</div>
        <div className="info-h">Product Designer</div>
        <div className="info-d">UI / UX Design · UX Research · Design System · Product Marketing</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-industry" className="info-card clickable">
        <div className="info-eyebrow">Platform</div>
        <div className="info-h">Mobile App</div>
        <div className="info-d">Consumer app, PikaChef app, and an admin dashboard.</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-skills" className="info-card clickable">
        <div className="info-eyebrow">Industry</div>
        <div className="info-h">Foodtech · Marketplace</div>
        <div className="info-d">Meal kits, recipes, and on-demand private chefs in Nairobi.</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-timeline" className="info-card clickable">
        <div className="info-eyebrow">Timeline</div>
        <div className="info-h">Jun 2022 — Mar 2024</div>
        <div className="info-d">Discovery, 3 usability cycles, and design system handoff.</div>
        <div className="info-more">Tap to expand →</div>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section" id="challenge">
    <div className="kicker"><span className="kicker-num">02</span><h2 className="kicker-title">Challenge & Hypothesis</h2></div>
    <p className="ps-sub">PikaBox was a 0 to 1 build with a dual-sided platform problem. Three lenses on it: what was broken, why it mattered for a marketplace with no inventory yet, and how we would know it was fixed.</p>
    <div className="three-up">
      <ModalTrigger modalKey="m-current" as="article" className="three-card clickable">
        <div className="three-num">A</div>
        <h3 className="three-h">Current Problem</h3>
        <ul className="three-list">
          <li>Consumers lacked an efficient, all-inclusive platform to browse, customise recipes, and order meal kits without confusion around portions, pricing, and prep complexity.</li>
          <li>Consumer checkout flow had 9 steps, leading to a high abandonment rate based on funnel data.</li>
          <li>No information hierarchy on recipe cards; allergen, portion, and difficulty data was buried or absent.</li>
          <li>Chef onboarding and KYC was entirely manual, with no bulk inventory upload and no order status visibility.</li>
          <li>No design system, with every screen built inconsistently, slowing design sprint velocity and dev handoff.</li>
        </ul>
        <span className="three-cta">Read the full diagnosis →</span>
      </ModalTrigger>
      <ModalTrigger modalKey="m-why" as="article" className="three-card clickable">
        <div className="three-num">B</div>
        <h3 className="three-h">Why It Matters</h3>
        <ul className="three-list">
          <li>Marketplaces fail on the supply side first. Chef supply decided whether consumers had anything to buy at launch.</li>
          <li>A 9-step checkout in on-demand food is a viability problem, not a polish problem.</li>
          <li>Letting a stranger cook in your kitchen makes verification a product feature, not back-office admin.</li>
          <li>Without a design system, sprint velocity halves and every screen gets rebuilt twice before handoff.</li>
          <li>Personalisation onboarding is the cheapest retention moat available to a 0 to 1 marketplace.</li>
        </ul>
        <span className="three-cta">See the impact case →</span>
      </ModalTrigger>
      <ModalTrigger modalKey="m-validation" as="article" className="three-card clickable">
        <div className="three-num">C</div>
        <h3 className="three-h">Validation Plan</h3>
        <ul className="three-list">
          <li><strong>Task Completion Rate</strong> on the browse to order journey, measured every usability cycle.</li>
          <li><strong>SUS</strong> scored on hi-fi prototypes across all three test cycles.</li>
          <li><strong>Error rate</strong> and funnel drop-off telemetry against the 9-step baseline.</li>
          <li><strong>Dev Handoff Rate</strong>, tracked as the share of components shipped without rework.</li>
          <li>10 user interviews plus competitive benchmarking to set the baseline before a line was drawn.</li>
        </ul>
        <span className="three-cta">See the test plan →</span>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section" id="users-devices">
    <h3 className="ps-title">Users & Surfaces</h3>
    <p className="ps-sub">Five surfaces, five segments. The supply side shipped first because a marketplace with no chefs has nothing to sell.</p>
    <div className="users-grid">
      <DeviceChipsProvider copy={DEVICE_COPY}>
        <div className="ud-block">
          <div className="ud-block-h">Surfaces</div>
          <div className="device-chips">
            <DeviceChip device="app" className="dchip"><div className="dchip-ico">📱</div><div className="dchip-l">Consumer<br />App</div></DeviceChip>
            <DeviceChip device="chef" className="dchip"><div className="dchip-ico">👨‍🍳</div><div className="dchip-l">PikaChef<br />App</div></DeviceChip>
            <DeviceChip device="kitchen" className="dchip"><div className="dchip-ico">🍳</div><div className="dchip-l">My Kitchen<br />Dashboard</div></DeviceChip>
            <DeviceChip device="social" className="dchip"><div className="dchip-ico">💬</div><div className="dchip-l">PikaSocial<br />Feed</div></DeviceChip>
            <DeviceChip device="admin" className="dchip"><div className="dchip-ico">🛠</div><div className="dchip-l">Admin<br />Console</div></DeviceChip>
          </div>
          <DeviceReadout />
        </div>
      </DeviceChipsProvider>
      <div className="ud-block">
        <div className="ud-block-h">Target Users</div>
        <div className="user-list">
          <ModalTrigger modalKey="m-u-01" as="button" className="user-row clickable"><span className="user-num">01</span><span className="user-name">Busy professionals</span><span className="user-tag">Primary</span></ModalTrigger>
          <ModalTrigger modalKey="m-u-02" as="button" className="user-row clickable"><span className="user-num">02</span><span className="user-name">Health-led households</span><span className="user-tag">Growth</span></ModalTrigger>
          <ModalTrigger modalKey="m-u-03" as="button" className="user-row clickable"><span className="user-num">03</span><span className="user-name">PikaChefs</span><span className="user-tag">Supply</span></ModalTrigger>
          <ModalTrigger modalKey="m-u-04" as="button" className="user-row clickable"><span className="user-num">04</span><span className="user-name">Event & housekeeper clients</span><span className="user-tag">Expansion</span></ModalTrigger>
          <ModalTrigger modalKey="m-u-05" as="button" className="user-row clickable"><span className="user-num">05</span><span className="user-name">Riders & support staff</span><span className="user-tag">Operations</span></ModalTrigger>
        </div>
      </div>
    </div>
    <div className="metrics-bar">
      <div className="mb-label">Outcome metrics we tracked</div>
      <div className="mb-pills">
        <span className="metric-chip"><span className="mc-n">TCR</span><span className="mc-l">Task Completion Rate</span></span>
        <span className="metric-chip"><span className="mc-n">SUS</span><span className="mc-l">System Usability Scale</span></span>
        <span className="metric-chip"><span className="mc-n">ER</span><span className="mc-l">Error Rate</span></span>
        <span className="metric-chip"><span className="mc-n">DHR</span><span className="mc-l">Dev Handoff Rate</span></span>
      </div>
    </div>
  </section>
  <section className="proj-section" id="results-preview">
    <div className="kicker"><span className="kicker-num">03</span><h2 className="kicker-title">Results & Solution</h2></div>
    <p className="ps-sub">Impact by numbers, followed by the secondary structural wins those numbers came from.</p>
    <div className="results-split">
      <div className="results-side">
        <div className="rs-h">Impact by numbers</div>
        <div className="impact-strip primary-strip">
          <div className="istat lift"><div className="n">+40%</div><div className="l">Task Completion Rate</div></div>
          <div className="istat lift"><div className="n">+70%</div><div className="l">Dev Handoff Rate</div></div>
          <div className="istat lift"><div className="n">+30%</div><div className="l">User Acceptance (Testing)</div></div>
          <div className="istat lift"><div className="n">+60%</div><div className="l">System Usability Scale</div></div>
        </div>
      </div>
      <div className="results-side">
        <div className="rs-h">Secondary</div>
        <div className="impact-strip secondary-strip">
          <div className="istat lift"><div className="n">9→4</div><div className="l">Checkout Steps</div></div>
          <div className="istat lift"><div className="n">10</div><div className="l">User Interviews</div></div>
          <div className="istat lift"><div className="n">3</div><div className="l">Usability Cycles</div></div>
          <div className="istat lift"><div className="n">0→1</div><div className="l">Design System Built</div></div>
        </div>
      </div>
    </div>

    <h3 className="ps-title" style={{ marginTop: '36px' }}>Five Solution Pillars</h3>
    <p className="ps-sub">Click a pillar to see the tactics underneath it.</p>
    <div className="pillars">
      <details className="pillar" open>
        <summary><span className="pillar-num">01</span><span className="pillar-h">Redesign consumer IA, checkout 9 steps to 4</span><span className="pillar-toggle">+</span></summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Progressive disclosure</div><p>Defer delivery slot, cutlery, and gift options past the commit point so the first screen asks only what blocks a decision.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Smart defaults</div><p>Address and payment default from personalisation onboarding, so a returning member confirms rather than re-enters.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Persistent kit summary</div><p>A collapsed kit card follows the member through checkout, so they always see what they are committing to.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Cancellation up front</div><p>Cancellation terms sit above the pay button, not in a post-purchase email.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary><span className="pillar-num">02</span><span className="pillar-h">Structured recipe cards and guided cooking</span><span className="pillar-toggle">+</span></summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Allergens first</div><p>Allergen chips sit above ingredients. Health-led households gate every other decision on this one.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Portion and difficulty</div><p>A serving stepper and a 1 to 5 difficulty scale on every card, in the same position every time.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Prep plus cook split</div><p>Two numbers instead of one ambiguous total, so members can plan around the time they actually have.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Guided instructions</div><p>Step-of-six progress, a step video, and an in-app timer replace an undifferentiated wall of numbered text.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary><span className="pillar-num">03</span><span className="pillar-h">PikaChef onboarding, KYC and verification</span><span className="pillar-toggle">+</span></summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Role selection up front</div><p>One welcome screen splits normal user from chef, so neither path carries the other's questions.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Automated KYC</div><p>Identity verification runs through SmileID; chefs upload a government ID once and the state is visible thereafter.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Credentials and legal</div><p>Culinary diplomas, professional certifications, and work-experience documents, with terms signed digitally via DocuSign.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Interview and readiness</div><p>A Calendly-booked interview, then a guided readiness check with mandatory explainer videos before a profile goes live.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary><span className="pillar-num">04</span><span className="pillar-h">My Kitchen, chef-side order management</span><span className="pillar-toggle">+</span></summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Task-prioritised dashboard</div><p>Ongoing, new, and completed orders in one board, sorted by what needs a decision next.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Bulk inventory upload</div><p>CSV upload with schema validation and row-level errors, so chefs fix problems in place instead of re-submitting.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">One-click fulfilment</div><p>Commute, cooking, serving, cleaning, and end as single-tap status promotions with timestamps for both sides.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Order chat and rates</div><p>In-order chat for custom plans, plus separate rates for cooking in the chef's kitchen versus the member's.</p></div>
        </div>
      </details>
      <details className="pillar">
        <summary><span className="pillar-num">05</span><span className="pillar-h">Design system and three usability cycles</span><span className="pillar-toggle">+</span></summary>
        <div className="pillar-body">
          <div className="pillar-col"><div className="pillar-col-h">Figma component library</div><p>A full component library and style guide covering every v1 screen, with lint rules to stop drift.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Tokens and scales</div><p>4-point spacing, a six-step type scale, and semantic colour tokens shared across consumer, chef, and admin.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Three test cycles</div><p>Hi-fi prototypes iterated against task completion and error rate data before handoff, not after.</p></div>
          <div className="pillar-col"><div className="pillar-col-h">Handoff specs</div><p>Component specs and states documented per screen, which is where the 70% dev handoff lift came from.</p></div>
        </div>
      </details>
    </div>
  </section>
  <section className="proj-section" id="process">
    <div className="kicker"><span className="kicker-num">04</span><h2 className="kicker-title">Process</h2></div>
    <p className="ps-sub">Six phases across the build. Move the dot along the rail to jump to any phase.</p>
    <ProcessRail
      steps={[
        { line1: 'Research', line2: '& Analysis' },
        { line1: 'Define', line2: '& Ideate' },
        { line1: 'Wireframe', line2: '& Prototype' },
        { line1: 'Usability', line2: '& Iteration' },
        { line1: 'Design', line2: 'System' },
        { line1: 'Handoff', line2: '& Launch' },
      ]}
    />
  </section>
  <section className="proj-section">
    <h3 className="ps-title">Research & Analysis</h3>
    <p className="ps-sub">Ten user interviews, competitive benchmarking, and a funnel audit of the existing 9-step checkout, run alongside chef operations shadowing in Nairobi kitchens.</p>
    <div className="research-grid">
      <ModalTrigger modalKey="m-survey" className="rcard clickable">
        <div className="rcard-eyebrow">Interviews · 10 participants</div>
        <div className="rcard-title">"I gave up at the payment screen"</div>
        <div className="rcard-bars">
          <div className="bar"><div className="bar-fill" style={{ width: '70%' }}></div><span>70%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: '60%' }}></div><span>60%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: '40%' }}></div><span>40%</span></div>
        </div>
        <div className="rcard-foot">Too many steps · Unclear portions · Prep unknown</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-funnel" className="rcard clickable">
        <div className="rcard-eyebrow">Funnel · 9-step checkout</div>
        <div className="rcard-title">Browse → Order</div>
        <svg viewBox="0 0 200 110" className="funnel-svg">
          <rect x="0" y="0" width="200" height="20" rx="3" fill="#12312C"/><text x="100" y="14" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Plus Jakarta Sans">Browse 100%</text>
          <rect x="18" y="28" width="164" height="20" rx="3" fill="#1d4a42"/><text x="100" y="42" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Plus Jakarta Sans">Kit built 58%</text>
          <rect x="46" y="56" width="108" height="20" rx="3" fill="#4FB3A0"/><text x="100" y="70" textAnchor="middle" fill="#062b24" fontSize="11" fontFamily="Plus Jakarta Sans">Checkout 31%</text>
          <rect x="74" y="84" width="52" height="20" rx="3" fill="#E9A13B"/><text x="100" y="98" textAnchor="middle" fill="#231703" fontSize="11" fontFamily="Plus Jakarta Sans">Paid 17%</text>
        </svg>
      </ModalTrigger>
      <ModalTrigger modalKey="m-personas" className="rcard clickable">
        <div className="rcard-eyebrow">Persona · Demand</div>
        <div className="persona"><div className="persona-avatar">AK</div><div><div className="persona-name">Amina K.</div><div className="persona-meta">Consultant · Nairobi · 33</div></div></div>
        <div className="rcard-quote">"I want dinner solved, not a project."</div>
        <div className="persona-traits"><span className="trait">Time-poor</span><span className="trait">Convenience-led</span><span className="trait">High LTV</span></div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-audit" className="rcard clickable">
        <div className="rcard-eyebrow">Recipe card audit</div>
        <div className="rcard-title">What was missing</div>
        <table className="aud-table">
          <tbody>
          <tr><td>Allergens</td><td>✕</td><td className="ok">✓</td></tr>
          <tr><td>Portion control</td><td>✕</td><td className="ok">✓</td></tr>
          <tr><td>Difficulty</td><td>✕</td><td>✕</td></tr>
          <tr><td>Prep vs cook</td><td>✕</td><td className="ok">✓</td></tr>
          </tbody>
        </table>
        <div className="rcard-foot">PikaBox v1 · Competitor A · Competitor B</div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-chefops" className="rcard clickable">
        <div className="rcard-eyebrow">Chef ops shadowing</div>
        <div className="rcard-title">Where the manual work sat</div>
        <div className="rcard-bars">
          <div className="bar"><div className="bar-fill" style={{ width: '88%' }}></div><span>KYC</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: '64%' }}></div><span>Stock</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: '52%' }}></div><span>Status</span></div>
        </div>
        <div className="rcard-foot">Share of chef admin time, pre-launch</div>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section">
    <h3 className="ps-title">Define & Ideate · IA, Userflows & Personas</h3>
    <p className="ps-sub">Four core journeys came out of discovery: recipe to chef, meal plan to chef, unstructured meal request, and chef onboarding. Each was mapped end to end before any screen was designed.</p>
    <div className="iaflow-grid">
      <ModalTrigger modalKey="m-sitemap" className="iacard tall clickable">
        <div className="rcard-eyebrow">Sitemap · Consumer app</div>
        <div className="sitemap">
          <div className="node root">Home</div>
          <div className="branch"><div className="node">PikRecipes</div><div className="node">PikaChef</div><div className="node">PikaSocial</div><div className="node">Cart</div></div>
          <div className="branch sub"><div className="node sm">Meal kits</div><div className="node sm">Meal plans</div><div className="node sm">Book chef</div><div className="node sm">Feed</div><div className="node sm">Checkout</div><div className="node sm">Orders</div></div>
        </div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-flow" className="iacard tall clickable">
        <div className="rcard-eyebrow">Core flow · Recipe to Chef</div>
        <div className="flow">
          <div className="flow-step">Select recipe</div><div className="flow-arrow">→</div>
          <div className="flow-step">Tap PikaChef</div><div className="flow-arrow">→</div>
          <div className="flow-step diamond">Location?</div><div className="flow-arrow">→</div>
          <div className="flow-step">Date · budget</div><div className="flow-arrow">→</div>
          <div className="flow-step">Filtered chefs</div><div className="flow-arrow">→</div>
          <div className="flow-step">View profile</div><div className="flow-arrow">→</div>
          <div className="flow-step diamond">Accepted?</div><div className="flow-arrow">→</div>
          <div className="flow-step">Pay</div><div className="flow-arrow">→</div>
          <div className="flow-step">Track</div><div className="flow-arrow">→</div>
          <div className="flow-step success">Confirm · Rate</div>
        </div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-p-health" className="iacard clickable"><div className="rcard-eyebrow">Persona · Health-led</div><div className="persona"><div className="persona-avatar">JM</div><div><div className="persona-name">Joy M.</div><div className="persona-meta">Parent of two · 38</div></div></div><div className="rcard-quote">"If the allergens are not on the card, I close the app."</div></ModalTrigger>
      <ModalTrigger modalKey="m-p-chef" className="iacard clickable"><div className="rcard-eyebrow">Persona · PikaChef</div><div className="persona"><div className="persona-avatar">RF</div><div><div className="persona-name">Robert F.</div><div className="persona-meta">Private chef · Langata · 4.8★</div></div></div><div className="rcard-quote">"Verification is how I get my first booking."</div></ModalTrigger>
      <ModalTrigger modalKey="m-p-event" className="iacard clickable"><div className="rcard-eyebrow">Persona · Event client</div><div className="persona"><div className="persona-avatar">DN</div><div><div className="persona-name">Daniel N.</div><div className="persona-meta">Host · 44</div></div></div><div className="rcard-quote">"I need serving and cleaning included, not quoted later."</div></ModalTrigger>
      <ModalTrigger modalKey="m-p-ops" className="iacard clickable"><div className="rcard-eyebrow">Persona · Support</div><div className="persona"><div className="persona-avatar">SW</div><div><div className="persona-name">Sarah W.</div><div className="persona-meta">Support lead · 29</div></div></div><div className="rcard-quote">"Withheld payments need one clear resolution path."</div></ModalTrigger>
      <ModalTrigger modalKey="m-flow-chef" className="iacard clickable">
        <div className="rcard-eyebrow">Flow · Chef onboarding</div>
        <div className="flow vertical">
          <div className="flow-step">Role select</div><div className="flow-arrow">↓</div>
          <div className="flow-step">Account · verify</div><div className="flow-arrow">↓</div>
          <div className="flow-step">KYC · SmileID</div><div className="flow-arrow">↓</div>
          <div className="flow-step">Certificates</div><div className="flow-arrow">↓</div>
          <div className="flow-step">DocuSign · Calendly</div><div className="flow-arrow">↓</div>
          <div className="flow-step success">Readiness check · live</div>
        </div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-journey" className="iacard clickable">
        <div className="rcard-eyebrow">Journey map · Member</div>
        <svg viewBox="0 0 200 100" className="journey-svg">
          <polyline points="0,75 30,50 60,68 100,28 140,46 180,18 200,32" stroke="#12312C" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="50" r="3" fill="#E9A13B"/><circle cx="100" cy="28" r="3" fill="#E9A13B"/><circle cx="180" cy="18" r="3" fill="#E9A13B"/>
          <text x="30" y="95" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#7a7a7a" textAnchor="middle">Browse</text>
          <text x="100" y="95" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#7a7a7a" textAnchor="middle">Book</text>
          <text x="180" y="95" fontSize="8" fontFamily="Plus Jakarta Sans" fill="#7a7a7a" textAnchor="middle">Rate</text>
        </svg>
        <div className="rcard-foot">Two dips designed for: pre-payment and first-order confirmation</div>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section">
    <h3 className="ps-title">Wireframing & Prototyping (Lo-Fi → Hi-Fi)</h3>
    <p className="ps-sub">Greyboxed flows tested in the first cycle, then converged into the hi-fi system that carried into production.</p>
    <div className="wireframe-grid">
      <ModalTrigger modalKey="m-lofi" className="wf-card clickable">
        <div className="wf-label">Lo-Fi greybox</div>
        <div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen lofi">
          <div className="lo-row"></div><div className="lo-row tall"></div><div className="lo-row"></div>
          <div className="lo-grid"><div className="lo-box"></div><div className="lo-box"></div><div className="lo-box"></div><div className="lo-box"></div></div>
          <div className="lo-row"></div><div className="lo-row"></div>
        </div></div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-hifi-v1" className="wf-card clickable">
        <div className="wf-label">Hi-Fi V1</div>
        <div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span style={{ margin: '0 auto' }}>Recipes</span></div><div className="pk-flex" style={{ marginBottom: '5px' }}><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>Add recipe</div><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>My recipe</div></div><div className="pk-search" style={{ marginBottom: '5px' }}>Discover recipes that...<span style={{ marginLeft: 'auto' }}>Filter</span></div><div className="pk-chips" style={{ marginBottom: '5px' }}><span className="pk-chip on">All</span><span className="pk-chip">Rating</span><span className="pk-chip">Cuisine</span></div><div className="pk-lbl">For you</div><div className="pk-grid" style={{ marginBottom: '5px' }}><div className="pk-tile"><div className="im"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe</span></div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe</span></div></div></div><div className="pk-lbl">Top rated recipes</div><div className="pk-grid"><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe</span></div></div><div className="pk-tile"><div className="im"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe</span></div></div></div></div></div></div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-hifi-v2" className="wf-card clickable">
        <div className="wf-label">Hi-Fi V2 <span className="ship-chip">Shipped</span></div>
        <div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaBox</span><span className="pk-sp">◔ ♡</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>Find your flavor <span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>Filter</span></div><div className="pk-chips" style={{ marginBottom: '6px' }}><span className="pk-chip on">For you</span><span className="pk-chip">Top rated</span><span className="pk-chip">Meal kits</span></div><div className="pk-grid" style={{ marginBottom: '5px' }}><div className="pk-tile"><div className="im"></div><div className="tx"><b>Chicken Tikka</b><span>15 min · 4.3 ★</span></div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>25 min · 4.6 ★</span></div></div></div><div className="pk-lbl">Continue cooking</div><div className="pk-grid"><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Beef Pilau</b><span>Step 3 of 6</span></div></div><div className="pk-tile"><div className="im"></div><div className="tx"><b>Coconut Curry</b><span>Step 1 of 5</span></div></div></div><div className="pk-tabbar"><span className="on"><i>⌂</i>Home</span><span><i>◍</i>Recipes</span><span><i>♨</i>PikaChef</span><span><i>≡</i>More</span></div></div></div></div>
      </ModalTrigger>
      <ModalTrigger modalKey="m-hifi-chef" className="wf-card clickable">
        <div className="wf-label">PikaChef V2</div>
        <div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaChef</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>I want a chef<span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>◉ Nairobi</span></div><div className="pk-flex" style={{ marginBottom: '5px', fontSize: '6px' }}><div className="pk-chip" style={{ flex: '1', textAlign: 'center' }}>Select date</div><div className="pk-chip" style={{ flex: '1', textAlign: 'center' }}>Choose time</div></div><div className="pk-chips" style={{ marginBottom: '6px' }}><span className="pk-chip on">4★+</span><span className="pk-chip">Near me</span><span className="pk-chip">Swahili</span></div><div className="pk-gap" style={{ flex: '1' }}><div className="pk-row"><span className="av"></span><div className="tx"><b>Robert Fox</b><span>Langata · 4.8 ★</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Marvin McKinney</b><span>Kilimani · 4.6 ★</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Cody Fisher</b><span>Westlands · 4.5 ★</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div></div><div className="pk-tabbar"><span><i>⌂</i>Home</span><span><i>◍</i>Recipes</span><span className="on"><i>♨</i>PikaChef</span><span><i>≡</i>More</span></div></div></div></div>
      </ModalTrigger>
    </div>
  </section>
  <section className="proj-section">
    <h3 className="ps-title">Usability Testing & Iteration</h3>
    <p className="ps-sub">Three cycles on hi-fi prototypes, scored on task completion and error rate before handoff. V2 carried into production.</p>
    <div className="ab-table-wrap">
      <table className="ab-table">
        <thead>
          <tr><th></th><th>Cycle 1</th><th>Cycle 1</th><th>Cycle 2</th><th>Cycle 2</th><th>Cycle 3</th><th>Cycle 3</th><th>Overall</th></tr>
          <tr><th></th><th>Browse<br />→ kit</th><th>Checkout</th><th>Book a<br />chef</th><th>Guided<br />cooking</th><th>Chef<br />KYC</th><th>My Kitchen<br />fulfilment</th><th>SUS</th></tr>
        </thead>
        <tbody>
          <tr><td className="row-label"><span className="vchip">Lo-Fi</span></td><td className="score">3/5</td><td className="score">2/5</td><td className="score">3/5</td><td className="score">2/5</td><td className="score">2/5</td><td className="score">3/5</td><td className="score">54</td></tr>
          <tr><td className="row-label"><span className="vchip">V1</span></td><td className="score">4/5</td><td className="score">3/5</td><td className="score">4/5</td><td className="score">3/5</td><td className="score">3/5</td><td className="score">4/5</td><td className="score">68</td></tr>
          <tr><td className="row-label"><span className="vchip">V2</span></td><td className="score">5/5</td><td className="score">5/5</td><td className="score">5/5</td><td className="score">4/5</td><td className="score">5/5</td><td className="score">5/5</td><td className="score">86</td></tr>
        </tbody>
      </table>
    </div>
  </section>
  <section className="proj-section" id="design-system">
    <h3 className="ps-title">Design System</h3>
    <p className="ps-sub">A Figma component library and style guide built from zero, covering consumer, chef, and admin surfaces. Switch tabs to inspect each facet.</p>
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
        { id: 'comp', label: 'Buttons & Components' },
        { id: 'posters', label: 'Posters' },
      ]}
    >
      <TabGroup.Pane id="logo">
        <div className="ds-grid">
          <div className="ds-block ds-logo"><div className="logo-large" style={{ background: '#12312C', color: '#E9A13B' }}>P</div><div className="ds-meta">Primary mark · amber on kitchen dark</div></div>
          <div className="ds-block ds-logo dark" style={{ background: '#E9A13B' }}><div className="logo-large" style={{ background: '#12312C', color: '#E9A13B' }}>P</div><div className="ds-meta" style={{ color: '#12312C' }}>Reverse · on amber</div></div>
          <div className="ds-block ds-logo"><div className="logo-mono">P</div><div className="ds-meta">Mono · single-colour print</div></div>
          <div className="ds-block ds-logo"><div className="logo-wordmark"><span className="logo-mark-sm" style={{ background: '#12312C', color: '#E9A13B' }}>P</span>PIKABOX</div><div className="ds-meta">Wordmark · horizontal lockup</div></div>
        </div>
      </TabGroup.Pane>

      <TabGroup.Pane id="color">
        <ThemeToggle>
          {(isDark) => (
            <div id="colorBoard" className={isDark ? "color-board is-dark" : "color-board"}>
              <div className="cs"><div className="cs-swatch" style={{ background: '#E9A13B' }}></div><div className="cs-meta"><div className="cs-name">Pika Amber · Primary</div><div className="cs-hex">#E9A13B</div></div></div>
              <div className="cs"><div className="cs-swatch" style={{ background: '#12312C' }}></div><div className="cs-meta"><div className="cs-name">Kitchen Dark · Secondary</div><div className="cs-hex">#12312C</div></div></div>
              <div className="cs"><div className="cs-swatch" style={{ background: '#4FB3A0' }}></div><div className="cs-meta"><div className="cs-name">Pika Teal · Accent</div><div className="cs-hex">#4FB3A0</div></div></div>
              <div className="cs"><div className="cs-swatch" style={{ background: '#FBF6ED' }}></div><div className="cs-meta"><div className="cs-name">Cream · Surface</div><div className="cs-hex">#FBF6ED</div></div></div>
              <div className="cs"><div className="cs-swatch" style={{ background: '#101211' }}></div><div className="cs-meta"><div className="cs-name">Ink · Text</div><div className="cs-hex">#101211</div></div></div>
              <div className="cs"><div className="cs-swatch" style={{ background: '#C4452F' }}></div><div className="cs-meta"><div className="cs-name">Danger</div><div className="cs-hex">#C4452F</div></div></div>
            </div>
          )}
        </ThemeToggle>
      </TabGroup.Pane>

      <TabGroup.Pane id="type">
        <div className="ds-grid">
          <div className="ds-block">
            <div className="type-spec"><span className="serif" style={{ fontSize: '48px', lineHeight: '1' }}>Aa</span><div className="type-meta-block"><strong>Display serif</strong><div className="dim">Recipe titles · headlines</div><div className="dim">600 / 700</div></div></div>
            <div className="type-scale"><span style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 32</span><span style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 24</span><span style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: '600' }}>Display 20</span></div>
          </div>
          <div className="ds-block">
            <div className="type-spec"><span style={{ fontSize: '48px', fontWeight: '600' }}>Aa</span><div className="type-meta-block"><strong>UI sans</strong><div className="dim">Body · labels · chips</div><div className="dim">400 / 500 / 600</div></div></div>
            <div className="type-scale"><span style={{ fontSize: '16px' }}>Body 16 · ingredient rows</span><span style={{ fontSize: '14px' }}>Body 14 · metadata</span><span style={{ fontSize: '12px' }}>Body 12 · chips and captions</span></div>
          </div>
        </div>
      </TabGroup.Pane>

      <TabGroup.Pane id="spacing">
        <div className="ds-grid spacing-grid">
          <div className="ds-block"><div className="ds-meta">Spacing scale · 4-point grid</div><div className="space-stack"><div className="sp" style={{ width: '4px' }}><span>4</span></div><div className="sp" style={{ width: '8px' }}><span>8</span></div><div className="sp" style={{ width: '12px' }}><span>12</span></div><div className="sp" style={{ width: '16px' }}><span>16</span></div><div className="sp" style={{ width: '24px' }}><span>24</span></div><div className="sp" style={{ width: '32px' }}><span>32</span></div><div className="sp" style={{ width: '48px' }}><span>48</span></div><div className="sp" style={{ width: '64px' }}><span>64</span></div></div></div>
          <div className="ds-block"><div className="ds-meta">Radius scale</div><div className="radius-row"><div className="rad" style={{ borderRadius: '4px' }}><span>4</span></div><div className="rad" style={{ borderRadius: '8px' }}><span>8</span></div><div className="rad" style={{ borderRadius: '14px' }}><span>14</span></div><div className="rad" style={{ borderRadius: '22px' }}><span>22</span></div><div className="rad" style={{ borderRadius: '999px' }}><span>999</span></div></div></div>
        </div>
      </TabGroup.Pane>

      <TabGroup.Pane id="icons">
        <div className="icon-grid">
          <div className="ic"><div className="ic-svg">🍳</div><span>Recipes</span></div>
          <div className="ic"><div className="ic-svg">👨‍🍳</div><span>PikaChef</span></div>
          <div className="ic"><div className="ic-svg">📦</div><span>Meal kit</span></div>
          <div className="ic"><div className="ic-svg">🛒</div><span>Cart</span></div>
          <div className="ic"><div className="ic-svg">⏱</div><span>Timer</span></div>
          <div className="ic"><div className="ic-svg">⚠</div><span>Allergen</span></div>
          <div className="ic"><div className="ic-svg">✓</div><span>Verified</span></div>
          <div className="ic"><div className="ic-svg">💬</div><span>Order chat</span></div>
        </div>
        <p className="ps-sub" style={{ marginTop: '14px' }}>Stroke 1.5 px on a 24 px grid, always paired with a text label. Allergen and verification icons carry a non-colour cue as well.</p>
      </TabGroup.Pane>

      <TabGroup.Pane id="comp">
        <div className="ds-grid">
          <div className="ds-block ds-comp"><div className="ds-meta">Buttons</div><button className="ds-btn" style={{ background: '#E9A13B' }}>Primary</button><button className="ds-btn" style={{ background: '#12312C', color: '#E9A13B' }}>Secondary</button><button className="ds-btn ghost">Ghost</button><button className="ds-btn" style={{ background: '#4FB3A0', color: '#062b24' }}>Accent</button></div>
          <div className="ds-block ds-comp"><div className="ds-meta">Chips · inputs</div><div className="ds-input"><span>Find your flavor</span></div><div className="ds-chip" style={{ background: '#F6D69B' }}>Swahili</div><div className="ds-chip" style={{ background: '#4FB3A0', color: '#062b24' }}>Vegan</div><div className="ds-chip dark" style={{ background: '#12312C', color: '#E9A13B' }}>4★+</div></div>
          <div className="ds-block ds-comp"><div className="ds-meta">Nav · tab bar</div><div className="ds-navbar" style={{ background: '#12312C' }}><span className="on" style={{ color: '#E9A13B' }}>Home</span><span>Recipes</span><span>PikaChef</span><span>More</span></div><div className="ds-tabbar"><span className="active">⌂<br />Home</span><span>◍<br />Recipes</span><span>♨<br />PikaChef</span><span>≡<br />More</span></div></div>
          <div className="ds-block ds-comp"><div className="ds-meta">Feedback</div><div className="ds-toast success">✓ Added to meal kit</div><div className="ds-toast danger">! Contains nuts</div><div className="ds-toast info">i Chef verification pending</div></div>
        </div>
      </TabGroup.Pane>

      <TabGroup.Pane id="posters">
        <div className="poster-grid">
          <div className="poster" style={{ background: 'linear-gradient(135deg,#12312C,#081815)', color: '#E9A13B' }}><div className="p-eyebrow">PIKABOX</div><div className="p-h">A world of culinary experience.</div><div className="p-foot">pikabox.co</div></div>
          <div className="poster" style={{ background: 'linear-gradient(135deg,#E9A13B,#f2c179)', color: '#12312C' }}><div className="p-eyebrow">PIKACHEF</div><div className="p-h">A chef on demand.</div><div className="p-foot">Book in 4 steps</div></div>
          <div className="poster" style={{ background: 'linear-gradient(135deg,#4FB3A0,#2e8674)', color: '#062b24' }}><div className="p-eyebrow">MEAL KITS</div><div className="p-h big">P</div><div className="p-foot">Delivered ready to cook.</div></div>
        </div>
      </TabGroup.Pane>
    </TabGroup>
  </section>
  <section className="proj-section" id="iterations">
    <div className="kicker"><span className="kicker-num">05</span><h2 className="kicker-title">V1 → V2 Iterations</h2></div>
    <p className="ps-sub">Ten screens redesigned across both sides of the marketplace. V1 is what shipped first, V2 is the proposed design carried through usability testing. Toggle to isolate a version, or read the note under each pair for what changed and why.</p>
    <div className="vs-bar">
      <div className="vs-toggle">
        <button type="button" className={vsFilter === 'v1' ? "vs-btn active" : "vs-btn"} onClick={() => setVsFilter('v1')}>V1 only</button>
        <button type="button" className={vsFilter === 'both' ? "vs-btn active" : "vs-btn"} onClick={() => setVsFilter('both')}>Side by side</button>
        <button type="button" className={vsFilter === 'v2' ? "vs-btn active" : "vs-btn"} onClick={() => setVsFilter('v2')}>V2 only</button>
      </div>
      <span className="vs-hint">10 screen pairs · consumer + chef</span>
    </div>
    <div className={vsFilter === 'v1' ? "vs-grid only-v1" : vsFilter === 'v2' ? "vs-grid only-v2" : "vs-grid"} id="vsGrid">
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Onboarding Screens</span><span className="vs-card-n">01 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-blur"></div><div style={{ margin: 'auto 0', background: 'rgba(255,255,255,.72)', borderRadius: '8px', padding: '10px 8px', textAlign: 'center' }}><div className="pk-title">Explore Recipes</div><div className="pk-sub">Get your everyday cooking inspiration! Make cooking as easy as eating with the PikaBox recipes.</div></div><div className="pk-dots"><i className="on"></i><i></i><i></i><i></i><i></i><i></i></div><div className="pk-btn teal" style={{ marginTop: '6px' }}>Skip</div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-photo"></div><div className="pk-veil"></div><div className="pk-mt"><div className="pk-title lg">Discover <span className="am">culinary</span> delights!</div><div className="pk-sub">Explore mouthwatering recipes with a chef on demand & meal kits.</div><div className="pk-flex" style={{ marginTop: '7px' }}><div className="pk-btn ghost" style={{ flex: '1' }}>Back</div><div className="pk-btn" style={{ flex: '1.4' }}>Next</div></div><div className="pk-sub" style={{ textAlign: 'center', marginTop: '5px' }}>Join <span style={{ color: 'var(--pk-amber)' }}>PikaCommunity</span>. Skip</div></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 leaned on a blurred gradient and a translucent card, so the value proposition competed with the background. V2 moves to full-bleed food photography with a dark veil, promotes one amber-accented headline, and replaces the lone Skip with an explicit Back / Next pair plus a PikaCommunity opt-in.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Preference Screen</span><span className="vs-card-n">02 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-blur"></div><div className="pk-title" style={{ textAlign: 'center', marginBottom: '6px' }}>What is your<br />favourite cuisine?</div><div className="pk-grid g3" style={{ gap: '5px' }}><div className="pk-circ"></div><div className="pk-circ a"></div><div className="pk-circ b"></div><div className="pk-circ c"></div><div className="pk-circ a"></div><div className="pk-circ"></div><div className="pk-circ b"></div><div className="pk-circ c"></div><div className="pk-circ a"></div></div><div className="pk-sub" style={{ textAlign: 'center', marginTop: '5px', textDecoration: 'underline' }}>Add other cuisines</div><div className="pk-btn pale" style={{ marginTop: 'auto', width: '56%', marginInline: 'auto' }}>Next</div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span>Select your preference</span></div><div className="pk-sub" style={{ margin: '-4px 0 6px' }}>This helps us to curate your feed to your liking</div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden' }}>
<div><div className="pk-lbl">Favourite cuisine</div><div className="pk-chips"><span className="pk-chip on">Swahili</span><span className="pk-chip">Chinese</span><span className="pk-chip">Italian</span><span className="pk-chip">Mexican</span><span className="pk-chip">Indian</span></div></div>
<div><div className="pk-lbl">Dietary preference</div><div className="pk-chips"><span className="pk-chip teal">Vegan</span><span className="pk-chip">Keto</span><span className="pk-chip">Halal</span></div></div>
<div><div className="pk-lbl">Allergies to consider</div><div className="pk-chips"><span className="pk-chip on">Nuts</span><span className="pk-chip">Dairy</span><span className="pk-chip">Gluten</span></div></div>
<div><div className="pk-lbl">Cooking skill level</div><div className="pk-steps"><i className="on"></i><i className="on"></i><i></i></div></div></div>
<div className="pk-btn dark" style={{ marginTop: '5px' }}>Get started</div><div className="pk-btn ghost" style={{ marginTop: '4px' }}>Skip for now</div></div></div></div></div>
        </div>
        <p className="vs-note">V1 asked one question per screen using unlabelled cuisine circles, adding six screens to first-run. V2 collapses all six preference questions into one scrollable form with labelled chip groups and a visible skill slider, so onboarding completes in a single pass.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Recipes (Homepage)</span><span className="vs-card-n">03 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span style={{ margin: '0 auto' }}>Recipes</span></div><div className="pk-flex" style={{ marginBottom: '5px' }}><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>Add recipe</div><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>My recipe</div></div><div className="pk-search" style={{ marginBottom: '5px' }}>Discover recipes that... <span style={{ marginLeft: 'auto' }}>Filter</span></div><div className="pk-chips" style={{ marginBottom: '5px' }}><span className="pk-chip on">All</span><span className="pk-chip">Rating</span><span className="pk-chip">Language</span><span className="pk-chip">Cuisine</span></div><div className="pk-lbl">For you</div><div className="pk-grid" style={{ marginBottom: '5px' }}><div className="pk-tile"><div className="im"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe · 4.3</span></div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe · 4.1</span></div></div></div><div className="pk-lbl">Top rated recipes</div><div className="pk-grid"><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe</span></div></div><div className="pk-tile"><div className="im"></div><div className="tx"><b>Vegan Mushroom</b><span>By John Doe</span></div></div></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaBox</span><span className="pk-sp">◔ ♡ ⌂</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>Find your flavor <span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>Filter</span></div><div className="pk-chips" style={{ marginBottom: '6px' }}><span className="pk-chip on">For you</span><span className="pk-chip">Top rated</span><span className="pk-chip">Meal kits</span><span className="pk-chip">Chefs</span></div><div className="pk-lbl">Discover culinary delights</div><div className="pk-grid" style={{ marginBottom: '5px' }}><div className="pk-tile"><div className="im"></div><div className="tx"><b>Chicken Tikka</b><span>15 min · 4.3 ★</span></div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Vegan Mushroom</b><span>25 min · 4.6 ★</span></div></div></div><div className="pk-lbl">Continue cooking</div><div className="pk-grid"><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Beef Pilau</b><span>Step 3 of 6</span></div></div><div className="pk-tile"><div className="im"></div><div className="tx"><b>Coconut Curry</b><span>Step 1 of 5</span></div></div></div><div className="pk-tabbar"><span className="on"><i>⌂</i>Home</span><span><i>◍</i>Recipes</span><span><i>♨</i>PikaChef</span><span><i>≡</i>More</span></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 opened with two competing action buttons and unlabelled filter chips above three near-identical shelves. V2 leads with the PikaBox brand bar and search, keeps one active filter set, and gives every recipe card time, rating, and progress metadata plus a persistent tab bar.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Search Filters (Bottom Sheet)</span><span className="vs-card-n">04 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span style={{ margin: '0 auto' }}>Filter</span><span className="pk-sp">✕</span></div><div className="pk-search" style={{ marginBottom: '6px' }}>Find your flavor!</div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden' }}><div><div className="pk-lbl">PikPick</div><div className="pk-chips"><span className="pk-chip">1 star</span><span className="pk-chip">2 star</span><span className="pk-chip">3 star</span><span className="pk-chip">4 star</span><span className="pk-chip">5 star</span></div></div><div><div className="pk-lbl">Cuisine</div><div className="pk-chips"><span className="pk-chip">Swahili</span><span className="pk-chip">Indian</span><span className="pk-chip">Mexican</span><span className="pk-chip">French</span><span className="pk-chip">Italian</span><span className="pk-chip">Japanese</span></div></div><div><div className="pk-lbl">Meal type</div><div className="pk-chips"><span className="pk-chip">Breakfast</span><span className="pk-chip">Lunch</span><span className="pk-chip">Brunch</span><span className="pk-chip">Dinner</span></div></div><div><div className="pk-lbl">Ingredients</div><div className="pk-chips"><span className="pk-chip">With</span><span className="pk-chip">Without</span></div></div><div><div className="pk-lbl">Nutrition</div><div className="pk-chips"><span className="pk-chip">Breakfast</span><span className="pk-chip">Lunch</span><span className="pk-chip">Dinner</span></div></div></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaBox</span></div><div className="pk-grid" style={{ opacity: '.25', marginBottom: '4px' }}><div className="pk-tile"><div className="im"></div></div><div className="pk-tile"><div className="im g"></div></div></div><div className="pk-sheet"><div className="pk-sheet-h"><span>Filter</span><span style={{ opacity: '.6' }}>Reset ✕</span></div><div className="pk-gap"><div><div className="pk-lbl">Rating</div><div className="pk-chips"><span className="pk-chip">3★</span><span className="pk-chip on">4★+</span><span className="pk-chip">5★</span></div></div><div><div className="pk-lbl">Cuisine</div><div className="pk-chips"><span className="pk-chip on">Swahili</span><span className="pk-chip">Indian</span><span className="pk-chip">Italian</span></div></div><div><div className="pk-lbl">Diet · Allergens</div><div className="pk-chips"><span className="pk-chip teal">Vegan</span><span className="pk-chip">Nut-free</span></div></div></div><div className="pk-flex" style={{ marginTop: '7px' }}><div className="pk-btn ghost" style={{ flex: '1' }}>Clear</div><div className="pk-btn" style={{ flex: '1.6' }}>Show 42 recipes</div></div></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 pushed filtering to a full-page takeover with six ungrouped sections and no result count. V2 uses a bottom sheet over live results, groups rating / cuisine / diet, and closes with a live count so members can see the consequence of a filter before applying it.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Recipe Screen</span><span className="vs-card-n">05 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span className="pk-back">‹</span><span>Chicken Tikka</span></div><div style={{ aspectRatio: '1.7', borderRadius: '6px', background: 'linear-gradient(140deg,#6b4b1e,#2a1c08)', marginBottom: '5px' }}></div><div className="pk-title">Chicken Tikka</div><div className="pk-row"><span className="av"></span><div className="tx"><b>By John Doe</b><span>15 min</span></div><span className="pk-sp">☏ ✉</span></div><div className="pk-chips" style={{ margin: '5px 0' }}><span className="pk-chip">65 g carbs</span><span className="pk-chip">27 g proteins</span><span className="pk-chip">120 Kcal</span><span className="pk-chip">11 g fats</span></div><div className="pk-row"><b>10 servings</b><span className="pk-amt">Edit</span></div><div className="pk-flex" style={{ margin: '5px 0' }}><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>Ingredients</div><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>Instructions</div></div><div className="pk-row"><div className="tx"><b>Yogurt cup</b></div><span className="qty"><i>-</i>1<i>+</i></span></div><div className="pk-row"><div className="tx"><b>Lemon juice</b></div><span className="qty"><i>-</i>1<i>+</i></span></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div style={{ position: 'absolute', inset: '0 0 62% 0', background: 'linear-gradient(140deg,#6b4b1e,#2a1c08)' }}></div><div style={{ position: 'absolute', inset: '0 0 62% 0', background: 'linear-gradient(180deg,rgba(8,24,21,.4),rgba(8,24,21,.9))' }}></div><div className="pk-appbar"><span className="pk-back">‹</span><span>Chicken Tikka</span><span className="pk-sp">♡ ⤴</span></div><div style={{ marginTop: '44%' }}><div className="pk-title lg">Chicken Tikka</div><div className="pk-row"><span className="av"></span><div className="tx"><b>By John Doe</b><span>Verified PikaChef · 4.3 ★</span></div><span className="pk-sp">☏ ✉</span></div><div className="pk-chips" style={{ margin: '5px 0' }}><span className="pk-chip on">15 min</span><span className="pk-chip">65 g carbs</span><span className="pk-chip">27 g protein</span><span className="pk-chip">120 Kcal</span></div><div className="pk-chips" style={{ marginBottom: '5px' }}><span className="pk-chip teal">Nut-free</span><span className="pk-chip">Easy · 2 of 5</span></div><div className="pk-tabs"><span className="on">Ingredients</span><span>Instructions</span><span>Reviews</span></div><div className="pk-row"><div className="tx"><b>Yogurt cup</b><span>200 g</span></div><span className="qty"><i>-</i>1<i>+</i></span></div><div className="pk-row"><div className="tx"><b>Lemon juice</b><span>1 tbsp</span></div><span className="qty"><i>-</i>1<i>+</i></span></div></div><div className="pk-btn pk-mt">Add to meal kit · KSh 1,000</div></div></div></div></div>
        </div>
        <p className="vs-note">V1 stacked a small photo, macros, servings, and a tab row with no allergen or difficulty signal. V2 elevates the photo to a hero, adds the verified-chef row, and surfaces allergen and difficulty chips before ingredients — the structured recipe-card hierarchy in practice.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Recipe Guided Instructions</span><span className="vs-card-n">06 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span className="pk-back">‹</span><span>Chicken Tikka</span></div><div className="pk-gap" style={{ flex: '1', fontSize: '6.5px', lineHeight: '1.4', opacity: '.85' }}><p style={{ margin: '0' }}><b>3.</b> Lorem ipsum dolor sit amet consectetur. Vivamus pretium sapien velit vitae tincidunt senectus consequat malesuada. Nunc massa metus ut quam nisl.</p><p style={{ margin: '0' }}><b>4.</b> Lorem ipsum dolor sit amet consectetur. Sed odio amet lobortis consectetur amet quis fringilla pulvinar sit. Id urna quis cras vitae in libero est.</p><p style={{ margin: '0' }}><b>5.</b> Senectus arcu ornare dolor eu purus vestibulum quis mauris iaculis. Mattis ornare euismod.</p></div><div className="pk-flex" style={{ marginTop: 'auto' }}><div className="pk-btn pale" style={{ flex: '1' }}>Previous</div><div className="pk-btn pale" style={{ flex: '1' }}>Next</div></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-back">‹</span><span>Chicken Tikka</span><span className="pk-sp">Step 3 of 6</span></div><div className="pk-steps"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i><i></i></div><div style={{ aspectRatio: '1.7', borderRadius: '6px', background: 'linear-gradient(140deg,#5d4a22,#22150a)', display: 'grid', placeItems: 'center', marginBottom: '6px' }}><div className="pk-play">▶</div></div><div className="pk-lbl">Marinate</div><div style={{ fontSize: '7px', lineHeight: '1.45', opacity: '.85' }}>Coat the chicken in the yogurt-spice mix. Cover and rest for 20 minutes so the marinade penetrates evenly.</div><div className="pk-verify" style={{ marginTop: '6px' }}><span style={{ color: 'var(--pk-amber)' }}>⏱</span><div>Timer · 20 min<div style={{ opacity: '.6' }}>Tap to start in-app</div></div></div><div className="pk-flex pk-mt"><div className="pk-btn ghost" style={{ flex: '1' }}>Previous</div><div className="pk-btn" style={{ flex: '1.4' }}>Next step</div></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 rendered raw numbered paragraphs with no sense of position or progress. V2 adds a step-of-six progress bar, a step video card, a named step label, and an in-app timer, turning a text dump into a guided cooking session.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Checkout Screen</span><span className="vs-card-n">07 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span className="pk-back">‹</span><span>Checkout</span></div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden' }}><div className="pk-row"><div className="tx"><b>Tablespoon lemon juice</b><span>KSh 1,000</span></div><span className="qty"><i>-</i>1<i>+</i></span></div><div className="pk-row"><div className="tx"><b>Teaspoon ground cumin</b><span>KSh 1,000</span></div><span className="qty"><i>-</i>1<i>+</i></span></div><div className="pk-row"><div className="tx"><b>Teaspoon cinnamon</b><span>KSh 1,000</span></div><span className="qty"><i>-</i>1<i>+</i></span></div><div className="pk-search">Add promo code<span style={{ marginLeft: 'auto' }}>Apply</span></div><div className="pk-row"><div className="tx"><b>Delivery details</b><span>Lemac, Church rd</span></div><span className="pk-amt">Change</span></div><div className="pk-row"><div className="tx"><b>Payment option</b><span>Credit card VISA ····1234</span></div><span className="pk-amt">Change</span></div><div className="pk-row"><span>Sub-total</span><span className="pk-amt">KSh 20,000</span></div><div className="pk-row"><span>Tax</span><span className="pk-amt">KSh 1,000</span></div></div><div className="pk-btn pale">Pay KSh 21,000</div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-back">‹</span><span>Checkout</span><span className="pk-sp">2 of 4</span></div><div className="pk-steps"><i className="on"></i><i className="on"></i><i></i><i></i></div><div className="pk-verify" style={{ marginBottom: '5px' }}><span style={{ color: 'var(--pk-amber)' }}>◍</span><div><b>Chicken Tikka kit</b><div style={{ opacity: '.6' }}>10 servings · 12 items</div></div><span className="pk-amt am">KSh 20,000</span></div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden' }}><div className="pk-row"><div className="tx"><b>Deliver to</b><span>Lemac, Church rd · Today 6pm</span></div><span className="pk-amt am">Change</span></div><div className="pk-row"><div className="tx"><b>Pay with</b><span>M-Pesa ···982</span></div><span className="pk-amt am">Change</span></div><div className="pk-search">Promo code<span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>Apply</span></div><div className="pk-row"><span>Sub-total</span><span className="pk-amt">KSh 20,000</span></div><div className="pk-row"><span>Tax</span><span className="pk-amt">KSh 1,000</span></div><div className="pk-row"><b>Total</b><span className="pk-amt am">KSh 21,000</span></div></div><div className="pk-btn">Pay KSh 21,000</div><div className="pk-sub" style={{ textAlign: 'center', marginTop: '3px' }}>Free cancellation up to 2 hrs before</div></div></div></div></div>
        </div>
        <p className="vs-note">V1 was a nine-step flow with every ingredient row, promo, delivery, and payment field on one dense page. V2 applies progressive disclosure: a collapsed kit summary, smart-defaulted delivery and payment, a four-step indicator, and cancellation terms above the pay button.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Chef Listing Screen</span><span className="vs-card-n">08 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span className="pk-sp" style={{ margin: '0' }}>≡</span><span>Pikachef</span><span className="pk-sp">◉</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>nyama,magadi,3-4 stars<span style={{ marginLeft: 'auto' }}>Nairobi</span></div><div className="pk-chips" style={{ marginBottom: '5px' }}><span className="pk-chip">3-4 Rating</span><span className="pk-chip">Near Magadi-Airbnb</span><span className="pk-chip">Kenyan cui</span></div><div className="pk-grid"><div className="pk-tile"><div className="im"></div><div className="tx"><b>Robert Fox</b><span>Langata</span></div><div className="pk-btn pale" style={{ margin: '3px', fontSize: '6px' }}>PikaChef</div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Robert Fox</b><span>Langata</span></div><div className="pk-btn pale" style={{ margin: '3px', fontSize: '6px' }}>PikaChef</div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Robert Fox</b><span>Langata</span></div><div className="pk-btn pale" style={{ margin: '3px', fontSize: '6px' }}>PikaChef</div></div><div className="pk-tile"><div className="im"></div><div className="tx"><b>Robert Fox</b><span>Langata</span></div><div className="pk-btn pale" style={{ margin: '3px', fontSize: '6px' }}>PikaChef</div></div></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-brand"><i></i>PikaChef</span><span className="pk-sp">◔</span></div><div className="pk-search" style={{ marginBottom: '5px' }}>I want a chef<span style={{ marginLeft: 'auto', color: 'var(--pk-amber)' }}>◉ Nairobi</span></div><div className="pk-flex" style={{ marginBottom: '5px', fontSize: '6px' }}><div className="pk-chip" style={{ flex: '1', textAlign: 'center' }}>Select date</div><div className="pk-chip" style={{ flex: '1', textAlign: 'center' }}>Choose time</div></div><div className="pk-chips" style={{ marginBottom: '6px' }}><span className="pk-chip on">4★+</span><span className="pk-chip">Near me</span><span className="pk-chip">At my kitchen</span><span className="pk-chip">Swahili</span></div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden' }}><div className="pk-row"><span className="av"></span><div className="tx"><b>Robert Fox</b><span>Langata · 4.8 ★ · KSh 2,500/hr</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Marvin McKinney</b><span>Kilimani · 4.6 ★ · KSh 2,200/hr</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Cody Fisher</b><span>Westlands · 4.5 ★ · KSh 3,000/hr</span></div><div className="pk-btn" style={{ fontSize: '6px', padding: '4px 7px' }}>PikaChef</div></div></div><div className="pk-tabbar"><span><i>⌂</i>Home</span><span><i>◍</i>Recipes</span><span className="on"><i>♨</i>PikaChef</span><span><i>≡</i>More</span></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 used a two-column card grid where each chef showed only a name and area, so members could not compare. V2 switches to comparison-friendly rows with rating, area, and hourly rate, and moves date, time, and location to the top as booking criteria.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Chef KYC Screens</span><span className="vs-card-n">09 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span style={{ margin: '0 auto' }}>Verify your account</span></div><div className="pk-sub" style={{ textAlign: 'center', margin: '-4px 0 6px' }}>This helps us to curate your feed to your liking</div><div className="pk-lbl">Culinary Background</div><div className="pk-sub" style={{ marginBottom: '5px' }}>Add relevant work experience &nbsp; Step 1 of 6</div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden' }}><div className="pk-row"><div className="tx"><b>1. Mövenpick</b><span>Wing B Main Chef</span></div><span className="pk-amt">Edit Delete</span></div><div className="pk-row"><div className="tx"><b>2. Mövenpick</b><span>Wing B Main Chef</span></div><span className="pk-amt">Edit Delete</span></div><div><div className="pk-lbl">Employer*</div><div className="pk-search">Cafe Mocha</div></div><div><div className="pk-lbl">Position held*</div><div className="pk-search">Wing B Main Chef</div></div><div className="pk-flex"><div style={{ flex: '1' }}><div className="pk-lbl">From*</div><div className="pk-search">dd/mm/year</div></div><div style={{ flex: '1' }}><div className="pk-lbl">To*</div><div className="pk-search">dd/mm/year</div></div></div></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div className="pk-appbar"><span className="pk-back">‹</span><span>Verify your chef account</span></div><div className="pk-verify" style={{ marginBottom: '6px' }}><span className="pk-ring"><b>40%</b></span><div><b>40% complete</b><div style={{ opacity: '.65' }}>Unlock the curated PikaBox chef experience</div></div></div><div className="pk-steps"><i className="on"></i><i className="on"></i><i></i><i></i><i></i><i></i></div><div className="pk-lbl">Step 2 of 6 · Verification</div><div className="pk-gap" style={{ flex: '1', overflow: 'hidden', marginTop: '3px' }}><div className="pk-row"><span style={{ color: 'var(--pk-teal)' }}>✓</span><div className="tx"><b>Government ID</b><span>Verified via SmileID</span></div></div><div className="pk-row"><span style={{ color: 'var(--pk-teal)' }}>✓</span><div className="tx"><b>Culinary background</b><span>2 employers added</span></div></div><div className="pk-row"><span style={{ color: 'var(--pk-amber)' }}>◔</span><div className="tx"><b>Certificates</b><span>Diplomas · ServSafe</span></div><span className="pk-amt am">Upload</span></div><div className="pk-row"><span style={{ opacity: '.4' }}>○</span><div className="tx"><b>Terms & legal</b><span>Sign via DocuSign</span></div></div><div className="pk-row"><span style={{ opacity: '.4' }}>○</span><div className="tx"><b>Interview</b><span>Book via Calendly</span></div></div></div><div className="pk-flex" style={{ marginTop: '5px' }}><div className="pk-btn ghost" style={{ flex: '1' }}>Skip</div><div className="pk-btn" style={{ flex: '1.6' }}>Verify profile</div></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 dropped chefs straight into a work-experience form with a Step 1 of 6 label and no sense of what remained. V2 opens with a 40% completion ring, itemises all five verification tasks with SmileID, DocuSign, and Calendly states, and makes the next action unambiguous.</p>
      </div>
      <div className="vs-card">
        <div className="vs-card-h"><span className="vs-card-t">Chef Profile</span><span className="vs-card-n">10 / 10</span></div>
        <div className="vs-pair">
          <div className="vs-slot" data-v="1"><span className="vs-badge v1">V1 · Current</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v1"><div className="pk-appbar"><span style={{ margin: '0 auto' }}>Profile</span><span className="pk-sp">⚙</span></div><div className="pk-prof" style={{ marginBottom: '5px' }}><span className="av"></span><b style={{ fontSize: '9px' }}>John Doe</b><span style={{ fontSize: '6px', opacity: '.6' }}>Langata · 4.2</span></div><div className="pk-stats"><div><b>100</b><span>Posts</span></div><div><b>10</b><span>Recipes</span></div><div><b>10</b><span>HCM</span></div><div><b>10</b><span>Challenges</span></div></div><div className="pk-flex" style={{ margin: '5px 0' }}><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>Notifications</div><div className="pk-btn pale" style={{ flex: '1', fontSize: '6.5px' }}>Edit</div></div><div className="pk-tabs"><span className="on">Messages</span><span>Recipes</span><span>Mealkits</span><span>Meal plans</span></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Marvin McKinney</b><span>Lorem ipsum dolor sit amet</span></div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Cody Fisher</b><span>Lorem ipsum dolor sit amet</span></div></div><div className="pk-row"><span className="av"></span><div className="tx"><b>Wade Warren</b><span>Lorem ipsum dolor sit amet</span></div></div></div></div></div></div>
          <div className="vs-slot" data-v="2"><span className="vs-badge v2">V2 · Proposed</span><div className="phone-frame-inline small"><div className="ph-notch"></div><div className="ph-screen"><div className="pk pk-v2"><div style={{ position: 'absolute', inset: '0 0 76% 0', background: 'linear-gradient(140deg,#6b4b1e,#2a1c08)' }}></div><div style={{ position: 'absolute', inset: '0 0 76% 0', background: 'linear-gradient(180deg,rgba(8,24,21,.3),rgba(12,36,32,.95))' }}></div><div className="pk-appbar"><span className="pk-back">‹</span><span>Profile</span><span className="pk-sp">⚙ ✎</span></div><div className="pk-prof" style={{ margin: '14% 0 5px' }}><span className="av"></span><b style={{ fontSize: '9.5px' }}>John Doe</b><div className="pk-chips" style={{ justifyContent: 'center' }}><span className="pk-chip teal">✓ Verified</span><span className="pk-chip on">4.2 ★</span><span className="pk-chip">Langata</span></div></div><div className="pk-stats"><div><b>100</b><span>Posts</span></div><div><b>80</b><span>Recipes</span></div><div><b>80</b><span>Meal kits</span></div><div><b>70</b><span>Reviews</span></div></div><div className="pk-verify" style={{ margin: '5px 0' }}><span style={{ color: 'var(--pk-teal)' }}>▲</span><div><b>Chef Dashboard</b><div style={{ opacity: '.65' }}>Last 30 days</div></div><span className="pk-amt" style={{ color: 'var(--pk-teal)' }}>700%</span></div><div className="pk-tabs"><span className="on">Recipes</span><span>Meal kits</span><span>Meal plans</span><span>Challenges</span></div><div className="pk-grid"><div className="pk-tile"><div className="im"></div><div className="tx"><b>Vegan Mushroom</b><span>4.3 ★</span></div></div><div className="pk-tile"><div className="im g"></div><div className="tx"><b>Beef Pilau</b><span>4.6 ★</span></div></div></div></div></div></div></div>
        </div>
        <p className="vs-note">V1 profile read as a message inbox with generic counters and no credibility signals. V2 leads with a photo header, verified badge and rating, restructures stats around recipes and meal kits, and surfaces the chef dashboard performance card.</p>
      </div>
    </div>
  </section>
  <section className="proj-section" id="mockups">
    <div className="kicker"><span className="kicker-num">06</span><h2 className="kicker-title">Brand, Merchandise & Campaign Mockups</h2></div>
    <p className="ps-sub">The identity applied off-screen: packaging that arrives with the meal kit, merchandise that travels with chefs, and campaign assets that carried the launch across OOH and social.</p>
    <div className="mock-gallery">
      <div className="mg-card wide">
        <div className="mg-stage amber"><div className="mk-bill"><div className="mk-bill-l"><div className="bb"><i></i>PikaBox</div><h4>A world of culinary experience!</h4><div className="u">https://pikabox.co</div></div><div className="mk-bill-r"><i></i><i></i></div></div></div>
        <div className="mg-cap"><span className="mg-t">Launch billboard</span><span className="mg-m">OOH · 6 × 3 m</span></div>
        <p className="mg-d">Amber field, italic serif headline, and two device shots. Placed at Nairobi transit hubs during launch month to carry the app-install funnel.</p>
      </div>
      <div className="mg-card">
        <div className="mg-stage"><div className="mk-tote"><span>Pik</span></div></div>
        <div className="mg-cap"><span className="mg-t">Cotton tote</span><span className="mg-m">Merch</span></div>
        <p className="mg-d">Chef and member merchandise. Wordmark cropped so the mark reads at market-stall distance.</p>
      </div>
      <div className="mg-card">
        <div className="mg-stage dark"><div className="mk-bag"><span>Pika box</span></div></div>
        <div className="mg-cap"><span className="mg-t">Delivery bag</span><span className="mg-m">Packaging</span></div>
        <p className="mg-d">Kraft carrier for chef-delivered orders. Stacked wordmark survives the fold and the handle cut-out.</p>
      </div>
      <div className="mg-card">
        <div className="mg-stage"><div className="mk-icons"><div className="mk-icon a">🍱</div><div className="mk-icon b">🍱</div><div className="mk-icon c">🍱</div></div></div>
        <div className="mg-cap"><span className="mg-t">App icon set</span><span className="mg-m">iOS · Android</span></div>
        <p className="mg-d">Three approved backgrounds — amber, teal, and kitchen dark — so the icon holds on any wallpaper.</p>
      </div>
      <div className="mg-card">
        <div className="mg-stage"><div className="mk-box"><div className="lid">PikaBox</div><div className="body"></div></div></div>
        <div className="mg-cap"><span className="mg-t">Meal kit box</span><span className="mg-m">Packaging</span></div>
        <p className="mg-d">Serving count and recipe name print on the body panel so a member can identify a kit without opening it.</p>
      </div>
      <div className="mg-card">
        <div className="mg-stage dark"><div className="mk-apron"><span>P</span></div></div>
        <div className="mg-cap"><span className="mg-t">Chef apron</span><span className="mg-m">Uniform</span></div>
        <p className="mg-d">Issued on verification. Wearing it is the physical counterpart of the in-app verified badge.</p>
      </div>
      <div className="mg-card wide">
        <div className="mg-stage dark"><div className="mk-carousel">
          <div className="mk-slide">A world of culinary experience!<em>01</em></div>
          <div className="mk-slide">Discover culinary delights!<em>02</em></div>
          <div className="mk-slide">Add your culinary art!<em>03</em></div>
          <div className="mk-slide">Spread the flavor in PikaSocial<em>04</em></div>
          <div className="mk-slide">Join the PikaBox movement<em>05</em></div>
        </div></div>
        <div className="mg-cap"><span className="mg-t">Launch carousel</span><span className="mg-m">Social · 5 slides</span></div>
        <p className="mg-d">A five-slide sequence covering the value proposition, the recipe library, chef partnership, PikaSocial, and the community close.</p>
      </div>
      <div className="mg-card">
        <div className="mg-stage amber"><div className="mk-stickers"><i>🍳</i><i>🌿</i><i>P</i><i>🔥</i><i>★</i><i>🍱</i></div></div>
        <div className="mg-cap"><span className="mg-t">Sticker sheet</span><span className="mg-m">Kit insert</span></div>
        <p className="mg-d">Ships inside each kit. Doubles as the icon set's stress test at small print sizes.</p>
      </div>
    </div>
  </section>
  <section className="proj-section" id="outcome">
    <div className="kicker"><span className="kicker-num">07</span><h2 className="kicker-title">Conclusion · Outcome</h2></div>
    <p className="ps-sub">Measured against the validation plan set in Section 02.</p>
    <div className="outcome-grid">
      <div className="oc-card"><div className="oc-n">+40%</div><div className="oc-l">Task Completion Rate</div><div className="oc-d">Browse to order journey</div></div>
      <div className="oc-card"><div className="oc-n">+70%</div><div className="oc-l">Dev Handoff Rate</div><div className="oc-d">Components shipped without rework</div></div>
      <div className="oc-card"><div className="oc-n">+60%</div><div className="oc-l">System Usability Scale</div><div className="oc-d">54 → 86 across three cycles</div></div>
      <div className="oc-card"><div className="oc-n">9→4</div><div className="oc-l">Checkout steps</div><div className="oc-d">Progressive disclosure + smart defaults</div></div>
    </div>
  </section>
  <section className="proj-section" id="reflection">
    <div className="kicker"><span className="kicker-num">08</span><h2 className="kicker-title">Reflection & Learnings</h2></div>
    <ul className="ps-list">
      <li>Marketplaces fail on supply first. Shipping chef verification and My Kitchen before consumer-side polish was the decision the launch depended on.</li>
      <li>A nine-step checkout is never a polish problem. It is a delete-steps-until-the-product-still-works problem, and progressive disclosure is how you find the floor.</li>
      <li>Structured recipe cards did more for trust than any visual pass. Allergens above the fold changed who would use the product at all.</li>
      <li>Building the design system in week one, not week ten, is where the 70% dev handoff lift actually came from.</li>
      <li>Three usability cycles felt generous at the time. Reading the V1 to V2 notes back, two more would still have surfaced new problems.</li>
    </ul>
  </section>
  <section className="proj-section">
    <div className="section-head" style={{ marginTop: '12px' }}>
      <h2 className="h-section" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Other Projects</h2>
      <a href="Projects.html" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></a>
    </div>
    <div className="other-grid">
      <a href="Fortune eCash v2.html" className="project-card">
        <div className="thumb"><img src="assets/phone-card.png" alt="" /></div>
        <div className="row"><span className="title">Fortune eCash App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
        <div className="tags"><span className="pill">UI/UX</span><span className="pill">Fintech</span><span className="pill">Research</span><span className="pill">Marketing</span></div>
      </a>
      <a href="AgriFlow.html" className="project-card">
        <div className="thumb"><img src="assets/phone-card.png" alt="" /></div>
        <div className="row"><span className="title">AgriFlow App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
        <div className="tags"><span className="pill">UI/UX</span><span className="pill">AgriTech</span><span className="pill">Field Research</span><span className="pill">Localisation</span></div>
      </a>
      <a href="Advenio.html" className="project-card">
        <div className="thumb web"><div className="thumb-browser"><div className="tb-bar"><span></span><span></span><span></span></div><div className="tb-body"><div className="tb-h">Find your stay.</div><div className="tb-line"></div><div className="tb-grid"><div className="tb-tile"></div><div className="tb-tile gold"></div><div className="tb-tile gold"></div><div className="tb-tile"></div></div><div className="tb-cta">Book now</div></div></div></div>
        <div className="row"><span className="title">Advenio Web App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
        <div className="tags"><span className="pill">UI/UX</span><span className="pill">Hospitality</span><span className="pill">Booking</span><span className="pill">Prototyping</span></div>
      </a>
    </div>
  </section>
      </main>

      <ModalRoot />
    </ModalProvider>
  );
}
