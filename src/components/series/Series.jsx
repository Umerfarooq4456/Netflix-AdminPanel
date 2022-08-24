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
import AddSeriesModal from './AddSeriesModal';
import EditInfoModal from './EditInfoModal';
import UpdateThumbnailModal from './UpdateThumbnailModal';
import UpdateTrailerModal from './UpdateTrailerModal';
const Series = () => {
  const nav = useNavigate();

  return (
    <Stack maxW={'100%'} w={'100%'} px={'8'} py="6">
      <Stack direction={'row'} w={'100%'} justifyContent="space-between">
        <Heading
          pb={'6'}
          textAlign={'center'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          Series Details
        </Heading>
        <AddSeriesModal />
      </Stack>

      {/* users detail table */}
      <TableContainer overflowX={'auto'} w={'100%'}>
        <Table w={'100%'} variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="sm">
                Name
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Info
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Thumbnail
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Trailer
              </Th>
              <Th color={'black'} fontSize="sm">
                Deactivate Series
              </Th>
              <Th color={'black'} fontSize="sm">
                Manage Seasons
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td color={'black'} fontSize={'sm'} fontWeight='600'>Money Hiest</Td>
              <Td>
                <EditInfoModal/>
              </Td>
              <Td>
              <UpdateThumbnailModal/>
              </Td>
              <Td>
              <UpdateTrailerModal/>
              </Td>
              <Td>
              <Button size={'sm'} colorScheme='red'>Deactivate</Button>
              </Td>
              <Td>
              <Button size={'sm'} colorScheme='linkedin'>Manage Seasons</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Series;