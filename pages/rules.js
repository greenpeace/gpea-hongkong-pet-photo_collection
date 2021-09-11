import React from 'react'
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

import ContentContainer from '@/components/site/container/contentContainer'

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
    <Box>
      <Box
        pos={'relative'}
        bgImage={'images/demo_1.jpeg'}
        bgSize={'cover'}
        h={{ base: '240px', sm: '320px' }}
      >
        <Center
          h={'100%'}
          maxW={`container.md`}
          margin={`0 auto`}
          zIndex={3}
          pos={'relative'}
        >
          <Stack direction={'column'} textAlign={'center'} color={'#FFF'}>
            <Heading fontSize={{ base: '4xl', sm: '6xl' }}>比賽詳情</Heading>
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
    </Box>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
