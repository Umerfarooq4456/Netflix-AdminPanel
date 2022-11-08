import {  Stack} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
const PrivateRoutes = ({ children }) => {
  const { loginData } = useSelector(s => s.Auth);
  return loginData ? (
    <Stack pos={'relative'} w={'100%'}>
      <Stack w={'100%'}>
        <Header />
        <Stack spacing={'0 !important'} mt="0 !important" w={'full'} direction={'row'}>
          <Sidebar />

          <Stack mt="60px !important"  w={{base:'100%',md:'75%',lg:'80%'}}>
            {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default PrivateRoutes;
