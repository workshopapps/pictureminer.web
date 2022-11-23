import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginSchema from './schema';
import './Login.scss';
import { Formik } from 'formik';

const initialValues = {
  Email: '',
  Password: '',
};
const index = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='logincontainer'>
      <LoginHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {onSubmit(values);}}
        validationSchema={LoginSchema}

      >
        {({ handleSubmit }) => {
          return (
            <div className='loginform'>
              <LoginForm onSubmit={handleSubmit} />

            </div>
          );
        }}
      </Formik>
    </div>
  );
};


export default index;