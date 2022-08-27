import React from 'react';
import {
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  Heading,
} from '@chakra-ui/react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { HiMenuAlt1 } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { AiOutlineTransaction } from 'react-icons/ai';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { RiUserStarFill } from 'react-icons/ri';

const NavbarDrawer = () => {
  const nav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HiMenuAlt1
        color="white"
        fontSize={'2rem'}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={'white'} fontSize='1.3rem' />

          <DrawerBody  p='0 !important'>
            <Stack
            bg={'black'}
              py={'6'}
              w={'100%'}
              alignItems={'baseline'}
              spacing={'6'}
              px="2"
            >
              {/* dashboard */}
              <Stack w={'100%'}>
                <Heading color="white" fontSize={'xl'} fontWeight="600">
                  Dashboard
                </Heading>
                <HStack
                  onClick={() => {
                    nav('/')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
                  onClick={() => {
                    nav('/users')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
                   onClick={() => {
                    nav('/movies')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
                   onClick={() => {
                    nav('/')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
                   onClick={() => {
                    nav('/addmovie')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
                   onClick={() => {
                    nav('/series')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
                   onClick={() => {
                    nav('/addavatars')
                    onClose()
                  }}
                  _hover={{ cursor: 'pointer' }}
                  py="3"
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
