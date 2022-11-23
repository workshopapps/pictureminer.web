import React from 'react';
import Card from '../../../components/ui/Card';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, imageText, imageTextClassName, text, link }) => {
  return (
    <>
      <Card>
        <div className="relative md:w-full">
          <img
            src={image}
            alt=""
            className={imageText ? 'brightness-50' : ''}
          />
          <a href={link}>
            <p className={`${imageTextClassName}`}>
              {imageText ? imageText : ''}
            </p>
          </a>
        </div>
        <p className="font-medium text-sm text-left mt-3 px-5">{text}</p>
        <Link to="/blog-page">
          <button className="flex justify-start my-5 py-2 px-4 text-sm font-bold text-white bg-[#ff6c00] border-2 border-[#FF6C00] rounded-lg mx-0 hover:bg-opacity-[0.5] hover:border-opacity-5">
            Read More
          </button>
        </Link>
      </Card>
    </>
  );
};

export default BlogCard;
