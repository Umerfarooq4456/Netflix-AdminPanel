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
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { getAllCategories } from '../../redux/actions/category/Category';
import { getAllLanguages } from '../../redux/actions/language/Language';
import MultiSelectDropdown from '../multiselect/MultiSelect';
import { useDispatch, useSelector } from 'react-redux';
import { updateSeriesInfo } from '../../redux/actions/Series/Series';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const EditInfoModal = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { loginData } = useSelector(state => state.Auth);
  const { allCategories } = useSelector(state => state.Category);
  const { allLanguages } = useSelector(state => state.Language);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seriesName, setseriesName] = useState();
  const [description, setdescription] = useState();
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const [grossRating, setGrossRating] = useState();
  const [maturityRating, setmaturityRating] = useState();
  const [cast, setcast] = useState([]);
  console.log(
    '🚀 ~ file: EditInfoModal.jsx ~ line 40 ~ EditInfoModal ~ cast',
    cast
  );

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
  useEffect(() => {
    const payload = { user_id: loginData?.data?.user?._id };
    dispatch(getAllCategories(payload, toast));
    dispatch(getAllLanguages(payload, toast));
  }, []);

  const submitHandler = () => {
    const str = String(cast);
    const payload = {
      series_id: data?._id,
      seriesName: seriesName || data?.seriesName,
      description: description || data?.description,
      genre: genre,
      language: language,
      grossRatings: grossRating || data?.grossRatings,
      maturityRating: maturityRating || data?.maturityRating,
      cast: str,
    };
    console.log(payload)
    // if (
    //   !seriesName ||
    //   !description 
    // ) {
    //   ErrorToaster(toast, 'Please fill all details');
    //   console.log(payload);
    // } else {
      dispatch(updateSeriesInfo(payload, toast));

      // setseriesName('');
      // setdescription('');
      // setGenre('');
      // setNoOfSeasons('');
      // setGrossRating('');
      // setcast([]);
      // setmaturityRating('');
    // }
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
                Edit Series Info
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
                    defaultValue={data?.seriesName}
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
                    defaultValue={data?.description}
                    onChange={e => setdescription(e.target.value)}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    borderColor="black"
                    placeholder="Series description"
                    isRequired
                  />
                </Stack>

                {/* gross rating and maturity rating */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Select
                    isRequired
                    fontSize={{ base: 'md', md: 'lg' }}
                    w={{ base: '100%', md: '50%' }}
                    defaultValue={data?.grossRatings}
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
                </Stack>
                {/* no of seasons and cast */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  {/* <Input
                    w={{ base: '100%', md: '50%' }}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    type="number"
                    borderColor="black"
                    defaultValue={data?.totalNumberOfSeasons}
                    onChange={e => setNoOfSeasons(e.target.value)}
                    placeholder="Total Seasons"
                    isRequired
                  /> */}
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
                {/* genre and language*/}
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

export default EditInfoModal;
