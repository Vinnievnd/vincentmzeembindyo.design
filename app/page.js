import Link from "next/link";
import ConceptCardReveal from "@/components/ConceptCardReveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, FEATURED_SLUGS } from "@/lib/projects";

export const metadata = {
  title: "Vincent Mzee Mbindyo — Product Designer",
  description: "Product design portfolio — case studies, brand identity, and motion work by Vincent Mzee Mbindyo.",
};

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug));

  return (
    <>
      {/* ===== HERO ===== */}
      <header className="hero hero-xl">
        <div className="container">
          <h1 className="hero-display" data-load>
            <span className="hd-line" style={{ position: "relative" }}>I design
              <span className="hero-vid" aria-label="Showreel of micro-interactions">
                <span className="hv-scene">
                  <span className="hv-phone"><i></i><i></i><i></i><span className="hv-dot"></span></span>
                </span>
                <span className="hv-label">Reel</span>
              </span>
              products
            </span>
            <span className="hd-line">for <span className="hd-em">humans</span>.</span>
          </h1>
          <p className="lead" data-load>Senior Product Designer and Customer Experience specialist with 6+ years designing UX and UI for mobile and web products across Fintech, eCommerce, SaaS, and B2C. I work where design, data, and go-to-market meet; reading behavioural and funnel data, shaping the service around it, then building the interface that ships.</p>
          <div className="hero-standfirst" data-load>
            <span className="pill">Product Strategy</span>
            <span className="pill">UX Research</span>
            <span className="pill">UI/UX Design</span>
            <span className="pill">Data Informed Design</span>
            <span className="pill">Service Design</span>
            <span className="pill">Customer Insights</span>
            <span className="pill">eCommerce Onsite Ops</span>
            <span className="pill">Motion &amp; Micro-interactions</span>
            <span className="pill">Front-End Code</span>
            <span className="pill">No-Code Design</span>
          </div>
          <div className="markets" data-load>
            <span className="m-l">Working across</span>
            <span className="m-v">
              <span>East Africa</span>
              <span>Southern Africa</span>
              <span>West Africa</span>
              <span>North Africa</span>
              <span>Dubai &amp; GCC</span>
              <span>Remote · International</span>
            </span>
          </div>
        </div>
      </header>

      {/* ===== DISCIPLINES ===== */}
      <section className="container disciplines">
        <h2 className="h-section">Where I&apos;m Different</h2>
        <p className="lead">Six lenses. One obsession: designing products that work for humans.</p>
        <div className="disc-grid">
          <div className="disc-card">
            <div className="disc-num">01</div>
            <div className="disc-h">Data Analytics</div>
            <p className="disc-p">Built Power BI dashboards tracking customer behaviour across every funnel stage. Triangulated GA, CRM, and campaign data into weekly leadership reports. Design decisions backed by numbers, not opinions.</p>
            <div className="disc-metric">+32% conversion via search &amp; onsite UX</div>
          </div>
          <div className="disc-card">
            <div className="disc-num">02</div>
            <div className="disc-h">Customer Insights</div>
            <p className="disc-p">User interviews, usability testing, and behavioural data tracking to optimize CX metrics. Partnered with IDEO on gender-inclusive UX research that shaped product strategy on a live fintech product.</p>
            <div className="disc-metric">-30% churn · +30% repeat purchase rate</div>
          </div>
          <div className="disc-card">
            <div className="disc-num">03</div>
            <div className="disc-h">Service Design</div>
            <p className="disc-p">Mapped end-to-end customer journeys across onsite, offline, and omnichannel touchpoints, including staff facing workflows, ticketing, and training. Designing the service, not just the screen.</p>
            <div className="disc-metric">-15% bounce · -25% journey completion time</div>
          </div>
          <div className="disc-card">
            <div className="disc-num">04</div>
            <div className="disc-h">eCommerce Onsite Operations</div>
            <p className="disc-p">Led search UX, Localization, Onsite Banners, Promotions, and Seasonal Campaign Support. Daily QA, Bug Tracking, and A/B testing on new features and UI updates.</p>
            <div className="disc-metric">+35% eCommerce visibility · -30% bug feedback</div>
          </div>
          <div className="disc-card">
            <div className="disc-num">05</div>
            <div className="disc-h">Digital Marketing</div>
            <p className="disc-p">Designed SMS, Email, In-App promotions, and Coupon Campaigns with Precision Media and Commercial teams. UX-led feature communication and launch experiences aligned to GTM strategy.</p>
            <div className="disc-metric">+50% user engagement · +25% feature awareness</div>
          </div>
          <div className="disc-card">
            <div className="disc-num">06</div>
            <div className="disc-h">Front-End Code</div>
            <p className="disc-p">Build responsive, SEO-optimized interfaces in HTML, CSS, and JavaScript. I speak to engineers in their constraints, which is why design-to-dev handoff is as efficient as the design itself.</p>
            <div className="disc-metric">+80% dev handoff efficiency</div>
          </div>
        </div>
      </section>

      {/* ===== TOP PROJECTS ===== */}
      <section className="container">
        <div className="section-head">
          <h2 className="h-section">Top Projects</h2>
          <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
        </div>

        <div className="top-projects">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ===== DESIGN PROCESS ===== */}
      <section className="container design-process">
        <h2 className="h-section">Design Process</h2>
        <p className="lead">I bridge the gap between what users feel and what the data says. Six years spent inside Fintech, eCommerce, and SaaS as a designer who deliberately built each lens.</p>

        <div className="process-grid">
          <div className="process-card"><h3>1. Empathize</h3><ul>
            <li>User Research</li><li>Behavioural Analytics</li><li>Funnel Analytics</li><li>Accessibility</li><li>Stakeholder Alignment</li>
          </ul></div>
          <div className="process-card"><h3>2. Define</h3><ul>
            <li>Journey Mapping</li><li>User Modelling</li><li>Problem Framing</li><li>Synthesis</li><li>Information Architecture</li>
          </ul></div>
          <div className="process-card"><h3>3. Ideate</h3><ul>
            <li>Crazy 8s</li><li>Design Sprints</li><li>AI-Driven Tasks</li><li>Concept Dev</li><li>Content Strategy</li>
          </ul></div>
          <div className="process-card"><h3>4. Prototype</h3><ul>
            <li>Wireframing</li><li>Hi-Fi Prototypes</li><li>Design Systems</li><li>Dev Handoff Specs</li>
          </ul></div>
          <div className="process-card"><h3>5. Test</h3><ul>
            <li>Usability Testing</li><li>A/B Testing</li><li>SUS Scoring</li><li>Quantitative Validation</li><li>Heuristic Evaluation</li>
          </ul></div>
          <div className="process-card"><h3>6. Iterate</h3><ul>
            <li>Post Launch Monitoring</li><li>Stakeholder Reporting</li><li>QA Review</li><li>OKR Tracking</li><li>KPI Tracking</li><li>Documentation</li>
          </ul></div>
        </div>

        <div className="skills-block">
          <h4>Core Skills</h4>
          <ul className="skills-list">
            <li><b>Product Strategy &amp; Ops:</b> Product Vision &amp; Roadmap, Data-Informed Design, A/B testing &amp; Experimentation, OKRs &amp; KPIs Performance Tracking, Cross-Functional Collaboration, and Reporting &amp; Workflow Optimization.</li>
            <li><b>User Experience:</b> User Research, User Interviews, Journey Mapping, Accessibility (WCAG), Usability Testing, SUS Scoring, Service Design, Customer Experience, Information Architecture, Quality Assurance (QA), and Bug Tracking.</li>
            <li><b>Use Interface &amp; Visual Design:</b> High-Fidelity Prototyping, Design Systems(WCAG-Aligned), Micro Interactions &amp; Motion, Typography, Color, Composition, Graphic Design, Video Editing, and Data Visualization.</li>
          </ul>
        </div>

        <div className="tools-block">
          <h4>Tools</h4>
          <div className="tools-row">
            <span className="pill">Figma</span>
            <span className="pill">Illustrator</span>
            <span className="pill">Photoshop</span>
            <span className="pill">Indesign</span>
            <span className="pill">After Effects</span>
            <span className="pill">Davinci Resolve</span>
            <span className="pill">Framer</span>
            <span className="pill">Power BI</span>
            <span className="pill">GA</span>
            <span className="pill">Tableau</span>
            <span className="pill">CMS</span>
          </div>
        </div>

        <div className="impact-block">
          <h4>Impact By Numbers</h4>
          <div className="impact-stats">
            <div className="stat"><div className="n">+32%</div><div className="l">Conversion Rate</div></div>
            <div className="stat"><div className="n">+50%</div><div className="l">User Engagement</div></div>
            <div className="stat"><div className="n">+31%</div><div className="l">Completed Transactions</div></div>
            <div className="stat"><div className="n">+30%</div><div className="l">Product Visibility</div></div>
            <div className="stat"><div className="n">+80%</div><div className="l">Dev Handoff</div></div>
            <div className="stat"><div className="n">+30%</div><div className="l">Repeat Purchase Rate</div></div>
            <div className="stat neg"><div className="n">-30%</div><div className="l">User Churn</div></div>
            <div className="stat"><div className="n">+25%</div><div className="l">App Feature Awareness</div></div>
          </div>
        </div>
      </section>

      {/* ===== WORK EXPERIENCE ===== */}
      <section className="container work">
        <h2 className="h-section">Work Experience</h2>
        <div className="work-list" style={{ marginTop: "24px" }}>
          <div className="work-row">
            <div className="role">Product Designer · Founder</div>
            <div className="meta"><div className="company">Mzee Design Agency</div><div className="when">Jan 2018 — Present</div></div>
            <p className="work-quote">Turning abstract business vision into design systems that scale past the next sprint.</p>
          </div>
          <div className="work-row">
            <div className="role">Customer Experience — Insights Analyst &amp; Search Specialist</div>
            <div className="meta"><div className="company">Majid Al Futtaim (Carrefour)</div><div className="when">Oct 2024 — Oct 2025</div></div>
            <p className="work-quote">Funnel data and collaboration shaped the wireframe, the journey, and every word. The screen was just the answer to a question the data had already asked.</p>
          </div>
          <div className="work-row">
            <div className="role">Web Design Manager</div>
            <div className="meta"><div className="company">Toedur</div><div className="when">March 2024 — May 2024</div></div>
            <p className="work-quote">Brief clarity made sure everyone around me ship great work</p>
          </div>
          <div className="work-row">
            <div className="role">Product Designer (B2B, B2C)</div>
            <div className="meta"><div className="company">PikaBox</div><div className="when">June 2022 — March 2024</div></div>
            <p className="work-quote">Discovery to implementation, owned end to end — no handoff to hide behind.</p>
          </div>
          <div className="work-row">
            <div className="role">UI/UX Designer · Web Designer · UX Researcher · Service Design · Product Marketing</div>
            <div className="meta"><div className="company">Leja / Asilimia</div><div className="when">June 2022 — Oct 2023</div></div>
            <p className="work-quote">Gender-inclusive research with IDEO changed the product, not just the copy.</p>
          </div>
          <div className="work-row">
            <div className="role">Marketing Communication Officer</div>
            <div className="meta"><div className="company">Kenya Revenue Authority (KRA)</div><div className="when">Sep 2021 — Nov 2021</div></div>
            <p className="work-quote">Being the first point of contact for frustrated taxpayers was the fastest UX education I ever got.</p>
          </div>
          <div className="work-row">
            <div className="role">Front-End Developer &amp; SEO Strategist</div>
            <div className="meta"><div className="company">Techchimp</div><div className="when">Nov 2017 — Apr 2018</div></div>
            <p className="work-quote">I started in the codebase, so I know exactly what my handoff is asking for.</p>
          </div>
        </div>
      </section>

      {/* ===== CONCEPTS (MOTION) ===== */}
      <section className="container concepts">
        <div className="section-head">
          <h2 className="h-section">Concepts</h2>
          <Link href="/concepts" className="btn btn-ghost">View all concepts <span className="arrow-icon"></span></Link>
        </div>
        <p className="lead">Motion studies that make interfaces legible. Launch films that make features land. Hover a card to preview.</p>
        <div className="concept-grid">
          <Link href="/concepts" className="concept-card">
            <div className="cc-art a1"></div>
            <div className="cc-strip"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="cc-play"></div>
            <div className="cc-body">
              <div className="cc-top"><span className="cc-kind">Micro-interaction</span><span className="cc-dur">0:06</span></div>
              <div>
                <div className="cc-h">Balance reveal &amp; pull-to-refresh</div>
                <div className="cc-sub">Fortune eCash · easing the moment a member checks their money.</div>
              </div>
            </div>
            <div className="cc-scrub"><i></i></div>
          </Link>
          <Link href="/concepts" className="concept-card">
            <div className="cc-art a2"></div>
            <div className="cc-strip"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="cc-play"></div>
            <div className="cc-body">
              <div className="cc-top"><span className="cc-kind">Launch film</span><span className="cc-dur">0:38</span></div>
              <div>
                <div className="cc-h">AgriFlow · farm to buyer</div>
                <div className="cc-sub">Product launch piece cut for social and in-app announcement.</div>
              </div>
            </div>
            <div className="cc-scrub"><i></i></div>
          </Link>
          <Link href="/concepts" className="concept-card">
            <div className="cc-art a3"></div>
            <div className="cc-strip"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="cc-play"></div>
            <div className="cc-body">
              <div className="cc-top"><span className="cc-kind">Micro-interaction</span><span className="cc-dur">0:04</span></div>
              <div>
                <div className="cc-h">Checkout step transitions</div>
                <div className="cc-sub">PikaBox · four steps that feel like one continuous move.</div>
              </div>
            </div>
            <div className="cc-scrub"><i></i></div>
          </Link>
          <Link href="/concepts" className="concept-card">
            <div className="cc-art a4"></div>
            <div className="cc-strip"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="cc-play"></div>
            <div className="cc-body">
              <div className="cc-top"><span className="cc-kind">Onboarding motion</span><span className="cc-dur">0:12</span></div>
              <div>
                <div className="cc-h">Three-step account opening</div>
                <div className="cc-sub">Progress that tells you how much is left, not how much you&apos;ve done.</div>
              </div>
            </div>
            <div className="cc-scrub"><i></i></div>
          </Link>
        </div>
      </section>

      <ConceptCardReveal />
    </>
  );
}
