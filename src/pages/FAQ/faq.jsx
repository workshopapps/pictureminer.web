import React from 'react';
import 'tw-elements';

const Faq = () => {
  return (
    <div className="mt-14 md:px-28 container mb-10 md:mb-20 md:mt20">
      <h3 className='text-xl py-8 text-center md:text-3xl'>Frequently Asked Questions</h3>
    <div className="accordion mx-5 accordion-flush" id="accordionExample5">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne5">
          <button
            className="
        accordion-button
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne5"
            aria-expanded="true"
            aria-controls="collapseOne5"
          >
            What is Minergram?
          </button>
        </h2>
        <div
          id="collapseOne5"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Minergram is an API (Application Programming Interface) system that
            allows for communication between two applications using requests and
            responses. For an overview of how to use Minergram, check out our
            brief tutorial (minergram.com/how-to-use)
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingTwo5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo5"
            aria-expanded="false"
            aria-controls="collapseTwo5"
          >
            How does Minergram work?
          </button>
        </h2>
        <div
          id="collapseTwo5"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Minergram allows users to make a request by uploading an image or a
            URL and get a swift validated response(s) detailing the content of
            their request(s). Learn more about how Minergram works
            (minergram.com/steps-works), or get an overview of our technology
            (minergram.com/support-page).
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            What can I do with Minergram?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            There are many uses for ToZilla, but here are a few:
            <ol>
              <li>Captioning</li>
              <li>Image Recognition</li>
              <li>Image Classification</li>
              <li>Accessibility Tool</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            Is Minergram free to use?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Minergram is a subscription-based service but it is free for
            individuals.
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            Can I use Minergram for commercial purposes or high-volume
            searching?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Yes, there is a paid version (minergram.com/paid-vers) of Minergram
            for commercial use, which allows you to make bulk searches. The
            commercial version of Minergram includes a user interface for easy
            searching, as well as an API for integrating Minergram with your own
            website or system. If you have any questions, please get in touch
            (minergram.com/contact).
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            Can I use Minergram’s image recognition technologies with my own
            images?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Yes. We have a set of image recognition APIs that work with your own
            image collections. You can find out more about our APIs by visiting
            our technology/documentation page.
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            How do I submit an image to be searched?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            From the dashboard, you can upload an image, paste an image, or
            point to a web image by typing or pasting it in a URL. You can also
            use our Drag &amp; Drop feature.
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            What kinds of images can I search on Minergram?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            <p className="py-3">
              File type: ToZilla accepts a variety of formats, including, but
              not limited to, JPEG, PNG, GIF, BMP, TIFF, and WebP images.
            </p>
            <p className="py-3">
              Image dimensions: ToZilla works best with images that are at least
              300 pixels in either dimension.
            </p>
            <p className="py-3">vFile size: 20 megabytes is the maximum file size per image.</p>
            <p className="py-3">
              Watermarked images: For best results, visibly watermarked images
              should be avoided as ToZilla may search for the watermark and not
              the image itself.
            </p>
            <p className="py-3">
              Subject matter: Submitted images must adhere to our Terms of
              Service (minergram.com/termservice).
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            Can I sort my results?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Yes. Just select your preferred option from the ‘Sort by’ dropdown
            list above your results. Minergram will remember your selection for
            the duration of your session. For more information, see our guide
            (minergram.com/guide) on using Minergram.
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            How do I change my account email or password?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Visit the accounts tab on your dashboard and follow the instructions
            from there. You can also contact us (minergram.com/contact-us) and
            one of our reps will be happy to help.
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            What happens to the images I upload to Minergram?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            <p className="py-3">
              When you search with Minergram API, your images are automatically
              saved so you can view your history on our dashboard. Minergram
              processes millions of new images every day, but your images belong
              to you.
            </p>
            <p className="py-3">
              You can choose to delete your files from our servers at any time.
              Searching with Minergram is private, secure, and always improving.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            How can I use Minergram to find the copyright owner of an image?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            Minergram doesn’t directly provide information on the owners of an
            image’s copyright. You may find websites that are more likely to
            contain ownership information.
          </div>
        </div>
      </div>

      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            How do I get my images removed from Minergram?
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body md:text-lg subgrey text-base py-4 px-5">
            <p>
              Removing your images from ToZilla is easy and hassle-free. Just
              select the files you want to remove and click the delete button.
              This image(s) is then removed from ToZilla servers.
            </p>
            <p>
              If your image appears anywhere else on the web and you want it
              removed, you should contact the webmaster of the site where that
              image appears.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
