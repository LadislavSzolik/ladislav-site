import path, { join } from 'path';
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';
import { marked } from 'marked';

const projectsPath = join(process.cwd(), 'data/projects');

export async function getProjects() {
  const dir = await fs.readdir(projectsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(join(projectsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: attributes.title,
        preview: attributes.preview,
        date: attributes.date.toString(),
        imageUrl: attributes.imageUrl,
      };
    })
  );
}

export async function getProject(slug) {
  const filepath = path.join(projectsPath, slug + '.mdx');
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  return { slug, title: attributes.title, imageUrl: attributes.imageUrl, body };
}
