import React from 'react'
import { Box, Stack, Center, Image } from '@chakra-ui/react'

const TopBanner = ({ children }) => {
  return (
    <Stack
      pos={'relative'}
      bgSize={'cover'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Center h={'100%'} maxW={`container.md`}>
        <Stack
          py={12}
          px={4}
          spacing={6}
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          color={'white'}
          letterSpacing={'1px'}
        >
          {children}
        </Stack>
        <Image
          pos={'absolute'}
          zIndex={-1}
          top={0}
          bottom={0}
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
          src={
            'https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/06/efc1d3c2-dji_0409.jpg'
          }
          alt={'Banner'}
        />
        <Box
          bgColor={'#000'}
          pos={'absolute'}
          zIndex={-1}
          top={0}
          bottom={0}
          w={'100%'}
          opacity={0.45}
        />
      </Center>
    </Stack>
  )
}

export default TopBanner
