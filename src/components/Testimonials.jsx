// components/Testimonials.js
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO, Energator',
      image: 'https://i.pravatar.cc/150?img=1',
      content: 'Drop Printing exceeded our expectations! The quality of their work is outstanding, and they delivered before the deadline. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director, GazeIT',
      image: 'https://i.pravatar.cc/150?img=2',
      content: 'Weve been working with Drop Printing for over 3 years now. Their attention to detail and customer service is unmatched in the industry.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Alvin Zondi',
      role: 'Software Developer',
      image: 'https://i.pravatar.cc/150?img=3',
      content: 'The team at Drop Printing understood our vision perfectly. They delivered high-quality materials that helped elevate our brand.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Creative Director, GLMP.IT',
      image: 'https://i.pravatar.cc/150?img=4',
      content: 'Exceptional service from start to finish. They went above and beyond to ensure we were satisfied with every aspect of our project.',
      rating: 5,
    },
  ];

  // Calculate total slides (2 testimonials per slide)
  const itemsPerPage = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500); // 4.5 seconds between slides
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Get current testimonials to display
  const startIndex = currentIndex * itemsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6 lg:gap-8"
              >
                {visibleTestimonials.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Quote mark using CSS instead of icon */}
                    <div className="absolute top-6 right-6 text-blue-100 text-6xl font-serif">"</div>
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-blue-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FiStar key={i} className="text-yellow-400 fill-current text-xl" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-lg mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-blue-600">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;