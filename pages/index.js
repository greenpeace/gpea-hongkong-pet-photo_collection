import React, { useEffect } from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import ListItems from 'components/list/items';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as photoActions from 'store/actions/action-types/photo-actions';

import { Box, Stack, Center, Heading, Text } from '@chakra-ui/react';
import SubNav from 'components/site/navbar/subNav';

export default function Index({ photos }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: photoActions.SET_PHOTO_SUCCESS, data: photos });
  }, []);
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
            <Stack direction={'column'} textAlign={'center'} color={'#FFF'}>
              <Heading fontSize={{ base: '4xl', sm: '6xl' }}>
                2021年攝影比賽
              </Heading>
              <Text fontSize={{ base: 'md', sm: 'xl' }}>
                感謝各位提交作品，參加本年度的攝影比賽。提交期限已過，但歡迎你在
                9 月 4日起參與「人氣大奬」的投選，給喜愛的相片投下你的一票！
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
        <SubNav />
        <ListItems photos={photos} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const photos = await axios
    .get(process.env.G_SHEET)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });

  return {
    props: { photos },
  };
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
