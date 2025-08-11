import Image from "next/image";

const Profile = () => {
    return (
        <div className="mx-auto md:max-w-3xl border-x border-stone-200 dark:border-stone-900 h-fit grid grid-cols-7">
            <div className="sm:col-span-2 col-span-3 px-4 py-2 border-r border-stone-200 dark:border-stone-900">
                <Image
                    src="/images/avatar.jpg"
                    alt="Avatar image"
                    width={1392}
                    height={1392}
                    className="w-full bg-cover rounded-full"
                />
            </div>
            <div className="sm:col-span-5 col-span-4">
                <div className="w-full h-1/2">
                    <div
                        className="inset-0 h-full w-full bg-white/80 dark:bg-stone-950/80 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>
                <div className="items-end w-full h-1/2">
                    <div className="w-full h-full flex items-center sm:px-4 px-1 sm:py-2 py-1">
                        <div>
                            <h1 className="md:text-4xl text-lg sm:text-3xl font-bold">Lucas Garzuze Cordeiro</h1>
                            <p className="sm:text-sm text-xs sm:mt-2 text-gray-500 dark:text-gray-300 italic">Looking for building a brighter future through technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile