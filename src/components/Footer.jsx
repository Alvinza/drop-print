// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-blue-400">Drop</span>
              <span className="text-2xl font-bold text-white">Printing</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Professional printing services delivering excellence since 2014.
            </p>
            <div className="flex space-x-4">
              <p className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiFacebook className="text-xl" />
              </p>
              <p className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiTwitter className="text-xl" />
              </p>
              <p className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiInstagram className="text-xl" />
              </p>
              <p className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiLinkedin className="text-xl" />
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Business Cards</li>
              <li className="text-gray-400">Brochures & Flyers</li>
              <li className="text-gray-400">Banners & Signs</li>
              <li className="text-gray-400">Booklets & Magazines</li>
              <li className="text-gray-400">Custom Packaging</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+27 776 806 0434</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">chigumadrop@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  88 Umzahahu Street<br />
                  Wilmildon
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Drop Printing. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <p className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </p>
            <p className="hover:text-blue-400 transition-colors">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;