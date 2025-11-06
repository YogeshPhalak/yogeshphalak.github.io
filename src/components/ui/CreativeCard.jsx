// file: src/components/ui/CreativeCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CreativeCard = ({ item, idx }) => {
    // Map item types to their routes
    const typeRoutes = {
        'Photography': '/photography',
        'Charcoal Sketching': '/charcoal-sketching'
    };

    const path = typeRoutes[item.type] || null;

    // Shared motion props - simplified to only handle hover, let parent handle entrance
    const motionProps = {
        className: "group relative block p-[1.5px] rounded-2xl",
        whileHover: { y: -6 },
        transition: { duration: 0.2 }
    };

    // Card content (same for both clickable and non-clickable)
    const cardContent = (
        <>
            {/* Gradient border that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Main card content */}
            <div className="relative h-80 rounded-[15px] overflow-hidden shadow-sm">
                <img
                    src={item.image}
                    alt={item.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-sm px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                        {item.count}+ Works
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{item.type}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                </div>
            </div>
        </>
    );

    // Render as Link if path exists, otherwise as div
    const MotionWrapper = path ? motion(Link) : motion.div;
    const wrapperProps = path ? { to: path, ...motionProps } : motionProps;

    return (
        <MotionWrapper {...wrapperProps}>
            {cardContent}
        </MotionWrapper>
    );
};

export default CreativeCard;