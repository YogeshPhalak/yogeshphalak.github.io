// file: ProjectCard.jsx
import React from 'react';
import {motion} from 'framer-motion';
import {ExternalLink, Award, Users} from 'lucide-react';

const ProjectCard = ({project}) => {
    // Helper function to format the categories nicely
    const formatCategories = (categories) => {
        if (Array.isArray(categories)) {
            // Capitalize each category and join with a comma and space
            return categories
                .map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))
                .join(', ');
        }
        // Fallback for single-string categories
        return categories.charAt(0).toUpperCase() + categories.slice(1);
    };

    return (
        <motion.div
            layout
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.8}}
            transition={{duration: 0.3}}
            className="group relative"
        >
            <div
                className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            ></div>
            <div
                className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-700 group-hover:border-cyan-400/50 transition-colors duration-300 shadow-sm"
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <span
                        className="absolute top-3 left-3 px-3 py-1 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-xs tracking-wider text-slate-800 dark:text-gray-200"
                    >
                        {/* THIS IS THE FIX: Format the array into a clean string */}
                        {formatCategories(project.category)}
                    </span>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-slate-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors duration-300"
                    >
                        <ExternalLink size={16}/>
                    </a>
                </div>
                <div className="p-6">
                    <h3
                        className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-cyan-400 transition-colors"
                    >
                        {project.title}
                    </h3>

                    {project.venue && <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">{project.venue}</p>}
                    {project.description &&
                        <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">{project.description}</p>}

                    {project.stars && <div className="flex items-center gap-2 text-sm text-yellow-500 mb-3">...</div>}
                    {project.impact && <div className="flex items-center gap-2 text-sm text-green-500 mb-3">...</div>}
                    {project.audience &&
                        <div className="flex items-center gap-2 text-sm text-purple-500 mb-3">...</div>}

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
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;