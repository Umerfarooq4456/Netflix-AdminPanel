import {
  CHANGE_EPISODE_STATUS_FAILED,
  CHANGE_EPISODE_STATUS_LOADING,
  CHANGE_EPISODE_STATUS_SUCCESS,
  GET_EPISODE_BY_SEASON_ID_FAILED,
  GET_EPISODE_BY_SEASON_ID_LOADING,
  GET_EPISODE_BY_SEASON_ID_SUCCESS,
} from '../actions/episode/constant';

const initialState = {
  loading: false,
  getEpisodes: [],
  error: null,
};

export const Episode = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EPISODE_BY_SEASON_ID_LOADING:
      return { ...state, loading: true };

    case GET_EPISODE_BY_SEASON_ID_SUCCESS:
      return { ...state, loading: false, getEpisodes: payload };

    case GET_EPISODE_BY_SEASON_ID_FAILED:
      return { ...state, loading: false, error: payload };

    case CHANGE_EPISODE_STATUS_LOADING:
      return { ...state, loading: true };

    case CHANGE_EPISODE_STATUS_SUCCESS:
      console.log(payload);

      const updatedArray = state.getEpisodes.data.map(episode =>
        episode?._id === payload.data._id
          ? { ...episode, activeStatus: !episode.activeStatus }
          : episode
      )
      console.log("🚀 ~ file: Episode.js ~ line 38 ~ Episode ~ updatedArray", updatedArray)
      return {...state, loading: false, getEpisodes: updatedArray};

    case CHANGE_EPISODE_STATUS_FAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
