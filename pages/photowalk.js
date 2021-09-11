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

import ContentContainer from '@/components/site/container/contentContainer'

import data from '../data'

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
            <Heading fontSize={{ base: '4xl', sm: '6xl' }}>Photowalk</Heading>
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
      <ContentContainer></ContentContainer>
    </Box>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
