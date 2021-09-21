import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const SingleImageRounded = (src, alt) => {
  return (
    <Box rounded='md' shadow={'md'}>
      <Image src={src} alt={alt} loading='lazy' />
    </Box>
  )
}

export default SingleImageRounded
