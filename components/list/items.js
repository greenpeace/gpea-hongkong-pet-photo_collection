import React, { useState, useEffect } from 'react'
import Vote from 'components/list/vote'
import { Box, Text, Heading, Flex, Skeleton, Image } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import * as modalActions from 'store/actions/action-types/modal-actions'
import styled from 'styled-components'
import _ from 'lodash'
import lozad from 'lozad'
import { motion } from 'framer-motion'
import LazyLoad from 'react-lazyload'
import { HiOutlineBadgeCheck } from 'react-icons/Hi'
import Masonry from 'react-masonry-css'

const PhotoItem = styled.div`
  width: 100%;
  max-width: 480px;
`

const Placeholder = () => {
  return (
    <PhotoItem className='grid'>
      <Skeleton height='8rem' />
    </PhotoItem>
  )
}

const CATES = {
  all: `全部`,
  lantauLandscape: `大嶼風景`,
  lantauEcology: '大嶼生態',
}

function Index({ data, filter, grid, sorting }) {
  const router = useRouter()
  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)
  const [filterCate, setFilterCate] = useState('')
  const [photo, setPhoto] = useState([])
  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 400)
  }
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  }

  useEffect(async () => {
    if (filter !== 'all' && filter !== undefined) {
      setFilterCate(CATES[filter])
      await setPhoto(data.filter((d) => d.category === CATES[filter]))
      return
    }
    setPhoto(data)
  }, [filter, data])

  useEffect(async () => {
    if (sorting !== '') {
      switch (sorting) {
        case 'defaultDESC':
          setPhoto(_.orderBy(photo, ['newTimestamp'], ['desc']))
          break
        case 'defaultASC':
          setPhoto(_.orderBy(photo, ['newTimestamp'], ['asc']))
          break
        case 'votesDESC':
          setPhoto(_.orderBy(photo, ['count'], ['desc']))
          break
        case 'votesASC':
          setPhoto(_.orderBy(photo, ['count'], ['asc']))
          break

        default:
          setPhoto(data)
          break
      }
    } else {
      if (filter !== 'all' && filter !== undefined) {
        setFilterCate(CATES[filter])
        await setPhoto(data.filter((d) => d.category === CATES[filter]))
        return
      } else {
        setPhoto(data)
      }
    }
  }, [sorting])

  const handleModal = (id) => {
    router.push(
      `${router.asPath}${
        router.asPath.indexOf(`?`) === -1 ? `?` : `&`
      }id=${id}`,
      undefined,
      { shallow: true }
    )
  }

  if (photo.length === 0) {
    return (
      <Box gridColumn={'-moz-initial'} className='masonry'>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Box>
    )
  }

  return (
    <Masonry
      breakpointCols={grid === `multi` ? 2 : breakpointColumnsObj}
      className={`masonry-grid ${grid === 'multi' ? 'multi' : ''}`}
      columnClassName='masonry-grid_column'
    >
      {photo.map((d, i) => (
        <PhotoItem
          className='grid'
          onClick={() => handleModal(d.id)}
          cursor={'pointer'}
          key={i}
          placeholder={<Placeholder />}
          debounce={500}
        >
          <Box className='grid__body'>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Heading
                className='grid__title'
                py={2}
                fontSize={{ base: 'xl', md: '2xl' }}
                noOfLines={2}
              >
                {d.title}
              </Heading>
              {d.featured === 'TRUE' && (
                <Box ml={4} minW={'32px'}>
                  <HiOutlineBadgeCheck size='28px' />
                </Box>
              )}
            </Flex>
            <Flex
              mt={'auto'}
              w={'100%'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                {d.category && (
                  <Text as='span' className='grid__tag' fontSize={'xs'}>
                    #{d.category}
                  </Text>
                )}
                {d.featured === 'TRUE' && (
                  <Text as='span' className='grid__badge' fontSize={'xs'}>
                    #評審作品
                  </Text>
                )}
              </Box>
              <Box className='grid__vote' align-self={'flex-end'}>
                <Vote imageId={d.id} count={d.count} />
              </Box>
            </Flex>
          </Box>
          <Box>
          <LazyLoad height={200} offset={10} once>
            {/** https://web.dev/browser-level-image-lazy-loading/ */}
            <Image src={d.qEco} loading={'lazy'} />
          </LazyLoad>
            {/* <motion.img
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
          src={d.qEco}
          alt={d.title}
          loading='lazy'
        /> */}
          </Box>
        </PhotoItem>
      ))}
    </Masonry>
  )
}

const mapStateToProps = ({ photo, voting, filter, grid, sorting }) => {
  return {
    data: photo.data,
    voting: voting.data,
    filter: filter.data,
    grid: grid.data,
    sorting: filter.sortBy,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
