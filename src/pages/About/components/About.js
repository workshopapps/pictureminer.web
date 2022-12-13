import React from 'react';
import { Link } from 'react-router-dom';
import Colorful from '../images/colorful.png';
import Gallery from '../images/Gallery.png';
import Upload from '../images/clarity_upload-cloud-line.png';
import Generate from '../images/arcticons_grow.png';
import { motion } from 'framer-motion';
import '../../../styles/layout/about.scss';
import Cards from './WhatWeDoCards/Cards';

import UserContext from '../../../context/UserContext';

export default function About() {
  const { user } = React.useContext(UserContext);
  return (
    <motion.section
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <div className="about-general-container">
        <div className="header-container">
          <div className="texts">
            <h1 className="h-texts">The image API product just for you!</h1>
            <p className="p-texts">
              Integrate our unique API that delivers to you structured texts and
              categorizes your images in a short space of time
            </p>
          </div>
        </div>
        <div className="section-container text-[#444444]">
          <div className="intro">
            <h2 className="section-heading">About Discripto</h2>
            <p className="section-paragraph">
              Discripto is a unique vision-language model that has the
              capabilities to provide cutting-edge image mining, image question
              and answer, and the classification of images. Discripto is a
              tremendous advancement in computer vision technology. It allows
              you to recognize anything through natural English prompts.
            </p>
          </div>
          <div className=" colorful my-5 relative items-baseline pb-6">
            <img src={Colorful} alt="" height={50} />
            <div className="crds grid grid-cols-2 gap-2 m-auto justify-between absolute z-50 top-60 right-60 mb-3">
              <span className="crd bg-white shadow-2xl">
                <div className="flex justify-start">
                  <img src={Upload} alt="" height={50} />
                  <p className="font-bold max-[480px]:text-[12px] max-[768px]:text-[30px]">
                    Upload
                  </p>
                </div>
                <p className="max-[480px]:text-[8px] max-[768px]:text-[14px]">
                  Upload images on Discripto and get instant descriptions of
                  them. Fast and easy with zero hussle. Try it today and get the
                  results you want.
                </p>
              </span>
              <span className="crd bg-white p-5 shadow-2xl">
                <div className="flex justify-start">
                  <img src={Generate} alt="" height={50} />
                  <p className=" font-bold max-[480px]:text-[12px] max-[768px]:text-[30px]">
                    Generate
                  </p>
                </div>
                <p className="max-[480px]:text-[8px] max-[768px]:text-[14px]">
                  Generate your image descriptions using Discripto API today.
                  All in a seamless and stress- free process. Try it today.
                </p>
              </span>
            </div>
          </div>
          <div className="flex lg:p-20 items-center justify-between max-[480px]:px-[20px] max-[480px]:py-[50px] max-[768px]:px-[20px] max-[768px]:py-[70px]">
            <div className="mr-3">
              <p className="text-6xl font-bold max-[480px]:text-[20px] max-[768px]:text-[36px]">
                Over 14,000 uploads powered by Discripto
              </p>
              <p className="text-2xl max-[480px]:text-[12px] max-[768px]:text-[20px]">
                Enjoy high range of uploads on Discripto, the result is
                tremendous and satisfying.
              </p>
            </div>
            <div>
              <img src={Gallery} alt="Gallery" />
            </div>
          </div>
          <div className="lg:p-20 max-[480px]:p-[20px] max-[768px]:px-[20px] max-[768px]:py-[50px]">
            <p className="text-6xl font-bold max-[480px]:text-[20px] max-[768px]:text-[36px] lg:max-w-full">
              What we offer at Discripto
            </p>
            <p className="max-[480px]:text-[12px] max-[768px]:text-[20px] lg:max-w-[60%]">
              Everything you need to about our services and how we cater to our
              users and customers.
            </p>
          </div>
          <div className="lg:px-20 max-[480px]:px-[20px] max-[480px]:py-[50px]">
            <Cards />
          </div>
          <div className="last-section lg:p-20">
            <p className="last-heading text-6xl font-bold  lg:max-w-full">
              Designed and optimized for you
            </p>
            <p className="last-paragraph  lg:max-w-[60%]">
              Discripto is a tremendous advancement in computer vision
              technology. It allows you to recognize anything through natural
              English prompts.
            </p>
            <div className="ctaWrapper">
              {user ? null : <Link to="/signup">Sign Up</Link>}
              <Link to="/documentation">View Documentation</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
