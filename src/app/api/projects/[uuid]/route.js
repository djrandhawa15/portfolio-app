import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";
import { getProjectById, updateProject, deleteProject } from "@/lib/db";
import { projectUpdateSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

// GET /api/projects/[uuid]
export async function GET(request, { params }) {
  try {
    const { uuid } = await params;
    const project = await getProjectById(uuid);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { message: "Failed to fetch project", error: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[uuid]
export async function PUT(request, { params }) {
  try {
    // Require authentication
    const session = await auth0.getSession();
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { uuid } = await params;
    const body = await request.json();

    // Validate with Zod
    const validatedData = projectUpdateSchema.parse(body);

    // Update project
    const updated = await updateProject(uuid, validatedData);

    if (!updated) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Revalidate projects pages
    revalidatePath("/projects");
    revalidatePath(`/projects/${uuid}`);

    return NextResponse.json({
      message: "Project updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating project:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        { message: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    if (error.message === "Unauthorized") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(
      { message: "Failed to update project", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[uuid]
export async function DELETE(request, { params }) {
  try {
    // Require authentication
    const session = await auth0.getSession();
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { uuid } = await params;

    // Delete project
    const deleted = await deleteProject(uuid);

    if (!deleted) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Revalidate projects page
    revalidatePath("/projects");

    return NextResponse.json({
      message: "Project deleted successfully",
      data: deleted,
    });
  } catch (error) {
    console.error("Error deleting project:", error);

    if (error.message === "Unauthorized") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(
      { message: "Failed to delete project", error: error.message },
      { status: 500 }
    );
  }
}
