import {
  Modal,
  Text,
  Heading,
  ModalOverlay,
  ModalContent,
  Box,
  Flex,
  Fade,
  Stack,
  Center,
  CloseButton,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import SignupForm from 'components/form'
import * as signupActions from 'store/actions/action-types/signup-actions'

function SignupModal({ signup, setModal }) {
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={signup.signupModal}
      onClose={() => setModal(false)}
      closeOnOverlayClick={true}
      size={'6xl'}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent mt={`60px`}> {/** nav height */}
        <Flex flexDirection={`row-reverse`} mt={-10} color={`#FFF`}>
          <Box>
            <CloseButton size='lg' onClick={() => setModal(false)} />
          </Box>
        </Flex>
        <Fade in={signup.signupModal}>
          <Box>
            <Flex direction={{ base: `column`, sm: `row` }}>
              <Box flex={1}
                backgroundImage={
                  'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                >
                <Center h={`100%`} bgColor={`rgba(0,0,0,.3)`}>
                  <Flex direction={`column`}
                    px={4}
                    py={6}
                    color={`#FFF`}>
                  <Heading mt={4} mb={2} fontSize={'2xl'}>
                    綠色和平「山海大嶼」2021攝影比賽
                  </Heading>
                  <Text as='p' mb={2}>
                    The following trends have had the highest increase in search
                    frequency over the last 30 days on _.
                  </Text>
                  <Text fontSize={'sm'}>
                    星號(*)表示此為必需填寫欄目。請仔細輸入你的資料；一經提交即視為最終確認。
                    如對比賽詳情有任何疑問或查詢，請電郵至
                    lantauphoto2021@greenpeace.org
                  </Text>
                  </Flex>
                </Center>
              </Box>
              <Box flex={1} p={6}>
                {/* <Stack mb={6}>
                  <Heading mt={4} mb={2} fontSize={'xl'}>
                    參加綠色和平「山海大嶼」2021攝影比賽
                  </Heading>
                  <Text fontSize={'sm'}>
                    與世界各地的大自然愛好者一同以影像訴說山海故事。由即日起至2021年10月31日期間，你可在此上傳參賽照片。
                  </Text>
                </Stack> */}
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
        </Fade>
      </ModalContent>
    </Modal>
  )
}

const mapStateToProps = ({ signup }) => ({ signup })

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal)
