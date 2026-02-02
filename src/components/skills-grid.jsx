"use client";

import { Code2, Database, Wrench, Server } from "lucide-react";

const skillsData = [
  {
    category: "Coding Languages",
    icon: Code2,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    skills: [
      "React",
      "Angular",
      "C#",
      "C++",
      "HTML5",
      "JavaScript",
      "TypeScript",
      "SaaS",
      "MongoDB",
      "PHP",
    ],
  },
  {
    category: "Back-End",
    icon: Server,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-200 dark:border-green-800",
    skills: [
      "Node.js",
      "Python (FastAPI)",
      "Ruby on Rails",
      ".NET",
      "Next.js",
      "Hono",
      "Bun",
      "YAML",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "SQL Server",
      "MariaDB",
      "Oracle Database",
      "MongoDB",
      "Firebase Firestore",
      "Firebase Realtime DB",
      "Redis",
      "Cassandra",
      "CouchDB",
      "AWS DynamoDB",
      "Supabase",
      "PlanetScale",
      "AWS RDS",
      "Azure SQL Database",
      "Google Cloud SQL",
      "Heroku Postgres",
      "Neon",
      "Elasticsearch",
      "Algolia",
      "Meilisearch",
      "Redis Stack",
    ],
  },
  {
    category: "Development Tools",
    icon: Wrench,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: [
      "Git",
      "GitHub",
      "RESTful APIs",
      "Docker",
      "Adobe Photoshop",
      "Figma",
      "VS Code",
      "Vercel",
      "Render",
      "Jira",
      "Trello",
      "Slack",
      "MySQL Bench",
      "Avian",
      "Linux",
      "Windows",
      "Mac OS",
    ],
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillsData.map((category, idx) => {
        const Icon = category.icon;
        return (
          <div
            key={idx}
            className={`rounded-lg border ${category.borderColor} ${category.bgColor} p-6 transition-all duration-300 hover:shadow-lg`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color} bg-white dark:bg-zinc-900`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`text-lg font-semibold ${category.color}`}>
                {category.category}
              </h3>
            </div>

            <ul className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <li
                  key={skillIdx}
                  className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${category.color.replace('text-', 'bg-')}`} />
                  {skill}
                </li>
              ))}
            </ul>
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
            {skill}
          </span>
        ))
      )}
    </div>
  );
}
