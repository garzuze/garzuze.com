import Header from '@/app/components/header';
import MySeparator from '@/app/components/my-separator';
import BigSeparator from '@/app/components/big-separator';
import { getAllPosts, getPostBySlug } from '@/app/lib/posts';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { Calendar } from 'lucide-react';
import { Tag } from '@/components/work-experience';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Post Not Found.',
    };
  }

  return {
    title: `${post.title} - Lucas Garzuze Cordeiro`,
    description: post.excerpt,
  };
}

async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header page={'blog'} />
      <main className="mx-auto md:max-w-3xl mt-16 overflow-hidden">
        <BigSeparator />
        <article>
          <header>
            <div className="px-[23px] border-stone-200 border-x dark:border-stone-900">
              <h2 className="first:mt-0 px-[1px] py-4 font-semibold text-3xl tracking-tight scroll-m-20">
                {post.title}
              </h2>
              <div className="pb-2">
                <h3 className='scroll-m-20 text-2xl tracking-tight text-stone-800 dark:text-stone-200 font-mono'>{post.excerpt}</h3>
              </div>
              <MySeparator />
              <div className="sm:flex sm:mt-2 items-center text-stone-500">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <ul className="flex py-2 sm:ml-4">
                  <li className="flex gap-1.5">
                    {post.tags?.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </li>
                </ul>
                <p className='sm:ml-4 font-mono text-muted-foreground'>By Lucas Garzuze Cordeiro</p>
              </div>
              <MySeparator />
              <div className="prose dark:prose-invert prose-headings:font-[Inter] prose-h1:font-semibold prose-h1:mb-0 mt-6">
                <Markdown>{post.content}</Markdown>
              </div>
            </div>
          </header>
          <MySeparator />
        </article>
      </main>
    </div >
  );
}

export default BlogPost;
