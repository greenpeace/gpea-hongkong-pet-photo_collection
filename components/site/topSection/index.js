import React from 'react';
import Head from 'next/head';
import {
  Avatar,
  Box,
  Heading,
  Text,
  Tooltip,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import UploadButton from '@/components/site/button/uploadButton';
import TopBanner from '@/components/site/banner/banner';

import data from 'data';

export default function Index() {
  const router = useRouter();
  return (
    <>
      <TopBanner>
        <Image
          w={'full'}
          maxW={'580px'}
          src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/279f402e-lantau-kv.png"
          alt="山海大嶼攝影比賽 2021"
        />
        <Box display={'none'}>
          <Heading fontWeight={'700'} fontSize={{ base: '3xl', md: '5xl' }}>
            <Text as="span" fontWeight={'bold'}>
              山海大嶼
            </Text>
            攝影比賽 2021
          </Heading>
          <Heading fontSize={{ base: 'lg', md: 'xl' }}>
            以影像訴說山海故事：留住大嶼今昔
          </Heading>
        </Box>
        <Text
          py={4}
          fontWeight="bold"
          lineHeight={'1.7'}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          更新：「山海大嶼」攝影比賽2021已截止報名，多謝支持，請密切留意最新比賽消息。
        </Text>
        <Box d={'none'} py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
        </Box>
        {/* <Wrap spacing={4}>
          {data.judges.map((judge, index) => (
            <WrapItem key={index}>
              <Tooltip
                label={`
                ${judge.designation}
                ${judge.name}
                `}
                fontSize={'lg'}
                placement="top-start"
                style={{ whiteSpace: 'pre-line' }}
              >
                <Box
                  cursor="pointer"
                  onClick={() => {
                    router.push('/judges');
                  }}
                >
                  <Avatar
                    size="lg"
                    name={judge.name}
                    src={judge.avatar}
                    loading="lazy"
                    bg="transparent"
                  />
                </Box>
              </Tooltip>
            </WrapItem>
          ))}
        </Wrap> */}
      </TopBanner>
    </>
  );
}
