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
  {
    title: "CineHub",
    description: "CINE HUB is an innovative movie database project designed to provide users with a comprehensive and immersive movie experience. CINE HUB offers a vast collection of information about movies, TV shows, actors, and more.\n\nCreated by: Priya, Simran, Dilraj, and Mudarres.\n\nThis product uses the TMDb API but is not endorsed or certified by TMDb.",
    image: "/images/projects/cinehub/logo.svg",
    link: "https://cinehub-h3qq.onrender.com/",
    keywords: ["JavaScript", "CSS", "HTML", "React", "Vite", "TMDb API"],
    logo: "/images/projects/cinehub/logo.svg",
    photos: [
      "/images/projects/cinehub/screenshot-1.png",
      "/images/projects/cinehub/screenshot-2.png",
      "/images/projects/cinehub/screenshot-3.png",
    ],
    videos: [],
    links: [
      { label: "Live Demo", url: "https://cinehub-h3qq.onrender.com/" },
      { label: "GitHub", url: "https://github.com/djrandhawa15/Movie-Project" },
    ],
  },
  {
    title: "SRP Depreciation Portal",
    description: "The Strata Reserve Planning (SRP) Depreciation Portal is a comprehensive platform built for a British Columbia property management company specializing in strata reserve fund planning and depreciation reporting. The goal was to replace fragmented, manual processes with a centralized digital workflow covering inspections, appointments, surveys, and client documentation.\n\nThe platform serves four distinct user roles — Admin, Client, Inspector, and Assistant — each with tailored dashboards, permissions, and workflows. Given the sensitivity of the financial and property data involved, the system was designed from the ground up as a secure internal business tool rather than a public-facing application.\n\n—— The Challenge ——\n\nDomain-Specific Filtering Logic — Rather than hard-coding business rules that would quickly become outdated, a flexible question CRUD system was built with configurable settings, empowering the company to tailor survey questions and document filtering based on their own domain expertise.\n\nLegacy System Integration — The company had an established Dropbox workflow for storing client documents. Rather than forcing a migration, the Dropbox API was integrated directly into the platform, enabling seamless upload, preview, download, and archival. Documents were organized by strata ID, and upon survey completion, automatically moved to a designated \"completed\" folder alongside the file ID — preserving compliance records while keeping active workflows clean.\n\nMulti-Role Complexity — Four user roles with overlapping but distinct permissions needed to coexist within a single platform, each requiring its own views, route protections, and data access patterns.\n\nSecurity & Compliance — Strict security measures were required to handle sensitive client data, including Canadian data residency compliance, role-based access control, and restricted account creation tied to verified business onboarding.\n\n—— Process ——\n\nResearch & Discovery: The project began with detailed user personas representing each primary user type, capturing demographics, daily workflows, and the specific value the platform would deliver. These informed the creation of user flow diagrams for all four roles, mapping every interaction from login through to task completion.\n\nProject Planning: An Agile methodology was adopted using Jira to manage sprints, track progress, and maintain the product backlog. Weekly sponsor meetings provided consistent alignment, followed by team syncs to assign tasks and conduct sprint reviews. A structured pull request process with mandatory code reviews ensured quality across the shared codebase.\n\nNaming Conventions & Project Structure: Clear naming conventions and a three-repository architecture were established early — covering everything from Git branch naming to database column formatting. No inline styles were permitted, and reusable helper functions were enforced to keep the codebase clean and maintainable.\n\n—— Development ——\n\nThe platform was built as a three-tier architecture across three repositories:\n\nFrontend — React, TypeScript, Vite: Role-based routing with separate admin and client route trees, a shared component library, custom data-fetching hooks, and modular SCSS styling.\n\nBackend — Hono, TypeScript, Prisma: A RESTful API with type-safe database access, role-based middleware, and a shared service layer for business logic.\n\nSupabase Edge Functions — Deno-based serverless functions handling all document operations — upload, download, preview, archive, and sync — via Dropbox API integration.\n\nStrategic Build Order: The Admin and Client platforms were built first, as these roles encompassed the full feature set of the application. This allowed for thorough testing and iteration on the most complex interfaces before the Inspector and Assistant platforms were developed.\n\nIterative UI Improvements: Weekly client meetings drove continuous refinement. Key improvements included a configurable question management system, a Dropbox sync tool to reconcile database records with manually modified files, collapsible navigation for tablet and mobile views, and location grouping for appointments.\n\n—— Testing & Documentation ——\n\nBefore expanding to the Inspector and Assistant roles, in-person testing was conducted with the sponsor on the completed Admin and Client platforms. This hands-on session validated core workflows, surfaced usability issues, and confirmed the foundation was stable enough to build upon. Supporting documentation was delivered in both video and PDF formats.\n\n—— Security & Compliance ——\n\nCanadian Data Residency — All data is hosted on Canadian servers in compliance with regulations governing client financial and property documentation.\n\nRoute Security — Supabase authentication enforces role-based access control across all API endpoints.\n\nNo Public Registration — Account creation is restricted to verified clients onboarded through existing business processes, with no public-facing registration.\n\n—— Outcome ——\n\nThe completed SRP Depreciation Portal delivers a unified, role-based platform that modernizes the company's core operations. The result is a scalable, secure system with tailored workflows for each user role, flexible configuration without code changes, seamless Dropbox integration, and full compliance with Canadian data residency requirements — built to support the business today and scale with it going forward.",
    image: "/images/projects/srp/srp-logo.webp",
    link: "https://srp.builtbyrobyn.com/",
    keywords: ["React", "TypeScript", "Vite", "Hono", "Prisma", "Supabase", "Deno", "Dropbox API", "SCSS", "Jira", "Agile"],
    logo: "/images/projects/srp/srp-logo.webp",
    photos: [
      { url: "/images/projects/srp/admin-user-flow.webp", caption: "Admin User Flow\n\nMapped the full Admin journey from login through to task completion, covering appointment management, inspection oversight, survey configuration, and document handling.", section: "User Flows" },
      { url: "/images/projects/srp/client-user-flow.webp", caption: "Client User Flow\n\nDefined the Client experience from onboarding through to reviewing depreciation reports, including document access and appointment scheduling.", section: "User Flows" },
      { url: "/images/projects/srp/inspector-user-flow.webp", caption: "Inspector User Flow\n\nOutlined the Inspector workflow for receiving assignments, conducting on-site inspections, and submitting findings through the portal.", section: "User Flows" },
      { url: "/images/projects/srp/assistant-user-flow.webp", caption: "Assistant User Flow\n\nDesigned the Assistant role to support administrative tasks with restricted access, balancing operational utility with data security.", section: "User Flows" },
      { url: "/images/projects/srp/admin-prototype-desktop.png", caption: "Admin Prototype — Desktop\n\nHigh-fidelity desktop prototype of the Admin dashboard, showcasing the full navigation structure, data tables, and management tools before development began.", section: "Prototypes" },
      { url: "/images/projects/srp/admin-prototype-mobile.png", caption: "Admin Prototype — Mobile\n\nMobile prototype of the Admin interface, used to validate collapsible navigation and responsive layout decisions ahead of implementation.", section: "Prototypes" },
      { url: "/images/projects/srp/client-prototype-desktop.png", caption: "Client Prototype — Desktop\n\nDesktop prototype of the Client-facing portal, illustrating document access, appointment views, and the tailored dashboard experience.", section: "Prototypes" },
      { url: "/images/projects/srp/client-prototype-mobile.png", caption: "Client Prototype — Mobile\n\nMobile prototype for the Client role, confirming that key workflows remained accessible and intuitive on smaller screens.", section: "Prototypes" },
      { url: "/images/projects/srp/jira-board.png", caption: "Jira Sprint Board\n\nActive sprint board used to track in-progress work, assign tasks by role, and maintain visibility across the team during weekly development cycles.", section: "Project Management" },
      { url: "/images/projects/srp/jira-backlog.png", caption: "Jira Backlog\n\nProduct backlog managed throughout the project, organized by priority and sprint, keeping the team aligned with sponsor requirements and evolving feature requests.", section: "Project Management" },
      { url: "/images/projects/srp/questions-crud.webp", caption: "Question Management System\n\nConfigurable CRUD interface allowing the company to manage survey questions without code changes — addressing domain-specific filtering logic and edge cases directly through the platform.", section: "Features" },
      { url: "/images/projects/srp/sync-docs-dropbox.webp", caption: "Dropbox Sync Tool\n\nBuilt to reconcile the platform's database records with files manually modified in Dropbox, ensuring consistency between the portal and the company's existing document workflow.", section: "Features" },
      { url: "/images/projects/srp/tablet-view.webp", caption: "Tablet View — Collapsible Navigation\n\nIterative UI improvement introduced after client feedback: collapsible sidebar navigation for tablet and mobile viewports, keeping the interface clean without sacrificing access to key features.", section: "Features" },
    ],
    videos: [],
    links: [
      { label: "Live Demo", url: "https://srp.builtbyrobyn.com/" },
      { label: "GitHub", url: "https://github.com/IDSP-Strata-Reserve-Planning" },
    ],
    demoNote: "This demo is completely detached from the production application and contains sample data only.\n\nAdmin: admin@admin.com\nClient: client@client.com\nPassword: Test1234!",
    caseStudy: true,
    sections: [
      {
        heading: "Background",
        body: `The Strata Reserve Planning (SRP) Depreciation Portal is a comprehensive platform built for a British Columbia property management company specializing in strata reserve fund planning and depreciation reporting. The goal was to replace fragmented, manual processes with a centralized digital workflow covering inspections, appointments, surveys, and client documentation.\n\nThe platform serves four distinct user roles — Admin, Client, Inspector, and Assistant — each with tailored dashboards, permissions, and workflows. Given the sensitivity of the financial and property data involved, the system was designed from the ground up as a secure internal business tool rather than a public-facing application.`,
        photos: [],
      },
      {
        heading: "The Challenge",
        body: `Several interconnected challenges shaped the direction of the project:\n\nDomain-Specific Filtering Logic — Rather than hard-coding business rules that would quickly become outdated, a flexible question CRUD system was built with configurable settings, empowering the company to tailor survey questions and document filtering based on their own domain expertise.\n\nLegacy System Integration — The company had an established Dropbox workflow for storing client documents. Rather than forcing a migration, the Dropbox API was integrated directly into the platform, enabling seamless upload, preview, download, and archival. Documents were organized by strata ID, and upon survey completion, automatically moved to a designated "completed" folder alongside the file ID — preserving compliance records while keeping active workflows clean.\n\nMulti-Role Complexity — Four user roles with overlapping but distinct permissions needed to coexist within a single platform, each requiring its own views, route protections, and data access patterns.\n\nSecurity & Compliance — Strict security measures were required to handle sensitive client data, including Canadian data residency compliance, role-based access control, and restricted account creation tied to verified business onboarding.`,
        photos: [],
      },
      {
        heading: "Research & Discovery",
        body: `The project began with detailed user personas representing each primary user type, capturing demographics, daily workflows, and the specific value the platform would deliver. These informed the creation of user flow diagrams for all four roles, mapping every interaction from login through to task completion — establishing clear navigation structures, permission boundaries, and feature priorities early on.`,
        documents: [
          { url: "/images/projects/srp/persona-margaret-treasurer.pdf", label: "User Persona — Margaret (Treasurer)" },
          { url: "/images/projects/srp/persona-kevin-maintenance.pdf", label: "User Persona — Kevin (Maintenance)" },
        ],
        photos: [
          { url: "/images/projects/srp/admin-user-flow.webp", caption: "Admin User Flow\n\nMapped the full Admin journey from login through to task completion, covering appointment management, inspection oversight, survey configuration, and document handling." },
          { url: "/images/projects/srp/client-user-flow.webp", caption: "Client User Flow\n\nDefined the Client experience from onboarding through to reviewing depreciation reports, including document access and appointment scheduling." },
          { url: "/images/projects/srp/inspector-user-flow.webp", caption: "Inspector User Flow\n\nOutlined the Inspector workflow for receiving assignments, conducting on-site inspections, and submitting findings through the portal." },
          { url: "/images/projects/srp/assistant-user-flow.webp", caption: "Assistant User Flow\n\nDesigned the Assistant role to support administrative tasks with restricted access, balancing operational utility with data security." },
          { url: "/images/projects/srp/admin-prototype-desktop.png", caption: "Admin Prototype — Desktop\n\nHigh-fidelity desktop prototype of the Admin dashboard, showcasing the full navigation structure, data tables, and management tools before development began." },
          { url: "/images/projects/srp/admin-prototype-mobile.png", caption: "Admin Prototype — Mobile\n\nMobile prototype of the Admin interface, used to validate collapsible navigation and responsive layout decisions ahead of implementation." },
          { url: "/images/projects/srp/client-prototype-desktop.png", caption: "Client Prototype — Desktop\n\nDesktop prototype of the Client-facing portal, illustrating document access, appointment views, and the tailored dashboard experience." },
          { url: "/images/projects/srp/client-prototype-mobile.png", caption: "Client Prototype — Mobile\n\nMobile prototype for the Client role, confirming that key workflows remained accessible and intuitive on smaller screens." },
        ],
      },
      {
        heading: "Project Planning",
        body: `An Agile methodology was adopted using Jira to manage sprints, track progress, and maintain the product backlog. Weekly sponsor meetings provided consistent alignment, followed by team syncs to assign tasks and conduct sprint reviews. Work was distributed to play to individual strengths, and a structured pull request process with mandatory code reviews ensured quality across the shared codebase.`,
        photos: [
          { url: "/images/projects/srp/jira-board.png", caption: "Jira Sprint Board\n\nActive sprint board used to track in-progress work, assign tasks by role, and maintain visibility across the team during weekly development cycles." },
          { url: "/images/projects/srp/jira-backlog.png", caption: "Jira Backlog\n\nProduct backlog managed throughout the project, organized by priority and sprint, keeping the team aligned with sponsor requirements and evolving feature requests." },
        ],
      },
      {
        heading: "Naming Conventions & Project Structure",
        body: `Clear naming conventions and a three-repository architecture were established early to maintain consistency throughout development — covering everything from Git branch naming to database column formatting. No inline styles were permitted, and reusable helper functions were enforced to keep the codebase clean and maintainable.`,
        photos: [],
      },
      {
        heading: "Development",
        body: `The platform was built as a three-tier architecture across three repositories:\n\nFrontend — React, TypeScript, Vite: Role-based routing with separate admin and client route trees, a shared component library, custom data-fetching hooks, and modular SCSS styling.\n\nBackend — Hono, TypeScript, Prisma: A RESTful API with type-safe database access, role-based middleware, and a shared service layer for business logic.\n\nSupabase Edge Functions — Deno-based serverless functions handling all document operations — upload, download, preview, archive, and sync — via Dropbox API integration.\n\nStrategic Build Order: The Admin and Client platforms were built first, as these roles encompassed the full feature set of the application. This allowed for thorough testing and iteration on the most complex interfaces before the Inspector and Assistant platforms were developed — both of which share the same underlying architecture with restricted, role-specific access.`,
        photos: [],
      },
      {
        heading: "Iterative UI Improvements",
        body: `Weekly client meetings drove continuous refinement throughout development. Key improvements included a configurable question management system to handle edge cases without code changes, a Dropbox sync tool to reconcile database records with manually modified files, collapsible navigation for tablet and mobile views, and location grouping for appointments to keep same-day bookings within the same region.`,
        photos: [
          { url: "/images/projects/srp/questions-crud.webp", caption: "Question Management System\n\nConfigurable CRUD interface allowing the company to manage survey questions without code changes — addressing domain-specific filtering logic and edge cases directly through the platform." },
          { url: "/images/projects/srp/sync-docs-dropbox.webp", caption: "Dropbox Sync Tool\n\nBuilt to reconcile the platform's database records with files manually modified in Dropbox, ensuring consistency between the portal and the company's existing document workflow." },
          { url: "/images/projects/srp/tablet-view.webp", caption: "Tablet View — Collapsible Navigation\n\nIterative UI improvement introduced after client feedback: collapsible sidebar navigation for tablet and mobile viewports, keeping the interface clean without sacrificing access to key features." },
        ],
      },
      {
        heading: "Testing & Documentation",
        body: `Before expanding to the Inspector and Assistant roles, in-person testing was conducted with the sponsor on the completed Admin and Client platforms. This hands-on session validated core workflows, surfaced usability issues, and confirmed the foundation was stable enough to build upon. Supporting documentation was delivered in both video and PDF formats, providing practical guidance for day-to-day use.`,
        photos: [],
      },
      {
        heading: "Security & Compliance",
        body: `Security was a foundational design principle, not an afterthought:\n\nCanadian Data Residency — All data is hosted on Canadian servers in compliance with regulations governing client financial and property documentation.\n\nRoute Security — Supabase authentication enforces role-based access control across all API endpoints.\n\nNo Public Registration — Account creation is restricted to verified clients onboarded through existing business processes, with no public-facing registration.`,
        photos: [],
      },
      {
        heading: "Outcome",
        body: `The completed SRP Depreciation Portal delivers a unified, role-based platform that modernizes the company's core operations. The result is a scalable, secure system with tailored workflows for each user role, flexible configuration without code changes, seamless Dropbox integration, and full compliance with Canadian data residency requirements — built to support the business today and scale with it going forward.`,
        photos: [],
      },
    ],
  },
  {
    title: "Authors & Books Library",
    description: "Full-stack web application for managing a library of authors and their books with complete CRUD functionality.\n\nView all authors with book counts at a glance, add, edit, and delete authors with birth dates, and manage books for each author including title, description, and ISBN. Real-time author-book relationship tracking keeps data consistent, and the database is automatically seeded on deployment.",
    image: "/images/projects/authors-books/screenshot-1.png",
    link: "https://practice-final.onrender.com/",
    keywords: ["Node.js", "Express.js", "EJS", "MySQL", "CSS", "Render"],
    logo: "/images/projects/authors-books/logo.svg",
    photos: [
      { url: "/images/projects/authors-books/screenshot-1.png", caption: "Author Directory\n\nHome page listing all authors with their birth dates and total book counts, with inline add/edit/delete controls." },
    ],
    videos: [],
    links: [
      { label: "Live Demo", url: "https://practice-final.onrender.com/" },
      { label: "GitHub", url: "https://github.com/djrandhawa15/practice-final" },
    ],
    caseStudy: false,
    sections: [],
  },
  {
    title: "Money Monsters",
    description: "High school education does not prepare children to deal with financial responsibilities, and there is no practical manner for young people to improve their literacy in the subject. Although parents try to educate their children, many struggle to find effective tools that combine real world money management with age appropriate learning materials.\n\nMoney Monsters addresses this challenge by enabling parents to assign household chores and offer pocket money as incentives. Children can set savings goals, request rewards, and access educational content about managing budgets. The priority was designing a simple solution that ensures young users can navigate the platform independently, while parents maintain an administrative overview.\n\nDeveloped over four weeks, this full stack application uses a task and reward structure, mirroring real world financial transactions. The playful yet functional visual design makes budgeting tangible, and transforms routine household tasks into meaningful learning opportunities.",
    image: "/images/projects/money-monsters/logo.webp",
    link: "https://moneymonstersv2.onrender.com/",
    keywords: ["MongoDB", "JavaScript", "Express.js", "Sass", "Jira"],
    logo: "/images/projects/money-monsters/logo.webp",
    photos: [
      { url: "/images/projects/money-monsters/screenshot-1.webp", caption: "" },
      { url: "/images/projects/money-monsters/screenshot-2.webp", caption: "" },
      {
        url: "/images/projects/money-monsters/screenshot-3.webp",
        caption: "Family Management\n\nBuilt the family management system to connect family members and assign roles (parent/child). Designed the interface when design deliverables were delayed to keep the team on track.",
      },
      {
        url: "/images/projects/money-monsters/screenshot-4.png",
        caption: "User Profiles\n\nDeveloped user profiles with Cloudinary integration for profile picture uploads. Implemented cookie-based data retrieval and protected routes to ensure users can only access their own data.",
      },
    ],
    videos: [],
    links: [
      { label: "Live Demo", url: "https://moneymonstersv2.onrender.com/" },
      { label: "GitHub", url: "https://github.com/IDSP-Project/MoneyMonstersV2" },
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
