import React from 'react';

function ForMD() {
  return (
    <div className="flex flex-col gap-14  md:flex-row  md:pt-8   md:gap-[35px]">
      {/* Company */}
      <div className="Company flex flex-col items-start gap-[16px]  ">
        <h1 className="font-semibold text-[16px] leading-[24px] text-white  ">
          Company
        </h1>

        <ul className="flex flex-col items-start gap-[12px] ">
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Resources */}
      <div className="Resources flex flex-col items-start gap-[16px]  ">
        <h1 className="font-semibold text-[16px] leading-[24px] text-white  ">
          Resources
        </h1>

        <ul className="flex flex-col items-start gap-[12px] ">
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Help center
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      {/* Legal */}
      <div className="Legal flex flex-col items-start gap-[16px]  ">
        <h1 className="font-semibold text-[16px] leading-[24px] text-white  ">
          Legal
        </h1>

        <ul className="flex flex-col items-start gap-[12px] ">
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[16px] font-medium leading-[24px] text-white font-sans "
            >
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForMD;
