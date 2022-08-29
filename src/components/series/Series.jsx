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
  Spinner,
  Toast,
  useToast,
  Badge,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import AddSeriesModal from './AddSeriesModal';
import EditInfoModal from './EditInfoModal';
import UpdateThumbnailModal from './UpdateThumbnailModal';
import UpdateTrailerModal from './UpdateTrailerModal';
import {
  deactiveSeries,
  getAllSeries,
} from '../../redux/actions/Series/Series';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Series = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { allSeries, loading } = useSelector(state => state.Series);
  console.log(allSeries);
  useEffect(() => {
    dispatch(getAllSeries(toast));
  }, []);

  const nav = useNavigate();

  const deactiveSeriesHandler = id => {
    const payload = {
      series_id: id,
    };
    dispatch(deactiveSeries(payload, toast));
  };
  return (
    <Stack maxW={'100%'} w={'100%'} px={'8'} py="6" overflow={'auto'}>
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
      <TableContainer overflowX={'auto'} maxH='80vh' overflowY={'auto'} w={'100%'}>
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
                Deactivate Series
              </Th>
              <Th color={'black'} fontSize="sm">
                Manage Seasons
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading === false ? (
              allSeries?.series?.map(data => (
                <Tr>
                  <Td color={'black'} fontSize={'sm'} fontWeight="600">
                    {data?.seriesName}
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
                    <EditInfoModal data={data} />
                  </Td>
                  <Td>
                    <UpdateThumbnailModal data={data} />
                  </Td>
                  <Td>
                    <UpdateTrailerModal data={data} />
                  </Td>
                  <Td>
                    <Button
                      onClick={() => deactiveSeriesHandler(data?._id)}
                      size={'sm'}
                      colorScheme="red"
                    >
                      Deactivate
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      size={'sm'}
                      colorScheme="linkedin"
                      onClick={() =>
                        nav('/manageseasons', {
                          state: { id: data?._id },
                        })
                      }
                    >
                      Manage Seasons
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

export default Series;
