import Image from 'next/image';

const Profile = () => {
  return (
    <div className="mx-auto md:max-w-3xl border-x border-stone-200 dark:border-stone-900 h-[192px] flex">
      <div className="w-64 border-r border-stone-200 dark:border-stone-900 items-center grid">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar image"
          width={1557}
          height={1558}
          className="mx-auto bg-cover rounded-full border border-stone-200 dark:border-stone-900"
        />
      </div>
      <div className="w-full">
        <div className="w-full h-1/2 bg-stone-200 dark:bg-stone-900">
          <div className="h-full w-full bg-white/80 dark:bg-stone-950 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:24px_24px] bg-[position:-1px_-1px]" />
        </div>
        <div className="items-end w-full h-1/2">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl sm:text-3xl font-bold sm:px-4 px-1 border-y border-stone-200 dark:border-stone-900 w-full scroll-m-20 tracking-tight text-balance">
                Lucas Garzuze Cordeiro
              </h1>
              <div className="flex w-full items-center border-b border-stone-200 dark:border-stone-900">
                <p className="sm:text-sm text-xs items-center sm:px-4 px-1 text-gray-500 dark:text-gray-300 italic">
                  I build solutions that solve problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
