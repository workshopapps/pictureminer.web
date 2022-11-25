import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { getLocalStorage } from '../localStorage';
import { useState } from 'react';

const useUploadImage = () => {
  const [response, setResponse] = useState(null);
  // const user = getLocalStorage('user');
  // const userToken = user ? user.data.Token : null;
  // console.log(userToken);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDUzMjY5ODgsImlkIjoiT2JqZWN0SUQoXCI2MzdmZTg4YzBhZjk3MTZlNmM5ZmI5NThcIikifQ.b0bZ7H9K2P9BFc4VNjKXCxYaxqY5ygp49E8Lzb8_l5w',
    },
  };

  const { mutate, isLoading } = useMutation(
    (data) =>
      axios.post(
        'http://minergramtest.herokuapp.com/api/v1/mine-service/upload',
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
  return { mutate, isLoading, response };
};

export default useUploadImage;
