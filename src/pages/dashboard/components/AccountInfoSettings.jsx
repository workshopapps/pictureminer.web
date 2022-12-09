import React, { useEffect, useReducer } from 'react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import '../styles/dashboard.css';
import { accountInfoReducer } from '../reducers/accountInfoReducer';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { actions } from '../actions/actions';

function AccountInfoSettings({ formValues, setFormValues, initialFormValues }) {
  const initialAccountInfoState = {
    isSubmitting: false,
    isTouched: false,
    isFormValueEmpty: false,
    success: false,
    successMessage: '',
    errorMessages: {},
  };

  const [state, dispatch] = useReducer(
    accountInfoReducer,
    initialAccountInfoState
  );

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    dispatch({ type: actions.inputChanged });
  };

  const submitAccountInfo = (e) => {
    e.preventDefault();

    const errorWarnings = validateAccountInfo(formValues);
    dispatch({
      type: actions.formSubmitted,
      payload: errorWarnings,
    });
  };

  const validateAccountInfo = (formValues) => {
    const errors = {};

    const emailRegex =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; //eslint-disable-line

    if (!emailRegex.test(formValues.email)) {
      errors.email = 'Please provide a valid email';
    }

    dispatch({
      type: actions.isPasswordMatch,
    });

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
      <h2 className="text-medium font-bold">Account Info</h2>
      <form onSubmit={submitAccountInfo}>
        <FormInput
          name="firstName"
          label="First name"
          type="text"
          onchange={handleChange}
          placeholder="Your first name"
          value={formValues.firstName}
          labelClassName="form__label"
          containerClassName="form__group"
          inputClassName={
            'w-full placeholder:text-sm placeholder:text-modalGray'
          }
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
          inputClassName={
            'w-full placeholder:text-sm placeholder:text-modalGray'
          }
        />
        <FormInput
          name="email"
          label="Email address"
          type="email"
          onchange={handleChange}
          placeholder="example@gmail.com"
          value={formValues.email}
          labelClassName="form__label"
          containerClassName="form__group"
          inputClassName={
            'w-full placeholder:text-sm placeholder:text-modalGray'
          }
        />
        <div className="mt-12 space-x-5 flex items-center justify-center md:justify-start">
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

export default AccountInfoSettings;
