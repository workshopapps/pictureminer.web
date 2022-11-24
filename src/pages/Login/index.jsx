import React, { useContext } from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginSchema from './schema';
import './Login.scss';
import { Formik } from 'formik';
import useLogin from '../../Hooks/useLogin';
import { setLocalStorage } from '../../localStorage';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  Email: '',
  Password: '',
};
const index = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const { login } = useLogin();


  const onSubmit = (values) => {
    const { Email, Password } = values;
    try {
      const user =  login( { email:Email, password:Password });
      setUser(user);
      setLocalStorage('user', user);
      navigate('/dashboard');


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
    </div>
  );
};


export default index;