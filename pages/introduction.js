import React, { Fragment } from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import { Box, Stack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import UploadButton from '@/components/site/button/uploadButton'

import data from '../data'

export default function Index() {
  return (
    <>
      <Head>
        <title>序言 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港</title>
      </Head>
      <TopBanner>
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
                「堅持做對的事，絕不退縮」是綠色和平一貫的理念，而公眾力量就是拯救環境的關鍵。我們相信，公眾可以透過親身見證與行動來表達對環境保護的堅持和信念，同時讓更多人加入環保行列，一同守護地球。
              </Text>
              <Text>
                綠色和平50年以來一直奉行親身見證（bearing
                witness）的行動信念，將破壞自然環境的代價呈現於大眾眼前，喚起關注
                …. followup。
              </Text>
              <Text>
                守護環境的使命不能單靠綠色和平，需要結合大家的力量，向世界展示大嶼珍貴價值和美態，從而動員守護香港山海。因此，我們期待你在相簿加入獨特的大嶼相片，以影像共同譜寫大嶼故事，並促請政府放棄「明日大嶼」填海計劃。
              </Text>
              <Text>保留大嶼今昔，讓下一代也得以親身見證這片山光水色。</Text>
              <Box py={4}>
                <UploadButton />
              </Box>
            </Stack>
          </Box>
          <Box px={4}>
            <Stack spacing={8}>
              <Box pr={12}>
                <Image
                  src='https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/10/6baccb13-dji_0185-l-e1622200897723.jpg'
                  alt='綠色和平「堅守大嶼滑翔傘行動」。© Vincent Chan / Greenpeace'
                  loading='lazy'
                />
              </Box>
              <Box pl={12}>
                <Image
                  src='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/729d9cbc-gp1sul6v_high_res-scaled.jpg'
                  alt='綠色和平一直堅持守護生態，反對明日大嶼填海計劃。'
                  loading='lazy'
                />
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
