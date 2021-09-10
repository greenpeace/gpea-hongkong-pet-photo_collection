import React, { useEffect } from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import ListItems from 'components/list/items';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as photoActions from 'store/actions/action-types/photo-actions';
import { Box, Stack, Center, Heading, Text, Container } from '@chakra-ui/react';

export default function Index() {
  return (
    <>
      <Head>
        <title>INDEX</title>
      </Head>
      <Box>
        <Box
          pos={'relative'}
          bgImage={'images/demo_1.jpeg'}
          bgSize={'cover'}
          h={{ base: '240px', sm: '640px' }}
        >
          <Center
            h={'100%'}
            maxW={`container.md`}
            margin={`0 auto`}
            zIndex={3}
            pos={'relative'}
          >
            <Stack
              spacing={6}
              direction={'column'}
              textAlign={'center'}
              color={'#FFF'}
            >
              <Heading fontSize={{ base: '4xl', sm: '6xl' }}>
                山海大嶼 攝影比賽2021
              </Heading>
              <Heading fontSize={'2xl'}>
                以影像訴說山海的故事：留住大嶼今昔
              </Heading>
              <Text fontSize={{ base: 'md' }}>
                大嶼山坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性，綠色和平設立「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。
              </Text>
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
        <ListItems />
      </Box>
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
