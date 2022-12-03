// import '../../styles/layout/ImageContainer.scss';
// import '../../pages/LandingPage/MinergramDemo/MinergramDemo';
// import React from 'react';
import React, { useState, useRef } from 'react';
import { images } from '../../Constants';
import { ExportCurve } from 'iconsax-react';

function ImageContainerOne() {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

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

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <div
      className="container container__try-demo mx-auto mt-2"
      style={{ background: 'none' }}
    >
      <form
        className="form-file-upload max-w-full text-center relative pt-8 pb-14"
        style={{ width: '400px' }}
      >
        <input
          ref={inputRef}
          type="file"
          className="input-file-upload hidden"
          multiple={true}
          onChange={handleChange}
        />
        <label
          className="label-file-upload h-full flex items-center justify-center border-2 rounded-lg border-dashed"
          htmlFor="input-file-upload"
        >
          <div className="flex flex-col items-center justify-center pt-8 pb-14">
            <h3 className="text-mainOrange text-large">Try Demo</h3>
            <img src={images.addToFolder} alt="" className="mt-10 h-16 w-16" />
            <p className="mt-6 text-xs md:text-sm text-gray-400">
              Drag and drop CSV file here or click to upload
            </p>
            <button
              className="upload-button bg-mainOrange cursor-pointer px-24 py-3 rounded-lg mt-6 text-white flex justify-center items-center gap-2"
              onClick={onButtonClick}
            >
              <ExportCurve size="24" color="#FFF" variant="Outline" />
              <p className="mt-2">Upload image</p>
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            className="drag-file-element absolute w-full h-full rounded-2xl top-0 right-0 bottom-0 left-0"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </div>
  );
}

export default ImageContainerOne;
