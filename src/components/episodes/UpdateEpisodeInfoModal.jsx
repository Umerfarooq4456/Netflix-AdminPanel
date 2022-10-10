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
  Stack,
  Select,
  useToast,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../redux/actions/category/Category';
import { getAllLanguages } from '../../redux/actions/language/Language';
import MultiSelectDropdown from '../multiselect/MultiSelect';
import { useDispatch, useSelector } from 'react-redux';
import { updateSeriesInfo } from '../../redux/actions/Series/Series';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
import { updateEpisodeInfo } from '../../redux/actions/episode/episode';
const UpdateEpisodeInfoModal = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { loginData } = useSelector(state => state.Auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [episodeName, setepisodeName] = useState();
  const [description, setdescription] = useState();
  const [episodeDuration, setEpisodeDuration] = useState();
  const [episodeNumber, setEpisodeNumber] = useState();

  const submitHandler = () => {
    const payload = {
      user_id: loginData?.data?.user?._id,
      episode_id: data?._id,
      episodeName: episodeName || data?.episodeName,
      description: description || data?.description,
      episodeNumber: episodeNumber || data?.episodeNumber,
      duration: episodeDuration || data?.duration,
    };

      dispatch(updateEpisodeInfo(payload, toast));
    onClose()
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
                Edit Episode Info
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
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Episode Title</FormLabel>
                    <Input
                      defaultValue={data?.episodeName}
                      onChange={e => setepisodeName(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Episode name"
                      isRequired
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Episode Description</FormLabel>
                    <Input
                      defaultValue={data?.description}
                      onChange={e => setdescription(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Episode description"
                      isRequired
                    />
                  </FormControl>
                </Stack>
                {/* duration and episode number */}
                <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Episode Duration</FormLabel>
                    <Input
                      defaultValue={data?.duration}
                      onChange={e => setEpisodeDuration(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Episode duration"
                      isRequired
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '50%' }}>
                    <FormLabel>Episode Number</FormLabel>
                    <Input
                      defaultValue={data?.episodeNumber}
                      onChange={e => setEpisodeNumber(e.target.value)}
                      size={'lg'}
                      type={'number'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="Episode number"
                      isRequired
                    />
                  </FormControl>
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
                    Submit
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

export default UpdateEpisodeInfoModal;
