import * as yup from 'yup';

export default yup.object().shape({
  Email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  Password: yup
    .string()
    // .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
