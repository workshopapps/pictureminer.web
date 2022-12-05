import React, { useState, useEffect, useReducer } from 'react';
import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import './styles/dashboard.css';
import { reducer } from './reducers';

export const actions = {
  inputChanged: 'input_change',
  formSubmitted: 'submit_form',
  isSubmitting: 'is_submitting',
  isNotSubmitting: 'is_not_submitting',
  isFormEmpty: 'is_form_empty',
  toggleSuccessMessage: 'toggled_success_message',
  isPasswordMatch: 'password_matched',
  submitted: 'submitted',
  cancelForm: 'form_canceled',
};

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
  const initialState = {
    isSubmitting: false,
    isTouched: false,
    isFormValueEmpty: false,
    success: false,
    successMessage: '',
    errorMessages: {},
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    dispatch({ type: actions.inputChanged });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorWarnings = validateForm(formValues);
    dispatch({
      type: actions.formSubmitted,
      payload: errorWarnings,
    });
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
      dispatch({
        type: actions.isPasswordMatch,
      });
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(state.errorMessages).length === 0 && state.isSubmitting) {
      dispatch({ type: actions.isSubmitting });
      setTimeout(() => {
        setFormValues(initialFormValues);
        dispatch({ type: actions.submitted });
      }, 5000);
    } else {
      dispatch({ type: actions.isNotSubmitting });
    }

    const isNullish = Object.values(formValues).every((formValue) => {
      if (formValue === '') return true;
    });
    dispatch({ type: actions.isFormEmpty, payload: isNullish });
  }, [state.errorMessages]);

  const cancelAccountSettingsUpdate = () => {
    setFormValues(initialFormValues);
    dispatch({ type: actions.cancelForm });
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleSuccessMessage = () => {
    dispatch({ type: actions.toggleSuccessMessage });
  };

  return (
    <div className="mb-28 -z-0">
      <div className="container-dashboard">
        <section className="">
          <h1 className="text-large">Account settings</h1>
          {state.successMessage && (
            <div className="w-[350px] md:w-[500px] p-6 rounded-md bg-[#12B76A] text-white mt-10 absolute top-[10%] right-5 lg:right-20 flex items-center justify-between space-x-4 flex-shrink-0">
              <div className="rounded-full bg-white flex items-center justify-center ">
                <AiOutlineExclamation className="text-green-700 text-normal " />
              </div>
              <p className="text-xSmall">{state.successMessage}</p>
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
                state.errorMessages.newPassword && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
              labelClassName="form__label"
              containerClassName="form__group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
            />
            {state.errorMessages.newPassword && (
              <small className="text-sm text-red-500">
                {state.errorMessages.newPassword}
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
                state.errorMessages.confirmPassword && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
              labelClassName="form__label"
              containerClassName="form__group"
              showPassword={showPassword}
              togglePassword={togglePassword}
              buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              eyeIconClassName="text-large text-inputGray"
            />
            {state.errorMessages.confirmPassword && (
              <small className="text-sm text-red-500">
                {state.errorMessages.confirmPassword}
              </small>
            )}

            <div className="mt-12 space-x-5 flex items-center justify-end md:justify-start">
              <Button
                text="cancel"
                type="button"
                onclick={cancelAccountSettingsUpdate}
                className={`py-2 px-8 rounded-lg text-small border border-[#686868] border-solid cursor-pointer ${
                  state.success ||
                  (state.isTouched &&
                    'border-mainOrange text-mainOrange hover:bg-mainOrange hover:text-white')
                }`}
                disabled={!state.isTouched}
              />
              <Button
                text="save"
                className={`py-2 px-8 rounded-lg text-small bg-[#D2D2D2] cursor-pointer ${
                  state.success ||
                  (state.isTouched &&
                    'bg-mainOrange text-white hover:bg-[#FF9D55]')
                }`}
                type="submit"
                disabled={!state.isTouched || state.isFormValueEmpty}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AccountSettings;
