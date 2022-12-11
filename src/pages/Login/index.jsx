import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import './Login.scss';
import { Formik } from 'formik';
import useLogin from '../../Hooks/useLogin';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  Email: '',
  Password: '',
};

const validationSchema = Yup.object({
  Email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  Password: Yup.string().required('Password is required'),
});
const index = () => {
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const { mutateAsync } = useLogin();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    const { Email, Password } = values;
    setLoading(true);
    try {
      await mutateAsync({ Email, Password });
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      seterrorMessage(error.response?.data.message);
    }
  };
  return (
    <div className="logincontainer ">
      <LoginHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => {
          return (
            <div className="loginform">
              <LoginForm
                onSubmit={handleSubmit}
                errorMessage={errorMessage}
                loading={loading}
              />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default index;
