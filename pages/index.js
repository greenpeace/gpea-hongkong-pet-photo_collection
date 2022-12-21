import React, { Fragment } from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import { Box, Stack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

import PageContainer from '@/components/site/container/pageContainer';
import ContentContainer from '@/components/site/container/contentContainer';
import TopBanner from '@/components/site/banner/banner';
import UploadButton from '@/components/site/button/uploadButton';

import data from '../data';

import vs01 from "../assets/images/vs01.jpeg"
import vs02 from "../assets/images/vs02.jpeg"

import mainVS from "../assets/images/GP_ImageOnly_3751x1080.jpg"
import mobileMainVS from "../assets/images/GP_ImageOnly_3751x1080.jpg"

const ImageRounded = ({ children }) => {
  return (
    <Box rounded={'md'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default function Index() {
  return (
    <>
      <Head>
        <title>
          主頁 - 「無塑海港」重用杯創意設計比賽 - Greenpeace 綠色和平 | 香港
        </title>
      </Head>
      <TopBanner
        src={mainVS}
        mobile={mobileMainVS}
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>序言</Heading>
        {/* <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          「山海大嶼」攝影比賽2021參加者可優先獲得參加「與大師同攝」延伸活動的資格，活動詳情及優先報名表將於11月中以電郵通知。
        </Text> */}
        <Box d={'none'} py={6} width={'100%'} maxWidth={'240px'}>
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
                海港是香港的重要標誌，無論是維港的城市景貌抑或離島的自然風光，都代表香港的面貌。
              </Text>
              <Text>
                可是，每年卻有<b>逾八百萬噸塑膠垃圾</b>
                流入海洋，嚴重威脅海洋生態，以及你我和下一代的健康。
              </Text>
              <Text>
                綠色和平相信，從源頭減少即棄塑膠的生產和使用，並在社區實踐以重用代替即棄，善用社會共享資源，才是方便市民的源頭減廢方案，同時拯救我們引以為傲的美麗海港。
              </Text>
              <Text>
                因此，綠色和平於 2022 年 7
                月開始與本地咖啡店推行「重用杯借還計劃」，意在建立方便、可行、用家友善的借還系統，以重用取代即棄，促使資源共享，達至減塑和保護環境的理念。計劃於
                11 月中更擴展至第二階段，合作的咖啡店由首階段的 6 間增加至 36
                間。為進一步推廣可重用概念，綠色和平將於 2022 年 12 月至 2023 年
                2
                月舉辦「無塑海港」重用杯創意設計比賽，讓更多人認識「重用系統」，並把「重用系統」和「資源共享」的減廢新趨勢推廣至學校及公眾。
              </Text>
              <Text>
                守護環境需要結合眾人之力，向世界展示你我的「無塑」願景，動員小朋友、大朋友守護屬於我們的海港。期待你的參與，將創意設計轉化成推動「減塑」的力量。
              </Text>
              <Text>
                立即參與，一人一個設計，一起推廣「重用杯借還系統」和全城走塑理念，讓下一代仍能享受同見證這片蔚藍海港的醉人景色！
              </Text>
              <Box py={6} width={'100%'} maxWidth={'240px'}>
                <UploadButton url={'https://api.greenpeace.org.hk/app/preview-hk/?preview=event-plastics-plasticfree_harbour'} />
              </Box>
            </Stack>
          </Box>
          <Box px={8}>
            <Stack spacing={6}>
              <ImageRounded>
                <Image
                  src={vs02}
                  alt="「無塑海港」重用杯創意設計比賽"
                  loading="lazy"
                />
              </ImageRounded>
              <ImageRounded>
                <Image
                  src={vs01}
                  alt="「無塑海港」重用杯創意設計比賽"
                  loading="lazy"
                />
              </ImageRounded>
            </Stack>
          </Box>
        </SimpleGrid>
      </PageContainer>
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
