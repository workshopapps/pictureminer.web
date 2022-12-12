import React from 'react';

import style from '../../styles/layout/Uses.module.scss';
import Card from './Card';
import cardData from './cardData';
import { motion } from 'framer-motion';
const Uses = () => {
  return (
    <motion.section
    whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}

    className={style.container}>
      <div className={style.wrapper}>
        <h1>
          A Few of our Integrated <span>Industries</span>
        </h1>

        <div className={style.cardWrapper}>
          {cardData.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                paragraph={item.p}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Uses;
