/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Certification, SkillCategory, Achievement } from "./types";

// Profile Data (Extracted from Portfolio)
export const profileData = {
  name: "Youssef M.",
  title: ".Net Developer",
  birthday: "11 December 2001",
  age: 23,
  degree: "CS Bachelor's",
  email: "youssef.mohamed.net.eg@gmail.com",
  phone: "+20 1067952340",
  city: "Suez, Egypt",
  address: "Egypt, Suez, National Unity Street",
  website: "joegithubpro.github.io/Profile",
  freelanceStatus: "Available",
  bio: "I am .Net Developer that specialized at back end of applications whether web application or Desktop or Mobile.",
  services: [
    "Web Sites",
    "Desktop App",
    "Web App",
    "C# Features",
    "Technical support"
  ],
  aspirations: [
    {
      title: ".Net Core",
      priority: "High priority",
      description: ".NET Core is a free, open-source, cross-platform framework for building modern, scalable, and high-performance applications, including web applications, APIs, and microservices."
    },
    {
      title: "Software Architectures",
      priority: "Medium Priority",
      description: "I wish to learn more about the back-end side of software architecture, especially about monolithic architecture, microservices architecture and serverless architecture."
    },
    {
      title: "Angular Framework",
      priority: "Less priority",
      description: "Angular is a front-end framework for building dynamic web applications using TypeScript. Learning Angular can be beneficial for backend developers due to its large community, scalability, and adherence to consistent best practices."
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "cdms-custody",
    title: "CDMS - Custody Management Platform",
    category: "Full Stack",
    role: "Lead Backend Developer",
    period: "Jul 2024 – Aug 2024",
    description: "An enterprise web system built for Suez Canal University to supervise high-value custody assets with automated audit trails, multi-theme layouts, and custom email notification dispatchers.",
    problemSolved: "Optimized critical bottleneck database queries across thousands of asset records under peak university audit periods while guaranteeing complete multi-tenant transaction isolation.",
    architectureChoices: [
      "Multi-Tenant architecture reducing database schema code redundancy by 40%",
      "Entity Framework Core query optimization via lazy vs eager evaluation testing",
      "Rigid role-based access controller separating student lockers and university administrators"
    ],
    keyFeatures: [
      "25% optimization in query speed through targeted LINQ indexers & custom projection queries",
      "Automated e-mail notifications dispatch system triggered instantaneously on custody asset transfer",
      "Robust department-specific multi-tenancy guaranteeing strict operational boundaries",
      "Awarded 1st place in the 5th Student Research Conference at Suez Canal University"
    ],
    technologies: ["C#", ".NET Core 8.0 MVC", "EF Core", "SQL Server", "LINQ", "Multi-Tenancy", "HTML5", "CSS3"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Query Speed Efficiency", value: "+25% Improvement" },
      { label: "Codebase Reuse", value: "40% Redundancy Cut" },
      { label: "Accolade Received", value: "1st Place Award" }
    ],
    featured: true
  },
  {
    id: "safesystem-pos",
    title: "CafeSystem POS Desktop Engine",
    category: "Desktop App",
    role: "Lead Backend & UI Developer",
    period: "Feb 2026 – May 2026",
    description: "A comprehensive café point-of-sale and backend administration system optimized for rapid high-frequency desktop checkout operations.",
    problemSolved: "Created a transaction engine that handles complex localized items, weight-scale parsing (fractional items), and multi-tier loyalty ledgers with zero delay.",
    architectureChoices: [
      "WinForms utilizing modern .NET 10 core runtime for high rendering performance",
      "Code-First EF Core architecture supporting streamlined offline-first tables",
      "Role-based desktop screen access preventing unauthorized price modifies"
    ],
    keyFeatures: [
      "Arabic RTL dark-themed checkout overlay designed for immediate tactile response",
      "Fractional item weight-scale computations (e.g., selling food quantities by decimal weights)",
      "Suspended/hold order queues with state restore, allowing attendants to switch customers mid-queue",
      "Dynamic nested recursive categories supporting high-density menus",
      "Custom loyalty rewards cards system and automatic discount ledgering",
      "Inventory alerts system checking stock depletion thresholds in real-time"
    ],
    technologies: ["C#", ".NET 10", "WinForms", "EF Core", "SQL Server", "ASP.NET Core Identity"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Checkout Response", value: "Sub-10ms UI latency" },
      { label: "Database Engine", value: "SQL Server LocalDB Optimized" },
      { label: "Framework Node", value: ".NET 10 modern runtime" }
    ],
    featured: true
  },
  {
    id: "smart-clinic-api",
    title: "Smart Clinic Management Web API",
    category: "Web API",
    role: "Backend Software Engineer",
    period: "Feb 2026 – May 2026",
    description: "A clinic management REST API featuring stateful appointment scheduling, comprehensive patient medical histories, and robust role-based access control.",
    problemSolved: "Protected sensitive clinical patient records while automating complex appointment conflicts and dynamic booking structures.",
    architectureChoices: [
      "Domain-Driven Design (DDD) principles separating Core Domain, Infrastructure, and Presentation",
      "Repository & Unit of Work pattern preventing memory database synchronization issues",
      "JWT Bearer authentication architecture utilizing high-security cryptographic keys"
    ],
    keyFeatures: [
      "Granular role-based access controls (RBAC) separating Doctors, Staff, and Patients",
      "Dynamic scheduler eliminating double-booking issues",
      "Comprehensive encrypted patient records log and history modifications tracker",
      "JWT Token refresh handling for persistent and secure sessions"
    ],
    technologies: ["C#", ".NET 10", "ASP.NET Core Web API", "JWT Auth", "EF Core", "SQL Server", "LINQ"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Session Security", value: "JWT Keys & Refresh" },
      { label: "Architecture Core", value: "Repository Pattern" },
      { label: "Engine Platform", value: "ASP.NET Web API 10" }
    ],
    featured: true
  },
  {
    id: "daark-realestate",
    title: "Daark Real Estate API Engine",
    category: "Web API",
    role: "Freelance Backend Developer",
    period: "Feb 2024 – May 2024",
    description: "A high-performance backend real estate portal managing properties, listings, and agent communications.",
    problemSolved: "Eliminated tightly-coupled business domains and database schemas using custom Object DTO mappers and clean database migrations.",
    architectureChoices: [
      "Clean separation of concerns with AutoMapper DTO mappings for database/presentation layers",
      "Code-First Entity Framework Core pipeline for migration stability",
      "Repository architectural pattern"
    ],
    keyFeatures: [
      "JWT Bearer identity authentication and profile dashboards",
      "Complex filtering queries on location, property parameters, and pricing tiers",
      "Automated image asset metadata linking with lazy-loaded entities"
    ],
    technologies: ["C#", ".NET Web API Core 7.0", "EF Core", "AutoMapper", "SQL Server", "DTOs"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Mapping Latency", value: "Auto-Compiled profile mapping" },
      { label: "Schema Control", value: "Robust DB Migrations" }
    ],
    featured: false
  },
  {
    id: "task-manager-mvc",
    title: "Collaborative Academic Task System",
    category: "Full Stack",
    role: "Contract Software Engineer",
    period: "Apr 2024 – May 2024",
    description: "A collaborative student-teacher portal built to track coursework submissions, file delivery pipelines, and grades.",
    problemSolved: "Subdued assignment submission bottleneck periods using smart upload queues while ensuring faculty only can modify graded records.",
    architectureChoices: [
      "Classic MVC structure paired with SQL Server transactions",
      "Filter pipelines guarding controller access based on student/teacher role claims"
    ],
    keyFeatures: [
      "Instant submission tracking state machine with due date auto-locking locks",
      "Teacher review dashboards allowing inline comments and graded entries",
      "Strict JWT session validation ensuring persistent account isolation"
    ],
    technologies: ["C#", ".NET 8 MVC", "EF Core", "SQL Server", "JWT Auth", "HTML5", "TailwindCSS"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Access Control", value: "Role claim-based filters" },
      { label: "DB Isolation", value: "Concurrent SQL Transactions" }
    ],
    featured: false
  },
  {
    id: "cryptography-tool",
    title: "Secura - Cryptography Educational Platform",
    category: "System Utility",
    role: "Lead Software Developer",
    period: "Apr 2024 – May 2024",
    description: "An educational workstation designed to interactively demonstrate cryptography concepts to computer science undergraduates.",
    problemSolved: "Simplified abstract theoretical block shifts and modular math into real-time step-by-step logic flows for computer science students.",
    architectureChoices: [
      "Robust stateful WinForms application featuring double-buffered UI frames",
      "Highly optimized modular mathematics engine processing heavy cipher tables instantly"
    ],
    keyFeatures: [
      "Step-by-step visual calculations tracking Caesar and Vigenère alphabet shifts",
      "Custom Vernam random-generator key setup supporting real-time manual entry",
      "Inline interactive developer logs documenting encryption clock cycles"
    ],
    technologies: ["C#", "WinForms", ".NET Framework 4.8", "Algebraic Engineering"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Processing Latency", value: "<1µs per cipher run" },
      { label: "Algorithms", value: "Vigenère, Vernam, Caesar" }
    ],
    featured: false
  },
  {
    id: "ecommerce-webapi",
    title: "Zephyr RESTful E-Commerce Engine",
    category: "Web API",
    role: "Backend Architect",
    period: "Feb 2023 – Mar 2023",
    description: "A highly-structured API backend built following clean architecture standards to support multi-product e-commerce nodes, inventory, and baskets.",
    problemSolved: "Engineered database transactional isolation for baskets and checkout pipelines to prevent product over-allocation.",
    architectureChoices: [
      "Repository Architectural Pattern decoupling database handlers from the core API engine",
      "Clean Web API structure utilizing comprehensive custom error filters",
      "AutoMapper-powered payload schemas protecting core models"
    ],
    keyFeatures: [
      "Robust pagination, searching, and sorting filtering queries built direct into EF core",
      "Secure JWT user roles managing catalog modifications and stock entries",
      "Transactional order submission with proper database lock guards"
    ],
    technologies: ["C#", ".NET Web API Core 7.0", "EF Core", "SQL Server", "AutoMapper", "Repository Pattern"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Database Isolation", value: "SQL Transaction Rollbacks" },
      { label: "Product Filtering", value: "Dynamic deferred-execution LINQ" }
    ],
    featured: false
  },
  {
    id: "postgrad-management",
    title: "Postgraduate Academic Administration API",
    category: "Web API",
    role: "Backend Developer",
    period: "Jan 2023 – Feb 2023",
    description: "An API platform to automate thesis registration, administrative workflows, and supervisor scheduling for postgraduate colleges.",
    problemSolved: "Replaced paperwork-heavy manual advisor registration by automating supervisor capacity counting algorithms.",
    architectureChoices: [
      "Relational database layout with index-optimized advisor tables in SQL Server",
      "EF Core DB-First approach mapped through high-level LINQ queries"
    ],
    keyFeatures: [
      "Active workload tracker capping advisor thesis assignments automatically to prevent teacher burnout",
      "Dynamic administrative status progression workflows triggers",
      "Thesis publication archive supporting nested string searches"
    ],
    technologies: ["C#", "ASP.NET Web API Core", "SQL Server", "EF Core", "LINQ"],
    githubUrl: "https://github.com/JoeGitHubPro",
    metrics: [
      { label: "Administrative Speed", value: "-80% paper dependency" },
      { label: "Database Search", value: "Index-Engineered sub-5ms queries" }
    ],
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    id: "military-records",
    role: "Software Developer",
    employer: "Military Records Department (Egyptian Armed Forces)",
    location: "Egypt",
    period: "Sep 2025 – Sep 2026",
    description: [
      "Designed and maintained enterprise-grade internal management systems utilizing .NET Framework 4.8, ADO.NET, and Oracle Database serving high-volume daily operations across the records department.",
      "Handled intensive data-processing tasks and high-throughput SQL transactions, gaining extensive practical experience in big data query optimization, storage optimization, and database performance tuning.",
      "Configured, compiled, and deployed enterprise applications on host IIS (Internet Information Services) servers, establishing 99.9% uptime guidelines and server protection metrics.",
      "Worked and integrated in a highly disciplined institutional environment, enforcing zero-trust data integrity, database safety standards, and rigorous security documentation guidelines."
    ],
    keyFocus: ["High-Volume Operations", "Enterprise-Grade Safety", "Query Optimization", "IIS Deployments"],
    technologies: [".NET Framework 4.8", "ADO.NET", "Oracle Database", "IIS Server", "Windows Server", "SQL Tuning"]
  },
  {
    id: "freelance-developer",
    role: "Backend Developer (Freelance Projects)",
    employer: "Self-Employed / Remote Contracts",
    location: "Remote",
    period: "Feb 2026 – May 2026",
    description: [
      "Engineered CafeSystem POS Desktop application with Arabic RTL dark designs, fractional sales, loyalty cards, and suspended states using .NET 10, Windows Forms, SQL Server, and EF Core.",
      "Created the Smart Clinic API, a comprehensive health scheduler with patient history indexing, multi-tenant databases, and custom RBAC permissions guardrails.",
      "Collaborated direct with business stakeholders to convert target functional criteria into strict, scalable software models conforming to SOLID and Clean Architecture principles."
    ],
    keyFocus: ["Client Consultations", "SOLID Execution", "User-First Backends", "Tactile System Design"],
    technologies: ["C#", ".NET 10", "WinForms", "ASP.NET Core Web API", "SQL Server", "JWT Auth", "EF Core"]
  },
  {
    id: "cdms-developer",
    role: "Backend Lead — CDMS Project",
    employer: "Suez Canal University",
    location: "Ismailia, Egypt",
    period: "Jul 2024 – Aug 2024",
    description: [
      "Spearheaded Custody Management System (CDMS) development, organizing asset ledgers, department access claims, and custom email notification templates.",
      "Boosted data retrieval indexing speed by 25% through meticulous SQL non-vocal optimizations, query materialization, and LINQ execution plans optimization.",
      "Introduced flexible multi-tenant patterns that reduced core backend schema redundancy by 40%, optimizing cross-department structures.",
      "Awarded 1st Place at the Fifth Student Research Conference based on architectural scalability, design system standards, and direct operational efficiency."
    ],
    keyFocus: ["Multi-Tenancy", "Query Performance Boosting", "Team Leadership", "Research Award Winning"],
    technologies: [".NET Core 8.0 MVC", "EF Core", "LINQ Projectors", "SQL Server", "Multi-Tenant Architecture", "Bootstrap"]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "iti-net",
    title: ".NET Web Development",
    issuer: "Information Technology Institute (ITI)",
    date: "2025",
    badgeAccent: "indigo",
    skillsAcquired: ["Enterprise .NET Arch", "Advanced C#", "ASP.NET Core MVC & Web APIs", "Entity Framework Core", "SQL Server Administration", "Frontend Integration", "SOLID & Clean Architecture", "Design Patterns", "Team Collaboration"]
  },
  {
    id: "cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University / edX",
    date: "2024",
    credentialUrl: "https://cs50.harvard.edu/x/",
    badgeAccent: "rose",
    skillsAcquired: ["Algorithms & Data Structures", "C Programming", "SQL Database Schemas", "Assembly & Memory management", "Computational Complexity (Big O Notation)", "Core Computer Science Fundamentals"]
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    badgeAccent: "amber",
    skillsAcquired: ["Amazon EC2 & Elastic Beanstalk", "AWS RDS & DynamoDB", "Cloud Security (IAM Roles)", "Serverless Architecture (AWS Lambda)", "AWS S3 Cloud Buckets", "Global Infrastructure & Well-Architected Framework"]
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    description: "Core programming and syntax engines",
    iconName: "Code2",
    skills: [
      { name: "C#", level: 98, info: "Async/Await, Linq, Reflection, Memory optimization, .NET 10" },
      { name: "SQL", level: 90, info: "Oracle SQL, T-SQL, Stored Procedures, Explain Plans, Indexing" },
      { name: "C++", level: 70, info: "Pointers, OOP fundamentals, memory allocation, algorithms" },
      { name: "HTML5", level: 75, info: "Semantic markup, Flexbox, Grid, Custom Properties, Responsive Styling" },
      { name: "CSS3", level: 40, info: "Flexbox, Grid, Custom Properties, Responsive Styling" },
      { name: "JavaScript", level: 30, info: "DOM manipulation, ES6+, async programming" },
      { name: "JAVA", level: 55, info: "OOP principles, basic syntax, data structures" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Web API",
    description: "Web APIs, MVC platforms, and identity management",
    iconName: "Cpu",
    skills: [
      { name: "ASP.NET Core Web API", level: 95, info: "REST compliance, middleware, custom model binding, DTO parsing" },
      { name: "ASP.NET Core MVC", level: 90, info: "Razor layout, multi-theme layouts, session management" },
      { name: "JWT Authentication", level: 95, info: "RS256 asymmetric keys, Refresh tokens, custom role claims, authorization policies" },
      { name: "WebSockets (SignalR)", level: 80, info: "Real-time client hub broadcast, multi-user sync, remote procedure calls" }
    ]
  },
  {
    id: "databases",
    name: "Databases & ORM",
    description: "Relational storage systems and object-relational mapping",
    iconName: "Database",
    skills: [
      { name: "Entity Framework Core", level: 95, info: "Code-First, Migrations, Fluent API mapping, lazy/eager loading, query filters" },
      { name: "SQL Server", level: 90, info: "Relational modeling, transaction rollbacks, index profiling, trigger events" },
      { name: "Oracle Database", level: 85, info: "Enterprise-scale tables, complex JOIN queries, ADO.NET connection pools" },
      { name: "ADO.NET", level: 88, info: "Command execution, Datasets, DataReaders, low-level high-performance queries" }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Design",
    description: "Underpinning structures and clean structural principles",
    iconName: "Layers",
    skills: [
      { name: "Clean Architecture", level: 92, info: "Domain encapsulation, Application layers, dependency inversion" },
      { name: "Domain-Driven Design (DDD)", level: 88, info: "Bounded contexts, aggregates, entities, value objects, domain events" },
      { name: "SOLID Principles", level: 95, info: "Single responsibility, open-closed, interface segregation, DI" },
      { name: "Repository & Unit of Work", level: 92, info: "Transaction isolation, structured querying repositories, decoupling" }
    ]
  },
  {
    id: "servers",
    name: "Servers & Tools",
    description: "Deployment, hosting, and engineering workspace applications",
    iconName: "Server",
    skills: [
      { name: "IIS (Internet Info Services)", level: 90, info: "Application pool recycling, bindings, logging configurations, SSL setup" },
      { name: "Git & GitHub", level: 92, info: "Branching strategies, conflict resolution, GitHub actions pipelines" },
      { name: "Windows Server", level: 85, info: "User administration, active directories, service configurations" },
      { name: "Unit & Integration Testing", level: 88, info: "xUnit, FluentAssertions, mocking DB contexts using in-memory databases" }
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "conference-1st",
    title: "1st Place – Academic Excellence Award",
    subtitle: "Fifth Student Research Conference, Suez Canal University",
    date: "May 2023",
    description: "Awarded top honor across university technical submissions for designing and presenting the Custody Management System (CDMS) backend. Commended for query acceleration techniques, department transaction isolation, and secure multi-tenant architecture."
  },
  {
    id: "conference-3rd",
    title: "3rd Place – Research Innovation Award",
    subtitle: "Sixth Student Research Conference, Suez Canal University",
    date: "May 2023",
    description: "Recognized by the Faculty of Science panel for compiling a secure and accessible cryptography simulator layout demonstrating algorithmic patterns (Vigenère and Vernam ciphers) visually to undergraduates."
  },
  {
    id: "academic-degree",
    title: "Bachelor of Computer Science – Graduated 'Good'",
    subtitle: "Suez Canal University, Ismailia",
    date: "Graduated Jan 2025",
    description: "Rigorous focus on software engineering, complexity analysis, database management systems, network engineering, and object-oriented algorithms."
  }
];