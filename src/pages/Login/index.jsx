import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginSchema from './schema';
import './Login.scss';
import { Formik } from 'formik';
import useLogin from '../../hooks/useLogin';

import { useNavigate } from 'react-router-dom';

const initialValues = {
  Email: '',
  Password: '',
};
const index = () => {
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const { mutateAsync } = useLogin();

  const onSubmit = async (values) => {
    const { Email, Password } = values;
    try {
      await mutateAsync({ Email, Password });
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      seterrorMessage(error.response.data.message);
    }
  };
  return (
    <div className="logincontainer">
      <LoginHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={LoginSchema}
      >
        {({ handleSubmit }) => {
          return (
            <div className="loginform">
              <LoginForm onSubmit={handleSubmit} errorMessage={errorMessage} />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default index;
