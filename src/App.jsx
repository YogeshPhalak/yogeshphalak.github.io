// file : src/App.jsx

import React, {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import CharcoalSketchingPage from './pages/CharcoalSketchingPage';

import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import ResumeModal from './components/ui/ResumeModal';
import BackToTop from './components/ui/BackToTop';

const NAV_HEIGHT_OFFSET = 10;

const App = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [showResumeModal, setShowResumeModal] = useState(false);
        const [showBackToTop, setShowBackToTop] = useState(false);

        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
            const handleScroll = () => {
                setShowBackToTop(window.scrollY > 300);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);


        useEffect(() => {
            if (location.pathname === '/' && location.hash) {
                const sectionId = location.hash.substring(1); // Remove the '#'

                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const offsetPosition = section.offsetTop - NAV_HEIGHT_OFFSET;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                        });
                        setTimeout(() => {
                            window.history.pushState(null, '', location.pathname);
                        }, 50); // 1-second delay *after* scroll starts
                    }
                }, 500); // 500ms delay to wait for page render
            }
        }, [location]);


        const scrollToSection = (sectionId) => {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 1000);

            if (location.pathname !== '/') {
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

        return (<div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white font-sans">
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
