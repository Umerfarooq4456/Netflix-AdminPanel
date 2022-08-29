import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  useToast,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { getAllCategories } from '../../redux/actions/category/Category';
import { getAllLanguages } from '../../redux/actions/language/Language';
import MultiSelectDropdown from '../multiselect/MultiSelect';
import { addNewMovie } from '../../redux/actions/movie/Movie';
const AddMovieModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginData } = useSelector(state => state.Auth);
  const { allCategories } = useSelector(state => state.Category);
  const { allLanguages } = useSelector(state => state.Language);
  const toast = useToast();
  const dispatch = useDispatch();
  const [grossRating, setGrossRating] = useState();
  const [description, setdescription] = useState();
  const [releasingYear, setreleasingYear] = useState();
  const [movieTitle, setmovieTitle] = useState();
  const [genre, setgenre] = useState([]);
  const [maturityRating, setmaturityRating] = useState();
  const [cast, setcast] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [trailer, setTrailer] = useState();
  const [duration, setduration] = useState();
  const [writer, setwriter] = useState([]);
  const [director, setdirector] = useState([]);
  const [language, setlanguage] = useState([]);
  const [movieVideo, setMovieVideo] = useState();

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
  // writer
  const addWriter = e => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        setwriter([...writer, e.target.value]);

        e.target.value = '';
      }
    }
  };
  const removeWriter = removedWriter => {
    const newWriter = writer.filter(tag => tag !== removedWriter);
    setwriter(newWriter);
  };
  // director
  const addDirector = e => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        setdirector([...director, e.target.value]);

        e.target.value = '';
      }
    }
  };
  const removeDirector = removedDirector => {
    const newDirector = director.filter(tag => tag !== removedDirector);
    setdirector(newDirector);
  };
  // supported image formats
  const supportedThumbailFormats = ['image/png', 'image/jpeg'];
  // supported image formats
  const supportedTrailerFormats = ['video/mp4'];
  // submit handler
  const submitHandler = () => {
    const castString = String(cast);
    setcast(castString);
    const genreString = String(genre);
    setgenre(genreString);
    const writerString = String(writer);
    setwriter(writerString);
    const directorString = String(director);
    setdirector(directorString);
    // if (
    //   !description ||
    //   !movieTitle ||
    //   !genre ||
    //   !releasingYear ||
    //   !grossRating ||
    //   !maturityRating ||
    //   !cast ||
    //   !director
    // ) {
    //   alert('Please fill all fields!');
    //   return;
    // } else {
      const payload = new FormData();
      payload.append('user_id', loginData?.data?.user?._id);
      payload.append('title', movieTitle);
      payload.append('thumbnail', thumbnail);
      payload.append('trailer', trailer);
      payload.append('description', description);
      payload.append('genre', genre);
      payload.append('language', language);
      payload.append('grossRatings', grossRating);
      payload.append('cast', cast);
      payload.append('maturityRating', maturityRating);
      payload.append('releaseYear', releasingYear);
      payload.append('duration', duration);
      payload.append('writers', writer);
      payload.append('director', director);
      payload.append('video', movieVideo);

      console.log(
        payload.forEach((value, key) => {
          console.log(key, value);
        })
      );
      dispatch(addNewMovie(payload,toast))
      setcast('')
      setwriter('')
      setdirector('')
      // setdescription('');
      // setmovieTitle('');
      // setgenre('');
      // setreleasingYear('');
      // setGrossRating('');
      // setmaturityRating('');
      // setdirector('');
    // }
  };
  useEffect(() => {
    const payload = { user_id: loginData?.data?.user?._id };
    dispatch(getAllCategories(payload, toast));
    dispatch(getAllLanguages(payload, toast));
  }, []);
  return (
    <>
      <Button borderRadius={'md'} colorScheme={'teal'} onClick={onOpen}>
        {' '}
        Add Movie
      </Button>
      <Modal isCentered size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton fontSize={'1.5rem'} />
          </ModalHeader>
          <ModalBody>
            <Stack py="6" px={{ base: '4', md: '18', lg: '24' }}>
              <Heading
                pb={'6'}
                textAlign={'center'}
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              >
                Add New Movie
              </Heading>
              <Stack
                maxH={'70vh'}
                overflow="auto"
                px={{ base: '2', md: '4' }}
                w={'100%'}
                spacing={'10'}
              >
                {/* title and description */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Input
                    w={{ base: '100%', md: '50%' }}
                    value={movieTitle}
                    onChange={e => setmovieTitle(e.target.value)}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    borderColor="black"
                    placeholder="movie title"
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
                    placeholder="movie description"
                    isRequired
                  />
                </Stack>

                {/* thumbnail and trailer  */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Uplode Thumbnail</FormLabel>
                    <Input
                      type={'file'}
                      size={'lg'}
                      onChange={e => setThumbnail(e.target.files[0])}
                      accept={supportedThumbailFormats}
                      borderColor="black"
                      _focusVisible={{}}
                      _hover={{ cursor: 'pointer' }}
                      isRequired
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Uplode Trailer</FormLabel>
                    <Input
                      borderColor="black"
                      _focusVisible={{}}
                      _hover={{ cursor: 'pointer' }}
                      type={'file'}
                      onChange={e => setTrailer(e.target.files[0])}
                      accept={supportedTrailerFormats}
                      size={'lg'}
                      isRequired
                    />
                  </FormControl>
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
                {/* writer and directors */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Input
                    w={{ base: '100%', md: '50%' }}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    borderColor="black"
                    placeholder="Writer names"
                    onKeyDown={addWriter}
                    isRequired
                  />
                  <Input
                    w={{ base: '100%', md: '50%' }}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    borderColor="black"
                    placeholder="Director names"
                    onKeyDown={addDirector}
                    isRequired
                  />
                </Stack>
                {/* writer and director previews*/}
                {writer?.length !== 0 || director?.length !== 0 ? (
                  <Stack
                    spacing={'8'}
                    direction={{ base: 'column', md: 'row' }}
                  >
                    <SimpleGrid
                      // overflowX={'auto'}
                      //   maxW={{ base: '100%', md: '50%' }}
                      w={{ base: '100%', md: '50%' }}
                      direction={'row'}
                      minChildWidth="120px"
                      spacing="10px"
                    >
                      {writer?.map((writer, index) => (
                        <Stack
                          w={'fit-content'}
                          h="fitcontent"
                          pos={'relative'}
                        >
                          {' '}
                          <Tag
                            key={index}
                            h={'40px'}
                            border="1px solid black"
                            borderRadius="md"
                            colorScheme={'blue'}
                          >
                            {writer} {''}
                          </Tag>
                          <Stack
                            onClick={() => removeWriter(writer)}
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
                    <SimpleGrid
                      // overflowX={'auto'}
                      //   maxW={{ base: '100%', md: '50%' }}
                      w={{ base: '100%', md: '50%' }}
                      direction={'row'}
                      minChildWidth="120px"
                      spacing="10px"
                    >
                      {director?.map((director, index) => (
                        <Stack
                          w={'fit-content'}
                          h="fitcontent"
                          pos={'relative'}
                        >
                          {' '}
                          <Tag
                            key={index}
                            h={'40px'}
                            border="1px solid black"
                            borderRadius="md"
                            colorScheme={'blue'}
                          >
                            {director} {''}
                          </Tag>
                          <Stack
                            onClick={() => removeDirector(director)}
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
                  </Stack>
                ) : null}
                {/* total time and cast */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Input
                    w={{ base: '100%', md: '50%' }}
                    size={'lg'}
                    _hover={{}}
                    value={duration}
                    onChange={e => setduration(e.target.value)}
                    type="text"
                    _focusVisible={{}}
                    borderColor="black"
                    placeholder="total Time (e.g 30m)"
                    isRequired
                  />
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
                {cast.length !== 0 ? (
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
                {/* select genre and languages */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Stack w={{ base: '100%', md: '50%' }}>
                    {allCategories ? (
                      <MultiSelectDropdown
                        data={allCategories?.data}
                        array={e => setgenre(e)}
                        type={'category'}
                      />
                    ) : null}
                  </Stack>
                  <Stack w={{ base: '100%', md: '50%' }}>
                    {allLanguages ? (
                      <MultiSelectDropdown
                        data={allLanguages?.lang}
                        array={e => setlanguage(e)}
                        type={'language'}
                      />
                    ) : null}
                  </Stack>
                </Stack>
                {/*releasing year and movie */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Releasing Year</FormLabel>
                    <Input
                      value={releasingYear}
                      onChange={e => setreleasingYear(e.target.value)}
                      size={'lg'}
                      type="number"
                      _hover={{}}
                      _focusVisible={{}}
                      placeholder="Releasing year"
                      borderColor="black"
                      isRequired
                    />
                  </FormControl>

                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Uplode Movie</FormLabel>
                    <Input
                      onChange={e => setMovieVideo(e.target.files[0])}
                      size={'lg'}
                      type="file"
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      isRequired
                    />
                  </FormControl>
                </Stack>
                <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                  <Button
                    borderRadius={'lg'}
                    size={'lg'}
                    w={{ base: '60%', md: '25%', lg: '20%' }}
                    colorScheme={'red'}
                    onClick={() => submitHandler()}
                  >
                    {' '}
                    Upload Movie
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddMovieModal;