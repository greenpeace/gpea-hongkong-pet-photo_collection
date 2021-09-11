import React from 'react'
import { Container } from '@chakra-ui/react'

const ContentContainer = ({ children }) => {
  return (
    <Container maxW={'1600px'} py={{ base: 6, md: 8 }} px={{ base: 4, lg: 6 }}>
      {children}
    </Container>
  )
}

export default ContentContainer
