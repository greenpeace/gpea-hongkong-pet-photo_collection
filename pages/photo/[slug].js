import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from 'components/site/navbar/nav';
import { connect } from 'react-redux';
import * as storeVotingActions from 'store/actions/action-types/store-voting-actions';
import PageContainer from '@/components/site/container/pageContainer';
import { AiOutlineShareAlt, AiOutlineCloudUpload } from 'react-icons/ai';
import { IconButton } from '@chakra-ui/react';
import {
  Divider,
  Text,
  Heading,
  Button,
  Stack,
  Box,
  Image,
  Flex,
  Fade,
  Wrap,
} from '@chakra-ui/react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import Footer from 'components/site/footer/SmallWithSocial';

function Index(props) {
  const [content, setContent] = useState(props.content);
  const [shareUrl, setShareUrl] = useState();
  const { storeVoting, storeUserVotes, vote } = props;

  const localUser =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
      : null;

  useEffect(() => {
    setShareUrl(document.location.href);
    // console.log(shareUrl)
  }, []);

  const handleVoting = () => {
    if (localUser) {
      const gSheetFormData = [
        {
          timestamp: content.timestamp,
          id: content.id,
          votes: '1',
          userId: localUser.userId || '',
        },
      ];
      const storeData = [...storeVoting, content.id];
      vote(gSheetFormData);
      storeUserVotes(storeData);
    }
  };

  return (
    <>
      <Head>
        <title>Demo::::{content.title}</title>
      </Head>
      <Nav />
      <PageContainer>
        <Stack pos="relative" h={'100%'}>
          <Flex
            className="photo-container"
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'black'}
          >
            <Box className="photo-wrapper" minH={40}>
              <Image
                src={content.qBest}
                alt={content.title}
                width="100%"
                maxH={`75vh`}
                loading="lazy"
                pos={`relative`}
                zIndex={2}
              />
              <Box className="photo-credit" py={1} px={2}>
                <Text fontSize={'sm'}>©{content.author}</Text>
              </Box>
            </Box>
          </Flex>
          <Stack
            direction={'column'}
            alignItems={'flex-start'}
            spacing={6}
            px={6}
            py={6}
          >
            <Stack
              w={'full'}
              spacing={6}
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'flex-start' }}
              justifyContent={'space-between'}
            >
              <Wrap flex={1} align={'center'} spacing={6}>
                <Heading fontSize={'2xl'} minW={'300px'}>
                  {content.title}
                </Heading>
                <Button
                  size="md"
                  mx={2}
                  px={8}
                  py={4}
                  colorScheme="green"
                  backgroundColor="brand.500"
                  onClick={() => handleVoting()}
                  disabled={storeVoting.indexOf(content.id) !== -1}
                >
                  {storeVoting.indexOf(content.id) !== -1
                    ? `感謝您的投票`
                    : `投票`}
                </Button>
              </Wrap>
              <Wrap align="center" spacing={4}>
                <IconButton
                  aria-label="Share 分享"
                  isRound
                  w={'28px'}
                  variant="outline"
                  icon={<AiOutlineShareAlt />}
                  onClick={() => {
                    NavigatorShare(
                      content.title,
                      content.description,
                      shareUrl
                    );
                  }}
                />
                <FacebookShareButton url={shareUrl} quote={content.title}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={content.title}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={content.title}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </Wrap>
            </Stack>

            <Stack direction="row" spacing={2} color={'gray.700'}>
              <Text as={'span'} fontSize={'sm'}>
                作者：
                {content.author}
              </Text>
              <Text as={'span'} fontSize={'sm'}>
                於 {new Date(content.timestamp).toLocaleDateString()} 上載
              </Text>
            </Stack>

            <Stack>
              {content.description && (
                <Box>
                  <Text
                    as="h3"
                    lineHeight={'2'}
                    fontSize={'md'}
                    px={4}
                    my={4}
                    borderLeft={'4px'}
                    borderColor={'brand.500'}
                  >
                    作品說明
                  </Text>
                  <Text
                    as="p"
                    lineHeight={'1.7'}
                    fontSize="sm"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {`${content.description}`}
                  </Text>
                </Box>
              )}
              {content.story && (
                <Box>
                  <Text
                    as="h3"
                    lineHeight={'2'}
                    fontSize={'md'}
                    px={4}
                    my={4}
                    borderLeft={'4px'}
                    borderColor={'brand.500'}
                  >
                    我的大嶼故事
                  </Text>
                  <Text
                    as="p"
                    lineHeight={'1.7'}
                    fontSize="sm"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {`${content.story}`}
                  </Text>
                </Box>
              )}
            </Stack>

            {content.category && (
              <Text as="span" className="grid__tag" fontSize={'xs'}>
                #{content.category}
              </Text>
            )}

            {content.featured === 'TRUE' && (
              <Text as="span" className="grid__badge" fontSize={'xs'}>
                #評審作品
              </Text>
            )}

            <Divider my={4} />

            <Box
              py={2}
              px={4}
              mb={4}
              borderLeft={'4px'}
              borderColor={'brand.500'}
            >
              <Text fontSize="sm" color={'gray.700'}>
                大嶼山坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性，
                綠色和平設立「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。
              </Text>
            </Box>
          </Stack>
        </Stack>
      </PageContainer>
      <Footer />
    </>
  );
}

const getPhotosProp = async () => {
  let fetchURLs = [];
  let photoResult = [];

  const getPhotoTotal = await axios
    .get(
      `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&limit=1`
    )
    .then((response) => {
      return response.data.totalCount;
    })
    .catch(function (error) {
      console.log(error);
    });

  for (let i = 230; i < getPhotoTotal; i += 100) {
    fetchURLs = [
      ...fetchURLs,
      `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&offset=${i}`,
    ];
  }

  const allPhoto = await axios
    .all(fetchURLs.map((d) => axios.get(d)))
    .then(
      axios.spread(async (...res) => {
        await res.map((d) => photoResult.push(d.data.records));
        return photoResult.flat(1);
      })
    )
    .then((data) => {
      const resData = {
        records: data
          .map((d) => ({
            ...d,
            qEco: d.url.replace('/upload/', '/upload/c_fit,w_480,q_auto:low/'),
            qBest: d.url.replace(
              '/upload/',
              '/upload/c_fit,w_1920,q_auto:best/'
            ),
            id: d.id.split('/').pop(),
            newTimestamp: new Date(d.timestamp).getTime(),
          }))
          .sort((a, b) => b.newTimestamp - a.newTimestamp),
      };
      return resData;
    })

    .catch(function (error) {
      console.log(error);
    });

  return allPhoto;
};

export async function getStaticProps(context) {
  const allPhoto = await getPhotosProp();
  console.log('context.params.slug', context.params.slug)
  return {
    props: {
      content: allPhoto.records.find((d) => d.id === context.params.slug) || {},
      // content: {},
      slug: context.params.slug,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const allPhoto = await getPhotosProp();
  console.log(`build path::::::`)
  const getPaths = await allPhoto.records.map((d) => ({
    params: { slug: d.id },
  }));
  return {
    // Opt-out of the described fallback behavior
    fallback: false,
    paths: getPaths,
    // paths: [{ params: { slug: "dxx7cuoorn8lsknvvsyt" } }],
  };
}

const mapStateToProps = ({ storeVoting }) => ({
  storeVoting: storeVoting.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    vote: (data) => {
      dispatch({ type: votingActions.ADD_VOTING, data });
    },
    storeUserVotes: (data) => {
      dispatch({ type: storeVotingActions.STORE_VOTING, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
