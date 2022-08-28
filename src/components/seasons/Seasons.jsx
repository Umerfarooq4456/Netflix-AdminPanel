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
  useToast,
  Spinner
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import AddSeasonModal from './AddSeasonModal';
import { useLocation } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { getAllSeasons } from '../../redux/actions/seasons/Season';
import { useDispatch, useSelector } from 'react-redux/es/exports';


const Seasons = () => {
  const nav = useNavigate();
  const toast = useToast();
  const { state } = useLocation();
  const dispatch = useDispatch()
  console.log("🚀 ~ file: Seasons.jsx ~ line 23 ~ Seasons ~ state", state)
  const { id } = state;
  console.log("🚀 ~ file: Seasons.jsx ~ line 25 ~ Seasons ~ id", id)
  // const { getSeasons, loading } = useSelector(state => state.Seasons);


  useEffect(() => {
    const payload = {
      series_id: id,
    };
    dispatch(getAllSeasons(payload, toast));
  }, []);

  return (
    <Stack spacing={'4'} maxW={'100%'} w={'100%'} px={'8'} py="6">
      <Stack direction={'row'} w={'100%'} justifyContent="space-between">
        <Heading
          pb={'6'}
          textAlign={'center'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          Season Details
        </Heading>
        <Select
          isRequired
          fontSize={{ base: 'md', md: 'lg' }}
          w={'fit-content'}
          _hover={{ cursor: 'pointer' }}
          borderColor="black"
          // value={releasingYear}
          // onChange={e => setreleasingYear(e.target.value)}
          _focusVisible={{}}
          placeholder="Select Season"
          size="lg"
          bg="transparent"
        >
          { }
          <option className="season-options" value="Season1">
            Season1
          </option>
          <option className="season-options" value="Season2">
            Season2
          </option>
          <option className="season-options" value="Season3">
            Season3
          </option>
        </Select>
        <AddSeasonModal seriesId={id} />
      </Stack>

      {/* episode detail table */}
      <TableContainer overflowX={'auto'} w={'100%'}>
        <Table w={'100%'} variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="sm">
                Title
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Info
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Thumbnail
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Video
              </Th>
              <Th color={'black'} fontSize="sm">
                Delete Episode
              </Th>
              <Th color={'black'} fontSize="sm">
                Manage Seasons
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* {loading === false ? (
              getSeasons?.data.map(data => ( */}
            <Tr>
              <Td color={'black'} fontSize={'sm'} fontWeight="600">
                Dustin
              </Td>
              <Td>{/* <EditInfoModal/> */}</Td>
              <Td>{/* <UpdateThumbnailModal/> */}</Td>
              <Td>{/* <UpdateTrailerModal/> */}</Td>
              <Td>
                <Button size={'sm'} colorScheme="red">
                  Delete
                </Button>
              </Td>
              <Td>
                <Button size={'sm'} colorScheme="linkedin">
                  Manage Seasons
                </Button>
              </Td>
            </Tr>
            {/* )) */}
            {/* ) : ( */}
            {/* <Stack p="2" w={'100%'} alignItems="center">
              <Spinner colorScheme="red" size={'lg'} />
            </Stack> */}
            {/* )} */}

          </Tbody>
        </Table>
      </TableContainer>
      <Button
        rightIcon={<BiPlus fontSize="1.7rem" />}
        alignSelf={'center'}
        w="fit-content"
        size={'md'}
        colorScheme="red"
      >
        Add Episode
      </Button>
    </Stack>
  );
};

export default Seasons;
