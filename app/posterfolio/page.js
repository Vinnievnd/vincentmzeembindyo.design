import Link from "next/link";
import ShowcaseFilterButtons from "@/components/ShowcaseFilterButtons";

export const metadata = {
  title: "Posterfolio — Vincent Mzee Mbindyo",
  description: "Poster and print design showcase by Vincent Mzee Mbindyo.",
};

export default function PosterfolioPage() {
  return (
    <main className="container showcase-page">

      <header className="showcase-header">
        <h1>Posterfolio</h1>
        <p>A small archive of OOH, A-series, and editorial posters across client and self-initiated work — type-led, photography-light, intentionally restrained colour.</p>
      </header>

      <div className="showcase-meta">
        <div className="sm-pair"><div className="sm-l">Pieces</div><div className="sm-v">12 posters</div></div>
        <div className="sm-pair"><div className="sm-l">Span</div><div className="sm-v">2022 — 2026</div></div>
        <div className="sm-pair"><div className="sm-l">Formats</div><div className="sm-v">A1 · A2 · A3 · OOH 6 × 3 m</div></div>
        <div className="sm-pair"><div className="sm-l">Tools</div><div className="sm-v">Illustrator · InDesign · Photoshop</div></div>
      </div>

      <ShowcaseFilterButtons labels={["All", "OOH", "A-Series", "Event", "Self-initiated"]} />

      <div className="poster-fol">
        <div className="pf-card fill-1">
          <div className="pf-mark">F</div>
          <div className="pf-eyebrow">MWELEKEO · 01</div>
          <div className="pf-h">Take charge<br />of your future.</div>
          <div className="pf-foot"><span>Fortune Sacco</span><span className="pf-num">6 × 3 m</span></div>
        </div><div className="pf-card fill-2 pf-feature">
          <div className="pf-mark">P</div>
          <div className="pf-eyebrow">PIKABOX · 02</div>
          <div className="pf-h">Eat what<br />you love.</div>
          <div className="pf-foot"><span>PikaBox</span><span className="pf-num">A2</span></div>
        </div><div className="pf-card fill-5">
          <div className="pf-mark">A</div>
          <div className="pf-eyebrow">AGRIFLOW · 03</div>
          <div className="pf-h">From the<br />farm to you.</div>
          <div className="pf-foot"><span>AgriFlow</span><span className="pf-num">A1</span></div>
        </div><div className="pf-card fill-3">
          <div className="pf-mark">T</div>
          <div className="pf-eyebrow">TICKETY · 04</div>
          <div className="pf-h">Tickets,<br />sorted.</div>
          <div className="pf-foot"><span>Tickety</span><span className="pf-num">6 × 3 m</span></div>
        </div><div className="pf-card fill-4">
          <div className="pf-mark">C</div>
          <div className="pf-eyebrow">CHII NEEMA · 05</div>
          <div className="pf-h">A calm hour,<br />twice a month.</div>
          <div className="pf-foot"><span>Chii Neema</span><span className="pf-num">A3</span></div>
        </div><div className="pf-card fill-8">
          <div className="pf-mark">M</div>
          <div className="pf-eyebrow">MLEARN · 06</div>
          <div className="pf-h">Learn the<br />next thing.</div>
          <div className="pf-foot"><span>MLearn</span><span className="pf-num">A2</span></div>
        </div><div className="pf-card fill-7">
          <div className="pf-mark">T</div>
          <div className="pf-eyebrow">TOEDUR · 07</div>
          <div className="pf-h">Ask the<br />person who knows.</div>
          <div className="pf-foot"><span>Toedur</span><span className="pf-num">A3</span></div>
        </div><div className="pf-card fill-6">
          <div className="pf-mark">A</div>
          <div className="pf-eyebrow">ADVENIO · 08</div>
          <div className="pf-h">Find your<br />stay.</div>
          <div className="pf-foot"><span>Advenio</span><span className="pf-num">A2</span></div>
        </div><div className="pf-card fill-11">
          <div className="pf-mark">S</div>
          <div className="pf-eyebrow">SIMPLIA · 09</div>
          <div className="pf-h">Marketing<br />made simple.</div>
          <div className="pf-foot"><span>Simplia</span><span className="pf-num">A1</span></div>
        </div><div className="pf-card fill-9">
          <div className="pf-mark">K</div>
          <div className="pf-eyebrow">KRA · 10</div>
          <div className="pf-h">File on time.<br />Stay informed.</div>
          <div className="pf-foot"><span>KRA</span><span className="pf-num">A2</span></div>
        </div><div className="pf-card fill-10">
          <div className="pf-mark">M</div>
          <div className="pf-eyebrow">STUDIO · 11</div>
          <div className="pf-h">Open Studio<br />Nights · Vol. 3</div>
          <div className="pf-foot"><span>Mzee Design</span><span className="pf-num">A3</span></div>
        </div><div className="pf-card fill-12">
          <div className="pf-mark">D</div>
          <div className="pf-eyebrow">SUMMIT · 12</div>
          <div className="pf-h">Design Africa<br />Summit · 2025</div>
          <div className="pf-foot"><span>Summit</span><span className="pf-num">A2</span></div>
        </div>
      </div>

      <section className="proj-section" style={{ marginTop: "64px" }}>
        <div className="section-head" style={{ marginTop: "12px" }}>
          <h2 className="h-section" style={{ fontSize: "clamp(28px,4vw,42px)" }}>Other Projects</h2>
          <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
        </div>
        <div className="other-grid">
          <Link href="/logofolio" className="project-card">
            <div className="thumb logo">
              <div className="thumb-logos">
                <div className="l-mini">M</div><div className="l-mini">F</div><div className="l-mini">P</div>
                <div className="l-mini">A</div><div className="l-mini">S</div><div className="l-mini">T</div>
                <div className="l-mini">C</div><div className="l-mini">L</div><div className="l-mini">V</div>
              </div>
            </div>
            <div className="row"><span className="title">Logofolio</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">Identity</span><span className="pill">Marks</span><span className="pill">Branding</span><span className="pill">Wordmarks</span></div>
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
          <Link href="/work/chii-neema" className="project-card">
            <div className="thumb site">
              <div className="thumb-browser">
                <div className="tb-bar"><span></span><span></span><span></span></div>
                <div className="tb-body"><div className="tb-h">Bioresonance therapy.</div><div className="tb-line"></div><div className="tb-grid"><div className="tb-tile"></div><div className="tb-tile gold"></div><div className="tb-tile gold"></div><div className="tb-tile"></div></div><div className="tb-cta">Book a session</div></div>
              </div>
            </div>
            <div className="row"><span className="title">Chii Neema Website</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">Web Design</span><span className="pill">Wellness</span><span className="pill">Branding</span><span className="pill">CMS</span></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
