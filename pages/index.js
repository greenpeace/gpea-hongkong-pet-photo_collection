import React from "react";
import Wrapper from "components/site/wrapper";
import ListItems from "components/list/items";
import {
  Box,
  Stack,
  Center,
  Heading,
  Text
} from "@chakra-ui/react";

export default function Index() {
  return (
    <Box>
      <Box pos={'relative'} bgImage={'images/demo_1.jpeg'} bgSize={'cover'} h={{base: '240px', sm: '480px'}}>
        <Center h={'100%'} zIndex={3} pos={'relative'}>
          <Stack direction={'column'} textAlign={'center'} color={'#FFF'}>
            <Heading fontSize={{base: '4xl', sm: '6xl'}}>行動帶來改變</Heading>
            <Text fontSize={{base: 'md', sm: 'xl'}}>加入守護環境的行列</Text>
          </Stack>
        </Center>
        <Box bgColor={'#000'} pos={'absolute'} zIndex={2} top={0} bottom={0} w={'100%'} opacity={.6}/>
      </Box>
      <ListItems/>
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
