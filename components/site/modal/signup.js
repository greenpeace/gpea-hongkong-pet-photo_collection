import {
  Modal,
  Text,
  Heading,
  ModalOverlay,
  ModalContent,
  Box,
  Flex,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import SignupForm from 'components/form';
import * as signupActions from 'store/actions/action-types/signup-actions';

function SignupModal({ signup, setModal }) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={signup.signupModal}
      onClose={() => setModal(false)}
      closeOnOverlayClick={true}
      size={'6xl'}
    >
      <ModalOverlay />
      <ModalContent>
        <Box p={6}>
          <Flex
            direction={{ base: `column-reverse`, sm: `row` }}
            align={`center`}
          >
            <Box flex={1} px={2}>
              <Heading mb={2}>Most in demand on _</Heading>
              <Text as="p" mb={2}>
                The following trends have had the highest increase in search
                frequency over the last 30 days on _.
              </Text>
              <Text fontSize={'sm'}>
                星號(*)表示此為必需填寫欄目。請仔細輸入你的資料；一經提交即視為最終確認。
                如對比賽詳情有任何疑問或查詢，請電郵至
                lantauphoto2021@greenpeace.org
              </Text>
            </Box>
            <Box flex={1} px={2}>
              <SignupForm />
            </Box>
          </Flex>
          {/* <Flex justifyContent={`space-between`}>
          <Box>Visit greenpeace for more insights.</Box>
          <Box>
            <Button>Start uploading</Button>
          </Box>
        </Flex> */}
        </Box>
      </ModalContent>
    </Modal>
  );
}

const mapStateToProps = ({ signup }) => ({ signup });

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
