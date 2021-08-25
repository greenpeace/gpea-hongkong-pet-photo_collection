import React, {useEffect} from 'react'
import Wrapper from "components/site/wrapper";
import { Box } from "@chakra-ui/react";

export default function Index() {
  return (
   <Box></Box>
  )
}

Index.getLayout = (page) => (
  <Wrapper>
    {page}
  </Wrapper>
)