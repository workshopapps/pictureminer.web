import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://minergramtest.herokuapp.com/api/v1/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
