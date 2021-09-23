import React from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import {
  Box,
  Stack,
  Divider,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  OrderedList,
  List,
  ListItem,
  Image,
} from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import UploadButton from '@/components/site/button/uploadButton'
import Judge from '@/components/Judge'

import data from '../data'

import v1 from '../assets/images/IMG_4114.jpg'
import v2 from '../assets/images/Lantau for Green Peace-selections (1).jpg'
import v3 from '../assets/images/121A0671_full.jpg'
import v4 from '../assets/images/1W4A3779 1_resized.jpg'

import jamesPic from '../assets/images/james-avatar.png'
const james = {
  id: 'james',
  avatar: jamesPic,
  pic: '',
  name: '郭子祈 James Kwok',
  designation: '生態攝影師',
  profile:
    '生態攝影師James 從小開始觀察及拍攝本地生態。在大學修讀環境科學，令他更有專業地發掘及記錄本地豐富的生態，最近James更憑着一幅環頸鴴覓食的相片榮獲 East Asian-Australasian Flyway Partnership 的水鳥攝影比賽2019成人組冠軍。James拍攝生態的題材廣泛，不只限於雀鳥，James亦曾在本地兩棲爬行類動物攝影比賽裏面獲得成人組冠軍！',
  ig: 'jameskwok_wildlife',
  fb: '',
}

const ImageRounded = ({ children }) => {
  return (
    <Box rounded={'md'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
      {children}
    </Box>
  )
}

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
      <TopBanner
        src={
          'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/6e3a05a4-gp1sul6v_high_res-scaled.jpg'
        }
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>與大師同攝</Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          「山海大嶼」攝影比賽2021參加者可優先獲得參加「與大師同攝」延伸活動的資格，活動詳情及優先報名表將於11月中以電郵通知。
        </Text>
        <Box py={6} width={'100%'} maxWidth={'240px'}>
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
          <Stack spacing={6}>
            <Heading as='h2' fontSize={'3xl'}>
              「與大師同攝」延伸活動
            </Heading>
            <Text>
              「山海大嶼」攝影比賽2021參加者可優先獲得參加「與大師同攝」延伸活動的資格，活動詳情及優先報名表將於在11月中以電郵通知。
            </Text>
            <Text>
              綠色和平主辦兩場「與大師同攝」延伸活動會由比賽評審風景攝影師鄭振揚，生態攝影師馮漢城、生態紀錄片製片人黃遂心和生態攝影師郭子祈主講，將帶領參加者走進大嶼實地拍攝，分享風景攝影、生態攝影和攝錄心得，以觀察者的角度分別探索並記錄大嶼周邊區域的風景及生態光影，尋找屬於你的大嶼山海故事！
            </Text>
            <Box py={4}>
              <UploadButton />
              <Text mt={8} fontSize={'sm'}>
                * 參加者優先獲得參加資格
              </Text>
            </Box>
            <Divider />
            <Heading as='h3' fontSize={'2xl'} my={4}>
              一.「與大師同攝」大嶼 Photowalk
            </Heading>
            <List spacing={4}>
              <ListItem>日期：2021年11月下旬</ListItem>
              <ListItem>時間：稍後公佈</ListItem>
              <ListItem>地點：大嶼山</ListItem>
              <ListItem>對象：「山海大嶼」攝影比賽2021參加者</ListItem>
              <ListItem>語言：廣東話</ListItem>
              <ListItem>費用：免費</ListItem>
              <ListItem>導師：鄭振揚</ListItem>
            </List>
            <Box py={4}>
              <UploadButton />
              <Text mt={8} fontSize={'sm'}>
                * 參加者優先獲得參加資格
              </Text>
            </Box>
            <Stack direction={'row'} spacing={2}>
              <ImageRounded>
                <Image src={v1} alt={'v1'} />
              </ImageRounded>
              <ImageRounded>
                <Image src={v2} height={'100%'} objectFit='cover' alt={'v2'} />
              </ImageRounded>
            </Stack>
            <Divider />
            <Heading as='h3' fontSize={'2xl'} my={4}>
              二.「與大師同攝」大嶼生態攝影工作坊
            </Heading>
            <List spacing={4}>
              <ListItem>日期：2021年11月下旬</ListItem>
              <ListItem>活動時間：下午2：30 - 5：30</ListItem>
              <ListItem>活動地點：大嶼山貝澳</ListItem>
              <ListItem>對象：「山海大嶼」攝影比賽2021參加者</ListItem>
              <ListItem>語言：廣東話</ListItem>
              <ListItem>費用：免費</ListItem>
              <ListItem>導師：馮漢城、黃遂心、郭子祈</ListItem>
              <ListItem>
                活動焦點：
                <List pl={4} mt={4} spacing={2}>
                  <ListItem>- 濕地：水牛與雀鳥</ListItem>
                  <ListItem>- 海岸：招潮蟹、沙白蜆與雀鳥</ListItem>
                  <ListItem>- 紅樹林：招潮蟹</ListItem>
                </List>
              </ListItem>
            </List>
            <Box py={4}>
              <UploadButton />
              <Text mt={8} fontSize={'sm'}>
                * 參加者優先獲得參加資格
              </Text>
            </Box>
            <Stack direction={'row'} spacing={2}>
              <ImageRounded>
                <Image src={v3} alt={'v3'} />
              </ImageRounded>
              <ImageRounded>
                <Image src={v4} alt={'v4'} />
              </ImageRounded>
            </Stack>
            <Divider />
          </Stack>
          <Grid>
            {data.judges
              .filter((judge, index) => {
                return index <= 3
              })
              .map((judge, index) => (
                <GridItem key={index} maxW={'440px'} mx={'auto'}>
                  <Judge judge={judge} />
                </GridItem>
              ))}

            <GridItem maxW={'440px'} mx={'auto'}>
              <Judge judge={james} />
            </GridItem>
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
