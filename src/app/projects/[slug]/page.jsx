import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createSlug } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import ProjectDetailView from "@/components/project-detail-view";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  // Fetch all projects
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, { cache: "no-store" });
  const { projects } = await res.json();

  // Find the project that matches the slug
  const project = projects.find(p => createSlug(p.title) === slug);

  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Project Not Found
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return <ProjectDetailView project={project} />;
}
