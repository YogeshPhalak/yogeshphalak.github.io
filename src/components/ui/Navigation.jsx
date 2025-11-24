// file: src/components/ui/Navigation.jsx

import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X, Sun, Moon} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';
import {Link} from 'react-router-dom';

const Navigation = ({
                        isMenuOpen,
                        setIsMenuOpen,
                        scrollToSection,
                        setShowResumeModal,
                    }) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <nav
            className="fixed top-0 w-full bg-slate-100/80 dark:bg-gray-900/80 backdrop-blur-xl z-50 border-b border-slate-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => scrollToSection('hero')} className="cursor-pointer">
                    <div
                        className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        πrate
                    </div>
                </button>


                <div className="hidden md:flex space-x-8 text-sm items-center">
                    <button onClick={() => scrollToSection('about')}
                            className="text-slate-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition">
                        About
                    </button>
                    <button onClick={() => scrollToSection('journey')}
                            className="text-slate-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition">
                        Journey
                    </button>
                    <button onClick={() => scrollToSection('expertise')}
                            className="text-slate-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition">
                        Skills
                    </button>
                    <button onClick={() => scrollToSection('research')}
                            className="text-slate-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition">
                        Research
                    </button>
                    <button onClick={() => scrollToSection('insights')}
                            className="text-slate-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition">
                        Insights
                    </button>
                    <button onClick={() => scrollToSection('creative')}
                            className="text-slate-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition">
                        Beyond
                    </button>
                    <button onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors">
                        {theme === 'dark' ? <Sun className="text-yellow-400"/> : <Moon className="text-slate-700"/>}
                    </button>
                    <button
                        onClick={() => setShowResumeModal(true)}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 transition text-white"
                    >
                        Resume
                    </button>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden"
                >
                    {isMenuOpen ? <X/> : <Menu/>}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="md:hidden bg-slate-100 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 py-4 px-6 space-y-3 overflow-hidden"
                    >
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left py-2 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('journey')}
                            className="block w-full text-left py-2 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            Journey
                        </button>
                        <button
                            onClick={() => scrollToSection('expertise')}
                            className="block w-full text-left py-2 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('research')}
                            className="block w-full text-left py-2 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            Research
                        </button>
                        <button
                            onClick={() => scrollToSection('insights')}
                            className="block w-full text-left py-2 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            Insights
                        </button>
                        <button
                            onClick={() => scrollToSection('creative')}
                            className="block w-full text-left py-2 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            Beyond
                        </button>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                setShowResumeModal(true);
                            }}
                            className="block w-full text-left py-2 px-3 rounded-md text-cyan-400 hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            Resume
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;