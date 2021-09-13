import React from 'react'
import Wrapper from 'components/site/wrapper'
import {
  Avatar,
  Box,
  Stack,
  Center,
  Heading,
  Image,
  Text,
  Container,
  Grid,
  GridItem,
  Flex,
  Link,
} from '@chakra-ui/react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'

import data from '../data'

const MasonryItem = styled.li`
  width: 90%;
  max-width: 380px;
`

// Masory Options
const masonryOptions = {
  originTop: true,
  gutter: 20,
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
      <PageContainer>
        {/* <Masonry
          className='masonryGrid'
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        > */}
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {data.judges.map((judge, index) => (
            <GridItem key={index}>
              <Box
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                py={6}
                px={4}
                mt={12}
              >
                <Center mt={-16}>
                  <Avatar
                    size='2xl'
                    name={judge.name}
                    src={judge.pic}
                    loading='lazy'
                    bg='transparent'
                  />
                </Center>
                {/* <Image
                  h={'200px'}
                  w={'full'}
                  objectFit={'cover'}
                  src={judge.pic}
                  alt={judge.name}
                  loading='lazy'
                /> */}
                <Stack spacing={6}>
                  <Box mt={4}>
                    <Heading as='h3' fontSize={'xl'} mb={2} fontWeight={500}>
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
                  {judge.ig && judge.fb && (
                    <Stack w={'100%'} direction={'column'} spacing={4}>
                      <Link isExternal>
                        <Flex alignItems={'center'}>
                          <FaFacebook />
                          <Text
                            as='span'
                            fontSize={'sm'}
                            color={'gray.700'}
                            mx={2}
                          >
                            {judge.fb}
                          </Text>
                        </Flex>
                      </Link>
                      <Link isExternal>
                        <Flex alignItems={'center'}>
                          <FaInstagram w='8' />
                          <Text
                            as='span'
                            fontSize={'sm'}
                            color={'gray.700'}
                            mx={2}
                          >
                            {judge.ig}
                          </Text>
                        </Flex>
                      </Link>
                    </Stack>
                  )}
                </Stack>
              </Box>
            </GridItem>
          ))}
        </Grid>
        {/* </Masonry> */}
      </PageContainer>
    </Box>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
