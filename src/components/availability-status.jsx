"use client";

import { CheckCircle2, Clock, XCircle } from "lucide-react";

const statusConfig = {
  available: {
    icon: CheckCircle2,
    label: "Available for work",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-200 dark:border-green-800",
    dotColor: "bg-green-500",
  },
  busy: {
    icon: Clock,
    label: "Open to opportunities",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    dotColor: "bg-yellow-500",
  },
  unavailable: {
    icon: XCircle,
    label: "Not available",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-200 dark:border-red-800",
    dotColor: "bg-red-500",
  },
};

export function AvailabilityStatus({
  status = "available",
  message = "Looking for full-time opportunities",
  compact = false
}) {
  const config = statusConfig[status] || statusConfig.available;
  const Icon = config.icon;

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${config.dotColor}`}></span>
        </span>
        <span className={`text-sm font-medium ${config.color}`}>
          {config.label}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 rounded-lg border ${config.borderColor} ${config.bgColor} p-4 transition-all duration-300 hover:shadow-md`}>
      <div className="relative mt-0.5">
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${config.dotColor}`}></span>
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${config.color}`} />
          <h3 className={`font-semibold ${config.color}`}>
            {config.label}
          </h3>
        </div>
        {message && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
