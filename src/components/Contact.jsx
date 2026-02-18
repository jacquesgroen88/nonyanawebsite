import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h4 className="section-subtitle">Get In Touch</h4>
                        <h2 className="section-title">Start Your Adventure</h2>
                    </div>
                    <p>Have questions about bookings or our facilities? Reach out to us and we'll get back to you shortly.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <span className="icon">📍</span>
                            <div>
                                <h3>Location & GPS</h3>
                                <p>Vaal River, Vanderbijlpark</p>
                                <p><strong>S26˚ 43’19” | E27˚ 36’50”</strong></p>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="icon">📞</span>
                            <div>
                                <h3>Contact Us</h3>
                                <p>Pieter: 076 507 7638</p>
                                <p>Corrie: 082 905 6677</p>
                                <p>Petro: 082 904 7888</p>
                                <p>Landline: (016) 987 - 7105</p>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="icon">🚗</span>
                            <div>
                                <h3>Directions from JHB</h3>
                                <p>N1 South past Grasmere Plaza. Take R53 Vanderbijlpark off-ramp. Turn right into Potchefstroom road (R53). Drive ~10km until you see the Nonyana sign on the left.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <select required>
                            <option value="">Select Interest</option>
                            <option value="accommodation">Accommodation</option>
                            <option value="wedding">Wedding Venue</option>
                            <option value="conference">Conferencing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
