import { notFound } from "next/navigation";
import { createSlug } from "@/lib/utils";
import { auth0 } from "@/lib/auth0";
import { fetchProjects } from "@/lib/db";
import ProjectDetailView from "@/components/project-detail-view";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const session = await auth0.getSession();

  // Fetch all projects from database
  const projects = await fetchProjects();

  // Find the project that matches the slug
  const project = projects.find(p => createSlug(p.title) === slug);

  // Handle project not found - triggers the segment-level not-found.jsx
  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} session={session} slug={slug} />;
}
