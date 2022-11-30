import React from 'react';
import { images } from '../../Constants';
import '../../styles/layout/Ecommerce.scss';

const DemoPage = ({
  heading,
  info_heading1,
  info_heading2,
  info_heading3,
  info_heading4,
  info_heading5,
  info_description1,
  info_description2,
  info_description3,
  info_description4,
  info_description5,
}) => {
  return (
    <div className="pt-10 ">
      <h3 className="ecommerce_heading">{heading}</h3>
      <section className="Ecommerce">
        <div className="content">
          <div className="content_text">
            <div className="ecommerce_info">
              <h4 className="info_heading">{info_heading1}</h4>
              <p className="info_description">{info_description1}</p>
            </div>
            <div className="ecommerce_info">
              <h4 className="info_heading">{info_heading2}</h4>
              <p className="info_description">{info_description2}</p>
            </div>
            <div className="ecommer_info">
              <h4 className="info_heading">{info_heading3}</h4>
              <p className="info_description">{info_description3}</p>
            </div>
            <div className="ecommerce_info">
              <h4 className="info_heading">{info_heading4}</h4>
              <p className="info_description">{info_description4}</p>
            </div>
            <div className="ecommerce_info">
              <h4 className="info_heading">{info_heading5}</h4>
              <p className="info_description">{info_description5}</p>
            </div>
          </div>
          <div className="content_image">
            <img src={images.ecommerceImage} alt="demo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
