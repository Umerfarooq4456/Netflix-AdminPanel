import {
  Stack,
  Text,
  Image,
  HStack,
  IconButton,
  Heading,
} from '@chakra-ui/react';

import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { AiOutlineTransaction } from 'react-icons/ai';
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import { RiUserStarFill } from 'react-icons/ri';
const Sidebar = () => {
  const location = useLocation();
  const nav = useNavigate();
  return (
    <Stack
      overflow={'hidden'}
      bg={'#1D1D1D'}
      h="calc(100vh-60px)"
      mt="60px"
      minH="calc(100vh - 60px)"
      w={'20%'}
    >
      <Stack
        py={'6'}
        w={'100%'}
        alignItems={'baseline'}
        direction="column"
        spacing={'6'}
        px="5"
      >
        {/* dashboard */}
        <Stack w={'100%'}>
          <Heading color="white" fontSize={'xl'} fontWeight="600">
            Dashboard
          </Heading>
          <HStack
            onClick={() => nav('/dashboard')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={
              location.pathname === '/dashboard' ? 'link-active' : 'link'
            }
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <AiFillHome fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Home
            </Heading>
          </HStack>
        </Stack>
        {/* quick menu */}
        <Stack w={'100%'}>
          <Heading color="white" fontSize={'xl'} fontWeight="600">
            Quick Menu
          </Heading>
          {/* users */}
          <HStack
            onClick={() => nav('/users')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={location.pathname === '/users' ? 'link-active' : 'link'}
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <FaUserFriends fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Users
            </Heading>
          </HStack>
          {/* movies */}
          <HStack
            onClick={() => nav('/movies')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={location.pathname === '/movies' ? 'link-active' : 'link'}
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <MdMovie fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Movies
            </Heading>
          </HStack>
          {/* transactions */}
          <HStack
            onClick={() => nav('/transactions')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={
              location.pathname === '/transactions' ? 'link-active' : 'link'
            }
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <AiOutlineTransaction fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Transactions
            </Heading>
          </HStack>
        </Stack>
        {/* add new */}
        <Stack w={'100%'}>
          <Heading color="white" fontSize={'xl'} fontWeight="600">
            New
          </Heading>
          
          {/* movies */}
          <HStack
            onClick={() => nav('/addmovie')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={location.pathname === '/addmovie' ? 'link-active' : 'link'}
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <MdMovie fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Movie
            </Heading>
          </HStack>
          <HStack
            onClick={() => nav('/series')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={location.pathname === '/series' ? 'link-active' : 'link'}
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <BsFillCollectionPlayFill fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Series
            </Heading>
          </HStack>
          <HStack
            onClick={() => nav('/addavatars')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={location.pathname === '/addavatars' ? 'link-active' : 'link'}
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <RiUserStarFill fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Avatar
            </Heading>
          </HStack>
    
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
