import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'blackAlpha.100'}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithSocial() {
  return (
    <Box bg={'gray.800'} color={'gray.100'}>
      <Container
        as={Stack}
        maxW={'100%'}
        px={4}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© GREENPEACE {new Date().getFullYear()}</Text>
        <Stack direction={'row'} spacing={8}>
          <SocialButton
            label={'Facebook'}
            href={'https://www.facebook.com/greenpeacehk/'}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={'YouTube'}
            href={'https://www.instagram.com/greenpeace_hk'}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://www.youtube.com/user/GreenpeaceChina'}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/greenpeace_hk'}
          >
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
