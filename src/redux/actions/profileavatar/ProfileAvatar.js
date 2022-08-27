import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import { addprofileAvatarServices } from '../../Services/ProfileAvatar';
import {
  ADD_PROFILE_AVATAR_FAILED,
  ADD_PROFILE_AVATAR_LOADING,
  ADD_PROFILE_AVATAR_SUCCESS,
} from './constant';

export const addProfileAvatar = (data, toast) => async dispatch => {
  try {
    dispatch({ type: ADD_PROFILE_AVATAR_LOADING });
    const res = await addprofileAvatarServices(data);
    console.log(res?.data);
    dispatch({ type: ADD_PROFILE_AVATAR_SUCCESS, payload: res?.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: ADD_PROFILE_AVATAR_FAILED, payload: error });
  }
};
