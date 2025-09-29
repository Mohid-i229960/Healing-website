import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { BookingForm } from '../types';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingForm>();

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Booking submitted:', { ...data, selectedDate, selectedTime });
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Booking Request Submitted!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Thank you for your interest in Resonance Healing. Hamza will contact you within 24 hours to confirm your appointment details.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What happens next?</h4>
              <ul className="text-left text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Our team will review your consultation request</li>
                <li>• Hamza will call you to confirm appointment details</li>
                <li>• You'll receive preparation instructions via email</li>
                <li>• Virtual consultation link will be sent (if applicable)</li>
              </ul>
            </div>
            
            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Another Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Book Your Consultation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Take the first step towards natural healing. Schedule your personalized consultation today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <UserIcon className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+92 xxx xxx xxxx"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                  Consultation Type
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <input
                      {...register('consultationType', { required: 'Please select consultation type' })}
                      type="radio"
                      value="virtual"
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3 w-full">
                      <VideoCameraIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Virtual</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Online consultation</p>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <input
                      {...register('consultationType', { required: 'Please select consultation type' })}
                      type="radio"
                      value="in-person"
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3 w-full">
                      <UserGroupIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">In-Person</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Visit our center</p>
                      </div>
                    </div>
                  </label>
                </div>
                {errors.consultationType && (
                  <p className="mt-1 text-sm text-red-500">{errors.consultationType.message}</p>
                )}
              </div>

              {/* Health Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Health Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Primary Health Concerns *
                  </label>
                  <textarea
                    {...register('healthConcerns', { required: 'Please describe your health concerns' })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your main health concerns, symptoms, or conditions you'd like to address..."
                  />
                  {errors.healthConcerns && (
                    <p className="mt-1 text-sm text-red-500">{errors.healthConcerns.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting Request...</span>
                  </div>
                ) : (
                  'Submit Booking Request'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <UserIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Contact Person</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hamza - Receptionist & Assistant</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <PhoneIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-400">Quick response guaranteed</p>
                    <motion.a
                      href="https://wa.me/message"
                      className="text-green-600 dark:text-green-400 font-semibold hover:underline"
                      whileHover={{ scale: 1.05 }}
                    >
                      Chat with us now →
                    </motion.a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <EnvelopeIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">info@resonancehealing.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Info */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive health and lifestyle assessment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Biofield analysis and energy evaluation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized treatment plan development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom remedy preparation guidance</span>
                </li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-3xl p-6 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <PhoneIcon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-semibold text-orange-900 dark:text-orange-300">
                  Urgent Inquiry?
                </h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-300 mb-3">
                For immediate assistance or urgent health concerns, contact us via WhatsApp for faster response.
              </p>
              <motion.a
                href="https://wa.me/message"
                className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp Now →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;