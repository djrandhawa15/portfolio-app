import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project, slug }) {
  return (
    <Card className="group hover:scale-105 transition-transform overflow-hidden flex flex-col h-full">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={300}
        className="w-full h-40 sm:h-48 object-cover"
      />
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
          <Button asChild size="sm" variant="secondary" className="w-full sm:w-auto">
            <a href={project.link} target="_blank" rel="noreferrer">Open</a>
          </Button>
          <Button asChild size="sm" className="w-full sm:w-auto">
            <Link href={`/projects/${slug}`}>Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
