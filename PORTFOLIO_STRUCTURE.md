# Portfolio Website Structure - Ikra Dayandra Deswan

## Sitemap (Single Page Application)

```
Portfolio Website (/)
│
├── Navigation (Sticky)
│   ├── Home
│   ├── About
│   ├── Experience
│   ├── Projects
│   ├── Skills
│   ├── Education
│   └── Contact
│
├── Hero Section
│   ├── Name & Headline
│   ├── Profile Photo (optional)
│   ├── CTA: Download CV
│   └── CTA: Contact Me
│
├── About Section
│   ├── Professional Summary
│   ├── Highlights/Strengths Cards
│   │   ├── Bridge between users & systems
│   │   ├── Documentation & validation
│   │   └── Troubleshooting mindset
│   └── Current Focus
│
├── Experience Section (Timeline/Cards)
│   ├── PERURI - Web Developer Intern (Current)
│   ├── Ramuan Jkt - Business Development Intern
│   └── Kopi Langgeng - Project Development Intern
│
├── Projects Section (Portfolio Items)
│   ├── Attendance Monitoring Dashboard
│   ├── Visitor Log System
│   └── Internal Monitoring Tools
│
├── Skills Section (Grouped)
│   ├── Backend Development
│   ├── Frontend Development
│   ├── Database & Data
│   ├── Tools & Workflow
│   └── Support & Operations
│
├── Education Section
│   └── BINUS University - Computer Science
│
├── Contact Section
│   ├── Email
│   ├── LinkedIn
│   └── Location
│
└── Footer
    ├── Copyright
    └── Quick Links

```

## Section Order & Layout

1. **Hero** - Full viewport height, centered
2. **About** - 2-column layout (text + highlights cards)
3. **Experience** - Timeline or vertical cards with dates
4. **Projects** - 3-column grid (responsive to 1-column mobile)
5. **Skills** - 5-column grid with categories (responsive)
6. **Education** - Single card, centered
7. **Contact** - Centered with contact cards
8. **Footer** - Full-width, minimal

## Design Principles

- **Mobile-first**: Start from 320px width
- **Typography**: Clear hierarchy (h1: 2.5rem → 4rem, body: 1rem → 1.125rem)
- **Colors**: Corporate-tech palette (Blues, Grays, Accent Orange/Green)
- **Spacing**: Consistent padding system (4, 8, 16, 24, 32, 48, 64px)
- **Accessibility**: WCAG 2.1 AA, semantic HTML, ARIA labels
- **Performance**: Lazy loading, optimized images, minimal JS

## Responsive Breakpoints

- Mobile: 320px - 767px (1 column)
- Tablet: 768px - 1023px (2 columns)
- Desktop: 1024px+ (3-4 columns)
