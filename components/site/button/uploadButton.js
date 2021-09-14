import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import * as signupActions from 'store/actions/action-types/signup-actions'
import _ from 'lodash'

const UploadButton = ({ setModal, user }) => {
  const router = useRouter()
  const {signed} = user
  return (
    <Button
      display={'inline-flex'}
      px={'14'}
      py={'6'}
      fontSize={'md'}
      rounded={'lg'}
      fontWeight={'bold'}
      color={'white'}
      bg={'brand.500'}
      href={'#'}
      _hover={{
        bg: 'brand.700',
      }}
      onClick={() =>
        signed ?  router.push('/upload') : setModal(true)
      }
    >
      {signed ? '上傳圖片' : '立即登記'}
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
