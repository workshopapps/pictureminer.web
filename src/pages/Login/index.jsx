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
  Email: Yup.string().email('Invalid email format').required('Required'),
  Password: Yup.string().required('Required'),
});
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
      seterrorMessage(error.response?.data.message);
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
        validationSchema={validationSchema}
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
