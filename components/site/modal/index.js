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
  Divider,
  Center,
  CloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import * as modalActions from "store/actions/action-types/modal-actions";

function ModalWrapper({ modal, closeModal, photos }) {
  const [content, setContent] = useState(modal.content);
  const router = useRouter();

  useEffect(async () => {
    if (!photos) {
      return;
    }

    const { id } = modal;
    const getPhoto = await photos.find((d) => d.id === id);
    setContent(getPhoto);
  }, [modal.id]);

  const handleCloseModal = () => {
    closeModal();
    router.push(`/`, undefined, { shallow: true });
  };

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
      <ModalContent>
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
                <Heading className="grid__title" fontSize={{base: 16, sm: 24}}>{content.title}</Heading>
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
      </ModalContent>
    </Modal>
  );
}

const mapStateToProps = ({ modal, photo }) => ({
  modal,
  photos: photo.data.records,
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
