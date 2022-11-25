// import * as yup from 'yup';

<<<<<<< HEAD
// export default yup.object().shape({
//   Email: yup
//     .string()
//     .email('Email must be a valid email')
//     .required('Email is required'),
//   Password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });
=======
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
>>>>>>> 16049a0f3681b107b2c146ae614c964f8b0f9c02
