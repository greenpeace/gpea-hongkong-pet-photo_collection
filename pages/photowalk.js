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
  GridItem,
  SimpleGrid,
  Image,
  Text,
  OrderedList,
  List,
  ListItem,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'

import data from '../data'
import TopBanner from '@/components/site/banner/banner'

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
          「與大師同攝」大嶼Photowalk - 山海大嶼 攝影比賽2021 - Greenpeace
          綠色和平 | 香港
        </title>
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', sm: '5xl' }}>
          「與大師同攝」
          <br />
          大嶼Photowalk
        </Heading>
      </TopBanner>
      <PageContainer>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={6}
          position={'relative'}
        >
          <Stack spacing={4}>
            <Heading as='h2' fontSize={'3xl'} my={4}>
              「與大師同攝」延伸活動
            </Heading>
            <Text>
              參加者亦可優先獲得參加大嶼Photo
              walk的資格，在11月中獲得附活動優先報名表電郵。
            </Text>
            <Text>
              兩場大嶼Photowalk會分別由比賽評審藝術風景攝影師鄭振揚Tugo
              Cheng，生態攝影師馮漢城、生態紀錄片製片人黃遂心和生態攝影師郭子祈主辦、綠色和平全力支持，將由帶領參加者走進大嶼實地拍攝，分享風景攝影、生態攝影和攝錄心得，以觀察者的角度分別探索並記錄大嶼周邊區域的風景及生態光影，尋找屬於你的大嶼山海故事！
            </Text>
            <Text>參加者會在11月中獲得附活動優先報名表電郵。</Text>
            <Divider />
            <Heading as='h3' fontSize={'2xl'} my={4}>
              「與大師同攝」大嶼Photowalk
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
              「與大師同攝」大嶼生態攝影工作坊
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
          </Stack>
          <Box>
            {data.judges
              .filter((judge) => {
                return judge.id === 1
              })
              .map((judge, index) => (
                <Fragment key={index}>
                  <GridItem>
                    <Box
                      w={'full'}
                      bg={'white'}
                      boxShadow={'2xl'}
                      rounded={'md'}
                      py={6}
                      px={4}
                      mt={12}
                    >
                      <Center mt={-16}>
                        <Avatar
                          size='2xl'
                          name={judge.name}
                          src={judge.pic}
                          loading='lazy'
                          bg='transparent'
                        />
                      </Center>
                      <Stack spacing={6}>
                        <Box mt={4}>
                          <Heading
                            as='h3'
                            fontSize={'xl'}
                            mb={2}
                            fontWeight={500}
                          >
                            {judge.name}
                          </Heading>
                          <Text
                            fontSize={'sm'}
                            letterSpacing={'2px'}
                            color={'gray.900'}
                          >
                            {judge.designation}
                          </Text>
                        </Box>
                        <Text
                          fontSize={'sm'}
                          letterSpacing={'2px'}
                          color={'gray.700'}
                        >
                          {judge.profile}
                        </Text>
                        {judge.ig && judge.fb && (
                          <Stack w={'100%'} direction={'column'} spacing={4}>
                            <Flex alignItems={'center'}>
                              <FaFacebook />
                              <Text
                                as='span'
                                fontSize={'sm'}
                                color={'gray.700'}
                                mx={2}
                              >
                                {judge.fb}
                              </Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                              <FaInstagram w='8' />
                              <Text
                                as='span'
                                fontSize={'sm'}
                                color={'gray.700'}
                                mx={2}
                              >
                                {judge.ig}
                              </Text>
                            </Flex>
                          </Stack>
                        )}
                      </Stack>
                    </Box>
                  </GridItem>
                </Fragment>
              ))}
          </Box>
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
