import {
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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import * as modalActions from "store/actions/action-types/modal-actions";
import axios from "axios";

function ModalWrapper({ modal, closeModal, photo }) {
  const [content, setContent] = useState(modal.content);
  const router = useRouter();

  useEffect(async () => {
    if (!photo) {
      return;
    }

    const { id } = modal;
    const getPhoto = await photo.find((d) => d.id === id);
    setContent(getPhoto);
  }, [modal.id]);

  const handleCloseModal = () => {
    closeModal();
    router.push(`/`, undefined, { shallow: true });
  };

  const handleVoting = () => {
    const localUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
        : null;

    const gSheetFormData =[{
      timestamp: content.timestamp,
      id: content.id,
      votes: '1',
      userId: localUser.name || ''
    }]

    axios
      .post(`${process.env.G_SHEET}/photo-collection-voting`, gSheetFormData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (res) {
        const { statusText } = res;
        console.log(`statusText---`, statusText);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={modal.isOpen}
      onClose={() => handleCloseModal()}
      closeOnOverlayClick={true}
      size={"6xl"}
      trapFocus={false}
    >
      <ModalOverlay />
      {content && <ModalContent>
        <Flex flexDirection={`row-reverse`}>
          <Box p={2}>
            <CloseButton size="lg" onClick={() => handleCloseModal()} />
          </Box>
        </Flex>
        <Box p={8}>
            <Center pb={4}>
              {/** https://github.com/chakra-ui/chakra-ui/issues/2815 */}
              <Img src={content.url} alt={content.title} maxH={`100vh`}/>
            </Center>
            <Stack
              direction={"column"}
              borderBottom={`1px solid`}
              borderBottomColor={`gray.200`}
              pb={2}
              mb={2}
            >
              <Box>
                <Flex direction={{base: 'row'}} align={`center`}>
                  <Heading className="grid__title" fontSize={{base: 16, sm: 24}}>{content.title}</Heading>
                  <Button colorScheme="blue" size="sm" ml={2} onClick={()=>handleVoting()}>投票</Button>
                </Flex>
                <Text
                  as="span"
                  className="grid__tag"
                  fontSize={{ base: 10, sm: 12 }}
                >
                  #{content.category}
                </Text>
              </Box>
            </Stack>
            <Box pb={2}>
              <Text as="p">{content.description}</Text>
            </Box>
        </Box>
      </ModalContent>}
    </Modal>
  );
}

const mapStateToProps = ({ modal, photo }) => ({
  modal,
  photo: photo.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL });
    },
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
