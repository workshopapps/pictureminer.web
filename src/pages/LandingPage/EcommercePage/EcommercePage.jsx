import React from 'react';
import Button from '../../../components/Button';
import ImageUpload from '../../dashboard/ImageUpload';
import commerce from '../assets/commerce.png';
import commerce2 from '../assets/commerce2.png';
import commerce1 from '../assets/commerce1.png';
import commerce3 from '../assets/commerce3.png';
import commerce4 from '../assets/commerce4.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EcommercePage = () => {
  return (
    <motion.div
      className="e-commerce"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <header className="e-commerce_header px-6 md:px-16">
        <div className="header_text">
          <h1>API Solutions For Digital Commerce</h1>
          <p>
            Discripto uses AI to enable automatic assignment of images to
            relevant categories. The automated image categorization saves time
            and budget of companies operating with massive amounts of
            user-generated or crawled image content.
          </p>
          <Link to={'/signup'}>
            <Button text={'Get Started'} />
          </Link>
        </div>
        <div className="header_image">
          <img src={commerce} alt="" />
        </div>
      </header>
      <section className="px-6 py-20 md:px-16">
        <div className="flex zig-zag mb-20">
          <div className="image">
            <img src={commerce1} alt="" />
          </div>
          <div className="text">
            <h2>Automate Your Image Categorization Process</h2>
            <p>
              Gains control over your enormous image assets with automatic image
              categorization and enhance images with corresponding tags to
              faster image discovery
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse  zig-zag mb-20">
          <div className="image">
            <img src={commerce2} alt="" />
          </div>
          <div className="text">
            <h2>Large Scale Processing</h2>
            <p>
              Scale to support millions of product images to creat accurate and
              high performing product listing pages , product detail pages and
              shopping experiences.
            </p>
          </div>
        </div>
        <div className="flex zig-zag mb-20">
          <div className="image">
            <img src={commerce3} alt="" />
          </div>
          <div className="text">
            <h2>Customizable</h2>
            <p>
              Can be used with any of our already predefined categories from
              varoius industries or can be trained to learn and recognized
              custom categories peculiar to your business .
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse zig-zag">
          <div className="image">
            <img src={commerce4} alt="" />
          </div>
          <div className="text">
            <h2>Enterprise Grade Integration</h2>
            <p>
              Prebuilt API’s and integrations that integrate seamlessly with
              your existing platforms .
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col ready py-14 items-center justify-center">
        <h2 className="text-4xl leading-10">Ready to start using Discripto?</h2>
        <p className="mt-6 mb-11 text-2xl">
          Reduce repetitive manual tasks and IT costs in minutes
        </p>
        <Link to={'/signup'}>
          <Button text={'Get Started'} />
        </Link>
      </section>
      <div className="my-24 flex items-center justify-center">
        <ImageUpload demo />
      </div>
    </motion.div>
  );
};

export default EcommercePage;
