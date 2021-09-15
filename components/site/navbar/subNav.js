import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as filterActions from 'store/actions/action-types/filter-actions'

const CATEGORY = process.env.CATEGORY || []

const NavLink = ({ children, href, active }) => {
  return (
  <Link color={'gray.700'} href={href}>
    <a style={{
      fontWeight: active ? 900 : 300,
      fontSize: `14px`,
      paddingRight: `5px`
    }}>{children}</a>
  </Link>
)}

function WithAction({setFilter}) {
  const router = useRouter()
  let {slug} = router.query
  // slug = slug ? slug : `all`

  useEffect(() => {
    console.log(`slug-`,slug)
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
