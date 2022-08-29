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
import ManageCategoriesModal from './AddMovieModal';
const MoviesDetails = () => {
  const nav = useNavigate();

  return (
    <Stack maxW={'100%'} w={'100%'} px={'8'} py="6">
      <Stack direction={'row'} w={'100%'} justifyContent="space-between">
        <Heading
          pb={'6'}
          textAlign={'center'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          Movie Details
        </Heading>
        <ManageCategoriesModal/>
      </Stack>

      {/* users detail table */}
      <TableContainer overflow={'auto'} w={'100%'}>
        <Table w={'100%'} variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="md">
                Movie Title
              </Th>
              <Th color={'black'} fontSize="md">
                Views
              </Th>
              <Th color={'black'} fontSize="md">
                Watch Time
              </Th>
              <Th color={'black'} fontSize="md">
                Genre
              </Th>
              <Th color={'black'} fontSize="md">
                Duration
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default MoviesDetails;
