// file: Research.jsx
import React, {useState, useMemo, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {projects} from '../../data/portfolioData.js';
import ProjectCard from '../ui/ProjectCard';
import {ChevronDown, ChevronUp} from 'lucide-react';

// Constants for managing the "Show More" feature
const INITIAL_VISIBLE_COUNT = 6;
const INCREMENT_COUNT = 6;

const Research = ({sectionVariants}) => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    const sortedProjects = useMemo(() => {
        return [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, []);

    const filters = useMemo(() => {
        const uniqueCategories = new Set(sortedProjects.flatMap(p => p.category));
        const dynamicFilters = Array.from(uniqueCategories).map(cat => ({
            value: cat, label: cat.charAt(0).toUpperCase() + cat.slice(1),
        }));
        return [{value: 'all', label: 'All'}, ...dynamicFilters];
    }, [sortedProjects]);

    const filteredProjects = useMemo(() => (selectedFilter === 'all' ? sortedProjects : sortedProjects.filter(p => p.category.includes(selectedFilter))), [selectedFilter, sortedProjects]);

    useEffect(() => {
        setVisibleCount(INITIAL_VISIBLE_COUNT);
    }, [selectedFilter]);

    const projectsToShow = filteredProjects.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + INCREMENT_COUNT);
    };

    const handleShowLess = () => {
        setVisibleCount(INITIAL_VISIBLE_COUNT);
    };

    // This boolean now drives the button's text and icon
    const hasMoreProjects = visibleCount < filteredProjects.length;

    return (<motion.section
        id="research"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
    >
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-4 pb-1 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Research & Projects
            </h2>
            <p className="text-center text-slate-600 dark:text-gray-400 mb-12">
                A curated collection of my publications, repositories, and presentations.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {filters.map(filter => (<button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedFilter === filter.value ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-gray-700'}`}
                >
                    {filter.label}
                </button>))}
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {projectsToShow.map((project) => (<ProjectCard key={project.title} project={project}/>))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length > INITIAL_VISIBLE_COUNT && (<div className="mt-16 text-center">
                {/* --- THIS IS THE UPDATED BUTTON CODE --- */}
                <motion.button
                    onClick={hasMoreProjects ? handleShowMore : handleShowLess}
                    className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg overflow-hidden"
                    whileHover={{scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"}}
                    whileTap={{scale: 0.95}}
                >
                    {/* Sliding gradient for the hover effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                        initial={{x: "-100%"}}
                        whileHover={{x: "0%"}}
                        transition={{duration: 0.3}}
                    />
                    {/* Relative span to keep text on top of the animation */}
                    <span className="relative flex items-center gap-2">
                                {hasMoreProjects ? 'Show More' : 'Show Less'}
                        {hasMoreProjects ? <ChevronDown className="w-4 h-4"/> : <ChevronUp className="w-4 h-4"/>}
                            </span>
                </motion.button>
            </div>)}
        </div>
    </motion.section>);
};

export default Research;