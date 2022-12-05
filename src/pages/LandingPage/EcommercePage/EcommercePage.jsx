import React from 'react';
import Button from '../../../components/Button';
import ImageUpload from '../../dashboard/ImageUpload';
import commerce from '../assets/commerce.png';
import commerce2 from '../assets/commerce2.png';

const EcommercePage = () => {
  return (
    <div className="e-commerce">
      <header className="e-commerce_header px-6">
        <div className="header_text">
          <h1>API Solutions For Digital Commerce</h1>
          <p>
            Discripto uses AI to enable automatic assignment of images to
            relevant categories. The automated image categorization saves time
            and budget of companies operating with massive amounts of
            user-generated or crawled image content.
          </p>
          <Button text={'Get Started'} />
        </div>
        <div className="header_image">
          <img src={commerce} alt="" />
        </div>
      </header>
      <section className="px-6 py-20">
        <div className="flex zig-zag mb-20">
          <div className="image">
            <img src={commerce2} alt="" />
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
            <h2>Automate Your Image Categorization Process</h2>
            <p>
              Gains control over your enormous image assets with automatic image
              categorization and enhance images with corresponding tags to
              faster image discovery
            </p>
          </div>
        </div>
        <div className="flex zig-zag mb-20">
          <div className="image">
            <img src={commerce2} alt="" />
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
        <div className="flex flex-row-reverse zig-zag">
          <div className="image">
            <img src={commerce2} alt="" />
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
      </section>
      <section className="flex flex-col ready py-14 items-center justify-center">
        <h2 className="text-4xl leading-10">Ready to start using Discripto?</h2>
        <p className="mt-6 mb-11 text-2xl">
          Reduce repetitive manual tasks and IT costs in minutes
        </p>
        <Button text={'Get Started'} />
      </section>
      <div className="my-24 flex items-center justify-center">
        <ImageUpload demo />
      </div>
    </div>
  );
};

export default EcommercePage;
