import React from 'react'
import { Box, Stack, Center, Flex } from '@chakra-ui/react'

const TopBanner = ({
  src = 'https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/06/efc1d3c2-dji_0409.jpg',
  children,
}) => {
  return (
    <Stack
      pos={'relative'}
      bgImage={src}
      bgSize={'cover'}
      bgPosition={'center'}
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
          opacity={0.5}
        />
      </Center>
    </Stack>
  )
}

export default TopBanner
