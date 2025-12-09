"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DB_URL);

function mapProject(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    image: row.image,
    link: row.link,
    keywords: row.keywords ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function ensureProjectsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      description text NOT NULL,
      image text NOT NULL,
      link text NOT NULL,
      keywords jsonb NOT NULL DEFAULT '[]'::jsonb,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
}

export async function seedProjectsTable(seed) {
  for (const item of seed) {
    await sql`
      INSERT INTO projects (title, description, image, link, keywords)
      VALUES (${item.title}, ${item.description}, ${item.image}, ${item.link}, ${JSON.stringify(item.keywords)})
      ON CONFLICT DO NOTHING
    `;
  }
}

export async function fetchProjects() {
  const rows = await sql`SELECT * FROM projects ORDER BY created_at DESC`;
  return rows.map(mapProject);
}

export async function getProjectById(id) {
  const [row] = await sql`SELECT * FROM projects WHERE id = ${id} LIMIT 1`;
  return row ? mapProject(row) : null;
}

export async function insertProject(data) {
  const [row] = await sql`
    INSERT INTO projects (title, description, image, link, keywords)
    VALUES (${data.title}, ${data.description}, ${data.image}, ${data.link}, ${JSON.stringify(data.keywords)})
    RETURNING *
  `;
  return mapProject(row);
}

export async function updateProject(id, updates) {
  const fields = [];
  const values = [];

  if (updates.title !== undefined) {
    fields.push(`title = $${fields.length + 1}`);
    values.push(updates.title);
  }
  if (updates.description !== undefined) {
    fields.push(`description = $${fields.length + 1}`);
    values.push(updates.description);
  }
  if (updates.image !== undefined) {
    fields.push(`image = $${fields.length + 1}`);
    values.push(updates.image);
  }
  if (updates.link !== undefined) {
    fields.push(`link = $${fields.length + 1}`);
    values.push(updates.link);
  }
  if (updates.keywords !== undefined) {
    fields.push(`keywords = $${fields.length + 1}`);
    values.push(JSON.stringify(updates.keywords));
  }

  if (fields.length === 0) {
    return getProjectById(id);
  }

  fields.push('updated_at = now()');
  values.push(id);

  const query = `
    UPDATE projects
    SET ${fields.join(', ')}
    WHERE id = $${values.length}
    RETURNING *
  `;

  const [row] = await sql(query, values);
  return row ? mapProject(row) : null;
}

export async function deleteProject(id) {
  const [row] = await sql`DELETE FROM projects WHERE id = ${id} RETURNING *`;
  return row ? mapProject(row) : null;
}

// Hero Section CRUD
const HERO_PLACEHOLDER_AVATAR = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";
const defaultHeroContent = {
  avatar: HERO_PLACEHOLDER_AVATAR,
  fullName: "Dilraj Randhawa",
  shortDescription: "Full Stack Developer Student at BCIT | Passionate about building innovative web applications",
  longDescription: "I'm a full stack development student at BCIT with a passion for creating efficient, scalable, and user-friendly applications. I'm proficient in TypeScript, JavaScript, CSS, React, Next.js, Node.js, and modern web technologies. I enjoy tackling complex problems and continuously learning new skills to stay at the forefront of web development.",
};

function mapHeroRow(row) {
  return {
    id: row.id,
    avatar: row.avatar || HERO_PLACEHOLDER_AVATAR,
    fullName: row.full_name || defaultHeroContent.fullName,
    shortDescription: row.short_description || defaultHeroContent.shortDescription,
    longDescription: row.long_description || defaultHeroContent.longDescription,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

export async function ensureHeroTable() {
  await sql`
    create table if not exists hero (
      id uuid primary key default gen_random_uuid(),
      avatar text not null default '',
      full_name text not null,
      short_description text not null check (char_length(short_description) <= 120),
      long_description text not null,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
  `;
  const [{ count }] = await sql`select count(*)::int as count from hero`;
  if (Number(count) === 0) {
    await sql`
      insert into hero (avatar, full_name, short_description, long_description)
      values (
        ${defaultHeroContent.avatar},
        ${defaultHeroContent.fullName},
        ${defaultHeroContent.shortDescription},
        ${defaultHeroContent.longDescription}
      )
    `;
  }
}

export async function getHero() {
  await ensureHeroTable();
  const [row] = await sql`
    select id, avatar, full_name, short_description, long_description,
           created_at as "createdAt", updated_at as "updatedAt"
    from hero
    order by created_at asc
    limit 1;
  `;
  return row ? mapHeroRow(row) : null;
}

export async function upsertHero(updates = {}) {
  await ensureHeroTable();
  const current = await getHero();

  // Merge defaults → current → updates
  const merged = {
    avatar: updates.avatar ?? current?.avatar ?? defaultHeroContent.avatar,
    fullName: updates.fullName ?? current?.fullName ?? defaultHeroContent.fullName,
    shortDescription: updates.shortDescription ?? current?.shortDescription ?? defaultHeroContent.shortDescription,
    longDescription: updates.longDescription ?? current?.longDescription ?? defaultHeroContent.longDescription,
  };

  // Normalize avatar: ensure it's a valid data URL or use placeholder
  if (!merged.avatar || !merged.avatar.startsWith("data:")) {
    merged.avatar = HERO_PLACEHOLDER_AVATAR;
  }

  // Validate lengths
  if (merged.shortDescription.length > 120) {
    merged.shortDescription = merged.shortDescription.substring(0, 120);
  }

  if (current?.id) {
    // Update existing row
    const [row] = await sql`
      update hero
      set avatar = ${merged.avatar},
          full_name = ${merged.fullName},
          short_description = ${merged.shortDescription},
          long_description = ${merged.longDescription},
          updated_at = now()
      where id = ${current.id}
      returning id, avatar, full_name, short_description, long_description,
                created_at as "createdAt", updated_at as "updatedAt"
    `;
    return mapHeroRow(row);
  } else {
    // Insert new row
    const [row] = await sql`
      insert into hero (avatar, full_name, short_description, long_description)
      values (${merged.avatar}, ${merged.fullName}, ${merged.shortDescription}, ${merged.longDescription})
      returning id, avatar, full_name, short_description, long_description,
                created_at as "createdAt", updated_at as "updatedAt"
    `;
    return mapHeroRow(row);
  }
}
