import React, { useEffect } from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import UploadForm from 'components/form/upload'
import {
  Box,
  Divider,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'

import data from '../data'

export default function Index() {
  useEffect(() => {
    // Check logged In
  }, [])
  return (
    <>
      <Head>
        <title>
          立即上載作品 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港
        </title>
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>立即上載作品</Heading>
      </TopBanner>
      <PageContainer>
        <UploadForm />
        <ContentContainer>
          <Divider my={4} />
          <Text mb={4}>作品格式</Text>
          <OrderedList spacing={2}>
            {data.rules.formats.map((c) => (
              <ListItem key={c}>
                <Text fontSize={'sm'}>{c}</Text>
              </ListItem>
            ))}
          </OrderedList>
        </ContentContainer>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
