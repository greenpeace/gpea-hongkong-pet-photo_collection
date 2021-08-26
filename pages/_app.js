import React from "react";
import '/styles/globals.scss'
import { ChakraProvider } from "@chakra-ui/react"
import theme from "components/site/theme"

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp;