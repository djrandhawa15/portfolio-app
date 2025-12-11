"use client";

import { Code2, Database, Wrench, Layout, Server, GitBranch } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: Layout,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-200 dark:border-green-800",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Bun", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Prisma ORM", level: 80 },
      { name: "Drizzle ORM", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Vite", level: 85 },
      { name: "Auth0", level: 80 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    category: "Programming",
    icon: Code2,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-200 dark:border-red-800",
    skills: [
      { name: "OOP", level: 85 },
      { name: "Functional Programming", level: 80 },
      { name: "Design Patterns", level: 75 },
      { name: "Algorithms", level: 75 },
    ],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    skills: [
      { name: "GitHub", level: 90 },
      { name: "Git Workflow", level: 85 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

export function SkillsGrid({ showProgress = true }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((category, idx) => {
        const Icon = category.icon;
        return (
          <div
            key={idx}
            className={`rounded-lg border ${category.borderColor} ${category.bgColor} p-6 transition-all duration-300 hover:shadow-lg hover:scale-105`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color} bg-white dark:bg-zinc-900`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`text-lg font-semibold ${category.color}`}>
                {category.category}
              </h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {skill.name}
                    </span>
                    {showProgress && (
                      <span className="text-xs text-zinc-500 dark:text-zinc-500">
                        {skill.level}%
                      </span>
                    )}
                  </div>
                  {showProgress && (
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                      <div
                        className={`h-full rounded-full ${category.color.replace('text-', 'bg-')} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SkillsList() {
  return (
    <div className="flex flex-wrap gap-2">
      {skillsData.flatMap(category =>
        category.skills.map((skill, idx) => (
          <span
            key={`${category.category}-${idx}`}
            className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {skill.name}
          </span>
        ))
      )}
    </div>
  );
}
