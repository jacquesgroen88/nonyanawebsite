import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} alt="Nonyana River Lodge" className="nav-logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/#accommodation">Experience</a></li>
                    <li><Link to="/chalets">Chalets</Link></li>
                    <li><Link to="/camping">Camping</Link></li>
                    <li><Link to="/weddings">Weddings</Link></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
                <button
                    className="btn-cta"
                    onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Book Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
