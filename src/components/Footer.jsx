import { Linkedin, Mail } from 'lucide-react';
import { contact } from '../data/portfolio';

const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { icon: <Mail size={16} />, href: `mailto:${contact.email}`, label: 'Email' },
    { icon: <Linkedin size={16} />, href: contact.linkedin, label: 'LinkedIn' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="font-bold text-xl text-slate-900 dark:text-white"
                        >
                            Ikra<span className="text-indigo-600 dark:text-indigo-400">.</span>
                        </a>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 leading-relaxed">
                            Web Developer · Frontend Engineer<br />Jakarta Selatan, Indonesia
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                            Quick Links
                        </p>
                        <ul className="space-y-2">
                            {quickLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                            Connect
                        </p>
                        <div className="flex gap-2">
                            {socials.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center justify-center">
                    <p className="text-xs text-slate-400 dark:text-slate-600">
                        © {year} Ikra Dayandra Deswan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
