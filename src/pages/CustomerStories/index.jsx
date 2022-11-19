import React from 'react';
import HeaderText from './HeaderText';
import Stories from './Stories';
import Carousel from './Carousel';
import CustomerStoriesData from '../../data/CustomerStoriesData';
import StoriesExerpt from './StoriesExerpt';
const index = () => {
  const lastarray = CustomerStoriesData.slice(-1);
  console.log(lastarray);
  return (
    <div>
      <HeaderText />
      <Stories />
      <Carousel />
      {lastarray.map((story) => {
        return <StoriesExerpt story={story} key={story.id} />;
      })}
    </div>
  );
};

export default index;
