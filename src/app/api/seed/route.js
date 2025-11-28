import { NextResponse } from "next/server";
import { runSeed } from "@/lib/seed";

// GET /api/seed
// This endpoint can be used to initialize/seed the database
// SECURITY: In production, you should protect this endpoint or remove it entirely
export async function GET() {
  try {
    const result = await runSeed();

    if (result.success) {
      return NextResponse.json({
        message: result.message,
        success: true,
      });
    } else {
      return NextResponse.json(
        {
          message: "Seeding failed",
          error: result.error,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in seed route:", error);
    return NextResponse.json(
      {
        message: "Seeding failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
