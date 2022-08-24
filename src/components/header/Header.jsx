import {
  HStack,
  Image,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import {RiLogoutCircleRLine} from 'react-icons/ri'
import profilepic from '../../assets/images/profilepic.jfif'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const nav = useNavigate()
  return (
    <Stack
    pos={'fixed'}
    top='0'
      bgColor={'#111'}
      direction={'row'}
      px="8"
      h='60px'
      justifyContent="space-between"
      w={'100%'}
    >
      <Image _hover={{ cursor: 'pointer' }} src={logo} w={'28'} />
      <HStack>
        <Menu>
          <MenuButton w={'10'} _active={{}} _focusVisible={{}} bg="" _hover={{}}>
            <Image
              w={'10'}
              h='10'
              borderRadius="full"
              src={profilepic}
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={()=>nav('/')}  h={'10'} alignItems={'center'}>
            <Button _hover={{}}  colorScheme='black' variant={'link'} rightIcon={<RiLogoutCircleRLine/>}>SignOut</Button>
            </MenuItem>
            <MenuItem>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Stack>
  );
};

export default Header;
