"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FolderX, ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  const params = useParams();
  const slug = params?.slug;

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <FolderX className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-3xl font-bold">Project Not Found</CardTitle>
          <CardDescription className="text-lg">
            404 Error
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {slug ? (
            <p className="text-muted-foreground">
              The project <span className="font-semibold text-foreground">"{slug}"</span> doesn't exist or has been removed.
            </p>
          ) : (
            <p className="text-muted-foreground">
              The project you're looking for doesn't exist or has been removed.
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
