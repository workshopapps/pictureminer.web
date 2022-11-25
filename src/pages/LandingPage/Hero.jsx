import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/layout/Hero.module.scss';

const Hero = () => {
  return (
    <section className={style.container}>
      <h1>
        Large-Scale <span>Conversion</span> Of Images Into Structured Text.
      </h1>
      <p>
        We offer you structured text output that eliminates the need to spend
        time sorting and classifying thousands or millions of objects. Your
        process time is automated by our API Classification Algorithm, which
        also provides you with quicker, simpler, and more self-explanatory
        results.
      </p>
      <div className={style.ctaWrapper}>
        <Link>Sign Up</Link>
        <Link to="/documentation">See our documentation</Link>
      </div>
    </section>
  );
};

export default Hero;
