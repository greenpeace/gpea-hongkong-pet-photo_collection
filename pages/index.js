import React, {useEffect, useState} from 'react'
import Wrapper from "components/site/wrapper";
import { Box, Image, Text, Center } from "@chakra-ui/react";

export default function Index() {
  const [images, setImages] = useState([])

  useEffect(async () => {
    const getImages = await [...Array(36)].map((d)=> `https://source.unsplash.com/random?sig=${Math.random()*100}`)
    setImages(getImages)
  },[]);

  return (
  <Box p={4}>
    <Box sx={{ columnCount: [1, 6] }}>
      {images.map((d,i)=>{
        return(
          <Box key={i} mb={4}>
            <Box>
              <Image src={d} borderRadius={8} cursor='pointer' _hover={{opacity: .8}}/>
              <Center py={2}>
                <Text color={'gray.500'} fontSize={14}>圖片名稱</Text>
              </Center>
            </Box>
          </Box>
        )
      })}
    </Box>
  </Box>
  )
}

Index.getLayout = (page) => (
  <Wrapper>
    {page}
  </Wrapper>
)