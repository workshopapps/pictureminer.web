import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
// import { useMutation } from 'react-query';
import axios from 'axios';
import { getLocalStorage } from '../localStorage';

const useUploadImage = () => {
  const [response, setResponse] = useState(null);
  const user = getLocalStorage('user');
  const userToken = user ? user.Token : null;

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userToken}`,
    },
  };
  const { mutate, isLoading } = useMutation(
    (data) =>
      axios.post(
        'https://discripto.hng.tech/api1/api/v1/mine-service/upload',
        data,
        config
      ),
    {
      onSuccess: (data) => {
        setResponse(data.data);
        console.log({ data });
      },
      onError: (error) => {
        setResponse({ error });
        console.log({ error });
      },
    }
  );
  return { mutate, isLoading, response };
};

export default useUploadImage;
