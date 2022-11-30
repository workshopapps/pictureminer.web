import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'iconsax-react';

const MinergramDemo = (props) => {
  return (
    <section className="DemoHero">
      <div className="back_icon">
        <button onClick={props.action} className="icon">
          <ArrowLeft />
        </button>
      </div>
      <h3 className="heading">Discripto Demo</h3>
      <div className="content">
        <div className="content_text">
          <div className="image_info">
            <h4 className="info_heading">Image Description</h4>
            <p className="info_description">{props.description}</p>
          </div>

          <div className="documentation_btn">
            <Link to="/documentation" className="documentation_text">
              See Our Documentation
            </Link>
          </div>
        </div>
        <div className="content_image rounded">
          <img
            src={props.imgSrc}
            alt="demo"
            className=" object-cover rounded w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MinergramDemo;
