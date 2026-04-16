import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, FileText, ExternalLink } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function ExperienceCard({ exp, index }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-10 last:pb-0"
        >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400 border-2 border-white dark:border-slate-900 shadow" />

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                      hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                            {exp.status && (
                                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                    {exp.status}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                            <Briefcase size={13} className="text-indigo-500 dark:text-indigo-400" />
                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                    </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{exp.description}</p>

                {/* Expandable responsibilities */}
                <button
                    onClick={() => setExpanded((v) => !v)}
                    className="mt-4 flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                    aria-expanded={expanded}
                >
                    {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    {expanded ? 'Show less' : 'Show responsibilities'}
                </button>

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <ul className="mt-3 space-y-1.5 pl-1">
                                {exp.responsibilities.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                                        {r}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Certificate button — only shown if experience has a certificate */}
                            {exp.certificateFile && (
                                <div className="mt-4">
                                    <a
                                        href={`${import.meta.env.BASE_URL}${exp.certificateFile.replace(/^\//, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                               border border-indigo-200 dark:border-indigo-700
                               text-indigo-600 dark:text-indigo-400
                               hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                               transition-all duration-200"
                                    >
                                        <FileText size={13} />
                                        {exp.certificateLabel || 'View Certificate'}
                                    </a>
                                </div>
                            )}

                            {/* Portfolio Link button */}
                            {exp.portfolioLink && (
                                <div className="mt-4">
                                    <a
                                        href={exp.portfolioLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                               border border-indigo-200 dark:border-indigo-700
                               text-indigo-600 dark:text-indigo-400
                               hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                               transition-all duration-200"
                                    >
                                        <ExternalLink size={13} />
                                        {exp.portfolioLabel || 'View Portfolio'}
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
