import React from 'react'
import { Box, Stack, Center, Flex } from '@chakra-ui/react'

const TopBanner = ({ children }) => {
  return (
    <Stack
      pos={'relative'}
      bgImage={'images/demo_1.jpeg'}
      bgSize={'cover'}
      minH={{ base: '240px', lg: '360px' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Center h={'100%'} maxW={`container.md`} margin={`0 auto`} zIndex={1}>
        <Stack
          py={14}
          px={4}
          spacing={6}
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          color={'white'}
          letterSpacing={'2px'}
        >
          {children}
        </Stack>
        <Box
          bgColor={'#000'}
          pos={'absolute'}
          zIndex={-1}
          top={0}
          bottom={0}
          w={'100%'}
          opacity={0.6}
        />
      </Center>
    </Stack>
  )
}

export default TopBanner