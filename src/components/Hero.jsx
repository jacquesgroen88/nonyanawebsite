import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h4 className="hero-subtitle">Secluded Riverside Sanctuary</h4>
                    <h1 className="hero-title">An Idyllic Getaway <br /> on the Vaal River</h1>
                    <p className="hero-description">
                        Experience the ultimate retreat for conferences, fishing trips, camping, and weddings.
                        Located just an hour from Johannesburg, tucked away on a broad sweep of the majestic Vaal.
                    </p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Check Availability</a>
                        <a href="#accommodation" className="btn btn-outline">Explore the Lodge</a>
                    </div>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll Down</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
