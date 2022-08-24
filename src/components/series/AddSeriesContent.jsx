import {
  Button,
  Checkbox,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  Select,
} from '@chakra-ui/react';

import React, { useState } from 'react';
export const AddSeriesContent = () => {
  const [grossRating, setGrossRating] = useState();
  const [description, setdescription] = useState();
  const [releasingYear, setreleasingYear] = useState();
  const [seriesName, setseriesName] = useState();
  const [type, settype] = useState();
  const [maturityRating, setmaturityRating] = useState();
  const [input, setInput] = useState('');
  const [cast, setcast] = useState([]);
  const [creator, setcreator] = useState();
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = e => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (
      (key === ',', key === 'Enter') &&
      trimmedInput.length &&
      !cast.includes(trimmedInput)
    ) {
      e.preventDefault();
      setcast(prevState => [...prevState, trimmedInput]);
      setInput('');
    }

    if (key === 'Backspace' && !input.length && cast.length && isKeyReleased) {
      const castCopy = [...cast];
      const poppedTag = castCopy.pop();
      e.preventDefault();
      setcast(castCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag = index => {
    setcast(prevState => prevState.filter((tag, i) => i !== index));
  };

  const submitHandler = () => {
    if (
      !description ||
      !seriesName ||
      !type ||
      !releasingYear ||
      !grossRating ||
      !maturityRating ||
      !cast ||
      !creator
    ) {
      alert('Please fill all fields!');
      return;
    } else {
      const payload = {
        description: description,
        seriesName: seriesName,
        type: type,
        releasingYear: releasingYear,
        grossRating: grossRating,
        maturityRating: maturityRating,
        cast: cast,
        creator: creator,
      };

      console.log(payload);
      setdescription('');
      setseriesName('');
      settype('');
      setreleasingYear('');
      setGrossRating('');
      setmaturityRating('');
      setcreator('');
    }
  };
  return (
    <Stack py="6" px={{ base: '4', md: '18', lg: '24' }}>
      <Heading
        pb={'6'}
        textAlign={'center'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
      >
        Add New Series
      </Heading>
      <Stack
        maxH={'70vh'}
        overflow="auto"
        px={{ base: '2', md: '4' }}
        w={'100%'}
        spacing={'10'}
      >
        {/* name and description */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            value={seriesName}
            onChange={e => setseriesName(e.target.value)}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="Series name"
            isRequired
          />
          <Input
            w={{ base: '100%', md: '50%' }}
            value={description}
            onChange={e => setdescription(e.target.value)}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="Series description"
            isRequired
          />
        </Stack>
        {/* type and releasing year */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Select
            isRequired
            fontSize={{ base: 'md', md: 'lg' }}
            w={{ base: '100%', md: '50%' }}
            value={type}
            onChange={e => settype(e.target.value)}
            _hover={{ cursor: 'pointer' }}
            borderColor="black"
            _focusVisible={{}}
            placeholder="Select Genre"
            size="lg"
          >
            <option value="action">action</option>
          </Select>
          <Select
            isRequired
            fontSize={{ base: 'md', md: 'lg' }}
            w={{ base: '100%', md: '50%' }}
            _hover={{ cursor: 'pointer' }}
            borderColor="black"
            value={releasingYear}
            onChange={e => setreleasingYear(e.target.value)}
            _focusVisible={{}}
            placeholder="Select Releasing Year"
            size="lg"
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </Select>
        </Stack>
        {/* thumbnail and trailer  */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            className="upload-title"
            w={{ base: '100%', md: '50%' }}
            type={'file'}
            size={'lg'}
            borderColor="black"
            _focusVisible={{}}
            _hover={{ cursor: 'pointer' }}
            isRequired
          />
          <Input
            className="upload-trailer"
            borderColor="black"
            _focusVisible={{}}
            _hover={{ cursor: 'pointer' }}
            w={{ base: '100%', md: '50%' }}
            type={'file'}
            size={'lg'}
            isRequired
          />
        </Stack>
        {/* gross rating and maturity rating */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Select
            isRequired
            fontSize={{ base: 'md', md: 'lg' }}
            w={{ base: '100%', md: '50%' }}
            value={grossRating}
            onChange={e => setGrossRating(e.target.value)}
            _hover={{ cursor: 'pointer' }}
            borderColor="black"
            _focusVisible={{}}
            placeholder="Choose Gross Rating"
            size="lg"
          >
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </Select>
          <Select
            isRequired
            fontSize={{ base: 'md', md: 'lg' }}
            w={{ base: '100%', md: '50%' }}
            value={maturityRating}
            onChange={e => setmaturityRating(e.target.value)}
            _hover={{ cursor: 'pointer' }}
            borderColor="black"
            _focusVisible={{}}
            placeholder="Choose Maturity Rating"
            size="lg"
          >
            <option value="7+">7+</option>
            <option value="13+">13+</option>
            <option value="16+">16+</option>
            <option value="18+">18+</option>
          </Select>
        </Stack>
        {/* total time and isCollection */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            type="text"
            _focusVisible={{}}
            borderColor="black"
            placeholder="total Time(e.g 120m)"
            isRequired
          />
          <Checkbox
            w={{ base: '100%', md: '50%' }}
            size="lg"
            colorScheme="green"
          >
            is Collection?
          </Checkbox>
        </Stack>
        {/* writer and creators */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="writer name"
            isRequired
          />
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            value={creator}
            onChange={e => setcreator(e.target.value)}
            _focusVisible={{}}
            borderColor="black"
            placeholder="creator name"
            isRequired
          />
        </Stack>
        {/* collection chapter and cast */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="collection chapter"
            isRequired
          />
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="cast"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
            value={input}
            isRequired
          />
        </Stack>
        {/* cast names preview */}
        <SimpleGrid
          // overflowX={'auto'}
          //   maxW={{ base: '100%', md: '50%' }}
          w={{ base: '100%', md: '50%' }}
          alignSelf={{ base: 'initial', md: 'end' }}
          direction={'row'}
          minChildWidth="120px"
          spacing="10px"
        >
          {cast?.map((tag, index) => (
            <Tag
              minH={'60px'}
              border="1px solid orange"
              borderRadius="lg"
              backgroundColor="orange"
              _hover={{
                cursor: 'pointer',
              }}
              colorScheme={'purple'}
              size={'lg'}
              onClick={() => deleteTag(index)}
            >
              {tag}
            </Tag>
          ))}
        </SimpleGrid>

        <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
          <Button
            borderRadius={'lg'}
            size={'lg'}
            w={{ base: '60%', md: '25%', lg: '20%' }}
            colorScheme={'red'}
            onClick={() => submitHandler()}
          >
            {' '}
            Upload Series
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
