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
  Stack,
  Button,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import * as modalActions from 'store/actions/action-types/modal-actions'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload'

const PhotoItem = styled.div``

function Index({ openModal, photo }) {
  const router = useRouter()
  const { data } = photo
  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 400)
  }
  // if (data.length === 0) {
  //   return (
  //     <Container maxW={`container.2xl`}>
  //       <Box py={12} textAlign={`center`}>
  //         {/* 讀取中... */}
  //         <Stack
  //           direction='row'
  //           alignItems={'center'}
  //           justifyContent={'center'}
  //           spacing={4}
  //         >
  //           <Button isLoading variant='solid'></Button>
  //         </Stack>
  //         {/* <Box className='masonry'>
  //           <Skeleton />
  //           <Skeleton />
  //           <Skeleton />
  //         </Box> */}
  //       </Box>
  //     </Container>
  //   )
  // }
  return (
    <Container maxW={`container.2xl`}>
      <Box gridColumn={'-moz-initial'} py={8} px={4}>
        <Box className='masonry'>
          {data.map((d, i) => (
            <LazyLoad
              once={i.once}
              key={i}
              height='6rem'
              offset={[-200, 0]}
              placeholder={
                <PhotoItem className='grid'>
                  <Skeleton height='6rem' />
                </PhotoItem>
              }
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
                <Box className={`${pulsing ? 'pulse' : ''} loadable`}>
                  <motion.img
                    initial={{ height: '6rem', opacity: 0 }}
                    animate={{
                      height: imageLoading ? '6rem' : 'auto',
                      opacity: imageLoading ? 0 : 1,
                    }}
                    transition={
                      ({ height: { delay: 0, duration: 0.4 } },
                      { opacity: { delay: 0.5, duration: 0.4 } })
                    }
                    onLoad={imageLoaded}
                    width='100%'
                    src={d.url}
                    alt={d.title}
                    _hover={{ opacity: 0.8 }}
                    loading='lazy'
                  />
                  {/* <Image src={d.url} alt={d.title} _hover={{ opacity: 0.8 }} /> */}
                </Box>
              </PhotoItem>
            </LazyLoad>
          ))}
        </Box>
      </Box>
    </Container>
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
