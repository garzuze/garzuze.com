import Image from "next/image";

const Banner = () => {
    return (
        <div className="h-52 sm:h-72 border-x border-stone-200 dark:border-stone-900">
            <Image
                src="/images/fog_croped.jpg"
                alt="Banner image"
                width={1080}
                height={288}
                className="h-full w-full object-cover object-center"
            />
        </div>
    )
};

export default Banner