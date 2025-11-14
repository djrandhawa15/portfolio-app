// POST /api/projects/new
export async function POST(req) {
  try {
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
      return Response.json({ ok: false, error: "Invalid keywords format" }, { status: 400 });
    }

    // Basic validation
    if (!title || !description || !img || !link || !keywords || keywords.length === 0) {
      return Response.json({ ok: false, error: "All fields are required" }, { status: 400 });
    }

    // FUTURE CONCERNS - you can ignore them now
    // TODO: (recommended) validate here again with Zod
    // TODO: persist to DB (Prisma/Drizzle/etc.)
    // TODO: revalidatePath("/projects") after write (if using Next cache)

    const project = { title, description, image: img, link, keywords };

    console.log("New project received:");
    console.log({ project });

    return Response.json({ ok: true, project }, { status: 201 });
  } catch (err) {
    console.error("Error creating project:", err);
    return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}
