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
  const AddSeasonModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [seasonName, setSeasonName] = useState();
  
    return (
      <>
        <Button size={'sm'} colorScheme="facebook" onClick={onOpen}>
          Add Season
        </Button>
        <Modal isCentered size="lg" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton fontSize={'1.5rem'} />
            </ModalHeader>
            <ModalBody>
              <Stack py={'4'} px={'2'}>
                <Heading
                  pb={'6'}
                  textAlign={'center'}
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  Add New Season
                </Heading>
                <Stack px={{ base: '2', md: '4' }} w={'100%'}>
                  <FormControl>
                    <FormLabel color={'black'}>Season Name</FormLabel>
                    <Input
                    _focusVisible={{}}
                    placeholder='Enter Season Name'
                      rounded={'md'}
                      border={'1px solid black !important'}
                      value={seasonName}
                      onChange={(e)=>setSeasonName(e.target.value)}
                      size={'lg'}
                      type="text"
                    />
                  </FormControl>
                  <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                    <Button
                      borderRadius={'lg'}
                      size={'md'}
                      colorScheme={'blue'}
                      // onClick={() => submitHandler()}
                    >
                      {' '}
                      Add Season
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
  
  export default AddSeasonModal;
  