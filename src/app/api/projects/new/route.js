import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";
import { insertProject } from "@/lib/db";
import { projectSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

// POST /api/projects/new
export async function POST(req) {
  try {
    // Require authentication
    const session = await auth0.getSession();
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const img = formData.get("img");
    const link = formData.get("link");
    const keywordsString = formData.get("keywords");

    // Parse keywords from JSON string
    let keywords = [];
    try {
      keywords = JSON.parse(keywordsString);
    } catch (e) {
      return NextResponse.json(
        { ok: false, error: "Invalid keywords format" },
        { status: 400 }
      );
    }

    const projectData = {
      title,
      description,
      image: img,
      link,
      keywords,
    };

    // Validate with Zod
    const validatedData = projectSchema.parse(projectData);

    // Insert into database
    const project = await insertProject(validatedData);

    // Revalidate projects page
    revalidatePath("/projects");

    return NextResponse.json(
      { ok: true, message: "Project created", data: project },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating project:", err);

    if (err.name === "ZodError") {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: err.errors },
        { status: 400 }
      );
    }

    if (err.message === "Unauthorized") {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "Failed to create project" },
      { status: 500 }
    );
  }
}
