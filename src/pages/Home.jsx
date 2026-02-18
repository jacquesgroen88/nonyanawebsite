import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Accommodation from '../components/Accommodation';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Accommodation />
            <Gallery />
            <About />
            <Contact />
        </>
    );
};

export default Home;
