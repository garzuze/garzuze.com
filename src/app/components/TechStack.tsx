import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { TECH_STACK } from "../utils/constants";
import { TypographyH2 } from "./TypographyH2";

const TechStack = () => {
    return (
        <div className="border-x border-stone-200 dark:border-stone-900 py-6 px-[24px]">
            <TypographyH2>
                Stack
            </TypographyH2>
            <ul className="flex flex-wrap gap-4 select-none mt-6">
                {TECH_STACK.map((tech) => {
                    return (
                        <li key={tech.key} className="flex">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={tech.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={tech.title}
                                    >
                                        {tech.theme ? (
                                            <>
                                                <Image
                                                    src={`/svgs/${tech.key}-light.svg`}
                                                    alt={`${tech.title} light icon`}
                                                    width={32}
                                                    height={32}
                                                    className="dark:hidden block"
                                                    unoptimized
                                                    />
                                                <Image
                                                    src={`/svgs/${tech.key}-dark.svg`}
                                                    alt={`${tech.title} dark icon`}
                                                    width={32}
                                                    height={32}
                                                    className="hidden dark:block"
                                                    unoptimized
                                                />
                                            </>
                                        ) : (
                                            <Image
                                                src={`/svgs/${tech.key}.svg`}
                                                alt={`${tech.title} icon`}
                                                width={32}
                                                height={32}
                                                unoptimized
                                            />
                                        )}
                                        <span className="sr-only">{tech.title}</span>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{tech.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default TechStack