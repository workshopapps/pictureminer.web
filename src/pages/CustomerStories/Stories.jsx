import React from 'react';
import CustomerStoriesData from '../../data/CustomerStoriesData';

import StoriesExerpt from './StoriesExerpt';
const Stories = () => {
  const arrayWithoutLast = CustomerStoriesData.slice(0, -1);
  return (
    <div className="flex flex-col gap-7 lg:flex-row mx-4 lg:mx-7">
      {arrayWithoutLast.map((story) => {
        return <StoriesExerpt story={story} key={story.id} />;
      })}
    </div>
  );
};

export default Stories;
