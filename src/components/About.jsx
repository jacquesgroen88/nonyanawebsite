import React from 'react';
import './About.css';
import aboutImg from '../assets/experience-about.png';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container about-container">
                <div className="about-image reveal-on-scroll">
                    <img src={aboutImg} alt="River View" />
                    <div className="image-accent"></div>
                </div>
                <div className="about-content reveal-on-scroll">
                    <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h4 className="section-subtitle">The Nonyana Experience</h4>
                        <h2 className="section-title">An Idyllic Getaway <br /> Just One Hour from Jo'burg</h2>
                    </div>
                    <p>
                        Nonyana River Lodge is a secluded sanctuary tucked away on a broad sweep of the majestic Vaal River.
                        Located approximately 70km from Johannesburg, we offer the perfect escape for those seeking
                        tranquility without the long travel.
                    </p>
                    <p>
                        From professional conferencing and dream riverside weddings to peaceful fishing trips and
                        family-friendly camping, our lodge provides a safe and beautiful environment for every guest.
                    </p>
                    <div className="about-stats" style={{ marginTop: '30px' }}>
                        <div className="stat-item">
                            <h3>25+</h3>
                            <span>Years of Hospitality</span>
                        </div>
                        <div className="stat-item">
                            <h3>500m</h3>
                            <span>River Frontage</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
