import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Education() {
    return (
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Academic
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        Education
                    </h2>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                    <div className="flex items-start gap-5 flex-wrap">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={24} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{education.degree}</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">{education.school}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 dark:text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {education.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin size={12} />
                                    {education.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 dark:border-slate-700 pt-6">
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                                Focus Areas
                            </h4>
                            <ul className="space-y-2">
                                {education.focusAreas.map((area) => (
                                    <li key={area} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="w-1 h-1 rounded-full bg-indigo-400" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                                Relevant Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {education.coursework.map((course) => (
                                    <span
                                        key={course}
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600"
                                    >
                                        <BookOpen size={11} className="text-indigo-500" />
                                        {course}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4">
                                <span className="text-xs text-slate-400 dark:text-slate-500">Minor: </span>
                                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{education.minor}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
