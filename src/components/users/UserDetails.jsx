import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Button,
  Heading,
  Select,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
const UserDetails = () => {
    const [status, setStatus] = useState()
  const nav = useNavigate();
  const userData = [
    {
      username: 'sufyan',
      email: 'sufyan123@gmail.com',
      status: 'active',
    },
    {
      username: 'sohaib',
      email: 'sohaib@gmail.com',
      status: 'active',
    },
    {
      username: 'zain tariq',
      email: 'zaintariq@gmail.com',
      status: 'Inactive',
    },
    {
        username: 'syed mustafa haider',
        email: 'mustafahaider@gmail.com',
        status: 'active',
      },
      {
        username: 'tayybah awan',
        email: 'tayybahawan@gmail.com',
        status: 'Inactive',
      },
      {
        username: 'sufyan',
        email: 'sufyan123@gmail.com',
        status: 'active',
      },
      {
        username: 'sohaib',
        email: 'sohaib@gmail.com',
        status: 'active',
      },
      {
        username: 'zain tariq',
        email: 'zaintariq@gmail.com',
        status: 'Inactive',
      },
      {
          username: 'syed mustafa haider',
          email: 'mustafahaider@gmail.com',
          status: 'active',
        },
        {
          username: 'tayybah awan',
          email: 'tayybahawan@gmail.com',
          status: 'Inactive',
        },
        {
          username: 'sufyan',
          email: 'sufyan123@gmail.com',
          status: 'active',
        },
        {
          username: 'sohaib',
          email: 'sohaib@gmail.com',
          status: 'active',
        },
        {
          username: 'zain tariq',
          email: 'zaintariq@gmail.com',
          status: 'Inactive',
        },
        {
            username: 'syed mustafa haider',
            email: 'mustafahaider@gmail.com',
            status: 'active',
          },
          {
            username: 'tayybah awan',
            email: 'tayybahawan@gmail.com',
            status: 'Inactive',
          }
  ];
  useEffect(() => {
        console.log(status)

  }, [status])
  
 
  return (
    <Stack maxW={'100%'} w={'100%'} px={'8'} py="4">
      <Heading
        pb={'6'}
        textAlign={'center'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
      >
        User Details
      </Heading>

      {/* users detail table */}
      <TableContainer overflow={'auto'} w={'100%'}>
        <Table w={'100%'} variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="md">
                Username
              </Th>
              <Th color={'black'} fontSize="md">
                Email
              </Th>
              <Th color={'black'} fontSize="md">
                Status
              </Th>
              <Th color={'black'} fontSize="md">
                Change Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((data) => (
              <Tr>
                <Td>{data?.username}</Td>
                <Td>{data?.email}</Td>
                <Td>{data?.status}</Td>
                <Td>
                  <Select
                  onChange={(e)=>setStatus(e.target.value)}
                    _hover={{ cursor: 'pointer' }}
                    w="100px"
                    variant={'unstyled'}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </Select>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default UserDetails;
