import React from 'react';
import MainImg from '../images/About-main-img.png';
import FirstImg from '../images/About-first-img.png';
import SecondImg from '../images/About-second-img.png';
import ourMission from '../images/About-mission-img.png';
import '../../../styles/layout/about.css';

export default function About() {
  return (
    <section>
      <div className="about-general-container">
        <div className="header-container">
          <img src={MainImg} alt="header-img" width="100%" />
        </div>
        <div className="section-container">
          <div className="first-container">
            <div className="about-msg1">
              <h1 className="h1">Who We Are</h1>
              <p className="p">
                Minergram is just the first of many products to come from team
                scales, inc. we are saddled to delivering sustainable tech
                products to further drive the positive contribution if techs in
                our society and we are just getting started.
              </p>
            </div>
            <div className="img-first">
              <img src={FirstImg} alt="png" />
            </div>
          </div>

          <div className="second-container">
            <div className="img-second">
              <img src={SecondImg} alt="png" />
            </div>
            <div className="about-msg2">
              <h1 className="h1">What We Do</h1>
              <p className="p">
                We are not limited to just one type of tech product, we intend
                to deliver a variety of them. including a wide array of digital
                asset management tools, fintech options and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-mission">
        <img src={ourMission} alt="" />
      </div>
    </section>
  );
}
