import React from 'react';
import './Gallery.css';

// Import gallery images
import img1 from '../assets/gallery/1009.jpg';
import img2 from '../assets/gallery/20171226_135619.jpg';
import img3 from '../assets/gallery/20181021_105453 (1).jpg';
import img4 from '../assets/gallery/IMG_0072.jpg';
import img5 from '../assets/gallery/IMG_0597.jpg';
import img6 from '../assets/gallery/NONYANA VAAL DEC 2012 004.jpg';
import img7 from '../assets/gallery/NONYANA VAAL DEC 2012 044.jpg';
import img8 from '../assets/gallery/NONYANA VAAL DEC 2012 125.jpg';
import img9 from '../assets/gallery/NONYANA VAAL DEC 2012 130.jpg';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <section className="gallery-section section" id="gallery">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h4 className="section-subtitle">Visual Journey</h4>
                    <h2 className="section-title">River Lodge Gallery</h2>
                </div>
            </div>
            <div className="gallery-slider">
                <div className="gallery-track">
                    {/* Duplicate set for infinite-like scroll effect */}
                    {[...images, ...images].map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img} alt={`Gallery ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
