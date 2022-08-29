import {
  Stack,
  HStack,
  Heading,
} from '@chakra-ui/react';

import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import { RiUserStarFill } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';
import {MdOutlineLanguage} from 'react-icons/md'
const Sidebar = () => {
  const location = useLocation();
  const nav = useNavigate();
  return (
    <Stack
      display={{base:'none',md:'inherit'}}
      overflow={'auto'}
      bg={'#1D1D1D'}
      h="calc(100vh-60px)"
      maxH={"90vh"}
      mt="60px"
      minH="calc(100vh - 60px)"
      w={{md:'25%',lg:'20%'}}
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
            onClick={() => nav('/')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={
              location.pathname === '/' ? 'link-active' : 'link'
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
          {/* series */}
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
          {/* transactions */}
          {/* <HStack
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
          </HStack> */}
          {/* categories */}
          <HStack
            onClick={() => nav('/categories')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={
              location.pathname === '/categories' ? 'link-active' : 'link'
            }
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <BiCategoryAlt fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Categories
            </Heading>
          </HStack>
          {/* languages */}
          <HStack
            onClick={() => nav('/languages')}
            _hover={{ cursor: 'pointer' }}
            py="3"
            className={
              location.pathname === '/languages' ? 'link-active' : 'link'
            }
            w={'100%'}
            px="4"
            spacing={'5'}
            color="white"
          >
            <MdOutlineLanguage color='white' fontSize={'1.4rem'} />
            <Heading fontWeight={'400'} fontSize="lg">
              Languages
            </Heading>
          </HStack>
        </Stack>
        {/* add new */}
        <Stack w={'100%'}>
          <Heading color="white" fontSize={'xl'} fontWeight="600">
            New
          </Heading>
          
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
