import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginSchema from './schema';
import './Login.scss';
import { Formik } from 'formik';
const index = () => {
  return (
    <div className='logincontainer'>
      <LoginHeader />
      <Formik
        initialValues={{
          Email: '',
          Password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginSchema}

      >
        {({ isValid }) => {
          return (
            <div className='loginform'>
              <LoginForm />
              <button
                className='loginbutton'
                type='submit'
                disabled={!isValid}
              >
                Login
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};


export default index;