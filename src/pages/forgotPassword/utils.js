import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://discripto.hng.tech/api1/api/v1/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
