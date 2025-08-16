import MySeparator from "./my-separator"

const Projects = () => {
    return (
        <div className="border-x border-stone-200 dark:border-stone-900 px-[23px]">
            <div className="w-[calc(100%+1px)] border-x border-stone-200 dark:border-stone-900 grid grid-cols-2 gap-4 h-6">
                <h2 className="scroll-m-20 py-4 text-3xl px-[1px] font-semibold tracking-tight first:mt-0">
                    Projects
                </h2>
            </div>
            <MySeparator />
            <div className="w-[calc(100%+1px)] border-x border-stone-200 dark:border-stone-900 grid grid-cols-2 gap-4 h-6">
            </div>
            <MySeparator />
            <div className="w-[calc(100%+1px)] border-x border-stone-200 dark:border-stone-900 grid grid-cols-2 gap-x-[48px] sm:h-64">
                <div className="sm:w-[calc(100%+1px)] border-b sm:border-b-0 col-span-2 sm:col-span-1 py-4 sm:py-0 border-r border-stone-200 dark:border-stone-900 items-center grid px-[24px] group">
                    <div>
                        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight group-hover:underline cursor-pointer">
                            MLRH
                        </h2>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-300">
                            All parts of HR in an unified interface
                        </p>
                    </div>
                </div>
                <div className="border-l py-4 sm:py-0 border-stone-200 col-span-2 sm:col-span-1 dark:border-stone-900 items-center grid px-[24px] group">
                    <div>
                        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight group-hover:underline cursor-pointer">
                            Sepais
                        </h2>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-300">
                            A system designed to streamline school communication
                        </p>
                    </div>
                </div>
            </div>
            <MySeparator />
            <div className="w-[calc(100%+1px)] border-x border-stone-200 dark:border-stone-900 grid grid-cols-2 gap-4 h-6">
            </div>
            <MySeparator />
            <div className="w-[calc(100%+1px)] border-x border-stone-200 dark:border-stone-900 grid grid-cols-2 gap-4 h-6">
            </div>
        </div>
    )
};

export default Projects