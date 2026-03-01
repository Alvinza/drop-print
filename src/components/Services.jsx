// components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiPrinter, FiImage, FiPenTool, FiScissors, FiLayout, FiPackage } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiPrinter className="text-4xl" />,
      title: 'Digital & Offset Printing',
      description: 'High-quality printing solutions for business cards, flyers, brochures, letterheads, and more — delivered with vibrant color and sharp detail.',
      features: ['Business Cards', 'Flyers & Brochures', 'Letterheads', 'Marketing Materials']
    },
    {
      icon: <FiImage className="text-4xl" />,
      title: 'Large Format Printing',
      description: 'Eye-catching banners, posters, signage, and promotional materials designed to make your brand stand out.',
      features: ['Banners', 'Posters', 'Signage', 'Trade Show Displays']
    },
    {
      icon: <FiPenTool className="text-4xl" />,
      title: 'Graphic Design',
      description: 'Professional design services that transform your ideas into visually compelling materials aligned with your brand identity.',
      features: ['Logo Design', 'Brand Identity', 'Print Layout', 'Digital Assets']
    },
    {
      icon: <FiScissors className="text-4xl" />,
      title: 'Finishing Services',
      description: 'From binding and laminating to trimming and packaging, we ensure your prints have a polished, professional finish.',
      features: ['Binding', 'Laminating', 'Trimming', 'Custom Packaging']
    },
    {
      icon: <FiLayout className="text-4xl" />,
      title: 'Custom Design Projects',
      description: 'Tailored printing solutions for unique requirements, bringing your creative visions to life with precision and care.',
      features: ['Custom Size', 'Special Materials', 'Unique Finishes', 'Prototype Development']
    },
    {
      icon: <FiPackage className="text-4xl" />,
      title: 'Promotional Products',
      description: 'Branded merchandise and promotional items that help your business stand out and leave a lasting impression.',
      features: ['Branded Merchandise', 'Promotional Items', 'Corporate Gifts', 'Event Materials']
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Our Printing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive printing solutions tailored to your specific needs - from digital to large format
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-blue-600 text-5xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's bring your ideas to life with our premium printing services</p>
          <a href='/contact' className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Contact Us Today
            <FiPackage />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;