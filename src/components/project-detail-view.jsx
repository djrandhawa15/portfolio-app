import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, Pencil, Github, Globe } from "lucide-react";

function isStreamableUrl(url) {
  return url.includes("streamable.com");
}

function getStreamableEmbedUrl(url) {
  const id = url.split("/").pop();
  return `https://streamable.com/e/${id}`;
}

export default function ProjectDetailView({ project, session, slug }) {
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
          <div className="w-full h-48 sm:h-64 md:h-96 relative bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
            {project.image && project.image !== "/images/placeholder-300x300.png" ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-8"
              />
            ) : (
              <div className="text-center">
                <div className="text-6xl sm:text-8xl mb-4">📁</div>
                <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium">{project.title}</p>
              </div>
            )}
          </div>

          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex items-center gap-3">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                )}
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl">{project.title}</CardTitle>
              </div>
              <Button asChild size="sm" className="w-full sm:w-auto">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* About */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                About the Project
              </h3>
              <div className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4">
                {project.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="text-xs sm:text-sm">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Photos */}
            {project.photos && project.photos.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  Photos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.photos.map((photo, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                      <Image
                        src={photo}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {project.videos && project.videos.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  Videos
                </h3>
                <div className="space-y-6">
                  {project.videos.map((video, i) => (
                    <div key={i} className="space-y-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black">
                        {isStreamableUrl(video.url) ? (
                          <iframe
                            src={getStreamableEmbedUrl(video.url)}
                            className="w-full h-full"
                            allowFullScreen
                            allow="autoplay"
                          />
                        ) : (
                          <video
                            src={video.url}
                            controls
                            className="w-full h-full"
                            preload="metadata"
                          />
                        )}
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {video.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
              {project.links && project.links.length > 0 ? (
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  {project.links.map((link, i) => {
                    const isGithub = link.url.includes("github.com");
                    const Icon = isGithub ? Github : Globe;
                    return (
                      <Button key={i} asChild variant={i === 0 ? "default" : "outline"} className="flex-1">
                        <a href={link.url} target="_blank" rel="noreferrer">
                          <Icon className="w-4 h-4 mr-2" />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Project
                    </a>
                  </Button>
                </div>
              )}
              <div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects">View All Projects</Link>
                </Button>
              </div>

              {session?.user && (
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={`/projects/${slug}/edit`}>
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit Project
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
