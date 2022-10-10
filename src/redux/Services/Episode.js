import axios from 'axios';

export const addEpisodeServices = data => axios.post('/api/add_episode', data);

export const getEpisodeBySeasonIdServices = data => axios.post('/api/get_season_episodes', data);

export const updateEpisodeThumbnailServices = data => axios.post('/api/update_episode_thumbnail', data);

export const updateEpisodeVideoServices = data => axios.post('/api/update_episode_video', data);

export const deleteEpisodeServices = data => axios.post('/api/deactive_video', data);

export const updateEpisodeInfoServices = data => axios.post('/api/update_episode_info', data);