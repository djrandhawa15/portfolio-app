"use client";

import { useState } from "react";
import Script from "next/script";
import { Github, Loader2 } from "lucide-react";

export default function GitHubCalendar({ username = "djrandhawa15" }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    try {
      if (typeof window.GitHubCalendar !== "undefined") {
        window.GitHubCalendar(".js-github-calendar", username, {
          responsive: true,
          tooltips: true,
        });
        setLoading(false);
      }
    } catch (err) {
      console.error("GitHub Calendar error:", err);
      setError(true);
      setLoading(false);
    }
  };

  const handleError = () => {
    console.error("Failed to load GitHub Calendar script");
    setError(true);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Github className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
            GitHub Contributions
          </h3>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors"
          >
            @{username}
          </a>
        </div>
      </div>

      {/* GitHub Calendar Container */}
      <div className="calendar overflow-x-auto">
        {loading && !error && (
          <div className="flex items-center justify-center py-12 text-zinc-500 dark:text-zinc-400">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            Loading GitHub contributions...
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500 dark:text-zinc-400">
            <p className="mb-2">Unable to load GitHub contributions</p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        )}
        <div
          className={`js-github-calendar ${loading ? "hidden" : ""}`}
          data-username={username}
          data-responsive="true"
        />
      </div>

      {/* GitHub Calendar Widget Script */}
      <Script
        src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* GitHub Calendar Widget Styles */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
      />

      <style jsx global>{`
        .js-github-calendar .calendar-graph {
          padding: 5px 0;
        }
        .js-github-calendar .contrib-legend {
          padding-top: 10px;
        }
        .dark .js-github-calendar text.wday,
        .dark .js-github-calendar text.month {
          fill: #a1a1aa;
        }
        .dark .js-github-calendar .contrib-legend .legend-li {
          color: #a1a1aa;
        }
        .js-github-calendar .contrib-footer,
        .js-github-calendar .contrib-column-left,
        .js-github-calendar .contrib-column {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
