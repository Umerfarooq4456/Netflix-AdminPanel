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
  useToast,
  Spinner,
  Badge,
} from '@chakra-ui/react';

import ManageCategoriesModal from './AddMovieModal';
import {
  changeMovieStatus,
  getAllMovies,
} from '../../redux/actions/movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import UpdateMovieInfoModal from './UpdateMovieInfoModal';
import UpdateMovieThumbnailModal from './UpdateMovieThumbnailModal';
import UpdateMovieTrailerModal from './UpdateMovieTrailerModal';
import UpdateEpisodeVideoModal from './UpdateMovieVideoModal';
const MoviesDetails = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { loginData } = useSelector(state => state.Auth);
  const { movies, loading } = useSelector(state => state.Movie);

  useEffect(() => {
    const payload = {
      user_id: loginData?.data.user._id,
    };
    dispatch(getAllMovies(payload, toast));
  }, []);
// change status handler
  const changeMovieStatusHandler = id => {
    const payload = {
      user_id: loginData?.data?.user?._id,
      movie_id: id,
    };
    dispatch(changeMovieStatus(payload, toast));
  };
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
        <ManageCategoriesModal />
      </Stack>

      {/* Movies detail table */}
      <TableContainer
        overflowX={'auto'}
        maxH="75vh"
        overflowY={'auto'}
        w={'100%'}
      >
        <Table w={'100%'} variant="striped" colorScheme="pink">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="sm">
                Name
              </Th>
              <Th color={'black'} fontSize="sm">
                Active Status
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
                Update Movie
              </Th>
              <Th color={'black'} fontSize="sm">
                Change Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading === false ? (
              movies?.data?.map(data => (
                <Tr>
                  <Td color={'black'} fontSize={'sm'} fontWeight="600">
                    {data?.title}
                  </Td>
                  <Td>
                    {data?.activeStatus === true ? (
                      <Badge
                        _hover={{ cursor: 'pointer' }}
                        colorScheme="green"
                        size={'lg'}
                      >
                        Active
                      </Badge>
                    ) : (
                      <Badge
                        _hover={{ cursor: 'pointer' }}
                        colorScheme="red"
                        size={'lg'}
                      >
                        Inactive
                      </Badge>
                    )}
                  </Td>
                  <Td>
                    <UpdateMovieInfoModal data={data} />
                  </Td>
                  <Td>
                    <UpdateMovieThumbnailModal data={data} />
                  </Td>
                  <Td>
                    <UpdateMovieTrailerModal id={data?._id} />
                  </Td>
                  <Td>
                    <UpdateEpisodeVideoModal id={data?._id} />
                  </Td>
                  <Td>
                    <Button
                      onClick={() => changeMovieStatusHandler(data?._id)}
                      size={'sm'}
                      colorScheme="red"
                    >
                      Change Status
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Stack p="2" w={'100%'} alignItems="center">
                <Spinner colorScheme="red" size={'lg'} />
              </Stack>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default MoviesDetails;
