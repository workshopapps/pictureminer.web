/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';

import ImageUpload from '../../dashboard/ImageUpload';
import '../../../styles/layout/Ecommerce.scss';
import YouTube from 'react-youtube';
import Button from '../../../components/Button';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const ExternalPage = () => {
  const [showContainer, setShowContainer] = useState({
    button: false,
    container: false,
  });
  return (
    <div>
      {/* <ImageContainer /> */}
      <section className="">
        {!showContainer.container ? (
          <div className="my-9 flex align-center">
            <YouTube
              videoId="DXCCE_l2SdM"
              opts={opts}
              className="mx-auto "
              onEnd={() =>
                setShowContainer((prev) => {
                  return { ...prev, button: true };
                })
              }
            />
            {showContainer.button ? (
              <Button
                text={'Upload Image'}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-[#FF6C00] hover:bg-[#FF9D55] disabled:bg-[#FF9D55] disabled:cursor-not-allowed flex flex-row justify-center items-center w-[200] 
            rounded-lg gap-[8px] py-[16px] px-[24px] font-sans
           font-normal text-[14px] leading-[20px]"
                onClick={() => {
                  setShowContainer((prev) => {
                    return {
                      ...prev,
                      container: true,
                    };
                  });
                }}
              />
            ) : null}
          </div>
        ) : (
          <ImageUpload />
        )}
      </section>
    </div>
  );
};

export default ExternalPage;
