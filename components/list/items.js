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
import Masonry from 'react-masonry-component'
import ContentContainer from '@/components/site/container/contentContainer'

// Masory Options
const masonryOptions = {
  fitWidth: false,
  gutter: 20,
  itemSelector: '.photo-item',
}

const PhotoItem = styled.div`
  width: 100%;
  max-width: calc(25% - 20px);
  margin-bottom: 20px;
`

const Placeholder = () => {
  return (
    <PhotoItem className='grid'>
      <Skeleton height='6rem' />
    </PhotoItem>
  )
}

function Index({ openModal, photo, voting }) {
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
          <Placeholder />
        </Box>
      </ContentContainer>
    )
  }
  return (
    <ContentContainer>
      <Masonry
        className={'photo-list'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {data.map((d, i) => {
          {/* const votes = voting.find(d=>d.name === d.id)
          console.log(`votes--`,votes) */}
          {/* console.log(`d.id--`, d.id) */}
          return (
          <LazyLoad
            once={i.once}
            offset={100}
            key={i}
            // placeholder={<Placeholder />}
            debounce={500}
          >
            <PhotoItem
              className={`photo-item`}
              onClick={() =>
                router.push(`/?id=${d.id}`, undefined, { shallow: true })
              }
              cursor={'pointer'}
            >
              <Box pos={`absolute`} top={6} left={6} right={6}>
                <Box>
                  <Flex
                    align={`center`}
                    color={`#FFF`}
                    justifyContent={`space-around`}
                  >
                    <Box flex={1}>
                      <Heading flex={'1'} fontSize={{ base: 12, sm: 16 }}>
                        {d.title}
                      </Heading>
                    </Box>
                    <Vote imageId={d.id} alignSelf={'flex-end'} />
                  </Flex>
                  <Flex direction={'row'} align={'center'}>
                    <Box>
                      <Text>{d.votes}</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>


              {d.category && (
                <Box pos={`absolute`} bottom={6} left={6}>
                  <Box bgColor={`rgba(255, 255, 255, 0.8)`} px={2} pb={1} borderRadius={8}>
                    <Text as='span' fontSize={'xs'}>
                      #{d.category}
                    </Text>
                  </Box>
                </Box>
                )}


              <Box className={`${pulsing ? 'pulse' : ''} loadable`}>
                <motion.img
                  transition={
                    ({ height: { delay: 0, duration: 0.4 } },
                    { opacity: { delay: 0.5, duration: 0.4 } })
                  }
                  borderRadius={`8px`}
                  onLoad={imageLoaded}
                  width='100%'
                  src={d.url}
                  alt={d.title}
                  _hover={{ opacity: 0.8 }}
                  loading='lazy'
                />
              </Box>
            </PhotoItem>
          </LazyLoad>
        )})}
      </Masonry>
    </ContentContainer>
  )
}

const mapStateToProps = ({ photo, voting }) => {
  return { photo, voting: voting.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
