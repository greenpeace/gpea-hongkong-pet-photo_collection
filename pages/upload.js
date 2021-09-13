import React, { useEffect } from 'react'
import Wrapper from 'components/site/wrapper'
import UploadForm from 'components/form/upload'
import {
  Box,
  Stack,
  Center,
  Divider,
  Heading,
  Text,
  Container,
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
    <Box>
      <TopBanner>
        <Heading fontSize={{ base: '4xl', sm: '6xl' }}>上傳圖片頁面</Heading>
      </TopBanner>
      <PageContainer>
        <Container
          rounded={{ base: 0, sm: 'md' }}
          bg='white'
          maxW={`container.lg`}
        >
          <UploadForm />
          <Divider my={4} />
          <Box>
            <Text mb={4}>作品格式</Text>
            <OrderedList spacing={2}>
              {data.rules.formats.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        </Container>
      </PageContainer>
    </Box>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
