import React from 'react';
import Card from './Card';
import style from '../../styles/layout/Benefits.module.scss';

const data = [
  {
    title: 'Classification & categorization',
    p: 'Discripto is the first and only app that allows you to classify and categorize your photos in a faster, easier and more efficient way. With Discripto, you don&apos;t have to spend time laboriously categorizing thousands of photos. Discripto does it all for you!',
    link: '/e-commerce',
  },
  {
    title: 'Can use to detect image similarity',
    p: 'Discripto is a tool that helps you detect image similarity. You can quickly compare two or more images and find the similarities and differences between them. This is a great tool for designer agencies, and or companies who compare images in large scale.',
    link: '/e-commerce',
  },
  {
    title: 'Image query',
    p: 'With our API recognition, you can ask questions about the images and our API will return well-structured answers. We make it easy for you to integrate image recognition into your applications.',
    link: '/e-commerce',
  },
  {
    title: 'Seamless integration with your website',
    p: 'Discripto is the perfect way to increase your website&apos;s functionality. Our seamless integration makes it easy to incorporate into your website, and our wide variety of features allows you to tailor Discripto to your specific needs. Plus, our affordable pricing makes Discripto a cost-effective way to improve your website.',
    link: '/e-commerce',
  },
];

const Benefits = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1>Benefits We Provide</h1>
        <div className={style.cardWrap}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                paragraph={item.p}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
