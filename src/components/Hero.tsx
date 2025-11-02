'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-50 pt-20 md:pt-0"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-orange-600 font-semibold text-sm">
                🚀 Professional Development Services
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              VAIRON <span className="text-orange-600">LLC</span>
            </motion.h1>

            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dynamic Development & Evolution
            </motion.h2>

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transforming businesses with cutting-edge technology solutions. 
              From POS systems to cloud integration, we deliver excellence at every step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('services')}
                className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                transition={{ 
                  scale: { duration: 0.2, ease: "easeOut" },
                  y: { duration: 0.2, ease: "easeOut" }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-orange-600 flex items-center justify-center gap-2 cursor-pointer"
                transition={{ 
                  scale: { duration: 0.2, ease: "easeOut" },
                  y: { duration: 0.2, ease: "easeOut" }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <FaRocket />
              </motion.button>
            </motion.div>

            {/* Stats or features */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-600">Fast</div>
                <div className="text-sm text-gray-600">Project Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Logo/Image */}
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-orange-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/vairon-logo.jpg"
                    alt="VAIRON LLC - Dynamic Development & Evolution"
                    width={320}
                    height={320}
                    className="rounded-full shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
