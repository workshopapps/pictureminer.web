import React from 'react';
import BlogPage from './BlogPage';
import image from '../assets/image1.webp';

const ExtensionBlog = () => {
  return (
    <div>
      <BlogPage
        blogTitle="The Future of the Discripto Chrome Extension"
        titleText="One of the easiest and most popular ways to use Discripto to search the web is with our official browser extensions."
        image={image}
        paragraphText="One of the easiest and most popular ways to use Discripto to search the web is with our official .
        Just right-click on an image in your browser, click “Search Image on Discripto”, and see your results. Now, Chrome users can join Firefox,Edge and Opera users with the new To start using the Edge extension, go to the chrome Add-ons  page then click the “Get” button to install. Then, right-click on an image and start searching.
        Choose your result's sort order and if they open in a new tab from the extension's options section. Click on the blue Discripto “T” in your toolbar, then click on “options” to set your preferences.
        Happy searching!
        "
        secondParagraphText="In addition to our reverse image search engine Discripto (which is free to use by the way!), we also license
        our image-recognition solutions in the form APIs that you can integrate into your products and services. When you use one of our APIs, we want you to get up and running as quickly and easily as possible. To help
        with that, we've launched all new API documentation. The updated...
        "
        subheading="Search Discripto with copy and paste"
        subheadingText="In Discripto Updates March 2,2020 1 Min read"
        thirdParagraphText="At Discripto, image searching is our passion, and one of our goals is to make it quick and easy for you to search the web for your images. To help with this, we have multiple ways to search an image on Discripto.com: you can give the address for an image on the web, upload an image file or even drag and drop an image file onto the Discripto homepage. We also offer browser extensions for Firefox, Chrome
        "
      />
    </div>
  );
};

export default ExtensionBlog;
