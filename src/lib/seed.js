import { ensureProjectsTable, seedProjectsTable, deleteAllProjects } from "./db.js";

const seedData = [
  {
    title: "EventQuest",
    description: "Event management and discovery web application built with HTML, CSS, and JavaScript. Features responsive design and interactive UI for browsing and managing events.",
    image: "/images/placeholder-300x300.png",
    link: "https://github.com/djrandhawa15/EventQuest",
    keywords: ["html", "css", "javascript", "web-development"]
  },
  {
    title: "Expense Tracker",
    description: "Full-stack expense tracking application built with TypeScript and Bun runtime. Features Drizzle ORM for database management, Docker deployment, and a modern frontend interface for managing personal finances.",
    image: "/images/placeholder-300x300.png",
    link: "https://github.com/djrandhawa15/comp3330-expensetracker",
    keywords: ["typescript", "bun", "drizzle-orm", "docker", "full-stack"]
  },
  {
    title: "Social Media App - OOP Term Project",
    description: "Collaborative social media application featuring post creation, likes, and AJAX-powered comments. Built with TypeScript, Vite, and Prisma ORM. Team project demonstrating object-oriented programming principles and full-stack development.",
    image: "/images/placeholder-300x300.png",
    link: "https://github.com/djrandhawa15/Term-Project-OOP",
    keywords: ["typescript", "prisma", "vite", "ajax", "full-stack", "oop"]
  },
  {
    title: "CineHub - Movie Application",
    description: "React-based movie discovery application built with Vite. Features modern UI for browsing movies with responsive design and fast performance using React with SWC.",
    image: "/images/placeholder-300x300.png",
    link: "https://github.com/djrandhawa15/Movie-Project",
    keywords: ["react", "vite", "javascript", "css", "spa"]
  },
  {
    title: "Portfolio Application",
    description: "Modern personal portfolio website built with JavaScript. Showcases projects, skills, and experience with a clean, responsive design.",
    image: "/images/placeholder-300x300.png",
    link: "https://github.com/djrandhawa15/portfolio-app",
    keywords: ["javascript", "portfolio", "responsive", "web-development"]
  },
  {
    title: "Passport Authentication Lab",
    description: "Authentication implementation using Passport.js with TypeScript. Demonstrates user authentication patterns, session management, and secure login/logout functionality.",
    image: "/images/placeholder-300x300.png",
    link: "https://github.com/djrandhawa15/passport-typescript-lab-Dilraj",
    keywords: ["typescript", "passport", "authentication", "security"]
  }
];

export async function runSeed() {
  try {
    console.log("Creating projects table...");
    await ensureProjectsTable();
    console.log("Projects table created successfully!");

    console.log("Deleting all existing projects...");
    await deleteAllProjects();
    console.log("All existing projects deleted!");

    console.log("Seeding projects...");
    await seedProjectsTable(seedData);
    console.log("Projects seeded successfully!");

    return { success: true, message: "Database seeded successfully" };
  } catch (error) {
    console.error("Error seeding database:", error);
    return { success: false, error: error.message };
  }
}
