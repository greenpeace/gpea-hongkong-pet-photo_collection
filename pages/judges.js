import React from 'react'
import Wrapper from 'components/site/wrapper'
import {
  Box,
  Stack,
  Center,
  Heading,
  Image,
  Text,
  Container,
} from '@chakra-ui/react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'

import data from '../data'

const MasonryItem = styled.li`
  width: 480px;
`

// Masory Options
const masonryOptions = {
  originTop: false,
  fitWidth: false,
  gutter: 30,
  itemSelector: '.photo-item',
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

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
          <Stack direction={'column'} textAlign={'center'} color={'white'}>
            <Heading fontSize={{ base: '4xl', sm: '6xl' }}>比賽評審</Heading>
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
            className='masonryGrid'
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {data.judges.map((judge, index) => (
              <MasonryItem className={'photo-item'} key={index}>
                <Box
                  w={'full'}
                  bg={'white'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}
                >
                  <Stack p={4} spacing={6}>
                    <Image
                      h={'200px'}
                      w={'full'}
                      objectFit={'cover'}
                      src={judge.pic}
                      alt={judge.name}
                    />
                    <Box>
                      <Heading as='h3' fontSize={'2xl'} mb={2} fontWeight={500}>
                        {judge.name}
                      </Heading>
                      <Text
                        fontSize={'sm'}
                        letterSpacing={'2px'}
                        color={'gray.900'}
                      >
                        {judge.designation}
                      </Text>
                    </Box>
                    <Text
                      fontSize={'sm'}
                      letterSpacing={'2px'}
                      color={'gray.700'}
                    >
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
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
