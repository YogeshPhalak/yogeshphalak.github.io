// file: src/components/sections/Creative.jsx

import React from 'react';
import {motion} from 'framer-motion';
import {creative} from '../../data/portfolioData.js';
import {Link} from 'react-router-dom'; // <-- 1. IMPORT Link

const Creative = ({sectionVariants}) => {
    return (<motion.section
            id="creative"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
        >
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Beyond Research
                </h2>
                <p
                    className="text-center text-slate-600 dark:text-gray-400 mb-12"
                >
                    Creative pursuits and personal interests that inspire my work.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {creative.map((item, idx) => {
                        // The content of the tile, which we'll reuse
                        const tileContent = (<div className="relative h-80 rounded-[15px] overflow-hidden shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.type}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <span
                                        className="text-sm px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full"
                                    >
                                        {item.count}+ Works
                                    </span>
                                    <h3 className="text-2xl font-bold mt-2">{item.type}</h3>
                                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                                </div>
                            </div>);

                        if (item.type === 'Photography') {
                            return (<Link to="/photography" key={idx}>
                                    <motion.div
                                        className="group relative p-[1.5px] rounded-2xl cursor-pointer" // Added cursor-pointer
                                        initial={{opacity: 0, scale: 0.9}}
                                        whileInView={{opacity: 1, scale: 1}}
                                        whileHover={{y: -6}}
                                        transition={{
                                            duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 400, damping: 25
                                        }}
                                        viewport={{once: true}}
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {tileContent}
                                    </motion.div>
                                </Link>);
                        } else if (item.type === 'Charcoal Sketching') {
                            return (// The key change is the link destination
                                <Link to="/charcoal-sketching" key={idx}>
                                    <motion.div
                                        className="group relative p-[1.5px] rounded-2xl cursor-pointer"
                                        // ... (all motion props can be the same for a consistent feel) ...
                                        initial={{opacity: 0, scale: 0.9}}
                                        whileInView={{opacity: 1, scale: 1}}
                                        whileHover={{y: -6}}
                                        transition={{
                                            duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 400, damping: 25
                                        }}
                                        viewport={{once: true}}
                                    >
                                        {/* For variety, I've used the monochrome gradient from the new page's title */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {tileContent}
                                    </motion.div>
                                </Link>);
                        } else {
                            // This is the original non-clickable tile for other items
                            return (<motion.div
                                    key={idx}
                                    className="group relative p-[1.5px] rounded-2xl"
                                    initial={{opacity: 0, scale: 0.9}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    whileHover={{y: -6}}
                                    transition={{
                                        duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 400, damping: 25
                                    }}
                                    viewport={{once: true}}
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    {tileContent}
                                </motion.div>);
                        }
                    })}
                </div>
            </div>
        </motion.section>);
};

export default Creative;