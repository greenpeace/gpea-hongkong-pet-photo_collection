import React from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const SingleImageRounded = (src, alt) => {
  return (
    <Box rounded='md' shadow={'md'}>
      <Image src={src} alt={alt} loading='lazy' />
    </Box>
  )
}

export default SingleImageRounded
