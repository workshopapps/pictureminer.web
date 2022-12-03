import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';
import { ArrowRight } from 'iconsax-react';
import icon from './assets/icon.png';
// import ImageMining from '../../../assets/documentationImages/imageMining.webp';
// import DefiningImage from '../../../assets/documentationImages/definingImages.webp';
// import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const GettingStarted = () => {
  return (
    <div>
      <DocumentNav />
      <DocumentationHero
        headerText="Getting Started"
        paragraphText="An overview of Discripto, how to download and use, basic templates and examples, and more."
      />

      <section
        className="getting-started_introductionContent px-16 py-10"
        id="introduction"
      >
        <div className="flex flex-row mb-4">
          {/* <h1 className="getting-started_title">Introduction</h1>
          <div className="getting-started_underline" />

          <p>
            Get started with Discripto and learn by exploring interactive
            examples.
          </p> */}
          <div
            className="my-8 flex flex-col gap-5 justify-between"
            id="overview"
          >
            <h1 className="font-bold text-3xl mb-2">Overview</h1>
            <div className="text-[#434343]">
              <p className="mb-3 md:w-[50%]">
                Discripto (currently v3.3.7) has a few easy ways to quickly get
                started, each one appealing to a different skill level and the
                Discripto API is a REST API that makes it easy to find and
                retrieve the data you need from an Image, it provides a
                simplified response data structure via JSON payload (eliminating
                XML).
              </p>
              <p className="mb-2">
                The Discripto API provides an industry standard solution to:
              </p>
              <ul>
                <li>
                  Retrieve the contents of images as a text description of the
                  it&apos;s scenery.
                </li>
                <li>Check if text prompts exists in images use case.</li>
              </ul>
            </div>
          </div>

          <div className="hidden mt-8 text-[#434343] md:w-full md:flex md:flex-row md:gap-2">
            <img src={icon} alt="icon" className="w-8 h-8" />
            <div>
              <p className="font-bold mb-1">ON THIS PAGE</p>

              <div className="text-sm">
                <ul>
                  <li>
                    <a href="#overview" className="mb-1">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#benefits">Benefits of Using Discripto API</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="benefits">
          <h1 className="font-bold text-3xl mb-4">
            Benefits of Using Discripto API
          </h1>
          <div className="flex items-center gap-7 lg:gap-10 flex-col md:flex-row md:flex-wrap mb-6">
            <div className="mb-3 w-full md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">Get only what you need</h3>
              <p className="text-[#686868]">
                Just make a request with image through upload or URL, get back a
                JSON response containing what you need.
              </p>
            </div>
            <div className="mb-3 w-full md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">Simple to use</h3>
              <p className="text-[#686868]">
                You only need to send the image and/or text prompt to get the
                response.
              </p>
            </div>
            <div className="mb-3 w-full md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">
                Idustry standard solutions
              </h3>
              <p className="text-[#686868]">
                Discripto APIs use well-established and robust machine learning
                algorithms to classify your images.
              </p>
            </div>
            <div className="mb-3 w-full md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">
                Access to images dashboard
              </h3>
              <p className="text-[#686868]">
                You have access to a dashboard containing all the requests you
                make for reference.
              </p>
            </div>
          </div>
          <p className="md:max-w-[80%] font-medium">
            You can find onboarding documentation for the IMDb API on the next
            page - including setting up your AWS Account, signing to the IMDb
            API endpoint, and sample queries to jump-start your integration.
          </p>
        </div>

        <div
          className="border border-[#B4B4B4] rounded-[8px] mt-6 px-4 py-2 flex fex-row justify-between items-center md:w-1/2
"
        >
          <div>
            <h3>Next</h3>
            <a>
              <p className="text-[#FF842B] font-bold mt-1">
                Getting access to the API
              </p>
            </a>
          </div>
          <ArrowRight />
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;
