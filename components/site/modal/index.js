import {
  Modal,
  Text,
  Heading,
  ModalOverlay,
  ModalContent,
  Button,
  Stack,
  Box,
  Image,
  Flex,
  Divider
} from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import React, {useEffect, useState} from "react";
import * as modalActions from 'store/actions/action-types/modal-actions'

function ModalWrapper({modal, closeModal, photos}) {
  const [content, setContent] = useState({});
  const router = useRouter()

  useEffect( async () => {

    if(!photos){
      return
    }

    const {id} = router.query
    const getPhoto = await photos.find(d=>d.id===id)
    setContent(getPhoto)

  }, [router]);

  return (
    <Modal blockScrollOnMount={false} isOpen={modal.isOpen} onClose={()=>{
      closeModal()
      // router.push('/')
    }} closeOnOverlayClick={true} size={"6xl"}>
    <ModalOverlay />
      <ModalContent>
      <Box p={6}>
        <Box pb={6}>
          <Image src={content.url} alt={``} w={300} h={300}/>
        </Box>
        <Stack spacing={6} direction={'column'}>
          <Box>
            <Heading className="grid__title">{content.title}</Heading>
            <Text as="span" className="grid__tag" fontSize={{base: 10, sm: 12}}>
              #{content.category} {content.url}
            </Text>
          </Box>
          {/* <Button onClick={()=>closeModal()} fontWeight={500}>關閉</Button> */}
          <Divider />
        </Stack>
      </Box>
      </ModalContent>
  </Modal>
  );
}

const mapStateToProps = ({ modal, photo }) => ({ modal, photos: photo.data.records });

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL });
    },
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
