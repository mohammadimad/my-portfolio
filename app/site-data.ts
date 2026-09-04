export type Credential = {
  title: string;
  issuer: string;
  date?: string;
  id?: string;
  href?: string;
  thumbnail?: string;
};

export type CredentialGroup = {
  title: string;
  items: Credential[];
};

export type ExperienceItem = {
  mark: string;
  logo?: string;
  period: string;
  role: string;
  organization: string;
  place: string;
  detail: string;
  link?: { label: string; href: string };
};

export type ExperienceGroup = {
  title: string;
  description: string;
  items: ExperienceItem[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  visual: "library" | "cardiac" | "student" | "walks";
  context: string;
  problem: string;
  contributions: string[];
  evidence: string[];
  status: string;
  repository?: string;
  certificate?: string;
};

export const technologies = [
  { mark: ".N", label: "ASP.NET Core" },
  { mark: "C#", label: "C#" },
  { mark: "DB", label: "SQL Server" },
  { mark: "EF", label: "Entity Framework Core" },
  { mark: "API", label: "REST APIs" },
  { mark: "✓", label: "xUnit & Moq" },
  { mark: "GIT", label: "Git & GitHub" },
  { mark: "LX", label: "Linux" },
  { mark: "DEP", label: "Deployment" },
  { mark: "CAP", label: "Capacitor" },
];

export const proofPoints = [
  {
    value: "23+",
    label: "API endpoints",
    detail: "Built in the Cardiac Monitor API across patients, vitals, medications, and appointments.",
  },
  {
    value: "22",
    label: "Automated tests",
    detail: "15 unit tests and 7 integration tests covering core API behavior.",
  },
  {
    value: "1 year",
    label: "Joint practical program",
    detail: "Backend team contribution through Tulkarm Municipality and PTUK.",
  },
];

export const experienceGroups: ExperienceGroup[] = [
  {
    title: "Professional experience",
    description: "Professional product work.",
    items: [
      {
        mark: "IM",
        logo: "/organizations/immesense-logo.jfif",
        period: "JUN 2026 — PRESENT",
        role: "Mobile & Full-Stack Developer",
        organization: "Immesense",
        place: "Ramallah, Palestine",
        detail:
          "Building cross-platform product experiences and connecting mobile interfaces to dependable backend services.",
      },
    ],
  },
  {
    title: "Internships & practical programs",
    description: "Structured learning delivered in real teams and operational contexts.",
    items: [
      {
        mark: "BX",
        logo: "/organizations/binx-tech-logo.jfif",
        period: "JUL 2026 — PRESENT",
        role: "Backend Developer Intern",
        organization: "BinX Tech",
        place: "Palestine",
        detail:
          "Developing secure ASP.NET Core APIs with layered architecture, authentication, validation, logging, and automated tests.",
        link: {
          label: "View internship repository",
          href: "https://github.com/mohammadimad/Mohammad-Abdelfattah-BinX-Backend-Internship",
        },
      },
      {
        mark: "TM",
        logo: "/organizations/tulkarm-municipality-logo.png",
        period: "AUG 2025 — AUG 2026",
        role: "Backend Team Member — Library Management System",
        organization: "Tulkarm Municipality × PTUK",
        place: "Tulkarm, Palestine",
        detail:
          "Completed a one-year joint practical software development program, contributing to requirements analysis and the re-engineering of a legacy library system used by municipal staff.",
        link: {
          label: "View experience certificate",
          href: "/certificates/municipality-experience.pdf",
        },
      },
    ],
  },
  {
    title: "Leadership & community",
    description: "Student leadership kept separate from employment history.",
    items: [
      {
        mark: "BC",
        logo: "/organizations/binx-tech-logo.jfif",
        period: "JUN 2026 — PRESENT",
        role: "Technical Team Co-Leader",
        organization: "Bin X Student Club",
        place: "PTUK",
        detail:
          "Supporting technical direction, team collaboration, and practical learning activities for student developers.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "library-management-system",
    number: "01",
    title: "Library Management System",
    category: "Municipal team project",
    period: "2025 — 2026",
    role: "Backend team member",
    summary:
      "A legacy municipal library workflow re-engineered into a modern web-based system through a joint program between Tulkarm Municipality and PTUK.",
    tags: ["ASP.NET Core", ".NET 10", "EF Core", "SQL Server"],
    visual: "library",
    context:
      "The work was completed through a one-year practical program connecting the Computer Science Department at PTUK with Tulkarm Municipality. I worked as part of the backend team alongside frontend contributors.",
    problem:
      "The legacy environment limited source-code ownership, operational traceability, maintainability, and remote access. Daily workflows also depended on complex records that needed clearer structure and safer migration.",
    contributions: [
      "Contributed to requirements analysis and the re-engineering of the legacy system.",
      "Supported backend logic and relational data workflows for books, memberships, subscriptions, borrowing, due dates, and fines.",
      "Worked on role and permission management, activity logging, and operational traceability.",
      "Supported migration of legacy Excel-based records into the new data model.",
      "Participated in validation, testing, issue resolution, and technical documentation.",
    ],
    evidence: [
      "One-year practical experience certificate issued through the municipality-university program.",
      "Documented workflows spanning books, members, subscriptions, borrowing, due dates, fines, permissions, and audit history.",
      "System currently used internally by Tulkarm Municipality staff.",
    ],
    status: "Internal municipal use",
    certificate: "/certificates/municipality-experience.pdf",
  },
  {
    slug: "cardiac-monitor-api",
    number: "02",
    title: "Cardiac Monitor API",
    category: "Backend internship project",
    period: "2026",
    role: "Backend developer intern",
    summary:
      "A security-focused ASP.NET Core API for patient profiles, vital signs, medications, and appointments, backed by automated tests.",
    tags: ["ASP.NET Core 8", "SQL Server", "JWT", "xUnit"],
    visual: "cardiac",
    context:
      "Developed during backend training at BinX Tech to practice production-oriented API design, access control, validation, observability, and test automation.",
    problem:
      "Health-related records require clear access boundaries and predictable behavior. The API needed to protect resources while keeping its endpoints maintainable and testable.",
    contributions: [
      "Built 23+ endpoints for patients, vital signs, medications, and appointments.",
      "Implemented JWT authentication, refresh-token rotation, role and policy authorization, and ownership checks.",
      "Added FluentValidation, centralized error handling, rate limiting, security logging, and auditing.",
      "Wrote 15 unit tests and 7 integration tests using xUnit, Moq, WebApplicationFactory, and isolated SQLite data.",
    ],
    evidence: [
      "23+ API endpoints visible in the public repository.",
      "22 automated tests across unit and integration layers.",
      "Repository includes security, validation, logging, and test implementation.",
    ],
    status: "Repository available",
    repository:
      "https://github.com/mohammadimad/Mohammad-Abdelfattah-BinX-Backend-Internship/tree/main/CardiacMonitor",
  },
  {
    slug: "student-management-system-api",
    number: "03",
    title: "Student Management System API",
    category: "Backend learning project",
    period: "2026",
    role: "Backend developer",
    summary:
      "A RESTful academic records API organized around a clear three-tier architecture, ADO.NET, and SQL Server stored procedures.",
    tags: ["ASP.NET Core", "ADO.NET", "SQL Server", "N-Tier"],
    visual: "student",
    context:
      "Built to apply separation of concerns and database-first thinking to a focused academic records domain.",
    problem:
      "Student data operations can become tightly coupled when API, business rules, and database access are mixed. The project separates those responsibilities into explicit layers.",
    contributions: [
      "Structured the solution into API, business, and data-access layers.",
      "Used ADO.NET and stored procedures for SQL Server data operations.",
      "Exposed RESTful endpoints for the student records workflow.",
    ],
    evidence: [
      "Public repository with the three-tier solution structure.",
      "Database access implemented through ADO.NET and stored procedures.",
    ],
    status: "Repository available",
    repository:
      "https://github.com/mohammadimad/Student-Management-System---RESTful-API-with-N-Tier-Architecture",
  },
  {
    slug: "nzwalks-api",
    number: "04",
    title: "NZWalks API",
    category: "Backend learning project",
    period: "2026",
    role: "Backend developer",
    summary:
      "A .NET API for regions and walking routes with Entity Framework Core, Identity, JWT authentication, and AutoMapper.",
    tags: [".NET 9", "EF Core", "Identity", "JWT"],
    visual: "walks",
    context:
      "Built to practice a complete ASP.NET Core API workflow using domain models, DTO mapping, persistence, authentication, and authorization.",
    problem:
      "The project required clean handling of related region and route data while keeping API contracts separate from persistence models and protecting authenticated operations.",
    contributions: [
      "Implemented region and walking-route resources with Entity Framework Core.",
      "Used ASP.NET Core Identity and JWT for authentication and authorization.",
      "Applied AutoMapper between domain models and API DTOs.",
    ],
    evidence: [
      "Public repository containing the API implementation.",
      "Authentication, persistence, and mapping concerns represented in the solution.",
    ],
    status: "Repository available",
    repository: "https://github.com/mohammadimad/NZWalksAPI",
  },
];

export const credentialGroups: CredentialGroup[] = [
  {
    title: "Professional & current",
    items: [
      {
        title: "One-Year Practical Software Development Experience",
        issuer: "Tulkarm Municipality × PTUK",
        date: "JUL 2026",
        id: "Library Management System · Backend Team",
        href: "/certificates/municipality-experience.pdf",
        thumbnail: "/certificates/thumbs/municipality-experience.jpg",
      },
      {
        title: "Secure Your APIs: JWT, Roles & Policies in ASP.NET Core",
        issuer: "Programming Advices",
        date: "MAY 2026",
        id: "cert_zxm67jtc",
        href: "/certificates/secure-apis.pdf",
        thumbnail: "/certificates/thumbs/secure-apis.jpg",
      },
      { title: "Data Structures", issuer: "Gammal Tech", date: "JUN 2026" },
      {
        title: "Frontend (Freelance)",
        issuer: "Gammal Tech",
        date: "MAY 2026",
        href: "/certificates/frontend-freelance.pdf",
        thumbnail: "/certificates/thumbs/frontend-freelance.jpg",
      },
      { title: "Intrapreneurship", issuer: "Gammal Tech", date: "MAY 2026", id: "6793699a7ea8d9dce1044f2c" },
      { title: "OOP", issuer: "Gammal Tech", date: "MAY 2026", id: "661c71102a4c4fbd4a0bf5c4" },
      { title: "Entrepreneurship", issuer: "Gammal Tech", date: "MAY 2026", id: "661c709c7bf2bfb7cc0580f6" },
      { title: "Prompt Engineering", issuer: "Gammal Tech", date: "MAY 2026", id: "67c64e487780d0b54a06968a" },
    ],
  },
  {
    title: "Backend, database & C#",
    items: [
      {
        title: "Introduction to RESTful API",
        issuer: "Programming Advices",
        date: "SEP 2025",
        href: "/certificates/introduction-restful-api.pdf",
        thumbnail: "/certificates/thumbs/introduction-restful-api.jpg",
      },
      { title: "Data Structures Level 2 in C#", issuer: "Programming Advices", date: "SEP 2025" },
      { title: "C# Programming Level 2", issuer: "Programming Advices", date: "SEP 2025", href: "/certificates/csharp-programming-level-2.pdf" },
      { title: "Full Real Project", issuer: "Programming Advices", date: "JUL 2025", href: "/certificates/full-real-project.pdf" },
      {
        title: "C# & Database Connectivity",
        issuer: "Programming Advices",
        date: "FEB 2024",
        href: "/certificates/csharp-database-connectivity.pdf",
        thumbnail: "/certificates/thumbs/csharp-database-connectivity.jpg",
      },
      {
        title: "17 Database & SQL Projects - Practice",
        issuer: "Programming Advices",
        date: "OCT 2023",
        href: "/certificates/database-sql-projects.pdf",
        thumbnail: "/certificates/thumbs/database-sql-projects.jpg",
      },
      { title: "OOP as It Should Be in C#", issuer: "Programming Advices", date: "SEP 2023" },
      { title: "Database Level 1 - SQL Concepts and Practice", issuer: "Programming Advices", date: "AUG 2023", href: "/certificates/database-level-1.pdf" },
      { title: "C# Level 1", issuer: "Programming Advices", date: "JUL 2023" },
    ],
  },
  {
    title: "Frontend & developer tools",
    items: [
      { title: "CSS Foundations Deep Dive", issuer: "Programming Advices", date: "SEP 2025", href: "/certificates/css-foundations-deep-dive.pdf" },
      { title: "HTML - Deep Dive", issuer: "Programming Advices", date: "JUL 2025", href: "/certificates/html-deep-dive.pdf" },
      { title: "Build Responsive Website Using HTML5, CSS3, JavaScript and Bootstrap", issuer: "Udemy", date: "JAN 2021", href: "/certificates/responsive-web-html-css-js-bootstrap.pdf" },
      { title: "Git from Basics to Advanced", issuer: "Udemy", date: "DEC 2020", href: "/certificates/git-basics-advanced.pdf" },
    ],
  },
  {
    title: "Computer science foundations",
    items: [
      { title: "Foundations - Level 2", issuer: "Programming Advices", date: "JUN 2025" },
      { title: "Algorithms & Problem Solving - Level 5", issuer: "Programming Advices", date: "JUL 2023" },
      { title: "Data Structures - Level 1", issuer: "Programming Advices", date: "JUL 2023" },
      { title: "OOP as It Should Be - Applications", issuer: "Programming Advices", date: "JUN 2023" },
      { title: "OOP as It Should Be - Concepts", issuer: "Programming Advices", date: "JUN 2023" },
      { title: "Algorithms & Problem Solving - Level 4", issuer: "Programming Advices", date: "JUN 2023" },
      { title: "Algorithms & Problem Solving - Level 3", issuer: "Programming Advices", date: "MAY 2023" },
      { title: "Introduction to Programming Using C++ - Level 2", issuer: "Programming Advices" },
      { title: "Algorithms & Problem Solving - Level 2", issuer: "Programming Advices" },
      { title: "Algorithms & Problem Solving - Level 1 Solutions", issuer: "Programming Advices", date: "JUL 2023" },
      { title: "Introduction to Programming Using C++ - Level 1", issuer: "Programming Advices", date: "JUL 2023" },
      { title: "Algorithms & Problem Solving - Level 1", issuer: "Programming Advices", date: "JUL 2023" },
      { title: "Programming Foundations - Level 1", issuer: "Programming Advices", date: "JUL 2023" },
    ],
  },
];

export const selectedCredentials = credentialGroups
  .flatMap((group) => group.items)
  .filter((credential) => credential.thumbnail);
