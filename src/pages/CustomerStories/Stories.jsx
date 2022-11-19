import React from 'react';
import CustomerStoriesData from '../../data/CustomerStoriesData';

import StoriesExerpt from './StoriesExerpt';
const Stories = () => {
  const arrayWithoutLastandfive = CustomerStoriesData.filter((story) => {
    return story.id !== 4 && story.id !== 5;
  });

  const arrayWithoutfour = CustomerStoriesData.filter((story) => {
    return story.id !== 4;
  });
  return (
    <>
      <div className="flex flex-col gap-7   lg:flex md:hidden lg:flex-nowrap md:justify-center md:flex-row mx-4 lg:mx-7 lg:mb-40">
        {arrayWithoutLastandfive.map((story) => {
          return <StoriesExerpt story={story} key={story.id} />;
        })}
      </div>
      <div className="flex hidden flex-col gap-7 xl:gap-3 md:flex-wrap lg:hidden md:flex lg:flex-nowrap md:justify-center md:flex-row mx-4 lg:mx-7 lg:mb-40">
        {arrayWithoutfour.map((story) => {
          return <StoriesExerpt story={story} key={story.id} />;
        })}
      </div>
    </>
  );
};

export default Stories;
