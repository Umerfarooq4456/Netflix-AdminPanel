import {
  Button,
  Checkbox,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Stack,
  Tag,
} from '@chakra-ui/react';

import React, { useRef, useState } from 'react';

const AddMovies = () => {
  const movieTypes = [
    'action',
    'romance',
    'thriller',
    'comedy',
    'documentries',
    'dramas',
    'sports',
    'crime',
    'hollywood',
    'classic',
  ];
  const [grossRating, setGrossRating] = useState();
  const [description, setdescription] = useState();
  const [releasingYear, setreleasingYear] = useState();
  const [movieTitle, setmovieTitle] = useState();
  const [type, settype] = useState([]);
  const [genreInput, setgenreInput] = useState('');
  const [isKeyReleasedGenre, setIsKeyReleasedGenre] = useState(false);
  const [maturityRating, setmaturityRating] = useState();
  const [input, setInput] = useState('');
  const [cast, setcast] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const [writerInput, setwriterInput] = useState('');
  const [directorInput, setDirectorInput] = useState('');
  const [writer, setwriter] = useState([]);
  const [director, setdirector] = useState([]);
  const [isKeyReleasedWriter, setIsKeyReleasedWriter] = useState(false);
  const [isKeyReleasedDirector, setIsKeyReleasedDirector] = useState(false);
  // cast
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
  const deletecast = index => {
    setcast(prevState => prevState.filter((tag, i) => i !== index));
  };
  //   genre
  const onChangeGenre = e => {
    const { value } = e.target;
    setgenreInput(value);
  };
  const onKeyDownGenre = e => {
    const { key } = e;
    const trimmedInput = genreInput.trim();

    if (
      (key === ',', key === 'Enter') &&
      trimmedInput.length &&
      !type.includes(trimmedInput)
    ) {
      e.preventDefault();
      settype(prevState => [...prevState, trimmedInput]);
      setgenreInput('');
    }

    if (
      key === 'Backspace' &&
      !genreInput.length &&
      type.length &&
      isKeyReleasedGenre
    ) {
      const castCopy = [...type];
      const poppedTag = castCopy.pop();
      e.preventDefault();
      settype(castCopy);
      setgenreInput(poppedTag);
    }

    setIsKeyReleasedGenre(false);
  };
  const onKeyUpGenre = () => {
    setIsKeyReleasedGenre(true);
  };
  const deletegenre = index => {
    settype(prevState => prevState.filter((tag, i) => i !== index));
  };
  //   writer

  const onChangeWriter = e => {
    const { value } = e.target;
    setwriterInput(value);
  };
  const onKeyDownWriter = e => {
    const { key } = e;
    const trimmedInput = writerInput.trim();

    if (
      (key === ',', key === 'Enter') &&
      trimmedInput.length &&
      !writer.includes(trimmedInput)
    ) {
      e.preventDefault();
      setwriter(prevState => [...prevState, trimmedInput]);
      setwriterInput('');
    }

    if (
      key === 'Backspace' &&
      !writerInput.length &&
      writer.length &&
      isKeyReleasedWriter
    ) {
      const castCopy = [...writer];
      const poppedTag = castCopy.pop();
      e.preventDefault();
      setwriter(castCopy);
      setwriterInput(poppedTag);
    }

    setIsKeyReleasedWriter(false);
  };
  const onKeyUpWriter = () => {
    setIsKeyReleasedWriter(true);
  };
  const deletewriter = index => {
    setwriter(prevState => prevState.filter((tag, i) => i !== index));
  };
//   director

const onChangeDirector = e => {
    const { value } = e.target;
    setDirectorInput(value);
  };
  const onKeyDownDirector = e => {
    const { key } = e;
    const trimmedInput = directorInput.trim();

    if (
      (key === ',', key === 'Enter') &&
      trimmedInput.length &&
      !director.includes(trimmedInput)
    ) {
      e.preventDefault();
      setdirector(prevState => [...prevState, trimmedInput]);
      setDirectorInput('');
    }

    if (
      key === 'Backspace' &&
      !directorInput.length &&
      director.length &&
      isKeyReleasedDirector
    ) {
      const castCopy = [...director];
      const poppedTag = castCopy.pop();
      e.preventDefault();
      setdirector(castCopy);
      setDirectorInput(poppedTag);
    }

    setIsKeyReleasedDirector(false);
  };
  const onKeyUpDirector = () => {
    setIsKeyReleasedDirector(true);
  };
  const deleteDirector = index => {
    setdirector(prevState => prevState.filter((tag, i) => i !== index));
  };
// submit handler
  const submitHandler = () => {
    if (
      !description ||
      !movieTitle ||
      !type ||
      !releasingYear ||
      !grossRating ||
      !maturityRating ||
      !cast ||
      !director
    ) {
      alert('Please fill all fields!');
      return;
    } else {
      const payload = {
        description: description,
        movieTitle: movieTitle,
        type: type,
        releasingYear: releasingYear,
        grossRating: grossRating,
        maturityRating: maturityRating,
        cast: cast,
        director: director,
      };

      console.log(payload);
      setdescription('');
      setmovieTitle('');
      settype('');
      setreleasingYear('');
      setGrossRating('');
      setmaturityRating('');
      setdirector('');
    }
  };
console.log(writer)
  return (
    <Stack py="6" px={{ base: '4', md: '18', lg: '24' }}>
      <Heading
        pb={'6'}
        textAlign={'center'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
      >
        Add New Movie
      </Heading>
      <Stack
        maxH={'70vh'}
        overflow="auto"
        px={{ base: '2', md: '4' }}
        w={'100%'}
        spacing={'10'}
      >
        {/* title and description */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            value={movieTitle}
            onChange={e => setmovieTitle(e.target.value)}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="movie title"
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
            placeholder="movie description"
            isRequired
          />
        </Stack>
        {/* type and releasing year */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="genre"
            onKeyDown={onKeyDownGenre}
            onKeyUp={onKeyUpGenre}
            onChange={onChangeGenre}
            value={genreInput}
            isRequired
          />
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
        {/* genre preview */}
        {type.length > 0 ? (
          <SimpleGrid
            // overflowX={'auto'}
            //   maxW={{ base: '100%', md: '50%' }}
            w={{ base: '100%', md: '50%' }}
            direction={'row'}
            minChildWidth="120px"
            spacing="10px"
          >
            {type?.map((tag, index) => (
              <Tag
                minH={'40px'}
                border="1px solid orange"
                borderRadius="lg"
                backgroundColor="orange"
                _hover={{
                  cursor: 'pointer',
                }}
                colorScheme={'purple'}
                size={'lg'}
                onClick={() => deletegenre(index)}
              >
                {tag}
              </Tag>
            ))}
          </SimpleGrid>
        ) : null}

        {/* title image trailer video */}
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
            type="number"
            _focusVisible={{}}
            borderColor="black"
            placeholder="total Time"
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
        {/* writer and directors */}
        <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
          <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="writer names"
            onKeyDown={onKeyDownWriter}
            onKeyUp={onKeyUpWriter}
            onChange={onChangeWriter}
            value={writerInput}
            isRequired
          />
         <Input
            w={{ base: '100%', md: '50%' }}
            size={'lg'}
            _hover={{}}
            _focusVisible={{}}
            borderColor="black"
            placeholder="director names"
            onKeyDown={onKeyDownDirector}
            onKeyUp={onKeyUpDirector}
            onChange={onChangeDirector}
            value={directorInput}
            isRequired
          />
        </Stack>
        {/* writer names preview */}
        {writer.length > 0 || director.length > 0 ? (
          <Stack spacing={'8'} direction={{ base: 'column', md: 'row' }}>
            <SimpleGrid
              // overflowX={'auto'}
              //   maxW={{ base: '100%', md: '50%' }}
              w={{ base: '100%', md: '50%' }}
              direction={'row'}
              minChildWidth="120px"
              spacing="10px"
            >
              {writer?.map((tag, index) => (
                <Tag
                  minH={'40px'}
                  border="1px solid orange"
                  borderRadius="lg"
                  backgroundColor="orange"
                  _hover={{
                    cursor: 'pointer',
                  }}
                  colorScheme={'purple'}
                  size={'lg'}
                  onClick={() => deletewriter(index)}
                >
                  {tag}
                </Tag>
              ))}
            </SimpleGrid>
            <SimpleGrid
              // overflowX={'auto'}
              //   maxW={{ base: '100%', md: '50%' }}
              w={{ base: '100%', md: '50%' }}
              direction={'row'}
              minChildWidth="120px"
              spacing="10px"
            >
              {director?.map((tag, index) => (
                <Tag
                  minH={'40px'}
                  border="1px solid orange"
                  borderRadius="lg"
                  backgroundColor="orange"
                  _hover={{
                    cursor: 'pointer',
                  }}
                  colorScheme={'purple'}
                  size={'lg'}
                  onClick={() => deleteDirector(index)}
                >
                  {tag}
                </Tag>
              ))}
            </SimpleGrid>
          </Stack>
        ) : null}
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
        {cast.length > 0 ? (
          <SimpleGrid
            pl="5"
            // overflowX={'auto'}
            //   maxW={{ base: '100%', md: '50%' }}
            w={{ base: '100%', md: '50%' }}
            direction={'row'}
            alignSelf={{ base: 'initial', md: 'end' }}
            minChildWidth="120px"
            spacing="10px"
          >
            {cast?.map((tag, index) => (
              <Tag
                minH={'40px'}
                border="1px solid orange"
                borderRadius="lg"
                backgroundColor="orange"
                _hover={{
                  cursor: 'pointer',
                }}
                colorScheme={'purple'}
                size={'lg'}
                onClick={() => deletecast(index)}
              >
                {tag}
              </Tag>
            ))}
          </SimpleGrid>
        ) : null}

        <Stack pt={{ base: '4', md: '8' }} alignItems={'center'}>
          <Button
            borderRadius={'lg'}
            size={'lg'}
            w={{ base: '60%', md: '25%', lg: '20%' }}
            colorScheme={'red'}
            onClick={() => submitHandler()}
          >
            {' '}
            Upload Movie
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AddMovies;
