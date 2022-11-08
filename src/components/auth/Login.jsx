import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Switch,
  useToast,
} from '@chakra-ui/react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { authLogin } from '../../redux/actions/Auth/Auth';
import ErrorToaster from '../../utils/toaster/ErrorToaster';


const Login = () => {
  const { loading } = useSelector(state => state.Auth);
  const toast = useToast();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitHandler = e => {
    e.preventDefault();

    if (!email || !password ) {
      ErrorToaster(toast,'Please Enter email and password')
      console.log(email, password);
    } 
    else {
      const payload = {
        email: email,
        password: password,
      };
      dispatch(authLogin(payload, nav, toast));
      setEmail('')
      setPassword('')
    }
  };
  return (
    <Stack
      w="100%"
      maxH={'100vh'}
      h={'100vh'}
      bg="#111"
      px={{ base: '4', md: '6', lg: '20' }}
      py={'6'}
    >
      <Stack mb={'16 !important'}>
        <Image _hover={{ cursor: 'pointer' }} src={logo} w="40" />
      </Stack>
      <Stack
        alignItems={'center'}
        alignSelf={'center'}
        style={{ userSelect: 'none' }}
        w={{ base: '100%', md: '50%', lg: '40%' }}
        spacing="14"
      >
        <Stack spacing={'8'} w={'100%'}>
          {/* email */}
          <FormControl>
            <FormLabel ms="4px" color={'white'} fontSize="lg" fontWeight="600">
              Email
            </FormLabel>
            <Input
              _focusVisible={{}}
              color="white"
              fontSize="md"
              type="text"
              placeholder="Enter Your email address"
              size="lg"
              fontWeight={'600'}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormControl>
          {/* password */}
          <FormControl>
            <FormLabel ms="4px" color={'white'} fontSize="lg" fontWeight="600">
              Password
            </FormLabel>
            <Input
              _focusVisible={{}}
              color="white"
              fontWeight="600"
              fontSize="md"
              type="password"
              placeholder="Enter Your password"
              size="lg"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </FormControl>
          {/* remember me */}
          <FormControl display="flex" alignItems="center">
            <Switch id="remember-login" colorScheme="red" me="10px" />
            <FormLabel
              htmlFor="remember-login"
              mb="0"
              ms="1"
              fontWeight="normal"
              color={'white'}
            >
              Remember me
            </FormLabel>
          </FormControl>
        </Stack>
        <Stack spacing={'6'} w={'100%'}>
          {/* signIn button */}
          <Button
            onClick={e => {
              submitHandler(e);
            }}
            alignSelf={'center'}
            fontSize="md"
            type="submit"
            colorScheme={'red'}
            w="30%"
            h="45"
            isLoading={loading}
          >
            SIGN IN
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
