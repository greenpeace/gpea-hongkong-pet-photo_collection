import React from 'react'
import Head from 'next/head'
import {
  Avatar,
  Box,
  Heading,
  Text,
  Tooltip,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import UploadButton from '@/components/site/button/uploadButton'
import TopBanner from '@/components/site/banner/banner'

import HeadlineVisual from '../assets/images/headline.png'

import data from 'data'

export default function Index() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>山海大嶼 攝影比賽2021 - Greenpeace 綠色和平 | 香港</title>
      </Head>
      <TopBanner>
        <Image src={HeadlineVisual} alt='山海大嶼攝影比賽 2021' />
        <Heading
          fontWeight={'700'}
          fontSize={{ base: '3xl', md: '5xl' }}
          display={'none'}
        >
          <Text as='span' fontWeight={'900'}>
            山海大嶼
          </Text>{' '}
          攝影比賽 2021
        </Heading>
        <Heading fontSize={{ base: 'lg', md: 'xl' }} display={'none'}>
          以影像訴說山海故事：留住大嶼今昔
        </Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像你訴說山海故事，保留大嶼今昔。獲選佳作更有機會展出及刊登於綠色和平2022年〈山海大嶼〉年曆中，參加者亦可優先獲得參加「與大師同攝」延伸活動的資格。
        </Text>
        <Box py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
        </Box>
        <Wrap spacing={4}>
          {data.judges.map((judge, index) => (
            <WrapItem key={index}>
              <Tooltip
                label={`${judge.designation}\n\n${judge.name}`}
                fontSize={'lg'}
                placement='top-start'
              >
                <Box
                  cursor='pointer'
                  onClick={() => {
                    router.push('/judges')
                  }}
                >
                  <Avatar
                    size='lg'
                    name={judge.name}
                    src={judge.avatar}
                    loading='lazy'
                    bg='transparent'
                  />
                </Box>
              </Tooltip>
            </WrapItem>
          ))}
        </Wrap>
      </TopBanner>
    </>
  )
}
