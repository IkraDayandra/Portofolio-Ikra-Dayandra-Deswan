import { motion } from 'framer-motion';
import { Users, FileCheck, Wrench } from 'lucide-react';
import { valuePillars } from '../data/portfolio';

const iconMap = { Users, FileCheck, Wrench };

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function ValuePillars() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        What I Bring
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        My Value Pillars
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {valuePillars.map((pillar, i) => {
                        const Icon = iconMap[pillar.icon];
                        return (
                            <motion.div
                                key={pillar.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                           hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-lg dark:hover:shadow-indigo-900/10
                           transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4
                                group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                                    {Icon && <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />}
                                </div>
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
