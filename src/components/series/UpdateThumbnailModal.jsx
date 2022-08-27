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
import { updateSeriesThumbnail } from '../../redux/actions/Series/Series';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const UpdateThumbnailModal = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [thumbnail, setThumbnail] = useState('');
  console.log(
    '🚀 ~ file: UpdateThumbnailModal.jsx ~ line 26 ~ UpdateThumbnailModal ~ thumbnail',
    thumbnail
  );
  // supported image formats
  const supportedThumbailFormats = ['image/png', 'image/jpeg'];
  const updateThumbnail = () => {
    const payload = {
      series_id: data?._id,
      thumbnail: thumbnail,
    };
    console.log(
      '🚀 ~ file: UpdateThumbnailModal.jsx ~ line 34 ~ updateThumbnail ~ payload',
      payload
    );
    if (!thumbnail) {
      ErrorToaster(toast, 'Please choose Thumbnail');
    } else {
      console.log(
        '🚀 ~ file: UpdateThumbnailModal.jsx ~ line 46 ~ updateThumbnail ~ payload',
        payload
      );
      dispatch(updateSeriesThumbnail(payload, toast));
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
                Update Series Thumbnail
              </Heading>
              <Stack px={{ base: '2', md: '4' }} w={'100%'}>
                <FormControl>
                  <FormLabel color={'black'}>Upload Thumbnail</FormLabel>
                  <Input
                    type={'file'}
                    size={'md'}
                    onChange={e => setThumbnail(e.target.files[0])}
                    accept={supportedThumbailFormats}
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

export default UpdateThumbnailModal;
