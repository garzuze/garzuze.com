import fs, { readdirSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Post } from '../types/Post';

const postDirectory = path.join(process.cwd(), 'posts');

function getAllPosts(): Post[] {
    const fileNames = readdirSync(postDirectory);
    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((name) => {
            const slug = name.replace(/.md$/, '');
            const fullPath = path.join(postDirectory, name);
            const fileContent = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContent);
            return {
                slug,
                title: data.title || "Untitled",
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || '',
                content,
                tags: data.tags || []
            }
        });

    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getPostBySlug(slug: string): Post | null {
    try {
        const fullPath = path.join(process.cwd(), `${slug}.md`);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || '',
            content,
            tags: data.tags || []
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}