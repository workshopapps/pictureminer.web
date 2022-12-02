import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/layout/Hero.module.scss';
import UserContext from '../../context/UserContext';

const Hero = () => {
  const { user } = React.useContext(UserContext);
  return (
    <section className={style.container}>
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
      <div className={style.ctaWrapper}>
        {user ? null : <Link to="/signup">Sign Up</Link>}
        <Link to="/documentation">View Documentation</Link>
      </div>
    </section>
  );
};

export default Hero;
