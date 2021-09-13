import React from 'react'
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
      <TopBanner>
        <Heading fontSize={{ base: '3xl', sm: '5xl' }}>
          {data.thankyouMessage.headLine}
        </Heading>
      </TopBanner>
      <PageContainer>
        <ContentContainer>
          <Stack spacing={4}>
            <Heading>{data.thankyouMessage.headLine}</Heading>
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
