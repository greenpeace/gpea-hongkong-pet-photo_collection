import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Image,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as signupActions from 'store/actions/action-types/signup-actions'
import { useRouter } from 'next/router'

function WithSubnavigation({ user, setModal }) {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            src={'https://www.greenpeace.org/global/static/img/gp-logo.svg'}
            maxW={'120px'}
            alt={'Greenpeace 綠色和平'}
            onClick={() => {
              router.push(`/`)
            }}
            cursor={'pointer'}
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            display={'inline-flex'}
            fontSize={'md'}
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
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav isOpen={isOpen} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const NAV_ITEMS = process.env.NAV || []
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={6}>
      {NAV_ITEMS.map((d) => (
        <Box key={d.LABEL}>
          <Link href={d.HREF} passHref>
            <Box
              fontSize={'sm'}
              fontWeight={500}
              _hover={{
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {d.LABEL}
            </Box>
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  const NAV_ITEMS = process.env.NAV || []
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((d) => (
        <Stack key={d.LABEL} spacing={4}>
          <Flex
            py={2}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Link href={d.HREF} passHref>
              <Box
                fontSize={'sm'}
                fontWeight={500}
                _hover={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Text>{d.LABEL}</Text>
              </Box>
            </Link>
          </Flex>
        </Stack>
      ))}
    </Stack>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithSubnavigation)
