import React from 'react';
import './SubPage.css';

// Import category images
import c1 from '../assets/chalets/NONYANA VAAL DEC 2012 125 (1).jpg';
import c2 from '../assets/chalets/NONYANA VAAL DEC 2012 126.jpg';
import c3 from '../assets/chalets/NONYANA VAAL DEC 2012 131.jpg';
import c4 from '../assets/chalets/NONYANA VAAL DEC 2012 301.jpg';

import chaletsHero from '../assets/chalets-hero-new.png';

const ChaletsPage = () => {
    return (
        <div className="sub-page chalets-page">
            <header className="sub-page-hero" style={{ backgroundImage: `url(${chaletsHero})` }}>
                <div className="sub-page-hero-content">
                    <h1>Self-Catering Chalets</h1>
                    <p className="subtitle">Luxury Riverside Living at Its Best</p>
                </div>
            </header>

            <section className="sub-page-content section">
                <div className="container">
                    <div className="content-grid">
                        <div className="text-content reveal-on-scroll">
                            <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                <h4 className="section-subtitle">Riverside Living</h4>
                                <h2 className="section-title">Our Chalets</h2>
                            </div>
                            <p>
                                Our self-catering chalets are equipped with the basic utensils that are needed for a pleasant breakaway.
                                Each chalet sleeps (double bed and single bunker-bed) with an en-suite bathroom and a private patio with a braai stand.
                            </p>

                            <div className="category-gallery">
                                <img src={c1} alt="Chalet 1" loading="lazy" />
                                <img src={c2} alt="Chalet 2" loading="lazy" />
                                <img src={c3} alt="Chalet 3" loading="lazy" />
                                <img src={c4} alt="Chalet 4" loading="lazy" />
                            </div>

                            <div className="info-box">
                                <h3>Important Information</h3>
                                <ul>
                                    <li><strong>Check-in:</strong> 14H00</li>
                                    <li><strong>Check-out:</strong> 10H00</li>
                                    <li><strong>Gates Operational:</strong>
                                        <ul>
                                            <li>Mon-Fri: 08h00 - 17h00</li>
                                            <li>Sat-Sun: 07h00 - 17h00</li>
                                            <li>Public Holidays: 07h00 - 17h00</li>
                                        </ul>
                                    </li>
                                    <li className="warning">Gates close at 18h30 for safety reasons. All day visitors should respect these operation times.</li>
                                </ul>
                            </div>

                            <p className="hospitality-note">
                                Our rates are competitive and our hospitality unequalled. We welcome visits from interested parties without any obligation.
                            </p>
                        </div>

                        <div className="form-container">
                            <h3>Chalet Inquiry</h3>
                            <form className="sub-contact-form">
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email Address" required />
                                <input type="tel" placeholder="Phone Number" />
                                <input type="date" placeholder="Proposed Date" />
                                <input type="number" placeholder="Number of Guests" />
                                <textarea placeholder="Message / Requirements" rows="4"></textarea>
                                <button type="submit" className="btn btn-primary">Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChaletsPage;
