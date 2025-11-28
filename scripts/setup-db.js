#!/usr/bin/env node

// This script sets up the database by creating tables and seeding data
// It runs automatically before the dev server starts

import dotenv from "dotenv";

// IMPORTANT: Load environment variables BEFORE importing any other modules
// This ensures process.env is populated when db.js initializes
dotenv.config({ path: ".env.local" });

// Now we can safely import modules that depend on environment variables
const { runSeed } = await import("../src/lib/seed.js");

async function setup() {
  console.log("🚀 Setting up database...\n");

  const result = await runSeed();

  if (result.success) {
    console.log("✅ Database setup complete!\n");
    process.exit(0);
  } else {
    console.error("❌ Database setup failed:", result.error);
    process.exit(1);
  }
}

setup();
