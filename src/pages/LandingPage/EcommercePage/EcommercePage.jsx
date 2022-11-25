/* eslint-disable no-trailing-spaces */
import React from 'react';
import DemoPage from '../../../features/demo/DemoPages';
import ImageContainer from '../../../features/demo/ImageContainer';
import '../../../styles/layout/Ecommerce.scss';

const EcommercePage = () => {
  return (
    <div>
   <DemoPage 
   heading={'E-commerce'}
   info_heading1={'API SOLUTIONS FOR DIGITAL COMMERCE'} 
   info_description1={'Helping brands grow revenue, improve team efficiency and save costs'} 
   info_heading2={'AUTOMATE YOUR IMAGE CATEGORIZATION PROCESS'}
   info_description2={'Attain control over your enormous image assets with automatic image catogorization and enhance images with corresponding tags to foster image discovery.'}
   info_heading3={'LARGE SCALE PROCESSING'}
   info_description3={' Scale to support millions of product images to create accurate and high-performing Product Listing Pages, Product Detail Pages, shopping experiences.'}
   info_heading4={'CUSTOMIZABLE'}
   info_description4={'Can be used with any of our already predefined categories from various industries and can be trained to learn and recognize custom categories peculiar to your business.'}
   info_heading5={'ENTERPRISE GRADE INTEGRATIONS'}
   info_description5={'Prebuilt API’s and integrations that integrate seamlessly with your existing platforms.'}
   />
   <ImageContainer />
   </div>
  );
};

export default EcommercePage;