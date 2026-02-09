"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";

export default function ProjectCard({ project, slug, session }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`/api/projects/${project.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Project deleted successfully");
        router.refresh();
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    }
  };

  return (
    <Card className="group hover:scale-105 transition-transform overflow-hidden flex flex-col h-full">
      <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center relative overflow-hidden">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={120}
            height={120}
            className="object-contain"
          />
        ) : project.image && project.image !== "/images/placeholder-300x300.png" ? (
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <div className="text-4xl mb-2">📁</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{project.title}</p>
          </div>
        )}
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.keywords.slice(0, 3).map((keyword) => (
            <Badge key={keyword} variant="secondary" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild size="sm" className="w-full sm:w-auto">
            <Link href={`/projects/${slug}`}>Details</Link>
          </Button>
          <Button asChild size="sm" variant="secondary" className="w-full sm:w-auto">
            <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
          </Button>
        </div>
        {session?.user && (
          <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t">
            <Button asChild size="sm" variant="outline" className="w-full sm:w-auto">
              <Link href={`/projects/${slug}/edit`}>
                <Pencil className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>
            <Button
              size="sm"
              variant="destructive"
              className="w-full sm:w-auto"
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
