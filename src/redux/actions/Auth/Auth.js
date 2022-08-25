import { LOGIN_LOADING, LOGIN_FAILED, LOGIN_SUCCESS } from './constant';
import { loginServices } from '../../Services/Auth';

export const authLogin = (data, nav) => async dispatch => {
  try {
    dispatch({ type: LOGIN_LOADING });
    const res = await loginServices(data);
    console.log(res.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    nav('/');
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, payload: error });
  }
};
