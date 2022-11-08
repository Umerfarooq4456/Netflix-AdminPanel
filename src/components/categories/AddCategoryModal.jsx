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
import { addNewCategory } from '../../redux/actions/category/Category';
import ErrorToaster from '../../utils/toaster/ErrorToaster';
const AddCategoryModal = () => {

  const toast = useToast();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [isActive, setIsActive] = useState(true);
  const { loginData } = useSelector(state => state.Auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addCategory = () => {
    const payload = {
      user_id: loginData?.data?.user?._id,
      title: title,
      activeStatus: isActive,
    };
    if (!title) {
      ErrorToaster(toast, 'Please enter category title');
    } else {
      dispatch(addNewCategory(payload, toast));
    }
  };
  return (
    <>
      <Button colorScheme="cyan" size={'sm'} onClick={onOpen}>
        Add Category
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
                Add New Category
              </Heading>
              <Stack spacing={'4'} px={{ base: '2', md: '4' }} w={'100%'}>
                <Input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  size={'lg'}
                  _hover={{}}
                  _focusVisible={{}}
                  borderColor="black"
                  placeholder="Enter category name"
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
                    onClick={() => addCategory()}
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

export default AddCategoryModal;
