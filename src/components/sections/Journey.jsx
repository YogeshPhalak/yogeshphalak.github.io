// File: Journey.jsx
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {journey} from '../../data/portfolioData.js';
import TimelineItem from '../ui/TimelineItem';
import {ChevronDown, ChevronUp} from 'lucide-react';

// --- Configuration Constants ---
const INITIAL_ITEMS_TO_SHOW = 4;
const ITEMS_TO_INCREMENT = 3;

const Journey = ({sectionVariants}) => {
    const [visibleItems, setVisibleItems] = useState(INITIAL_ITEMS_TO_SHOW);

    const showingAll = visibleItems >= journey.length;

    // Function to toggle between showing more and showing less
    const toggleItems = () => {
        if (showingAll) {
            setVisibleItems(INITIAL_ITEMS_TO_SHOW); // Collapse
        } else {
            setVisibleItems(prev => Math.min(prev + ITEMS_TO_INCREMENT, journey.length)); // Expand
        }
    };

    // Create a sliced array of the items that should be visible
    const visibleJourneyData = journey.slice(0, visibleItems);

    return (<motion.section
        id="journey"
        className="relative py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
    >
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
            </h2>
            <p className="text-center text-gray-400 mb-16">
                A timeline of my academic and professional milestones.
            </p>

            {/* This container holds both the line and the items */}
            <div className="relative">
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 rounded-full"></div>

                <div className="space-y-16">
                    {visibleJourneyData.map((item, idx) => (// IMPORTANT: Use a unique ID from your data for the key if possible
                        <TimelineItem key={item.id || idx} item={item} idx={idx}/>))}
                </div>
            </div>

            {/* "Show More/Less" Button is rendered only if needed */}
            {journey.length > INITIAL_ITEMS_TO_SHOW && (<div className="flex justify-center mt-16">
                <motion.button
                    onClick={toggleItems}
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
                {showingAll ? 'Show Less' : 'Show More'}
                        {showingAll ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
              </span>
                </motion.button>
            </div>)}
        </div>
    </motion.section>);
};

export default Journey;