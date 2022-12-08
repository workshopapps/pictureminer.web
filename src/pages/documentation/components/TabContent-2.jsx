import React from 'react';
import { ElementEqual, ArrowRight, ArrowLeft } from 'iconsax-react';

function TabContent2({ setTabState }) {
  return (
    <section className="">
      <div className="bg-secBlue">
        <div className="container__documentation text-white text-center py-20 md:py-28 mx-auto">
          <h1 className="text-xLarge font-bold">Integration</h1>
          <p className="text-base md:text-medium">
            An overview of Discripto’s integration, uses and procedures
          </p>
        </div>
      </div>
      <div className="mx-8 md:mx-10 lg:mx-20 md:flex md:space-x-8 mt-10 lg:mt-20">
        <div className="md:w-9/12 lg:w-3/5 ">
          <div>
            <h2 className="text-large font-bold">Getting Access to the API</h2>
            <p className="mt-5 text-normal">
              To get access to the API, all you need to do is signup for an
              account. Access to the API is automatically allowed with your
              signup credentials, no need for API keys.
            </p>
          </div>
          <div className="mt-16 md:mt-20 lg:mt-[100px]">
            <h2 className="text-large font-bold">Key Concepts</h2>
            <div className="md:flex md:flex-col mt-5 space-y-10 md:space-y-12 2xl:pr-20">
              <div className="space-y-8 ">
                <div className="">
                  <h3 className="text-normal font-bold">API</h3>
                  <p className="mt-3">
                    An API is a way for different software components or systems
                    to communicate with each other. A client component sends
                    HTTP requests to an endpoint/route exposed by the serving
                    component.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-normal font-bold">Endpoint</h3>
                  <p className="mt-3">
                    An endpoint is a URL through which a serving components
                    listens for requests. The endpoints to send your requests to
                    is{' '}
                    <a href="#" className="text-mainOrange/90">
                      discripto.hng.tech
                    </a>
                  </p>
                </div>
              </div>

              <div className="">
                <h3 className="text-normal font-bold">JWT Authentication </h3>
                <p className="mt-3">
                  JWT stands for JSON WEB TOKEN, JWT authentication is a
                  token-based stateless authentication mechanism used to
                  securely exchange information online. This information can be
                  verified and trusted because it is digitally signed. JWTs are
                  signed using a secret with the HMAC algorithm. Once the user
                  is logged in, each subsequent request will include the JWT,
                  allowing the user to access routes, services, and resources
                  that are permitted with that token.
                </p>
              </div>
              <div className="mt-14">
                <h3 className="text-large font-bold">Calling the API</h3>
                <p className="mt-3">
                  We&apos;ve put together some examples on how to call the API
                  using the a CLI (command line interface) and python though any
                  other programming languge would work too. To begin calling the
                  API, you must signup for an account through the website to get
                  access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-6 md:w-1/3 lg:w-1/4">
          <ElementEqual />
          <div>
            <h3 className="text-normal font-bold text-gray-600">
              ON THIS PAGE
            </h3>
            <p className="text-small text-gray-500 tracking-wide mt-3 ">
              Getting Access to the API
            </p>
            <p className="text-small text-gray-500 tracking-wide mt-3">
              Key Concepts
            </p>
            <p className="text-sm text-gray-500 tracking-wide mt-2">API</p>
            <p className="text-sm text-gray-500 tracking-wide mt-2">Endpoint</p>
            <p className="text-sm text-gray-500 tracking-wide mt-2">
              JWT Authentication
            </p>
            <p className="text-small text-gray-500 tracking-wide mt-2">
              Calling the API
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col lg:flex-row lg:items-center mb-28 md:mb-56 mt-8 md:mt-20 lg:mt-24 space-y-12 lg:space-y-0">
        <div className="flex items-center justify-between md:w-[497px] border border-solid border-gray-300 rounded-lg px-6 md:px-10 py-5 mx-8 md:mx-10 lg:mx-20">
          <ArrowLeft
            onClick={() => setTabState(1)}
            style={{ cursor: 'pointer' }}
          />
          <div>
            <p>Previous</p>
            <p className="text-mainOrange/90 mt-3">Getting Access to the API</p>
          </div>
        </div>
        {/* <div className="flex items-center justify-between md:w-[497px] border border-solid border-gray-300 rounded-lg px-6 md:px-10 py-5 mx-8 md:mx-10 lg:mx-20">
          <div>
            <p>Next</p>
            <p className="text-mainOrange/90 mt-3">Examples of Using the CLI</p>
          </div>
          <ArrowRight
            onClick={() => setTabState(2)}
            style={{ cursor: 'pointer' }}
          />
        </div> */}
      </div>
    </section>
  );
}

export default TabContent2;
