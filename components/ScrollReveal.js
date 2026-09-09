"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".hero .lead", ".hero-standfirst", ".markets",
  ".section-head", ".h-section", ".kicker", ".ps-title", ".ps-sub", ".ps-body", ".ps-list",
  ".disc-card", ".process-card", ".stat", ".istat", ".work-row",
  ".project-card", ".info-card", ".three-card", ".rcard", ".iacard", ".wf-card", ".ma-card",
  ".oc-card", ".pillar", ".users-grid", ".metrics-bar", ".process-rail",
  ".ds-tabs", ".cmp", ".ab-table-wrap",
  ".lf-card", ".pf-card", ".cp-toolkit", ".cp-meta", ".cp-filter",
  ".vs-card", ".mg-card", ".vs-bar",
  ".skills-list", ".tools-row", ".showcase-meta", ".showcase-filter",
  ".work-list > *", ".impact-stats > *",
];

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion");
    if (reduce) {
      root.classList.add("motion-ready");
      return;
    }

    const nodes = [];
    SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.closest(".nav") || el.closest(".cta-footer")) return;
        if (el.closest(".ds-pane")) return;
        if (el.classList.contains("concept-card") || el.classList.contains("cp-card")) return;
        if (el.hasAttribute("data-load")) return;
        if (el.dataset.rvSet) return;
        el.dataset.rvSet = "1";
        el.classList.add("rv");
        if (el.classList.contains("h-section") || el.classList.contains("kicker")) {
          el.classList.add("rv-h");
        }
        nodes.push(el);
      });
    });

    function show(el) {
      el.classList.add("is-in");
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(show);
      root.classList.add("motion-ready");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -4% 0px" }
    );
    nodes.forEach((el) => io.observe(el));

    function sweep() {
      const vh = window.innerHeight;
      nodes.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.98) {
          show(el);
          io.unobserve(el);
        }
      });
    }

    function kickoff() {
      root.classList.add("motion-ready");
      sweep();
    }
    if (document.readyState === "complete") {
      requestAnimationFrame(kickoff);
    } else {
      window.addEventListener("load", () => requestAnimationFrame(kickoff));
    }
    requestAnimationFrame(() => root.classList.add("motion-ready"));

    let t;
    function onScroll() {
      clearTimeout(t);
      t = setTimeout(sweep, 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    function onDsTabClick(e) {
      if (!e.target.closest(".ds-tab")) return;
      setTimeout(() => {
        document.querySelectorAll(".ds-pane.active .rv").forEach(show);
      }, 30);
    }
    document.addEventListener("click", onDsTabClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("click", onDsTabClick);
      io.disconnect();
    };
  }, []);

  return null;
}
