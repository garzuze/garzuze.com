import { ExperienceItemType } from '@/components/work-experience';

export const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: '1',
    companyName: 'Britânia',
    companyLogo: '/images/britania.webp',
    isCurrentEmployer: true,
    positions: [
      {
        id: '1-1',
        title: 'Full Stack Developer',
        employmentPeriod: 'Jul 2025 - Present',
        description:
          '- Implemented a semantic cache service with **Redis** and **OpenAi** embeddings API, which reuses responses from semantically similar queries, reducing token usage and response time in interactions with **LLMs APIs** in 30%.\n- Contributed, applying Clean Architecture and SOLID principles, to the development of a container monitoring system, used by the international purchases sector, with TypeScript, Nest and React.',
        icon: 'code',
        skills: [
          'React',
          'Express',
          'Nest',
          'Redis',
          'Node.js',
          'TypeScript',
          'JavaScript',
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: '2',
    companyName: 'Freelance, Self-employed',
    companyLogo: 'images/self_employed.webp',
    isCurrentEmployer: false,
    positions: [
      {
        id: '2-1',
        title: 'Independent Software Developer',
        employmentPeriod: 'Jun 2024 - Jul 2025',
        description: `- Built Landing Pages for local firms using JavaScript and Tailwind.\n- Developed a full HR Management Platform, now in production with approximately 3k monthly visitors.\n`,
        icon: 'code',
        skills: ['TypeScript', 'Python', 'React', 'Django'],
        isExpanded: true,
      },
    ],
  },
  {
    id: '3',
    companyName: 'MBK GSE',
    companyLogo: '/images/mbk.webp',
    isCurrentEmployer: false,
    positions: [
      {
        id: '3-1',
        title: 'Python Developer',
        employmentPeriod: 'Oct 2023 - May 2024',
        description: `- Developed a Django system for clients to access their files, improving user experience.\n- mplemented a system for automatic file organization and email sending, reducing the time spent in repetitive tasks in about 50%.`,
        icon: 'code',
        skills: ['JavaScript', 'Python', 'Django'],
        isExpanded: true,
      },
    ],
  },
];
