// file: src/components/sections/Creative.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { creative } from '../../data/portfolioData.js';
import CreativeCard from '../ui/CreativeCard';

const Creative = ({ sectionVariants }) => {
    return (
        <motion.section
            id="creative"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Beyond Research
                </h2>
                <p className="text-center text-slate-600 dark:text-gray-400 mb-12">
                    Creative pursuits and personal interests that inspire my work.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {creative.map((item, idx) => (
                        <CreativeCard
                            key={item.type || idx}
                            item={item}
                            idx={idx}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Creative;