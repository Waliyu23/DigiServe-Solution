import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  author?: string;
  image?: string;
  tags?: string[];
}

export interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

export async function getPostBySlug(
  slug: string,
  contentType: 'blog' | 'case-studies'
): Promise<Post | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', contentType, `${slug}.mdx`);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, content: body } = matter(content);

    return {
      slug,
      frontmatter: data as Frontmatter,
      content: body,
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(
  contentType: 'blog' | 'case-studies'
): Promise<Post[]> {
  try {
    const contentDir = path.join(process.cwd(), 'content', contentType);
    const files = await fs.readdir(contentDir);
    const posts: Post[] = [];

    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;
      const slug = file.replace('.mdx', '');
      const post = await getPostBySlug(slug, contentType);
      if (post) posts.push(post);
    }

    return posts.sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
  } catch {
    return [];
  }
}
