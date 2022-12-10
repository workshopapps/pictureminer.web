/* eslint-disable indent */
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
  MINE_IMAGE_WITH_URL_REQUEST,
  MINE_IMAGE_WITH_URL_SUCCESS,
  MINE_IMAGE_WITH_URL_FAIL,
  NEWS_SUBSCRIPTION_REQUEST,
  NEWS_SUBSCRIPTION_SUCCESS,
  NEWS_SUBSCRIPTION_FAIL,
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

    case MINE_IMAGE_WITH_URL_REQUEST:
      return {
        ...initialState,
        mineImageWithUrl: { ...initial.mineImageWithUrl, loading: true },
      };
    case MINE_IMAGE_WITH_URL_SUCCESS:
      return {
        ...initialState,
        mineImageWithUrl: {
          ...initial.mineImageWithUrl,
          success: true,
          serverResponse: action.payload,
        },
      };
    case MINE_IMAGE_WITH_URL_FAIL:
      return {
        ...initialState,
        mineImageWithUrl: {
          ...initial.mineImageWithUrl,
          error: action.payload,
        },
      };

    case NEWS_SUBSCRIPTION_REQUEST:
      return {
        ...initialState,
        newsSubscription: { ...initial.newsSubscription, loading: true },
      };
    case NEWS_SUBSCRIPTION_SUCCESS:
      return {
        ...initialState,
        newsSubscription: {
          ...initial.newsSubscription,
          success: true,
          serverResponse: action.payload,
        },
      };
    case NEWS_SUBSCRIPTION_FAIL:
      return {
        ...initialState,
        newsSubscription: {
          ...initial.newsSubscription,
          error: action.payload,
        },
      };

    default:
      return initialState;
  }
};
