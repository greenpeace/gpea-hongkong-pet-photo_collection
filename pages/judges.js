import React from 'react';
import Wrapper from 'components/site/wrapper';
import {
  Box,
  Stack,
  Center,
  Heading,
  Image,
  Text,
  Container,
} from '@chakra-ui/react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

import data from '../data';

const MasonryItem = styled.div`
  width: 50%;
  margin-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  @media only screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
  }
`;

const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

export default function Index() {
  return (
    <Box>
      <Box
        pos={'relative'}
        bgImage={'images/demo_1.jpeg'}
        bgSize={'cover'}
        h={{ base: '240px', sm: '320px' }}
      >
        <Center
          h={'100%'}
          maxW={`container.md`}
          margin={`0 auto`}
          zIndex={3}
          pos={'relative'}
        >
          <Stack direction={'column'} textAlign={'center'} color={'#FFF'}>
            <Heading fontSize={{ base: '4xl', sm: '6xl' }}>比賽評審</Heading>
            {/* <Text fontSize={{ base: 'md', sm: 'xl' }}>內頁 sub title</Text> */}
          </Stack>
        </Center>
        <Box
          bgColor={'#000'}
          pos={'absolute'}
          zIndex={2}
          top={0}
          bottom={0}
          w={'100%'}
          opacity={0.6}
        />
      </Box>
      <Box py={12}>
        <Container maxW={'container.xl'}>
          <Masonry
            className="masonryGrid"
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            {data.judges.map((judge, index) => (
              <MasonryItem key={index}>
                <Box
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}
                >
                  <Stack p={4}>
                    <Image
                      h={'150px'}
                      w={'full'}
                      objectFit={'cover'}
                      src={judge.pic}
                      alt={judge.name}
                    />
                    <Heading as="h3" fontSize={'2xl'} fontWeight={500}>
                      {judge.name}
                    </Heading>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      {judge.designation}
                    </Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      {judge.profile}
                    </Text>
                  </Stack>
                </Box>
              </MasonryItem>
            ))}
          </Masonry>
        </Container>
      </Box>
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
