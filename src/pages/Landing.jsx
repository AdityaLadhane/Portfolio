import React from 'react';
import Hero from '../components/landing/Hero';
import IntroSection from '../components/landing/IntroSection';
import RecentActivity from '../components/landing/RecentActivity';
import Testimonials from '../components/landing/Testimonials';
import ContactCTA from '../components/landing/ContactCTA';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <IntroSection />
      <RecentActivity />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Landing;
