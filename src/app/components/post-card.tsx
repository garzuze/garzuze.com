import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '@/components/work-experience';
import { Post } from '../types/Post';

const PostCard = ({ slug, title, image, tags }: Post) => {
  return (
    <div className="group grid col-span-2 sm:col-span-1 px-[24px] py-4 sm:py-0 border-stone-200 dark:border-stone-900 border-x  cursor-pointer sm:border-b-0 border-b">
      <Link href={`blog/${slug}`} key={slug}>
        <div className="mt-2">
          <Image
            src={image}
            width={1920}
            height={1080}
            alt={`${title} image`}
            className="w-full h-40 object-cover border-stone-200 dark:border-stone-900 rounded-sm"
          />
        </div>
        <div>
          <h2 className="mt-4 sm:mt-2 font-semibold text-xl group-hover:underline tracking-tight scroll-m-20 cursor-pointer">
            {title}
          </h2>
          <ul className="flex py-2">
            <li className="flex gap-1.5">
              {tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
