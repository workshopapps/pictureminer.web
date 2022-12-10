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

  const togglePassword = (e) => {
    const btnId = Number(e.currentTarget.id);

    if (btnId === 1) setShowPassword1((prevState) => !prevState);
    if (btnId === 2) setShowPassword2((prevState) => !prevState);
    if (btnId === 3) setShowPassword3((prevState) => !prevState);
    if (btnId === 4) setShowPassword4((prevState) => !prevState);
  };

  return (
    <div className="mb-28 -z-0 mt-10">
      <div className="container-dashboard ">
        <h1 className="text-large text-center md:text-left">
          Account settings
        </h1>
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-16 mt-10 space-y-20 lg:space-y-0">
          <AccountInfoSettings
            formValues={formValues}
            initialFormValues={initialFormValues}
            setFormValues={setFormValues}
            showPassword1={showPassword1}
            togglePassword={togglePassword}
          />
          <PersonalAccountSettings
            formValues={formValues}
            setFormValues={setFormValues}
            initialFormValues={initialFormValues}
            showPassword2={showPassword2}
            showPassword3={showPassword3}
            showPassword4={showPassword4}
            togglePassword={togglePassword}
          />
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
