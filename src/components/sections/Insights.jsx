// # file : Insights.jsx
import React, {useState} from 'react'; // <-- 1. Import useState
import {motion} from 'framer-motion';
import {blogs} from '../../data/portfolioData.js';
import BlogCard from '../ui/BlogCard';
import {ChevronDown, ChevronUp} from 'lucide-react'; // <-- 2. Import icons

// 3. Define constants for pagination
const INITIAL_VISIBLE_COUNT = 6;
const INCREMENT_COUNT = 6;

const Insights = ({sectionVariants}) => {
    // 4. Add state for visible count
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    // 5. Add event handlers for the button
    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + INCREMENT_COUNT);
    };

    const handleShowLess = () => {
        setVisibleCount(INITIAL_VISIBLE_COUNT);
    };

    // 6. Calculate the blogs to show and the button's state
    const blogsToShow = blogs.slice(0, visibleCount);
    const hasMoreBlogs = visibleCount < blogs.length;

    return (
        <motion.section
            id="insights"
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
                    Insights
                </h2>
                <p
                    className="text-center text-slate-600 dark:text-gray-400 mb-12"
                >
                    Sharing knowledge and perspectives through writing.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 7. Map over 'blogsToShow' instead of 'blogs' */}
                    {blogsToShow.map((blog, idx) => (
                        <BlogCard key={idx} blog={blog} idx={idx}/>
                    ))}
                </div>

                {/* 8. Add the "Show More" / "Show Less" button */}
                {blogs.length > INITIAL_VISIBLE_COUNT && (
                    <div className="mt-16 text-center">
                        <motion.button
                            onClick={hasMoreBlogs ? handleShowMore : handleShowLess}
                            className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg overflow-hidden"
                            whileHover={{scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"}}
                            whileTap={{scale: 0.95}}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                                initial={{x: "-100%"}}
                                whileHover={{x: "0%"}}
                                transition={{duration: 0.3}}
                            />
                            <span className="relative flex items-center gap-2">
                                {hasMoreBlogs ? 'Show More' : 'Show Less'}
                                {hasMoreBlogs ? <ChevronDown className="w-4 h-4"/> : <ChevronUp className="w-4 h-4"/>}
                            </span>
                        </motion.button>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

export default Insights;