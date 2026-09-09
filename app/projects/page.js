import ProjectFilter from "@/components/ProjectFilter";
import { PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Projects — Vincent Mzee Mbindyo",
  description: "All product design, brand identity, and showcase projects by Vincent Mzee Mbindyo.",
};

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Websites" },
  { id: "framer", label: "Framer templates" },
  { id: "brand", label: "Brand Identity" },
  { id: "poster", label: "Posterfolio" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "logo", label: "Logofolio" },
  { id: "photo", label: "Photography" },
  { id: "video", label: "Videography" },
];

export default function ProjectsPage() {
  return (
    <main className="container">
      <ProjectFilter categories={CATEGORIES} projects={PROJECTS} />
    </main>
  );
}
