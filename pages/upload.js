import React, { useEffect } from 'react'
import Wrapper from 'components/site/wrapper'
import UploadForm from 'components/form/upload'
import { Box, Stack, Center, Heading, Text, Container } from '@chakra-ui/react'

import ContentContainer from '@/components/site/container/contentContainer'

export default function Index() {
  useEffect(() => {
    // Check logged In
  }, [])
  return (
    <Box>
      <Box
        pos={'relative'}
        bgImage={'images/demo_1.jpeg'}
        bgSize={'cover'}
        h={{ base: '240px', sm: '320px' }}
      >
        <Center
          h={'100%'}
          maxW={`container.md`}
          margin={`0 auto`}
          zIndex={3}
          pos={'relative'}
        >
          <Stack direction={'column'} textAlign={'center'} color={'#FFF'}>
            <Heading fontSize={{ base: '4xl', sm: '6xl' }}>
              上傳圖片頁面
            </Heading>
          </Stack>
        </Center>
        <Box
          bgColor={'#000'}
          pos={'absolute'}
          zIndex={2}
          top={0}
          bottom={0}
          w={'100%'}
          opacity={0.6}
        />
      </Box>
      <ContentContainer>
        <UploadForm />
      </ContentContainer>
    </Box>
  )
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>
