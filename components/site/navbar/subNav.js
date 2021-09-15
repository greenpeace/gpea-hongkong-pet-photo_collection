import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as filterActions from 'store/actions/action-types/filter-actions'

const CATEGORY = process.env.CATEGORY || []

const NavLink = ({ children, href, active }) => {
  return (
  <Link
    px={2}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    fontSize={14}
    fontWeight={active ? 900 : 300}
    color={'gray.700'}
    href={href}
  >
    {children}
  </Link>
)}

function WithAction({setFilter}) {
  const router = useRouter()
  let {slug} = router.query
  // slug = slug ? slug : `all`

  useEffect(() => {
    if(slug){
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
          >
            {CATEGORY.map((d) => {
              return (
                <NavLink key={d.LABEL} href={d.HREF} active={slug === d.SLUG}>
                {d.LABEL}
              </NavLink>
              )
            })}
          </HStack>
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


const mapStateToProps = ({filter}) => {
  return { filter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => {
      dispatch({ type: filterActions.SET_FILTER, data })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAction)
