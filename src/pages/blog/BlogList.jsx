import React from 'react';
import BlogCard from './components/BlogCard';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';

const BlogList = () => {
  return (
    <>
      <div className="text-center w-3/4 mx-auto my-24">
        <div className="max-w-2xl mb-8 mx-auto">
          <h1 className="text-4xl font-semibold mb-3">Our Blog</h1>
          <p className="text-xl leading-relaxed font-medium">
            Launching our interactive image recognition API documentation with
            ozilla. You can use API to perform high-volume reverse image search
            manually in your browser.
          </p>
        </div>
        <form>
          <div className="w-full max-w-[302px] h-[44px] rounded-[8px] flex mb-20 mx-auto">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 text-lg h-[40px] flex items-center text-[sm] leading-[20px] mt-3 pl-3 outline-none border-2 border-[#ccc] border-r-0"
              style={{
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
            <button
              type="submit"
              className="flex-1 h-[40px] flex justify-center items-center text-lg border border-[#FF6C00] font-medium text-white bg-[#FF6C00] mt-3 rounded-lg rounded-l-none"
              style={{
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="flex flex-col justify-center gap-12 md:flex md:flex-row md:flex-wrap md:gap-y-10 md:gap-x-20 lg:w-full lg:gap-x-10">
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image1}
              imageText="The Future of the Tozilla Chrome Extention"
              imageTextClassName="absolute bottom-5 z-50 ml-4 text-white text-start font-bold text-2xl md:text-3xl"
              text="One of the easiest  and most popular way to use tozilla to search the web is with our offical browser extension. Image search is
              our passion."
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image2}
              imageText="Introducing profile page for all Tozilla APIs"
              imageTextClassName="absolute bottom-5 z-50 ml-4 text-white text-start font-bold text-2xl md:text-3xl"
              text="We are excited to launch our  client profile pages and anlytics for all our tozilla  APIs.
              You can use the APIS analytics page to  search engine."
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image3}
              imageText="How to sign up for the Tozilla API"
              imageTextClassName="absolute bottom-5 z-50 ml-4 text-white text-start font-bold text-2xl md:text-3xl"
              text="New feature to the Tozilla API: The ability to automatically top up your
              account so you never run out of searches. Changes how you sign up for the tozilla API"
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image4}
              imageText="How to sign up for the Tozilla API"
              imageTextClassName="absolute bottom-5 z-50 ml-4 text-white text-start font-bold text-2xl md:text-3xl"
              text="New feature to the Tozilla API: The ability to automatically top up your
              account so you never run out of searches. Changes how you sign up for the tozilla API"
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image5}
              text="How to verify item images with Tozilla"
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image6}
              text="Happy Holiday from all of
              us at Tozilla."
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image7}
              text="Where can i find Copyright
              free images?"
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image8}
              text="How to find high resolution
              images with Tozilla."
            />
          </div>
          <div className=" border w-[90%] md:w-[45%] lg:w-[25%] p-4 text-xs mx-auto md:mx-0">
            <BlogCard
              image={image9}
              text="Introducing new pricing for
              commercial reverse image search."
            />
          </div>
        </div>

        <a href="#">
          <button className="mt-14 py-4 px-14 text-xl font-bold text-white bg-[#ff6c00] border-2 border-[#FF6C00] rounded-lg hover:bg-opacity-[0.7] hover:border-opacity-5 mx-auto">
            Learn More
          </button>
        </a>
      </div>
    </>
  );
};

export default BlogList;
