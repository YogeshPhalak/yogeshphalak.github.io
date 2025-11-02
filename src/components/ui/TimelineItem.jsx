// file: TimelineItem.jsx
import React from 'react';
import {motion} from 'framer-motion';
import {Calendar, MapPin, Award, Rocket, TrendingUp, Handshake, Flag, Star} from 'lucide-react';

const categoryColors = {
    Milestone: "from-purple-500 to-pink-500",
    Release: "from-blue-500 to-cyan-500",
    Growth: "from-green-500 to-emerald-500",
    Achievement: "from-yellow-500 to-orange-500",
    Partnership: "from-indigo-500 to-purple-500",
};

const iconMap = {
    Milestone: Flag, Release: Rocket, Growth: TrendingUp, Achievement: Award, Partnership: Handshake, default: Star
};

const TimelineItem = ({item, idx}) => {
    const isLeft = idx % 2 === 0;
    const gradientColor = categoryColors[item.category] || "from-gray-500 to-slate-500";
    const IconComponent = iconMap[item.category] || iconMap.default;

    // --- Create the card's JSX content first to avoid repetition ---
    const cardContent = (<motion.div
        className="w-full" // The parent will now control the width
        whileHover={{scale: 1.03, y: -5}}
        transition={{type: "spring", stiffness: 300}}
    >
        <div className="relative group">
            <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${gradientColor} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
            <div
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 font-sans">
                <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${gradientColor} text-white text-xs font-semibold mb-3`}>
                    <IconComponent className="w-3.5 h-3.5"/>
                    {item.category}
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4"/>
                    {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {item.description}
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                    <MapPin className="w-4 h-4"/>
                    {item.location}
                </div>
            </div>
        </div>
    </motion.div>);

    return (<div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 relative`}>

        {/* This container now handles the link and layout width */}
        <div className={`w-5/12 ${item.url ? 'cursor-pointer' : ''}`}>
            {item.url ? (<a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-cyan-500 rounded-2xl"
                aria-label={`Read more about ${item.title}`}
            >
                {cardContent}
            </a>) : (cardContent)}
        </div>

        {/* Center dot with pulse animation */}
        <div className="relative flex items-center justify-center z-10">
            <motion.div
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradientColor} shadow-lg relative`}
                whileHover={{scale: 1.5}}
                transition={{type: "spring", stiffness: 300}}
            >
                <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientColor}`}
                    animate={{scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6]}}
                    transition={{duration: 2.5, repeat: Infinity, ease: "easeInOut"}}
                />
            </motion.div>
        </div>

        {/* Empty space for alternating layout */}
        <div className="w-5/12"></div>
    </div>);
};

export default TimelineItem;