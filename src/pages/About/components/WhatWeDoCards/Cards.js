import React from 'react';
import Download from '../../images/Download.png';
import Upload from '../../images/Upload.png';
import Mining from '../../images/Mining.png';
import Activity from '../../images/Activity.png';
import Documentation from '../../images/Documentation.png';
import '../../../../styles/layout/about.scss';

export default function Cards() {
  const Card = [
    {
      image: Download,
      name: 'Download',
      text: 'Get access to download in JSON file format.',
    },
    {
      image: Upload,
      name: 'Upload',
      text: 'You are guaranteed high number of uploads as well as fast and easy response',
    },
    {
      image: Mining,
      name: 'Minning Result',
      text: 'Get accurate and efficient minning results when you upload your images.',
    },
    {
      image: Activity,
      name: 'Easy Flow',
      text: 'Enjoy an easy and seamless use of our product and be guaranteed value for it. ',
    },
    {
      image: Documentation,
      name: 'Documentation',
      text: 'Non-tech users can have access to documnentation Explore our guides and examples to integrate Discripto.',
    },
  ];
  return (
    <div className="cards grid grid-cols-2 [&>*:nth-child(3)]:col-span-2 gap-4 lg:[&>*:nth-child(3)]:w-[30%] max-[768px]:[&>*:nth-child(3)]:w-[50%] max-[768px]:p-2">
      {Card.map((card, index) => {
        return (
          <div
            className="shadow-2xl p-5 max-[480px]:p-2  justify-center text-center lg:w-[50%] m-auto"
            key={index}
          >
            <img src={card.image} alt="icon" className="m-auto" />
            <p className="text-[#49486B] font-bold max-[480px]:text-[12px]">
              {card.name}
            </p>
            <p className="max-[480px]:text-[8px]">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
}
