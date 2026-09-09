"use client";

import { useEffect, useRef, useState } from "react";

const FILTERS = [
  { cat: "all", label: "All" },
  { cat: "micro", label: "Micro-interactions" },
  { cat: "launch", label: "Launch films" },
  { cat: "onboarding", label: "Onboarding motion" },
  { cat: "dataviz", label: "Data viz motion" },
];

const CARDS = [
  { cat: "launch", feature: true, bg: "g1", kind: "Launch film", dur: "0:38", title: "AgriFlow · farm to buyer", client: "AgriFlow · product launch", tags: ["After Effects", "Launch", "Social cut"] },
  { cat: "micro", bg: "g2", kind: "Micro-interaction", dur: "0:06", title: "Balance reveal & pull-to-refresh", client: "Fortune eCash · in-app", tags: ["Figma", "Prototype", "Easing"] },
  { cat: "micro", bg: "g3", kind: "Micro-interaction", dur: "0:04", title: "Checkout step transitions", client: "PikaBox · 4-step flow", tags: ["Framer", "Transitions"] },
  { cat: "onboarding", bg: "g4", kind: "Onboarding motion", dur: "0:12", title: "Three-step account opening", client: "Fortune eCash · onboarding", tags: ["After Effects", "Progress"] },
  { cat: "launch", bg: "g5", kind: "Launch film", dur: "0:45", title: "PikaBox · eat what you love", client: "PikaBox · campaign film", tags: ["Premiere", "Campaign", "OOH cut"] },
  { cat: "micro", bg: "g6", kind: "Micro-interaction", dur: "0:05", title: "Search suggest & empty state", client: "Carrefour · onsite search", tags: ["Figma", "Search UX"] },
  { cat: "dataviz", bg: "g2", kind: "Data viz motion", dur: "0:18", title: "Dashboard build-in sequence", client: "Power BI · exec readout", tags: ["After Effects", "Data viz"] },
  { cat: "onboarding", bg: "g3", kind: "Onboarding motion", dur: "0:09", title: "Language toggle & first run", client: "AgriFlow · En · Sw", tags: ["Framer", "Localisation"] },
  { cat: "micro", bg: "g1", kind: "Micro-interaction", dur: "0:07", title: "QR check-in success state", client: "Tickety · door scanner", tags: ["Figma", "Feedback"] },
  { cat: "launch", bg: "g4", kind: "Launch film", dur: "0:30", title: "Mwelekeo account teaser", client: "Fortune Sacco · social", tags: ["Premiere", "Teaser"] },
  { cat: "dataviz", bg: "g6", kind: "Data viz motion", dur: "0:22", title: "Funnel drop-off explainer", client: "Internal · stakeholder deck", tags: ["After Effects", "Explainer"] },
  { cat: "micro", bg: "g5", kind: "Micro-interaction", dur: "0:03", title: "Loan slider & eligibility tick", client: "Fortune eCash · loans", tags: ["Figma", "Slider"] },
];

export default function ConceptsGrid() {
  const [active, setActive] = useState("all");
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    cards.forEach((c, i) => {
      c.style.transitionDelay = `${(i % 3) * 80}ms`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  function handleFilter(cat) {
    setActive(cat);
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      const show = cat === "all" || CARDS[i].cat === cat;
      if (show) c.classList.add("in-view");
    });
  }

  return (
    <>
      <div className="cp-filter" id="cpFilter">
        {FILTERS.map((f) => (
          <button
            key={f.cat}
            type="button"
            className={active === f.cat ? "active" : undefined}
            data-cat={f.cat}
            onClick={() => handleFilter(f.cat)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="cp-grid" id="cpGrid">
        {CARDS.map((card, i) => (
          <article
            key={card.title}
            className={`cp-card${card.feature ? " feature" : ""}`}
            data-cat={card.cat}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ display: active === "all" || active === card.cat ? undefined : "none" }}
          >
            <div className="cp-stage">
              <div className={`cp-bg ${card.bg}`}></div>
              <div className="cp-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <div className="cp-badges"><span className="cp-kind">{card.kind}</span><span className="cp-dur">{card.dur}</span></div>
              <div className="cp-play"></div>
              <div className="cp-scrub"><i></i></div>
            </div>
            <div className="cp-row">
              <div><div className="cp-title">{card.title}</div><div className="cp-client">{card.client}</div></div>
              <span className="btn">Play <span className="arrow-icon"></span></span>
            </div>
            <div className="cp-tags">
              {card.tags.map((tag) => (
                <span className="pill" key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
