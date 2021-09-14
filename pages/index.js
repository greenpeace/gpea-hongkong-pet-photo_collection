import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import ListItems from 'components/list/items'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import * as photoActions from 'store/actions/action-types/photo-actions'
import {
  Avatar,
  Box,
  Heading,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BsGrid1X2Fill, BsGrid1X2, BsGridFill, BsGrid } from 'react-icons/bs'

import UploadButton from '@/components/site/button/uploadButton'
import PageContainer from '@/components/site/container/pageContainer'
import TopBanner from '@/components/site/banner/banner'

import data from '../data'

export default function Index() {
  const router = useRouter()
  const [isMulti, setIsMulti] = useState(false)
  return (
    <>
      <Head>
        <title>山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港</title>
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>
          山海大嶼 攝影比賽2021
        </Heading>
        <Heading fontSize={{ base: 'lg', md: 'xl' }}>
          以影像訴說山海的故事：留住大嶼今昔
        </Heading>
        <Text lineHeight={'2'} fontSize={{ base: 'sm', md: 'md' }}>
          大嶼山坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性，
          綠色和平設立「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。
        </Text>
        <Box py={6}>
          <UploadButton />
        </Box>
        <Wrap spacing={4}>
          {data.judges.map((judge, index) => (
            <WrapItem key={index}>
              <Tooltip label={judge.name} fontSize={'md'} placement='top-start'>
                <Avatar
                  size='lg'
                  name={judge.name}
                  src={judge.pic}
                  loading='lazy'
                  bg='transparent'
                  cursor='pointer'
                  onClick={() => {
                    router.push('/judges')
                  }}
                />
              </Tooltip>
            </WrapItem>
          ))}
        </Wrap>
      </TopBanner>
      <PageContainer>
        {/* <Flex mt={-8} py={4} justifyContent={'flex-end'}>
            <Wrap>
              <IconButton
                onClick={() => {
                  setIsMulti(isMulti)
                }}
                icon={isMulti ? <BsGrid1X2 /> : <BsGrid />}
                aria-label={'Toggle Multi'}
                bg={'white'}
              />
            </Wrap>
          </Flex> */}
        <ListItems />
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
