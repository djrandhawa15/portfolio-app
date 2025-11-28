import { ensureProjectsTable, seedProjectsTable } from "./db.js";

const seedData = [
  {
    title: "Conway's Game of Life",
    description: "Cellular automaton visualizer built with JavaScript and HTML Canvas. Watch patterns evolve through generations with interactive controls for speed, grid size, and initial configurations.",
    image: "/images/placeholder-300x300.png",
    link: "https://example.com/game-of-life",
    keywords: ["algorithms", "simulation", "javascript", "canvas"]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application using OpenWeather API. Features include current conditions, 7-day forecast, interactive maps, and location-based weather alerts.",
    image: "/images/placeholder-300x300.png",
    link: "https://example.com/weather-dashboard",
    keywords: ["api", "react", "weather", "responsive"]
  },
  {
    title: "Task Manager Pro",
    description: "Full-stack task management application with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
    image: "/images/placeholder-300x300.png",
    link: "https://example.com/task-manager",
    keywords: ["full-stack", "websockets", "mongodb", "express"]
  },
  {
    title: "Portfolio Generator",
    description: "Automated portfolio website generator that creates responsive, customizable portfolios from user data. Includes multiple themes and export options.",
    image: "/images/placeholder-300x300.png",
    link: "https://example.com/portfolio-generator",
    keywords: ["nextjs", "tailwind", "automation", "ssr"]
  },
  {
    title: "E-Commerce Store",
    description: "Modern e-commerce platform with shopping cart, payment integration via Stripe, inventory management, and admin dashboard for product management.",
    image: "/images/placeholder-300x300.png",
    link: "https://example.com/ecommerce",
    keywords: ["ecommerce", "stripe", "postgresql", "nextjs"]
  },
  {
    title: "Code Snippet Manager",
    description: "Developer tool for organizing and sharing code snippets. Features syntax highlighting, tagging system, and GitHub Gist integration.",
    image: "/images/placeholder-300x300.png",
    link: "https://example.com/code-snippets",
    keywords: ["developer-tools", "api", "github", "firebase"]
  }
];

export async function runSeed() {
  try {
    console.log("Creating projects table...");
    await ensureProjectsTable();
    console.log("Projects table created successfully!");

    console.log("Seeding projects...");
    await seedProjectsTable(seedData);
    console.log("Projects seeded successfully!");

    return { success: true, message: "Database seeded successfully" };
  } catch (error) {
    console.error("Error seeding database:", error);
    return { success: false, error: error.message };
  }
}
