import { useMutation } from 'react-query';
import axios from 'axios';
import { getLocalStorage } from '../localStorage';
import { useState } from 'react';

const useUploadImage = () => {
  const [response, setResponse] = useState(null);
  const user = getLocalStorage('user');
  const userToken = user ? user.data.Token : null;
  console.log(userToken);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userToken}`,
    },
  };
  const { mutate, isLoading } = useMutation(
    (data) =>
      axios.post(
<<<<<<< HEAD
        'http://44.211.169.234:9000/api/v1/mine-service/upload',
=======
        'https://minergramtest.herokuapp.com/api/v1/mine-service/upload',
>>>>>>> 16049a0f3681b107b2c146ae614c964f8b0f9c02
        data,
        config
      ),
    {
      onSuccess: (data) => {
        setResponse(data.data);
<<<<<<< HEAD
=======
        console.log(data);
>>>>>>> 16049a0f3681b107b2c146ae614c964f8b0f9c02
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return { mutate, isLoading, response };
};

export default useUploadImage;
