import React from 'react';

import Hero from './Hero';
import Uses from './Uses';
import Works from './Works';
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (

      <div className="landing_page">
        <Navbar />
        <Hero />
        <Uses />
        <Works />
        <Testimonials />
        <Footer />
      </div>

  );
};

export default LandingPage;
