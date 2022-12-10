/* eslint-disable */
const initial = {
  loading: false,
  success: false,
  serverResponse: null,
  error: null,
};

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const loginInitial = {
  ...initial,
  serverResponse: user,
};

export const initialState = Object.freeze({
  login: loginInitial,
  signup: initial,
  mineImageWithUrl: initial,
  newsSubscription: initial
});
