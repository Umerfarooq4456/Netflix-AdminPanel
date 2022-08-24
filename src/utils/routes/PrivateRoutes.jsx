import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
const PrivateRoutes = ({ children }) => {
  return (
    <Stack pos={'relative'} w={'100%'}>
      <Stack w={'100%'}>
        <Header />
        <Stack mt='0 !important' w={'full'} direction={'row'}>
          <Sidebar />
          <Stack mt='60px !important' w={'100%'} ml={'20% !important'}>
          {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PrivateRoutes;
