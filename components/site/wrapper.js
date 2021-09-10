import Head from 'next/head'
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import {Box,
  useToast
} from "@chakra-ui/react";
import Nav from "components/site/navbar/nav";
import SubNav from 'components/site/navbar/subNav';
import Modal from 'components/site/modal'
import SignupModal from 'components/site/modal/signup'
import Footer from 'components/site/footer/SmallWithSocial'
import * as signupActions from 'store/actions/action-types/signup-actions'
import * as modalActions from 'store/actions/action-types/modal-actions'
import * as photoActions from 'store/actions/action-types/photo-actions'
import { useRouter } from 'next/router'


// Hook
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}


function Layout({ children, signup, openModal, setPhoto }) {
  const router = useRouter()
  const toast = useToast()
  const prevSignup = usePrevious(signup);
  const prevRoute = usePrevious(router);

  useEffect(() => {
    if(!signup || !prevSignup){
      return
    }

    if(signup.lastAction !== prevSignup.lastAction && signup.lastAction === signupActions.CREATE_USER_SUCCESS){
      toast({
        title: "成功註冊",
        description: "您現在可以上傳精彩的圖片 (Demo)",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top"
      })
    }
  }, [signup]);

  useEffect(() => {
    if(!router || !prevRoute){
      return
    }

    if(router.asPath !== prevRoute.asPath && router.asPath !== "/"){
      const {id} = router.query
      if(id){
        openModal(id)
      }
    }

  }, [router]);

  useEffect(() => {
    setPhoto()
  }, []);

  return (
    <Box>
      <Head>
        <title>Greenpeace 綠色和平 | 香港</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Box sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', zIndex: 99, bgColor: '#FFF' }}>
        <SubNav />
      </Box>
      {children}
      <Footer/>
      <Modal/>
      <SignupModal/>
    </Box>
  );
}

const mapStateToProps = ({signup}) => {
  return {signup};
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL });
    },
    openModal: (id) => {
      dispatch({ type: modalActions.OPEN_MODAL, id });
    },
    setPhoto: () => {
      dispatch({ type: photoActions.SET_PHOTO });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
