import '/styles/globals.scss'
import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { wrapper } from "store/configureStore"
import theme from "components/site/theme"

const MyApp = ({ Component, pageProps }) => {

  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp);