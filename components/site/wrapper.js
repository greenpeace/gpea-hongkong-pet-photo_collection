import Head from 'next/head'
import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Box, useToast } from '@chakra-ui/react'
import _ from 'lodash'
import Nav from 'components/site/navbar/nav'
import SubNav from 'components/site/navbar/subNav'
import Modal from 'components/site/modal'
import SignupModal from 'components/site/modal/signup'
import Footer from 'components/site/footer/SmallWithSocial'
import * as signupActions from 'store/actions/action-types/signup-actions'
import * as modalActions from 'store/actions/action-types/modal-actions'
import * as photoActions from 'store/actions/action-types/photo-actions'
import * as votingActions from 'store/actions/action-types/voting-actions'
import { useRouter } from 'next/router'

// Hook
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function Layout({ children, signup, openModal, setPhoto, voting, photo }) {
  const router = useRouter()
  const toast = useToast()
  const prevSignup = usePrevious(signup)
  const prevVoting = usePrevious(voting)
  const prevRoute = usePrevious(router)

  useEffect(() => {
    if (!signup || !prevSignup) {
      return
    }

    if (
      signup.lastAction !== prevSignup.lastAction &&
      signup.lastAction === signupActions.CREATE_USER_SUCCESS
    ) {
      toast({
        title: '成功註冊',
        description: '現在可以開始上載您的大嶼相片。',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'top',
      })
    }
  }, [signup])

  useEffect(() => {
    if (!voting || !prevVoting) {
      return
    }

    if (
      voting.lastAction !== prevVoting.lastAction &&
      voting.lastAction === votingActions.ADD_VOTING_SUCCESS
    ) {
      toast({
        title: '感謝您的投票',
        description: '你亦可以繼續瀏覽其他作品',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'top',
      })
    }
  }, [voting])

  useEffect(() => {
    if (
      router.query &&
      !_.isEmpty(photo) &&
      prevRoute.asPath !== router.asPath
    ) {
      const { id } = router.query
      if (id) {
        openModal(id)
      }
    }
  }, [router, photo])

  useEffect(() => {
    setPhoto()
    const localUser =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
        : null
    if (_.isEmpty(localUser)) {
      const randomCharacters = [...Array(10)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join('')
      localStorage.setItem(
        'greenpeacePhotoCollection',
        JSON.stringify({ userId: randomCharacters, signed: false })
      )
    }
  }, [])

  return (
    <Box>
      <Box
        sx={{
          position: '-webkit-sticky',
          /* Safari */ position: 'sticky',
          top: '0',
          zIndex: 99,
          bgColor: '#FFF',
        }}
      >
        <Nav />
        <SubNav />
      </Box>
      {children}
      <Footer />
      <Modal />
      <SignupModal />
    </Box>
  )
}

const mapStateToProps = ({ signup, voting, photo }) => {
  return { signup, voting, photo: photo.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL })
    },
    openModal: (id) => {
      dispatch({ type: modalActions.OPEN_MODAL, id })
    },
    setPhoto: () => {
      dispatch({ type: photoActions.SET_PHOTO })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
