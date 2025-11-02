'use client';

import React from 'react';
import { FaRocket, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  status: 'completed' | 'coming-soon';
}

const Portfolio = () => {
  // Placeholder projects - easy to add real projects later
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Website Development',
      description: 'Modern online store with payment integration and inventory management.',
      status: 'coming-soon',
    },
    {
      id: 2,
      title: 'Restaurant POS System',
      category: 'POS System',
      description: 'Complete point-of-sale solution for restaurant operations.',
      status: 'coming-soon',
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      category: 'App Development',
      description: 'Cross-platform fitness tracking and workout planning application.',
      status: 'coming-soon',
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise in delivering innovative solutions across various industries
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
                <FaRocket className="w-12 h-12 text-white opacity-50" />
                {project.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <button className="text-orange-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details
                  <svg
                    className="w-3.5 h-3.5"
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

          {/* Add New Project Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.5 },
              scale: { duration: 0.2, ease: "easeOut" },
              borderColor: { duration: 0.2, ease: "easeOut" }
            }}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#ea580c",
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <FaPlus className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">More Projects</h3>
              <p className="text-gray-600 text-sm mb-4">
                We're constantly working on exciting new projects. Check back soon!
              </p>
              <button className="text-orange-600 font-semibold text-sm">
                Stay Updated
              </button>
            </div>
          </motion.div>
        </div>

        {/* Coming Soon Message */}
        <motion.div 
          className="bg-linear-to-r from-orange-50 to-orange-100 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <FaRocket className="w-10 h-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Exciting Projects on the Way
            </h3>
            <p className="text-gray-700 mb-6">
              We're just getting started! As VAIRON LLC grows, we'll be showcasing our completed 
              projects here. Each project represents our commitment to excellence and innovation 
              in delivering top-tier technology solutions.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg cursor-pointer shadow-lg hover:shadow-xl"
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
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
