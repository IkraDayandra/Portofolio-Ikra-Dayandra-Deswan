// src/data/portfolio.js — All portfolio content

export const hero = {
    name: 'Ikra Dayandra Deswan',
    techLine: 'Web Developer · Frontend Developer · React · Laravel · MySQL',
    tagline: 'Building reliable systems, one commit at a time.',
};

export const about = {
    text: `I'm a Computer Science graduate from BINUS University with a strong foundation in web development and technical support. Currently working as a Web Developer Intern at PERURI (Perusahaan Umum Percetakan Uang Republik Indonesia), where I develop and maintain internal applications that serve hundreds of users daily.

My approach combines technical proficiency with a user-focused mindset. I believe great software isn't just about clean code — it's about solving real problems and making systems accessible to everyone.

With experience in full-stack development using Laravel and MySQL, I'm also expanding my skill set with React to build more dynamic, modular interfaces. Beyond coding, I enjoy troubleshooting, writing clear documentation, and ensuring smooth user experiences.`,
};

export const currentFocus = [
    'Building scalable web applications with React, Laravel, and MySQL',
    'Developing reusable React components for modern UIs',
    'Improving system monitoring and internal tooling',
    'Growing expertise in endpoint management and technical support',
];

export const valuePillars = [
    {
        id: 1,
        title: 'Bridge Between Users & Systems',
        description:
            'I translate complex technical systems into accessible, intuitive solutions that real people can use every day.',
        icon: 'Users',
    },
    {
        id: 2,
        title: 'Documentation & Validation',
        description:
            'Clear documentation and thorough validation are non-negotiables — they keep teams aligned and systems reliable.',
        icon: 'FileCheck',
    },
    {
        id: 3,
        title: 'Troubleshooting Mindset',
        description:
            'When things break, I dig in methodically. Finding root causes and shipping fixes cleanly is part of the job.',
        icon: 'Wrench',
    },
];

export const experiences = [
    {
        id: 1,
        title: 'Web Developer Intern',
        company: 'PERURI',
        companyFull: 'Perusahaan Umum Percetakan Uang Republik Indonesia',
        status: 'Current',
        certificateFile: '/sertif-magenta-ikra.pdf',
        certificateLabel: 'View Magenta Certificate',
        date: 'July 2025 – Present',
        location: 'Jakarta Selatan, Indonesia',
        description:
            'Working in the Internal Application Development Section under the IT Division, developing and maintaining critical internal systems that streamline operations across the organization.',
        responsibilities: [
            'Built and maintained internal dashboards (attendance / lateness monitoring)',
            'Developed visitor log / guest book internal modules',
            'Created and structured Change Request (CR) forms & workflows',
            'Implemented semantic search and explored RAG features for internal document search',
            'Implemented AI-assisted features (paraphrase / generate) for documentation/workflows',
            'Conducted feature validation, comprehensive testing, and maintained technical documentation',
            'Provided technical support and troubleshooting for internal users across multiple departments',
            'Managed user access permissions and monitored application performance',
        ],
        technologies: ['Laravel (PHP)', 'MySQL', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'Git'],
    },
    {
        id: 2,
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
        id: 3,
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
        link: '#',
        featured: true,
    },
    {
        id: 2,
        title: 'Buku Tamu',
        subtitle: 'Visitor Log System',
        description:
            'Streamlined visitor recording with searchable, structured logs for internal tracking. Includes data export and filtering features.',
        technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
        link: '#',
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
        category: 'Backend',
        items: ['Laravel (PHP)'],
    },
    {
        category: 'Frontend',
        items: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
        category: 'Programming',
        items: ['PHP', 'JavaScript'],
    },
    {
        category: 'Database',
        items: ['MySQL'],
    },
    {
        category: 'Tools & Workflow',
        items: ['Git', 'VS Code', 'NPM', 'Composer'],
    },
    {
        category: 'Support & Operations',
        items: ['Technical Support', 'Documentation', 'System Monitoring', 'Testing & QA'],
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
    text: "I'm always open to discussing web development projects, technical support roles, or collaboration opportunities.",
    footerNote: 'Currently open to full-time opportunities and freelance projects.',
    email: 'ikradayandra@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ikra-dayandra-deswan-5101a117a/',
    linkedinLabel: 'Ikra Dayandra Deswan',
    location: 'Jakarta Selatan, Indonesia',
};
