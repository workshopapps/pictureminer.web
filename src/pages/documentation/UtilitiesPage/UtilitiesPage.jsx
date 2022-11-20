import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';

import './UtilitiesPage.scss';
import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const UtilitiesPage = () => {
  return (
    <div className="utilities_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Utilities"
        paragraphText="An overview of Minergram's Utility"
      />
      <section className="utilities_introductionContent" id="utilities">
        <div className="utilities_mainContent">
          <h1 className="utilities_title">Utilities</h1>
          <div className="utilities_underline"></div>
          <p className="utilities_paragraph">
            Get started with Minergram’s Utility
          </p>
          <div className="utilities_overview" id="overview">
            <h1>Utilities</h1>
            <p className="mb-3">
              The Minergram API is organized around REST. Our API has
              predictable resource-oriented URLs,accepts form-encoded request
              bodies, returns JSON-encoded responses, and uses standard HTTP
              response codes, authentication, and verbs.
            </p>
            <p className="mb-3">
              The Minergram API doesnt support bulk updates. You can work on
              only one object per request.The Minergram API differs for every
              account as we release new versions and tailor functionality. Log
              in to see docs customized to your version of the API, with your
              test key and data. Get started with Tozilla’s Utility
            </p>
          </div>
          <div className="utilities_overview" id="overview">
            <h1>Utilities</h1>
            <p className="mb-3">
              The Tozilla API is organized around REST. Our API has predictable
              resource-oriented URLs,accepts form-encoded request bodies,
              returns JSON-encoded responses, and uses standard HTTP response
              codes, authentication, and verbs.
            </p>
            <p className="mb-3">
              The Tozilla API doesnt support bulk updates. You can work on only
              one object per request.The Tozilla API differs for every account
              as we release new versions and tailor functionality. Log in to see
              docs customized to your version of the API, with your test key and
              data.
            </p>
            <p className="mb-3">
              You can use the Stripe API in test mode, which doesnt affect your
              live data or interact with the banking networks. The API key you
              use to check the request determines whether the request is live
              mode or test mode.
            </p>
          </div>
        </div>

        <DocumentationSidebar
          sectionIds={['utilities']}
          linkTexts={['Utilities']}
        />
      </section>
    </div>
  );
};

export default UtilitiesPage;