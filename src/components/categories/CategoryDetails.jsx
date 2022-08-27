import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AddCategoryModal from './AddCategoryModal';
import { changeCategoryStatus, getAllCategories } from '../../redux/actions/category/Category';
import UpdateCategoryModal from './UpdateCategoryModal';

const CategoryDetails = () => {
  const { loginData } = useSelector(state => state.Auth);
  const { allCategories, loading } = useSelector(state => state.Category);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { user_id: loginData?.data?.user?._id };
    dispatch(getAllCategories(payload, toast));
  }, []);
  const changeStatus = (id) =>{
    const changeCategoryPayload={
        user_id: loginData?.data?.user?._id,
        category_id : id
    }
    const payload = { user_id: loginData?.data?.user?._id };
    dispatch(changeCategoryStatus(changeCategoryPayload,toast))
    dispatch(getAllCategories(payload, toast));
  }

  return (
    <Stack maxW={'100%'} w={'100%'} px={'8'} py="6" overflow={'auto'}>
      <Stack direction={'row'} w={'100%'} justifyContent="space-between">
        <Heading
          pb={'6'}
          textAlign={'center'}
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          Category Details
        </Heading>
        <AddCategoryModal />
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
                Title
              </Th>
              <Th color={'black'} fontSize="sm">
                Update Category
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
              allCategories?.data?.map(data => (
                <Tr>
                  <Td color={'black'} fontSize={'sm'} fontWeight="600">
                    {data?.title}
                  </Td>
                  <Td>
                    <UpdateCategoryModal data={data}/>
                  </Td>
                  <Td>
                    {data?.activeStatus === true ? (
                      <Badge _hover={{cursor:'pointer'}} colorScheme="green" size={'lg'}>
                        Active
                      </Badge>
                    ) : (
                      <Badge _hover={{cursor:'pointer'}} colorScheme="red" size={'lg'}>
                        Inactive
                      </Badge>
                    )}
                  </Td>
                  <Td>
                    <Button onClick={()=>changeStatus(data?._id)} colorScheme='red' size='sm'>Change Status</Button>
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

export default CategoryDetails;
