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
        employmentPeriod: 'Aug 2025 - Present',
        description:
          'Working with cutting-edge JavaScript technologies in various projects.',
        icon: 'code',
        skills: [
          'Next',
          'React',
          'Express',
          'Nest',
          'Redis',
          'Node.js',
          'TypeScript',
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: '2',
    companyName: 'Freelance, Self-employed',
    companyLogo: 'images/self_employed.png',
    isCurrentEmployer: false,
    positions: [
      {
        id: '2-1',
        title: 'Independent Software Developer',
        employmentType: 'Full-time',
        employmentPeriod: 'Jun 2024 - Jul 2025',
        description: `- Developed conversion-optimized Landing Pages using JavaScript and TailwindCSS.\n- Created an integrated software for HR that centralizes Sales, R&S, and Finance in a unified interface.\n- Enhanced skills in Algorithms and Data Structures with Python and C.\n`,
        icon: 'code',
        skills: ['TypeScript', 'Python', 'React', 'Django'],
        isExpanded: true,
      },
    ],
  },
  {
    id: '3',
    companyName: 'MBK GSE',
    companyLogo: '/images/logo_mbk_contabilidade.avif',
    isCurrentEmployer: false,
    positions: [
      {
        id: '3-1',
        title: 'Python Developer',
        employmentPeriod: 'Oct 2023 - May 2024',
        description: `- Developed a Django system for clients to access their files, improving user experience.\n- Implemented scripts for automatic PDF renaming and email sending, increasing work efficiency.\n- Automated repetitive tasks with Python scripts`,
        icon: 'code',
        skills: ['JavaScript', 'Python', 'Django'],
        isExpanded: true,
      },
    ],
  },
];
