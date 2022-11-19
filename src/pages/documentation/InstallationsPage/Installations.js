import React from 'react';

import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';
import DocumentNav from '../../../features/documentation/components/DocumentNav';
import InstallationLibraryImage from '../.../../../../assets/documentationImages/InstallationsLibraries.png';
import InstallationTorzillaLite from '../.../../../../assets/documentationImages/InstallationTorzillaLite.png';
import './installations.scss';
const Installations = () => {
  return (
    <div className="installation_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Installations"
        paragraphText="Steps and procedures to install the Tozillla API."
      />

      <section className="installation_introductionContent" id="installation">
        <div className="installation_mainContent">
          <h1 className="installation_title">Installation</h1>
          <div className="installation_underline" />

          <p>
            Get started with Tozilla and learn by exploring interactive
            examples.
          </p>
          <div className="installation_component" id="components">
            <h1>Components</h1>
            <p>
              Torzilla (currently v3.3.7) has a few easy ways to quickly get
              started, each one appealing to a different skill level and use
              case. Read through to see what suits your particular needs.
            </p>

            <div className="installation_component_subtext">
              <h3>Viola-Jones Algorithm</h3>
              <p>
                A widely-used facial recognition algorithm from pre-CNN
                (Convolutional Neural Network) times, Viola-Jones works by
                scanning faces and extracting features that are then passed
                through a boosting classifier. This, in turn, generates a number
                of boosted classifiers that are used to check test images. For a
                successful match to be found, a test image must generate a
                positive result from each of these classifiers.
              </p>
            </div>
            <div className="installation_component_subtext">
              <h3>Bag of feature models</h3>
              <p>
                Bag of feature Models A widely-used facial recognition algorithm
                from pre-CNN (Convolutional Neural Network) times, Viola-Jones
                works by scanning faces and extracting features that are then
                passed through a boosting classifier. This, in turn, generates a
                number of boosted classifiers that are used to check test
                images. For a successful match to be found, a test image must
                generate a positive result from each of these classifiers.
              </p>
            </div>
          </div>

          <section className="installation_section" id="libraries">
            <h3>Libraries</h3>
            <p style={{ paddingLeft: '3px' }}>
              Torzilla (currently v3.3.7) has a few easy ways to quickly get
              started, each one appealing to a different skill level and use
              case. Read through to see what suits your particular needs.
            </p>
            <img src={InstallationLibraryImage} alt="Image Mining" />
          </section>

          <section className="installation_section" id="procedures">
            <h3>Procedures</h3>
            <p>
              Torzilla (currently v3.3.7) has a few easy ways to quickly get
              started, each one appealing to a different skill level and use
              case. Read through to see what suits your particular needs.
            </p>
          </section>
          <section className="installation_section" id="torzillaLite">
            <h3>Tozilla Lite</h3>
            <p>
              Recognise and mine images with Torzilla. each one appealing to a
              different skill level and use case. Read through to see what suits
              your particular needs.
            </p>
            <img
              src={InstallationTorzillaLite}
              alt="Torzillalite Lite Process"
            />
          </section>
        </div>
        <DocumentationSidebar
          sectionIds={[
            'installation',
            'components',
            'libraries',
            'procedures',
            'torzillaLite',
          ]}
          linkTexts={[
            'Installation',
            ' Components',
            'Libraries',
            ' Procedures',
            ' Torzilla Lite',
          ]}
        />
      </section>
    </div>
  );
};

export default Installations;
