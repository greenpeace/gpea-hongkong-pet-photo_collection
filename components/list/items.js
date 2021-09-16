import React, { useState, useEffect } from 'react'
import Vote from 'components/list/vote'
import {
  Box,
  Text,
  Heading,
  Flex,
  Skeleton,
  Stack,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import * as modalActions from 'store/actions/action-types/modal-actions'
import styled from 'styled-components'
import _ from "lodash"
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload'

const PhotoItem = styled.div`
  width: 100%;
  max-width: 480px;
`

const Placeholder = () => {
  return (
    <PhotoItem className='grid'>
      <Skeleton height='6rem' />
    </PhotoItem>
  )
}

const CATES = {all:`全部`, lantauLandscape: `大嶼風景`, lantauEcology: '大嶼生態'}

function Index({ data, filter }) {
  const router = useRouter()
  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)
  const [filterCate, setFilterCate] = useState("")
  const [photo, setPhoto] = useState([])

  useEffect(async () => {
    if(filter !== 'all' && filter !== undefined){
      setFilterCate(CATES[filter])
      await setPhoto(data.filter(d=>d.category === CATES[filter]))
      return
    } 
    setPhoto(data)
  }, [filter, data])

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 400)
  }

  const handleModal = (id) => {
    router.push(`${router.asPath}${router.asPath.indexOf(`?`) === -1 ? `?` : `&`}id=${id}`, undefined, { shallow: true })
  }

  if (photo.length === 0) {
    return (
      <Stack spacing={4}>
        <Skeleton height='6rem' />
        <Skeleton height='6rem' />
        <Skeleton height='6rem' />
      </Stack>
      // <Box gridColumn={'-moz-initial'} className='masonry'>
      //   {/* 讀取中... */}
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      //   <Placeholder />
      // </Box>
    )
  }

  const sortBy = _.orderBy(photo, ['count'],['desc']);
  
  return (
    <Box gridColumn={'-moz-initial'} className='masonry'>
      {photo
      .map((d, i) => (
        <LazyLoad once={i.once} offset={100} key={i} debounce={500}>
          <PhotoItem
            className='grid'
            onClick={() =>
              handleModal(d.id)
            }
            cursor={'pointer'}
          >
            <Box className='grid__body'>
              <Heading
                className='grid__title'
                py={2}
                fontSize={{ base: 'xl', md: '2xl' }}
              >
                {d.title}
              </Heading>

              {/* <Flex direction={'row'} align={'center'}>
                <Box>
                  <Text className='grid__author' fontSize={'md'}>
                    {d.votes}
                  </Text>
                </Box>
              </Flex> */}
              <Flex
                mt={'auto'}
                w={'100%'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                {d.category && (
                  <Text as='span' className='grid__tag' fontSize={'sm'}>
                    #{d.category}
                  </Text>
                )}
                <Box className='grid__vote' align-self={'flex-end'}>
                  <Vote imageId={d.id} count={d.count}/>
                </Box>
              </Flex>
            </Box>
            <Box className={`${pulsing ? 'pulse' : ''} loadable`}>
              <motion.img
                initial={{ height: '6rem', opacity: 0 }}
                animate={{
                  height: imageLoading ? '6rem' : 'auto',
                  opacity: imageLoading ? 0 : 1,
                }}
                transition={
                  ({ transform: { delay: 0, duration: 0.3 } },
                  { height: { delay: 0, duration: 0.4 } },
                  { opacity: { delay: 0.5, duration: 0.4 } })
                }
                onLoad={imageLoaded}
                width='100%'
                src={d.url}
                alt={d.title}
                loading='lazy'
              />
            </Box>
          </PhotoItem>
        </LazyLoad>
      ))}
    </Box>
  )
}

const mapStateToProps = ({ photo, voting, filter }) => {
  return { data: photo.data, voting: voting.data, filter: filter.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
