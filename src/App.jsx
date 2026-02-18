import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChaletsPage from './pages/ChaletsPage';
import CampingPage from './pages/CampingPage';
import WeddingsPage from './pages/WeddingsPage';

function App() {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);

        // Scroll Reveal logic
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Reveal only once
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [pathname]);

    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chalets" element={<ChaletsPage />} />
                <Route path="/camping" element={<CampingPage />} />
                <Route path="/weddings" element={<WeddingsPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
