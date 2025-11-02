// src/App.jsx

import React, {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

// Import Pages
import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import CharcoalSketchingPage from './pages/CharcoalSketchingPage';

// Import UI
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import ResumeModal from './components/ui/ResumeModal';
import BackToTop from './components/ui/BackToTop';

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

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);

        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            setTimeout(() => {
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }, 0);
        }
    };

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white font-sans">
            <Navigation
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                scrollToSection={scrollToSection}
                setShowResumeModal={setShowResumeModal}
            />

            <Routes>
                <Route path="/" element={<HomePage/>}/>
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
        </div>
    );
};

export default App;
