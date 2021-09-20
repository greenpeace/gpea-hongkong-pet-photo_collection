import React from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import {
  Box,
  Center,
  Divider,
  List,
  OrderedList,
  ListItem,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Image from 'next/image'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import UploadButton from '@/components/site/button/uploadButton'

import data from '../data'

import banner from '../assets/images/GP1SUL6W_High_res.jpg'

const RuleHeadline = ({ children }) => {
  return (
    <Text fontWeight={500} fontSize={'xl'} mb={4}>
      {children}
    </Text>
  )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>
          比賽詳情 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港
        </title>
        <meta
          name='description'
          content='捕捉大嶼獨有光景，立即上載你的作品，贏取參與「與大師同攝」延伸活動的機會，各組別優勝作品將有機會刊登於綠色和平年曆，並於綠色和平網上平台發佈，與香港20萬讀者分享。'
        />
      </Head>
      <TopBanner src={banner.src}>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>比賽詳情</Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          捕捉大嶼獨有光景，立即上載你的作品，贏取參與「與大師同攝」延伸活動的機會，各組別優勝作品將有機會刊登於綠色和平年曆，並於綠色和平網上平台發佈，與香港20萬讀者分享。
        </Text>
        <Box py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
        </Box>
      </TopBanner>
      <PageContainer>
        <ContentContainer>
          <RuleHeadline>{data.rules.timelineHeadline}</RuleHeadline>
          <Wrap py={4} spacing={6}>
            {data.rules.timelines.map((c, i) => (
              <WrapItem
                key={i}
                w={{ base: '38%', md: '20%' }}
                maxWidth={'180px'}
              >
                <Stack spacing={4} alignItems={'center'}>
                  <Image src={c.pic} alt={c.details} />
                  <Text fontSize={'sm'}>{c.details}</Text>
                </Stack>
              </WrapItem>
            ))}
          </Wrap>
          {/* <Box>
            <OrderedList spacing={2}>
              {data.rules.timelines.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box> */}

          <Divider my={4} />

          <RuleHeadline>{data.rules.uploadHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.uploads.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.groupHeadline}</RuleHeadline>
          <Box>
            <List>
              {data.rules.groups.map((c) => (
                <ListItem key={c} mb={4}>
                  <Text fontWeight={500} mt={6} mb={2}>
                    {c.name}
                  </Text>
                  <Text fontSize={'sm'}>{c.details}</Text>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.formatHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.formats.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.criteriaHeadline}</RuleHeadline>
          <Box>
            {data.rules.criterias.map((c) => (
              <Text key={c} fontSize={'sm'} mb={2}>
                {c}
              </Text>
            ))}
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.specificationHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.specifications.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.dateHeadline}</RuleHeadline>
          <Text>{data.rules.date}</Text>

          <Divider my={4} />

          <RuleHeadline>{data.rules.prizeHeadline}</RuleHeadline>
          <Box>
            <List spacing={4}>
              {data.rules.prizes.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'md'}>{c}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </ContentContainer>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
