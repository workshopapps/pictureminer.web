import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
} from './contants';

import { initialState as initial } from './initialState';

export const reducers = (initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...initialState,
        signup: {
          ...initial.signup,
          loading: true,
        },
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...initialState,
        signup: {
          ...initial.signup,
          loading: false,
          success: true,
          serverResponse: action.payload,
        },
      };
    case USER_SIGNUP_FAIL:
      return {
        ...initialState,
        signup: {
          ...initial.signup,
          loading: false,
          error: action.payload,
        },
      };
    case USER_LOGIN_REQUEST:
      return { ...initialState, login: { ...initial.login, loading: true } };
    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        login: {
          ...initial.login,
          success: true,
          serverResponse: action.payload,
        },
      };
    case USER_LOGIN_FAIL:
      return {
        ...initialState,
        login: {
          ...initial.login,
          error: action.payload,
        },
      };
    case USER_LOGOUT:
      return {
        ...initialState,
        login: {
          ...initial.login,
          loading: false,
          success: false,
          serverResponse: null,
          error: null,
        },
      };

    default:
      return initialState;
  }
};
