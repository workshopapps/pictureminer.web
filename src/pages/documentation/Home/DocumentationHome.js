import React from 'react';
import { Link } from 'react-router-dom';
import './documentationHome.scss';
import {
  Settings,
  StatusUp,
  Happyemoji,
  Activity,
  Card,
  DocumentCode,
  Mobile,
  Verify,
} from 'iconsax-react';

const cardsList = [
  {
    icon: <Settings size="32" color="#292D32" variant="Bold" />,
    title: 'Getting Started',
    link: '/documentation/getting-started',
  },
  {
    icon: <StatusUp size="32" color="#292d32" />,
    title: 'Installations',
    link: '/documentation/installations',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M7.99992 26.6667C7.26659 26.6667 6.63903 26.4058 6.11725 25.884C5.59459 25.3614 5.33325 24.7334 5.33325 24C5.33325 23.2667 5.59459 22.6387 6.11725 22.116C6.63903 21.5943 7.26659 21.3334 7.99992 21.3334C8.73325 21.3334 9.36081 21.5943 9.88259 22.116C10.4053 22.6387 10.6666 23.2667 10.6666 24C10.6666 24.7334 10.4053 25.3614 9.88259 25.884C9.36081 26.4058 8.73325 26.6667 7.99992 26.6667ZM15.9999 26.6667C15.2666 26.6667 14.639 26.4058 14.1173 25.884C13.5946 25.3614 13.3333 24.7334 13.3333 24C13.3333 23.2667 13.5946 22.6387 14.1173 22.116C14.639 21.5943 15.2666 21.3334 15.9999 21.3334C16.7333 21.3334 17.3613 21.5943 17.8839 22.116C18.4057 22.6387 18.6666 23.2667 18.6666 24C18.6666 24.7334 18.4057 25.3614 17.8839 25.884C17.3613 26.4058 16.7333 26.6667 15.9999 26.6667ZM23.9999 26.6667C23.2666 26.6667 22.6386 26.4058 22.1159 25.884C21.5941 25.3614 21.3333 24.7334 21.3333 24C21.3333 23.2667 21.5941 22.6387 22.1159 22.116C22.6386 21.5943 23.2666 21.3334 23.9999 21.3334C24.7333 21.3334 25.3613 21.5943 25.8839 22.116C26.4057 22.6387 26.6666 23.2667 26.6666 24C26.6666 24.7334 26.4057 25.3614 25.8839 25.884C25.3613 26.4058 24.7333 26.6667 23.9999 26.6667ZM7.99992 18.6667C7.26659 18.6667 6.63903 18.4054 6.11725 17.8827C5.59459 17.3609 5.33325 16.7334 5.33325 16C5.33325 15.2667 5.59459 14.6387 6.11725 14.116C6.63903 13.5943 7.26659 13.3334 7.99992 13.3334C8.73325 13.3334 9.36081 13.5943 9.88259 14.116C10.4053 14.6387 10.6666 15.2667 10.6666 16C10.6666 16.7334 10.4053 17.3609 9.88259 17.8827C9.36081 18.4054 8.73325 18.6667 7.99992 18.6667ZM15.9999 18.6667C15.2666 18.6667 14.639 18.4054 14.1173 17.8827C13.5946 17.3609 13.3333 16.7334 13.3333 16C13.3333 15.2667 13.5946 14.6387 14.1173 14.116C14.639 13.5943 15.2666 13.3334 15.9999 13.3334C16.7333 13.3334 17.3613 13.5943 17.8839 14.116C18.4057 14.6387 18.6666 15.2667 18.6666 16C18.6666 16.7334 18.4057 17.3609 17.8839 17.8827C17.3613 18.4054 16.7333 18.6667 15.9999 18.6667ZM23.9999 18.6667C23.2666 18.6667 22.6386 18.4054 22.1159 17.8827C21.5941 17.3609 21.3333 16.7334 21.3333 16C21.3333 15.2667 21.5941 14.6387 22.1159 14.116C22.6386 13.5943 23.2666 13.3334 23.9999 13.3334C24.7333 13.3334 25.3613 13.5943 25.8839 14.116C26.4057 14.6387 26.6666 15.2667 26.6666 16C26.6666 16.7334 26.4057 17.3609 25.8839 17.8827C25.3613 18.4054 24.7333 18.6667 23.9999 18.6667ZM7.99992 10.6667C7.26659 10.6667 6.63903 10.4054 6.11725 9.88271C5.59459 9.36093 5.33325 8.73337 5.33325 8.00004C5.33325 7.26671 5.59459 6.63915 6.11725 6.11737C6.63903 5.59471 7.26659 5.33337 7.99992 5.33337C8.73325 5.33337 9.36081 5.59471 9.88259 6.11737C10.4053 6.63915 10.6666 7.26671 10.6666 8.00004C10.6666 8.73337 10.4053 9.36093 9.88259 9.88271C9.36081 10.4054 8.73325 10.6667 7.99992 10.6667ZM15.9999 10.6667C15.2666 10.6667 14.639 10.4054 14.1173 9.88271C13.5946 9.36093 13.3333 8.73337 13.3333 8.00004C13.3333 7.26671 13.5946 6.63915 14.1173 6.11737C14.639 5.59471 15.2666 5.33337 15.9999 5.33337C16.7333 5.33337 17.3613 5.59471 17.8839 6.11737C18.4057 6.63915 18.6666 7.26671 18.6666 8.00004C18.6666 8.73337 18.4057 9.36093 17.8839 9.88271C17.3613 10.4054 16.7333 10.6667 15.9999 10.6667ZM23.9999 10.6667C23.2666 10.6667 22.6386 10.4054 22.1159 9.88271C21.5941 9.36093 21.3333 8.73337 21.3333 8.00004C21.3333 7.26671 21.5941 6.63915 22.1159 6.11737C22.6386 5.59471 23.2666 5.33337 23.9999 5.33337C24.7333 5.33337 25.3613 5.59471 25.8839 6.11737C26.4057 6.63915 26.6666 7.26671 26.6666 8.00004C26.6666 8.73337 26.4057 9.36093 25.8839 9.88271C25.3613 10.4054 24.7333 10.6667 23.9999 10.6667Z"
          fill="black"
        />
      </svg>
    ),
    title: 'APIs',
    link: '/documentation/apis',
  },
  {
    icon: <Happyemoji size="32" color="#292d32" />,
    title: 'Examples',
    link: '/documentation/examples',
  },
  {
    icon: <Activity size="32" color="#292d32" />,
    title: 'Utilities',
    link: '/documentation/utilities',
  },
  {
    icon: <Card size="32" color="#292d32" />,
    title: 'Integrations',
    link: '/documentation/integrations',
  },
  {
    icon: <DocumentCode size="32" color="#292d32" />,
    title: 'Web',
    link: '/documentation/web',
  },
  {
    icon: <Mobile size="32" color="#292d32" />,
    title: 'Mobile',
    link: '/documentation/mobile',
  },
  {
    icon: <Verify size="32" color="#292d32" />,
    title: 'Verifications',
    link: '/documentation/verifications',
  },
];
const DocumentationHome = () => {
  return (
    <div className="documetation_wrapper">
      <div className="hero_wrapper">
        <h1>Documentation</h1>
        <h3>Everything you need to know about the Discripto picture miner </h3>
        <input type="text" name="documentation_search" placeholder="Search" />
      </div>
      <div className="mainContent">
        {cardsList.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="title">
                <div className="icon">{item.icon}</div>
                <h1>
                  <Link to={item?.link}>{item.title}</Link>
                </h1>
              </div>
              <p>
                Discripto (currently v3.3.7) has ways to quickly get started
                appealing to a different skill level and case. Read through to
                see what suits.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentationHome;
