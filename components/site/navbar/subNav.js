import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Flex, HStack, Select, Text, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as filterActions from 'store/actions/action-types/filter-actions'
import * as gridActions from 'store/actions/action-types/grid-actions'
import { BsGrid1X2Fill, BsGrid1X2 } from 'react-icons/bs'

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

function WithAction({ setFilter, setGrid, grid }) {
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
          <Stack d={{ base: 'flex', md: 'none' }}>
            <Box>
              {grid === 'multi' ? (
                <BsGrid1X2Fill onClick={() => setGrid('normal')} />
              ) : (
                <BsGrid1X2 onClick={() => setGrid('multi')} />
              )}
            </Box>
          </Stack>

          {/* <Box>
          <Select placeholder="預設">
            <option value="date">按日期排序</option>
            <option value="votes">按投票排序</option>
          </Select>
          </Box> */}
          {/* <Box flex={1} px={4}>
            <Input
              h={8}
              backgroundColor={'white'}
              borderRadius={8}
              placeholder='搜尋...'
            />
          </Box>
          <Flex alignItems={'center'}>
            <Text color={'gray.900'} fontSize={14}>
              搜尋
            </Text>
          </Flex> */}
        </Flex>
      </Box>
    </>
  )
}

const mapStateToProps = ({ filter, grid }) => {
  return { filter, grid: grid.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => {
      dispatch({ type: filterActions.SET_FILTER, data })
    },
    setGrid: (data) => {
      dispatch({ type: gridActions.SET_GRID, data })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAction)
