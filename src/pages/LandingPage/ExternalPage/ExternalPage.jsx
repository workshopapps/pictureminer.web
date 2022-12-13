/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from '../../dashboard/ImageUpload';
import '../../../styles/layout/Ecommerce.scss';
import YouTube from 'react-youtube';
import Button from '../../../components/Button';
import { motion } from 'framer-motion';

const opts = {
  height: '100%',
  width: '100%',

  playerVars: {
    autoplay: 1,
  },
};
const ExternalPage = () => {
  const [showContainer, setShowContainer] = useState({
    button: false,
    container: false,
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 0.85, ease: 'easeOut' }}
    >
      {/* <ImageContainer /> */}
      <section className="">
        {!showContainer.container ? (
          <div className="my-9 flex justify-center align-center relative min-h-[90vh]">
            <YouTube
              videoId="AcusMK7TGyo"
              opts={opts}
              className="m-auto youtube__player"
              onEnd={() =>
                setShowContainer((prev) => {
                  return { ...prev, button: true };
                })
              }
              onError={() =>
                setShowContainer((prev) => {
                  return { ...prev, button: true };
                })
              }
            />
            {showContainer.button ? (
              <div className="youtube_player absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-[#FF6C00] hover:bg-[#FF9D55] disabled:bg-[#FF9D55] disabled:cursor-not-allowed flex flex-row justify-center items-center 

            rounded-lg gap-[8px] py-[16px] px-[24px] font-sans
           font-normal text-[24px] leading-[20px]"
                  onClick={() => {
                    setShowContainer((prev) => {
                      return {
                        ...prev,
                        container: true,
                      };
                    });
                  }}
                >
                  Upload Image
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <Link to="/signup">
              <Button
                text={'Batch Upload >>>>>'}
                className=" text-white bg-[#FF6C00] hover:bg-[#FF9D55] disabled:bg-[#FF9D55] disabled:cursor-not-allowed flex flex-row justify-end items-center w-[200] 
            rounded-lg gap-[8px] py-[16px] px-[24px] font-sans
           font-normal text-[14px] leading-[20px] ml-auto mt-7 mr-5"
              />
            </Link>

            <ImageUpload demo />
          </>
        )}
      </section>
    </motion.div>
  );
};

export default ExternalPage;
