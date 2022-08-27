import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Button,
  Heading,
  Spinner,
  useToast,
  Badge,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AddLangugeModal from './AddLanguageModal';
import UpdateLanguageModal from './UpdateLanguageModal';
import { changeLanguageyStatus, getAllLanguages } from '../../redux/actions/language/Language';
import AddLanguageModal from './AddLanguageModal';

const LanguageDetails = () => {
  const { loginData } = useSelector(state => state.Auth);
  const { allLanguages,loading } = useSelector(state => state.Language);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { user_id: loginData?.data?.user?._id };
    dispatch(getAllLanguages(payload, toast));
  }, []);

  // const changeStatus = (id) =>{
  //   const changeLanguagePayload={
  //       language_id : id
  //   }
  //   const payload = { user_id: loginData?.data?.user?._id };
  //   dispatch(changeLanguageyStatus(changeLanguagePayload,toast))
  //   dispatch(getAllLanguages(payload, toast));
  // }

  return (
    <Stack maxW={'100%'} w={'100%'} px={'8'} py="6" overflow={'auto'}>
      <Stack direction={'row'} w={'100%'} justifyContent="space-between">
        <Heading
          pb={'6'}
          textAlign={'center'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          Language Details
        </Heading>
        <AddLanguageModal />
      </Stack>

      {/* users detail table */}
      <TableContainer
        maxH={'70vh'}
        overflowY="auto"
        overflowX={'auto'}
        w={'100%'}
      >
        <Table w={'100%'} variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th color={'black'} fontSize="sm">
                Name
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Languge
              </Th>
              <Th color={'black'} fontSize="sm">
                Status
              </Th>
              <Th color={'black'} fontSize="sm">
                Change Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading === false ? (
              allLanguages?.lang?.map(data => (
                <Tr>
                  <Td color={'black'} fontSize={'sm'} fontWeight="600">
                    {data?.language}
                  </Td>
                  <Td>
                    <UpdateLanguageModal data={data} />
                  </Td>
                  <Td>
                    {data?.activeStatus === true ? (
                      <Badge
                        _hover={{ cursor: 'pointer' }}
                        colorScheme="green"
                        size={'lg'}
                      >
                        Active
                      </Badge>
                    ) : (
                      <Badge
                        _hover={{ cursor: 'pointer' }}
                        colorScheme="red"
                        size={'lg'}
                      >
                        Inactive
                      </Badge>
                    )}
                  </Td>
                  <Td>
                    <Button
                      // onClick={() => changeStatus(data?._id)}
                      colorScheme="red"
                      size="sm"
                    >
                      Change Status
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Stack p="2" w={'100%'} alignItems="center">
                <Spinner colorScheme="red" size={'lg'} />
              </Stack>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default LanguageDetails;
