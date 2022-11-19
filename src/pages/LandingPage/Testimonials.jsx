import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'iconsax-react';
import data from './cardData';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  return (
    <section className="testimonials">
      <div className="testimonials_intro">
        <h3 className="testimonials_header">TESTIMONIALS</h3>
        <p className="testimonials_description">
          We are trusted by over a 1000 users accross the world. Join them
          today.
        </p>
      </div>
      <div className="testimonial_card">
        <div className="card">
          {data.map((slide, id) => {
            return (
              <div
                key={id}
                className={id === current ? 'slide active' : 'slide'}
              >
                {id === current && (
                  <article>
                    <p className="testimony">
                      <span>&quot;</span>
                      {slide.message}
                      <span>&quot;</span>
                    </p>
                    <div className="profile">
                      <img src={slide.profileImg} alt="profile picture" />
                      <div className="profile_details">
                        <span className="profile_name">{slide.name}</span>
                        <span className="profile_company">{slide.company}</span>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            );
          })}
          <div className="navigation_btns">
            <div className="arrow" onClick={prevSlide}>
              <ArrowLeft size="32" color="#fff" className="nav_btn prev" />
            </div>
            <div className="arrow" onClick={nextSlide}>
              <ArrowRight size="32" color="#FFF" className="nav_btn next" />
            </div>
          </div>
        </div>
      </div>

      <div className="start">
        <h3 className="start_title">
          Start your picture mining with Minergram
        </h3>
        <div className="start_btns">
          <div className="start_btn_signup">
            <Link to="/signup" className="start_link">
              Sign up
            </Link>
          </div>
          <div className="start_btn_documentation">
            <Link to="/documentation" className="start_link">
              See our documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
