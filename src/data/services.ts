import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'personal-consultation',
    title: 'Personal Consultations',
    description: 'In-depth one-on-one sessions with our experienced practitioners to assess your unique biofield and create personalized healing remedies.',
    benefits: [
      'Comprehensive biofield analysis',
      'Personalized remedy creation',
      'Face-to-face interaction with practitioners',
      'Immediate feedback and adjustments',
      'Detailed healing protocol development'
    ],
    pricing: 'Starting from PKR 5,000',
    duration: '60-90 minutes',
    type: 'in-person'
  },
  {
    id: 'virtual-consultation',
    title: 'Virtual Consultations',
    description: 'Global accessibility to our healing expertise through secure video consultations, making natural healing available worldwide.',
    benefits: [
      'Accessible from anywhere worldwide',
      'Remote biofield assessment techniques',
      'Digital remedy guidance',
      'Flexible scheduling across time zones',
      'Follow-up support via video calls'
    ],
    pricing: 'Starting from PKR 4,000',
    duration: '45-60 minutes',
    type: 'virtual'
  },
  {
    id: 'ocean-rose-treatment',
    title: 'Ocean Rose Treatment',
    description: 'Specialized treatment for chronic skin allergies using our unique Ocean Rose remedy with targeted frequency imprinting.',
    benefits: [
      'Specifically designed for skin conditions',
      'Natural allergy pattern interruption',
      'Energetic frequency optimization',
      'Long-lasting relief potential',
      'No chemical side effects'
    ],
    pricing: 'PKR 7,500 - PKR 12,000',
    duration: '2-3 sessions',
    type: 'both'
  },
  {
    id: 'custom-remedy',
    title: 'Custom Remedy Creation',
    description: 'Bespoke remedy development based on your individual biofield signature and specific health concerns.',
    benefits: [
      'Completely personalized formulation',
      'Multiple condition targeting',
      'Ongoing remedy adjustments',
      'Detailed application instructions',
      'Progress monitoring and optimization'
    ],
    pricing: 'PKR 6,000 - PKR 10,000',
    duration: 'Variable',
    type: 'both'
  }
];