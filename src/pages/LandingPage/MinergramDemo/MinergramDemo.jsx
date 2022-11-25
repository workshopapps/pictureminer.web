import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'iconsax-react';
import { images } from '../../../Constants';

const MinergramDemo = () => {
  return (
    <section className="DemoHero">
      <div className="back_icon">
        <Link to="/" className="icon">
          <ArrowLeft />
        </Link>
      </div>
      <h3 className="heading">Minergram Demo</h3>
      <div className="content">
        <div className="content_text">
          <div className="image_info">
            <h4 className="info_heading">Image Description</h4>
            <p className="info_description">
              This is the pool area of Eko hotels and suites. In this image,
              there is a pool with lounging chairs and shades before it,
              surrounded by other hotel areas and trees.
            </p>
          </div>
          <div className="more_info">
            <h3 className="info_heading">More Image Information</h3>
            <p className="info_description">
              <p className="text-lg">
                {' '}
                <strong>Question:</strong> Where was this image taken?
              </p>
              <p className="text-lg">
                Answer: Eko hotels and suites, Lagos state
              </p>
            </p>
            <div className="info_description">
              <p className="text-lg">
                <strong>Question:</strong> What objects are on this image?
              </p>
              <p className="text-lg">Answer: pool, shades, trees, chairs</p>
            </div>
          </div>
          <div className="documentation_btn">
            <Link to="/documentation" className="documentation_text">
              See Our Documentation
            </Link>
          </div>
        </div>
        <div className="content_image">
          <img src={images.demo} alt="demo" />
        </div>
      </div>
    </section>
  );
};

export default MinergramDemo;
