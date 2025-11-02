import React, {useState} from 'react';
import {motion} from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// We will import a new data source specifically for your sketches
import {sketches} from '../data/portfolioData.js';

const CharcoalSketchingPage = () => {
    const [index, setIndex] = useState(-1);

    return (<motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
        <div className="max-w-7xl mx-auto px-6">
            {/* CONTEXTUAL CHANGE: Title and Gradient */}
            {/* This gradient uses darker, grayscale tones to match the charcoal theme */}
            <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Charcoal Sketching
            </h1>

            {/* CONTEXTUAL CHANGE: Description */}
            <p className="text-center text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Exploring form, shadow, and expression through the raw medium of charcoal. Each piece is a study in
                capturing the essence of the subject. Click any image to view it in full screen.
            </p>

            {/* The PhotoAlbum now uses the 'sketches' data */}
            <PhotoAlbum
                layout="masonry"
                photos={sketches}
                onClick={({index: current}) => setIndex(current)}
            />

            {/* The Lightbox also uses the 'sketches' data */}
            <Lightbox
                index={index}
                slides={sketches}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    </motion.div>);
};

export default CharcoalSketchingPage;