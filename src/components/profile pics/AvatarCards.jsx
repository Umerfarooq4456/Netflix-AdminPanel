import { Button, IconButton, Image, Input, Stack, Textarea } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { TiDelete } from 'react-icons/ti';

const AvatarCards = ({ filesData,avatarTitle,setavatarTitle}) => {
  const images = useMemo(() => filesData);
  const [products, setproducts] = useState(images || []);
  const deleteImage = key => {
    setproducts(products.filter(i => i.name !== key));
  };
  const uploadAvatars = () => {
    const payload = {
        avatarTitle:avatarTitle,
        files:products
    }
    setproducts('')
    setavatarTitle('')
    console.log(payload)
  }

  return (
    <>
      <Stack px="8" direction={'row'} flexWrap={'wrap'}>
        {products.length !== 0? 
         products?.map(file => (
          <Stack key={file.name}>
            <IconButton
              icon={<TiDelete size={'3em'} />}
              w={'fit-content'}
              variant={'ghost'}
              _hover={{ color: 'red', transform: 'scale(1.1)' }}
              _focus={{}}
              _active={{}}
              onClick={() => deleteImage(file.name)}
            />
            <Image
              boxSize="10rem"
              objectFit={'contain'}
              src={file.preview}
              borderRadius={'lg'}
              alt=""
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </Stack>
        )):null}
      
      </Stack>
      {products.length !== 0 ? (
        <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
          <Button
            borderRadius={'lg'}
            size={'lg'}
            w={{ base: '60%', md: '25%', lg: '20%' }}
            colorScheme={'red'}
              onClick={() => uploadAvatars()}
          >
            {' '}
            Upload Avatars
          </Button>
        </Stack>
      ) : null}
    </>
  );
};

export default AvatarCards;
