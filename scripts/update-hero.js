import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../.env.local") });

const sql = neon(process.env.NEON_DB_URL);

async function updateHero() {
  try {
    console.log("Updating hero information...");

    const result = await sql`
      UPDATE hero SET
        full_name = ${"Dilraj Randhawa"},
        short_description = ${"Full Stack Developer Student at BCIT | Passionate about building innovative web applications"},
        long_description = ${"I'm a Full Stack Developer with a passion for building efficient, scalable, and user-friendly applications. I'm proficient in TypeScript, JavaScript, CSS, React, Next.js, Node.js, and modern web technologies. I enjoy solving complex problems and continuously learning new skills to stay at the forefront of web development."},
        updated_at = now()
      WHERE id = (SELECT id FROM hero ORDER BY created_at ASC LIMIT 1)
      RETURNING *
    `;

    if (result.length > 0) {
      console.log("✅ Hero updated successfully!");
      console.log("Name:", result[0].full_name);
      console.log("Short description:", result[0].short_description);
    } else {
      console.log("⚠️ No hero found to update. Creating new one...");

      await sql`
        INSERT INTO hero (avatar, full_name, short_description, long_description)
        VALUES (
          ${"data:image/gif;base64,R0lGODlhAQABAAAAACw="},
          ${"Dilraj Randhawa"},
          ${"Full Stack Developer Student at BCIT | Passionate about building innovative web applications"},
          ${"I'm a Full Stack Developer with a passion for building efficient, scalable, and user-friendly applications. I'm proficient in TypeScript, JavaScript, CSS, React, Next.js, Node.js, and modern web technologies. I enjoy solving complex problems and continuously learning new skills to stay at the forefront of web development."}
        )
      `;
      console.log("✅ New hero created successfully!");
    }
  } catch (error) {
    console.error("❌ Error updating hero:", error.message);
    process.exit(1);
  }

  process.exit(0);
}

updateHero();
