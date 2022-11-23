import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';

import './ExamplePage.scss';
import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const ExamplePage = () => {
  return (
    <div className="example_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Examples"
        paragraphText="An overview of Minergram's usage with examples"
      />
      <section className="example_introductionContent" id="example">
        <div className="example_mainContent">
          <h1 className="example_title">Examples</h1>
          <div className="example_underline"></div>
          <p className="example_paragraph">
            Get started with Minergram’s usage with examples
          </p>
          <div className="example_overview" id="overview">
            <h1>Examples</h1>
            <p className="mb-3">
              The Minergram API is organized around REST. Our API has
              predictable resource-oriented URLs,accepts form-encoded request
              bodies, returns JSON-encoded responses, and uses standard HTTP
              response codes, authentication, and verbs.
            </p>
            <p className="mb-3">
              You can use the Stripe API in test mode, which doesnt affect your
              live data or interact with the banking networks. The API key you
              use to check the request determines whether the request is live
              mode or test mode.
            </p>
            <p className="mb-3">
              The Minergram API doesnt support bulk updates. You can work on
              only one object per request.The Minergram API differs for every
              account as we release new versions and tailor functionality. Log
              in to see docs customized to your version of the API, with your
              test key and data. Get started with Tozilla’s usage with examples
            </p>
          </div>
          <div className="example_overview" id="overview">
            <h1>Examples</h1>
            <p className="mb-3">
              The Tozilla API is organized around REST. Our API has predictable
              resource-oriented URLs,accepts form-encoded request bodies,
              returns JSON-encoded responses, and uses standard HTTP response
              codes, authentication, and verbs.
            </p>
            <p className="mb-3">
              You can use the Stripe API in test mode, which doesnt affect your
              live data or interact with the banking networks. The API key you
              use to check the request determines whether the request is live
              mode or test mode.
            </p>
            <p className="mb-3">
              The Tozilla API doesnt support bulk updates. You can work on only
              one object per request.The Tozilla API differs for every account
              as we release new versions and tailor functionality. Log in to see
              docs customized to your version of the API, with your test key and
              data.
            </p>
          </div>
        </div>

        <DocumentationSidebar
          sectionIds={['example']}
          linkTexts={['Examples']}
        />
      </section>
    </div>
  );
};

export default ExamplePage;