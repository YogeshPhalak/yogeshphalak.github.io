// src/pages/HomePage.jsx

import React from 'react';

// Import Sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Expertise from '../components/sections/Expertise';
import Research from '../components/sections/Research';
import Insights from '../components/sections/Insights';
import Creative from '../components/sections/Creative';

const HomePage = ({scrollToSection}) => {

    const sectionVariants = {
        hidden: {opacity: 0, y: 50}, visible: {
            opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeOut'},
        },
    };

    return (<>
        <Hero scrollToSection={scrollToSection}/>


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