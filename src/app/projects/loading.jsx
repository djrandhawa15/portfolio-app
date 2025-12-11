import { ProjectGridSkeleton } from "@/components/project-card-skeleton";

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 sm:mb-4">
              Projects
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400">
              Loading projects...
            </p>
          </div>
        </div>

        <ProjectGridSkeleton count={6} />
      </div>
    </div>
  );
}
