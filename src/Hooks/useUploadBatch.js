import { useMutation } from '@tanstack/react-query';
// import { useMutation } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { getLocalStorage } from '../localStorage';

const useUploadBatch = () => {
  const [response, setResponse] = useState(null);
  const user = getLocalStorage('user');
  const userToken = user ? user.Token : null;
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userToken}`,
    },
  };
  const { mutateAsync, isLoading } = useMutation(
    (data) =>
      axios.post(
        'https://discripto.hng.tech/api1/api/v1/batch-service/process-batch',
        data,
        config
      ),
    {
      onSuccess: (data) => {
        setResponse(data.data);
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return { mutateAsync, isLoading, response };
};

export default useUploadBatch;
