import React, { useState } from 'react';
import './styles/dashboard.css';
import AccountInfoSettings from './components/AccountInfoSettings';
import PersonalAccountSettings from './components/PersonalInfoSettings';

function AccountSettings() {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    newPassword: '',
    confirmPassword: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="mb-28 -z-0 mt-10">
      <div className="container-dashboard ">
        <h1 className="text-large text-center md:text-left">
          Account settings
        </h1>
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-16 mt-10 space-y-20 lg:space-y-0">
          <AccountInfoSettings
            formValues={formValues}
            initialFormValues={initialFormValues}
            setFormValues={setFormValues}
          />
          <PersonalAccountSettings
            formValues={formValues}
            setFormValues={setFormValues}
            initialFormValues={initialFormValues}
          />
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
