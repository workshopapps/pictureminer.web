import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Constants/image';
import style from '../../styles/layout/Why.module.scss';
import { motion } from 'framer-motion';
const Why = () => {
  return (
    <motion.div className={style.container}
    whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
        transition = {{ duration: 1 }}
    >
      <div className={style.wrapper}>
        <h1>How Discripto works</h1>
        <div className={style.details}>
          <img src={image.works} alt="works image" />
          <div className={style.text}>
            <h1>Get The Data You Need From Your Images</h1>
            <p>
              Discripto is very easy to use and you can get several texts for
              several images within a few seconds to a few minutes.
            </p>
            <Link to="/demo">Watch Demo Video</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Why;
