import React from 'react';
import { motion } from 'framer-motion';
import { 
  BeakerIcon, 
  HeartIcon, 
  ShieldCheckIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const principles = [
    {
      icon: BeakerIcon,
      title: 'Natural Healing Approach',
      description: 'We focus exclusively on natural healing methods, avoiding chemicals and invasive practices while harnessing the power of spring water and biofield resonance.',
    },
    {
      icon: SparklesIcon,
      title: "Water's Energetic Memory",
      description: 'Spring water possesses an innate ability to retain and transmit energetic information, serving as the foundation for our personalized healing remedies.',
    },
    {
      icon: HeartIcon,
      title: 'Biofield Resonance Therapy',
      description: 'Our therapy works by optimizing your unique biofield signature, restoring energetic balance and enhancing your natural healing capabilities.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Holistic Wellness',
      description: 'We address root causes rather than just symptoms, providing comprehensive healing that supports your overall well-being and vitality.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
            Our Healing Philosophy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We explore the profound healing potential of resonance remedies prepared from spring water, 
            tailored to each individual's unique biofield signature.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
                    <principle.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Benefits */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Resonance Healing?
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience the benefits of our natural, personalized approach to healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Chemical Dependencies',
                description: 'Pure spring water-based remedies without synthetic chemicals or harmful side effects',
              },
              {
                title: 'Personalized Treatment',
                description: 'Individual biofield assessment ensures completely customized healing solutions',
              },
              {
                title: 'Global Accessibility',
                description: 'Virtual consultations make our expertise available to clients worldwide',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="opacity-90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how resonance healing can help restore your natural energy and vitality
          </p>
          <motion.a
            href="#process"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Process
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;