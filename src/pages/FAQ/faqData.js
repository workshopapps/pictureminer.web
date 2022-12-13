import { Link } from 'react-router-dom';

export const faqData = [
  {
    id: 0,
    question: 'What is Discripto?',
    answer: [
      <p key={1}>
        Discripto is an API (Application Programming Interface) system that
        allows for communication between two applications using requests and
        responses.
      </p>,
      <p key={2}>
        For an overview of how to use Discripto, check out our brief{' '}
        <Link to="/demo" className="text-blue-500">
          tutorial
        </Link>
        .
      </p>,
    ],
  },
  {
    id: 1,
    question: 'How does Discripto work?',
    answer: [
      <p key={1}>
        Discripto allows users to make a request by uploading an image or a URL
        and get a swift validated response(s) detailing the content of their
        request(s).
      </p>,
      <p key={2}>
        Learn more about how Discripto works(
        <Link to="/how-it-works" className="text-blue-500">
          Learn more
        </Link>
        ).
      </p>,
    ],
  },
  {
    id: 2,
    question: 'What can I do with Discripto?',
    answer: [
      'There are many uses for Discripto, but here are a few: Captioning, Image Recognition, and Image Classification.',
    ],
  },
  {
    id: 3,
    question: 'Is Discripto free to use?',
    answer: [
      'Discripto is a subscription-based service but it is free for individuals.',
    ],
  },
  {
    id: 4,
    question:
      'Can I use Discripto for commercial purposes or high-volume searching?',
    answer: [
      <p key={1}>
        Yes, there is a paid version of Discripto for commercial use, which
        allows you to make bulk searches. The commercial version of Discripto
        includes a user interface for easy searching and response request. (
        <Link to="/pricing" className="text-blue-500">
          Learn more
        </Link>
        )
      </p>,
    ],
  },
  {
    id: 5,
    question:
      'Can I use Discripto’s image recognition technologies with my own images?',
    answer: [
      <p key={1}>
        Yes. We have a set of image recognition APIs that work with your own
        image collections. You can find out more about our APIs by visiting our{' '}
        <Link to="/documentation" className="text-blue-500">
          documentation page
        </Link>{' '}
        .
      </p>,
    ],
  },
  {
    id: 6,
    question: 'How do I submit an image to be searched?',
    answer: [
      'From the dashboard, you can either upload, drag and drop or paste an image link, then click on the mined image button, wait for seconds and see the magic.',
    ],
  },
  {
    id: 7,
    question: 'What kind of image can I search on Discripto?',
    answer: [
      'Discripto currently accepts png files...more file formats will be included soon.',
    ],
  },
  {
    id: 8,
    question: 'Can I sort my results?',
    answer: [
      <p key={1}>
        Yes. Just select your preferred option from the ‘Sort by’ dropdown list
        above your results. Discripto will remember your selection for the
        duration of your session. For more information,{' '}
        <Link to="/how-it-works" className="text-blue-500">
          {' '}
          see our guide{' '}
        </Link>{' '}
        on using Discripto.
      </p>,
    ],
  },
  {
    id: 9,
    question: 'How do I change my account email or password?',
    answer: [
      'Visit the account’s tab on your dashboard and follow the instructions from there.',
    ],
  },
  {
    id: 10,
    question: 'What happens to the images I upload to Discripto?',
    answer: [
      'When you search with Discripto API, your images are automatically saved so you can view your history on our dashboard. Discripto processes millions of new images every day, but your images belongs to you. ',
      'You can choose to delete your files from our servers at any time. Searching with Discripto is private, secure, and always improving.',
    ],
  },
  {
    id: 11,
    question:
      'How can I use Discripto to find the copyright owner of an image?',
    answer: [
      'Discripto doesn’t directly provide information on the owners of an image’s copyright. You may find websites that are more likely to contain ownership information.',
    ],
  },
  {
    id: 12,
    question: 'How do I get my images removed from Discripto?',
    answer: [
      'Removing your images from Discripto is easy and hassle-free. Just select the files you want to remove and click the delete button. This image(s) is then removed from Discripto servers.',
      'If your image appears anywhere else on the web and you want it removed, you should contact the webmaster of the site where that image appears.',
    ],
  },
];
