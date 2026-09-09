"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectFilter({ categories, projects }) {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filter-bar" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={active === cat.id ? "filter active" : "filter"}
            data-cat={cat.id}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
