// file: src/components/ui/TimelineItem.jsx

import React from 'react';
import {motion} from 'framer-motion';
import {Calendar, MapPin, Award, Rocket, TrendingUp, Handshake, Flag, Star} from 'lucide-react';

const categoryConfig = {
    Milestone: {
        gradient: "from-purple-500 to-pink-500",
        icon: Flag
    },
    Release: {
        gradient: "from-blue-500 to-cyan-500",
        icon: Rocket
    },
    Growth: {
        gradient: "from-green-500 to-emerald-500",
        icon: TrendingUp
    },
    Achievement: {
        gradient: "from-yellow-500 to-orange-500",
        icon: Award
    },
    Partnership: {
        gradient: "from-indigo-500 to-purple-500",
        icon: Handshake
    }
};

const defaultConfig = {
    gradient: "from-gray-500 to-slate-500",
    icon: Star
};

const TimelineItem = ({item, idx}) => {
    const isLeft = idx % 2 === 0;
    const config = categoryConfig[item.category] || defaultConfig;
    const IconComponent = config.icon;
    const gradientColor = config.gradient;

    const cardContent = (
        <motion.div
            className="relative group w-full p-[1.5px] rounded-2xl"
            whileHover={{y: -5}}
            transition={{duration: 0.2}}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-r ${gradientColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            <div
                className="relative bg-white dark:bg-gray-800 rounded-[15px] p-6 shadow-sm border border-slate-200 dark:border-gray-700">
                <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${gradientColor} text-white text-xs font-semibold mb-3`}>
                    <IconComponent className="w-3.5 h-3.5"/>
                    {item.category}
                </div>

                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4"/>
                    {item.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {item.description}
                </p>

                {item.location && (
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                        <MapPin className="w-4 h-4"/>
                        {item.location}
                    </div>
                )}
            </div>
        </motion.div>
    );

    const CardWrapper = item.url ? 'a' : 'div';
    const wrapperProps = item.url ? {
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-cyan-500 rounded-2xl",
        'aria-label': `Read more about ${item.title}`
    } : {
        className: ""
    };

    return (
        <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 relative`}>
            <div className="w-5/12">
                <CardWrapper {...wrapperProps}>
                    {cardContent}
                </CardWrapper>
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

            <div className="w-5/12"></div>
        </div>
    );
};

export default TimelineItem;