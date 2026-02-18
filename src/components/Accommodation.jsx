import React from 'react';
import { Link } from 'react-router-dom';
import './Accommodation.css';
import campingImg from '../assets/camping-main.png';
import chaletsImg from '../assets/chalets.jpg';

const Accommodation = () => {
    const experiences = [
        {
            title: "Self-Catering Chalets",
            description: "Comfortable 4, 5, and 8 sleeper chalets equipped with double beds, en-suite bathrooms, and private braai areas.",
            image: chaletsImg,
            features: ["4, 5 & 8 Sleeper Options", "En-suite Bathroom", "Check-in: 14H00", "Check-out: 10H00"],
            path: "/chalets"
        },
        {
            title: "Camping & Fishing",
            description: "Safe environment for kids with waterfront sites for tents and caravans. Catch Carp, Yellow Fish, and more.",
            image: campingImg,
            features: ["Waterfront Sites", "Electricity Points", "Carp & Yellow Fish", "Jungle Gym & Trampolines"],
            path: "/camping"
        },
        {
            title: "Wedding Venue",
            description: "Picturesque riverside weddings for up to 100 guests. Make your most important day unforgettable.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["100 Guest Capacity", "Boat Arrival for Bride", "Big Dancefloor", "Catering & Bar Service"],
            path: "/weddings"
        }
    ];

    return (
        <section className="accommodation section" id="accommodation">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h4 className="section-subtitle">A World of Possibilities</h4>
                    <h2 className="section-title">Choose Your Experience</h2>
                </div>

                <div className="accommodation-grid">
                    {experiences.map((exp, index) => (
                        <div className="acc-card reveal-on-scroll" key={index}>
                            <div className="acc-img">
                                <img src={exp.image} alt={exp.title} />
                            </div>
                            <div className="acc-info">
                                <h3>{exp.title}</h3>
                                <p>{exp.description}</p>
                                <ul className="acc-features">
                                    {exp.features.map((feat, i) => (
                                        <li key={i}>{feat}</li>
                                    ))}
                                </ul>
                                <Link to={exp.path} className="btn btn-outline-dark">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
