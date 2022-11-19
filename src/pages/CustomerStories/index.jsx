import React from 'react';
import HeaderText from './HeaderText';
import Stories from './Stories';
import Carousel from './Carousel';
import CustomerStoriesData from '../../data/CustomerStoriesData';
import StoriesExerpt from './StoriesExerpt';
import GettingStarted from './GettingStarted';
const index = () => {
  const lastarray = CustomerStoriesData.slice(-1);
  return (
    <div>
      <HeaderText />
      <Stories />
      <Carousel />
      <div>
        {lastarray.map((story) => {
          return <StoriesExerpt story={story} key={story.id} />;
        })}
      </div>

      <GettingStarted />
    </div>
  );
};

export default index;
