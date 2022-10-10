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
  import ErrorToaster from '../../utils/toaster/ErrorToaster';
  import { updateSeasonName } from '../../redux/actions/seasons/Season.js'
  const UpdateSeasonNameModal = ({ seasonData }) => {
    console.log("🚀 ~ file: UpdateSeasonNameModal.jsx ~ line 22 ~ UpdateSeasonNameModal ~ data", seasonData)
    const toast = useToast()
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [seasonName, setSeasonName] = useState();
  
    const updateSeasonNameHandler = () => {
      const payload = {
        season_id: seasonData?._id,
        seasonName: seasonName || seasonData?.seasonName,
      }
      if (!seasonName) {
        ErrorToaster(toast, 'Please enter season name')
      }
      dispatch(updateSeasonName(payload, toast))
      setSeasonName('')
      onClose()
    }
    return (
      <>
        <Button size={'md'} colorScheme="green" onClick={onOpen}>
          Update Season Name
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
                  Update Name
                </Heading>
                <Stack px={{ base: '2', md: '4' }} w={'100%'}>
                  <FormControl>
                    <FormLabel color={'black'}>Season Name</FormLabel>
                    <Input
                      _focusVisible={{}}
                      placeholder='Enter Season Name'
                      rounded={'md'}
                      border={'1px solid black !important'}
                      defaultValue={seasonData?.seasonName}
                      onChange={(e) => setSeasonName(e.target.value)}
                      size={'lg'}
                      type="text"
                    />
                  </FormControl>
                  <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
                    <Button
                      borderRadius={'lg'}
                      size={'md'}
                      colorScheme={'blue'}
                      onClick={() => updateSeasonNameHandler()}
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
  
  export default UpdateSeasonNameModal;
  