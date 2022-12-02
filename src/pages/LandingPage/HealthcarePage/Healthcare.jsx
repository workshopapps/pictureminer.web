import React from 'react';
import DemoPage from '../../../features/demo/DemoPages';
// import ImageContainer from '../../../features/demo/ImageContainer';
import ImageUpload from '../../dashboard/ImageUpload';
import '../../../styles/layout/Ecommerce.scss';

const Healthcare = () => {
  return (
    <div>
      <DemoPage
        heading={'HEALTHCARE'}
        info_heading1={'FIND WHAT YOU ARE LOOKING FOR FASTER'}
        info_description1={
          'Create asset categories such as brand, multimedia, region, or physician portraits to help users find the right content. Alternatively, they can search for and narrow down results to find what they are looking for.'
        }
        info_heading2={'AUTOMATE STEPS IN THE CONTENT LIFECYCLE'}
        info_description2={
          'To streamline your metadata applications, use upload profiles with predefined metadata and integrations. From a single master file. Create common file conversations for presentations, social media,  and other formats'
        }
        info_heading3={'CONNECT PROJECT REQUESTS TO ASSET MANAGEMENT'}
        info_description3={
          'Start projects with a request form, annotate proofs, and see an audit trail of requested changes all in one place. The final assets should then be made available in the DAM system'
        }
      />
      {/* <ImageContainer /> */}

      <section>
        <ImageUpload demo />
      </section>
    </div>
  );
};

export default Healthcare;
