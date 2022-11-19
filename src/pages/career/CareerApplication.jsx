import React from 'react';
import { useState } from 'react';
import FormInput from '../../components/form/FormInput';
import FormTextArea from '../../components/form/FormTextArea';

const CareerApplication = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  return (
    <main className="mt-2 mb-[100px] sm:mb-[200px]">
      <header className="bg-[#092C4C] h-[180px] md:h-[320px] flex items-end pb-4  px-[1rem] md:px-[80px] ">
        <h1
          className=" text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[64px] text-[#fbfbfb] px-[1rem]"
          style={{
            letterSpacing: '-0.02em',
          }}
        >
          Application form
        </h1>
      </header>

      <div className=" px-[1rem] md:px-[80px] mb-[40px] md:mb-[92px]">
        <p className="font-medium text-[24px] leading-[35px] text=[#434343] mt-[40px] md:mt-[80px] ">
          If you&apos;ve met all the requirements and you&apos;re also open to
          learning and creating amazing new concepts, go ahead and apply!
        </p>
      </div>

      <form className="px-[1rem] w-full max-w-[880px] mx-auto flex flex-col gap-8 ">
        <FormInput
          label="First name"
          name="firstName"
          type="text"
          value={firstName}
          onchange={(e) => setFirstName(e.target.value.trim())}
          placeholder="First name"
          labelClassName="text-[16px] font-semibold leading-[24px] text-[4f4f4f]"
          inputClassName="border border-[#bdbdbd] rounded-[4px] h-[56px] w-full outline-none px-4"
          containerClassName="flex flex-col gap-2"
        />

        <FormInput
          label="Last name"
          name="lastName"
          type="text"
          value={lastName}
          onchange={(e) => setLastName(e.target.value.trim())}
          placeholder="Last name"
          labelClassName="text-[16px] font-semibold leading-[24px] text-[4f4f4f]"
          inputClassName="border border-[#bdbdbd] rounded-[4px] h-[56px] w-full outline-none px-4"
          containerClassName="flex flex-col gap-2"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onchange={(e) => setEmail(e.target.value.trim())}
          placeholder="johndoes@email.com"
          labelClassName="text-[16px] font-semibold leading-[24px] text-[4f4f4f]"
          inputClassName="border border-[#bdbdbd] rounded-[4px] h-[56px] w-full outline-none px-4"
          containerClassName="flex flex-col gap-2"
        />

        <FormInput
          label="Portfolio link"
          name="portfolioLink"
          type="url"
          value={portfolioLink}
          onchange={(e) => setPortfolioLink(e.target.value.trim())}
          placeholder="Portfolio link"
          labelClassName="text-[16px] font-semibold leading-[24px] text-[4f4f4f]"
          inputClassName="border border-[#bdbdbd] rounded-[4px] h-[56px] w-full outline-none px-4"
          containerClassName="flex flex-col gap-2"
        />

        <FormInput
          label="Resume link"
          name="resumeLink"
          type="url"
          value={resumeLink}
          onchange={(e) => setResumeLink(e.target.value.trim())}
          placeholder="Google drive link of resume"
          labelClassName="text-[16px] font-semibold leading-[24px] text-[4f4f4f]"
          inputClassName="border border-[#bdbdbd] rounded-[4px] h-[56px] w-full outline-none px-4"
          containerClassName="flex flex-col gap-2"
        />

        <FormTextArea
          label="Cover letter"
          name="coverLetter"
          value={coverLetter}
          onchange={(e) => setCoverLetter(e.target.value)}
          labelClassName="text-[16px] font-semibold leading-[24px] text-[4f4f4f]"
          textareaClassName="border border-[#bdbdbd] rounded-[4px] h-[200px] w-full outline-none px-4"
          containerClassName="flex flex-col gap-2"
        />

        <div>
          <button
            className="text-white leading-[22px] mt-[40px] h-[56px] w-full flex items-center justify-center bg-[#FF6C00] rounded-[8px]"
            type="submit"
          >
            Apply
          </button>
        </div>
      </form>
    </main>
  );
};

export default CareerApplication;
