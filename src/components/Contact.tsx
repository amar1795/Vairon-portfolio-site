'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend/email service
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+1 (XXX) XXX-XXXX',
      description: 'Chat with us instantly',
      link: 'https://wa.me/1234567890',
      color: 'bg-green-600',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'info@vaironllc.com',
      description: 'Send us a message',
      link: 'mailto:info@vaironllc.com',
      color: 'bg-blue-600',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (XXX) XXX-XXXX',
      description: 'Call us directly',
      link: 'tel:+1234567890',
      color: 'bg-orange-600',
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-linear-to-br from-orange-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's bring your vision to life
          </p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.title === 'Email' ? '_self' : '_blank'}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className={`w-14 h-14 ${method.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-orange-600 font-semibold mb-1">{method.value}</p>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Service Interest Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                >
                  <option value="">Select a service...</option>
                  <option value="pos">POS System</option>
                  <option value="website">Website Development</option>
                  <option value="app">App Development</option>
                  <option value="cloud">Cloud Services Integration</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Optional: Address/Map Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="w-5 h-5 text-orange-600" />
            <span>Serving clients nationwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
