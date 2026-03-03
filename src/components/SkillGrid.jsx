import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function SkillGrid() {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Toolkit
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        Technical Skills
                    </h2>
                    <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-xl">
                        A comprehensive toolkit for building robust, user-friendly web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {skills.map((group, i) => (
                        <motion.div
                            key={group.category}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
