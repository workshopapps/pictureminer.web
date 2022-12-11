import React, { useReducer, useEffect, useContext } from 'react';
// import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import '../styles/dashboard.css';
import { personalInfoReducer } from '../reducers/personalInfoReducer';
import {
  AiOutlineExclamation,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { actions } from '../actions/actions';
import UserContext from '../../../context/UserContext';
import axios from 'axios';

function PersonalAccountSettings({
  formValues,
  setFormValues,
  initialFormValues,
  togglePassword,
  showPassword2,
  showPassword3,
  showPassword4,
}) {
  const initialPersonalInfoState = {
    isSubmitting: false,
    isTouched: false,
    isFormValueEmpty: false,
    success: false,
    successMessage: '',
    errorMessages: {},
  };
  const { user } = useContext(UserContext);

  const [state, dispatch] = useReducer(
    personalInfoReducer,
    initialPersonalInfoState
  );

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    dispatch({ type: actions.inputChanged });
  };

  const submitPersonalInfo = (e) => {
    e.preventDefault();

    const errorWarnings = validatePersonalInfo(formValues);
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
              current_password: formValues.current_password,
              new_password: formValues.new_password,
              confirm_password: formValues.confirm_password,
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
  const validatePersonalInfo = (formValues) => {
    const errors = {};

    const passwordRegex = /^[\w@-]{8,20}$/; //eslint-disable-line

    if (!passwordRegex.test(formValues.new_password)) {
      errors.new_password = 'Password must be greater than 8';
    } else if (formValues.new_password !== formValues.confirm_password) {
      errors.new_password = 'Please make sure your password match';
      errors.confirm_password = 'Please make sure your password match';
    }

    if (
      formValues.new_password === formValues.confirm_password &&
      formValues.new_password &&
      formValues.confirm_password
    ) {
      dispatch({
        type: actions.isPasswordMatch,
      });
    }

    return errors;
  };

  useEffect(() => {
    const isNullish = Object.values(formValues).every((formValue) => {
      if (formValue === '') return true;
    });
    dispatch({ type: actions.isFormEmpty, payload: isNullish });
  }, [state.errorMessages]);

  const cancelPersonalInfoUpdate = () => {
    setFormValues(initialFormValues);
    dispatch({ type: actions.cancelForm });
  };

  const toggleSuccessMessage = () => {
    dispatch({ type: actions.toggleSuccessMessage });
  };

  return (
    <div className="w-full">
      {state.successMessage && (
        <div className="w-[350px] md:w-[500px] p-6 rounded-md bg-[#12B76A] text-white mt-10 absolute top-[10%] md:right-5 lg:right-20 flex items-center justify-between space-x-4 flex-shrink-0">
          <div className="rounded-full bg-white flex items-center justify-center ">
            <AiOutlineExclamation className="text-green-700 text-normal " />
          </div>
          <p className="text-small">{state.successMessage}</p>
          <div onClick={toggleSuccessMessage}>
            <IoCloseSharp className="text-normal cursor-pointer" />
          </div>
        </div>
      )}
      {/* <h2 className="text-medium font-bold">Personal Info</h2> */}
      <form onSubmit={submitPersonalInfo}>
        <div className="form__group">
          <label htmlFor="current_password" className="form__label">
            Current password
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              type={`${showPassword2 ? 'text' : 'password'}`}
              name="current_password"
              placeholder="Password@123"
              value={formValues.current_password}
              className={`w-full placeholder:text-sm placeholder:text-modalGray ${
                state.errorMessages.current_password && 'border-red-500'
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
              {showPassword2 ? (
                <AiOutlineEye className="text-large text-modalGray" />
              ) : (
                <AiOutlineEyeInvisible className="text-large text-modalGray" />
              )}
            </button>
          </div>
          {state.errorMessages.current_password && (
            <small className="text-sm text-red-500">
              {state.errorMessages.current_password}
            </small>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="new_password" className="form__label">
            New password
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              type={`${showPassword3 ? 'text' : 'password'}`}
              name="new_password"
              placeholder="Password@123"
              value={formValues.new_password}
              className={`w-full placeholder:text-sm placeholder:text-modalGray ${
                state.errorMessages.new_password && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
            />
            <button
              id={3}
              className="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              onClick={(e) => {
                togglePassword(e);
              }}
              type="button"
            >
              {showPassword3 ? (
                <AiOutlineEye className="text-large text-modalGray" />
              ) : (
                <AiOutlineEyeInvisible className="text-large text-modalGray" />
              )}
            </button>
          </div>
          {state.errorMessages.new_password && (
            <small className="text-sm text-red-500">
              {state.errorMessages.new_password}
            </small>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="confirm_password" className="form__label">
            Confirm password
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              type={`${showPassword4 ? 'text' : 'password'}`}
              name="confirm_password"
              placeholder="Password@123"
              value={formValues.confirm_password}
              className={`w-full placeholder:text-sm placeholder:text-modalGray ${
                state.errorMessages.confirm_password && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
            />
            <button
              id={4}
              className="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
              onClick={(e) => {
                togglePassword(e);
              }}
              type="button"
            >
              {showPassword4 ? (
                <AiOutlineEye className="text-large text-modalGray" />
              ) : (
                <AiOutlineEyeInvisible className="text-large text-modalGray" />
              )}
            </button>
          </div>
          {state.errorMessages.confirm_password && (
            <small className="text-sm text-red-500">
              {state.errorMessages.confirm_password}
            </small>
          )}
        </div>
        {/* <FormInput
          name="new_password"
          label="New password"
          type={`${showPassword && iconId === 1 ? 'text' : 'password'}`}
          onchange={handleChange}
          placeholder="Password@123"
          value={formValues.new_password}
          inputClassName={`w-full ${
            state.errorMessages.new_password && 'border-red-500'
          } ${state.success && 'border-green-300'}`}
          labelClassName="form__label"
          containerClassName="form__group"
          showPassword={showPassword}
          togglePassword={togglePassword}
          buttonClassName="absolute bg-transparent top-2/4 right-[3%] -translate-x-[3%] -translate-y-2/4 cursor-pointer"
          eyeIconClassName="text-large text-inputGray"
        />
        {state.errorMessages.new_password && (
          <small className="text-sm text-red-500">
            {state.errorMessages.new_password}
          </small>
        )} */}

        <div className="mt-12 space-x-5 flex items-center justify-center md:justify-start">
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
