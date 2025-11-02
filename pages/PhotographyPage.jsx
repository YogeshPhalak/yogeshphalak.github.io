// src/pages/PhotographyPage.jsx
import React from 'react';
import {motion} from 'framer-motion';
import PhotoGallery from '../components/ui/PhotoGallery'; // You'll create this
import {photos} from '../data/portfolioData.js'; // Your photo data

const PhotographyPage = () => {
    return (
        <motion.section
            id="photography"
            className="relative py-24 px-6 bg-slate-100 dark:bg-gray-900 min-h-screen"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="max-w-7xl mx-auto pt-16"> {/* Added pt-16 for navbar spacing */}
                <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Photography
                </h2>
                <p className="text-center text-slate-600 dark:text-gray-400 mb-12">
                    A collection of moments captured through my lens.
                </p>
                {/*<PhotoGallery photos={photos}/>*/}
            </div>
        </motion.section>
    );
};

export default PhotographyPage;
