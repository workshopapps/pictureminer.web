import React from 'react';

const BlogPage = ({
  blogTitle,
  titleText,
  subheading,
  subheadingText,
  image,
  paragraphText,
  secondParagraphText,
  thirdParagraphText,
}) => {
  return (
    <>
      <div className="max-w-5xl text-xl text-center m-4 my-16 px-10 text-[#060606] bg-white mx-auto">
        <div className="font-bold">
          <h1 className="text-3xl mb-2">{blogTitle}</h1>
          <p>{titleText}</p>
        </div>
        <img src={image} alt="" className="my-10 mx-auto" />
        <p className="mb-4">{paragraphText}</p>
        <p className="mb-4">{secondParagraphText}</p>

        <div className="font-bold">
          <h3 className="text-[2rem] mb-2 mt-10">{subheading}</h3>
          <p className="text-lg text-[#686868] mb-3">{subheadingText}</p>
        </div>
        <p>{thirdParagraphText}</p>
      </div>
    </>
  );
};

export default BlogPage;
