import Link from "next/link";
import ConceptsGrid from "@/components/ConceptsGrid";
import ConceptCardReveal from "@/components/ConceptCardReveal";

export const metadata = {
  title: "Concepts — Vincent Mzee Mbindyo",
  description: "Motion design and micro-interaction concepts by Vincent Mzee Mbindyo.",
};

export default function ConceptsPage() {
  return (
    <main className="container concepts-page">
      <header className="cp-header hero-xl">
        <h1 className="hero-display" data-load>
          <span className="hd-line">Concepts —
            <span className="hero-vid" aria-label="Motion showreel">
              <span className="hv-scene">
                <span className="hv-phone"><i></i><i></i><i></i><span className="hv-dot"></span></span>
              </span>
              <span className="hv-label">Reel</span>
            </span>
            motion
          </span>
          <span className="hd-line">that <span className="hd-em">explains</span> itself.</span>
        </h1>
        <p data-load>Motion studies, micro-interactions, and product launch films. Micro-interactions are where an interface earns trust — the pull-to-refresh, the success tick, the slider that tells you what it will cost. Launch films are where a feature gets understood before anyone taps it.</p>
        <p className="cp-note" data-load>If the motion has to be explained, it isn&apos;t doing its job.</p>
      </header>

      <div className="cp-meta">
        <div><div className="sm-l">Pieces</div><div className="sm-v">12 concepts</div></div>
        <div><div className="sm-l">Span</div><div className="sm-v">2022 — 2026</div></div>
        <div><div className="sm-l">Formats</div><div className="sm-v">In-app · Social · OOH cut · Explainer</div></div>
        <div><div className="sm-l">Tools</div><div className="sm-v">After Effects · Framer · Figma · Premiere</div></div>
      </div>

      <ConceptsGrid />

      <section className="cp-toolkit">
        <h3>How these get made</h3>
        <p>Micro-interactions are prototyped in Figma or Framer against the real component so the easing survives handoff — I ship spec values, not videos. Launch films are cut in After Effects and Premiere from the same design system, so the film and the product look like one thing.</p>
        <div className="cp-tools"><span>After Effects</span><span>Framer</span><span>Figma Prototype</span><span>Premiere Pro</span><span>Illustrator</span><span>Lottie handoff</span></div>
      </section>

      <section className="proj-section" style={{ marginTop: "56px" }}>
        <div className="section-head">
          <h2 className="h-section" style={{ fontSize: "clamp(28px,4vw,42px)" }}>Related Projects</h2>
          <Link href="/projects" className="btn btn-ghost">View all projects <span className="arrow-icon"></span></Link>
        </div>
        <div className="other-grid">
          <Link href="/work/fortune-ecash" className="project-card">
            <div className="thumb"><img src="/phone-card.png" alt="" /></div>
            <div className="row"><span className="title">Fortune eCash App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">UI/UX</span><span className="pill">Fintech</span><span className="pill">Research</span><span className="pill">Marketing</span></div>
          </Link>
          <Link href="/work/agriflow" className="project-card">
            <div className="thumb"><img src="/phone-card.png" alt="" /></div>
            <div className="row"><span className="title">AgriFlow App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">UI/UX</span><span className="pill">AgriTech</span><span className="pill">Field Research</span><span className="pill">Localisation</span></div>
          </Link>
          <Link href="/work/pikabox" className="project-card">
            <div className="thumb"><img src="/phone-card.png" alt="" /></div>
            <div className="row"><span className="title">PikaBox App</span><span className="btn">View <span className="arrow-icon"></span></span></div>
            <div className="tags"><span className="pill">UI/UX</span><span className="pill">Marketplace</span><span className="pill">Design System</span><span className="pill">Prototyping</span></div>
          </Link>
        </div>
      </section>

      <ConceptCardReveal />
    </main>
  );
}
