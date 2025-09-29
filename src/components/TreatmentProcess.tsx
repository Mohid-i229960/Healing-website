import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BeakerIcon,
  HeartIcon,
  RadioIcon,
  ActivityIcon,
} from '@heroicons/react/24/outline';
import { treatmentSteps } from '../data/treatmentSteps';

const TreatmentProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  const iconMap = {
    droplets: BeakerIcon,
    activity: ActivityIcon,
    radio: RadioIcon,
    beaker: BeakerIcon,
    heart: HeartIcon,
  };

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Our 5-Step Healing Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A comprehensive approach to creating personalized resonance remedies tailored to your unique biofield
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-4">
            {treatmentSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || BeakerIcon;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg' 
                      : 'bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl ${
                      isActive ? 'bg-white/20' : 'bg-gradient-to-br from-blue-500 to-teal-500'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${isActive ? 'text-white' : 'text-white'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                        }`}>
                          Step {step.id}
                        </span>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className={`mt-2 text-sm ${
                        isActive ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b-2xl"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              {treatmentSteps.map((step) => {
                if (step.id !== activeStep) return null;
                const IconComponent = iconMap[step.icon as keyof typeof iconMap] || BeakerIcon;

                return (
                  <motion.div
                    key={step.id}
                    className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Step {step.id} of 5
                      </p>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {step.details}
                      </p>

                      {/* Process Visualization */}
                      <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Start</span>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-teal-500 mx-4"></div>
                          <div className="text-center">
                            <div className="w-3 h-3 bg-teal-500 rounded-full mb-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Complete</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <button
                          onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                          disabled={activeStep === 1}
                          className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <span>Previous</span>
                        </button>
                        <button
                          onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
                          disabled={activeStep === 5}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                          <span>Next Step</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-white dark:bg-gray-700 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Experience Our Process?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Begin your personalized healing journey with a comprehensive consultation
          </p>
          <motion.a
            href="#services"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentProcess;