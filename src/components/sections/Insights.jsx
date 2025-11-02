// # file : Insights.jsx
import React from 'react';
import {motion} from 'framer-motion';
import {blogs} from '../../data/portfolioData.js';
import BlogCard from '../ui/BlogCard';

const Insights = ({sectionVariants}) => {
    return (<motion.section
        id="insights"
        // CONSISTENCY: Background and padding match other sections.
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
    >
        <div className="max-w-6xl mx-auto">
            <h2
                // CONSISTENCY: Title uses the established gradient style.
                className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
                Insights
            </h2>
            <p
                // CONSISTENCY: Subtitle uses the standard secondary text color.
                className="text-center text-slate-600 dark:text-gray-400 mb-12"
            >
                Sharing knowledge and perspectives through writing.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, idx) => (<BlogCard key={idx} blog={blog} idx={idx}/>))}
            </div>
        </div>
    </motion.section>);
};

export default Insights;