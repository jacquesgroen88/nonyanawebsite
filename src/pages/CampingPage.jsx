import React from 'react';
import './SubPage.css';

// Import category images
import cp1 from '../assets/camping-sub/camping-pics_01 (1).jpg';
import cp2 from '../assets/camping-sub/camping-pics_02 (1).jpg';
import cp3 from '../assets/camping-sub/camping-pics_03.jpg';
import cp4 from '../assets/camping-sub/camping-pics_04.jpg';

import campingHero from '../assets/camping-main.png';

const CampingPage = () => {
    return (
        <div className="sub-page camping-page">
            <header className="sub-page-hero" style={{ backgroundImage: `url(${campingHero})` }}>
                <div className="sub-page-hero-content">
                    <h1>Camping & Fishing</h1>
                    <p className="subtitle">Connect with Nature on the Vaal River</p>
                </div>
            </header>

            <section className="sub-page-content section">
                <div className="container">
                    <div className="content-grid">
                        <div className="text-content reveal-on-scroll">
                            <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                <h4 className="section-subtitle">The Great Outdoors</h4>
                                <h2 className="section-title">The Perfect Riverside Break</h2>
                            </div>
                            <p>
                                Put your tent or caravan close to the water and enjoy a relaxing weekend break where the kids can play in a safe environment.
                                We offer a jungle gym, swings, swimming pools, and trampolines for the kids.
                            </p>

                            <div className="category-gallery">
                                <img src={cp1} alt="Camping 1" />
                                <img src={cp2} alt="Camping 2" />
                                <img src={cp3} alt="Camping 3" />
                                <img src={cp4} alt="Camping 4" />
                            </div>

                            <div className="anglers-paradise reveal-on-scroll">
                                <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                    <h4 className="section-subtitle">Anglers' Paradise</h4>
                                    <h2 className="section-title">A Premier Fishing Destination</h2>
                                </div>
                                <p>
                                    Nonyana River Lodge is renowned among the angling community as a true sanctuary on the Vaal.
                                    Our broad sweep of the river provides deep, slow-moving waters that are home to legendary catches.
                                    Whether you're a serious specimen angler or looking for a relaxing afternoon with the kids, the riverbank offers a peaceful retreat with unequalled hospitality.
                                </p>
                                <div className="fish-showcase">
                                    <div className="fish-category">
                                        <h4>Variety of Catch</h4>
                                        <ul className="fish-list">
                                            <li><strong>Carp & Grass Carp:</strong> Plentiful and rewarding</li>
                                            <li><strong>Yellow Fish:</strong> The fighter of the Vaal</li>
                                            <li><strong>Muddies & Cat Fish:</strong> Frequent and diverse</li>
                                        </ul>
                                    </div>
                                    <div className="fishing-tip">
                                        <p>
                                            <strong>Pro Tip:</strong> Early mornings and late afternoons on our 500m river frontage offer the best conditions for a successful catch.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="hospitality-note reveal-on-scroll">
                                Experience competitive rates and unequalled hospitality. Visit us anytime to see the sites for yourself!
                            </p>
                        </div>

                        <div className="form-container">
                            <h3>Camping Inquiry</h3>
                            <form className="sub-contact-form">
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email Address" required />
                                <input type="tel" placeholder="Phone Number" />
                                <input type="date" placeholder="Proposed Date" />
                                <input type="number" placeholder="Number of Sites" />
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

export default CampingPage;
