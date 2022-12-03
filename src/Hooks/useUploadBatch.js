import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';


const useUploadBatch = () => {
  const [response, setResponse] = useState(null);
  const { mutateAsync, isLoading } = useMutation(
    (data) =>
      axios.post(
        'https://discripto.hng.tech/api1/api/v1/mine-service/upload',
        data,
        // config
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