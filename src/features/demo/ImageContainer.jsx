import React from 'react';
import { images } from '../../Constants';
import '../../styles/layout/Ecommerce.scss';

const ImageContainer = () => {
  return (
    <div className="image_container">
            <p className="documentation_text">
            Try Demo
            </p>
            <img src={images.Vector} alt="Vector" />
            <p>Drag and drop image here or click to upload</p>
            <div className="block flex my-4">
            <button
              className="btn w-1/2 px-4 text-sm text-white-600 border border-slate-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              type="submit"
            >
              Upload image
            </button>
            <input
              className="input placeholder:normal placeholder:text-slate-400 block bg-white w-full border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Place URL"
              type="text"
              name="search"
            />
          </div>
          </div>
  );
};

export default ImageContainer;