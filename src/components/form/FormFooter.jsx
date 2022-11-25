import React from 'react';

function FormFooter() {
  return (
    <form className="flex flex-row gap-0 ">
      <input
        type="text"
        placeholder="Enter email address"
        className="py-[16px] px-[24px] gap-[8px] flex flex-row items-center h-[44px] w-[202px] bg-white border border-solid border-l-[#909090]border-t-[#909090] border-b-[#909090] rounded-l-lg font-normal leading-[20px] text-[14px] outline-none  "
      />
      <button className="py-[16px] px-[24px]  flex flex-row items-center h-[44px] w-[120px] bg-[#FF6C00] rounded-r-lg  font-normal leading-[20px] text-[14px] text-center text-white hover:bg-[#FF9D55]  ">
        Subscribe
      </button>
    </form>
  );
}

export default FormFooter;
