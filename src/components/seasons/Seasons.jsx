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
  Badge,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import AddSeasonModal from './AddSeasonModal';
import { useLocation } from 'react-router-dom';
import { getAllSeasons } from '../../redux/actions/seasons/Season.js';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import UpdateSeasonNameModal from './UpdateSeasonNameModal';
import AddEpisodeModal from '../episodes/AddEpisodeModal';
import {
  deleteEpisode,
  getEpisodebySeasonId,
} from '../../redux/actions/episode/episode';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
import UpdateEpisodeThumbnailModal from '../episodes/UpdateEpisodeThumbnailModal';
import UpdateEpisodeVideoModal from '../episodes/UpdateEpisodeVideoModal';
import UpdateEpisodeInfoModal from '../episodes/UpdateEpisodeInfoModal';

const Seasons = () => {
  const [seasonName, setSeasonName] = useState();
  const [isData, setIsData] = useState(false);
  const nav = useNavigate();
  const toast = useToast();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { id } = state;
  const { loginData } = useSelector(state => state.Auth);
  const { getSeasons, loading } = useSelector(state => state.Season);
  const episodeData = useSelector(state => state.Episode);

  const seasonObject = getSeasons.data?.find(s => s.seasonName === seasonName);

  useEffect(() => {
    const payload = {
      series_id: id,
    };
    dispatch(getAllSeasons(payload, toast));
  }, []);

  if ((isData === true ) && seasonObject) {
    const payload = {
      user_id: loginData?.data?.user?._id,
      season_id: seasonObject?._id,
    };
    if (!seasonObject) {
      ErrorToaster(toast, 'Please Choose a Season');
    } else {
      dispatch(getEpisodebySeasonId(payload, toast));
      setIsData(false);
    }
  }

  const changeEpisodeStatusHandler = id => {
    const payload = {
      user_id: loginData?.data?.user?._id,
      episode_id: id,
    };
    dispatch(deleteEpisode(payload, toast));
  };

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

        <AddSeasonModal seriesId={id} />
      </Stack>
      <Stack direction={'row'} w={'100%'} justifyContent="space-between">
        <Select
          isRequired
          fontSize={{ base: 'md', md: 'lg' }}
          w={'fit-content'}
          _hover={{ cursor: 'pointer' }}
          borderColor="black"
          value={seasonName}
          onChange={e => {
            setSeasonName(e.target.value);
            setIsData(true);
          }}
          _focusVisible={{}}
          placeholder="Select Season"
          size="md"
          bg="transparent"
        >
          {getSeasons?.data?.map(c => (
            <option value={c.seasonName}>{c.seasonName}</option>
          ))}
        </Select>
        <UpdateSeasonNameModal seasonData={seasonObject} />
      </Stack>

      {/* episode detail table */}
      <TableContainer overflowX={'auto'} w={'100%'}>
        <Table w={'100%'} variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="sm">
                Name
              </Th>
              <Th color={'black'} fontSize="sm">
                Episode Number
              </Th>
              <Th color={'black'} fontSize="sm">
                Status
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
                Change Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* {episodeData?.loading === false ? ( */}
            {episodeData?.getEpisodes?.data?.map(data => (
              <Tr>
                <Td color={'black'} fontSize={'sm'} fontWeight="600">
                  {data?.episodeName}
                </Td>
                <Td color={'black'} fontSize={'sm'} fontWeight="600">
                  {data?.episodeNumber}
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
                <Td><UpdateEpisodeInfoModal data={data}/></Td>
                <Td>
                  <UpdateEpisodeThumbnailModal id={data?._id} />
                </Td>
                <Td>
                  <UpdateEpisodeVideoModal id={data?._id} />
                </Td>
                <Td>
                  <Button
                    size={'sm'}
                    colorScheme="red"
                    onClick={() => changeEpisodeStatusHandler(data?._id)}
                  >
                    Change Status
                  </Button>
                </Td>
              </Tr>
            ))}

            {/* 
            ) : ( 
             <Stack p="2" w={'100%'} alignItems="center">
              <Spinner colorScheme="red" size={'lg'} />
            </Stack> 
             )}  */}
          </Tbody>
        </Table>
      </TableContainer>
      {/* add new episode */}
      <AddEpisodeModal seasonData={seasonObject} />
    </Stack>
  );
};

export default Seasons;
