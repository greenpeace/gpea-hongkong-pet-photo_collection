import React from 'react';
import Head from 'next/head';
import Wrapper from 'components/site/wrapper';
import {
  Box,
  Center,
  Divider,
  List,
  OrderedList,
  ListItem,
  UnorderedList,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Image,
} from '@chakra-ui/react';

import PageContainer from '@/components/site/container/pageContainer';
import ContentContainer from '@/components/site/container/contentContainer';
import TopBanner from '@/components/site/banner/banner';
import UploadButton from '@/components/site/button/uploadButton';

import GroupTable from '@/components/rules/group';

import data from '../data';

const RuleHeadline = ({ children }) => {
  return (
    <Text fontWeight={700} color={'brand.500'} fontSize={'2xl'} mb={4}>
      {children}
    </Text>
  );
};

export default function Index() {
  return (
    <>
      <Head>
        <title>發揮創意，繪製「無塑海港」</title>
        <meta
          name="description"
          content="發揮創意，繪製「無塑海港」，立即上載你的作品，贏取豐富獎品並優先參與「無塑海港」展覽。各組別優勝作品將印刷成實物，成為你獨一無二的專屬重用杯，並於綠色和平「無塑海港」展覽展出及用作推廣綠色和平項目之用途，讓公眾進一步了解重用系統的概念及願景。"
        />
      </Head>
      <TopBanner
        src={
          'https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/87ea4a0b-gp1sular_high_res.jpg'
        }
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>比賽詳情</Heading>
        <Text lineHeight={'1.7'} fontSize={{ base: 'sm', md: 'md' }}>
          發揮創意，繪製「無塑海港」，立即上載你的作品，贏取豐富獎品並優先參與「無塑海港」展覽。各組別優勝作品將印刷成實物，成為你獨一無二的專屬重用杯，並於綠色和平「無塑海港」展覽展出及用作推廣綠色和平項目之用途，讓公眾進一步了解重用系統的概念及願景。
        </Text>
        <Box d={'none'} py={6} width={'100%'} maxWidth={'240px'}>
          <UploadButton />
        </Box>
      </TopBanner>
      <PageContainer>
        <ContentContainer>
          <RuleHeadline>{data.rules.timelineHeadline}</RuleHeadline>
          <Wrap py={4} spacing={6}>
            {data.rules.timelines.map((c, i) => (
              <WrapItem
                key={i}
                w={{ base: '38%', md: '20%' }}
                maxWidth={'180px'}
              >
                <Stack spacing={4} alignItems={'center'}>
                  <Image src={c.pic} alt={c.details} />
                  <Text fontSize={'sm'}>{c.details}</Text>
                </Stack>
              </WrapItem>
            ))}
          </Wrap>

          <Divider my={4} />

          <RuleHeadline>{data.rules.uploadHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.uploads.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.groupHeadline}</RuleHeadline>
          <Box>
            <List>
              {data.rules.groups.map((c) => (
                <ListItem key={c} mb={4}>
                  <Text fontWeight={500} mt={6} mb={2}>
                    {c.name}
                  </Text>
                  <Text fontSize={'sm'}>{c.details}</Text>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.formatHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.formats.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.criteriaHeadline}</RuleHeadline>
          <Box>
            {data.rules.criterias.map((c) => (
              <Text key={c} fontSize={'sm'} mb={2}>
                {c}
              </Text>
            ))}
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.specificationHeadline}</RuleHeadline>
          <Box>
            <OrderedList spacing={2}>
              {data.rules.specifications.map((c) => (
                <ListItem key={c}>
                  <Text fontSize={'sm'}>{c}</Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          <Divider my={4} />

          <RuleHeadline>{data.rules.dateHeadline}</RuleHeadline>
          <Text>{data.rules.date}</Text>

          <Divider my={4} />

          <RuleHeadline>{data.rules.prizeHeadline}</RuleHeadline>
          <Box>
            <List spacing={4}>
              {data.rules.prizeList.map((c, i) => (
                <ListItem key={i}>
                  <RuleHeadline>{c.headline}</RuleHeadline>
                  <UnorderedList spacing={2}>
                    {c.items.map((item, i) => (
                      <ListItem key={i}>
                        <Text fontSize={'sm'}>{item}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider my={4} />
          
          <RuleHeadline>參賽組別</RuleHeadline>

          <GroupTable />

          <Text fontSize={'md'}>捐款參加費及豐富禮品</Text>

          <UnorderedList spacing={2}>
            <ListItem>
              <Text fontSize={'sm'}>
                所有參加者成功上載參賽作品後，均可得到電子參賽證書一張
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={'sm'}>
                $100 以上捐款參加費用可作慈善捐款扣稅用途
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={'sm'}>
                所有禮品先到先得，送完即止。禮品領取詳情將於電郵通知。
              </Text>
            </ListItem>
          </UnorderedList>
        </ContentContainer>
      </PageContainer>
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
