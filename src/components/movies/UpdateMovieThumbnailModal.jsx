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
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateMovieThumbnail } from '../../redux/actions/movie/Movie';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const UpdateMovieThumbnailModal = ({ data }) => {
  const nav = useNavigate()
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [thumbnail, setThumbnail] = useState('');
  // supported image formats
  const supportedThumbailFormats = ['image/png', 'image/jpeg'];
  const updateThumbnail = () => {
    const payload = new FormData();
    payload.append('movie_id', data?._id);
    payload.append('thumbnail', thumbnail);
    if (!thumbnail) {
      ErrorToaster(toast, 'Please choose Thumbnail');
    } else {
      dispatch(updateMovieThumbnail(payload, toast,nav));
      setThumbnail('');
      onClose();
    }
  };
  return (
    <>
      <Button size={'sm'} colorScheme="facebook" onClick={onOpen}>
        Update Thumbnail
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
                Update Movie Thumbnail
              </Heading>
              <Image alignSelf={'center'} rounded={'md'} w='400px' h='300px' src={data?.thumbnail}/>
              <Stack px={{ base: '2', md: '4' }} w={'100%'}>
                <FormControl>
                  <FormLabel color={'black'}>Upload Thumbnail</FormLabel>
                  <Input
                    type={'file'}
                    size={'lg'}
                    onChange={e => setThumbnail(e.target.files[0])}
                    accept={supportedThumbailFormats}
                    p="1.5"
                    borderColor="black"
                    _focusVisible={{}}
                    _hover={{ cursor: 'pointer' }}
                    isRequired
                  />
                </FormControl>
                <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                  <Button
                    borderRadius={'lg'}
                    size={'lg'}
                    colorScheme={'red'}
                    onClick={() => updateThumbnail()}
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

export default UpdateMovieThumbnailModal;
