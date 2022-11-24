import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useLogin = () => {
  const { mutate, data } = useMutation(
    (values) => axios.post('http://44.211.169.234:9000/api/v1/login', values),
    {
      onSuccess: (data) => {
        console.log('Success!', data);
      }

    }
  );

  const login = ({ email, password }) => {
   mutate({ email, password });

  };


  return { login, data };
};

export default useLogin;
