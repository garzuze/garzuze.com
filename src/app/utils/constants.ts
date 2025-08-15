import { ExperienceItemType } from "@/components/work-experience";
import { TechStack } from "../types/TechStack";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
        id: "1",
        companyName: "Britânia",
        companyLogo: "/images/britania.webp",
        isCurrentEmployer: true,
        positions: [
            {
                id: "1-1",
                title: "Full Stack Developer",
                employmentPeriod: "Aug 2025 - Present",
                description:
                    "Working with cutting-edge JavaScript technologies in varios projects.",
                icon: "code",
                skills: ["Next", "React", "Express", "Nest", "Redis", "Node.js", "TypeScript"],
                isExpanded: true,
            },
        ],
    },
    {
        id: "2",
        companyName: "Freelance, Self-employed",
        companyLogo: "images/self_employed.png",
        isCurrentEmployer: false,
        positions: [
            {
                id: "1-1",
                title: "Independent Software Developer",
                employmentType: "Full-time",
                employmentPeriod: "Jun 2024 - Jul 2025",
                description:
                    `- Developed conversion-optimized Landing Pages using JavaScript and TailwindCSS.\n- Created an integrated software for HR that centralizes Sales, R&S, and Finance in a unified interface.\n- Enhanced skills in Algorithms and Data Structures with Python and C.\n`,
                icon: "code",
                skills: ["TypeScript", "Python", "React", "Django"],
                isExpanded: true,
            },
        ],
    },
    {
        id: "3",
        companyName: "MBK GSE",
        companyLogo: "/images/logo_mbk_contabilidade.avif",
        isCurrentEmployer: false,
        positions: [
            {
                id: "1-1",
                title: "Python Developer",
                employmentPeriod: "Oct 2023 - May 2024",
                description:
                    `- Developed a Django system for clients to access their files, improving user experience.\n- Implemented scripts for automatic PDF renaming and email sending, increasing work efficiency.\n- Automated repetitive tasks with Python scripts`,
                icon: "code",
                skills: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "Django"],
                isExpanded: true,
            },
        ],
    },
];

export const TECH_STACK: TechStack[] = [
    {
        key: "python",
        title: "Python",
        href: "https://www.python.org/",
        categories: ["Language"],
    },
    {
        key: "typescript",
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        categories: ["Language"],
    },
    {
        key: "js",
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        categories: ["Language"],
    },
    {
        key: "php",
        title: "PHP",
        href: "https://www.php.net/",
        categories: ["Language"],
    },
    {
        key: "django",
        title: "Django",
        href: "https://www.djangoproject.com/",
        categories: ["Framework"],
    },
    {
        key: "nodejs",
        title: "Node.js",
        href: "https://nodejs.org/",
        categories: ["Runtime Environment"],
    },
    {
        key: "react",
        title: "React",
        href: "https://react.dev/",
        categories: ["Library", "UI Library"],
    },
    {
        key: "reactquery",
        title: "Tanstack Query",
        href: "https://tanstack.com/query/latest",
        categories: ["Library"],
    },
    {
        key: "next",
        title: "Next.js",
        href: "https://nextjs.org/",
        categories: ["Framework"],
        theme: true,
    },
    {
        key: "tailwind",
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        categories: ["Library"],
    },
    {
        key: "git",
        title: "Git",
        href: "https://git-scm.com/",
        categories: ["Version Control"],
    },
    {
        key: "github",
        title: "GitHub",
        href: "https://github.com/",
        categories: ["Version Control"],
        theme: true,
    },
    {
        key: "docker",
        title: "Docker",
        href: "https://www.docker.com/",
        categories: ["Containerization"],
    },
    {
        key: "mysql",
        title: "MySQL",
        href: "https://www.mysql.com/",
        categories: ["Database"],
    },
    {
        key: "postgresql",
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
        categories: ["Database"],
    },
] 