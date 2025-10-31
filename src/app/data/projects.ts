import { Project } from "../types/Project";

export const PROJECTS: { [label: string]: Project } = {
  mlrh: {
    title: "MLRH",
    shortDescription: "A Complete HR Management Solution",
    fullDescription:
      "MLRH is a comprehensive HR management system designed to streamline recruitment and selection processes by consolidating key HR tasks into a single platform.",
    bulletsTitle: "Key Features",
    bullets: [
      "Platform that centralizes all stages of the Recruitment and Selection process in a unified interface.",
      "Currently used in production by a family business, with approximately 3k monthly visitors.",
      "Async resume processing, transforming PDFs in structured data with AI using Celery and RabbitMQ.",
      "Technologies: TypeScript, React, Django, Django Rest Framework, RabbitMQ, Celery, PostgreSQL and Docker.",
    ],
  },
  sepais: {
    title: "SEPAIS",
    shortDescription: "A Comprehensive School Communication System",
    fullDescription:
      "System designed to improve communication between school staff, guardians, and gatekeepers at the Federal Institute of Paraná. The project aimed to automate manual processes that caused overload and operational errors.",
    bulletsTitle: "Key Features",
    bullets: [
      "Web interface for school staff and gatekeepers to manage student releases, messages, and records",
      "Mobile app (Flutter) for guardians with authentication and real-time notifications",
      "PHP API with Web Service and JWT-based authentication",
      "Relational database built with MySQL",
      "Spreadsheet-based data import and table filtering/export with DataTables",
      "Push notifications using Firebase to inform guardians of student departures",
    ],
  },
};
