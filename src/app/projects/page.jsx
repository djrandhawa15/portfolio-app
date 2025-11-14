import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createSlug } from "@/lib/utils";
import ProjectCard from "@/components/project-card";

export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, { cache: "no-store" });
  const { projects } = await res.json();

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Projects
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Explore my portfolio of web development projects
            </p>
          </div>
          <Button asChild>
            <Link href="/projects/new">New Project</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const slug = createSlug(p.title);
            return <ProjectCard key={slug} project={p} slug={slug} />;
          })}
        </div>
      </div>
    </div>
  );
}
