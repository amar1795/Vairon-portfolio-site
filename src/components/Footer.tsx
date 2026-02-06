'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: '#' },
    { name: 'Twitter', icon: FaTwitter, url: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'GitHub', icon: FaGithub, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">VAIRON LLC</h3>
            <p className="text-orange-500 font-semibold mb-4">Dynamic Development & Evolution</p>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering businesses with innovative technology solutions. From POS systems to cloud integration, 
              we bring your digital vision to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links and Services - Side by Side on Mobile, Separate Columns on Desktop */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">POS System Development</li>
                <li className="text-gray-400">Website Development</li>
                <li className="text-gray-400">App Development</li>
                <li className="text-gray-400">Cloud Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm text-left md:order-1">
              © {currentYear} VAIRON LLC. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:order-2">
              Built & Shipped by{' '}
              <a
                href="https://amar-portfolio-site-rdde.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors duration-300"
              >
                <strong className="text-orange-500 font-bold">AMAR</strong>
              </a>
            </p>
            <div className="flex space-x-6 text-sm md:order-3">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
