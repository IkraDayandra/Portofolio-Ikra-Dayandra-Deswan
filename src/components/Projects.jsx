import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                        Featured Projects
                    </h2>
                    <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-xl">
                        Internal applications built at PERURI, serving hundreds of users across the organization.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
