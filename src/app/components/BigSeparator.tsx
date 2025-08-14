import Separator from "./Separator";

const BigSeparator = () => {
    return (
        <>
            <Separator />
            <div className="relative w-full overflow-hidden border-x border-stone-200 dark:border-stone-900">
                <div className="w-full h-[47px] bg-stone-200 dark:bg-stone-900">
                    <div className="h-full w-full bg-white/80 dark:bg-stone-950 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:24px_24px] bg-[position:-1px_-1px]" />
                </div>
            </div>
            <Separator />
        </>
    )
};

export default BigSeparator