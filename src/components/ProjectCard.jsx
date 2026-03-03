import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-lg dark:hover:shadow-indigo-900/10
                 transition-all duration-300 flex flex-col"
        >
            <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-0.5">{project.subtitle}</p>
                </div>
                {project.link && project.link !== '#' ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title}`}
                        className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400
                       hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-200 flex-shrink-0"
                    >
                        <ExternalLink size={16} />
                    </a>
                ) : (
                    <span
                        className="p-2 rounded-xl text-slate-200 dark:text-slate-700 flex-shrink-0 cursor-not-allowed"
                        title="Link coming soon"
                        aria-label="Link coming soon"
                    >
                        <ExternalLink size={16} />
                    </span>
                )}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
