import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
  } from '@chakra-ui/react';
  
  import React from 'react';
import { AddSeriesContent } from './AddSeriesContent';
  
  const AddSeriesModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
      <>
      <Button colorScheme='teal' onClick={onOpen}> + Add Series</Button>
      <Modal isCentered size="full" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton  fontSize={'1.5rem'} />
        </ModalHeader>
        <ModalBody>
       <AddSeriesContent/>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
      
    );
  };
  
  export default AddSeriesModal;
  