import { notFound } from "next/navigation";
import { createSlug } from "@/lib/utils";
import ProjectDetailView from "@/components/project-detail-view";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  // Fetch all projects
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, { cache: "no-store" });
  const { projects } = await res.json();

  // Find the project that matches the slug
  const project = projects.find(p => createSlug(p.title) === slug);

  // Handle project not found - triggers the segment-level not-found.jsx
  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
