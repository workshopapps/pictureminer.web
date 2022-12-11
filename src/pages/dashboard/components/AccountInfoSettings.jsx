import React, { useEffect, useReducer, useContext } from 'react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import '../styles/dashboard.css';
import { accountInfoReducer } from '../reducers/accountInfoReducer';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { actions } from '../actions/actions';
import UserContext from '../../../context/UserContext';
import axios from 'axios';

function AccountInfoSettings({ formValues, setFormValues, initialFormValues }) {
  const initialAccountInfoState = {
    isSubmitting: false,
    isTouched: false,
    isFormValueEmpty: false,
    success: false,
    successMessage: '',
    errorMessages: {},
  };
  const { user } = useContext(UserContext);

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
      type: actions.isSubmitting,
      payload: errorWarnings,
    });

    if (Object.keys(state.errorMessages).length === 0) {
      const updateAccountInfo = async () => {
        try {
          const response = await axios({
            method: 'patch',
            url: 'https://discripto.hng.tech/api1/api/v1/update-user',
            data: {
              email: formValues.email,
              first_name: formValues.first_name,
              last_name: formValues.last_name,
              username: formValues.username,
            },
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.Token}`,
            },
          });

          if (response.status === 200) {
            setFormValues(initialFormValues);
            dispatch({ type: actions.accountUpdated });
          }
        } catch (error) {
          console.log(error);
        }
      };

      updateAccountInfo();
    } else {
      dispatch({ type: actions.isNotSubmitting });
    }
  };

  const validateAccountInfo = (formValues) => {
    const errors = {};

    const emailRegex =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; //eslint-disable-line

    if (formValues.email) {
      if (!emailRegex.test(formValues.email)) {
        errors.email = 'Please provide a valid email';
      }
    }

    return errors;
  };

  useEffect(() => {
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
        <div className="w-[350px] md:w-[500px] p-6 rounded-md bg-[#12B76A]  text-white mt-10 absolute top-[10%] md:right-5 lg:right-20 flex items-center justify-between space-x-4 flex-shrink-0">
          <div className="rounded-full bg-white flex items-center justify-center ">
            <AiOutlineExclamation className="text-green-700 text-normal " />
          </div>
          <p className="text-small">{state.successMessage}</p>
          <div onClick={toggleSuccessMessage}>
            <IoCloseSharp className="text-normal cursor-pointer" />
          </div>
        </div>
      )}
      {/* <h2 className="text-medium font-bold">Account Info</h2> */}
      <form onSubmit={submitAccountInfo}>
        <FormInput
          name="first_name"
          label="First name"
          type="text"
          onchange={handleChange}
          placeholder="Your first name"
          value={formValues.first_name}
          labelClassName="form__label"
          containerClassName="form__group"
          inputClassName={
            'w-full placeholder:text-sm placeholder:text-modalGray'
          }
        />
        <FormInput
          name="last_name"
          label="Last name"
          type="text"
          onchange={handleChange}
          placeholder="Your last name"
          value={formValues.last_name}
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
          inputClassName={`w-full placeholder:text-sm placeholder:text-modalGray ${
            state.errorMessages.email && 'border-red-500'
          } ${state.success && 'border-green-300'}`}
        />
        {state.errorMessages.email && (
          <small className="text-sm text-red-500">
            {state.errorMessages.email}
          </small>
        )}
        <FormInput
          name="username"
          label="Username"
          type="text"
          onchange={handleChange}
          placeholder="johnDoe"
          value={formValues.username}
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
