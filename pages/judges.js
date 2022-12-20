import React from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import { Box, Heading, Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

import PageContainer from '@/components/site/container/pageContainer';
import ContentContainer from '@/components/site/container/contentContainer';
import TopBanner from '@/components/site/banner/banner';
import UploadButton from '@/components/site/button/uploadButton';
import Judge from '@/components/Judge';

import data from '../data';

export default function Index() {
  return (
    <>
      <Head>
        <title>
          比賽評審 - 「無塑海港」重用杯創意設計比賽 - Greenpeace 綠色和平 | 香港
        </title>
      </Head>
      <TopBanner
        src={
          'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/6cf0d78d-dji_0445.jpg'
        }
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>比賽評審</Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          評審團將由著名插畫家、環保 KOL、環保繪本小畫家及綠色和平代表組成
        </Text>
        <Box d={'none'} py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton url={'https://api.greenpeace.org.hk/app/preview-hk/?preview=event-plastics-plasticfree_harbour'} />
        </Box>
      </TopBanner>
      <PageContainer>
        {/* <Masonry
          className='masonryGrid'
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        > */}
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            // xl: 'repeat(4, 1fr)',
          }}
          gap={4}
        >
          {data.judges.map((judge, index) => (
            <GridItem key={index}>
              <Judge judge={judge} />
            </GridItem>
          ))}
        </Grid>
        {/* </Masonry> */}
        <Flex
          flex={1}
          justify={'flex-end'}
          direction={'row'}
          maxW={'140px'}
          my={8}
        >
           <UploadButton url={'https://api.greenpeace.org.hk/app/preview-hk/?preview=event-plastics-plasticfree_harbour'} />
        </Flex>
      </PageContainer>
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
