// file: src/components/ui/ProjectCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const formatCategory = (category) => {
        if (Array.isArray(category)) {
            return category
                .map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))
                .join(', ');
        }
        return category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
    };

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            layout
            className="group relative block p-[1.5px] rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -6 }}
        >
            {/* Gradient border that appears on hover */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            {/* Main card content */}
            <div className="relative bg-white dark:bg-gray-800 rounded-[15px] overflow-hidden border border-slate-200 dark:border-gray-700 h-full shadow-sm dark:shadow-none">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    {project.category && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-xs tracking-wider text-slate-800 dark:text-gray-200">
                            {formatCategory(project.category)}
                        </span>
                    )}
                </div>

                <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                        <ExternalLink
                            size={16}
                            className="inline ml-2 text-slate-500 dark:text-gray-400 group-hover:text-cyan-400 transition-colors"
                        />
                    </h3>

                    {project.venue && (
                        <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">
                            {project.venue}
                        </p>
                    )}

                    {project.description && (
                        <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">
                            {project.description}
                        </p>
                    )}

                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 bg-slate-100 dark:bg-gray-700 rounded-full text-slate-600 dark:text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.a>
    );
};

export default ProjectCard;