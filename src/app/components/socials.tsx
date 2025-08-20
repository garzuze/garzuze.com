import Image from 'next/image';

const Socials = () => {
  return (
    <div className="border-x border-stone-200 dark:border-stone-900 grid grid-cols-2 gap-x-[48px] sm:h-[96px]">
      <div className="sm:w-[calc(100%+1px)] border-b sm:border-b-0 col-span-2 sm:col-span-1 py-4 sm:py-0 border-r border-stone-200 dark:border-stone-900 items-center grid px-[24px] group">
        <a
          href="https://linkedin.com/in/garzuze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex space-x-[25px]">
            <Image
              alt="LinkedIn"
              loading="lazy"
              width="48"
              height="48"
              decoding="async"
              data-nimg="1"
              className="shrink-0"
              style={{ color: 'transparent' }}
              src="/images/linkedin.webp"
            />
            <div className="block">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight group-hover:underline cursor-pointer">
                Linkedin
              </h2>
              <p className="text-sm leading-none font-medium text-gray-500 dark:text-gray-300">
                garzuze
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="border-l py-4 sm:py-0 border-stone-200 col-span-2 sm:col-span-1 dark:border-stone-900 items-center grid px-[24px] group">
        <a
          href="https://github.com/garzuze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex space-x-[25px]">
            <Image
              alt="LinkedIn"
              loading="lazy"
              width="48"
              height="48"
              decoding="async"
              data-nimg="1"
              className="shrink-0"
              style={{ color: 'transparent' }}
              src="/images/github.webp"
            />
            <div className="block">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight group-hover:underline cursor-pointer">
                Github
              </h2>
              <p className="text-sm leading-none font-medium text-gray-500 dark:text-gray-300">
                garzuze
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
