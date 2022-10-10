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
  SimpleGrid,
  Stack,
  Tag,
  Select,
  useToast,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { getAllCategories } from '../../redux/actions/category/Category';
import { getAllLanguages } from '../../redux/actions/language/Language';
import MultiSelectDropdown from '../multiselect/MultiSelect';
import { useDispatch, useSelector } from 'react-redux';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
import { updateMovieInfo } from '../../redux/actions/movie/Movie';
const UpdateMovieInfoModal = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { loginData } = useSelector(state => state.Auth);
  const { allCategories } = useSelector(state => state.Category);
  const { allLanguages } = useSelector(state => state.Language);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieTitle, setmovieTitle] = useState();
  const [description, setdescription] = useState();
  const [duration, setduration] = useState();
  const [releasingYear, setreleasingYear] = useState();
  const [genre, setgenre] = useState([]);
  const [language, setlanguage] = useState([]);
  const [grossRating, setGrossRating] = useState();
  const [maturityRating, setmaturityRating] = useState();
  const [cast, setcast] = useState([]);
  //   console.log("🚀 ~ file: UpdateMovieInfoModal.jsx ~ line 45 ~ UpdateMovieInfoModal ~ cast", cast)
  const [writer, setwriter] = useState([]);
  const [director, setdirector] = useState([]);

  //   cast
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

  useEffect(() => {
    const payload = { user_id: loginData?.data?.user?._id };
    dispatch(getAllCategories(payload, toast));
    dispatch(getAllLanguages(payload, toast));
  }, []);

  const submitHandler = () => {
    if (!writer || !director || !cast) {
      ErrorToaster(toast, 'Please fill all details');
    } else {
      const payload = {
        user_id: loginData?.data.user._id,
        movie_id: data?._id,
        title: movieTitle || data?.title,
        description: description || data?.description,
        genre: genre || data?.genre,
        duration: data?.duration || duration,
        releaseYear: data?.releaseYear || releasingYear,
        language: language || data?.language,
        grossRating: grossRating || data?.grossRating,
        maturityRating: maturityRating || data?.maturityRating,
        cast: String(cast) || data?.cast,
        writers: String(writer) || data?.writers,
        director: String(director) || data?.director,
      };
      dispatch(updateMovieInfo(payload, toast));
      setcast();
      setdirector();
      setwriter()
    }
  };
  return (
    <>
      <Button size={'sm'} colorScheme="cyan" onClick={onOpen}>
        Edit Info
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
                Edit Movie Info
              </Heading>
              <Stack
                maxH={'70vh'}
                overflow="auto"
                px={{ base: '2', md: '4' }}
                w={'100%'}
                spacing={'6'}
              >
                {/* name and description */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Movie Title</FormLabel>
                    <Input
                      defaultValue={data?.title}
                      onChange={e => setmovieTitle(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Movie name"
                      isRequired
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Movie Description</FormLabel>
                    <Input
                      defaultValue={data?.description}
                      onChange={e => setdescription(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Movie description"
                      isRequired
                    />
                  </FormControl>
                </Stack>
                {/* duration and releasing year */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Movie Duration</FormLabel>
                    <Input
                      defaultValue={data?.duration}
                      onChange={e => setduration(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Movie duration"
                      isRequired
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Releasing Year</FormLabel>
                    <Input
                      defaultValue={data?.releaseYear}
                      onChange={e => setreleasingYear(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Enter releasing year"
                      isRequired
                    />
                  </FormControl>
                </Stack>
                {/* gross rating and maturity rating */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Select Gross Rating</FormLabel>
                    <Select
                      isRequired
                      fontSize={{ base: 'md', md: 'lg' }}
                      defaultValue={data?.grossRating}
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
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Select Maturity Rating</FormLabel>
                    <Select
                      isRequired
                      fontSize={{ base: 'md', md: 'lg' }}
                      defaultValue={data?.maturityRating}
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
                  </FormControl>
                </Stack>
                {/* writer and directors */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Movie Writers</FormLabel>
                    <Input
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Writer names"
                      onKeyDown={addWriter}
                      isRequired
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Movie Directors</FormLabel>
                    <Input
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Director names"
                      onKeyDown={addDirector}
                      isRequired
                    />
                  </FormControl>
                </Stack>
                {/* writer and director previews*/}
                {/* {writer?.length !== 0 || director?.length !== 0 ? (
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
                ) : null} */}
                {/* genre and language*/}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Select Genre</FormLabel>
                    {allCategories ? (
                      <MultiSelectDropdown
                        data={allCategories?.data}
                        array={e => setgenre(e)}
                        type={'category'}
                      />
                    ) : null}
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Select Languages</FormLabel>
                    {allLanguages ? (
                      <MultiSelectDropdown
                        data={allLanguages?.lang}
                        array={e => setlanguage(e)}
                        type={'language'}
                      />
                    ) : null}
                  </FormControl>
                </Stack>
                {/*  cast */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '48%' }}>
                    <FormLabel>Movie Cast</FormLabel>
                    <Input
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="cast"
                      onKeyDown={addCast}
                      isRequired
                    />
                  </FormControl>
                </Stack>
                {/* cast names preview */}
                {/* {cast?.length !== 0 ? (
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
                  ) : null} */}

                {/* submit button */}
                <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                  <Button
                    borderRadius={'lg'}
                    size={'lg'}
                    w={{ base: '60%', md: '25%', lg: '20%' }}
                    colorScheme={'red'}
                    onClick={() => submitHandler()}
                  >
                    {' '}
                    Edit Info
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

export default UpdateMovieInfoModal;
