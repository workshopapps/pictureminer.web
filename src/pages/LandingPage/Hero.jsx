import React from 'react';
import style from '../../styles/layout/Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
    whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}


    className={style.container}>
      <div className={style.cover}>
        <h1>Speed up your work with structured text output from images</h1>
        <p>
          Discripto provides quick and simple large-scale image conversion into
          structured text. It reduces the need to spend time sorting and
          categorizing thousands or millions of objects, which can be used for a
          range of purposes. Our API Classification Algorithm automates your
          process time while also giving you quicker, clearer, and more
          self-explanatory results.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
