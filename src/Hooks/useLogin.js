import { useMutation } from '@tanstack/react-query';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { setLocalStorage } from '../localStorage';
import axios from 'axios';

const useLogin = () => {
  const [error, setError] = useState(null);
  const { setUser, user } = useContext(UserContext);
  const { mutate, isLoading } = useMutation(
    (data) => axios.post('http://44.211.169.234:9000/api/v1/login', data),
    {
      onSuccess: (data) => {
        setUser(data.data);
        setLocalStorage('user', data.data);
        console.log(data.data, user);

      },
      onError: (error) => {
        setError(error.response.data);
      },
    }
  );
  return { mutate, isLoading, error, };
};

export default useLogin;
