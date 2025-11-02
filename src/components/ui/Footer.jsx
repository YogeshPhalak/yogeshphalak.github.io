import React from 'react';
import {Github, X, Linkedin, Mail, GraduationCap, ArrowUp} from 'lucide-react';

const Footer = ({scrollToSection}) => {
    const socialLinks = {
        github: 'https://github.com/YogeshPhalak',
        x: 'https://x.com/Yogesh31415',
        scholar: 'https://scholar.google.com/citations?user=TU2VNd8AAAAJ&hl=en',
        linkedin: 'https://www.linkedin.com/in/yogesh31415/',
        mail: 'mailto:yphalak@vt.edu',
    };

    return (
        <footer
            className="relative bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left mb-12">

                    <div>
                        <div
                            onClick={() => scrollToSection('hero')}
                            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3 inline-block cursor-pointer"
                        >
                            πrate
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto md:mx-0">
                            Exploring Mechano-Intelligence through the lens of nonlinear dynamics and physical
                            computing.
                        </p>
                    </div>

                    <div className="md:justify-self-end">
                        <h4 className="font-semibold text-slate-800 dark:text-gray-200 mb-4 tracking-wide uppercase">
                            Affiliation
                        </h4>
                        <ul className="space-y-3">
                            <li><a href="https://vt.edu/" target="_blank" rel="noopener noreferrer"
                                   className="text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 transition">Virginia
                                Tech</a></li>
                            <li><a href="https://dare.super.site/" target="_blank" rel="noopener noreferrer"
                                   className="text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 transition">DARE
                                Lab</a></li>
                            <li><a href={socialLinks.mail}
                                   className="text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 transition">yphalak@vt.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-slate-200 dark:border-gray-800 pt-8 flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between">
                    <div className="text-sm text-gray-400 text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Yogesh Phalak. All rights reserved.</p>
                        <p className="text-xs mt-1">Built with React & Tailwind CSS.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex space-x-4">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors"><Github size={20}/></a>
                            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors"><X size={20}/></a>
                            <a href={socialLinks.scholar} target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors"><GraduationCap
                                size={20}/></a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
                            <a href={socialLinks.mail}
                               className="text-gray-400 hover:text-white transition-colors"><Mail size={20}/></a>
                        </div>

                        <button
                            onClick={() => scrollToSection('hero')}
                            className="p-2 rounded-full bg-slate-200 dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 text-slate-600 dark:text-gray-300 hover:text-white transition-colors"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;