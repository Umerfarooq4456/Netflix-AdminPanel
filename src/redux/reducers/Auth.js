import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../actions/Auth/constant';

const initialState = {
  loading: false,
  loginData: null,
  error: null,
};

export const Auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, loginData: payload };
    case LOGIN_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};
