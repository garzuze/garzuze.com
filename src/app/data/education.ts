import { ExperienceItemType } from "@/components/work-experience";

export const EDUCATION: ExperienceItemType[] = [
    {
        id: "1",
        companyName: "UFPR - Federal University of Paraná",
        companyLogo: "/images/ufpr.jpg",
        isCurrentEmployer: true,
        positions: [
            {
                id: "1-1",
                title: "Analysis and Systems Development, Computer Science",
                employmentType: "Bachelors",
                employmentPeriod: "Mar 2025 - Present",
                description:
                `- Admitted in first place in the Entrance Exam.\n- Invited to deliver a talk about sets thoery applied to Computer Science.`,
                icon: "education",
                skills: ["Algorithms", "Computer Networks", "Computer Architecture", "C language"],
                isExpanded: true,
            },
        ],
    },
    {
        id: "2",
        companyName: "IFPR - Federal Institute of Paraná",
        companyLogo: "images/ifpr.jpg",
        isCurrentEmployer: false,
        positions: [
            {
                id: "1-1",
                title: "Technical High School in Computer Science",
                employmentType: "Technical High School",
                employmentPeriod: "Mar 2021 - Dec 2024",
                description:
                    `- Capstone Project awarded Best Oral Presentation at the SEPIN academic event.\n- Awarded a scholarship for an academic writing project, assisting peers in improving their writing.\n- Team placed 4th in a Hackathon promoted by Stellantis.\n- Wonthe JAStartup project, promoted by KPMG, by developing a sustainability-focused startup.\n- Personal website awarded 3rd place in a Web Development Bootcamp.\n- Deepened knowledge in operating systems, web development, databases, and networks.`,
                icon: "education",
                skills: ["Databases", "Operating Systems", "Computer Networks", "Web Development"],
                isExpanded: true,
            },
        ],
    },
];