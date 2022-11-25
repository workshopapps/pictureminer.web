import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { getLocalStorage } from '../localStorage';
import { useState } from 'react';

const useUploadImage = () => {

  const [response, setResponse] = useState(null);
  const user = getLocalStorage('user');
  const userToken = user ? user.data.Token : null;
  // console.log(userToken);
  const config = {
  headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userToken}`,

    },
  };
  const { mutate, isLoading, } = useMutation(
    (data) => axios.post('http://minergramtest.herokuapp.com/api/v1/mine-service/upload', data, config),
    {
      onSuccess: (data) => {
        setResponse(data.data);

      },
      onError: (error) => {
        console.log(error);
        console.log(user);
      },
    }
  );
  return { mutate, isLoading, response, };
};

export default useUploadImage;