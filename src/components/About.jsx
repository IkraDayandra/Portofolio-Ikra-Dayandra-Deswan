import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { about, currentFocus } from '../data/portfolio';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        About
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* About text */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        {about.text.split('\n\n').map((para, i) => (
                            <p
                                key={i}
                                className="text-slate-600 dark:text-slate-400 leading-relaxed"
                            >
                                {para}
                            </p>
                        ))}
                    </motion.div>

                    {/* Current Focus */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Current Focus
                            </h3>
                            <ul className="space-y-3">
                                {currentFocus.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle
                                            size={16}
                                            className="mt-0.5 text-indigo-500 dark:text-indigo-400 flex-shrink-0"
                                        />
                                        <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
