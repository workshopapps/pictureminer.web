import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Constants';

const Works = () => {
  return (
    <section className="works">
      <div className="works_content">
        <h1 className="works_heading">How Minergrap Works</h1>
        <div className="works_content_body">
          <img src={images.works} className="works_image" alt="works image" />
          <div className="works_text">
            <div className="sub_paragraph">
              <h3 className="works_sub">
                Get the data you need from your images
              </h3>
              <p className="works_paragraph">
                Our API gives you structured data from over millions of sources
                for images you upload.
              </p>
            </div>

            <Link to="/how-it-works" className="works_btn">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
