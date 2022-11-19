import React from 'react';
import Card from '../../../components/ui/Card';

const BlogCard = ({ image, imageText, imageTextClassName, text, link }) => {
  return (
    <>
      <Card>
        <div className="relative">
          <img src={image} alt="" className="brightness-50" />
          <a href={link}>
            <p className={`${imageTextClassName}`}>
              {imageText ? imageText : ''}
            </p>
          </a>
        </div>
        <p className="font-medium text-xl text-left mt-3 border-red-900">
          {text}
        </p>
        <a href="#">
          <button className="flex justify-start mt-5 py-4 px-6 text-xl font-bold text-white bg-[#ff6c00] border-2 border-[#FF6C00] rounded-lg mx-0 hover:bg-opacity-[0.5]">
            Read More
          </button>
        </a>
      </Card>
    </>
  );
};

export default BlogCard;
