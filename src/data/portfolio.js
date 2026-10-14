// src/data/portfolio.js — All portfolio content

export const hero = {
    name: 'Ikra Dayandra Deswan',
    techLine: 'Technical Writer · Web Developer · Laravel · React · MySQL',
    tagline: 'Clear documentation for web applications, from requirements to user guides.',
};

export const about = {
    text: `I'm a Technical Writer at Peruri Digital Security (PDS) with a Computer Science degree from Bina Nusantara University and hands-on web development experience in Laravel (PHP), React, and MySQL. I document web applications for PERURI, from requirements and functional specifications to technical documentation, UAT, and user guides, working between developers and business users.

I read application code and APIs to keep documentation accurate and consistent with the actual system. Before moving into technical writing, I worked as a Web Developer Intern at PERURI, which gave me a working understanding of application flow from database to user interface, and that now supports my documentation work.`,
};

export const currentFocus = [
    'Writing and maintaining BRD, FSD, TSD, and REST API documentation for PERURI web applications',
    'Preparing UAT scenarios, acceptance documents, and role-based user manuals',
    'Building reusable templates and guidelines for TSD, BRD, FSD, and UAT',
    'Keeping documentation aligned with the actual system through code, API, and database review',
];

export const valuePillars = [
    {
        id: 1,
        title: 'Bridge Between Teams',
        description:
            'I work between the development team and PERURI business and IT users, turning discussions and requirements into documents both sides can use.',
        icon: 'Users',
    },
    {
        id: 2,
        title: 'Documentation & Validation',
        description:
            'From BRD and FSD to UAT scenarios and user manuals, I keep documents clear, consistent, and ready for review.',
        icon: 'FileCheck',
    },
    {
        id: 3,
        title: 'Code-Aware Writing',
        description:
            'I review application code, API documentation, and database structure so the documentation matches how the system actually works.',
        icon: 'Code',
    },
];

export const experiences = [
    {
        id: 1,
        title: 'Technical Writer',
        company: 'Peruri Digital Security (PDS)',
        companyFull: 'Peruri Digital Security (PDS) — a subsidiary of Perum PERURI',
        status: 'Current',
        date: 'May 2026 – Present',
        location: 'Indonesia',
        description:
            'Documenting web applications used at PERURI, from requirements and functional specifications to technical documentation, UAT, and user guides, working between the development team and PERURI business and IT users.',
        responsibilities: [
            'Prepare and maintain requirement and functional documentation (BRD, FSD) and technical specifications (TSD, REST API) for web applications used at PERURI',
            'Keep documents aligned with the actual system by reviewing application code, API documentation, and database structure',
            'Write UAT scenarios and acceptance documents, including a 38-scenario UAT for an employee onboarding portal followed by 25 revised scenarios',
            'Produce user-facing documentation such as five role-based user manuals and an operational handover checklist',
            'Document project meetings, turning discussions and transcripts into structured minutes and requirement inputs',
            'Act as a link between the development team and PERURI business and IT users',
            'Build reusable templates and guidelines (TSD, BRD, FSD, UAT) to keep documents consistent across projects',
        ],
        technologies: ['BRD', 'FSD', 'TSD', 'REST API Documentation', 'UAT', 'User Manuals'],
    },
    {
        id: 2,
        title: 'Web Developer Intern',
        company: 'PERURI',
        companyFull: 'Perusahaan Umum Percetakan Uang Republik Indonesia',
        status: null,
        certificateFile: '/sertif-magenta-ikra.pdf',
        certificateLabel: 'View Magenta Certificate',
        date: 'July 2025 – May 2026',
        location: 'Jakarta Selatan, Indonesia',
        description:
            'Worked in the Internal Application Development Section under the IT Division, developing and maintaining internal web applications such as attendance dashboards, visitor logs, and monitoring tools using Laravel (PHP) and MySQL.',
        responsibilities: [
            'Built and maintained internal dashboards (attendance / lateness monitoring)',
            'Developed visitor log / guest book internal modules',
            'Built responsive interfaces with HTML, CSS (Bootstrap/Tailwind), and JavaScript, and frontend components in React',
            'Created and structured Change Request (CR) forms & workflows',
            'Implemented semantic search and explored RAG features for internal document search',
            'Implemented AI-assisted features (paraphrase / generate) for documentation/workflows',
            'Tested and validated features against functional requirements',
            'Handled troubleshooting requests from internal users',
            'Worked with technical and non-technical teams to turn operational needs into working features',
        ],
        technologies: ['Laravel (PHP)', 'MySQL', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'Git'],
    },
    {
        id: 3,
        title: 'Business Development & Social Media Specialist Intern',
        company: 'Ramuan Jkt',
        companyFull: 'Ramuan Jkt — Kampus Merdeka Program',
        status: null,
        certificateFile: '/ramuan-sertif.pdf',
        certificateLabel: 'View Certificate',
        date: 'August 2022 – February 2023',
        location: 'Jakarta, Indonesia',
        description:
            'Joined as part of the Kampus Merdeka independent study program, focusing on product innovation and digital marketing for modern herbal beverages.',
        responsibilities: [
            'Led product innovation initiatives to create modern herbal drink formulations',
            'Managed social media marketing campaigns across Instagram, TikTok, and e-commerce platforms',
            'Achieved 100 bottles sold in first week during BINUS Exhibition',
            'Top 20 Finalist at Wirausaha Merdeka BINUS Fair among 100+ participants',
            'Developed digital marketing strategies that increased brand visibility by 150%',
            'Collaborated with cross-functional teams for product launches and promotional events',
        ],
        technologies: ['Social Media Management', 'E-commerce Platforms', 'Digital Marketing'],
    },
    {
        id: 4,
        title: 'Project Development Intern',
        company: 'Kopi Langgeng',
        companyFull: 'Kopi Langgeng',
        status: null,
        date: 'February 2022 – August 2022',
        location: 'Jakarta, Indonesia',
        description:
            'Contributed to operational systems development and business process optimization for a coffee shop startup.',
        responsibilities: [
            'Built project framework using PHP and CSS for operational management',
            'Developed budget tracking and expense management system',
            'Implemented marketing initiatives to increase customer engagement',
            'Assisted in operational workflows and process documentation',
            'Created basic web interfaces for internal use',
        ],
        technologies: ['PHP', 'CSS', 'HTML', 'JavaScript'],
        portfolioLink: 'https://ikradayandra.github.io/LGNG-Coffee/',
        portfolioLabel: 'View Web Coffee Portfolio',
    },
];

