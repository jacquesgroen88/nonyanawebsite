import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Accommodation from '../components/Accommodation';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Accommodation />
            <Testimonials />
            <Gallery />
            <About />
            <Contact />
        </>
    );
};

export default Home;
