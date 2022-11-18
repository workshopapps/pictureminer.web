import React, { useState } from 'react';
import { carouselData } from '../../data/CustomerStoriesData';
import PrevIcon from '../../assets/PrevIcon';
import NextIcon from '../../assets/NextIcon';
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const length = carouselData.length;

  let index = current;
  let data = carouselData[index];
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <PrevIcon onClick={prevSlide} />
      <div className="text-lg font-bold flex justify-center align-middle text-center w-9/12 mx-auto">
        {data.text}
      </div>
      <NextIcon onClick={nextSlide} />
    </div>
  );
};

export default Carousel;
