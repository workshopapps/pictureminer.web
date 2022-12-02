import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Constants/image';
import style from '../../styles/layout/Why.module.scss';

const Why = () => {
  return (
    <div className={style.container}>
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
            <Link to="/demo">See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
