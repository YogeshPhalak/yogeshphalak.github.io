// src/pages/HomePage.jsx

import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

// Import Sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Expertise from '../components/sections/Expertise';
import Research from '../components/sections/Research';
import Insights from '../components/sections/Insights';
import Creative from '../components/sections/Creative';

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);
    const location = useLocation(); // Hook to read URL

    // Effect for parallax scrolling background
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to scroll to a section if a hash is in the URL (e.g., /#about)
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            element?.scrollIntoView({behavior: 'smooth'});
        }
    }, [location]);


    // This function can now live here, as it's specific to this page
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    // Animation variants for sections
    const sectionVariants = {
        hidden: {opacity: 0, y: 50}, visible: {
            opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeOut'},
        },
    };

    return (<>
        {/* Background Gradients (Moved from App.jsx) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 rounded-full
                    bg-amber-300 dark:bg-amber-500
                    mix-blend-normal dark:mix-blend-multiply
                    filter blur-3xl opacity-30 dark:opacity-20"
                animate={{y: -scrollY * 0.1}}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full
                    bg-rose-300 dark:bg-rose-500
                    mix-blend-normal dark:mix-blend-multiply
                    filter blur-3xl opacity-30 dark:opacity-20"
                animate={{y: -scrollY * 0.2, x: scrollY * 0.05}}
            />
            <motion.div
                className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full
                    bg-orange-200 dark:bg-yellow-500
                    mix-blend-normal dark:mix-blend-multiply
                    filter blur-3xl opacity-30 dark:opacity-20"
                animate={{y: -scrollY * 0.05}}
            />
        </div>

        {/* Pass the local scrollToSection function to Hero */}
        <Hero scrollToSection={scrollToSection}/>

        {/* Main Content Sections */}
        <main>
            <About sectionVariants={sectionVariants}/>
            <Journey sectionVariants={sectionVariants}/>
            <Expertise sectionVariants={sectionVariants}/>
            <Research sectionVariants={sectionVariants}/>
            <Insights sectionVariants={sectionVariants}/>
            <Creative sectionVariants={sectionVariants}/>
        </main>
    </>);
};

export default HomePage;