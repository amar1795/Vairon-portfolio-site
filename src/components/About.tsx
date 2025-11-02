'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const values = [
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build lasting partnerships.',
    },
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: 'Quality Delivery',
      description: 'Excellence in every project, from concept to completion.',
    },
  ];

  const whyChooseUs = [
    'Expert team with years of industry experience',
    'Customized solutions tailored to your needs',
    'Transparent communication throughout the project',
    'Competitive pricing without compromising quality',
    'Ongoing support and maintenance',
    'Proven track record of successful implementations',
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">VAIRON LLC</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dynamic Development & Evolution in Every Solution
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image/Logo */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/vairon-logo.jpg"
                alt="VAIRON LLC"
                width={400}
                height={400}
                className="relative rounded-full shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold text-orange-600">VAIRON LLC</span>, we believe in the power of 
              <span className="font-semibold"> Dynamic Development & Evolution</span>. We're not just a service provider – 
              we're your technology partner committed to transforming your vision into reality.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is to deliver innovative, scalable, and efficient technology solutions that drive business 
              growth and operational excellence. From modern POS systems to comprehensive cloud integrations, we bring 
              expertise and passion to every project.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We understand that every business is unique, which is why we take a personalized approach to understand 
              your specific needs and challenges. Our solutions are designed to evolve with your business, ensuring 
              long-term success and adaptability.
            </p>

            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our Core Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-linear-to-br from-orange-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose VAIRON LLC?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
              >
                <FaCheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                <span className="text-gray-700">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
