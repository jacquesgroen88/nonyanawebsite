import React from 'react';
import './SubPage.css';

// Import category images
import w1 from '../assets/weddings-sub/1009 (1).jpg';
import w2 from '../assets/weddings-sub/1234.jpg';
import w3 from '../assets/weddings-sub/1292.jpg';
import w4 from '../assets/weddings-sub/corrie fotos n8 813.jpg';
import w5 from '../assets/weddings-sub/corrie fotos n8 817.jpg';

const weddingHero = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

const WeddingsPage = () => {
    return (
        <div className="sub-page weddings-page">
            <header className="sub-page-hero" style={{ backgroundImage: `url(${weddingHero})` }}>
                <div className="sub-page-hero-content">
                    <h1>Wedding Venue</h1>
                    <p className="subtitle">Your Dream Wedding on the Riverbank</p>
                </div>
            </header>

            <section className="sub-page-content section">
                <div className="container">
                    <div className="content-grid">
                        <div className="text-content reveal-on-scroll">
                            <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                <h4 className="section-subtitle">The Perfect Venue</h4>
                                <h2 className="section-title">Celebrate Your Love</h2>
                            </div>
                            <p>
                                Imagine looking back at your wedding photos one day and fondly remembering the most important day of your life, celebrated at Nonyana River Lodge.
                            </p>

                            <div className="category-gallery" style={{ marginBottom: '60px' }}>
                                <img src={w1} alt="Wedding 1" />
                                <img src={w2} alt="Wedding 2" />
                                <img src={w3} alt="Wedding 3" />
                                <img src={w4} alt="Wedding 4" />
                                <img src={w5} alt="Wedding 5" />
                            </div>

                            <div className="wedding-package-showcase reveal-on-scroll">
                                <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                    <h4 className="section-subtitle">Our Premier Offering</h4>
                                    <h2 className="section-title">The 100-Guest Signature Package</h2>
                                </div>
                                <p>
                                    Create a truly unforgettable celebration with our comprehensive wedding package, designed to take the stress out of planning while delivering a high-end, bespoke experience.
                                </p>

                                <div className="package-grid">
                                    <div className="package-feature">
                                        <h4>Ceremony & Reception</h4>
                                        <ul className="package-list">
                                            <li><strong>Majestic Venue:</strong> Accommodating up to 100 guests</li>
                                            <li><strong>Luxury Decor:</strong> Full tablecloth, cutlery, and crockery setup</li>
                                            <li><strong>Grand Arrival:</strong> Bride arrival by boat — a unique riverside highlight</li>
                                            <li><strong>Spacious Dancefloor:</strong> To celebrate the night away</li>
                                        </ul>
                                    </div>
                                    <div className="package-feature">
                                        <h4>Catering & Service</h4>
                                        <ul className="package-list">
                                            <li><strong>3-Course Dining:</strong> Professional starters, mains, and desserts</li>
                                            <li><strong>Welcome Social:</strong> Sherry table and snacks upon arrival</li>
                                            <li><strong>Professional Bar:</strong> Fully staffed cash bar available until midnight</li>
                                            <li><strong>Coffee & Tea:</strong> Full service included</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="hospitality-note reveal-on-scroll">
                                We invite you to visit our venue without any obligation to see why so many couples choose Nonyana as their "I do" destination.
                            </p>
                        </div>

                        <div className="form-container">
                            <h3>Wedding Inquiry</h3>
                            <form className="sub-contact-form">
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email Address" required />
                                <input type="tel" placeholder="Phone Number" />
                                <input type="date" placeholder="Wedding Date" />
                                <input type="number" placeholder="Guest Count" />
                                <textarea placeholder="Your Vision / Questions" rows="4"></textarea>
                                <button type="submit" className="btn btn-primary">Book Consultation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WeddingsPage;
