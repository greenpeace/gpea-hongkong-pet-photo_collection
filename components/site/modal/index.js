import {
  Divider,
  Modal,
  Text,
  Heading,
  ModalOverlay,
  ModalContent,
  Button,
  Stack,
  Skeleton,
  Box,
  Image,
  Flex,
  Fade,
  CloseButton,
  Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import * as modalActions from 'store/actions/action-types/modal-actions';
import * as votingActions from 'store/actions/action-types/voting-actions';
import * as storeVotingActions from 'store/actions/action-types/store-voting-actions';
import { IconButton } from '@chakra-ui/react';
import { AiOutlineShareAlt, AiOutlineCloudUpload } from 'react-icons/ai';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

function ModalWrapper({
  modal,
  closeModal,
  photo,
  vote,
  voting,
  storeVoting,
  storeUserVotes,
}) {
  const [imageLoading, setImageLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState();
  const [content, setContent] = useState(modal.content);
  const router = useRouter();

  const localUser =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
      : null;

  useEffect(() => {
    setShareUrl(document.location.href);
    // console.log(shareUrl)
  }, []);

  useEffect(async () => {
    if (!photo) {
      return;
    }

    setContent(null);
    const { id } = modal;
    const getPhoto = await photo.find((d) => d.id === id);
    setContent(getPhoto);
  }, [modal.id]);

  const handleCloseModal = () => {
    closeModal();
    setImageLoading(true);
    const { slug } = router.query;
    if (slug) {
      router.push(
        {
          pathname: router.pathname,
          query: { slug: slug },
        },
        undefined,
        { shallow: true }
      );
    } else {
      router.push(
        {
          pathname: router.pathname,
        },
        undefined,
        { shallow: true }
      );
    }
  };

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

  const NavigatorShare = (title, text, url) => {
    if (navigator.share) {
      navigator
        .share({
          title: title.value,
          text: text.value,
          url: url.value,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API is not supported in your browser.');
    }
  };

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={modal.isOpen}
      onClose={() => handleCloseModal()}
      closeOnOverlayClick={true}
      size={'4xl'}
      trapFocus={false}
      closeOnEsc={true}
      motionPreset="none"
    >
      <ModalOverlay />
      {content && (
        <Fade in={modal.isOpen}>
          <ModalContent>
            <Stack pos="relative" maxW={'1200px'} h={'100%'}>
              <Flex
                pos="sticky"
                zIndex={'3'}
                top="0"
                flexDirection={`row-reverse`}
              >
                <Box
                  m={2}
                  pos="relative"
                  zIndex={'99'}
                  rounded={'full'}
                  backgroundColor={'white'}
                >
                  <CloseButton size="lg" onClick={() => handleCloseModal()} />
                </Box>
              </Flex>
              <Box>
                <Flex
                  className="photo-container"
                  alignItems={'center'}
                  justifyContent={'center'}
                  backgroundColor={'black'}
                >
                  <Fade in={!imageLoading}>
                    <Box className="photo-wrapper" minH={40}>
                      <Image
                        src={content.qBest}
                        alt={content.title}
                        width="100%"
                        maxH={`75vh`}
                        loading="lazy"
                        onLoad={() => setImageLoading(false)}
                        pos={`relative`}
                        zIndex={2}
                      />
                      {!imageLoading && (
                        <Box className="photo-credit" py={1} px={2}>
                          <Text fontSize={'sm'}>©{content.author}</Text>
                        </Box>
                      )}
                    </Box>
                  </Fade>
                </Flex>
              </Box>
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
                      isDisabled={storeVoting.indexOf(content.id) !== -1}
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
          </ModalContent>
        </Fade>
      )}
    </Modal>
  );
}

const mapStateToProps = ({ modal, photo, voting, storeVoting }) => ({
  modal,
  photo: photo.data,
  voting: voting.data,
  storeVoting: storeVoting.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL });
    },
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL });
    },
    vote: (data) => {
      dispatch({ type: votingActions.ADD_VOTING, data });
    },
    storeUserVotes: (data) => {
      dispatch({ type: storeVotingActions.STORE_VOTING, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
