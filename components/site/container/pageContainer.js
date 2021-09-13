import React from 'react'
import { Container } from '@chakra-ui/react'

const PageContainer = ({ children }) => {
  return (
    <Container
      flex={1}
      maxW={'1400px'}
      py={{ base: 6, md: 8 }}
      px={{ base: 4, lg: 6 }}
    >
      {children}
    </Container>
  )
}

export default PageContainer
