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
      blockScrollOnMount={false}
      isOpen={modal.isOpen}
      onClose={() => handleCloseModal()}
      closeOnOverlayClick={true}
      size={'4xl'}
      trapFocus={false}
    >
      <ModalOverlay />
      {content && (
        <ModalContent>
          <Flex flexDirection={`row-reverse`}>
            <Box p={2}>
              <CloseButton size='lg' onClick={() => handleCloseModal()} />
            </Box>
          </Flex>
          <Stack maxW={'1200px'} spacing={4}>
            <Center>
              <Img src={content.url} alt={content.title} maxH={`75vh`} />
            </Center>
            <Stack direction={'column'} spacing={6} p={4}>
              <Flex direction={{ base: 'row' }} align={`center`}>
                <Heading className='grid__title' fontSize={'xl'}>
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
              </Flex>

              <Divider my={4} />

              <Text as='p'>{content.description}</Text>
              <Text as='span' className='grid__tag'>
                #{content.category}
              </Text>
            </Stack>
          </Stack>
        </ModalContent>
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
