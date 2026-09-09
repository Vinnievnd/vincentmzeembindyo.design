import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Resume — Vincent Mzee Mbindyo",
  description: "Resume and work experience — Vincent Mzee Mbindyo, Senior Product Designer.",
};

export default function ResumePage() {
  return (
    <main className="container rs-page">

      <div className="rs-top">
        <div>
          <h1>Resume</h1>
          <p>Sr. Product Designer and Customer Experience Specialist. Nairobi, Kenya — available for East Africa, Middle East, and remote international roles.</p>
        </div>
        <div className="rs-actions">
          <a className="rs-dl" href="/resume.pdf" download="Vincent Mzee Mbindyo — Sr. Product Designer Resume.pdf">Download PDF<span className="ic"></span></a>
          <PrintButton />
        </div>
      </div>

      <article className="rs-paper">
        <h2 className="rs-name">Vincent Mzee. Mbindyo - Sr. Product Designer Resume</h2>
        <div className="rs-contact">Address: Nairobi, Kenya <span className="sep">|</span> Email: <a href="mailto:mbindyov43@gmail.com">mbindyov43@gmail.com</a> <span className="sep">|</span> Phone Number: <a href="tel:+254710900352">+254710900352</a><br />Portfolio: <a href="https://www.behance.net/vincentmzeemda" target="_blank" rel="noopener">www.behance.net/vincentmzeemda</a> <span className="sep">|</span> LinkedIn: <a href="https://www.linkedin.com/in/vincent-mbindyo-8a4b68160/" target="_blank" rel="noopener">www.linkedin.com/in/vincent-mbindyo-8a4b68160/</a></div>

        <h3 className="rs-h2">Summary</h3>
        <p className="rs-summary">Sr. Product Designer and Customer Experience Specialist &amp; Analyst with 6+ years of experience designing high-impact UX and UI for mobile and web products across Fintech, eCommerce, SaaS, and B2C platforms. Strong background in human-centered and data-driven design, leveraging user research, usability testing, prototyping, and usage data to inform product decisions across multiple touchpoints (onsite, offline &amp; omnichannel). Proven ability to work closely with product managers and engineers to balance user value, technical feasibility, and implementation complexity. Known for first-principles problem-solving, structured reasoning, and delivering measurable improvements in conversion, retention, and customer engagement in fast-paced environments.</p>

        <h3 className="rs-h2">Work Experience</h3>
        <div className="rs-job">
          <div className="rs-role">Sr. Product Designer | Founder</div>
          <div className="rs-org">Mzee Design Agency | Jan 2018 - Present</div>
          <ul className="rs-ul">
            <li>Lead end-to-end product design for B2B SaaS, Fintech, and platform products, translating abstract business and product vision into cohesive, scalable design systems.</li>
            <li>Defined long-term product vision and UX strategy, solving complex product problems that influence product roadmaps beyond near-term delivery.</li>
            <li>Translated abstract business goals into structured user flows, information architecture, and high-fidelity UI, balancing user value, technical feasibility, and scalability.</li>
            <li>I collaborate with cross-disciplinary teams of Stakeholders, Designers, Marketers, Researchers, front-end and back-end developers, and Go-To-Market teams to align UX decisions with commercial strategy, launch readiness, and customer outcomes.</li>
            <li>Built and maintained design systems and reusable components, ensuring visual consistency, accessibility (WCAG-aligned), and efficient design-to-development handoff.</li>
            <li>Supported clients in aligning design strategy with growth, retention, and brand objectives, improving usability and customer experience across digital touchpoints.</li>
          </ul>
        </div>
        <div className="rs-job">
          <div className="rs-role">Customer Experience - Insights Analyst | Search Specialist</div>
          <div className="rs-org">Majid Al Futtaim | October 2024 - October 2025</div>
          <ul className="rs-ul">
            <li>Built interactive dashboards in Power BI to track and analyze customer behaviour data across key onsite funnel stages, increasing conversion rate by 32% by optimizing search UX, localization, and onsite UX workflows, improving overall eCommerce visibility by 35%.</li>
            <li>Improved user engagement by 50%+ by applying AI-driven workflows and data-informed UX enhancements across campaigns and customer journeys.</li>
            <li>Improved end-to-end customer journeys, reducing bounce rate by 15% and improving customer journey completion time by 25% through targeted usability refinements and interaction design improvements.</li>
            <li>Led a data-informed country-wide app UI refresh and A/B testing in collaboration with product designers and developers, increasing user acceptance by 25% and reducing onsite bug feedback by 30% for Kenyan users.</li>
            <li>Used behavioral data to track and optimize CX metrics, reducing user churn by 30%, increasing Repeat Purchase Rate by 30%, and uplifting customer engagement through strategic SMS, email, in-app promotions, and coupon codes campaigns.</li>
            <li>Collaborated with Product, Commercial, Marketing, and Precision Media teams to align UX execution with GTM initiatives, seasonal launches, brand impact, and revenue strategy.</li>
            <li>Led the production of weekly and monthly performance reports using Excel, SQL, and Power BI, triangulating datasets from GA, CRM, and campaign sources to ensure methodological rigor prior to leadership review.</li>
            <li>Supported seasonal sales and engagement KPIs by delivering onsite banners, promotions, and UX design support using AI-driven and data-driven workflows.</li>
            <li>Conducted daily QA, bug tracking, and A/B testing on new features and UI updates to reduce friction and improve conversion and engagement metrics.</li>
          </ul>
        </div>
        <div className="rs-job">
          <div className="rs-role">Web Design Manager</div>
          <div className="rs-org">Toedur March | 2024 - May 2024</div>
          <ul className="rs-ul">
            <li>Led and mentored a multi-designer team, delivering web products and MVPs through prioritized sprints and structured execution.</li>
            <li>Conducted and synthesized qualitative and quantitative user research to inform UX strategy and product decisions.</li>
            <li>Applied Human-Centered Design (HCD) principles to ensure intuitive, accessible, and modern digital experiences aligned with best practices.</li>
            <li>Translated business objectives into clear product vision, user journeys, user flows, interaction models, and UI systems.</li>
          </ul>
        </div>
        <div className="rs-job">
          <div className="rs-role">Product Designer (B2B, B2C)</div>
          <div className="rs-org">Pikabox June | 2022 - March 2024</div>
          <ul className="rs-ul">
            <li>Owned product design and UX research from discovery through implementation, ensuring alignment between user needs, business goals, and technical constraints.</li>
            <li>Designed mobile-first wireframes, interactive prototypes, and high-fidelity UI, improving usability and clarity of product functionality.</li>
            <li>Developed comprehensive style guides to ensure visual consistency across typography, color systems, and iconography.</li>
            <li>Defined user flows and information architecture, enabling intuitive navigation and increased engagement.</li>
            <li>Collaborated with product managers and stakeholders to deliver the MVP aligned with user requirements, business objectives, and marketing goals.</li>
            <li>Worked in an agile environment, iterating designs based on testing feedback and development constraints.</li>
          </ul>
        </div>
        <div className="rs-job">
          <div className="rs-role">UI/UX Designer | Web Designer | UX Researcher | Product Marketing (Fintech, B2B, B2C)</div>
          <div className="rs-org">Leja/Asilimia | June 2022-October 2023</div>
          <ul className="rs-ul">
            <li>Designed end-to-end fintech products, including a cash wallet application, website, and admin dashboard in collaboration with cross-functional teams.</li>
            <li>Increased product visibility by 30% and app feature awareness by 25% through designing marketing visuals and merchandise delivered with the marketing team across digital and offline channels.</li>
            <li>Worked closely with engineers to improve handoff efficiency by 80% through scalable systems.</li>
            <li>Increased new user logins by 35%, reduced drop-offs by 22%, and improved reactivation by 28%, driving a 31% increase in completed transactions through onboarding and lifecycle UX optimization.</li>
            <li>Supported go-to-market strategy through UX-led feature communication, marketing assets, and launch experiences.</li>
            <li>Conducted user research, interviews, and usability testing, translating insights into user-centered design decisions.</li>
            <li>Influenced inclusive product strategy through gender-inclusive UX research with IDEO.</li>
            <li>Identified and resolved UX pain points through analysis and iterative design solutions, improving overall usability.</li>
            <li>Collaborated with stakeholders to present design concepts, articulate design rationale, and iterate based on feedback.</li>
          </ul>
        </div>
        <div className="rs-job">
          <div className="rs-role">Marketing Communication Officer</div>
          <div className="rs-org">KRA (Kenya Revenue Authority) | Sep 2021-Nov 2021</div>
          <ul className="rs-ul">
            <li>Served as the first point of customer contact, resolving queries through empathetic communication and clear guidance.</li>
            <li>Conducted qualitative user research to understand how taxpayers and agents experienced the iTax system, informing service improvements.</li>
          </ul>
        </div>
        <div className="rs-job">
          <div className="rs-role">FRONT-END DEVELOPER | SEO STRATEGIST</div>
          <div className="rs-org">Techchimp | Nov 2017 - Apr 2018</div>
          <ul className="rs-ul">
            <li>Collaborated with marketing and stakeholders to deliver technically feasible UX solutions.</li>
            <li>Developed responsive, SEO-optimized web products using HTML, CSS, and JavaScript.</li>
          </ul>
        </div>

        <h3 className="rs-h2">SKILLS</h3>
        <div className="rs-skills">
          <p>B2B Product Design, Customer Experience, UI/UX Design, Human Centered Design (HCD), Wireframing, Information Architecture, Prototyping, Design Systems, Accessibility (WCAG-aligned), Graphic Design, Video Editing, and Data Visualization.</p>
          <p>User Interviews, Usability Testing, UX Research, A/B Testing, Quality Assurance (QA), Bug Tracking, and Data-Informed Design.</p>
          <p>Figma, Framer, Adobe Creative Suite, Content Management Systems (CMS), GA, Tableau, Power BI, and Google Workspace.</p>
          <p>Product Vision, Roadmap Influence, Cross-Functional Collaboration, Reporting, Performance Tracking, and Workflow Optimization.</p>
        </div>

        <h3 className="rs-h2">Education and Certifications</h3>
        <div className="rs-edu"><b>Jomo Kenyatta University Of Agriculture and Technology</b><span>Bachelor of Business Information Technology | Nov 2016 - Jul 2021</span></div>
        <div className="rs-edu"><b>Coursera</b><span>Google UX Design | Leading Diverse Teams and Organizations | Strategic Leadership &amp; Management | Introduction to Psychology</span></div>
        <div className="rs-edu"><b>Linkedin Learning</b><span>Design Powered by Data | Interaction Design | Design Thinking | Multidevice Design</span></div>
        <div className="rs-edu"><b>Institute of Advanced Technology</b><span>Certificate in Graphic Design</span></div>
        <div className="rs-edu"><b>Zalego Institute of Technology and Innovation</b><span>Certificate in Programming</span></div>
      </article>

      <div className="rs-pagemark">Two pages when printed · <a href="/resume.pdf" download="Vincent Mzee Mbindyo — Sr. Product Designer Resume.pdf">download the original PDF</a></div>
    </main>
  );
}
