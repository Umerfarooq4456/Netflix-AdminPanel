import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Stack,
  Image,
  Heading,
  HStack,
  Text,
  Button,
  ModalCloseButton,
} from '@chakra-ui/react';
const ManageCategoriesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const categories = [
  'action',
  'thriller',
  'romance',
  'comedy',
  'suspense',
  'drama',
  'documentries'
]
  return (
    <>
      <Button borderRadius={'md'} colorScheme={'teal'} onClick={onOpen}>
        {' '}
        Manage Categories
      </Button>
      <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={'#141414'}>
          <ModalHeader>
            <ModalCloseButton fontSize={'1.5rem'} color="white" />
          </ModalHeader>
          <ModalBody>
            <Stack
              overflowX={'auto'}
              maxWidth={'100%'}
              py={'4'}
              direction={'row'}
              spacing={'5'}
            >
              {' '}
              {categories?.map(category => (
                <Button
                  size={'md'}
                  minW={'fit-content'}
                  colorScheme={'teal'}
                  // onClick={() => getVideoByCategoryHandler(category)}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ManageCategoriesModal;
