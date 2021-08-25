import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box bg={'gray.800'} color={'gray.100'}>
      <Container as={Stack} maxW={'6xl'} py={8}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '1fr auto auto' }}
          spacing={8}
        >
          <Stack spacing={4}>
            <Box>
              <Image
                htmlWidth='200px'
                src='https://www.greenpeace.org/hongkong/wp-content/themes/planet4-child-theme-hongkong/static/images/logo_zh_gp_w%20footer.svg'
                alt='logo'
              />
            </Box>
            <Text fontSize={'sm'} maxWidth={'480px'}>
              綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。
              我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。
            </Text>
          </Stack>
          <Stack align={'flex-start'} spacing={2}>
            <ListHeader>關於綠色和平</ListHeader>
            <Link href={'http://www.greenpeace.org/hongkong/'}>首頁</Link>
            <Link
              href={
                'https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/'
              }
            >
              私隱政策與個人資料收集聲明
            </Link>
            <Link
              href={
                'https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK'
              }
            >
              捐助支持
            </Link>
          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader>追蹤我們</ListHeader>
            <Stack direction='row'>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
            </Stack>
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
