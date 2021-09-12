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
  Center,
  CloseButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import * as modalActions from 'store/actions/action-types/modal-actions'
import * as votingActions from 'store/actions/action-types/voting-actions'

import { IconButton } from '@chakra-ui/react'
import { AiOutlineShareAlt, AiOutlineCloudUpload } from 'react-icons/ai'

function ModalWrapper({ modal, closeModal, photo, vote }) {
  const [content, setContent] = useState(modal.content)
  const router = useRouter()

  const localUser =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
      : null

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
          userId: localUser.name || '',
        },
      ]

      vote(gSheetFormData)
    }
  }

  const checkVoteAble = () => {
    if (localUser) {
      console.log(`localUser.userId --`, localUser.userId)
      console.log(`content.id--`, content.id)
      return localUser.userId !== content.id
    } else {
      return false
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
                  <Img
                    src={content.url}
                    alt={content.title}
                    maxH={`75vh`}
                    loading='lazy'
                  />
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
                  direction={{ base: 'row' }}
                  alignItems={'center'}
                  spacing={6}
                >
                  <Heading className='grid__title' fontSize={'2xl'}>
                    {content.title}
                  </Heading>
                  <Button
                    size='sm'
                    mx={2}
                    onClick={() => handleVoting()}
                    disabled={checkVoteAble()}
                  >
                    {checkVoteAble() ? `請先註冊` : `投票`}
                  </Button>
                  <IconButton
                    alignSelf={'flex-end'}
                    aria-label='Share 分享'
                    isRound
                    icon={<AiOutlineShareAlt />}
                  />
                </Stack>

                <Text as='p' fontSzie='sm'>
                  {content.description}
                </Text>
                <Text as='span' className='grid__tag'>
                  #{content.category}
                </Text>

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

const mapStateToProps = ({ modal, photo, voting }) => ({
  modal,
  photo: photo.data,
  voting: voting.data,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper)
