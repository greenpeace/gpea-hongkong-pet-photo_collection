import React, { Fragment } from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import { Box, Stack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import UploadButton from '@/components/site/button/uploadButton'

import data from '../data'

const ImageRounded = ({ children }) => {
  return (
    <Box
      rounded={'md'}
      boxShadow={'2xl'}
      width={'full'}
      height={'300px'}
      overflow={'hidden'}
    >
      {children}
    </Box>
  )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>序言 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港</title>
      </Head>
      <TopBanner
        src={
          'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/e4530e56-gp1sul8f_high_res-scaled.jpg'
        }
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>序言</Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          「山海大嶼」攝影比賽2021參加者可優先獲得參加「與大師同攝」延伸活動的資格，活動詳情及優先報名表將於在11月中以電郵通知。
        </Text>
        <Box py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
        </Box>
      </TopBanner>
      <PageContainer>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={6}
          position={'relative'}
        >
          <Box>
            <Stack spacing={8}>
              <Text>
                「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。獲選佳作更有機會展出及刊登於綠色和平2022年〈山海大嶼〉年曆中，參加者亦可優先獲得參加「與大師同攝」延伸活動的資格。
              </Text>
              <Text>
                綠色和平成立50年，親身見證（bearing
                witness）一直是核心行動信念之一，我們向世界揭露過油漏大海、核散四方、冰融極地等教人心碎的災害，透過將壯麗自然美態及破壞環境的代價呈現於大眾眼前，掀起全球環境運動的帷幕，創下無數的鼓舞人心的變革。鼓動環保風潮路上縱不免崎嶇，但我們堅持採取直接行動與抱持希望：不是因為有希望才去行動，而是行動帶來希望的曙光。
              </Text>
              <Text>
                守護環境需要結合眾人之力，向世界展示大嶼珍貴價值和美態，動員香港人守護屬於我們的山海。期待你在相簿加入獨特的大嶼相片，共同譜寫大嶼故事，以一幀幀的影像，將強而有力的影像轉化成守護大嶼的力量。
              </Text>
              <Text>
                立即行動，一人一張大嶼相片，保留大嶼今昔，讓下一代也得以親身見證這片山光水色！
              </Text>
              <Box>
                <UploadButton />
              </Box>
            </Stack>
          </Box>
          <Box px={8}>
            <Stack spacing={6}>
              <ImageRounded>
                <Image
                  src='https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/10/6baccb13-dji_0185-l-e1622200897723.jpg'
                  alt='綠色和平「堅守大嶼滑翔傘行動」。© Vincent Chan / Greenpeace'
                  loading='lazy'
                />
              </ImageRounded>
              <ImageRounded mr={12}>
                <Image
                  src='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/729d9cbc-gp1sul6v_high_res-scaled.jpg'
                  alt='綠色和平一直堅持守護生態，反對明日大嶼填海計劃。'
                  loading='lazy'
                />
              </ImageRounded>
            </Stack>
          </Box>
        </SimpleGrid>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
