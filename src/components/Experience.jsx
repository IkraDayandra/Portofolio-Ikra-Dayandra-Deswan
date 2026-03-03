import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import ExperienceCard from './ExperienceCard';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
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
                        Career
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        Experience
                    </h2>
                </motion.div>

                <div>
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={exp.id} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
