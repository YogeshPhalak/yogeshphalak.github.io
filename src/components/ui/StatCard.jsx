// // file: StatCard.jsx
// import React from 'react';
// import {motion} from 'framer-motion';
//
// const StatCard = ({stat}) => {
//     const IconComponent = stat.icon;
//     const isExternal = stat.url && stat.url.startsWith('http');
//     const cardContent = (<div className="relative group w-full h-full">
//         <div
//             className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-20 dark:opacity-50 group-hover:opacity-40 dark:group-hover:opacity-75 transition duration-300`}
//         ></div>
//
//         <div
//             className="relative flex flex-col justify-center items-center h-full bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-gray-700 shadow-lg dark:shadow-none transition-colors">
//             <div className={`flex justify-center mb-4 text-cyan-500`}>
//                 <IconComponent size={24}/>
//             </div>
//             <div
//                 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
//             >
//                 {stat.value}
//             </div>
//             <div className="text-sm text-slate-600 dark:text-gray-400 transition-colors">
//                 {stat.label}
//             </div>
//         </div>
//     </div>);
//
//     return (<motion.a
//         href={stat.url}
//         target={isExternal ? '_blank' : '_self'}
//         rel={isExternal ? 'noopener noreferrer' : ''}
//         className="block h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-cyan-500 rounded-2xl"
//         aria-label={`Learn more about ${stat.label}`}
//         whileHover={{y: -5}} // Add a subtle lift on hover
//         transition={{type: 'spring', stiffness: 300}}
//     >
//         {cardContent}
//     </motion.a>);
// };
//
// export default StatCard;


import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    const isExternal = stat.url && stat.url.startsWith('http');

    // The visual content of the card, remains the same
    const cardContent = (
        <div className="relative group w-full h-full">
            <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-20 dark:opacity-50 group-hover:opacity-40 dark:group-hover:opacity-75 transition duration-300`}
            ></div>
            <div
                className="relative flex flex-col justify-center items-center h-full bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-gray-700 shadow-lg dark:shadow-none transition-colors">
                <div className={`flex justify-center mb-4 text-cyan-500`}>
                    <IconComponent size={24} />
                </div>
                <div
                    className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                >
                    {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-gray-400 transition-colors">
                    {stat.label}
                </div>
            </div>
        </div>
    );

    // If a URL is provided, wrap the content in a motion.a (link)
    if (stat.url) {
        return (
            <motion.a
                href={stat.url}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
                className="block h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-cyan-500 rounded-2xl"
                aria-label={`Learn more about ${stat.label}`}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {cardContent}
            </motion.a>
        );
    }

    // If no URL, render the content in a non-interactive motion.div
    return (
        <motion.div className="h-full">
            {cardContent}
        </motion.div>
    );
};

export default StatCard;