/* eslint-disable no-trailing-spaces */
import React from 'react';
// import ImageContainer from '../../../features/demo/ImageContainer';
import ImageUpload from '../../dashboard/ImageUpload';
import '../../../styles/layout/Ecommerce.scss';

const ExternalPage = () => {
  return (
    <div>
      {/* <ImageContainer /> */}
      <section>
        <ImageUpload />
      </section>
    </div>
  );
};

export default ExternalPage;
