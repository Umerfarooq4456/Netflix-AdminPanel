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
} from '@chakra-ui/react';
import React, { useState } from 'react';
const UpdateThumbnailModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seriesName, setseriesName] = useState();
  // supported image formats
  const supportedThumbailFormats = ['image/png', 'image/jpeg'];

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
                    accept={supportedThumbailFormats}
                    rounded={'md'}
                    _hover={{ cursor: 'pointer' }}
                    p="1.5"
                    border={'1px solid black !important'}
                    size={'lg'}
                    type="file"
                  />
                </FormControl>
                <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                  <Button
                    borderRadius={'lg'}
                    size={'lg'}
                    colorScheme={'red'}
                    // onClick={() => submitHandler()}
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
