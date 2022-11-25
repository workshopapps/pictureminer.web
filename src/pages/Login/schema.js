import * as yup from 'yup';

export default yup.object().shape({
  Email: yup
    .string()
    .email('Email must be a valid email')
    .isRequired('Email is required'),
  Password: yup.string().required('Password is required'),
});
