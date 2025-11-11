// file: About.jsx
import React from 'react';
import {motion} from 'framer-motion';
import {stats} from '../../data/portfolioData.js';
import StatCard from '../ui/StatCard';

const containerVariants = {
    hidden: {}, visible: {
        transition: {
            staggerChildren: 0.2, // Delay between each child animation
        },
    },
};

const itemVariants = {
    hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
};

const About = ({sectionVariants}) => {
    return (<>
        <motion.section
            id="summary"
            className="relative py-20 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Quick Overview
                </h2>
                <motion.div
                    className="grid md:grid-cols-4 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                >
                    {stats.map((stat, idx) => (<motion.div key={idx} variants={itemVariants}>
                        <StatCard stat={stat}/>
                    </motion.div>))}
                </motion.div>


                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-slate-200 dark:border-gray-700 shadow-lg dark:shadow-none">
                    <div className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed">
                        <p className="text-xl">
                            I specialize in <span
                            className="text-cyan-500 dark:text-cyan-400 font-semibold">mechano-intelligence</span> —
                            exploring how physical systems can process information through their intrinsic dynamics. My
                            work bridges mechanics and computation by developing <strong> high-speed, physics-based
                            simulation models </strong> that uncover the
                            computational potential of real-world structures and materials.
                        </p>
                        <p className="text-xl">
                            <strong className="text-purple-500 dark:text-purple-400">Core Expertise:</strong>{' '}
                            Nonlinear Dynamics & Simulation, Reduced-Order Modeling, High-Performance Physics
                            Simulations using CUDA,
                            and Rapid Prototyping & Experimental Validation.
                        </p>
                        <p className="text-xl">
                            <strong className="text-pink-500 dark:text-pink-400">Current Focus:</strong>{' '}
                            Building accelerated multi-physics simulations of complex systems — such as
                            <em> origami-inspired structures </em> — to quantify their computational capacity within
                            the
                            <strong> Physical Reservoir Computing </strong> framework. These insights guide the
                            design of
                            adaptive soft robots, intelligent control systems, and deployable structures that
                            merge <span className="text-cyan-500 dark:text-cyan-400 font-medium">mechanics with intelligence</span>.
                        </p>
                    </div>
                </div>


            </div>
        </motion.section>

        <motion.section
            id="about"
            className="relative py-20 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                    About Me
                </motion.h2>

                <div className="relative">
                    <div className="float-right ml-8 mb-8 relative group">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-3xl opacity-25"></div>

                        {/* Motion container for image with bottom fade */}
                        <motion.div
                            className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] overflow-visible z-10"
                            initial={{y: 100, opacity: 0, rotate: 2}}
                            whileInView={{y: 0, opacity: 1, rotate: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3}}
                        >
                            <div className="absolute inset-0 image-fade-mask">
                                <img
                                    src="images/Yogesh3.png"
                                    alt="Yogesh Phalak"
                                    className="absolute inset-0 w-full h-full object-contain object-left transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                                />
                                <img
                                    src="images/Yogesh.png"
                                    alt="Yogesh Phalak Smiling"
                                    className="bsolute inset-0 w-full h-full object-contain object-left transform transition-all duration-500 ease-in-out opacity-0 group-hover:scale-105 group-hover:opacity-100"
                                />
                            </div>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-xl"
                    >
                        <p>
                            I am a <strong>PhD student in Engineering Mechanics at Virginia Tech</strong>, working
                            at the intersection of mechanics, computation, and intelligent systems. My research
                            explores how physical systems—through their geometry, material properties, and
                            dynamics—can process information, forming the foundation of what I call{' '}
                            <span className="text-cyan-500 dark:text-cyan-400 font-semibold"> mechano-intelligence
                            </span>
                            .
                        </p>

                        <p>
                            My academic journey began in <strong>Electrical and Electronics Engineering</strong>,
                            followed by an <strong>MS in Theoretical Mechanics</strong>. Before joining Virginia
                            Tech, I worked in the <strong>UAV industry</strong>, where I designed and tested aerial
                            platforms. This cross-disciplinary path sparked my curiosity about how physical
                            structures can both <em>move</em> and <em>think</em>—a question that continues to guide
                            my research today.
                        </p>

                        <p>
                            At the <strong>Dynamic and Architected Robot and structurE (DARE) Lab</strong>, I
                            develop physics-based models and experimental prototypes that merge
                            <em> nonlinear dynamics, origami-inspired structures, and physical reservoir
                                computing</em>. My goal is to uncover how mechanical systems can serve as
                            computational substrates—bridging the gap between conventional algorithms and embodied
                            intelligence.
                        </p>

                        <p>
                            Beyond research, I'm passionate about <strong>robotics, design automation, biomechanics,
                            and high-performance simulation</strong>. I believe in pursuing research that is
                            both <em>intellectually pure</em> and <em>societally meaningful</em>, where material
                            success remains a natural byproduct of sincere curiosity and contribution.
                        </p>

                    </motion.div>
                </div>
            </div>
        </motion.section>
    </>);
};


export default About;