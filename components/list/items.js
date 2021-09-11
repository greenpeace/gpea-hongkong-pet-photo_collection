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
import Masonry from 'react-masonry-component'
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload'

import ContentContainer from '@/components/site/container/contentContainer'

// Masory Options
const masonryOptions = {
  transitionDuration: 0,
  gutter: 20,
}

const PhotoItem = styled.div``

const Placeholder = () => {
  return (
    <PhotoItem className='grid'>
      <Skeleton height='6rem' />
    </PhotoItem>
  )
}

function Index({ openModal, photo }) {
  const router = useRouter()
  const { data } = photo
  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 400)
  }
  if (data.length === 0) {
    return (
      <ContentContainer>
        {/* 讀取中... */}
        {/* <Stack
            direction='row'
            alignItems={'center'}
            justifyContent={'center'}
            spacing={4}
          >
            <Button isLoading variant='solid'></Button>
          </Stack> */}
        <Box gridColumn={'-moz-initial'} className='masonry'>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Box>
      </ContentContainer>
    )
  }
  return (
    <ContentContainer>
      <Box gridColumn={'-moz-initial'} className='masonry'>
        {/* <Masonry
        className='masonryGrid'
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      > */}
        {data.map((d, i) => (
          <LazyLoad
            once={i.once}
            offset={100}
            key={i}
            // placeholder={<Placeholder />}
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
                  <Flex>
                    <Heading className='grid__title' flex={'1'}>
                      {d.title}
                    </Heading>
                    <Vote imageId={d.id} alignSelf={'flex-end'} />
                  </Flex>
                  <Flex direction={'row'} align={'center'}>
                    <Box>
                      <Text className='grid__author'>{d.votes}</Text>
                    </Box>
                  </Flex>
                </Box>
                {d.category && (
                  <Box className='mt-auto'>
                    <Text as='span' className='grid__tag' fontSize={'sm'}>
                      #{d.category}
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
        {/* </Masonry> */}
      </Box>
    </ContentContainer>
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
