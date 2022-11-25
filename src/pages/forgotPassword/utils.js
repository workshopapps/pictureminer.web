import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://44.211.169.234:9000/api/v1/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
