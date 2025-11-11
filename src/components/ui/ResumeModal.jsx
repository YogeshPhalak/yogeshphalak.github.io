// ResumeModal.jsx
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {X, Download, FileText} from 'lucide-react';

const ResumeModal = ({showResumeModal, setShowResumeModal}) => {
    // Define the resume file path once
    const resumePath = "/yogesh_phalak_resume.html";

    return (<AnimatePresence>
        {showResumeModal && (<motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowResumeModal(false)}
        >
            <motion.div
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.9, opacity: 0}}
                transition={{duration: 0.3}}
                className="relative bg-gray-800 rounded-2xl max-w-lg w-full p-8 border border-gray-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button
                    onClick={() => setShowResumeModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X size={24}/>
                </button>
                <div className="text-center">
                    <div
                        className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500">
                        <FileText size={32}/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">View My Resume</h3>
                    <p className="text-gray-400 mb-8">
                        Choose to <strong>View</strong> the resume directly in your browser
                        or <strong>Download</strong> a copy
                        for a comprehensive overview of my experience and qualifications.
                    </p>
                    {/* Button Container for Flex Layout */}
                    <div className="flex justify-center space-x-4">
                        {/* 1. View Resume Button */}
                        <a
                            href={resumePath}
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security best practice for target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-600/50"
                        >
                            <FileText size={20}/>
                            <span>View Resume</span>
                        </a>

                        {/* 2. Download Button (Kept the original styling/functionality) */}
                        <a
                            href={resumePath}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
                        >
                            <Download size={20}/>
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>)}
    </AnimatePresence>);
};

export default ResumeModal;