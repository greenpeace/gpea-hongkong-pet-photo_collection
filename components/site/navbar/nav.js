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
  useDisclosure
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons'
import Script from 'next/script'
import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import _ from "lodash"
import * as signupActions from 'store/actions/action-types/signup-actions'
import { useRouter } from 'next/router'

function WithSubnavigation({user, setModal}) {
  const openWidget = () => {
    // window.cloudinary.createUploadWidget(
    //   {
    //     cloudName: 'idt',
    //     uploadPreset: 'quocv8wr',
    //     sources: [ 'local', 'url'],
    //     showAdvancedOptions: true,
    //     cropping: false,
    //     multiple: true,
    //     defaultSource: "local",
    //     styles: {
    //       palette: {
    //           window: "#F5F5F5",
    //           sourceBg: "#FFFFFF",
    //           windowBorder: "#90a0b3",
    //           tabIcon: "#0094c7",
    //           inactiveTabIcon: "#69778A",
    //           menuIcons: "#0094C7",
    //           link: "#53ad9d",
    //           action: "#8F5DA5",
    //           inProgress: "#0194c7",
    //           complete: "#53ad9d",
    //           error: "#c43737",
    //           textDark: "#000000",
    //           textLight: "#FFFFFF"
    //       },
    //       fonts: {
    //           default: null,
    //           "'Poppins', sans-serif": {
    //               url: "https://fonts.googleapis.com/css?family=Poppins",
    //               active: true
    //           }
    //       }
    //   },
    //   },
    //   (error, { event, info }) => {
    //     if (event === 'success') {
    //       console.log(`info---`, info)
    //       // this.setState({
    //       //   imageUrl: info.secure_url,
    //       //   imageAlt: `An image of ${info.original_filename}`
    //       // })
    //     }
    //   },
    // ).open();
  }

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
            alt={``}
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav/>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#66cc00'}
            href={'#'}
            _hover={{
              bg: 'green.300',
            }}
            onClick={()=> _.isEmpty(user) ? setModal(true)  : router.push('/upload')}
            >
            上傳圖片
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          isOpen={isOpen}
          onToggle={onToggle}
        />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const NAV_ITEMS = process.env.NAV || [];
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((d) => (
        <Box key={d.LABEL}>
          <Box
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              cursor: 'pointer',
            }}
          >
            {d.LABEL}
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = ({
  isOpen,
  onToggle,
}) => {
  const NAV_ITEMS = process.env.NAV || [];
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((d) => (
        <Stack
          key={d.LABEL}
          spacing={4}
        >
          <Flex
            py={2}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Text fontWeight={600}>{d.LABEL}</Text>
          </Flex>
        </Stack>
      ))}
    </Stack>
  )
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithSubnavigation);