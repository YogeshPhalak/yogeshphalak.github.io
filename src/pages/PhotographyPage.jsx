// src/pages/PhotographyPage.jsx

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {photos} from '../data/portfolioData.js';

const PhotographyPage = () => {
    const [index, setIndex] = useState(-1);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Photography Gallery
                </h1>
                <p className="text-center text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    A collection of moments, scenes, and stories captured through my lens. Click on any image to view it
                    in full screen.
                </p>

                <PhotoAlbum
                    layout="masonry"
                    photos={photos}
                    onClick={({index: current}) => setIndex(current)}
                />

                <Lightbox
                    index={index}
                    slides={photos}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>
        </motion.div>
    );
};

export default PhotographyPage;