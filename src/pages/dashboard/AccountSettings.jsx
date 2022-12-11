import React, { useState } from 'react';
import './styles/dashboard.css';
import AccountInfoSettings from './components/AccountInfoSettings';
import PersonalAccountSettings from './components/PersonalInfoSettings';

function AccountSettings() {
  const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    current_password: '',
    new_password: '',
    confirm_password: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [showPassword4, setShowPassword4] = useState(false);
  const [tabContent, setTabContent] = useState(1);

  const togglePassword = (e) => {
    const btnId = Number(e.currentTarget.id);

    if (btnId === 1) setShowPassword1((prevState) => !prevState);
    if (btnId === 2) setShowPassword2((prevState) => !prevState);
    if (btnId === 3) setShowPassword3((prevState) => !prevState);
    if (btnId === 4) setShowPassword4((prevState) => !prevState);
  };

  return (
    <div className="mb-28 -z-0 ">
      <div className="container-dashboard ">
        <h1 className="text-large text-center font-bold md:text-left">
          Account settings
        </h1>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex flex-col items-center justify-start">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center cursor-pointer ${
                tabContent === 1 ? 'bg-lightOrange' : 'bg-gray-300'
              }`}
              onClick={() => setTabContent(1)}
            >
              <p
                className={`${tabContent === 1 ? 'font-bold' : 'font-normal'}`}
              >
                1
              </p>
            </div>
            <p
              className={`mt-2 text-small ${
                tabContent === 1 ? 'text-mainOrange font-bold' : 'font-normal'
              }`}
            >
              Account Info
            </p>
          </div>
          <div className="h-1 rounded-lg bg-gray-400 w-1/3 md:w-1/2 mb-6"></div>
          <div className="flex flex-col items-center justify-start">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center cursor-pointer ${
                tabContent === 2 ? 'bg-lightOrange' : 'bg-gray-300'
              }`}
              onClick={() => setTabContent(2)}
            >
              <p
                className={`${tabContent === 2 ? 'font-bold' : 'font-normal'}`}
              >
                2
              </p>
            </div>
            <p
              className={`mt-2 text-small ${
                tabContent === 2 ? 'text-mainOrange font-bold' : 'font-normal'
              }`}
            >
              Personal Info
            </p>
          </div>
        </div>
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-16 mt-10 space-y-20 lg:space-y-0">
          {tabContent === 1 && (
            <AccountInfoSettings
              formValues={formValues}
              initialFormValues={initialFormValues}
              setFormValues={setFormValues}
              showPassword1={showPassword1}
              togglePassword={togglePassword}
            />
          )}
          {tabContent === 2 && (
            <PersonalAccountSettings
              formValues={formValues}
              setFormValues={setFormValues}
              initialFormValues={initialFormValues}
              showPassword2={showPassword2}
              showPassword3={showPassword3}
              showPassword4={showPassword4}
              togglePassword={togglePassword}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
