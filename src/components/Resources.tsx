import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpenIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('biogeometry');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    { id: 'biogeometry', name: 'BioGeometry', icon: AcademicCapIcon },
    { id: 'articles', name: 'Articles', icon: DocumentTextIcon },
    { id: 'faq', name: 'FAQ', icon: QuestionMarkCircleIcon },
  ];

  const faqItems = [
    {
      question: 'What is resonance healing and how does it work?',
      answer: 'Resonance healing is based on the principle that water can retain and transmit energetic information. We collect spring water with natural healing properties, assess your unique biofield, and imprint specific frequencies onto the water to create personalized remedies that help restore your energetic balance.'
    },
    {
      question: 'Is resonance healing safe? Are there any side effects?',
      answer: 'Yes, resonance healing is completely safe as it uses only natural spring water and energy imprinting. There are no chemicals or invasive procedures involved, and therefore no harmful side effects. The remedies work with your body\'s natural healing processes.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results can vary depending on the individual and condition being treated. Some clients notice improvements within days, while others may take several weeks. We provide ongoing support and can adjust remedies based on your progress.'
    },
    {
      question: 'Can virtual consultations be as effective as in-person visits?',
      answer: 'Yes, our virtual consultations are highly effective. We use specialized techniques for remote biofield assessment and can guide you through the entire process online. Many of our international clients achieve excellent results through virtual sessions.'
    },
    {
      question: 'What conditions can be treated with resonance healing?',
      answer: 'We can address a wide range of conditions including chronic skin allergies, digestive issues, energy imbalances, stress-related conditions, and many other health concerns. Our Ocean Rose treatment is particularly effective for skin conditions.'
    },
    {
      question: 'How much do consultations and treatments cost?',
      answer: 'Consultation fees range from PKR 4,000-5,000 for virtual/in-person sessions. Specialized treatments like Ocean Rose range from PKR 7,500-12,000. Custom remedies are PKR 6,000-10,000. Exact pricing depends on your specific needs.'
    },
  ];

  const biogeometryContent = [
    {
      title: 'Dr. Ibrahim Karim - Founder of BioGeometry',
      description: 'Learn about the pioneering work of Dr. Ibrahim Karim, who coined the term "BioGeometry" and developed this revolutionary approach to energy science.',
      type: 'article',
      duration: '5 min read'
    },
    {
      title: 'Doreya Karim - Director of BioGeometry Energy Systems',
      description: 'Discover insights from Doreya Karim, daughter of Dr. Ibrahim Karim, who currently leads BioGeometry Energy Systems Ltd. in Canada.',
      type: 'podcast',
      duration: '25 min listen'
    },
    {
      title: 'BioGeometry Principles in Modern Healing',
      description: 'Understanding how BioGeometry principles are applied in resonance healing and natural medicine practices.',
      type: 'video',
      duration: '12 min watch'
    },
  ];

  const articles = [
    {
      title: 'The Science of Water Memory in Healing',
      description: 'Exploring how water retains energetic information and its applications in natural medicine.',
      readTime: '8 min read',
      category: 'Science'
    },
    {
      title: 'Biofield Assessment: Understanding Your Energy Signature',
      description: 'Learn about the comprehensive process of biofield analysis and what it reveals about your health.',
      readTime: '6 min read',
      category: 'Assessment'
    },
    {
      title: 'Ocean Rose Treatment: A Revolutionary Approach to Skin Allergies',
      description: 'Detailed overview of our specialized treatment for chronic skin conditions and allergic reactions.',
      readTime: '10 min read',
      category: 'Treatment'
    },
    {
      title: 'Natural Healing vs. Conventional Medicine: A Balanced Perspective',
      description: 'Understanding the benefits and applications of natural healing methods in modern healthcare.',
      readTime: '12 min read',
      category: 'Philosophy'
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Educational Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Deepen your understanding of resonance healing, BioGeometry, and natural medicine
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{tab.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'biogeometry' && (
            <motion.div
              key="biogeometry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {biogeometryContent.map((item, index) => {
                  const getTypeIcon = () => {
                    switch (item.type) {
                      case 'podcast':
                        return MicrophoneIcon;
                      case 'video':
                        return PlayIcon;
                      default:
                        return BookOpenIcon;
                    }
                  };
                  const TypeIcon = getTypeIcon();

                  return (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <TypeIcon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                              {item.duration}
                            </span>
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                              Access →
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Featured Content */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Learn from BioGeometry Experts
                  </h3>
                  <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Access exclusive content from Dr. Ibrahim Karim and Doreya Karim on the science of energy healing
                  </p>
                  <motion.button
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore BioGeometry Resources
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'articles' && (
            <motion.div
              key="articles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {article.readTime}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-4xl mx-auto space-y-6">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-6">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you understand how resonance healing can benefit your specific situation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Experts
            </motion.a>
            <motion.a
              href="#booking"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;