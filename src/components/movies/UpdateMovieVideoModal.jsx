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
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovieVideo } from '../../redux/actions/movie/Movie';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const UpdateEpisodeVideoModal = ({ id }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [video, setVideo] = useState();
  // supported image formats
  const supportedTrailerFormats = ['video/mp4'];

  const updateVideoHandler = () => {
    const payload = new FormData();
    payload.append('movie_id', id);
    payload.append('video', video);
    if (!video) {
      ErrorToaster(toast, 'Please choose Video');
    } else {
      dispatch(updateMovieVideo(payload, toast));
      setVideo('');
      onClose();
    }
  };
  return (
    <>
      <Button colorScheme="orange" size={'sm'} onClick={onOpen}>
        Update Video
      </Button>
      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton fontSize={'1.5rem'} />
          </ModalHeader>
          <ModalBody>
            <Stack px={'2'}>
              <Heading
                pb={'6'}
                textAlign={'center'}
                fontSize={{ base: 'xl', md: '2xl' }}
              >
                Update Movie Video
              </Heading>
              <Stack px={{ base: '2', md: '4' }} w={'100%'}>
                <FormControl>
                  <FormLabel color={'black'}>Upload Video</FormLabel>
                  <Input
                    accept={supportedTrailerFormats}
                    rounded={'md'}
                    _hover={{ cursor: 'pointer' }}
                    p="1.5"
                    border={'1px solid black !important'}
                    size={'lg'}
                    onChange={e => setVideo(e.target.files[0])}
                    type="file"
                  />
                </FormControl>
                <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                  <Button
                    borderRadius={'lg'}
                    size={'lg'}
                    colorScheme={'red'}
                    onClick={() => updateVideoHandler()}
                  >
                    {' '}
                    Update
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

export default UpdateEpisodeVideoModal;
