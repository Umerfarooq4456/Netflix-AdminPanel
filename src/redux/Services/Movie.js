import axios from 'axios';

export const addMovieServices = data => axios.post('/api/add_movie', data);

export const getAllMoviesServices = data => axios.post('/api/get_all_movies', data);

export const updateMovieInfoServices = data => axios.post('/api/update_movie_info', data);

export const updateMovieThumbnailServices = data => axios.post('/api/update_movie_thumbnail', data);

export const updateMovieTrailerServices = data => axios.post('/api/update_movie_trailer', data);

export const updateMovieVideoServices = data => axios.post('/api/update_movie_video', data);

export const changeMovieStatusServices = data => axios.post('/api/deactivate_movie', data);



