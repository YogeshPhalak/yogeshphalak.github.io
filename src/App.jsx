// // src/App.jsx
//
// import React, {useState, useEffect} from 'react';
// import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
//
// // Import Pages
// import HomePage from './pages/HomePage';
// import PhotographyPage from './pages/PhotographyPage';
// // Future pages can be imported here, e.g. import BlogPage from './pages/BlogPage';
//
// // Import UI
// import Navigation from './components/ui/Navigation';
// import Footer from './components/ui/Footer';
// import ResumeModal from './components/ui/ResumeModal';
// import BackToTop from './components/ui/BackToTop';
//
// const App = () => {
//     // State for UI elements that are part of the main layout
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [showResumeModal, setShowResumeModal] = useState(false);
//     const [showBackToTop, setShowBackToTop] = useState(false);
//
//     const location = useLocation();
//     const navigate = useNavigate();
//
//     // Scroll effect for the "Back to Top" button
//     useEffect(() => {
//         const handleScroll = () => {
//             setShowBackToTop(window.scrollY > 300);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//     // A new, smarter navigation function
//     const scrollToSection = (sectionId) => {
//         // Close the mobile menu if it's open
//         setIsMenuOpen(false);
//
//         // If we're already on the home page, just scroll
//         if (location.pathname === '/') {
//             const element = document.getElementById(sectionId);
//             element?.scrollIntoView({behavior: 'smooth'});
//         } else {
//             // If we're on another page, navigate to the home page with a hash
//             navigate(`/#${sectionId}`);
//         }
//     };
//
//     return (
//         <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white font-sans">
//             {/* Navigation is now part of the main layout */}
//             <Navigation
//                 isMenuOpen={isMenuOpen}
//                 setIsMenuOpen={setIsMenuOpen}
//                 scrollToSection={scrollToSection} // Use the new smart function
//                 setShowResumeModal={setShowResumeModal}
//             />
//
//             <Routes>
//                 <Route path="/" element={<HomePage/>}/>
//                 {/* When you're ready to add more pages, you'll add them here.
//                   For example:
//                   <Route path="/blog" element={<BlogPage />} />
//                   <Route path="/project/:id" element={<ProjectDetailPage />} />
//
//                 */}
//                 <Route path="/photography" element={<PhotographyPage/>}/>
//             </Routes>
//
//             {/* Footer is also part of the main layout */}
//             <Footer/>
//
//             {/* Modals and overlays can also live in the main layout */}
//             <ResumeModal
//                 showResumeModal={showResumeModal}
//                 setShowResumeModal={setShowResumeModal}
//             />
//
//             {/* Back to Top Button */}
//             <BackToTop showBackToTop={showBackToTop}/>
//         </div>
//     );
// };
//
// export default App;

// src/App.jsx

// src/App.jsx

import React, {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

// Import Pages
import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';

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

    // --- FINAL, ROBUST SCROLL FUNCTION ---
    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);

        // If we are on another page, navigate to the homepage with a hash.
        // Let the browser's native scroll engine handle it.
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            // --- KEY FIX: Use setTimeout to avoid the race condition ---
            // We wait just a moment for the DOM to settle before we measure and scroll.
            setTimeout(() => {
                const navbar = document.getElementById('main-nav');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }, 0); // A delay of 0 is enough to push this to the next event cycle.
        }
    };

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
