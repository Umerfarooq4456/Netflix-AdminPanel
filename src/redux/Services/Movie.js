import axios from 'axios';

export const addMovieServices = data => axios.post('/api/add_movie', data);

