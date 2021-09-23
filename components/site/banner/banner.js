import React from 'react'
import { Box, Stack, Center } from '@chakra-ui/react'

const TopBanner = ({
  src = 'https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/02/e2bf64c3-dji_0431-scaled.jpg',
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
