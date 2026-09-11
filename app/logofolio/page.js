import Link from "next/link";
import ShowcaseFilterButtons from "@/components/ShowcaseFilterButtons";

export const metadata = {
  title: "Logofolio — Vincent Mzee Mbindyo",
  description: "Logo and wordmark design showcase by Vincent Mzee Mbindyo.",
};

export default function LogofolioPage() {
  return (
    <main className="container showcase-page">

      <header className="showcase-header">
        <h1>Logofolio</h1>
        <p>Marks, monograms, and wordmarks across fintech, agritech, foodtech, and wellness — each rooted in the brand&apos;s tone, geometry, and the alphabet it lives inside.</p>
      </header>

      <div className="showcase-meta">
        <div className="sm-pair"><div className="sm-l">Marks</div><div className="sm-v">16 identities</div></div>
        <div className="sm-pair"><div className="sm-l">Span</div><div className="sm-v">2018 — 2026</div></div>
        <div className="sm-pair"><div className="sm-l">Forms</div><div className="sm-v">Letter · Wordmark · Symbol · Combination</div></div>
        <div className="sm-pair"><div className="sm-l">Tools</div><div className="sm-v">Illustrator · Figma · pen + paper</div></div>
      </div>

      <ShowcaseFilterButtons labels={["All", "Letter Marks", "Wordmarks", "Symbols", "Combinations"]} />

      <div className="logo-fol">
        <div className="lf-card gold">
          <div className="lf-mark">M</div>
          <div className="lf-label">Mzee Design Agency</div>
        </div><div className="lf-card dark">
          <div className="lf-mark">F</div>
          <div className="lf-label">Fortune Sacco</div>
        </div><div className="lf-card ">
          <div className="lf-mark">P</div>
          <div className="lf-label">PikaBox</div>
        </div><div className="lf-card cream">
          <div className="lf-mark">A</div>
          <div className="lf-label">AgriFlow</div>
        </div><div className="lf-card ink">
          <div className="lf-mark">S</div>
          <div className="lf-label">Simplia</div>
        </div><div className="lf-card word">
          <div className="lf-mark">TOEDUR</div>
          <div className="lf-label">Toedur</div>
        </div><div className="lf-card circle">
          <div className="lf-mark">C</div>
          <div className="lf-label">Chii Neema</div>
        </div><div className="lf-card word">
          <div className="lf-mark">LEJA</div>
          <div className="lf-label">Leja</div>
        </div><div className="lf-card gold word">
          <div className="lf-mark">VINCENT</div>
          <div className="lf-label">Vincent (personal)</div>
        </div><div className="lf-card dark word">
          <div className="lf-mark">MLEARN</div>
          <div className="lf-label">MLearn</div>
        </div><div className="lf-card circle alt">
          <div className="lf-mark">A</div>
          <div className="lf-label">Advenio</div>
        </div><div className="lf-card diamond">
          <div className="lf-mark" data-letter="T"></div>
          <div className="lf-label">Tickety</div>
        </div><div className="lf-card shape">
          <div className="lf-shape s1"></div>
          <div className="lf-label">Pika · Symbol</div>
        </div><div className="lf-card shape dark">
          <div className="lf-shape s2"></div>
          <div className="lf-label">Fortune · Symbol</div>
        </div><div className="lf-card shape ink">
          <div className="lf-shape s3"></div>
          <div className="lf-label">AgriFlow · Symbol</div>
        </div><div className="lf-card shape cream">
          <div className="lf-shape s4"></div>
          <div className="lf-label">Mzee · Symbol</div>
        </div>
      </div>

      <section className="proj-section" style={{ marginTop: "64px" }}>
        <div className="section-head" style={{ marginTop: "12px" }}>
          <h2 className="h-section" style={{ fontSize: "clamp(28px,4vw,42px)" }}>Other Projects</h2>
          <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
        </div>
        <div className="other-grid">
          <Link href="/posterfolio" className="project-card">
            <div className="thumb poster">
              <div className="thumb-posters">
                <div className="p-mini"><div className="p-mini-mark">·01</div><div className="p-mini-h">Save</div></div>
                <div className="p-mini"><div className="p-mini-mark">·02</div><div className="p-mini-h">Grow</div></div>
                <div className="p-mini"><div className="p-mini-mark">·03</div><div className="p-mini-h">Build</div></div>
              </div>
            </div>
            <div className="row"><span className="title">Posterfolio</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">Print</span><span className="pill">Editorial</span><span className="pill">Typography</span><span className="pill">Layout</span></div>
          </Link>
          <Link href="/work/fortune-ecash" className="project-card">
            <div className="thumb"><img src="/phone-card.png" alt="" /></div>
            <div className="row"><span className="title">Fortune eCash App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">UI/UX</span><span className="pill">Fintech</span><span className="pill">Research</span><span className="pill">Marketing</span></div>
          </Link>
          <Link href="/work/simplia" className="project-card">
            <div className="thumb site">
              <div className="thumb-browser">
                <div className="tb-bar"><span></span><span></span><span></span></div>
                <div className="tb-body"><div className="tb-h">Marketing made simple.</div><div className="tb-line short"></div><div className="tb-grid"><div className="tb-tile gold"></div><div className="tb-tile"></div><div className="tb-tile"></div><div className="tb-tile gold"></div></div><div className="tb-cta">Talk to us</div></div>
              </div>
            </div>
            <div className="row"><span className="title">Simplia Website</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">Web Design</span><span className="pill">Marketing</span><span className="pill">Branding</span><span className="pill">SEO</span></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
