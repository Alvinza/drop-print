// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiClock, FiAward } from 'react-icons/fi';
import { BsTrophy } from 'react-icons/bs';
import { FaHandshake, FaRegGem } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FiClock className="text-4xl" />, value: '10+', label: 'Years of Experience' },
    { icon: <FiUsers className="text-4xl" />, value: '1000+', label: 'Projects Completed' },
    { icon: <FiCheckCircle className="text-4xl" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <BsTrophy className="text-4xl" />, value: '50+', label: 'Awards Won' },
  ];

  const whyChooseUs = [
    {
      icon: <FaRegGem className="text-4xl" />,
      title: 'Quality You Can Trust',
      description: 'We are committed to delivering premium printing solutions with precision and consistency. Every project is carefully handled to ensure outstanding quality from start to finish.'
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Customer-Centered Approach',
      description: 'We take the time to understand your needs and bring your ideas to life. Our collaborative process ensures every detail aligns with your brand and business goals.'
    },
    {
      icon: <FiClock className="text-4xl" />,
      title: 'Fast & Reliable Turnaround',
      description: 'We value your time. Our efficient production process guarantees timely delivery without compromising on quality.'
    },
    {
      icon: <FiAward className="text-4xl" />,
      title: 'Industry Expertise',
      description: 'With professional experience and technical knowledge, we provide expert guidance on materials, finishes, and design optimization to ensure the best possible results.'
    }
  ];

  const clients = [
    { name: 'Energator', logo: 'E', bg: 'from-yellow-400 to-yellow-600' },
    { name: 'GazeIT', logo: 'G', bg: 'from-blue-400 to-blue-600' },
    { name: 'MTVS.NEWS', logo: 'M', bg: 'from-red-400 to-red-600' },
    { name: 'GLMP.IT', logo: 'GL', bg: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">About Drop Print Design</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Where quality meets creativity - Your trusted partner in premium printing solutions
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Drop Print Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, quality, and customer-centric approach to deliver exceptional printing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-12 mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Our Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Trusted By Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center group cursor-pointer"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${client.bg} flex items-center justify-center text-white text-2xl font-bold group-hover:rotate-12 transition-transform`}>
                    {client.logo}
                  </div>
                  <h4 className="font-semibold text-gray-800">{client.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;