import React from 'react';
import { getAllPosts } from '../lib/posts';
import MySeparator from './my-separator';
import PostCard from './post-card';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const BlogPosts = () => {
  const posts = getAllPosts();
  return (
    <div className="px-[23px] border-stone-200 border-x dark:border-stone-900">
      <div className="gap-4 grid grid-cols-2 border-stone-200 border-x dark:border-stone-900 w-[calc(100%+1px)] h-6">
        <h2 className="first:mt-0 px-[1px] py-4 font-semibold text-3xl tracking-tight scroll-m-20">
          Blog
        </h2>
      </div>
      <MySeparator />
      <div className="gap-4 grid grid-cols-2 border-stone-200 border-x dark:border-stone-900 w-[calc(100%+1px)] h-6"></div>
      <MySeparator />
      <div className="gap-x-[48px] grid grid-cols-2 border-stone-200 dark:border-stone-900 w-[calc(100%+1px)]">
        {posts.length === 0 ? (
          <p>Vish nenhum post mano</p>
        ) : (
          posts.slice(0, 4).map((post, index) => (
            <React.Fragment key={index}>
              <PostCard key={index} {...post} />
              {(index !== 0 && (index + 1) % 2 === 0 && (index + 1) !== posts.length) &&
                  <div className='col-span-2 relative border-stone-200 dark:border-stone-900'>
                    <MySeparator />
                    <div className="gap-x-[48px] grid grid-cols-2 border-stone-200 dark:border-stone-900 w-[calc(100%+1)] h-6">
                      <div className='h-6 border-x border-stone-200 dark:border-stone-900' />
                      <div className='h-6 border-x border-stone-200 dark:border-stone-900' />
                    </div>
                    <MySeparator />
                </div>}
            </React.Fragment>
          ))
        )}
        {posts.length >= 4 && (
          <div className='col-span-2 relative border-stone-200 dark:border-stone-900'>
            <MySeparator />
            <div className="flex items-center justify-center py-2">
              <Link href="/blog">
                <Button variant="outline" size="sm" className='cursor-pointer'>
                  All Posts <MoveRight />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <MySeparator />
      <div className="gap-4 grid grid-cols-2 border-stone-200 border-x dark:border-stone-900 w-[calc(100%+1px)] h-6"></div>
      <MySeparator />
      <div className="gap-4 grid grid-cols-2 border-stone-200 border-x dark:border-stone-900 w-[calc(100%+1px)] h-6"></div>
    </div>
  );
};

export default BlogPosts;
