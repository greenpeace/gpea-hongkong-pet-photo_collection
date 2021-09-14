import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import * as signupActions from 'store/actions/action-types/signup-actions'
import _ from 'lodash'

const UploadButton = ({ setModal, user }) => {
  const router = useRouter()
  return (
    <Button
      display={'inline-flex'}
      px={'14'}
      py={'6'}
      fontSize={'md'}
      rounded={'lg'}
      fontWeight={'bold'}
      color={'white'}
      bg={'#66cc00'}
      href={'#'}
      _hover={{
        bg: 'green.300',
      }}
      onClick={() =>
        _.isEmpty(user) ? setModal(true) : router.push('/upload')
      }
    >
      {_.isEmpty(user) ? '立即登記' : '上傳圖片'}
    </Button>
  )
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadButton)
