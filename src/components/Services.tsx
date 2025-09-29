import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  VideoCameraIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { services } from '../data/services';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'virtual':
        return VideoCameraIcon;
      case 'in-person':
        return UserGroupIcon;
      default:
        return UserGroupIcon;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Comprehensive healing solutions tailored to your unique needs and lifestyle
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.type);
            
            return (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    {service.pricing && (
                      <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        <span className="font-semibold">{service.pricing}</span>
                      </div>
                    )}
                    {service.duration && (
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                        <ClockIcon className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Benefits Preview */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service.id);
                    }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {services.filter(s => s.id === selectedService).map(service => {
                  const IconComponent = getServiceIcon(service.type);
                  
                  return (
                    <div key={service.id} className="p-8">
                      {/* Modal Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {service.title}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full capitalize mt-2">
                              {service.type.replace('-', ' ')}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedService(null)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                          <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </button>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Pricing & Duration */}
                        <div className="grid grid-cols-2 gap-4">
                          {service.pricing && (
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4">
                              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 mb-2">
                                <CurrencyDollarIcon className="h-5 w-5" />
                                <span className="font-semibold">Pricing</span>
                              </div>
                              <p className="text-gray-900 dark:text-white font-semibold">
                                {service.pricing}
                              </p>
                            </div>
                          )}
                          {service.duration && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
                              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                                <ClockIcon className="h-5 w-5" />
                                <span className="font-semibold">Duration</span>
                              </div>
                              <p className="text-gray-900 dark:text-white font-semibold">
                                {service.duration}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* All Benefits */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            What You'll Receive:
                          </h4>
                          <div className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="flex-shrink-0 p-1 bg-green-100 dark:bg-green-900/30 rounded-full mt-0.5">
                                  <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <motion.a
                            href="#booking"
                            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedService(null)}
                          >
                            Book This Service
                          </motion.a>
                          <motion.a
                            href="#contact"
                            className="flex-1 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 py-3 px-6 rounded-full font-semibold text-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedService(null)}
                          >
                            Ask Questions
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Service is Right for You?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team for a personalized consultation recommendation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;