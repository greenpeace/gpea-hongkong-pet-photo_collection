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
      <ModalContent rounded={'xl'} overflow={'hidden'}>
        <Fade in={signup.signupModal}>
          <Flex direction={{ base: `column`, sm: `row` }}>
            <Flex
              pos={'relative'}
              direction={'column'}
              flex={1}
              backgroundImage={
                'url(https://res.cloudinary.com/gpea/image/upload/v1631613473/photo-collection/DJI_0431_huriof.jpg)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}
            >
              <Flex flexDirection={`row`}>
                <Box
                  m={2}
                  rounded={'full'}
                  backgroundColor={'white'}
                  color={'black'}
                >
                  <CloseButton size='lg' onClick={() => setModal(false)} />
                </Box>
              </Flex>
              <Flex
                h={`100%`}
                alignItems={'flex-end'}
                px={4}
                py={12}
                color={`#FFF`}
              >
                <Stack spacing={'4'}>
                  <Heading fontSize={'4xl'} fontWeight={'700'}>
                    綠色和平
                    <br />
                    山海大嶼攝影比賽
                  </Heading>
                  <Text as='p' fontSize={'sm'}>
                    參加綠色和平「山海大嶼」2021攝影比賽，與世界各地的大自然愛好者一同以影像訴說山海故事。由即日起至2021年10月31日期間，你可在此上傳參賽照片。
                  </Text>
                  <Text as='p' fontSize={'sm'}>
                    星號(*)表示此為必需填寫欄目。請仔細輸入你的資料；一經提交即視為最終確認。
                    如對比賽詳情有任何疑問或查詢，請電郵至
                    lantauphoto2021@greenpeace.org
                  </Text>
                </Stack>
              </Flex>
              <Box
                bgColor={'#000'}
                pos={'absolute'}
                zIndex={-1}
                top={0}
                bottom={0}
                w={'100%'}
                opacity={0.75}
              />
            </Flex>
            <Box flex={1} p={6}>
              <SignupForm />
            </Box>
          </Flex>
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
