import React from 'react';

const BlogPage = ({
  blogTitle,
  titleText,
  subheading,
  subheadingText,
  image,
  paragraphText,
}) => {
  return (
    <>
      <div className="max-w-lg text-xl text-center m-4 text-[#060606] bg-white">
        <div className="font-bold">
          <h1 className="text-3xl mb-2">{blogTitle}</h1>
          <p>{titleText}</p>
        </div>
        <img src={image} alt="" className="my-4" />
        <p className="mb-4">{paragraphText}</p>
        <p className="mb-4">{paragraphText}</p>

        <div className="font-bold">
          <h3 className="text-[2rem] mb-2">{subheading}</h3>
          <p>{subheadingText}</p>
        </div>
        <p>{paragraphText}</p>
      </div>
    </>
  );
};

export default BlogPage;
