import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, ChevronDown, GraduationCap, Info} from 'lucide-react';
import StaticFractalCanvas from './StaticFractalCanvas';

const Hero = ({scrollToSection}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkTheme();
        const observer = new MutationObserver(() => checkTheme());
        observer.observe(document.documentElement, {attributes: true, attributeFilter: ['class']});
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
        >
            <StaticFractalCanvas isDarkMode={isDarkMode}/>

            <div className="max-w-5xl text-center relative z-20 mt-16">
                <div className="relative group flex flex-col items-center">
                    <motion.div
                        className="absolute bottom-0 w-[372px] h-[372px] md:w-[528px] md:h-[528px] image-fade-mask z-0"
                        initial={{y: "100%", opacity: 0}}
                        animate={{y: "35%", opacity: 1}}
                        transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2}}
                    >
                        <img
                            src="/images/Yogesh1.png"
                            alt="Yogesh Phalak"
                            className="absolute inset-0 w-full h-full object-contain transform transition-all
                duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                        />
                        <img
                            src="/images/Yogesh2.png"
                            alt="Yogesh Phalak Smiling"
                            className="absolute inset-0 w-full h-full object-contain transform transition-all
                duration-500 ease-in-out opacity-0 group-hover:scale-105 group-hover:opacity-100"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.8, delay: 1}}
                        className="relative z-20 text-5xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r
                    from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent select-none, mb-6"
                    >
                        <span className="whitespace-nowrap sm:break-normal">Yogesh</span>{' '}
                        <span className="whitespace-nowrap sm:break-normal">Phalak</span>
                    </motion.h1>
                </div>


                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 1}}
                    className="text-2xl md:text-4xl font-light text-slate-800 dark:text-gray-100 mb-6"
                >
                    Exploring{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r
                     from-cyan-400 via-blue-500 to-violet-500
                     font-semibold animate-gradient-x drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
                        Mechano-Intelligence
                    </span>
                </motion.p>

                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 1.2}}
                    className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    PhD Candidate • Physical Reservoir Computing • Robotics • Nonlinear Dynamics •
                    Physics Modeling & Simulations
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 1.4}}
                    className="flex justify-center"
                >
                    <motion.button
                        onClick={() => scrollToSection('summary')}
                        className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold
                    rounded-full shadow-lg shadow-purple-500/50 overflow-hidden"
                        whileHover={{scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"}}
                        whileTap={{scale: 0.95}}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                            initial={{x: "-100%"}}
                            whileHover={{x: "0%"}}
                            transition={{duration: 0.3}}
                        />
                        <span className="relative flex items-center gap-2">
                            Know me in 2 minutes
                            <ChevronDown size={20}/>
                        </span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 1.6}}
                    className="flex justify-center space-x-6 mt-12">
                    <a href="https://github.com/YogeshPhalak"
                       className="p-3 bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-full
                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                   transition-all"><Github size={24}/></a>
                    <a href="https://scholar.google.com/citations?user=TU2VNd8AAAAJ&hl=en"
                       className="p-3 bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-full
                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                   transition-all"><GraduationCap size={24}/></a>
                    <a href="https://www.linkedin.com/in/yogesh31415/"
                       className="p-3 bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-full
                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                   transition-all"><Linkedin size={24}/></a>
                    <a href="mailto:yphalak@vt.edu"
                       className="p-3 bg-white dark:bg-gray-800 shadow-md dark:shadow-none rounded-full
                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                   transition-all"><Mail size={24}/></a>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <ChevronDown className="text-gray-500" size={32}/>
            </div>

            <motion.a
                href="https://en.wikipedia.org/wiki/Burning_Ship_fractal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-10 group flex items-center gap-2 text-gray-500 dark:text-gray-600
                           hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.6, delay: 1.8}}
            >
                <span className="text-sm font-light opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto
                                 transition-all duration-300 whitespace-nowrap overflow-hidden">
                    About this fractal
                </span>
                <Info size={18}/>
            </motion.a>
        </section>
    );
};

export default Hero;