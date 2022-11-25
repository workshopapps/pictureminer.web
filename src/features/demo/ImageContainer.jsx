import React, { useState } from 'react';
import { images } from '../../Constants';
import '../../styles/layout/Ecommerce.scss';

const ImageContainer = () => {
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };
  return (
    <form
      className="image_container"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <p className="documentation_text">Try Demo</p>
      <img src={images.Vector} alt="Vector" />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? 'drag-active' : ''}
      >
        <div className=" flex flex-col my-4 gap-3">
          <input
            className="input   block bg-white w-full border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="file"
            name="search"
            onChange={handleChange}
          />
          <input
            className="input placeholder:normal placeholder:text-slate-400 block bg-white w-full border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter URL"
            type="text"
            name="search"
          />
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default ImageContainer;
