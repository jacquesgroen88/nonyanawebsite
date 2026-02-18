import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            {/* Overlay for clicking away */}
            {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}

            <div className="container nav-container">
                <div className="logo-container">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <img src={logo} alt="Nonyana River Lodge" className="nav-logo" />
                    </Link>
                </div>

                <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><a href="/#accommodation" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                        <li><Link to="/chalets" onClick={() => setIsMenuOpen(false)}>Chalets</Link></li>
                        <li><Link to="/camping" onClick={() => setIsMenuOpen(false)}>Camping</Link></li>
                        <li><Link to="/weddings" onClick={() => setIsMenuOpen(false)}>Weddings</Link></li>
                        <li><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>

                    <button
                        className="btn-cta"
                        onClick={() => {
                            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMenuOpen(false);
                        }}
                    >
                        Book Now
                    </button>

                    {/* Compact Arrow Pull Handle (Visual only for user request) */}
                    <div className="menu-arrow-indicator"></div>
                </div>

                <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
