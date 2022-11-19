import React, { useState, useEffect } from 'react';
import { TextalignJustifycenter } from 'iconsax-react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';

function AccountSettings({ toggleSidebar }) {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessages(validateForm(formValues));
  };

  const validateForm = (formValues) => {
    const errors = {};

    const passwordRegex = /^[\w@-]{8,20}$/; //eslint-disable-line

    if (!passwordRegex.test(formValues.newPassword)) {
      errors.newPassword = 'Password must be greater than 8';
    } else if (formValues.newPassword !== formValues.confirmPassword) {
      errors.newPassword = 'Please make sure your password match';
      errors.confirmPassword = 'Please make sure your password match';
    }

    if (formValues.newPassword === formValues.confirmPassword) {
      // success.newPassword = 'Please make sure your password match';
      setSuccess(true);
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(errorMessages).length === 0 && isSubmitting) {
      setSuccessMessage('Message sent successfully');
      console.log('first');
      setTimeout(() => {
        setFormValues(initialFormValues);
        setSuccessMessage('');
        setIsSubmitting(false);
        setSuccess(false);
      }, 5000);
    } else {
      setIsSubmitting(false);
    }
  }, [errorMessages]);

  const cancelAccountSettingsUpdate = () => {
    console.log('hi');
  };

  return (
    <div className="">
      <div className="pt-5 " onClick={toggleSidebar}>
        <TextalignJustifycenter />
      </div>
      <section className="mt-12 mb-28 relative">
        <h1 className="text-large">Account settings</h1>
        {successMessage && (
          <div className="w-full rounded-md bg-green-200 text-gray-800 mt-10 px-4 py-4 absolute top-40">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput
            name="firstName"
            label="First name"
            type="text"
            onchange={handleChange}
            placeholder="Your first name"
            value={formValues.firstName}
          />
          <FormInput
            name="lastName"
            label="Last name"
            type="text"
            onchange={handleChange}
            placeholder="Your last name"
            value={formValues.lastName}
          />
          <FormInput
            name="email"
            label="Email address"
            type="email"
            onchange={handleChange}
            placeholder="example@gmail.com"
            value={formValues.email}
          />
          <FormInput
            name="businessName"
            label="Business name"
            type="text"
            onchange={handleChange}
            placeholder="minegram"
            value={formValues.businessName}
          />
          <FormInput
            name="currentPassword"
            label="Current password"
            type="password"
            onchange={handleChange}
            placeholder="123456"
            value={formValues.currentPassword}
          />
          <FormInput
            name="newPassword"
            label="New password"
            type="password"
            onchange={handleChange}
            placeholder="Password@123"
            value={formValues.newPassword}
            className={`${errorMessages.newPassword && 'border-red-500'} ${
              success && 'border-green-300'
            }`}
          />
          <small
            className={`text-sm text-inputGray ${
              errorMessages.newPassword ? 'text-red-500' : ''
            }`}
          >
            {errorMessages.newPassword}
          </small>
          <FormInput
            name="confirmPassword"
            label="Confirm password"
            type="password"
            onchange={handleChange}
            placeholder="Password@123"
            value={formValues.confirmPassword}
            className={`${errorMessages.confirmPassword && 'border-red-500'} ${
              success && 'border-green-300'
            }`}
          />
          <small
            className={`text-sm text-inputGray ${
              errorMessages.confirmPassword ? 'text-red-500' : ''
            }`}
          >
            {errorMessages.confirmPassword}
          </small>
          <div className="mt-8 space-x-5 flex items-center justify-end">
            <Button
              text="cancel"
              onclick={cancelAccountSettingsUpdate}
              className={`py-2 px-8 rounded-lg text-normal border border-[#686868] border-solid ${
                success && 'border-mainOrange text-mainOrange'
              }`}
              disabled={isSubmitting}
            />
            <Button
              text="save"
              className={`py-2 px-8 rounded-lg text-normal bg-[#D2D2D2] ${
                success && 'bg-mainOrange text-white'
              }`}
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AccountSettings;
