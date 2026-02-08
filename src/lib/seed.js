import { ensureProjectsTable, seedProjectsTable, deleteAllProjects } from "./db.js";

const seedData = [
  {
    title: "Jargon",
    description: "Jargon helps newcomer tradespeople overcome language barriers while pursuing Canadian Red Seal certification. Many language-learning apps lack trade-specific vocabulary, and technical manuals can be overwhelming, filled with complex terms and little context. Developed in collaboration with BCIT's ConnectHER hub, this 15-week project combines visual learning with interactive exercises, featuring flashcards, optical character recognition (OCR), Gemini 3 Flash AI-driven Q&A, and progress tracking to keep users engaged.\n\nBy balancing educational precision with an approachable interface, Jargon supports learners rather than intimidating them. Its interactive, goal-oriented design empowers tradespeople to overcome language obstacles, advance toward professional certification, and gain confidence in the workplace.",
    image: "/images/projects/jargon/logoorangeIcon.webp",
    link: "https://www.jargon-app.ca/",
    keywords: ["React", "Hono", "TypeScript", "TanStack Query", "Tailwind CSS", "MySQL", "Prisma ORM", "Clerk", "Gemini Flash"],
    logo: "/images/projects/jargon/logoorangeIcon.webp",
    photos: [
      "/images/projects/jargon/screenshot-1.png",
      "/images/projects/jargon/screenshot-2.png",
      "/images/projects/jargon/screenshot-3.png",
      "/images/projects/jargon/screenshot-4.png",
      "/images/projects/jargon/screenshot-5.png",
      "/images/projects/jargon/screenshot-6.png",
    ],
    videos: [
      {
        url: "/images/projects/jargon/jargon-walkthrough.mp4",
        description: "A walkthrough video demonstrating the Jargon AI-powered, gamified language learning app.",
      },
      {
        url: "https://streamable.com/fqhwej",
        description: "A video of our team presenting the Jargon gamified language learning app at BCIT's Burnaby Campus, Telus Theatre, on December 5, 2025.",
      },
    ],
    links: [
      { label: "Website", url: "https://jargon-app.framer.website/" },
      { label: "Live Demo", url: "https://www.jargon-app.ca/" },
      { label: "GitHub", url: "https://github.com/Jargon-IDSP" },
    ],
  },
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
