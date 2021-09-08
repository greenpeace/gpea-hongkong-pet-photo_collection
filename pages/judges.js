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

import data from '../data';

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
          <Heading>比賽評審</Heading>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            {data.judges.map((judge, index) => (
              <Center key={index}>
                <Box
                  maxW={'270px'}
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}
                >
                  <Image
                    h={'150px'}
                    w={'full'}
                    src={
                      'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    alt={judge.name}
                    objectFit={'cover'}
                  />
                  <Stack p={4}>
                    <Heading fontSize={'2xl'} fontWeight={500}>
                      {judge.name}
                    </Heading>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      {judge.designation}
                    </Text>
                    <Text color={'gray.500'}>{judge.profile}</Text>
                  </Stack>
                </Box>
              </Center>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
