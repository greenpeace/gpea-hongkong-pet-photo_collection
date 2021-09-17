import React from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import { Box, Stack, Center, Heading, Text, Container } from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import MiniDonateForm from 'components/donate/miniDonateForm'

import data from 'data/index'

export default function Index() {
  return (
    <>
      <Head>
        <title>
          {data.thankyouMessage.headLine} - 山海大嶼 攝影比賽2021 - Greenpeace
          綠色和平 | 香港
        </title>
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>
          {data.thankyouMessage.headLine}
        </Heading>
      </TopBanner>
      <PageContainer>
        <ContentContainer>
          <Stack spacing={4}>
            <Heading>{data.thankyouMessage.headLine}</Heading>
            <Text>{data.thankyouMessage.zeroLine}</Text>
            <Text>{data.thankyouMessage.firstLine}</Text>
            <Text>{data.thankyouMessage.secondLine}</Text>
            <MiniDonateForm />
          </Stack>
        </ContentContainer>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
