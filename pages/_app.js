import '/styles/globals.scss'
import React, {useEffect} from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { wrapper } from "store/configureStore"
import { useDispatch } from 'react-redux'
import { auth } from 'components/utils'
import theme from "components/site/theme"
import * as userActions from 'store/actions/action-types/user-actions'

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const data = auth()
    dispatch({ type: userActions.SET_USER_SUCCESS, data: JSON.parse(data) });
  }, [])

  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp);