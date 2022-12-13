/* eslint-disable indent */
import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import { usePaystackPayment } from 'react-paystack';
import { Link } from 'react-router-dom';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const initialState = {
  isSubmitting: false,
  isTouched: false,
  isFormValueEmpty: false,
  success: false,
  successMessage: '',
  errorMessages: {},
};

const actions = {
  inputChanged: 'input_change',
  formSubmitted: 'submit_form',
  isSubmitting: 'is_submitting',
  isNotSubmitting: 'is_not_submitting',
  isFormEmpty: 'is_form_empty',
  toggleSuccessMessage: 'toggled_success_message',
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.inputChanged: {
      return {
        ...state,
        isTouched: true,
        isFormValueEmpty: false,
        isSubmitting: false,
        errorMessages: {},
      };
    }
    case actions.formSubmitted: {
      return {
        ...state,
        isTouched: false,
        isSubmitting: true,
        errorMessages: payload,
      };
    }
    case actions.isSubmitting: {
      return {
        ...state,
        successMessage: 'User details updated successfully',
      };
    }
    case actions.isNotSubmitting: {
      return {
        ...state,
        isSubmitting: false,
      };
    }
    case actions.isFormEmpty: {
      return {
        ...state,
        isFormValueEmpty: payload,
      };
    }
    case actions.toggleSuccessMessage: {
      return {
        ...state,
        successMessage: '',
      };
    }

    default:
      break;
  }
}

function Payment() {
  const { paymentPlan } = useParams();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [planAmount, setPlanAmount] = useState(0);
  const [planName, setPlanName] = useState('');

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

    const emailRegex =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; //eslint-disable-line

    if (!formValues.email) {
      errors.email = 'Email cannot be empty';
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formValues.firstName) {
      errors.firstName = 'First name cannot be empty';
    }
    if (!formValues.lastName) {
      errors.lastName = 'Last name cannot be empty';
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(state.errorMessages).length === 0 && state.isSubmitting) {
      dispatch({ type: actions.isSubmitting });
      initializePayment(onSuccess, onClose);
    } else {
      dispatch({ type: actions.isNotSubmitting });
    }

    const isNullish = Object.values(formValues).every((formValue) => {
      if (formValue === '') return true;
    });
    dispatch({ type: actions.isFormEmpty, payload: isNullish });
  }, [state.errorMessages]);

  useEffect(() => {
    if (paymentPlan === 'standardtrue' || paymentPlan === 'standardfalse') {
      setPlanName('Standard');
    }
    if (paymentPlan === 'premiumtrue' || paymentPlan === 'premiumfalse') {
      setPlanName('Premium');
    }
    if (paymentPlan === 'standardtrue') {
      setPlanAmount(14);
    }

    if (paymentPlan === 'standardfalse') {
      setPlanAmount(148);
    }

    if (paymentPlan === 'premiumtrue') {
      setPlanAmount(25);
    }

    if (paymentPlan === 'premiumfalse') {
      setPlanAmount(422);
    }
  }, [paymentPlan]);

  const config = {
    reference: new Date().getTime().toString(),
    email: formValues.email,
    amount: planAmount * 100,
    publicKey: 'pk_test_071f350804758ba139adf67b52c54fad0b101519',
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    dispatch({ type: actions.isNotSubmitting });
    setFormValues(initialFormValues);
    // console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    dispatch({ type: actions.isNotSubmitting });
    setFormValues(initialFormValues);
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="mb-28 mt-16 -z-0">
      <div className="payment-container">
        <section className="">
          <div className="space-y-4">
            <p className="text-normal font-bold">
              Selected Value:{' '}
              <span className="ml-2 font-normal">{planName}</span>
            </p>

            <p className="text-small font-bold">
              Price:{' '}
              <span className="ml-2 font-normal">{`$${planAmount}`}</span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="md:flex md:flex-row md:space-x-4 md:justify-between">
              <div className="w-full">
                <FormInput
                  name="firstName"
                  label="First Name"
                  type="text"
                  onchange={handleChange}
                  placeholder="Your first name"
                  value={formValues.firstName}
                  labelClassName="form__label"
                  containerClassName="form__group"
                  inputClassName={`w-full ${
                    state.errorMessages.firstName && 'border-red-500'
                  } ${state.success && 'border-green-300'}`}
                />
                {state.errorMessages.firstName && (
                  <small className="text-sm text-red-500">
                    {state.errorMessages.firstName}
                  </small>
                )}
              </div>
              <div className="w-full">
                <FormInput
                  name="lastName"
                  label="Last Name"
                  type="text"
                  onchange={handleChange}
                  placeholder="Your last name"
                  value={formValues.lastName}
                  labelClassName="form__label"
                  containerClassName="form__group"
                  inputClassName={`w-full ${
                    state.errorMessages.lastName && 'border-red-500'
                  } ${state.success && 'border-green-300'}`}
                />
                {state.errorMessages.lastName && (
                  <small className="text-sm text-red-500">
                    {state.errorMessages.lastName}
                  </small>
                )}
              </div>
            </div>
            <FormInput
              name="email"
              label="Email Address"
              type="email"
              onchange={handleChange}
              placeholder="example@gmail.com"
              value={formValues.email}
              labelClassName="form__label"
              containerClassName="form__group"
              inputClassName={`w-full ${
                state.errorMessages.email && 'border-red-500'
              } ${state.success && 'border-green-300'}`}
            />
            {state.errorMessages.email && (
              <small className="text-sm text-red-500">
                {state.errorMessages.email}
              </small>
            )}
            <div className="max-[768px]:flex w-full">
              <Button
                text="Proceed to Payment"
                className={`min-[769px]:w-[50%] py-2 px-8 rounded-lg text-small bg-[#D2D2D2] hover:bg-[#EEEEEE] cursor-pointer mt-7 ${
                  state.success ||
                  (state.isTouched && 'bg-mainOrange text-white')
                }`}
                type="submit"
                disabled={!state.isTouched || state.isFormValueEmpty}
              />
              <Link to="/dashboard">
                <Button
                  text="Back"
                  className={
                    ' min-[769px]:w-[45%] ml-5 py-2 px-8 rounded-lg text-small bg-[#D2D2D2] hover:bg-[#EEEEEE] cursor-pointer mt-7'
                  }
                  type="button"
                />
              </Link>
            </div>
            <div className="mt-12 space-y-5 ">
              <p className="tracking-normal">
                Your subscription will automatically renewed monthly. You will
                be charged <span>{planAmount}</span> USD on each renewal until
                you cancel your subscription. If you cancel, previous charges
                will not be refunded, but you may continue to use the service
                until the end of the term you paid for.
              </p>
              <p className="tracking-wide">
                By clicking the &#34;Checkout&#34; button above, you agree to
                our{' '}
                <a href="#" className="text-blue-800">
                  Terms of Service
                </a>{' '}
                and have read our
                <a href="#" className="text-blue-800">
                  {' '}
                  Privacy Policy.
                </a>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Payment;
