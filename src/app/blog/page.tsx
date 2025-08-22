import React from "react";
import Header from "../components/header";
import MySeparator from "../components/my-separator";
import PostCard from "../components/post-card";
import { getAllPosts } from "../lib/posts";

const BlogPage = () => {
  const posts = getAllPosts();
  return (
    <>
      <Header page="blog"/>
      <main className="mx-auto md:max-w-3xl mt-16 overflow-hidden">
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
            posts.map((post, index) => (
              <React.Fragment key={post.slug}>
                <PostCard key={post.date} {...post} />
                {index !== 0 &&
                  (index + 1) % 2 === 0 &&
                  index + 1 !== posts.length && (
                    <div className="col-span-2 relative border-stone-200 dark:border-stone-900">
                      <MySeparator />
                      <div className="gap-x-[48px] grid grid-cols-2 border-stone-200 dark:border-stone-900 w-[calc(100%+1)] h-6">
                        <div className="h-6 border-x border-stone-200 dark:border-stone-900" />
                        <div className="h-6 border-x border-stone-200 dark:border-stone-900" />
                      </div>
                      <MySeparator />
                    </div>
                  )}
              </React.Fragment>
            ))
          )}
        </div>
        <MySeparator />
        <div className="gap-4 grid grid-cols-2 border-stone-200 border-x dark:border-stone-900 w-[calc(100%+1px)] h-6"></div>
        <MySeparator />
        <div className="gap-4 grid grid-cols-2 border-stone-200 border-x dark:border-stone-900 w-[calc(100%+1px)] h-6"></div>
      </div>
      </main>
    </>
  );
};

export default BlogPage;
