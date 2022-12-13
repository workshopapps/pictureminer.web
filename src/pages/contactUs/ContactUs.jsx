import React from 'react';
import Button from '../../components/Button';

export default function ContactUs() {
  return (
    <div className="lg:mx-auto lg:max-w-screen-xl lg:mt-0 mt-7">
      <div className="lg:py-20 lg:px-60 md:p-10 p-5">
        <h3 className="text-4xl">Get In Touch</h3>
        <p className="mt-5 md:mb-6 md:text-xl text-lg">
          Hi there, we would like to hear from you.
        </p>
        <form action="" method="GET">
          <div className="md:mt-12 mt-8 grid grid-cols-2 gap-6 md:pt-4">
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label htmlFor="first_name" className="text-sm font-medium mb-1">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                required
                className="py-2 px-4 h-11 border rounded-lg text-base"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label htmlFor="last_name" className="text-sm font-medium mb-1">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                required
                className="py-2 px-4 h-11 border rounded-lg text-base"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
                required
                className="py-2 px-4 h-11 border rounded-lg text-base"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="message" className="text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="8"
                required
                className="border rounded-lg mb-10"
              ></textarea>
            </div>
          </div>
          <Button text={'Get in Touch'} />
        </form>
      </div>
    </div>
  );
}
