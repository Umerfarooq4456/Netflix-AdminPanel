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
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLanguage } from '../../redux/actions/language/Language';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const UpdateLanguageModal = ({data}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { loginData } = useSelector(state => state.Auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [language, setLanguage] = useState();

  const updateLanguageHandler = () => {
    const payload = {
      user_id: loginData?.data?.user?._id,
      language: language,
      activeStatus: data?.activeStatus,
      language_id : data?._id
    };
    if (!language) {
      ErrorToaster(toast, 'Please enter language title');
    } else {
      dispatch(updateLanguage(payload, toast));
      setLanguage('')
      onClose()
    }
  };
  return (
    <>
      <Button colorScheme="facebook" size={'sm'} onClick={onOpen}>
        Update Language
      </Button>
      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton fontSize={'1.5rem'} />
          </ModalHeader>
          <ModalBody>
            <Stack py="4" px={'2'}>
              <Heading
                pb={'6'}
                textAlign={'center'}
                fontSize={{ base: 'xl', md: '2xl' }}
              >
                Update Language
              </Heading>
              <Stack spacing={'4'} px={{ base: '2', md: '4' }} w={'100%'}>
                <Input
                  defaultValue={data?.language}
                  onChange={e => setLanguage(e.target.value)}
                  size={'lg'}
                  _hover={{}}
                  _focusVisible={{}}
                  borderColor="black"
                  placeholder="Enter language name"
                  isRequired
                />
                <Stack pt={{ base: '4', md: '6' }} alignItems={'center'}>
                  <Button
                    rounded={'md'}
                    borderRadius={'lg'}
                    size={'md'}
                    colorScheme={'purple'}
                    onClick={() => updateLanguageHandler()}
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

export default UpdateLanguageModal;
