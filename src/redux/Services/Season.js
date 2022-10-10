import axios from 'axios';
export const addSeasonServices = (data) => axios.post('/api/create_season', data);
export const getAllSeasonsServices = (data) => axios.post('/api/get_series_seasons', data);
export const updateSeasonNameServices = (data) => axios.post('/api/update_season_name', data);