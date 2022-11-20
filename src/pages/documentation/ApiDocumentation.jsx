import React from 'react';
import DocumentationHero from '../../features/documentation/components/DocumentationHero';
import DocumentationSidebar from '../../features/documentation/components/DocumentationSidebar';
import DocumentNav from '../../features/documentation/components/DocumentNav';

export default function ApiDocumentation() {
  return (
    <div className="font-axiforma ">
      <DocumentNav />
      <DocumentationHero
        headerText="API Documentation"
        paragraphText="An overview of Minergram's API , Authentication, Errors and Metadata"
      />
      <div className="bg-[#FAFAFB] hidden sm:block">
        <p className=" text-[#061D33] py-4 px-10">Documentation/API</p>
      </div>
      <div className="flex justify-between items-start py-4 px-10">
        <div className="w-[100%] sm:w-[60%] md:w-[80%]  ">
          <section id="introduction">
            <h2 className="text-[#051626] text-[30px] font-medium leading-[50px] mt-6 sm:mt-4">
              Introduction
            </h2>
            <hr className="my-4 hidden sm:block" />
            <p className="text-[16px] text-[#092C4C] leading-[35px] hidden sm:block">
              Get started with Minergram API and explore various benefits and
              uses
            </p>
          </section>
          <section id="overview" className="py-6 sm:py-12">
            <h2 className="text-[#1D1D1D] text-[24px] font-medium leading-[42px] hidden sm:block">
              Overview
            </h2>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              The Minergram API is organized around REST. Our API has
              predictable resource oriented URLs, accepts form-encoded request
              bodies, returns JSON-encoded responses, and uses standard HTTP
              response codes, authentication, and verbs.
            </p>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              You can use the Stripe API in test mode, which does&apos;nt affect
              your live data or interact with the banking networks. The API key
              you use to authenticate the request determines whether the request
              is live mode or test mode.
            </p>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              The Minergram API does&apos;nt support bulk updates. You can work
              on only one object per request. The Minergram API differs for
              every account as we release new versions and tailor functionality.
              Log in to see docs customized to your version of the API,
            </p>
          </section>
          <section id="authentication" className="py-6 sm:py-12">
            <h2 className="text-[#1D1D1D] text-[30px] font-medium leading-[42px]">
              Authentication
            </h2>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              The Minergram API uses API keys to authenticate requests. You can
              view and manage your API keys in the Minergram Dashboard.
            </p>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              Authentication to the API is performed via HTTP Basic Auth.
              Provide your API key as the basic auth username value. You do not
              need to provide a password.
            </p>
          </section>
          <section id="errors" className="py-6 sm:py-12">
            <h2 className="text-[#1D1D1D] text-[30px] font-medium leading-[42px]">
              Errors
            </h2>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              Minergram uses conventional HTTP response codes to indicate the
              success or failure of an API request. In general: Codes in the 2xx
              range indicate success. Codes in the 4xx range indicate an error
              that failed given the information provided (e.g., a required
              parameter was omitted, a charge failed, etc.). Codes in the 5xx
              range indicate an error with Stripe&apos;s servers (these are
              rare).
            </p>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              Some 4xx errors that could be handled programmatically (e.g., a
              card is declined) include an error code that briefly explains the
              error reported.
            </p>
          </section>
          <section id="metadata" className="py-6 sm:py-12">
            <h2 className="text-[#1D1D1D] text-[30px] font-medium leading-[42px]">
              Metadata
            </h2>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              Updateable Minergram objects—including Account, Charge, Customer,
              PaymentIntent, Subscription, Refund and Transfer—have a metadata
              parameter. You can use this parameter to attach key-value data to
              these Minergram objects.
            </p>
            <p className="mt-6 sm:mt-12 leading-[30px] text-[16px] text-[#1D1D1D]">
              Metadata is useful for storing additional, structured information
              on an object. As an example, you could store your user&apos;s full
              name and corresponding unique identifier from your system on a
              Minergram Customer object. Metadata is not used by Minergram—for
              example, not used to authorize or decline a charge—and won&apos;t
              be seen by your users unless you choose to show it to them.
            </p>
          </section>
        </div>
        <DocumentationSidebar
          className="hidden sm:block"
          sectionIds={['introduction', 'authentication', 'errors', 'metadata']}
          linkTexts={['Introduction', 'Authentication', 'Errors', 'Metadata']}
        />
      </div>
    </div>
  );
}
