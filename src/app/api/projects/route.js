import { NextResponse } from "next/server";
import { fetchProjects } from "@/lib/db";

// GET /api/projects
export async function GET() {
  try {
    const projects = await fetchProjects();
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Failed to fetch projects", error: error.message },
      { status: 500 }
    );
  }
}
