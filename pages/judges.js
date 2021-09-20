import React from 'react'
import Head from 'next/head'
import Wrapper from 'components/site/wrapper'
import { Avatar, Box, Heading, Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'

import PageContainer from '@/components/site/container/pageContainer'
import ContentContainer from '@/components/site/container/contentContainer'
import TopBanner from '@/components/site/banner/banner'
import UploadButton from '@/components/site/button/uploadButton'
import Judge from '@/components/Judge'

import data from '../data'

// const MasonryItem = styled.li`
//   width: 90%;
//   max-width: 380px;
// `
// const masonryOptions = {
//   originTop: true,
//   gutter: 20,
//   itemSelector: '.photo-item',
// }

export default function Index() {
  return (
    <>
      <Head>
        <title>
          比賽評審 - 山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港
        </title>
      </Head>
      <TopBanner>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>比賽評審</Heading>
        <Box py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
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
          gap={6}
        >
          {data.judges.map((judge, index) => (
            <GridItem key={index}>
              <Judge judge={judge} />
            </GridItem>
          ))}
        </Grid>
        {/* </Masonry> */}
      </PageContainer>
    </>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
