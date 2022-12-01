import React, { useState } from 'react';
import { images } from '../../Constants';

import axios from 'axios';
import MinergramDemo from '../../pages/LandingPage/MinergramDemo/MinergramDemo';

const ImageContainer = () => {
  const [dragActive, setDragActive] = useState(false);
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = useState(null);
  const [show, setShow] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [imgDesc, setImgDesc] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsError(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      setSelectedFile(e.dataTransfer.files[0]);
      setImgSrc(URL.createObjectURL(e.dataTransfer.files[0]));
      setShowBtn(true);
    }
  };

  const changeShow = () => setShow(false);
  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setShowBtn(true);
      setImgSrc(URL.createObjectURL(e.target.files[0]));
      setIsError(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (setSelectedFile === null) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);

    console.log({ selectedFile, formData });
    try {
      const response = await axios({
        method: 'post',
        url: 'http://178.128.242.94/caption-generator',
        data: formData,
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      setImgDesc(response?.data?.text_description);

      setShow(true);
    } catch (error) {
      setIsError(true);

      setErrMsg(error?.message);
    } finally {
      setIsLoading(false);
      setShowBtn(false);
    }
  };

  return (
    <>
      {!show ? (
        <form
          className="image_container relative"
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
            <div className=" flex flex-col items-center gap-4">
              <input
                className="  bg-white w-full border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                onChange={handleChange}
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
          {isError ? <p className="text-[#ff6c00] text-sm">{errMsg}</p> : null}
          {showBtn ? (
            <button
              className="py-2 px-8 bg-[#ff6c00] hover:bg-[#FF9D55] rounded text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : null}
          {isLoading ? (
            <div className="absolute w-full h-full text-[#ff6c00] bg-[rgba(255,255,255,0.5)] flex flex-col justify-center items-center ">
              <div id="loader"></div>
            </div>
          ) : null}
        </form>
      ) : (
        <MinergramDemo
          action={changeShow}
          description={imgDesc}
          imgSrc={imgSrc}
        />
      )}
    </>
  );
};

export default ImageContainer;
