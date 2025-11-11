import React from 'react';
import {Github, X, Linkedin, Mail, GraduationCap, ArrowUp, MapPin, Download} from 'lucide-react';

const Footer = ({scrollToSection}) => {
    const socialLinks = {
        github: 'https://github.com/YogeshPhalak',
        x: 'https://x.com/Yogesh31415',
        scholar: 'https://scholar.google.com/citations?user=TU2VNd8AAAAJ&hl=en',
        linkedin: 'https://www.linkedin.com/in/yogesh31415/',
        mail: 'mailto:yphalak@vt.edu',
    };

    const quickLinks = [
        {
            name: 'Research',
            id: 'research',
            type: 'scroll'
        }, {
            name: 'Skills',
            id: 'expertise',
            type: 'scroll'
        }, {
            name: 'About',
            id: 'about',
            type: 'scroll'
        }, {
            name: 'Resume',
            id: '/yogesh_phalak_resume.html',
            type: 'download'
        },];

    return (<footer
        className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 border-t border-slate-200 dark:border-gray-800">
        <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="lg:col-span-2">
                    <div
                        onClick={() => scrollToSection('hero')}
                        className="inline-flex items-center gap-2 mb-4 cursor-pointer group"
                    >
                            <span
                                className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                πrate
                            </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6 leading-relaxed">
                        Exploring Mechano-Intelligence through the lens of nonlinear dynamics and physical
                        computing. Bridging the gap between mechanics and computation.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Github size={20}/>
                        </a>
                        <a
                            href={socialLinks.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                        >
                            <X size={20}/>
                        </a>
                        <a
                            href={socialLinks.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                        >
                            <GraduationCap size={20}/>
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Linkedin size={20}/>
                        </a>
                        <a
                            href={socialLinks.mail}
                            className="p-2.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Mail size={20}/>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-800 dark:text-gray-200 mb-4 text-sm uppercase tracking-wider">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {quickLinks.map((link) => (<li key={link.id}>
                            {link.type === 'scroll' ? (<button
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
                            >
                                {link.name}
                            </button>) : (<a
                                href={link.id}
                                download
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm inline-flex items-center gap-1"
                            >
                                <Download size={14}/>
                                {link.name}
                            </a>)}
                        </li>))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-800 dark:text-gray-200 mb-4 text-sm uppercase tracking-wider">
                        Affiliation
                    </h4>
                    <ul className="space-y-3">
                        <li>
                            <a
                                href="https://vt.edu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
                            >
                                Virginia Tech
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://dare.super.site/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
                            >
                                DARE Lab
                            </a>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <MapPin size={16} className="mt-0.5 flex-shrink-0"/>
                            <span>Blacksburg, VA</span>
                        </li>
                        <li>
                            <a
                                href={socialLinks.mail}
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
                            >
                                yphalak@vt.edu
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="border-t border-slate-200 dark:border-gray-800 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Yogesh Phalak. All rights reserved.</p>
                    <p className="text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                        Built with <span className="text-cyan-500">React</span> & <span className="text-purple-500">Tailwind CSS</span>
                    </p>
                </div>

            </div>
        </div>
    </footer>);
};

export default Footer;