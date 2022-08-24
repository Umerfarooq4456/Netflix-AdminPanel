import {
  Button,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useMemo, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiCopy } from 'react-icons/bi';
import AvatarCards from './AvatarCards';
const AddAvatar = () => {
  const [avatarTitle, setavatarTitle] = useState();
  const [files, setFiles] = useState([]);
  const images = useMemo(() => files, [files]);

  const { getRootProps, getInputProps, isFocused, isDragAccept } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
//   console.log(images);

  return (
    <Stack w={'100%'} p="4">
      <Heading
        pb={'6'}
        textAlign={'center'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
      >
        Add Avatars
      </Heading>
      <Stack alignItems={'center'} mb="8 !important" w={'100%'} spacing="8">
        <Input
          w={{ base: '100%', md: '50%' }}
          size={'lg'}
          _hover={{}}
          _focusVisible={{}}
          borderColor="black"
          placeholder="avatar title"
          onChange={e => setavatarTitle(e.target.value)}
          value={avatarTitle}
          isRequired
        />
        <Stack alignItems={'center'} mb="8 !important" w={'100%'} spacing="8">
          <Stack>
            <Stack
              {...getRootProps({ isFocused, isDragAccept })}
              className="container"
              border={'3px dashed gray'}
              borderRadius={'lg'}
              align={'center'}
              justify={'space-around'}
              overflow={'auto'}
              py={'6'}
              w="33rem"
            >
              <Icon as={BiCopy} boxSize={'5em'} />
              <VStack>
                <Text fontSize={'2xl'}>Drop image for upload</Text>
                <Text>
                  Or{' '}
                  <Link>
                    click here <input {...getInputProps()} />
                  </Link>{' '}
                  to select
                </Text>
              </VStack>
              <Text>All images formats are supported.</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {images.length !== 0 ? (
        <>
          <AvatarCards filesData={images} avatarTitle={avatarTitle} setavatarTitle={(e)=>setavatarTitle(e)}/>
        </>
      ) : null}
    </Stack>
  );
};

export default AddAvatar;
