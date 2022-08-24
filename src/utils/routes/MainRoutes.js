import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/auth/Login';
import Dashboard from '../../components/dashboard/Dashboard';
import AddMovies from '../../components/movies/AddMovies';
import MoviesDetails from '../../components/movies/MoviesDetails';
import AddAvatar from '../../components/profile pics/AddAvatar';
import Series from '../../components/series/Series';
import UserDetails from '../../components/users/UserDetails';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            {' '}
            <Dashboard />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/users"
        element={
          <PrivateRoutes>
            {' '}
            <UserDetails />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/addmovie"
        element={
          <PrivateRoutes>
            {' '}
            <AddMovies />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/movies"
        element={
          <PrivateRoutes>
            {' '}
            <MoviesDetails />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/series"
        element={
          <PrivateRoutes>
            {' '}
            <Series />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/addavatars"
        element={
          <PrivateRoutes>
            {' '}
            <AddAvatar />{' '}
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
