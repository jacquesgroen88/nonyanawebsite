import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo">
                        Nonyana
                        <span>River Lodge</span>
                    </div>
                    <p>
                        Your ultimate riverside escape. Since 1998, providing the perfect
                        backdrop for relaxation and adventure on the Vaal River.
                    </p>
                    <p className="brand-promise">
                        Nonyana River Lodge — a secluded riverside sanctuary on the Vaal.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#accommodation">Accommodation</a></li>
                        <li><a href="#activities">Activities</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Gate Times</h3>
                    <ul>
                        <li>Weekdays: 08h00 – 17h00</li>
                        <li>Weekends: 07h00 – 17h00</li>
                        <li>Public Holidays: 07h00 – 17h00</li>
                        <li style={{ color: 'var(--accent)' }}>Gates close at 18h30</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Contact</h3>
                    <ul>
                        <li>Tel: (016) 987 - 7105</li>
                        <li>Fax: (016) 987 - 1037</li>
                        <li>info@nonyana.co.za</li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Subscribe for seasonal updates and special offers.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Your Email" />
                        <button className="btn-send">➡</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 Nonyana River Lodge. All Rights Reserved. Built with ❤️.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
