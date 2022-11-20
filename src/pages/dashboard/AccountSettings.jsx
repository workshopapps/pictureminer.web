import React, { useState, useEffect } from 'react';
import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

function AccountSettings() {
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
  const [showPassword, setShowPassword] = useState(false);

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

    if (
      formValues.newPassword === formValues.confirmPassword &&
      formValues.newPassword &&
      formValues.confirmPassword
    ) {
      setSuccess(true);
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(errorMessages).length === 0 && isSubmitting) {
      setSuccessMessage('User details updated successfully');
      setTimeout(() => {
        setFormValues(initialFormValues);
        // setSuccessMessage('');
        setIsSubmitting(false);
        setSuccess(false);
      }, 5000);
    } else {
      setIsSubmitting(false);
    }
  }, [errorMessages]);

  const cancelAccountSettingsUpdate = () => {
    setFormValues(initialFormValues);
    // setIsSubmitting(true);
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="mt-12 mb-28 -z-0">
      <div className="container">
        <section className="">
          <h1 className="text-large">Account settings</h1>
          {successMessage && (
            <div className="w-[320px] md:w-[450px] p-6 rounded-md bg-[#12B76A] text-white mt-10 absolute top-[10%] right-20 flex items-center justify-between space-x-4 flex-shrink-0">
              <div className="rounded-full bg-white flex items-center justify-center ">
                <AiOutlineExclamation className="text-green-700 text-large " />
              </div>
              <p className="text-normal">{successMessage}</p>
              <div onClick={toggleSuccessMessage}>
                <IoCloseSharp className="text-large cursor-pointer" />
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="md:flex md:flex-row md:space-x-4 md:justify-between">
              <FormInput
                name="firstName"
                label="First name"
                type="text"
                onchange={handleChange}
                placeholder="Your first name"
                value={formValues.firstName}
                labelClassName="form_label"
                containerClassName="form_group"
              />
              <FormInput
                name="lastName"
                label="Last name"
                type="text"
                onchange={handleChange}
                placeholder="Your last name"
                value={formValues.lastName}
                labelClassName="form_label"
                containerClassName="form_group"
              />
            </div>
            <FormInput
              name="email"
              label="Email address"
              type="email"
              onchange={handleChange}
              placeholder="example@gmail.com"
              value={formValues.email}
              labelClassName="form_label"
              containerClassName="form_group"
            />
            <FormInput
              name="businessName"
              label="Business name"
              type="text"
              onchange={handleChange}
              placeholder="minegram"
              value={formValues.businessName}
              labelClassName="form_label"
              containerClassName="form_group"
            />
            <FormInput
              name="currentPassword"
              label="Current password"
              type="password"
              onchange={handleChange}
              placeholder="123456"
              value={formValues.currentPassword}
              labelClassName="form_label"
              containerClassName="form_group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              inputClassName="w-full"
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
            />
            <FormInput
              name="newPassword"
              label="New password"
              type="password"
              onchange={handleChange}
              placeholder="Password@123"
              value={formValues.newPassword}
              inputClassName={`w-full ${
                errorMessages.newPassword && 'border-red-500'
              } ${success && 'border-green-300'}`}
              labelClassName="form_label"
              containerClassName="form_group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
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
              inputClassName={`w-full ${
                errorMessages.confirmPassword && 'border-red-500'
              } ${success && 'border-green-300'}`}
              labelClassName="form_label"
              containerClassName="form_group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
            />
            <small
              className={`text-sm text-inputGray ${
                errorMessages.confirmPassword ? 'text-red-500' : ''
              }`}
            >
              {errorMessages.confirmPassword}
            </small>
            <div className="mt-8 space-x-5 flex items-center justify-end md:justify-start">
              <Button
                text="cancel"
                type="button"
                onclick={cancelAccountSettingsUpdate}
                className={`py-2 px-8 rounded-lg text-normal border border-[#686868] border-solid cursor-pointer ${
                  success && 'border-mainOrange text-mainOrange'
                }`}
                disabled={isSubmitting}
              />
              <Button
                text="save"
                className={`py-2 px-8 rounded-lg text-normal bg-[#D2D2D2] cursor-pointer ${
                  success && 'bg-mainOrange text-white'
                }`}
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AccountSettings;
