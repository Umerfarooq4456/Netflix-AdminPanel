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
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewLanguage } from '../../redux/actions/language/Language';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const AddLanguageModal = () => {

  const toast = useToast();
  const dispatch = useDispatch();

  const [language, setlanguage] = useState();
  const [isActive, setIsActive] = useState(false);
  const { loginData } = useSelector(state => state.Auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addLanguage = () => {
    const payload = {
      user_id: loginData?.data?.user?._id,
      language: language,
      activeStatus: isActive,
    };
    if (!language) {
      ErrorToaster(toast, 'Please enter category title');
    } else {
      dispatch(addNewLanguage(payload, toast));
      setlanguage('')
      onClose()
    }
  };
  return (
    <>
      <Button colorScheme="cyan" size={'sm'} onClick={onOpen}>
        Add Language
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
                Add New Language
              </Heading>
              <Stack spacing={'4'} px={{ base: '2', md: '4' }} w={'100%'}>
                <Input
                  value={language}
                  onChange={e => setlanguage(e.target.value)}
                  size={'lg'}
                  _hover={{}}
                  _focusVisible={{}}
                  borderColor="black"
                  placeholder="Enter language name"
                  isRequired
                />
                <Checkbox
                  checked={isActive}
                  onChange={e => setIsActive(e.target.checked)}
                  colorScheme="purple"
                  size="lg"
                >
                  isActive?
                </Checkbox>
                <Stack pt={{ base: '4', md: '6' }} alignItems={'center'}>
                  <Button
                    rounded={'md'}
                    borderRadius={'lg'}
                    size={'md'}
                    colorScheme={'purple'}
                    onClick={() => addLanguage()}
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

export default AddLanguageModal;
