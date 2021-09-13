import {
  Box,
  Flex,
  Text,
  Center,
  HStack,
  Link,
  Divider,
  useColorModeValue,
  Input,
} from '@chakra-ui/react'

const CATEGORY = process.env.CATEGORY || []

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    fontSize={14}
    color={'gray.700'}
    href={'#'}
  >
    {children}
  </Link>
)

export default function WithAction() {
  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <HStack flex={1} spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'flex', md: 'flex' }}
            >
              {CATEGORY.map((d) => (
                <NavLink key={d.LABEL} href={d.HREF}>
                  {d.LABEL}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Box flex={1} px={4}>
            <Input
              h={8}
              backgroundColor={'white'}
              borderRadius={8}
              placeholder='搜尋字眼'
            />
          </Box>
          <Flex alignItems={'center'}>
            <Text color={'gray.900'} fontSize={14}>
              搜尋全部
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
