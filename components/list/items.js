import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Vote from 'components/list/vote';
import { Box, Text, Heading, Flex, Skeleton, Image } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import * as modalActions from 'store/actions/action-types/modal-actions';
import * as photoActions from 'store/actions/action-types/photo-actions';
import styled from 'styled-components';
import _ from 'lodash';
import LazyLoad from 'react-lazyload';
import { HiOutlineBadgeCheck } from 'react-icons/Hi';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

const PhotoItem = styled.div`
  width: 100%;
  max-width: 480px;
`;

const Placeholder = () => {
  return (
    <PhotoItem className="grid">
      <Skeleton height="8rem" />
    </PhotoItem>
  );
};

const CATES = {
  all: `全部`,
  lantauLandscape: `大嶼風景`,
  lantauEcology: '大嶼生態',
};

function Index({ data, filter, grid, sorting, updatePhoto, total, voting }) {
  const router = useRouter();
  const [pulsing, setPulsing] = useState(true);
  const [filterCate, setFilterCate] = useState('');
  const [photo, setPhoto] = useState([]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 1,
  };

  useEffect(async () => {
    if (filter !== 'all' && filter !== undefined) {
      setFilterCate(CATES[filter]);
      await setPhoto(data.filter((d) => d.category === CATES[filter]));
      return;
    }
    setPhoto(data);
  }, [filter, data]);

  useEffect(async () => {
    if (sorting !== '') {
      switch (sorting) {
        case 'defaultDESC':
          setPhoto(_.orderBy(photo, ['newTimestamp'], ['desc']));
          break;
        case 'defaultASC':
          setPhoto(_.orderBy(photo, ['newTimestamp'], ['asc']));
          break;
        case 'votesDESC':
          setPhoto(_.orderBy(photo, ['count'], ['desc']));
          break;
        case 'votesASC':
          setPhoto(_.orderBy(photo, ['count'], ['asc']));
          break;

        default:
          setPhoto(data);
          break;
      }
    } else {
      if (filter !== 'all' && filter !== undefined) {
        setFilterCate(CATES[filter]);
        await setPhoto(data.filter((d) => d.category === CATES[filter]));
        return;
      } else {
        setPhoto(data);
      }
    }
  }, [sorting]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTimeout(async () => {
      const result = await axios
        .get(
          `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&offset=${photo.length}&limit=50`
        )
        .then((response) => response.data)
        .then((data) => {
          const resData = {
            ...data,
            records: data.records
              .map((d) => ({
                ...d,
                qEco: d.url.replace('/upload/', '/upload/c_fit,w_480,q_25/'),
                qBest: d.url.replace(
                  '/upload/',
                  '/upload/c_fit,w_1280,q_auto:best/'
                ),
                newTimestamp: new Date(d.timestamp).getTime(),
              }))
              .sort((a, b) => b.newTimestamp - a.newTimestamp),
          };
          return resData;
        })
        .catch(function (error) {
          console.log(error);
        });

      const merged = await _.merge(
        _.keyBy([...photo, ...result.records], 'id'),
        _.keyBy(voting, 'id')
      );
      const values = await _.values(merged)
        .filter((d) => !_.isEmpty(d.url))
        .map((d) => {
          if (!('count' in d)) {
            return {
              ...d,
              count: 0,
            };
          }
          return d;
        });

      setPhoto(() => {
        return values;
      });

      updatePhoto(values);
    }, 500);
  };

  const handleModal = (id) => {
    router.push(
      `${router.asPath}${
        router.asPath.indexOf(`?`) === -1 ? `?` : `&`
      }id=${id}`,
      undefined,
      { shallow: true }
    );
  };

  if (photo.length === 0) {
    return (
      <Box gridColumn={'-moz-initial'} className="masonry">
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Box>
    );
  }

  return (
    <Box>
      <InfiniteScroll
        dataLength={photo.length}
        next={() => fetchData()}
        hasMore={photo.length !== total}
        loader={<Box textAlign={`center`} py={4}>讀取中...</Box>}
      >
        <Masonry
          breakpointCols={grid === `multi` ? 3 : breakpointColumnsObj}
          className={`masonry-grid ${grid}`}
          columnClassName="masonry-grid_column"
        >
          {photo.map((d, i) => (
            <PhotoItem
              className="grid"
              onClick={() => handleModal(d.id)}
              cursor={'pointer'}
              key={i}
              placeholder={<Placeholder />}
              debounce={500}
            >
              <Box className="grid__body">
                <Flex w={'100%'} justifyContent={'space-between'}>
                  <Heading
                    className="grid__title"
                    py={2}
                    fontSize={{ base: 'xl', md: '2xl' }}
                    noOfLines={2}
                  >
                    {d.title}
                  </Heading>
                  {d.featured === 'TRUE' && (
                    <Box ml={4} minW={'32px'}>
                      <HiOutlineBadgeCheck size="28px" />
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
                      <Text as="span" className="grid__tag" fontSize={'xs'}>
                        #{d.category}
                      </Text>
                    )}
                    {d.featured === 'TRUE' && (
                      <Text as="span" className="grid__badge" fontSize={'xs'}>
                        #評審作品
                      </Text>
                    )}
                  </Box>
                  <Box className="grid__vote" align-self={'flex-end'}>
                    <Vote imageId={d.id} count={d.count} />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <LazyLoad height={200}>
                  <Image src={d.qEco} alt={d.title} />
                </LazyLoad>
              </Box>
            </PhotoItem>
          ))}
        </Masonry>
      </InfiniteScroll>
    </Box>
  );
}

const mapStateToProps = ({ photo, voting, filter, grid, sorting }) => {
  return {
    data: photo.data,
    voting: voting.data,
    filter: filter.data,
    grid: grid.data,
    sorting: filter.sortBy,
    total: photo.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL });
    },
    updatePhoto: (data) => {
      dispatch({ type: photoActions.UPDATE_PHOTO, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
