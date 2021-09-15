import React, { Fragment } from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import {
  Avatar,
  Box,
  Center,
  Stack,
  Divider,
  Heading,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  OrderedList,
  List,
  ListItem,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import UploadButton from '@/components/site/button/uploadButton'
import Judge from '@/components/Judge'

import data from '../data'

const RuleHeadline = ({ children }) => {
  return (
    <Text fontWeight={500} fontSize={'xl'} my={4}>
      {children}
    </Text>
  )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>
          「與大師同攝」延伸活動 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 |
          香港
        </title>
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>
          「與大師同攝」延伸活動
        </Heading>
        <Box py={4}>
          <UploadButton />
          <Text mt={8} fontSize={'sm'}>
            * 參加者優先獲得參加資格
          </Text>
        </Box>
      </TopBanner>
      <PageContainer>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={6}
          position={'relative'}
        >
          <Stack spacing={8}>
            <Heading as='h2' fontSize={'3xl'}>
              「與大師同攝」延伸活動
            </Heading>
            <Text>
              「山海大嶼」攝影比賽2021參加者可優先獲得參加「與大師同攝」延伸活動的資格，活動詳情及優先報名表將於在11月中以電郵通知。
            </Text>
            <Text>
              綠色和平主辦兩場「與大師同攝」延伸活動會由比賽評審藝術風景攝影師鄭振揚，生態攝影師馮漢城、生態紀錄片製片人黃遂心和生態攝影師郭子祈主講，將帶領參加者走進大嶼實地拍攝，分享風景攝影、生態攝影和攝錄心得，以觀察者的角度分別探索並記錄大嶼周邊區域的風景及生態光影，尋找屬於你的大嶼山海故事！
            </Text>
            <Box py={4}>
              <UploadButton />
              <Text mt={8} fontSize={'sm'}>
                * 參加者優先獲得參加資格
              </Text>
            </Box>
            <Divider />
            <Heading as='h3' fontSize={'2xl'} my={4}>
              一.「與大師同攝」大嶼Photowalk
            </Heading>
            <List spacing={4}>
              <ListItem>日期：2021年11月下旬</ListItem>
              <ListItem>時間：TBC</ListItem>
              <ListItem>地點：大嶼山</ListItem>
              <ListItem>對象：比賽參加者</ListItem>
              <ListItem>語言：廣東話</ListItem>
              <ListItem>名額：30人（名額有限，額滿即止）</ListItem>
              <ListItem>費用：免費</ListItem>
              <ListItem>講者：鄭振揚</ListItem>
            </List>
            <Divider />
            <Heading as='h3' fontSize={'2xl'} my={4}>
              二.「與大師同攝」大嶼生態攝影工作坊
            </Heading>
            <List spacing={4}>
              <ListItem>日期：2021年11月下旬</ListItem>
              <ListItem>時間：TBC</ListItem>
              <ListItem>地點：大嶼山</ListItem>
              <ListItem>對象：比賽參加者</ListItem>
              <ListItem>語言：廣東話</ListItem>
              <ListItem>名額：30人（名額有限，額滿即止）</ListItem>
              <ListItem>費用：免費</ListItem>
              <ListItem>講者：馮漢城、黃遂心、郭子祈</ListItem>
            </List>
            <Box py={4}>
              <UploadButton />
              <Text mt={8} fontSize={'sm'}>
                * 參加者優先獲得參加資格
              </Text>
            </Box>
          </Stack>
          <Grid gap={6}>
            {data.judges
              .filter((judge) => {
                return judge.id <= 3
              })
              .map((judge, index) => (
                <GridItem key={index} maxW={'440px'} mx={'auto'}>
                  <Judge judge={judge} />
                </GridItem>
              ))}
          </Grid>
        </SimpleGrid>
        <ContentContainer>
          <Box py={8}>
            <RuleHeadline>{data.photowalk.itemHeadline}</RuleHeadline>
            <Box>
              <OrderedList spacing={2}>
                {data.photowalk.items.map((c) => (
                  <ListItem key={c}>
                    <Text fontSize={'sm'}>{c}</Text>
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
            <RuleHeadline>{data.photowalk.tcHeadline}</RuleHeadline>
            <Box>
              <OrderedList spacing={2}>
                {data.photowalk.tcs.map((c) => (
                  <ListItem key={c}>
                    <Text fontSize={'sm'}>{c}</Text>
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
          </Box>
        </ContentContainer>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
