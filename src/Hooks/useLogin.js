import { useMutation } from 'react-query';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { setLocalStorage } from '../localStorage';
import axios from 'axios';

const useLogin = () => {
  const [error, setError] = useState(null);
  const { setUser, user } = useContext(UserContext);
  const { mutateAsync, isLoading, data, isError } = useMutation(
    (data) =>
      axios.post('https://minergramtest.herokuapp.com/api/v1/login', data),
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
