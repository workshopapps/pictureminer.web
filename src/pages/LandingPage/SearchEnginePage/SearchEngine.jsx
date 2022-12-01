// import React, { useState } from 'react';
import heroImg from '../assets/Search-engine-hero.jpg';
import businessAnalysis from '../assets/Business-Analysis.jpg';
import structuresDescription from '../assets/Structures-Descriptions.jpg';
import preciseImageDescription from '../assets/Precise-Image-Description.jpg';
import { images } from '../../../Constants';
import { ExportCurve } from 'iconsax-react';
// import ImageUpload from '../../dashboard/ImageUpload';
import '../styles/index.css';

const SearchEngine = () => {
  // const [imagesUpload, setImagesUpload] = useState([]);

  //   const onImageChange = (e) => {
  //     setImagesUpload([...e.target.files]);
  //   };

  return (
    <>
      <section className="bg-secBlue py-10 mt-4">
        <div className="container__search-engine flex flex-col md:flex-row items-center justify-between">
          <div className="text-white md:w-[45%] lg:w-[43%] text-center md:text-left shrink-0">
            <h1 className="text-large font-bold">Search Engine</h1>
            <p className="mt-6 font-light">
              Using artificial intelligence , Discripto technology enables
              automatic assignment of images to relevant categories . This
              automated image categorization technology saves time and budget
              resources for companies operating with massive amounts of
              user-generated or crawled image content.
            </p>
          </div>
          <div className="md:w-[45%] lg:w-[43%] rounded-lg overflow-hidden mt-12 md:mt-0">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container__search-engine my-16 space-y-20">
          {/* second layout */}
          <div className="flex flex-col md:flex-row-reverse items-center  md:gap-12 lg:mr-52 lg:gap-24">
            <div className="text-center md:text-left">
              <h3 className="text-normal font-bold">Structures Descriptions</h3>
              <p className="font-light mt-4">
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
          <div className="flex flex-col md:flex-row items-center  md:gap-12 lg:ml-52 lg:gap-24">
            <div className="text-center md:text-left">
              <h3 className="text-normal font-bold">
                Precise Image Description
              </h3>
              <p className="font-light mt-4">
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
          <div className="flex flex-col md:flex-row-reverse items-center  md:gap-12 lg:mr-52 lg:gap-24">
            <div className="text-center md:text-left">
              <h3 className="text-normal font-bold">
                Useful For Business Analysis
              </h3>
              <p className="font-light mt-4">
                Oue API also makes it possible to access and evaluate the
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
      {/* Try demo section */}
      <div className="my-24 flex items-center justify-center">
        <div className="container__try-demo w- border border-dashed border-secBrown rounded-lg flex flex-col items-center justify-center pt-8 pb-14">
          <h3 className="text-mainOrange text-large">Try Demo</h3>
          <img src={images.addToFolder} alt="" className="mt-10 h-16 w-16" />
          <p className="mt-6 text-xs md:text-sm text-gray-400">
            Drag and drop CSV file here or click to upload
          </p>
          <div className="relative bg-mainOrange cursor-pointer px-24 py-3 rounded-lg mt-6">
            <div className="flex justify-center items-center gap-2 text-white ">
              <ExportCurve size="24" color="#FFF" variant="Outline" />
              <p className="mt-2">Upload csv file</p>
            </div>
            <input
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              id="upload"
              type="file"
              multiple
              accept="image/*, .png, .svg, .jpg"
              // onChange={onImageChange}
            />
          </div>
        </div>
        {/* <ImageUpload /> */}
      </div>
    </>
  );
};

export default SearchEngine;
