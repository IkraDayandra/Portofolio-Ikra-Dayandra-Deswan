import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { hero } from '../data/portfolio';

export default function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative"
        >
            {/* Subtle background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Availability badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
                >
                    {hero.name}
                </motion.h1>

                {/* Tech line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4"
                >
                    {hero.techLine}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto"
                >
                    {hero.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                >
                    <a
                        href="#contact"
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm
                       hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                    >
                        <Mail size={16} />
                        Get in touch
                    </a>
                    <a
                        href="/cv-ikra-dayandra-deswan.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm
                       hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400
                       active:scale-95 transition-all duration-200"
                    >
                        <Download size={16} />
                        Download CV
                    </a>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600"
                aria-hidden="true"
            >
                <span className="text-xs font-medium">Scroll</span>
                <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
        </section>
    );
}
