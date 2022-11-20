/* eslint-disable indent */
import React from 'react';
import { privacypolicy } from './datalist';

const Privacytitle = () => {
  return (
    <div className="px-7 md:px-20 md:mb-10 md:px-3">
      <div className="border-dashed mb-7 border-b-2">
        <h3 className="text-titlegrey text-2xl md:text-6xl md:pb-3 font-bold">
          {privacypolicy}
        </h3>
        <p className="text-subgrey pt-5 pb-5 md:pb-10 text-base md:text-xl">
          Last updated on October 2022
        </p>
      </div>
    </div>
  );
};

export default Privacytitle;
