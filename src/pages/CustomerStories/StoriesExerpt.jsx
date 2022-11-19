import React from 'react';
import Card from '../../components/ui/Card';
const StoriesExerpt = ({ story }) => {
  return (
    <Card>
      <div className="flex gap-3 flex-col">
        <img
          src={story.image}
          alt="image"
          className="
      object-cover  h-[224px] w-[396px] lg:w-auto rounded-t-lg"
        />

        <div
          className="
      flex flex-col gap-2 p-4 rounded-b-lg bg-white

      "
        >
          <a
            className="font-bold
          hover:text-orange-400

          "
            href="#"
          >
            {' '}
            {story.headline}
          </a>

          <div className="lg:text-base lg:tracking-wide">
            {story.description}
          </div>
        </div>
        <a
          href="#"
          className=" hover:text-orange-400
      flex  items-center text-[#434343] gap-2 p-4 w-[150px] h-[48px] lg:text-lg font-semibold  underline text-base font-medium leading-[24px] "
        >
          Read story
        </a>
      </div>
    </Card>
  );
};

export default StoriesExerpt;
