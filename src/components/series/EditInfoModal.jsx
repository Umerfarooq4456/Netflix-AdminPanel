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
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';

const EditInfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seriesName, setseriesName] = useState();
  const [description, setdescription] = useState();
  const [genre, setGenre] = useState([]);
  const [noOfSeasons, setNoOfSeasons] = useState();
  const [grossRating, setGrossRating] = useState();
  const [maturityRating, setmaturityRating] = useState();
  const [cast, setcast] = useState([]);

  //  genre
  const addGenre = e => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        setGenre([...genre, e.target.value]);

        e.target.value = '';
      }
    }
  };
  const removeGenre = removedGenre => {
    const newGenre = genre.filter(tag => tag !== removedGenre);
    setGenre(newGenre);
  };
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

                {/* gross rating and maturity rating */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Select
                    isRequired
                    fontSize={{ base: 'md', md: 'lg' }}
                    w={{ base: '100%', md: '50%' }}
                    defaultValue={grossRating}
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
                {/* no of seasons and cast */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <Input
                    w={{ base: '100%', md: '50%' }}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    type="number"
                    borderColor="black"
                    value={noOfSeasons}
                    onChange={e => setNoOfSeasons(e.target.value)}
                    placeholder="Total Seasons"
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
                {/* genre*/}
                <Stack mr={'7 !important'}>
                  <Input
                    w={{ base: '100%', md: '50%' }}
                    size={'lg'}
                    _hover={{}}
                    _focusVisible={{}}
                    borderColor="black"
                    placeholder="genre"
                    onKeyDown={addGenre}
                    isRequired
                  />
                </Stack>
                {/* genre preview */}
                {genre.length > 0 ? (
                  <SimpleGrid
                    w={{ base: '100%', md: '50%' }}
                    direction={'row'}
                    minChildWidth="120px"
                    spacingX="10px"
                    spacingY={'15px'}
                  >
                    {genre?.map((genre, index) => (
                      <Stack w={'fit-content'} h="fitcontent" pos={'relative'}>
                        {' '}
                        <Tag
                          key={index}
                          h={'40px'}
                          border="1px solid orange"
                          borderRadius="md"
                          colorScheme={'purple'}
                        >
                          {genre} {''}
                        </Tag>
                        <Stack
                          onClick={() => removeGenre(genre)}
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

                <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                  <Button
                    borderRadius={'lg'}
                    size={'lg'}
                    w={{ base: '60%', md: '25%', lg: '20%' }}
                    colorScheme={'red'}
                    // onClick={() => submitHandler()}
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