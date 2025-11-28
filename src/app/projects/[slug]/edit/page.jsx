import { notFound, redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";
import { fetchProjects } from "@/lib/db";
import { createSlug } from "@/lib/utils";
import EditProjectForm from "@/components/edit-project-form";

export default async function EditProjectPage({ params }) {
  // Require authentication
  const session = await auth0.getSession();
  if (!session?.user) {
    redirect("/api/auth/login");
  }

  const { slug } = await params;

  // Fetch all projects and find the one matching the slug
  const projects = await fetchProjects();
  const project = projects.find(p => createSlug(p.title) === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Edit Project</h1>
      <div className="bg-card rounded-lg border p-6">
        <EditProjectForm project={project} uuid={project.id} />
      </div>
    </section>
  );
}
