import Link from "next/link";

function Thumb({ project }) {
  const { thumb } = project;
  if (thumb.type === "mobile") {
    return (
      <div className="thumb">
        <img src="/phone-card.png" alt={thumb.alt} />
      </div>
    );
  }
  if (thumb.type === "browser") {
    return (
      <div className={`thumb ${thumb.variant}`}>
        <div className="thumb-browser">
          <div className="tb-bar"><span></span><span></span><span></span></div>
          <div className="tb-body">
            <div className="tb-h">{thumb.headline}</div>
            <div className={thumb.lineShort ? "tb-line short" : "tb-line"}></div>
            <div className="tb-grid">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={thumb.goldTiles.includes(i) ? "tb-tile gold" : "tb-tile"}></div>
              ))}
            </div>
            <div className="tb-cta">{thumb.cta}</div>
          </div>
        </div>
      </div>
    );
  }
  if (thumb.type === "monogram") {
    return (
      <div className="thumb" style={{ background: thumb.bg, display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "52%", aspectRatio: "1", borderRadius: "50%", background: thumb.circle1, right: "-12%", top: "-14%" }}></div>
        <div style={{ position: "absolute", width: "34%", aspectRatio: "1", borderRadius: "50%", background: thumb.circle2, right: "10%", top: "6%", opacity: 0.6 }}></div>
        <div style={{ position: "relative", fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: "clamp(64px,11vw,120px)", color: thumb.letterColor, letterSpacing: "-.045em", lineHeight: 1 }}>{thumb.letter}</div>
        <div style={{ position: "absolute", left: 18, bottom: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: thumb.wordmarkColor, opacity: 0.7 }}>{thumb.wordmark}</div>
      </div>
    );
  }
  if (thumb.type === "posterfolio-preview") {
    return (
      <div className="thumb poster">
        <div className="thumb-posters">
          <div className="p-mini"><div className="p-mini-mark">·01</div><div className="p-mini-h">Save</div></div>
          <div className="p-mini"><div className="p-mini-mark">·02</div><div className="p-mini-h">Grow</div></div>
          <div className="p-mini"><div className="p-mini-mark">·03</div><div className="p-mini-h">Build</div></div>
        </div>
      </div>
    );
  }
  // logofolio-preview
  return (
    <div className="thumb logo">
      <div className="thumb-logos">
        {["M", "F", "P", "A", "S", "T", "C", "L", "V"].map((letter, i) => (
          <div key={i} className="l-mini">{letter}</div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <Link href={project.href} className="project-card" data-cat={project.category}>
      <Thumb project={project} />
      <div className="row">
        <span className="title">{project.title}</span>
        <span className="btn">View <span className="arrow-icon"></span></span>
      </div>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="pill">{tag}</span>
        ))}
      </div>
    </Link>
  );
}
