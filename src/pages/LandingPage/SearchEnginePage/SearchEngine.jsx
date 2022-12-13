import React from 'react';
import heroImg from '../assets/Search-engine-hero.jpg';
import businessAnalysis from '../assets/Business-Analysis.jpg';
import structuresDescription from '../assets/Structures-Descriptions.jpg';
import preciseImageDescription from '../assets/Precise-Image-Description.jpg';
import '../styles/index.css';
import ImageUpload from '../../dashboard/ImageUpload';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SearchEngine = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <section className="bg-secBlue py-10 mt-4">
        <div className="container__search-engine flex flex-col md:flex-row items-center justify-between">
          <div className="text-white md:w-2/4 text-center md:text-left ">
            <h1 className="text-xLarge font-bold">Search Engine</h1>
            <p className="mt-6 tracking-normal text-normal">
              Using artificial intelligence , Discripto technology enables
              automatic assignment of images to relevant categories . This
              automated image categorization technology saves time and budget
              resources for companies operating with massive amounts of
              user-generated or crawled image content.
            </p>
            <Link to="/signup">
              <button className="bg-mainOrange text-white font-bold py-4 px-9 rounded-lg mt-10">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:w-[43%] rounded-lg overflow-hidden mt-12 md:mt-0">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container__search-engine my-16 space-y-20">
          {/* first layout */}
          <div className="flex flex-col md:flex-row-reverse items-center  md:gap-10 xl:mr-52 xl:gap-24">
            <div className="text-center md:text-left">
              <h3 className="text-medium font-bold">Structures Descriptions</h3>
              <p className=" mt-4 text-normal">
                Our API creates structured descriptions for image databases, for
                huge online picture libraries, saving them time, stress, and
                manual labour.
              </p>
            </div>
            <div className="mt-10 md:mt-0 shrink-0">
              <img src={structuresDescription} alt="" />
            </div>
          </div>
          {/* second layout */}
          <div className="flex flex-col md:flex-row items-center md:gap-10 xl:ml-52 xl:gap-24">
            <div className="text-center md:text-left">
              <h3 className="text-medium font-bold">
                Precise Image Description
              </h3>
              <p className=" mt-4 text-normal">
                Our API analyzes your images to collect details like color,
                texture etc, and then creates a query to match with other images
                for the best and most similar matches.
              </p>
            </div>
            <div className="mt-10 md:mt-0 shrink-0">
              <img src={preciseImageDescription} alt="" />
            </div>
          </div>
          {/* third layout */}
          <div className="flex flex-col md:flex-row-reverse items-center  md:gap-10 xl:mr-52 xl:gap-24">
            <div className="text-center md:text-left">
              <h3 className="text-medium font-bold">
                Useful For Business Analysis
              </h3>
              <p className=" mt-4 text-normal">
                Our API also makes it possible to access and evaluate the
                images’ pattern and search result distributions, which is useful
                for SEO projects and business assessment analysis.
              </p>
            </div>
            <div className="mt-10 md:mt-0 shrink-0">
              <img src={businessAnalysis} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="my-24 flex items-center justify-center">
        <ImageUpload demo />
      </div>
    </motion.div>
  );
};

export default SearchEngine;
