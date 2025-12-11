"use client";

import { useState } from "react";
import { ProjectSearchFilter } from "@/components/project-search-filter";
import ProjectCard from "@/components/project-card";
import { createSlug } from "@/lib/utils";

export function ProjectsListClient({ projects, session }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <>
      <ProjectSearchFilter
        projects={projects}
        onFilteredProjectsChange={setFilteredProjects}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((p) => {
            const slug = createSlug(p.title);
            return <ProjectCard key={p.id} project={p} slug={slug} session={session} />;
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            No projects found matching your filters.
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">
            Try adjusting your search or clearing filters.
          </p>
        </div>
      )}
    </>
  );
}
