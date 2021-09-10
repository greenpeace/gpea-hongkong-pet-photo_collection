import { FaHeart } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Vote from 'components/list/vote'
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Container,
  Skeleton,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import * as modalActions from 'store/actions/action-types/modal-actions'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const PhotoItem = styled.div``

function Index({ openModal, photo }) {
  const router = useRouter()
  const { data } = photo
  if (data.length === 0) {
    return (
      <Container maxW={`container.xl`}>
        <Box py={12} textAlign={`center`}>
          {/* 讀取中... */}
          <Box className='masonry'>
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
          </Box>
        </Box>
      </Container>
    )
  }
  return (
    <Box gridColumn={'-moz-initial'} p={4}>
      <Box className='masonry'>
        {data.map((d, i) => (
          <LazyLoad
            height={80}
            once={i.once}
            key={i}
            placeholder={<Skeleton height='80px' />}
            debounce={500}
          >
            <PhotoItem
              className='grid'
              onClick={() =>
                router.push(`/?id=${d.id}`, undefined, { shallow: true })
              }
              cursor={'pointer'}
            >
              <Box className='grid__body'>
                <Box className='relative'>
                  <Heading className='grid__title'>{d.title}</Heading>
                  <Flex direction={'row'} align={'center'}>
                    <Vote imageId={d.id} />
                    <Box>
                      <Text className='grid__author'>{d.votes}</Text>
                    </Box>
                  </Flex>
                </Box>
                {d.category && (
                  <Box className='mt-auto'>
                    <Text
                      as='span'
                      className='grid__tag'
                      fontSize={{ base: 10, sm: 12 }}
                    >
                      # {d.category}
                    </Text>
                  </Box>
                )}
              </Box>
              <Image src={d.url} alt={d.title} _hover={{ opacity: 0.8 }} />
            </PhotoItem>
          </LazyLoad>
        ))}
      </Box>
    </Box>
  )
}

const mapStateToProps = ({ photo }) => {
  return { photo }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
