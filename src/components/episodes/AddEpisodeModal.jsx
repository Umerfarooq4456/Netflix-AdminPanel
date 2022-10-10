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
    useToast,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  
  import React, { useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
import { addNewEpisode } from '../../redux/actions/episode/episode';

  const AddEpisodeModal = ({seasonData}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { loginData } = useSelector(state => state.Auth);
    const toast = useToast();
    const dispatch = useDispatch();
    const [episodeName, setepisodeName] = useState();
    const [description, setdescription] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [duration, setduration] = useState();
    const [episodeNumber, setEpisodeNumber] = useState();
    const [episodeVideo, setepisodeVideo] = useState();
  
    // supported image formats
    const supportedThumbailFormats = ['image/png', 'image/jpeg'];
    // supported image formats
    const supportedTrailerFormats = ['video/mp4'];
    // submit handler
    const submitHandler = () => {
      if (
        !description ||
        !episodeName 
      ) {
        alert('Please fill all fields!');
        return;
      } else {
        const payload = new FormData();
        payload.append('user_id', loginData?.data?.user?._id);
        payload.append('season_id', seasonData?._id);
        payload.append('episodeName', episodeName);
        payload.append('description', description);
        payload.append('duration', duration);
        payload.append('episodeNumber', episodeNumber);
        payload.append('thumbnail', thumbnail);
        payload.append('video', episodeVideo);
  
        console.log(
          payload.forEach((value, key) => {
            console.log(key, value);
          })
        );
        dispatch(addNewEpisode(payload,toast))
 
      }
    };

    return (
      <>
        <Button alignSelf={'center'} w='fit-content' borderRadius={'md'} colorScheme={'red'} onClick={onOpen}>
          {' '}
          Add Episode
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
                  Add New Episode
                </Heading>
                <Stack
                  maxH={'70vh'}
                  overflow="auto"
                  px={{ base: '2', md: '4' }}
                  w={'100%'}
                  spacing={'10'}
                >
                  {/* episode name and description */}
                  <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
                    <Input
                      w={{ base: '100%', md: '50%' }}
                      value={episodeName}
                      onChange={e => setepisodeName(e.target.value)}
                      size={'lg'}
                      _hover={{}}
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="episode name"
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
                      placeholder="episode description"
                      isRequired
                    />
                  </Stack>
  
                  {/* thumbnail and video  */}
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
                      <FormLabel>Uplode Episode Video</FormLabel>
                      <Input
                        borderColor="black"
                        _focusVisible={{}}
                        _hover={{ cursor: 'pointer' }}
                        type={'file'}
                        onChange={e => setepisodeVideo(e.target.files[0])}
                        accept={supportedTrailerFormats}
                        size={'lg'}
                        isRequired
                      />
                    </FormControl>
                  </Stack>

                  {/* duration and cast */}
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
                      placeholder="enter episode duration (e.g 30m)"
                      isRequired
                    />
                     <Input
                      w={{ base: '100%', md: '50%' }}
                      size={'lg'}
                      _hover={{}}
                      value={episodeNumber}
                      onChange={e => setEpisodeNumber(e.target.value)}
                      type="number"
                      _focusVisible={{}}
                      borderColor="black"
                      placeholder="enter episode number"
                      isRequired
                    />
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
                      Upload Episode
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
  
  export default AddEpisodeModal;
  