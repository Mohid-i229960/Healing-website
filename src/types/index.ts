export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  pricing?: string;
  duration?: string;
  type: 'virtual' | 'in-person' | 'both';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  rating: number;
  testimonial: string;
  date: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  consultationType: 'virtual' | 'in-person';
  preferredDate: Date;
  healthConcerns: string;
  message: string;
}

export interface TreatmentStep {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: string;
}