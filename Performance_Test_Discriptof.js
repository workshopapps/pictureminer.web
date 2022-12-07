/** @format */

import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  duration: '1m',
  vus: 100,
};

export default function () {
  http.get('http://discripto.hng.tech');
  sleep(3);
}
