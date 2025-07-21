import Image from 'next/image'

export function ProfileHeader() {
    return (
        <div className="flex border-x border-edge">
            <div className="shrink-0 border-r border-edge">
                <div className="mx-[2px] my-[3px]">
                    <Image
                        src='/images/avatar.jpg'
                        alt='Garzuze avatar'
                        width={1932}
                        height={1932}
                        className='size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40'
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <div
                    className="flex grow items-end pb-1 pl-4 bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"
                >
                    <div className="line-clamp-1 font-mono text-xs text-stone-300 select-none max-sm:hidden">
                        {"text-3xl "}
                        <span className="inline dark:hidden">text-stone-950</span>
                        <span className="hidden dark:inline">text-stone-50</span>
                        {" font-medium"}
                    </div>
                </div>

                <div className="border-t border-edge">
                    <h1 className="flex items-center pl-4 text-3xl font-semibold">
                        Lucas Garzuze Cordeiro
                    </h1>
                    <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto font-mono text-sm text-balance text-muted-foreground select-none">
                        Full Stack Software Developer
                    </div>
                </div>
            </div>
        </div>
    );
};
