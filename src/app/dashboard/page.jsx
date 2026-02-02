"use client";

// import { useEffect } from "react";
// import { redirect } from "next/navigation";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { toast } from "sonner";
import HeroEditorForm from "@/components/hero-editor-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  // const { user, error, isLoading } = useUser();

  // useEffect(() => {
  //   console.log("Dashboard - User:", user);
  //   console.log("Dashboard - Error:", error);
  //   console.log("Dashboard - Loading:", isLoading);
  //   if (error) toast.error(error.message);
  // }, [user, error, isLoading]);

  // if (error) redirect("/api/auth/login");

  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-5xl px-4">
        <div className="flex items-center justify-between mt-8 mb-6">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* {isLoading && (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg">Loading...</p>
          </div>
        )}

        {!isLoading && !user && (
          <div className="text-center py-20">
            <p className="text-lg mb-4">Log in to update your portfolio content.</p>
            <Button asChild>
              <Link href="/api/auth/login">Log In</Link>
            </Button>
          </div>
        )}

        {user && ( */}
        <div className="pb-10 space-y-6">
          {/* <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
            <p className="text-muted-foreground">
              Logged in as:{" "}
              <span className="font-medium text-foreground">
                {user.name || user.email || user.nickname}
              </span>
            </p>
          </div> */}

          <HeroEditorForm />
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
