import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const DOCS_DIR = path.join(process.cwd(), 'src/content/docs');

export type DocEntry = {
  slug: string;
  title: string;
  section: string;
  order: number;
  body: string;
};

function slugFromFilename(filename: string): string {
  return filename.replace(/\.(md|mdoc)$/i, '');
}

function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

async function readDocFile(filePath: string, slug: string): Promise<DocEntry> {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;
  const title = typeof data.title === 'string' ? data.title : titleFromSlug(slug);
  const section = typeof data.section === 'string' ? data.section : 'getting-started';
  const order =
    typeof data.order === 'number'
      ? data.order
      : Number.isFinite(Number(data.order))
        ? Number(data.order)
        : 0;

  return {
    slug,
    title,
    section,
    order,
    body: parsed.content || ''
  };
}

export async function getAllDocs(): Promise<DocEntry[]> {
  const entries = await fs.readdir(DOCS_DIR, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith('.mdoc') || name.endsWith('.md'));

  const docs = await Promise.all(
    files.map(async (file) => {
      const slug = slugFromFilename(file);
      const filePath = path.join(DOCS_DIR, file);
      return readDocFile(filePath, slug);
    })
  );

  return docs;
}

export async function getDocBySlug(slug: string): Promise<DocEntry | null> {
  const mdocPath = path.join(DOCS_DIR, `${slug}.mdoc`);
  const mdPath = path.join(DOCS_DIR, `${slug}.md`);

  try {
    await fs.access(mdocPath);
    return readDocFile(mdocPath, slug);
  } catch {
    // fall through
  }

  try {
    await fs.access(mdPath);
    return readDocFile(mdPath, slug);
  } catch {
    return null;
  }
}
