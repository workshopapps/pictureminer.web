import React from 'react';
import CustomerStoriesData from '../../data/CustomerStoriesData';

import StoriesExerpt from './StoriesExerpt';
const Stories = () => {
  return (
    <div className="flex flex-col gap-7">
      {CustomerStoriesData.map((story) => {
        return <StoriesExerpt story={story} key={story.id} />;
      })}
    </div>
  );
};

export default Stories;
