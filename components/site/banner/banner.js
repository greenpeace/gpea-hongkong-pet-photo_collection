import React from 'react';
import { Box, Stack, Center } from '@chakra-ui/react';

import mainVS from "../../../assets/images/GP__SocialPost800x800.jpg"

const TopBanner = ({
  src = mainVS,
  mobile = mainVS,
  children,
  opacity = 0.5
}) => {
  return (
    <Stack
      pos={'relative'}
      bgImage={{base: mobile, lg: src}}
      bgSize={'cover'}
      bgPosition={'center center'}
      minH={{ base: '240px', lg: '360px' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Center h={'100%'} maxW={'container.md'} margin={'0 auto'} zIndex={1}>
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
          opacity={opacity}
        />
      </Center>
    </Stack>
  );
};

export default TopBanner;