export const projects = [
    {
        id: 1,
        title: 'Dashboard Keterlambatan',
        subtitle: 'Attendance & Lateness Monitoring',
        description:
            'Internal dashboard to monitor attendance and lateness trends across departments, improving visibility for HR and operations teams.',
        technologies: ['Laravel', 'MySQL', 'Chart.js', 'Bootstrap'],
        link: 'https://ikradayandra.github.io/dashboard-presensi-porto/',
        featured: true,
    },
    {
        id: 2,
        title: 'Buku Tamu',
        subtitle: 'Visitor Log System',
        description:
            'Streamlined visitor recording with searchable, structured logs for internal tracking. Includes data export and filtering features.',
        technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
        link: 'https://ikradayandra.github.io/buku-tamu/',
        featured: true,
    },
    {
        id: 3,
        title: 'CR Form & AI-Assisted Workflow',
        subtitle: 'Change Request Management',
        description:
            'Structured CR submission system with validation, documentation workflows, and early-stage semantic/RAG-assisted document search.',
        technologies: ['Laravel', 'MySQL', 'React', 'AI/RAG'],
        link: '#',
        featured: true,
    },
];

export const skills = [
    {
        category: 'Documentation',
        items: ['BRD', 'FSD', 'TSD', 'REST API Documentation', 'Meeting Minutes', 'Templates & Guidelines'],
    },
    {
        category: 'Validation & Handover',
        items: ['UAT Scenarios', 'Acceptance Documents', 'User Manuals', 'Handover Checklist'],
    },
    {
        category: 'Backend',
        items: ['Laravel (PHP)', 'PHP'],
    },
    {
        category: 'Frontend',
        items: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
        category: 'Database',
        items: ['MySQL'],
    },
    {
        category: 'Tools & Workflow',
        items: ['Git', 'VS Code', 'NPM', 'Composer'],
    },
];

export const education = {
    degree: 'Bachelor of Computer Science',
    school: 'BINUS University',
    date: 'August 2019 – October 2024',
    location: 'Jakarta, Indonesia',
    minor: 'Frontend Development & UI/UX',
    focusAreas: [
        'Full-stack web development',
        'UI design principles',
        'Database management systems',
    ],
    coursework: ['Web Programming', 'Database Systems'],
};

export const contact = {
    title: "Let's Work Together",
    text: "I'm always open to discussing technical writing and documentation work, web development projects, or collaboration opportunities.",
    footerNote: 'Currently open to full-time opportunities and freelance projects.',
    email: 'ikradayandra@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ikra-dayandra-deswan-5101a117a/',
    linkedinLabel: 'Ikra Dayandra Deswan',
    location: 'Jakarta Selatan, Indonesia',
};
