import React from 'react'
import Wrapper from 'components/site/wrapper'
import {
  Box,
  Stack,
  Center,
  Heading,
  Flex,
  Image,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'

import data from '../data'

export default function Index() {
  return (
    <Flex h={'full'} direction={'column'}>
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
            <Heading fontSize={{ base: '3xl', sm: '6xl' }}>
              「與大師同攝」
              <br />
              大嶼Photowalk
            </Heading>
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
      <PageContainer>
        <ContentContainer>
          <Stack spacing={4}>
            <Text>
              參加者亦可優先獲得參加大嶼Photo
              walk（詳情容後公佈）的機會，由評審帶大家走進大嶼，以觀察者的角度分別探索並記錄大嶼周邊區域的風景及生態光影。
            </Text>
            <Text>參加者會在11月中獲得附活動優先報名表電郵。</Text>
            <List spacing={4}>
              <ListItem>日期：</ListItem>
              <ListItem>時間：</ListItem>
              <ListItem>地點：</ListItem>
            </List>
          </Stack>
        </ContentContainer>
      </PageContainer>
    </Flex>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
