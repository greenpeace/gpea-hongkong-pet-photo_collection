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
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  MailruShareButton,
  PinterestShareButton,
  TelegramShareButton,
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
    console.log(shareUrl)
  })

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
    router.push(`/`, undefined, { shallow: true })
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
            <Stack maxW={'1200px'} spacing={4}>
              <Box>
                <Flex flexDirection={`row-reverse`}>
                  <Box p={2}>
                    <CloseButton size='lg' onClick={() => handleCloseModal()} />
                  </Box>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'center'}>
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
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  justifyContent={'space-between'}
                  spacing={8}
                >
                  <Heading className='grid__title' fontSize={'2xl'}>
                    {content.title}
                    <Text
                      as={'span'}
                      ml={4}
                      px={2}
                      fontSize={'sm'}
                      color={'gray.700'}
                    >
                      {content.author}
                    </Text>
                    <Text as={'span'} px={2} fontSize={'sm'} color={'gray.700'}>
                      {new Date(content.timestamp).toLocaleDateString()}
                    </Text>
                  </Heading>
                  <Wrap align='center' my={2} py={2} spacing={4}>
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

                <Box py={4}>
                  <Text as='p' lineHeight={'2'} fontSize='sm'>
                    {content.description}
                  </Text>
                </Box>

                <Box>
                  <Text as='span' className='grid__tag'>
                    #{content.category}
                  </Text>
                </Box>

                <Divider my={4} />

                <Text fontSize='sm' color={'gray.700'} pb={6}>
                  「山海大嶼」相簿，號召熱愛大嶼、熱愛香港的你，一起以影像訴說山海的故事，保留大嶼今昔。獲選佳作更有機會展出及刊登於綠色和平2022年〈山海大嶼〉年曆中，參加者亦可優先獲得參加大嶼Photo
                  walk（詳情容後公佈）的機會。
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
