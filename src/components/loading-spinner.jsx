"use client";

import { Loader2 } from "lucide-react";

export function LoadingSpinner({ size = "default", className = "" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-blue-600 dark:text-blue-400 ${sizeClasses[size]}`} />
    </div>
  );
}

export function LoadingPage({ message = "Loading..." }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{message}</p>
      </div>
    </div>
  );
}

export function LoadingButton({ children, isLoading, ...props }) {
  return (
    <button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
