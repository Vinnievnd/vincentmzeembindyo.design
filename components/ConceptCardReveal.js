"use client";

import { useEffect } from "react";

export default function ConceptCardReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(".concept-card");
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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    cards.forEach((c, i) => {
      c.style.transitionDelay = `${(i % 2) * 90}ms`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
