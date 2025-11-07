import { ExperienceItemType } from '@/components/work-experience';

export const EDUCATION: ExperienceItemType[] = [
  {
    id: '1',
    companyName: 'UFPR - Federal University of Paraná',
    companyLogo: '/images/ufpr.webp',
    isCurrentEmployer: true,
    positions: [
      {
        id: '1-1',
        title: 'Systems Analysis and Development, Computer Science',
        employmentType: 'Bachelors',
        employmentPeriod: 'Mar 2025 - Present',
        description: `- Admitted in [first place](https://servicos.nc.ufpr.br/documentos/ps2025/resultado/2fase/concorrencia/077_00.html) in the Entrance Exam.\n- Invited to deliver a talk about sets theory applied to Computer Science.\n- Researcher at a project about gamification.\n- Volunteer in a program that provides computer classes to immigrants.`,
        icon: 'education',
        skills: [ 
          'Algorithms',
          'Computer Networks',
          'Computer Architecture',
          'C language',
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: '2',
    companyName: 'IFPR - Federal Institute of Paraná',
    companyLogo: 'images/ifpr.webp',
    isCurrentEmployer: false,
    positions: [
      {
        id: '2-1',
        title: 'Technical High School in Computer Science',
        employmentType: 'Technical High School',
        employmentPeriod: 'Mar 2021 - Dec 2024',
        description: `- Capstone Project awarded Best Oral Presentation at the SEPIN academic event.\n- Awarded a scholarship for an academic writing project, assisting peers in improving their writing.\n- Team placed 4th in a Hackathon promoted by Stellantis.\n- Won the JAStartup project, promoted by KPMG, by developing a sustainability-focused startup.\n- Personal website awarded 3rd place in a Web Development Bo otcamp.\n- Deepened knowledge in operating systems, web development, databases, and networks.`,
        icon: 'education',
        skills: [
          'Databases',
          'Operating Systems',
          'Computer Networks',
          'Web Development',
        ],
        isExpanded: true,
      },
    ],
  },
];
