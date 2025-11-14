import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";

export default function ProjectDetailView({ project }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Card */}
        <Card className="overflow-hidden">
          {/* Project Image */}
          <div className="w-full h-48 sm:h-64 md:h-96 relative bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl">{project.title}</CardTitle>
              <Button asChild size="sm" className="w-full sm:w-auto">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Description
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Keywords/Tags */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                Technologies & Keywords
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="text-xs sm:text-sm">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Link */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Project
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/projects">View All Projects</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
