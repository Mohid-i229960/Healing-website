import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TreatmentProcess from './components/TreatmentProcess';
import Services from './components/Services';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <TreatmentProcess />
        <Services />
        <Booking />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;