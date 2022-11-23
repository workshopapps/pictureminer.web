import React from 'react';
import { images } from '../../Constants';

const Uses = () => {
  return (
    <section className="uses">
      <div className="uses_intro">
        <h1 className="uses_heading">
          Why use <span>Minergram?</span>
        </h1>
        <p className="uses_paragraph">
          Get accurate, fast and descriptive text for your images.
        </p>
      </div>

      <div className="uses_benefits">
        <div className="uses_benefit">
          <img
            src={images.message}
            className="benefit_icon"
            alt="message icon"
          />
          <h3 className="benefit_heading">Automated Answers</h3>
          <p className="benefit_paragraph">
            Real-time answers to your requests are available immediately you
            send in your request.
          </p>
        </div>

        <div className="uses_benefit">
          <img
            src={images.userTick}
            className="benefit_icon"
            alt="usertick icon"
          />
          <h3 className="benefit_heading">Easy to Use</h3>
          <p className="benefit_paragraph">
            Our API is easy to use and gets you up to task.
          </p>
        </div>

        <div className="uses_benefit">
          <img src={images.book} className="benefit_icon" alt="book icon" />
          <h3 className="benefit_heading">Accurate Test Solution</h3>
          <p className="benefit_paragraph">
            Direct integration to all data source of information.
          </p>
        </div>

        <div className="uses_benefit">
          <img
            src={images.searchStatus}
            className="benefit_icon"
            alt="searchstatus icon"
          />
          <h3 className="benefit_heading">Precise Search</h3>
          <p className="benefit_paragraph">
            With precision, you get your solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Uses;
