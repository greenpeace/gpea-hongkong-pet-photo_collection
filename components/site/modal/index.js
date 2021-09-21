import {
  Divider,
  Modal,
  Text,
  Heading,
  ModalOverlay,
  ModalContent,
  Button,
  Stack,
  Box,
  Img,
  Flex,
  Fade,
  CloseButton,
  Wrap,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import * as modalActions from 'store/actions/action-types/modal-actions'
import * as votingActions from 'store/actions/action-types/voting-actions'
import * as storeVotingActions from 'store/actions/action-types/store-voting-actions'
import { IconButton } from '@chakra-ui/react'
import { AiOutlineShareAlt, AiOutlineCloudUpload } from 'react-icons/ai'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

function ModalWrapper({
  modal,
  closeModal,
  photo,
  vote,
  voting,
  storeVoting,
  storeUserVotes,
}) {
  const [shareUrl, setShareUrl] = useState()
  const [content, setContent] = useState(modal.content)
  const router = useRouter()

  const localUser =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
      : null

  useEffect(() => {
    setShareUrl(document.location.href)
    // console.log(shareUrl)
  }, [])

  useEffect(async () => {
    if (!photo) {
      return
    }

    const { id } = modal
    const getPhoto = await photo.find((d) => d.id === id)
    setContent(getPhoto)
  }, [modal.id])

  const handleCloseModal = () => {
    closeModal()
    const { slug } = router.query
    if (slug) {
      router.push(
        {
          pathname: router.pathname,
          query: { slug: slug },
        },
        undefined,
        { shallow: true }
      )
    } else {
      router.push(
        {
          pathname: router.pathname,
        },
        undefined,
        { shallow: true }
      )
    }
  }

  const handleVoting = () => {
    if (localUser) {
      const gSheetFormData = [
        {
          timestamp: content.timestamp,
          id: content.id,
          votes: '1',
          userId: localUser.userId || '',
        },
      ]
      const storeData = [...storeVoting, content.id]
      vote(gSheetFormData)
      storeUserVotes(storeData)
    }
  }

  const NavigatorShare = (title, text, url) => {
    if (navigator.share) {
      navigator
        .share({
          title: title.value,
          text: text.value,
          url: url.value,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    } else {
      console.log('Web Share API is not supported in your browser.')
    }
  }

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={modal.isOpen}
      onClose={() => handleCloseModal()}
      closeOnOverlayClick={true}
      size={'4xl'}
      trapFocus={false}
    >
      <ModalOverlay />
      {content && (
        <Fade in={modal.isOpen}>
          <ModalContent>
            <Stack pos='relative' maxW={'1200px'}>
              <Flex
                pos='sticky'
                zIndex={'1'}
                top='0'
                flexDirection={`row-reverse`}
              >
                <Box
                  m={2}
                  pos='relative'
                  zIndex={'1'}
                  rounded={'full'}
                  backgroundColor={'white'}
                >
                  <CloseButton size='lg' onClick={() => handleCloseModal()} />
                </Box>
              </Flex>
              <Box>
                <Flex
                  className='photo-container'
                  alignItems={'center'}
                  justifyContent={'center'}
                  backgroundColor={'black'}
                >
                  <Box className='photo-wrapper'>
                    <Img
                      className='photo'
                      src={content.url}
                      alt={content.title}
                      maxH={`75vh`}
                      loading='lazy'
                    />
                    <Box className='photo-credit' py={1} px={2}>
                      <Text fontSize={'sm'}>©{content.author}</Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Stack
                direction={'column'}
                alignItems={'flex-start'}
                spacing={6}
                px={4}
                py={4}
              >
                <Stack
                  w={'full'}
                  direction={{ base: 'column', md: 'row' }}
                  alignItems={{ base: 'flex-start' }}
                  justifyContent={'space-between'}
                >
                  <Wrap flex={1} align='center' py={2} spacing={4}>
                    <Heading fontSize={'2xl'}>{content.title}</Heading>
                    <Button
                      size='md'
                      mx={2}
                      px={8}
                      py={4}
                      colorScheme='green'
                      onClick={() => handleVoting()}
                      disabled={storeVoting.indexOf(content.id) !== -1}
                    >
                      {storeVoting.indexOf(content.id) !== -1
                        ? `感謝您的投票`
                        : `投票`}
                    </Button>
                  </Wrap>
                  <Wrap align='center' my={4} py={2} spacing={4}>
                    <IconButton
                      aria-label='Share 分享'
                      isRound
                      w={'28px'}
                      variant='outline'
                      icon={<AiOutlineShareAlt />}
                      onClick={() => {
                        NavigatorShare(
                          content.title,
                          content.description,
                          shareUrl
                        )
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

                <Stack direction='row' pt={4} spacing={2} color={'gray.700'}>
                  <Text as={'span'} fontSize={'sm'}>
                    作者：
                    {content.author}
                  </Text>
                  <Text as={'span'} fontSize={'sm'}>
                    於 {new Date(content.timestamp).toLocaleDateString()} 上載
                  </Text>
                </Stack>

                <Stack py={4}>
                  {content.description && (
                    <Box>
                      <Text as='p' lineHeight={'2'} fontSize='sm'>
                        {content.description}
                      </Text>
                    </Box>
                  )}
                  {content.story && (
                    <Box>
                      <Text as='p' lineHeight={'2'} fontSize='sm'>
                        {content.story}
                      </Text>
                    </Box>
                  )}
                </Stack>

                <Box>
                  <Text as='span' className='grid__tag'>
                    #{content.category}
                  </Text>
                </Box>

                <Divider my={4} />

                <Text fontSize='sm' color={'gray.700'} pb={6}>
                  大嶼山坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性，
                  綠色和平設立「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。
                </Text>
              </Stack>
            </Stack>
          </ModalContent>
        </Fade>
      )}
    </Modal>
  )
}

const mapStateToProps = ({ modal, photo, voting, storeVoting }) => ({
  modal,
  photo: photo.data,
  voting: voting.data,
  storeVoting: storeVoting.data,
})

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL })
    },
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL })
    },
    vote: (data) => {
      dispatch({ type: votingActions.ADD_VOTING, data })
    },
    storeUserVotes: (data) => {
      dispatch({ type: storeVotingActions.STORE_VOTING, data })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper)
