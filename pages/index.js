import React from 'react';
import { Box, Stack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

import Wrapper from 'components/site/wrapper';
import ListItems from 'components/list/items';
import TopSection from 'components/site/topSection';
import PageContainer from '@/components/site/container/pageContainer';

import TopBanner from '@/components/site/banner/banner';
import UploadButton from '@/components/site/button/uploadButton';

import data from '../data';

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
      <TopSection />
      {/* <PageContainer>
        <ListItems />
      </PageContainer> */}
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
                綠色和平成立50年，親身見證（bearing
                witness）一直是核心行動信念之一，透過將自然美態及環境災害呈現於大眾眼前，掀起全球環境運動的帷幕，創下無數鼓舞人心的變革。鼓動環保風潮路上縱不免崎嶇，但我們堅持採取直接行動與抱持希望：不是因為有希望才去行動，而是行動帶來希望的曙光。
              </Text>
              <Text>
                守護環境需要結合眾人之力，向世界展示大嶼珍貴價值和美態，動員香港人守護屬於我們的山海。期待你在相簿加入獨特的大嶼相片，共同譜寫大嶼故事，將一幀幀強而有力的影像轉化成守護大嶼的力量。
              </Text>
              <Text>
                立即行動，一人一張大嶼相片，保留大嶼今昔，讓下一代也得以親身見證這片山光水色！
              </Text>
              <Box d={'none'} py={6} width={'100%'} maxWidth={'240px'}>
                <UploadButton />
              </Box>
            </Stack>
          </Box>
          <Box px={8}>
            <Stack spacing={6}>
              <ImageRounded>
                <Image
                  src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/10/6baccb13-dji_0185-l-e1622200897723.jpg"
                  alt="綠色和平「堅守大嶼滑翔傘行動」。© Vincent Chan / Greenpeace"
                  loading="lazy"
                />
              </ImageRounded>
              <ImageRounded>
                <Image
                  src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/729d9cbc-gp1sul6v_high_res-scaled.jpg"
                  alt="綠色和平一直堅持守護生態，反對明日大嶼填海計劃。"
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
