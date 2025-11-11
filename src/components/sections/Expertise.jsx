// file: src/components/sections/Expertise.jsx
import React from 'react';
import {motion} from 'framer-motion';
import {skills} from '../../data/portfolioData.js';

const LevelMeter = ({level, lightColors, darkColors}) => {
    const levelMap = ['Novice', 'Competent', 'Proficient', 'Advanced', 'Expert'];

    return (
        <div className="relative flex-shrink-0 group/meter">
            {/* Tooltip */}
            <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover/meter:opacity-100 transition-opacity duration-300 pointer-events-none">
                {levelMap[level - 1]}
                <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"/>
            </div>

            {/* Level bars */}
            <div className="flex items-center gap-1.5">
                {Array.from({length: 5}).map((_, i) => (
                    <div
                        key={i}
                        className={`h-5 w-2 rounded-full relative overflow-hidden transition-all duration-300 ${
                            i < level
                                ? `${lightColors.bg} dark:${darkColors.bg}`
                                : 'bg-slate-200 dark:bg-gray-700'
                        }`}
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${lightColors.gradient} dark:${darkColors.darkGradient || darkColors.gradient} opacity-0 group-hover/meter:opacity-100 transition-opacity duration-300`}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Expertise = ({sectionVariants}) => {
    return (
        <motion.section
            id="expertise"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
        >
            <div className="max-w-5xl mx-auto z-10 relative">
                {/* Section Header */}
                <h2 className="text-5xl font-bold mb-4 pb-1 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    My Toolkit
                </h2>
                <p className="text-center text-gray-400 mb-16">
                    A collection of my core skills and technologies.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, data], idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{y: -6}}
                            transition={{type: "spring", stiffness: 400, damping: 25}}
                            className="relative p-[1.5px] rounded-2xl group"
                        >
                            {/* Gradient border on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${data.colors.light.gradient} dark:${data.colors.dark.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>

                            {/* Card content */}
                            <div
                                className="relative bg-white dark:bg-gray-800 rounded-[15px] p-6 h-full shadow-sm dark:shadow-none">
                                <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white text-center">
                                    {category}
                                </h3>

                                {/* Skills list */}
                                <div className="space-y-4">
                                    {data.items.map((skill, i) => (
                                        <div key={i} className="flex justify-between items-center gap-4">
                                            <span className="font-medium text-slate-700 dark:text-gray-400">
                                                {skill.name}
                                            </span>
                                            <LevelMeter
                                                level={skill.level}
                                                lightColors={data.colors.light}
                                                darkColors={data.colors.dark}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Expertise;