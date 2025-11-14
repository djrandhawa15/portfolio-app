import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project, slug }) {
  return (
    <Card className="group hover:scale-105 transition-transform overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.keywords.slice(0, 3).map((keyword) => (
            <Badge key={keyword} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="secondary">
            <a href={project.link} target="_blank" rel="noreferrer">Open</a>
          </Button>
          <Button asChild size="sm">
            <Link href={`/projects/${slug}`}>Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
