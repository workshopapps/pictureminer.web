import { useMutation } from '@tanstack/react-query';
// import { useMutation } from 'react-query';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { setLocalStorage } from '../localStorage';
import axios from 'axios';

const useLogin = () => {
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const { mutateAsync, isLoading, data, isError } = useMutation(
    (data) => axios.post('https://discripto.hng.tech/api1/api/v1/login', data),
    {
      onSuccess: (data) => {
        setUser(data?.data.data);
        setLocalStorage('user', data?.data.data);
      },
      onError: (error) => {
        setError(error.response?.data);
      },
    }
  );
  return { mutateAsync, isLoading, error, data, isError };
};

export default useLogin;
