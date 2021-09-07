import React from "react";
import Wrapper from "components/site/wrapper";
import {
  Box,
  Stack,
  Center,
  Heading,
  Text,
  Container
} from "@chakra-ui/react";

export default function Index() {
  return (
    <Box>
      <Box pos={'relative'} bgImage={'images/demo_1.jpeg'} bgSize={'cover'} h={{base: '240px', sm: '320px'}}>
        <Center h={'100%'} maxW={`container.md`} margin={`0 auto`} zIndex={3} pos={'relative'}>
          <Stack direction={'column'} textAlign={'center'} color={'#FFF'}>
            <Heading fontSize={{base: '4xl', sm: '6xl'}}>內頁 Thanks</Heading>
            <Text fontSize={{base: 'md', sm: 'xl'}}>內頁 sub title</Text>
          </Stack>
        </Center>
        <Box bgColor={'#000'} pos={'absolute'} zIndex={2} top={0} bottom={0} w={'100%'} opacity={.6}/>
      </Box>
      <Box py={12}>
      <Container maxW={'container.xl'}>
        Content
      </Container>
      </Box>
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;
