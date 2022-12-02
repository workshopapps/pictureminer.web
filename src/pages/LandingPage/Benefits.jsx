import React from 'react';
import style from '../../styles/layout/Benefits.module.scss';
const Benefits = () => {
  return (
    <div className={style.container}>
      <h1>
        Benefits We <span style={{ color: '#FF6C00' }}>Provide</span>
      </h1>

      <div className={style.cardWrapper}>
        <div>
          <h3>Classification & categorization</h3>
          <p>
            Discripto is the first and only app that allows you to classify and
            categorize your photos in a faster, easier and more efficient way.
            With Discripto, you don&apos;t have to spend time laboriously
            categorizing thousands of photos. Discripto does it all for you!
          </p>
        </div>
        <div>
          <h3>Can use to detect image similarity</h3>
          <p>
            Discripto is a tool that helps you detect image similarity. You can
            quickly compare two or more images and find the similarities and
            differences between them. This is a great tool for designer
            agencies, and or companies who compare images in large scale.
          </p>
        </div>
        <div>
          <h3>Image query</h3>
          <p>
            With our API recognition, you can ask questions about the images and
            our API will return well-structured answers. We make it easy for you
            to integrate image recognition into your applications.
          </p>
        </div>
        <div>
          <h3>Seamless integration with your website</h3>
          <p>
            Discripto is the perfect way to increase your website&apos;s
            functionality. Our seamless integration makes it easy to incorporate
            into your website, and our wide variety of features allows you to
            tailor Discripto to your specific needs. Plus, our affordable
            pricing makes Discripto a cost-effective way to improve your
            website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
