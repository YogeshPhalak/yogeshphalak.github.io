// file: src/components/ui/BlogCard.jsx

import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

// ⚠️ We still import slugify, but we don't use it for the URL link creation anymore.
// We are relying on 'blog.slug' being pre-defined and clean in portfolioData.js
// You can remove this import if it's not used elsewhere in this file.
import {slugify} from '../../utils/blogUtils.jsx';

const BlogCard = ({blog, idx}) => {

    // 🎯 FIX: Use the stable, pre-defined 'slug' property for the URL.
    // This MUST match the 'slug' property in src/data/portfolioData.js
    const blogUrl = `/blog/${blog.slug}`;

    return (
        <motion.div
            layout
            className="group relative block p-[1.5px] rounded-2xl"
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.8}}
            transition={{duration: 0.3}}
            whileHover={{y: -6}}
        >
            {/* Gradient border that appears on hover */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            {/* Main card content */}
            <Link
                to={blogUrl} // 🔑 Now uses blog.slug
                className="relative bg-white dark:bg-gray-800 rounded-[15px] overflow-hidden border border-slate-200 dark:border-gray-700 h-full shadow-sm dark:shadow-none block"
            >
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-center text-xs text-slate-500 dark:text-gray-400 mb-2">
                        <span>{blog.date}</span>
                        <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {blog.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
                        {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-slate-100 dark:bg-gray-700 rounded-full text-slate-600 dark:text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;