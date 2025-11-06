// file : src/App.jsx

import React, {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';

import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import CharcoalSketchingPage from './pages/CharcoalSketchingPage';
import BlogTemplate from './pages/BlogTemplate';

import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import ResumeModal from './components/ui/ResumeModal';
import BackToTop from './components/ui/BackToTop';

const NAV_HEIGHT_OFFSET = 10;

const App = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [showResumeModal, setShowResumeModal] = useState(false);
        const [showBackToTop, setShowBackToTop] = useState(false);

        const [scrollY, setScrollY] = useState(0);

        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
            const handleScroll = () => {
                setShowBackToTop(window.scrollY > 300);
                setScrollY(window.scrollY);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);


        useEffect(() => {
            if (location.pathname === '/' && location.hash) {
                const sectionId = location.hash.substring(1);
                const section = document.getElementById(sectionId);

                if (section) {
                    let pollCount = 0;
                    const maxPolls = 10; // Max ~160ms wait

                    const pollElementPosition = () => {
                        const offsetPosition = section.offsetTop - NAV_HEIGHT_OFFSET;

                        if (pollCount >= maxPolls || offsetPosition !== pollElementPosition.lastOffset) {
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth',
                            });

                            const checkScrollCompletion = () => {
                                if (Math.abs(window.scrollY - offsetPosition) <= 2) {
                                    window.history.pushState(null, '', location.pathname);
                                    window.removeEventListener('scroll', checkScrollCompletion);
                                } else {
                                    requestAnimationFrame(checkScrollCompletion);
                                }
                            };
                            setTimeout(() => {
                                requestAnimationFrame(checkScrollCompletion);
                            }, 50);

                        } else {
                            pollElementPosition.lastOffset = offsetPosition;
                            pollCount++;
                            requestAnimationFrame(pollElementPosition);
                        }
                    };

                    pollElementPosition.lastOffset = -1;
                    requestAnimationFrame(pollElementPosition);

                } else {
                    console.warn(`Section with ID ${sectionId} not found.`);
                }
            }
        }, [location]);


        const scrollToSection = (sectionId) => {
            if (location.pathname !== '/') {
                setIsMenuOpen(false);
                navigate(`/#${sectionId}`);
                return;
            }

            const section = document.getElementById(sectionId);
            if (section) {
                const offsetPosition = section.offsetTop - NAV_HEIGHT_OFFSET;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });

                const checkScrollCompletion = () => {
                    if (Math.abs(window.scrollY - offsetPosition) <= 2) {
                        setIsMenuOpen(false);
                    } else {
                        requestAnimationFrame(checkScrollCompletion);
                    }
                };
                requestAnimationFrame(checkScrollCompletion);
            } else {
                console.warn(`Section with ID ${sectionId} not found.`);
                setTimeout(() => setIsMenuOpen(false), 300);
            }
        };

        const {pathname} = useLocation();

        useEffect(() => {
            if (!location.hash) {
                window.scrollTo({
                    top: 0, behavior: 'smooth',
                });
            }
        }, [pathname]);

        return (
            // <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white font-sans">
            <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white font-sans">

                {/* --- ANIMATED BACKGROUND MOVED HERE --- */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        className="absolute top-0 left-1/4 w-96 h-96 rounded-full
                        bg-amber-300 dark:bg-amber-500
                        mix-blend-normal dark:mix-blend-multiply
                        filter blur-3xl opacity-30 dark:opacity-20"
                        animate={{y: -scrollY * 0.1}} // Uses the new scrollY state from App
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

                <Navigation
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    scrollToSection={scrollToSection}
                    setShowResumeModal={setShowResumeModal}
                />

                <Routes>
                    <Route path="/" element={<HomePage scrollToSection={scrollToSection}/>}/>
                    <Route path="/photography" element={<PhotographyPage/>}/>
                    <Route path="/charcoal-sketching" element={<CharcoalSketchingPage/>}/>
                    <Route path="/blog/:blogSlug" element={<BlogTemplate/>}/>
                </Routes>

                <Footer scrollToSection={scrollToSection}/>

                <ResumeModal
                    showResumeModal={showResumeModal}
                    setShowResumeModal={setShowResumeModal}
                />

                <BackToTop
                    showBackToTop={showBackToTop}
                    scrollToSection={scrollToSection}
                />
            </div>);
    }
;

export default App;
