import React from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Sarah & Mark",
        text: "The perfect wedding venue. The riverside setting was absolutely magical, and the staff went above and beyond to make our day special.",
        role: "Wedding Guests"
    },
    {
        id: 2,
        name: "John D.",
        text: "A phenomenal weekend fishing getaway. Clean facilities, peaceful atmosphere, and great catches! Highly recommended.",
        role: "Angler"
    },
    {
        id: 3,
        name: "Elena R.",
        text: "Such a tranquil getaway just an hour from Joburg. We loved the comfortable chalets and will definitely be returning.",
        role: "Weekend Visitor"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">What Our Guests Say</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
