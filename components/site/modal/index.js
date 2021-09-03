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
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import * as modalActions from 'store/actions/action-types/modal-actions'

function ModalWrapper({modal, closeModal}) {
  return (
    <Modal blockScrollOnMount={false} isOpen={modal.isOpen} onClose={()=>closeModal()} closeOnOverlayClick={true} size={"6xl"}>
    <ModalOverlay />
      <ModalContent>
      <Box p={6}>
        <Box pb={6}>
          <Image src={'images/demo_1.jpeg'} alt={``}/>
        </Box>
        <Stack spacing={6} direction={'column'}>
          <Box>
            <Heading className="grid__title">Title</Heading>
            <Text as="span" className="grid__tag" fontSize={{base: 10, sm: 12}}>
              #生態環境
            </Text>
          </Box>
          {/* <Button onClick={()=>closeModal()} fontWeight={500}>關閉</Button> */}
          <Divider />
          <Box className="masonry">
          {/* {[...Array(8)].map((d, i) => (
            <Box className="grid" key={i} onClick={()=>openModal()} cursor={'pointer'} _hover={{opacity: .8}}>
              <Image
                src={`https://source.unsplash.com/random/${
                  Math.random() * 100
                }`}
                alt={``}
              />
              <Box className="grid__body">
                <Box className="relative">
                  <Heading className="grid__title">Title {i + 1}</Heading>
                  <Flex direction={'row'} align={'center'}>
                    <FaHeart/>
                    <Box pl={2}>
                      <Text className="grid__author">0</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box className="mt-auto">
                  <Text as="span" className="grid__tag" fontSize={{base: 10, sm: 12}}>
                    #生態環境
                  </Text>
                </Box>
              </Box>
            </Box>
          ))} */}
          </Box>
        </Stack>
      </Box>
      </ModalContent>
  </Modal>
  );
}

const mapStateToProps = ({ modal }) => ({ modal });

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
