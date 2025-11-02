import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />

            <section id="services" className="min-h-screen flex items-center justify-center bg-white">
                <h2 className="text-4xl font-bold text-gray-900">Services Section</h2>
            </section>

            <section id="portfolio" className="min-h-screen flex items-center justify-center bg-gray-50">
                <h2 className="text-4xl font-bold text-gray-900">Portfolio Section</h2>
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center bg-white">
                <h2 className="text-4xl font-bold text-gray-900">About Section</h2>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center bg-orange-50">
                <h2 className="text-4xl font-bold text-gray-900">Contact Section</h2>
            </section>
        </div>
    );
};

export default HomePage;