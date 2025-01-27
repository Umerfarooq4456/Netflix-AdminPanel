import {
  Button,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  Select,
  useToast,
} from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import React, { useState } from 'react';
import { createSeries } from '../../redux/actions/Series/Series';
import { useSelector, useDispatch } from 'react-redux';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
import MultiSelectDropdown from '../multiselect/MultiSelect';

export const AddSeriesContent = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const { loginData } = useSelector(state => state.Auth);
  const userId = loginData?.data?.user?._id;
  const { allCategories } = useSelector(state => state.Category);
  const { allLanguages } = useSelector(state => state.Language);
  const { loading } = useSelector(state => state.Series);

  const [seriesName, setseriesName] = useState();
  const [description, setdescription] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [trailer, setTrailer] = useState();
  const [genre, setGenre] = useState();
  const [language, setLanguage] = useState();
  const [grossRating, setGrossRating] = useState();
  const [maturityRating, setmaturityRating] = useState();
  const [cast, setcast] = useState([]);
  const [seriesCast, setSeriesCast] = useState([]);
  // cast
  const addCast = e => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        setcast([...cast, e.target.value]);

        e.target.value = '';
      }
    }
  };
  const removeCast = removedCast => {
    const newCast = cast.filter(tag => tag !== removedCast);
    setcast(newCast);
  };
  // supported image formats
  const supportedThumbailFormats = ['image/png', 'image/jpeg'];
  // supported image formats
  const supportedTrailerFormats = ['video/mp4'];
  // submit handler

  const submitHandler = () => {
    const str = String(cast);
    setSeriesCast(str);
    const payload = new FormData();
    payload.append('user_id', userId);
    payload.append('seriesName', seriesName);
    payload.append('thumbnail', thumbnail);
    payload.append('trailer', trailer);
    payload.append('description', description);
    payload.append('genre', genre);
    payload.append('language', language);
    payload.append('grossRatings', grossRating);
    payload.append('cast', seriesCast);
    payload.append('maturityRating', maturityRating);
    if (
      !thumbnail ||
      !trailer ||
      !seriesName ||
      !description ||
      !genre ||
      !grossRating ||
      !maturityRating
    ) {
      ErrorToaster(toast, 'Please fill all details');
      console.log(payload.get('cast'));
    } else {
      dispatch(createSeries(payload, toast));
    }
  };
  return (
    <Stack py="6" px={{ base: '0', md: '18', lg: '48' }}>
      <Heading
        pb={'6'}
        textAlign={'center'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
      >
        Add New Series
      </Heading>
      <Stack
        maxH={'70vh'}
        overflow="auto"
        px={{ base: '2', md: '4' }}
        w={'100%'}
        spacing={'10'}
      >
        {/* name and description */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            value={seriesName}
            onChange={e => setseriesName(e.target.value)}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="Series name"
            isRequired
          />
          <Input
            w={{ base: '100%', md: '50%' }}
            value={description}
            onChange={e => setdescription(e.target.value)}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="Series description"
            isRequired
          />
        </Stack>
        {/* thumbnail and trailer  */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            className="upload-title"
            w={{ base: '100%', md: '50%' }}
            type={'file'}
            size={'lg'}
            onChange={e => setThumbnail(e.target.files[0])}
            accept={supportedThumbailFormats}
            borderColor="black"
            _focusVisible={{}}
            _hover={{ cursor: 'pointer' }}
            isRequired
          />
          <Input
            className="upload-trailer"
            borderColor="black"
            _focusVisible={{}}
            _hover={{ cursor: 'pointer' }}
            w={{ base: '100%', md: '50%' }}
            type={'file'}
            onChange={e => setTrailer(e.target.files[0])}
            accept={supportedTrailerFormats}
            size={'lg'}
            isRequired
          />
        </Stack>
        {/* gross rating and maturity rating */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Select
            isRequired
            fontSize={{ base: 'md', md: 'lg' }}
            w={{ base: '100%', md: '50%' }}
            value={grossRating}
            onChange={e => setGrossRating(e.target.value)}
            _hover={{ cursor: 'pointer' }}
            borderColor="black"
            _focusVisible={{}}
            placeholder="Choose Gross Rating"
            size="lg"
          >
            <option value="0star">0star</option>
            <option value="1star">1star</option>
            <option value="2stars">2stars</option>
            <option value="3stars">3stars</option>
            <option value="4stars">4stars</option>
            <option value="5stars">5stars</option>
          </Select>
          <Select
            isRequired
            fontSize={{ base: 'md', md: 'lg' }}
            w={{ base: '100%', md: '50%' }}
            value={maturityRating}
            onChange={e => setmaturityRating(e.target.value)}
            _hover={{ cursor: 'pointer' }}
            borderColor="black"
            _focusVisible={{}}
            placeholder="Choose Maturity Rating"
            size="lg"
          >
            <option value="7+">7+</option>
            <option value="13+">13+</option>
            <option value="16+">16+</option>
            <option value="18+">18+</option>
          </Select>
        </Stack>

        {/* select genre and languages */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Stack w={{ base: '100%', md: '50%' }}>
            {allCategories ? (
              <MultiSelectDropdown
                data={allCategories?.data}
                array={e => setGenre(e)}
                type={'category'}
              />
            ) : null}
          </Stack>
          <Stack w={{ base: '100%', md: '50%' }}>
            {allLanguages ? (
              <MultiSelectDropdown
                data={allLanguages?.lang}
                array={e => setLanguage(e)}
                type={'language'}
              />
            ) : null}
          </Stack>
        </Stack>
        {/*  cast */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="cast"
            onKeyDown={addCast}
            isRequired
          />
        </Stack>
        {/* cast names preview */}
        {cast?.length !== 0 ? (
          <SimpleGrid
            w={{ base: '100%', md: '50%' }}
            minChildWidth="120px"
            spacingX="10px"
            spacingY={'15px'}
            alignSelf="end"
          >
            {cast?.map((cast, index) => (
              <Stack w={'fit-content'} h="fitcontent" pos={'relative'}>
                {' '}
                <Tag
                  key={index}
                  h={'40px'}
                  border="1px solid black"
                  borderRadius="md"
                  colorScheme={'blue'}
                >
                  {cast} {''}
                </Tag>
                <Stack
                  onClick={() => removeCast(cast)}
                  _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.3)',
                  }}
                  transition="transform .2s"
                  pos={'absolute'}
                  top="-15px"
                  right="-5px"
                >
                  <ImCross fontSize={'0.8rem'} color="red" />
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        ) : null}
        {/* submit button */}
        <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
          <Button
            // isLoading={loading}
            borderRadius={'lg'}
            size={'lg'}
            w={'fit-content'}
            colorScheme={'red'}
            onClick={() => submitHandler()}
          >
            {' '}
            Upload Series
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
