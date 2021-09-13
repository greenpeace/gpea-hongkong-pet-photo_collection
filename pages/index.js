import React, { useEffect } from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import ListItems from 'components/list/items'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import * as photoActions from 'store/actions/action-types/photo-actions'
import {
  Avatar,
  Button,
  Box,
  Stack,
  Center,
  Heading,
  Text,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import UploadButton from '@/components/site/button/uploadButton'
import PageContainer from '@/components/site/container/pageContainer'

import data from '../data'

export default function Index() {
  return (
    <>
      <Flex direction={'column'}>
        <Stack
          pos={'relative'}
          bgImage={'images/demo_1.jpeg'}
          bgSize={'cover'}
          minH={{ base: '240px', sm: '480px' }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Center
            h={'100%'}
            maxW={`container.md`}
            margin={`0 auto`}
            zIndex={3}
            pos={'relative'}
          >
            <Stack
              py={12}
              px={4}
              spacing={6}
              direction={'column'}
              alignItems={'center'}
              textAlign={'center'}
              color={'#FFF'}
            >
              <Heading fontSize={{ base: '3xl', md: '5xl' }}>
                山海大嶼 攝影比賽2021
              </Heading>
              <Heading fontSize={'2xl'}>
                以影像訴說山海的故事：留住大嶼今昔
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                大嶼山坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性，綠色和平設立「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。
              </Text>
              <Button>上傳圖片</Button>
              <Wrap pt={4}>
                {data.judges.map((judge, index) => (
                  <WrapItem key={index}>
                    <Avatar
                      size='lg'
                      name={judge.name}
                      src={judge.pic}
                      loading='lazy'
                      bg='transparent'
                    />
                  </WrapItem>
                ))}
              </Wrap>
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
        </Stack>
        <PageContainer>
          <ListItems />
        </PageContainer>
      </Flex>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
