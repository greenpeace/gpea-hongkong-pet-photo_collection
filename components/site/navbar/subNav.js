import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Flex, HStack, Select, Text, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as filterActions from 'store/actions/action-types/filter-actions'
import * as gridActions from 'store/actions/action-types/grid-actions'
import { BsGrid1X2Fill, BsGrid1X2 } from 'react-icons/bs'
import { FaSortNumericDownAlt, FaSortNumericUp, FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";

const CATEGORY = process.env.CATEGORY || []

const NavLink = ({ children, href, active }) => {
  return (
    <Link color={'gray.700'} href={href} passHref>
      <Text
        cursor='pointer'
        style={{
          fontWeight: active ? 900 : 300,
          fontSize: `14px`,
        }}
      >
        {children}
      </Text>
    </Link>
  )
}

function WithAction({setFilter, setSorting, setGrid, grid, sorting}) {
  const router = useRouter()
  let { slug } = router.query

  useEffect(() => {
    if (slug) {
      setFilter(slug)
    }
  }, [slug])

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <HStack
            flex={1}
            as={'nav'}
            display={{ base: 'flex', md: 'flex' }}
            alignItems={'center'}
            spacing={6}
          >
            {CATEGORY.map((d) => {
              slug = slug ? slug : 'all'
              return (
                <NavLink key={d.LABEL} href={d.HREF} active={slug === d.SLUG}>
                  {d.LABEL}
                </NavLink>
              )
            })}
          </HStack>
          <Box>
            <Select size="sm" onChange={(e)=>setSorting(e.target.value)} value={sorting}>
              <option value="defaultDESC">按日期降序</option>
              <option value="defaultASC">按日期升序</option>
              <option value="votesDESC">按投票降序</option>
              <option value="votesASC">按投票升序</option>
            </Select>
          </Box>
          <Stack d={{base: 'flex', md: 'none'}} pl={4}>
            <Box>{grid === 'multi' ? <BsGrid1X2Fill onClick={()=>setGrid('normal')}/> : <BsGrid1X2 onClick={()=>setGrid('multi')}/> }</Box>
          </Stack>

        </Flex>
      </Box>
    </>
  )
}


const mapStateToProps = ({filter, grid}) => {
  return { filter, grid: grid.data, sorting: filter.sortBy }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => {
      dispatch({ type: filterActions.SET_FILTER, data })
    },
    setSorting: (data) => {
      dispatch({ type: filterActions.SET_SORTING, data })
    },
    setGrid: (data) => {
      dispatch({ type: gridActions.SET_GRID, data })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAction)
