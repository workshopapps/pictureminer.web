import React from 'react';
import HeaderText from './HeaderText';
import Stories from './Stories';
import Carousel from './Carousel';
import CustomerStoriesData from '../../data/CustomerStoriesData';
import StoriesExerpt from './StoriesExerpt';
import GettingStarted from './GettingStarted';

const index = () => {
  const filterToGetFirstandLast = CustomerStoriesData.filter(
    (story) => story.id === 1 || story.id === 4
  );

  const lastarray = CustomerStoriesData.filter((story) => {
    return story.id === 4;
  });

  return (
    <div>
      <HeaderText />
      <Stories />
      <Carousel />
      <div className="md:hidden">
        {lastarray.map((story) => {
          return <StoriesExerpt story={story} key={story.id} />;
        })}
      </div>
      <div className="hidden md:flex justify-center lg:hidden mx-7">
        {filterToGetFirstandLast.map((story) => {
          return <StoriesExerpt story={story} key={story.id} />;
        })}
      </div>

      <div className="hidden lg:block">
        <Stories />
      </div>

      <GettingStarted />
    </div>
  );
};

export default index;
