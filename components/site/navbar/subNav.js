import {
  Box,
  Flex,
  Text,
  Center,
  HStack,
  Link,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

const Links = ['生態環境', '環保活動', '人物特寫'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    fontSize={14}
    color={'gray.500'}
    href={'#'}>
    {children}
  </Link>
);

export default function withAction() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Center height="20px">
                <Divider orientation="vertical" />
              </Center>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Text color={'gray.500'} fontSize={14}>搜尋全部</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}