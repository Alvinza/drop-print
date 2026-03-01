// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPrinter, FiMail, FiArrowRight } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { BsTrophy } from 'react-icons/bs';

const Home = () => {
  const services = [
    {
      icon: <FiPrinter className="text-4xl text-blue-600" />,
      title: 'Digital Printing',
      description: 'High-quality digital printing for all your needs',
    },
    {
      icon: <BiTime className="text-4xl text-blue-600" />,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service with no compromise on quality',
    },
    {
      icon: <BsTrophy className="text-4xl text-blue-600" />,
      title: 'Premium Quality',
      description: 'Top-notch printing quality that exceeds expectations',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1562408595-e1d2490a8a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Vision,
              <span className="text-blue-300"> Printed to Perfection</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Professional printing and website development services tailored to your needs. From business cards to banners, we build websites too.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 group"
              >
                Our Services
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                Contact Us
                <FiMail />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Printing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your printing needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
