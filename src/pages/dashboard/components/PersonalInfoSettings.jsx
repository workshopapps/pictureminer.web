import React, { useReducer, useEffect, useState } from 'react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import '../styles/dashboard.css';
import { personalInfoReducer } from '../reducers/personalInfoReducer';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { actions } from '../actions/actions';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

function PersonalAccountSettings({
  formValues,
  setFormValues,
  initialFormValues,
}) {
  const initialPersonalInfoState = {
    isSubmitting: false,
    isTouched: false,
    isFormValueEmpty: false,
    success: false,
    successMessage: '',
    errorMessages: {},
  };

  const [state, dispatch] = useReducer(
    personalInfoReducer,
    initialPersonalInfoState
  );
  const [showPassword, setShowPassword] = useState(false);
  const [iconId, setIconId] = useState(0);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    dispatch({ type: actions.inputChanged });
  };

  const submitPersonalInfo = (e) => {
    e.preventDefault();

    const errorWarnings = validatePersonalInfo(formValues);
    dispatch({
      type: actions.formSubmitted,
      payload: errorWarnings,
    });
  };
  const validatePersonalInfo = (formValues) => {
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

  const cancelPersonalInfoUpdate = () => {
    setFormValues(initialFormValues);
    dispatch({ type: actions.cancelForm });
  };

  const togglePassword = (e) => {
    setShowPassword((prevState) => !prevState);
    const btnId = e.currentTarget.id;
    setIconId(Number(btnId));
  };

  const toggleSuccessMessage = () => {
    dispatch({ type: actions.toggleSuccessMessage });
  };

  return (
    <div className="w-full">
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
      <h2 className="text-medium font-bold">Personal Info</h2>
      <form onSubmit={submitPersonalInfo}>
        <FormInput
          name="userName"
          label="Username"
          type="text"
          onchange={handleChange}
          placeholder="johnDoe"
          value={formValues.userName}
          labelClassName="form__label"
          containerClassName="form__group"
          inputClassName={`w-full placeholder:text-sm placeholder:text-modalGray`}
        />
        <div className="form__group">
          <label htmlFor="newPassword" className="form__label">
            New password
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              type={`${showPassword && iconId === 1 ? 'text' : 'password'}`}
              name="newPassword"
              placeholder="Password@123"
              value={formValues.newPassword}
              className={`w-full placeholder:text-sm placeholder:text-modalGray ${
                state.errorMessages.newPassword && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
            />
            <button
              id={1}
              className="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              onClick={(e) => {
                togglePassword(e);
              }}
              type="button"
            >
              {showPassword && iconId === 1 ? (
                <AiOutlineEye className="text-large text-modalGray" />
              ) : (
                <AiOutlineEyeInvisible className="text-large text-modalGray" />
              )}
            </button>
          </div>
          {state.errorMessages.newPassword && (
            <small className="text-sm text-red-500">
              {state.errorMessages.newPassword}
            </small>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="confirmPassword" className="form__label">
            Confirm password
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              type={`${showPassword && iconId === 2 ? 'text' : 'password'}`}
              name="confirmPassword"
              placeholder="Password@123"
              value={formValues.confirmPassword}
              className={`w-full placeholder:text-sm placeholder:text-modalGray ${
                state.errorMessages.confirmPassword && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
            />
            <button
              id={2}
              className="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              onClick={(e) => {
                togglePassword(e);
              }}
              type="button"
            >
              {showPassword && iconId === 2 ? (
                <AiOutlineEye className="text-large text-modalGray" />
              ) : (
                <AiOutlineEyeInvisible className="text-large text-modalGray" />
              )}
            </button>
          </div>
          {state.errorMessages.confirmPassword && (
            <small className="text-sm text-red-500">
              {state.errorMessages.confirmPassword}
            </small>
          )}
        </div>
        {/* <FormInput
          name="newPassword"
          label="New password"
          type={`${showPassword && iconId === 1 ? 'text' : 'password'}`}
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
        )} */}

        <div className="mt-12 space-x-5 flex items-center justify-center md:justify-end">
          <Button
            text="cancel"
            type="button"
            onclick={cancelPersonalInfoUpdate}
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
              (state.isTouched && 'bg-mainOrange text-white hover:bg-[#FF9D55]')
            }`}
            type="submit"
            disabled={!state.isTouched || state.isFormValueEmpty}
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalAccountSettings;
