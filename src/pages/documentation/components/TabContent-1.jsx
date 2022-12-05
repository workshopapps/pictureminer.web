import React from 'react';
import { ElementEqual, ArrowRight } from 'iconsax-react';

function TabContent1({ setTabState }) {
  return (
    <div className="">
      <div className="bg-secBlue">
        <div className="container__documentation mx-auto text-white text-center py-20 md:py-28">
          <h1 className="text-xLarge font-bold">Get Started</h1>
          <p className="text-base md:text-medium">
            An overview of how to use and install Discripto
          </p>
        </div>
      </div>
      <div className="mx-8 md:mx-10 lg:mx-20 md:flex md:space-x-8 mt-10 lg:mt-20">
        <div className="md:w-9/12 lg:w-3/5 ">
          <div>
            <h2 className="text-large font-bold">Overview</h2>
            <p className="mt-5 text-normal">
              The Discripto API is a REST API that makes it easy to find and
              retrieve the data you need from an Image, it provides a simplified
              response data structure via JSON payload (eliminating XML).
            </p>
            <ul className="list-disc mt-4 text-normal">
              The Discripto API provides an industry standard solution to:
              <li className="mt-4 ml-4">
                Retrieve the contents of images as a text description of the
                it&apos;s scenery
              </li>
              <li className="ml-4">Check if text prompts exists in images</li>
            </ul>
          </div>
          <div className="mt-16 md:mt-20 lg:mt-[100px]">
            <h2 className="text-large font-bold">
              Benefits of Using Discripto API
            </h2>
            <div className="md:flex md:flex-col mt-5 space-y-5 md:space-y-12 2xl:pr-20">
              <div className="xl:flex xl:item-center xl:justify-between space-y-8 xl:space-y-0">
                <div className="xl:w-[43%]">
                  <h3 className="text-normal font-bold">
                    Get only what you need
                  </h3>
                  <p className="mt-3">
                    Just make a request with image through upload or URL, get
                    back a JSON response containing what you need.
                  </p>
                </div>
                <div className="xl:w-[43%]">
                  <h3 className="text-normal font-bold">
                    Industry standard solutions
                  </h3>
                  <p className="mt-3">
                    Discripto APIs use well-established and robust machine
                    learning algorithms to classify your images.
                  </p>
                </div>
              </div>
              <div className="xl:flex xl:item-center xl:justify-between space-y-8 xl:space-y-0">
                <div className="xl:w-[43%]">
                  <h3 className="text-normal font-bold">Simple to use</h3>
                  <p className="mt-3">
                    You only need to send the image and/or text prompt to get
                    the response.
                  </p>
                </div>
                <div className="xl:w-[43%]">
                  <h3 className="text-normal font-bold">
                    Access to images dashboard
                  </h3>
                  <p className="mt-3">
                    You have access to a dashboard containing all the requests
                    you make for reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-12 2xl:pr-20 ">
            You can find onboarding documentation for the IMDb API on the next
            page - including setting up your AWS Account, signing to the IMDb
            API endpoint, and sample queries to jump-start your integration
          </p>
        </div>

        <div className="hidden md:flex space-x-3 md:w-1/3 lg:w-1/4">
          <ElementEqual />
          <div>
            <h3 className="text-small font-bold text-gray-600">ON THIS PAGE</h3>
            <p className="text-xSmall text-gray-500 tracking-wide mt-3 ">
              Overview
            </p>
            <p className="text-xSmall text-gray-500 tracking-wide mt-2">
              Benefits of Using Discripto API
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:w-[752px] xl:w-[972px] border border-solid border-gray-300 rounded-lg px-6 md:px-10 py-5 mt-16 md:mt-20 lg:mt-24 mb-28 md:mb-56 mx-8 md:mx-10 lg:mx-20">
        <div>
          <p>Next</p>
          <p className="text-mainOrange/90 mt-3">Getting Access to the API</p>
        </div>
        <ArrowRight
          onClick={() => setTabState(2)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default TabContent1;
