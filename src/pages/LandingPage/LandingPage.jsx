import { MotionConfig } from 'framer-motion';
import React from 'react';
import Benefits from './Benefits';

import Hero from './Hero';
import Uses from './Uses';
import Why from './Why';
import { motion } from 'framer-motion';
const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <Hero />
      <Uses />
      <Why />
      <Benefits />
    </motion.div>
  );
};

export default LandingPage;
