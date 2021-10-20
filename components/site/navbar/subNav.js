import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Flex, HStack, Select, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as filterActions from 'store/actions/action-types/filter-actions';
import * as gridActions from 'store/actions/action-types/grid-actions';
import { BsGrid1X2Fill, BsGrid1X2 } from 'react-icons/bs';
import {
  FaSortNumericDownAlt,
  FaSortNumericDown,
  FaSortAmountDown,
  FaSortAmountUpAlt,
} from 'react-icons/fa';

const CATEGORY = process.env.CATEGORY || [];

const NavLink = ({ children, href, active }) => {
  return (
    <Link color={'gray.700'} href={href} passHref>
      <Text
        cursor="pointer"
        style={{
          fontWeight: active ? 900 : 300,
          fontSize: `14px`,
        }}
      >
        {children}
      </Text>
    </Link>
  );
};

function WithAction({ setFilter, setSorting, setGrid, grid, sorting }) {
  const [type, setType] = useState('sortByDate');
  const router = useRouter();
  let { slug } = router.query;

  useEffect(() => {
    if (slug) {
      setFilter(slug);
    }
  }, [slug]);

  const handleChangeType = (value) => {
    value === 'sortByDate'
      ? setSorting('defaultDESC')
      : setSorting('votesDESC');
    setType(value);
  };

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <HStack
            flex={1}
            as={'nav'}
            display={{ base: 'flex' }}
            alignItems={'center'}
            justifyContent={'space-around'}
            spacing={{ base: 2, sm: 6 }}
            marginRight={2}
            maxWidth={'280px'}
          >
            {CATEGORY.map((d) => {
              slug = slug ? slug : 'all';
              return (
                <NavLink key={d.LABEL} href={d.HREF} active={slug === d.SLUG}>
                  {d.LABEL}
                </NavLink>
              );
            })}
          </HStack>
          <Box>
            <Stack direction={'row'}>
              <Select
                fontSize="sm"
                size="sm"
                onChange={(e) => handleChangeType(e.target.value)}
                value={type}
                _focus={{ boxShadow: 'none', fontSize: 'sm' }}
              >
                <option value="sortByDate">上載日期</option>
                <option value="sortByType">投票數目</option>
              </Select>
              {type === 'sortByDate' && (
                <Stack direction={'row'} pt={2}>
                  {sorting === 'defaultDESC' ? (
                    <FaSortAmountDown
                      fontSize={20}
                      onClick={() => setSorting('defaultASC')}
                    />
                  ) : (
                    <FaSortAmountUpAlt
                      fontSize={20}
                      onClick={() => setSorting('defaultDESC')}
                    />
                  )}
                </Stack>
              )}
              {type === 'sortByType' && (
                <Stack direction={'row'} pt={2}>
                  {sorting === 'votesDESC' ? (
                    <FaSortNumericDownAlt
                      fontSize={20}
                      onClick={() => setSorting('votesASC')}
                    />
                  ) : (
                    <FaSortNumericDown
                      fontSize={20}
                      onClick={() => setSorting('votesDESC')}
                    />
                  )}
                </Stack>
              )}
            </Stack>
          </Box>
          <Stack d={{ base: 'flex', md: 'none' }} pl={2}>
            <Box pt={1} fontSize={18}>
              {grid === 'multi' ? (
                <BsGrid1X2Fill onClick={() => setGrid('normal')} />
              ) : (
                <BsGrid1X2 onClick={() => setGrid('multi')} />
              )}
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

const mapStateToProps = ({ filter, grid }) => {
  return { filter, grid: grid.data, sorting: filter.sortBy };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => {
      dispatch({ type: filterActions.SET_FILTER, data });
    },
    setSorting: (data) => {
      dispatch({ type: filterActions.SET_SORTING, data });
    },
    setGrid: (data) => {
      dispatch({ type: gridActions.SET_GRID, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithAction);
