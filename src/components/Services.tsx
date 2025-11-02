'use client';

import React from 'react';
import { FaCashRegister, FaLaptopCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <FaCashRegister className="w-4 h-4" />,
      title: 'POS System',
      description: 'Modern point-of-sale solutions designed to streamline your business operations and enhance customer experience.',
      features: ['Inventory Management', 'Real-time Analytics', 'Payment Integration', 'Customer Management'],
    },
    {
      icon: <FaLaptopCode className="w-4 h-4" />,
      title: 'Website Development',
      description: 'Custom, responsive websites built with the latest technologies to help your business stand out online.',
      features: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions', 'CMS Integration'],
    },
    {
      icon: <FaMobileAlt className="w-4 h-4" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on any device.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Maintenance'],
    },
    {
      icon: <FaCloud className="w-4 h-4" />,
      title: 'Cloud Services Integration',
      description: 'Seamless cloud solutions to scale your infrastructure and optimize your business processes efficiently.',
      features: ['Cloud Migration', 'AWS & Azure', 'Database Management', 'Security & Backup'],
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive growth
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card Header with Icon */}
              <div className="p-8 bg-gradient-to-br from-orange-50 to-white group-hover:from-orange-100 group-hover:to-orange-50 transition-all duration-300">
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Card Features */}
              <div className="px-8 pb-8">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg
                        className="w-3.5 h-3.5 text-orange-600 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="mt-6 w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">Need a custom solution?</p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
