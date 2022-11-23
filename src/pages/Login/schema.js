import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});