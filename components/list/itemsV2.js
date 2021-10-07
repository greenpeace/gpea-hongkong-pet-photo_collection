import React, { useState, useEffect } from 'react'
import Vote from 'components/list/vote'
import { Box, Text, Heading, Flex, Skeleton, Image } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import * as modalActions from 'store/actions/action-types/modal-actions'
import styled from 'styled-components'
import _ from 'lodash'
import { HiOutlineBadgeCheck } from 'react-icons/Hi'
import { Masonry, useInfiniteLoader } from 'masonic'

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
  const [filterCate, setFilterCate] = useState('')
  const [items, setItems] = useState(data)
  useEffect(async () => {
    if (filter !== 'all' && filter !== undefined) {
      setFilterCate(CATES[filter])
      await setItems(data.filter((d) => d.category === CATES[filter]))
      return
    }
    setItems(data)
  }, [filter, data])

  useEffect(async () => {
    if (sorting !== '') {
      switch (sorting) {
        case 'defaultDESC':
          setItems(_.orderBy(items, ['newTimestamp'], ['desc']))
          break
        case 'defaultASC':
          setItems(_.orderBy(items, ['newTimestamp'], ['asc']))
          break
        case 'votesDESC':
          setItems(_.orderBy(items, ['count'], ['desc']))
          break
        case 'votesASC':
          setItems(_.orderBy(items, ['count'], ['asc']))
          break

        default:
          setItems(data)
          break
      }
    } else {
      if (filter !== 'all' && filter !== undefined) {
        setFilterCate(CATES[filter])
        await setItems(data.filter((d) => d.category === CATES[filter]))
        return
      } else {
        setItems(data)
      }
    }
  }, [sorting])

  const FakeCard = ({index, data: {qEco}, width}) => {
    return (
      <Box>
      <Image src={qEco} />
      index: {index}<br/>
      width: {width}
      </Box>
    )
  }

  const maybeLoadMore = useInfiniteLoader(
    async (startIndex, stopIndex, currentItems) => {
      // const nextItems = await getFakeItemsPromise(startIndex, stopIndex);
      const nextItems = []
      setItems(current => [...current, ...nextItems]);
    },
    {
      isItemLoaded: (index, items) => !!items[index],
      minimumBatchSize: 32,
      threshold: 3
    }
  );
  
  // const randomChoice = items => items[Math.floor(Math.random() * items.length)];
  // const getFakeItems = (start = 0, end = 32) => {
  //   const fakeItems = [];
  //   for (let i = start; i < end; i++)
  //     fakeItems.push({ id: i, data: randomChoice(items)});
  //   return fakeItems;
  // };
  
  // const getFakeItemsPromise = (start, end) =>
  //   Promise.resolve(getFakeItems(start, end));

  const handleModal = (id) => {
    router.push(
      `${router.asPath}${
        router.asPath.indexOf(`?`) === -1 ? `?` : `&`
      }id=${id}`,
      undefined,
      { shallow: true }
    )
  }

  if (items.length === 0) {
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
    <Box>
      <Masonry
        columnCount={3}
        // onRender={maybeLoadMore}
        items={items}
        columnGutter={8}
        columnWidth={172}
        overscanBy={1.25}
        render={FakeCard}
      />
    </Box>
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
