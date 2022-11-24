import React, { useContext } from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginSchema from './schema';
import './Login.scss';
import { Formik } from 'formik';
import useLogin from '../../Hooks/useLogin';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from './ImageUpload';

const initialValues = {
  Email: '',
  Password: '',
};
const index = () => {
  const navigate = useNavigate();


  const  { user } = useContext(UserContext);
  const { mutate } = useLogin();


  const onSubmit = (values) => {
    const { Email, Password } = values;
    try {
       mutate( { email:Email, password:Password });

      // setLocalStorage('user', data);
      navigate('/dashboard');
      console.log(user);



    } catch (error) {
      console.log(error);
    }
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
      <ImageUpload />

    </div>
  );
};


export default index;