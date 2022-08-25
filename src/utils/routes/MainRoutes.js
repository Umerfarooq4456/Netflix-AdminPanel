import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/auth/Login';
import Dashboard from '../../screens/Home';
import SeasonsScreen from '../../screens/SeasonsScreen';
import SeriesScreen from '../../screens/SeriesScreen';
import PrivateRoutes from './PrivateRoutes';
import Users from '../../screens/Users';
import AddMovie from '../../screens/movies/AddMovie';
import Movies from '../../screens/movies/Movies';
import Avatar from '../../screens/Avatar';

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
            <Users />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/addmovie"
        element={
          <PrivateRoutes>
            {' '}
            <AddMovie />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/movies"
        element={
          <PrivateRoutes>
            {' '}
            <Movies />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/series"
        element={
          <PrivateRoutes>
            {' '}
            <SeriesScreen />{' '}
          </PrivateRoutes>
        }
      />
      <Route
        path="/addavatars"
        element={
          <PrivateRoutes>
            {' '}
            <Avatar />{' '}
          </PrivateRoutes>
        }
      />
       <Route
        path="/manageseasons"
        element={
          <PrivateRoutes>
            {' '}
            <SeasonsScreen />{' '}
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
