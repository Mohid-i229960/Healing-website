import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Personal Consultations', href: '#services' },
      { name: 'Virtual Consultations', href: '#services' },
      { name: 'Ocean Rose Treatment', href: '#services' },
      { name: 'Custom Remedies', href: '#services' },
    ],
    resources: [
      { name: 'BioGeometry', href: '#resources' },
      { name: 'Articles', href: '#resources' },
      { name: 'FAQ', href: '#resources' },
      { name: 'Treatment Process', href: '#process' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Philosophy', href: '#about' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Resonance Healing
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Natural healing through spring water remedies and biofield resonance therapy. 
                We explore the profound healing potential of resonance remedies prepared from spring water, 
                tailored to each individual's unique biofield signature.
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <HeartIcon className="h-5 w-5" />
                <span className="font-medium">Resonance - It Cures!</span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Hamza - Receptionist & Assistant</p>
                    <p className="text-gray-400 text-sm">WhatsApp for immediate response</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">info@resonancehealing.com</p>
                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Pakistan</p>
                    <p className="text-gray-400 text-sm">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <motion.a
                  href="https://wa.me/message"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>WhatsApp Now</span>
                </motion.a>
                <motion.a
                  href="#booking"
                  className="flex items-center justify-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest insights on natural healing, BioGeometry, and wellness tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Resonance Healing. All rights reserved. Made with healing energy and natural wisdom.
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                Powered by natural energy
              </div>
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronUpIcon className="h-5 w-5 text-gray-400" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;