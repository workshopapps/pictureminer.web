import React, { useState, useEffect } from 'react';
import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import './styles/dashboard.css';

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
  const [isTouched, setIsTouched] = useState(false);
  const [isFormValueEmpty, setIsFormValueEmpty] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    setIsTouched(true);
    setIsFormValueEmpty(false);
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessages(validateForm(formValues));
    setIsTouched(false);
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
        setIsSubmitting(false);
        setSuccess(false);
      }, 5000);
    } else {
      setIsSubmitting(false);
    }

    const isNullish = Object.values(formValues).every((formValue) => {
      if (formValue === '') return true;
    });
    setIsFormValueEmpty(isNullish);
  }, [errorMessages]);

  const cancelAccountSettingsUpdate = () => {
    setFormValues(initialFormValues);
    setIsTouched(false);
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="mb-28 -z-0">
      <div className="container-dashboard">
        <section className="">
          <h1 className="text-large">Account settings</h1>
          {successMessage && (
            <div className="w-[350px] md:w-[500px] p-6 rounded-md bg-[#12B76A] text-white mt-10 absolute top-[10%] right-5 lg:right-20 flex items-center justify-between space-x-4 flex-shrink-0">
              <div className="rounded-full bg-white flex items-center justify-center ">
                <AiOutlineExclamation className="text-green-700 text-normal " />
              </div>
              <p className="text-xSmall">{successMessage}</p>
              <div onClick={toggleSuccessMessage}>
                <IoCloseSharp className="text-normal cursor-pointer" />
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
                labelClassName="form__label"
                containerClassName="form__group"
              />
              <FormInput
                name="lastName"
                label="Last name"
                type="text"
                onchange={handleChange}
                placeholder="Your last name"
                value={formValues.lastName}
                labelClassName="form__label"
                containerClassName="form__group"
              />
            </div>
            <FormInput
              name="email"
              label="Email address"
              type="email"
              onchange={handleChange}
              placeholder="example@gmail.com"
              value={formValues.email}
              labelClassName="form__label"
              containerClassName="form__group"
            />
            <FormInput
              name="businessName"
              label="Business name"
              type="text"
              onchange={handleChange}
              placeholder="minegram"
              value={formValues.businessName}
              labelClassName="form__label"
              containerClassName="form__group"
            />
            <FormInput
              name="currentPassword"
              label="Current password"
              type="password"
              onchange={handleChange}
              placeholder="123456"
              value={formValues.currentPassword}
              labelClassName="form__label"
              containerClassName="form__group"
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
              labelClassName="form__label"
              containerClassName="form__group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
            />
            {errorMessages.newPassword && (
              <small className="text-sm text-red-500">
                {errorMessages.newPassword}
              </small>
            )}

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
              labelClassName="form__label"
              containerClassName="form__group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
            />
            {errorMessages.confirmPassword && (
              <small className="text-sm text-red-500">
                {errorMessages.confirmPassword}
              </small>
            )}

            <div className="mt-12 space-x-5 flex items-center justify-end md:justify-start">
              <Button
                text="cancel"
                type="button"
                onclick={cancelAccountSettingsUpdate}
                className={`py-2 px-8 rounded-lg text-small border border-[#686868] border-solid cursor-pointer ${
                  success || (isTouched && 'border-mainOrange text-mainOrange')
                }`}
                disabled={!isTouched || isFormValueEmpty}
              />
              <Button
                text="save"
                className={`py-2 px-8 rounded-lg text-small bg-[#D2D2D2] cursor-pointer ${
                  success || (isTouched && 'bg-mainOrange text-white')
                }`}
                type="submit"
                disabled={!isTouched || isFormValueEmpty}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AccountSettings;
