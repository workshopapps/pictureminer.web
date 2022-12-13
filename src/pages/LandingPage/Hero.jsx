import React from 'react';
import style from '../../styles/layout/Hero.module.scss';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

const Hero = () => {
  return (
    <motion.section
      // whileInView={{ opacity: 1, y: 0 }}
      // initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className={style.container}
    >
      <div className={style.cover}>
        <h1>Discripto, Easy and Fast Image Categorization Tool</h1>
        <p>
          Discripto provides quick and simple large-scale image categorization
        </p>
        <Button text={'View Documentation'} type={'secondary'} />
      </div>
    </motion.section>
  );
};

export default Hero;
