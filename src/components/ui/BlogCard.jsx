// # file: BlogCard.jsx
import React from 'react';
import {motion} from 'framer-motion';

const BlogCard = ({blog, idx}) => {
    return (<motion.a
        href={blog.link}
        target="_blank"
        rel="noopener noreferrer"
        // CONSISTENCY: Applying the gradient border hover effect from Expertise section.
        className="group relative block p-[1.5px] rounded-2xl"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        whileHover={{y: -6}}
        transition={{duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 400, damping: 25}}
        viewport={{once: true}}
    >
        {/* The gradient div for the border */}
        <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* The main card content */}
        <div
            className="relative bg-white dark:bg-gray-800 rounded-[15px] overflow-hidden h-full shadow-sm dark:shadow-none">
            <div className="h-48 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6 flex flex-col h-full">
                <div
                    // CONSISTENCY: Meta text uses subtle secondary colors.
                    className="flex justify-between items-center text-xs text-slate-500 dark:text-gray-400 mb-2"
                >
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                </div>
                <h3
                    // CONSISTENCY: Title uses primary text colors with a hover effect.
                    className="text-lg font-semibold mb-2 text-slate-800 dark:text-white group-hover:text-cyan-400 transition-colors"
                >
                    {blog.title}
                </h3>
                <p
                    // CONSISTENCY: Excerpt uses standard secondary text colors.
                    className="text-sm text-slate-600 dark:text-gray-400 mb-4 flex-grow"
                >
                    {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {blog.tags.map((tag) => (<span
                        key={tag}
                        // CONSISTENCY: Tags use theme-aware background and text colors.
                        className="text-xs px-2 py-1 bg-slate-100 dark:bg-gray-700 rounded-full text-slate-600 dark:text-gray-300"
                    >
                {tag}
              </span>))}
                </div>
            </div>
        </div>
    </motion.a>);
};

export default BlogCard;