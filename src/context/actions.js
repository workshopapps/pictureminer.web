/* eslint-disable indent */
/* eslint-disable */
import axios from 'axios';
import { getLocalStorage } from '../localStorage';
import { routes } from '../routes/routes';

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

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      routes.login,
      { username, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('currentUser', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signup =
  ({ firstName, lastName, email, username, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        routes.signup,
        {
          username,
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        },
        config
      );

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export async function logout(dispatch) {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem('currentUser');
  window.location.href = '/';
}

export const mineImageWithUrlAction =
  ({ url }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MINE_IMAGE_WITH_URL_REQUEST,
      });

      const user = getLocalStorage('user');
      const userToken = user ? user.Token : null;

      // console.log({ userToken });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      };
      const { data } = await axios.post(
        routes.mineImageWithUrl,
        { url },
        config
      );

      dispatch({
        type: MINE_IMAGE_WITH_URL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MINE_IMAGE_WITH_URL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


export const newsSubscriptionAction =
({ email }) =>
async (dispatch) => {
  try {
    dispatch({
      type: NEWS_SUBSCRIPTION_REQUEST,
    });

    // const user = getLocalStorage('user');
    // const userToken = user ? user.Token : null;

    // console.log({ userToken });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${userToken}`,
      },
    };
    const { data } = await axios.post(
      routes.subscription,
      { email },
      config
    );

    dispatch({
      type: NEWS_SUBSCRIPTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_SUBSCRIPTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
