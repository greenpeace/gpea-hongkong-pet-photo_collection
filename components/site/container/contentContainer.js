import React from 'react'
import { Container } from '@chakra-ui/react'

const ContentContainer = ({ children }) => {
  return <Container maxW={'800px'}>{children}</Container>
}

export default ContentContainer
