import React from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import {
  Box,
  Stack,
  Center,
  Divider,
  List,
  OrderedList,
  ListItem,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'

import data from '../data'

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
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>比賽詳情</Heading>
      </TopBanner>
      <PageContainer>
        <ContentContainer>
          <RuleHeadline>{data.rules.timelineHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.timelines.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

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
            <List spacing={2}>
              {data.rules.prizes.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
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
