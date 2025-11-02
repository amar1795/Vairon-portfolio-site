import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;