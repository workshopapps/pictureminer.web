import React from 'react';
import 'tw-elements';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';




const Faq = () => {
  return (
    <>
      <div className="mt-14 md:px-28 container mb-10 md:mb-20 md:mt20">
        <h3 className='text-2xl py-3 md:text-3xl font-bold text-center'>Frequently Asked Questions</h3>
        <Accordion>
          <span className='px-3'>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>What is Minergram? <BsChevronDown/></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base px-5 md:text-lg">
                Minergram is an API (Application Programming Interface) system
                that allows for communication between two applications using
                requests and responses. For an overview of how to use Minergram,
                check out our brief tutorial (minergram.com/how-to-use)
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem  className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton  className='flex justify-between'>
                How does Minergram work? <BsChevronDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Minergram allows users to make a request by uploading an image
                or a URL and get a swift validated response(s) detailing the
                content of their request(s). Learn more about how Minergram
                works (minergram.com/steps-works), or get an overview of our
                technology (<Link className="text-base md:text-lg" to="/support">minergram.com/support-page</Link>).
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton  className='flex justify-between'>
                What can I do with Minergram?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                There are many uses for ToZilla, but here are a few:
                <ol className="list-decimal">
                  <li>Captioning</li>
                  <li>Image Recognition</li>
                  <li>Image Classification</li>
                  <li>Accessibility Tool</li>
                </ol>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton  className='flex justify-between'>
                Is Minergram free to use?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Minergram is a subscription-based service but it is free for
                individuals.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton  className='flex justify-between'>
                Can I use Minergram for commercial purposes or high-volume
                searching?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Yes, there is a paid version (<Link to="/pricing">minergram.com/paid-vers</Link>) of
                Minergram for commercial use, which allows you to make bulk
                searches. The commercial version of Minergram includes a user
                interface for easy searching, as well as an API for integrating
                Minergram with your own website or system. If you have any
                questions, please get in touch (minergram.com/contact).
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                Can I use Minergram’s image recognition technologies with my own
                images?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Yes. We have a set of image recognition APIs that work with your
                own image collections. You can find out more about our APIs by
                visiting our technology/documentation page.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                How do I submit an image to be searched?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                From the dashboard, you can upload an image, paste an image, or
                point to a web image by typing or pasting it in a URL. You can
                also use our Drag &amp; Drop feature.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                {' '}
                What kinds of images can I search on Minergram?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="py-3 text-base px-5 md:text-lg">
                File type: ToZilla accepts a variety of formats, including, but
                not limited to, JPEG, PNG, GIF, BMP, TIFF, and WebP images.
              </p>
              <p className="py-3 text-base px-5 md:text-lg">
                Image dimensions: ToZilla works best with images that are at
                least 300 pixels in either dimension.
              </p>
              <p className="py-3 text-base px-5 md:text-lg">
                vFile size: 20 megabytes is the maximum file size per image.
              </p>
              <p className="py-3 text-base px-5 md:text-lg">
                Watermarked images: For best results, visibly watermarked images
                should be avoided as ToZilla may search for the watermark and
                not the image itself.
              </p>
              <p className="py-3 text-base px-5 md:text-lg">
                Subject matter: Submitted images must adhere to our Terms of
                Service (<Link className='text-base md:text-lg' to="/terms-of-use">minergram.com/termservice</Link>).
              </p>
            </AccordionItemPanel>

          </AccordionItem>

          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>Can I sort my results?<BsChevronDown/></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Yes. Just select your preferred option from the ‘Sort by’
                dropdown list above your results. Minergram will remember your
                selection for the duration of your session. For more
                information, see our guide (minergram.com/guide) on using
                Minergram.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                How do I change my account email or password?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Visit the accounts tab on your dashboard and follow the
                instructions from there. You can also contact us
                (minergram.com/contact-us) and one of our reps will be happy to
                help.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                What happens to the images I upload to Minergram?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="py-3 text-base px-5 md:text-lg">
                When you search with Minergram API, your images are
                automatically saved so you can view your history on our
                dashboard. Minergram processes millions of new images every day,
                but your images belong to you.
              </p>
              <p className="py-3 text-base px-5 md:text-lg">
                You can choose to delete your files from our servers at any
                time. Searching with Minergram is private, secure, and always
                improving.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                {' '}
                How can I use Minergram to find the copyright owner of an image?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Minergram doesn’t directly provide information on the owners of
                an image’s copyright. You may find websites that are more likely
                to contain ownership information.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion-item bg-white border border-gray-200">
            <AccordionItemHeading
              className="md:text-xl
        text-lg
        w-full
        py-4
        px-5
        text-base titlegrey text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            >
              <AccordionItemButton className='flex justify-between'>
                How do I get my images removed from Minergram?<BsChevronDown/>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-base md:text-lg">
              <p className="text-base px-5 md:text-lg">
                Removing your images from ToZilla is easy and hassle-free. Just
                select the files you want to remove and click the delete button.
                This image(s) is then removed from ToZilla servers.
              </p>
              <p className="text-base px-5 md:text-lg">
                If your image appears anywhere else on the web and you want it
                removed, you should contact the webmaster of the site where that
                image appears.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          </span>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
