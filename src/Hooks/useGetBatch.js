import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { getLocalStorage } from '../localStorage';


const useGetBatch = (url = 'https://discripto.hng.tech/api1/api/v1/batch-service/count-batches', name = 'batch') => {
  const [response, setResponse] = useState(null);
  const user = getLocalStorage('user');
  const userToken = user ? user.Token : null;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
  };
  const { data, isLoading, isError } = useQuery(
    [name],
    () => axios.get(url,config),
    {
      onSuccess: (data) => {
        setResponse(data.data);
      },
      onError: (error) => {
        console.log(error);
      },


    }
  );
  return { data, isLoading, response, isError };
};

export default useGetBatch;