import React from 'react';
import { DocumentUpload } from 'iconsax-react';
import { images } from '../../Constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_text">
        <h1 className="hero_text_heading">
          You Can <span>Convert</span> Your Image to Text<span>.</span>
        </h1>
        <p className="hero_text_paragraph">
          Torzilla offers a simple API that delivers to you structured texts for
          your images anywhere
        </p>
        <img src={images.heroCurve} className="hero_curve" alt="" />
      </div>

      <div className="hero_upload">
        <img
          src={images.addToFolder}
          className="addToFolder"
          alt="Add to folder"
        />
        <p className="hero_upload_text">
          Drop and drop image here or click to upload
        </p>
        <div className="hero_upload_file">
          <div className="upload_icon">
            <DocumentUpload size="32" color="#FF6c00" variant="Outline" />
            <p>Upload Image</p>
          </div>
          <Link to="/landingpage/demo">
            <input
              className="input_file"
              id="upload"
              type="file"
              accept=".png, .svg, .jpg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
