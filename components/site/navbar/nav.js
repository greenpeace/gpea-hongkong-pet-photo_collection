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

function WithSubnavigation({user}) {
  // TODO:
  // <Script src="https://upload-widget.cloudinary.com/global/all.js"/>
  console.log(`user`, user)
  const openWidget = () => {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'idt',
        uploadPreset: 'quocv8wr',
      },
      (error, { event, info }) => {
        if (event === 'success') {
          console.log('event-',event)
          // this.setState({
          //   imageUrl: info.secure_url,
          //   imageAlt: `An image of ${info.original_filename}`
          // })
        }
      },
    ).open();
  }

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
            onClick={()=>_.isEmpty(user) ? alert('wow')  : openWidget()}
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
  const NAV_ITEMS = [
    {
      label: '公眾諮詢',
      href: '#'
    },
    {
      label: '了解更多',
      href: '#'
    },
    {
      label: '捐助支持',
      href: '#'
    },
  ]
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            onClick={() =>
              navItem.ref.current.scrollIntoView({ behavior: 'smooth' })
            }
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              cursor: 'pointer',
            }}
          >
            {navItem.label}
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
  const NAV_ITEMS = [
    {
      label: '公眾諮詢',
      href: '#'
    },
    {
      label: '了解更多',
      href: '#'
    },
    {
      label: '捐助支持',
      href: '#'
    },
  ]
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Stack
          key={navItem.label}
          spacing={4}
          onClick={() => {
            onToggle()
            navItem.ref.current.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Flex
            py={2}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Text fontWeight={600}>{navItem.label}</Text>
          </Flex>
        </Stack>
      ))}
    </Stack>
  )
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
});

export default connect(mapStateToProps)(WithSubnavigation);