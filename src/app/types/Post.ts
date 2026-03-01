export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
  tags?: string[];
}
