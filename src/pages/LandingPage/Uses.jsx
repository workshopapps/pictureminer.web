import React from 'react';

import style from '../../styles/layout/Uses.module.scss';
import Card from './Card';
import cardData from './cardData';
const Uses = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h1>
          A Few Of Our Integrated <span>Industries</span>
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
    </section>
  );
};

export default Uses;
