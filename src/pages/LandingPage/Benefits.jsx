import React from 'react';
import Card from './Card';
import style from '../../styles/layout/Benefits.module.scss';
import { motion } from 'framer-motion';
const data = [
  {
    title: 'Classification & Categorization',
    p: 'Discripto is the first and only app that allows you to classify and categorize your photos in a faster, easier and more efficient way. With Discripto, you do not have to spend time laboriously categorizing thousands of photos. Discripto does it all for you!',
  },

  {
    title: 'Seamless integration with your website',
    p: 'Discripto is the perfect way to increase your website(s) functionality. Our seamless integration makes it easy to incorporate into your website, and our wide variety of features allows you to tailor Discripto to your specific needs. Plus, our affordable pricing makes Discripto a cost-effective way to improve your website.',
  },
];

const Benefits = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className={style.container}
    >
      <div className={style.wrapper}>
        <h1>Benefits We Provide</h1>

        <div className={style.cardWrap}>
          {data.map((item, index) => {
            return <Card key={index} title={item.title} paragraph={item.p} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Benefits;
