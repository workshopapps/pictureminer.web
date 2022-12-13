import React from 'react';
// import DemoPage from '../../../features/demo/DemoPages';
// import ImageContainer from '../../../features/demo/ImageContainer';
// import '../../../styles/layout/Ecommerce.scss';

import women from '../../../assets/two-women.svg';
import hospitality from '../../../assets/hospitality.svg';
import ImageUpload from '../../dashboard/ImageUpload';
import { motion } from 'framer-motion';
const datad = [
  'Organize your content in a smart and easy method',
  'Automatically assign images to relevant categories',
  'Manage and share images, from a central location',
  'Increase your workflow and save time',
];

const Hospitality = () => {
  return (
    <motion.main
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <section className="flex flex-col lg:flex-row justify-between  items-center bg-[#092C4C] text-[#FBFBFB] px-4 sm:px-[2rem] md:px-[81px] py-8 sm:py-[4rem] md:py-[75px]">
        <div className=" w-full max-w-[572px]">
          <h1 className="font-bold text-[30px] sm:text-[36px] leading-[42px] sm:leading-[50px] py-[1rem] sm:py-[2rem]">
            Hospitality
          </h1>
          <p className="font-normal  text-[18px] leading-[28px] ">
            If you&apos;re in the hospitality industry, then you know that
            it&apos;s a tough business. You have to keep your customers happy,
            keep up with the latest trends, and make sure your hotel or
            apartment is always fresh and clean. Here&apos;s a problem
            you&apos;ve been having but haven&apos;t really thought about. You
            have a lot of images. A LOT of images. You know they&apos;re all
            important because they represent your business and what you do, but
            it&apos;s hard to keep track of them all.
          </p>
        </div>
        <div className="w-full max-w-[580px] h-full max-h-[550px] rounded-[8px]">
          <img src={women} alt="two women" />
        </div>
      </section>
      <section
        className="py-12 text-[#1D1D1D] "
        style={{
          backgroundColor: 'rgba(255, 226, 204, 0.5)',
        }}
      >
        <h2 className="text-center font-semibold text-[24px] sm:text-[36px] leading-[35px] sm:leading-[50px] py-6">
          Why you should have Discripto
        </h2>
        <div
          className="flex justify-center flex-wrap
         gap-6"
        >
          {datad.map((x, i) => {
            return (
              <div
                key={i}
                className="border border-[#FF6C00] rounded-[8px] w-[250px] h-[160px] flex flex-wrap   py-4 px-2"
              >
                <div className="w-full">
                  <img src={hospitality} alt="" />
                </div>
                <p className="text-[#1D1D1D]">{x}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <ImageUpload demo />
      </section>
    </motion.main>
  );
};

export default Hospitality;
