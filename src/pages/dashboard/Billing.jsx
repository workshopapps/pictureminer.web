import React, { useState } from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { BsCheckCircle } from 'react-icons/bs';
import Button from '../../components/ui/Button';
import { FaCheck } from 'react-icons/fa';

function Billing() {
  const [showPlanDetailsModal, setPlanDetailsModal] = useState(false);
  const [showCancelPlanModal, setShowCancelPlanModal] = useState(false);
  const [isCancelPlan, setCancelPlan] = useState(false);

  const togglePlanDetailsModal = () => {
    setPlanDetailsModal((prevState) => !prevState);
  };

  const toggleCancelPlanModal = () => {
    setShowCancelPlanModal((prevState) => !prevState);
  };
  const toggleCancelPlan = () => {
    setCancelPlan((prevState) => !prevState);
  };

  const toggleCancelPlanAndCancelPlanModal = () => {
    setShowCancelPlanModal((prevState) => !prevState);
    setCancelPlan((prevState) => !prevState);
  };

  return (
    <div className="mt-12 lg:mt-40 mb-28 relative">
      <div className="container">
        {showPlanDetailsModal && (
          <div className="bg-modalGray z-[5] fixed inset-0 w-full">
            <div className="w-5/6 md:w-2/4 lg:w-4/12 p-6 flex flex-col bg-white absolute rounded-md top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
              <IoCloseSharp
                className="text-large item ml-auto cursor-pointer"
                onClick={togglePlanDetailsModal}
              />
              <ul className="space-y-4 mt-6">
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>6 GB free storage space</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>25 free trials</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>Image upload not more than 200 MB</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>Live chat</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>24/7 Hour support</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>Get access to upload by others</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>Faster processing speed</p>
                </li>
                <li className="flex space-x-3 items-center">
                  <BsCheckCircle />
                  <p>Upload two images simultaneously</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {showCancelPlanModal && (
          <div className="bg-modalGray z-[5] fixed inset-0 w-full">
            <div className="w-5/6 md:w-2/4 lg:w-4/12 p-6 flex flex-col items-center justify-center text-center bg-white absolute rounded-md top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
              <div className="flex items-center justify-center rounded-full  border-lightOrange w-12 h-12 bg-lightOrange">
                <MdOutlineErrorOutline
                  className="text-large text-mainOrange cursor-pointer"
                  onClick={toggleCancelPlanModal}
                />
              </div>
              <div className="mt-5">
                <h4>We are sorry to see you leave</h4>
                <p className="text-sm text-inputGray mt-2">
                  We are about to cancel your tozilla basic plan. If you would
                  like to proceed with the cancelling of your tozilla basic
                  plan, select &#8220;Cancel plan&#8220;below.
                </p>
              </div>
              <div className="mt-8 flex flex-col space-y-4 md:space-y-0 w-full md:flex-row md:space-x-4">
                <Button
                  type="button"
                  text="Undo"
                  className={
                    'py-2 rounded-lg text-small font-medium border border-mainOrange border-solid w-full text-mainOrange'
                  }
                  onclick={toggleCancelPlanModal}
                ></Button>
                <Button
                  type="button"
                  text="Cancel plan"
                  className={
                    'py-2 rounded-lg text-small font-medium border bg-mainOrange w-full text-white'
                  }
                  onclick={toggleCancelPlanAndCancelPlanModal}
                ></Button>
              </div>
            </div>
          </div>
        )}
        {isCancelPlan && (
          <div className="bg-modalGray z-[5] fixed inset-0 w-full">
            <div className="w-5/6 md:w-2/4 lg:w-4/12 p-6 flex flex-col items-center justify-center text-center bg-white absolute rounded-md top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
              <div className="flex items-center justify-center rounded-full  border-lightOrange w-12 h-12 bg-green-100">
                <FaCheck
                  className="text-large text-green-400 cursor-pointer"
                  onClick={toggleCancelPlanModal}
                />
              </div>
              <div className="mt-5">
                <h4>Success</h4>
                <p className="text-sm text-inputGray mt-2">
                  You have successfully opted out of tozilla basic plan.
                </p>
              </div>
              <div className="mt-8 flex flex-col space-y-4 w-full">
                <Button
                  type="button"
                  text="Done"
                  className={
                    'py-2 rounded-lg text-small font-medium border bg-mainOrange w-full text-white'
                  }
                  onclick={toggleCancelPlan}
                ></Button>
              </div>
            </div>
          </div>
        )}
        <h2>Billing & Payments</h2>
        <section className="border border-modalGray border-solid rounded mt-8 p-4">
          <div className="flex items-center justify-between">
            <p>Plan details</p>
            <p
              className="hidden md:block text-[#A74700] cursor-pointer"
              onClick={togglePlanDetailsModal}
            >
              Check plan benefits
            </p>
            <MdOutlineErrorOutline
              className="text-normal md:hidden cursor-pointer"
              onClick={togglePlanDetailsModal}
            />
          </div>
          <div className="flex border border-modalGray border-solid rounded mt-8 items-center justify-between p-2">
            <div className="">
              <small>Plan</small>
              <p className="text-small">Tozilla Basic</p>
            </div>
            <div>
              <small>Price</small>
              <p className="text-small">$9.99/month</p>
            </div>
          </div>
          <p
            className="mt-8 text-red-500 cursor-pointer"
            onClick={toggleCancelPlanModal}
          >
            Cancel Tozilla Basic Plan
          </p>
        </section>
        <section className="border border-modalGray border-solid rounded mt-8 p-4">
          <p>Billing history</p>
          <div className="flex flex-col mt-8 space-y-4">
            <div className="border border-modalGray border-solid rounded p-2 ">
              <p>Tozilla basic plan subscription - $9.99</p>
              <small className="font-medium text-inputGray">Nov 10, 2022</small>
            </div>
            <div className="border border-modalGray border-solid rounded p-2 ">
              <p>Tozilla basic plan subscription - $9.99</p>
              <small className="font-medium text-inputGray">Nov 10, 2022</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Billing;
