import React from 'react';
import Navbar from '@/components/Navbar';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Temporary content sections with IDs for navigation */}
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white pt-20">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">VAIRON LLC</h1>
                    <p className="text-2xl text-orange-600 mb-8">Dynamic Development & Evolution</p>
                    <p className="text-gray-600">Navbar is working! Try scrolling and clicking the navigation links.</p>
                </div>
            </section>

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