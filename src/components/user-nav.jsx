"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";

export default function UserNav() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return null;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="hidden sm:flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          <User className="w-4 h-4" />
          <span>{user.name || user.email}</span>
        </Link>
        <Button asChild size="sm" variant="outline">
          <a href="/api/auth/logout">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </a>
        </Button>
      </div>
    );
  }

  return null;

  // return (
  //   <Button asChild size="sm">
  //     <a href="/api/auth/login">
  //       <LogIn className="w-4 h-4 mr-2" />
  //       Login
  //     </a>
  //   </Button>
  // );
}
