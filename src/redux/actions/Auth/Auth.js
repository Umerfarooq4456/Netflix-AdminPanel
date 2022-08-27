import { LOGIN_LOADING, LOGIN_FAILED, LOGIN_SUCCESS } from './constant';
import { loginServices } from '../../Services/Auth';
import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';

export const authLogin = (data, nav,toast) => async dispatch => {
  try {
    dispatch({ type: LOGIN_LOADING });
    const res = await loginServices(data);
    console.log(res?.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res?.data });
    SuccessToaster(toast, res?.data?.message);
    nav('/');
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: LOGIN_FAILED, payload: error });
  }
};
