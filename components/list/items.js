import { FaHeart } from "react-icons/fa";
import React, {useState, useEffect} from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Container
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { useRouter } from 'next/router';
import * as modalActions from 'store/actions/action-types/modal-actions'

function Index({openModal, photo}) {
  const router = useRouter()
  const {data} = photo 
  if(data.length===0){
    return <Container maxW={`container.xl`}><Box py={6} textAlign={`center`}>讀取中...</Box></Container>
  }
  return (
    <Box gridColumn={"-moz-initial"} p={4}>
        <Box className="masonry">
          {data.map((d, i) => (
            <Box className="grid" key={i} onClick={()=>router.push(`/?id=${d.id}`, undefined, { shallow: true })} cursor={'pointer'}>
              <Box className="grid__body">
                <Box className="relative">
                  <Heading className="grid__title">{d.title}</Heading>
                  <Flex direction={'row'} align={'center'}>
                    <FaHeart/>
                    <Box pl={2}>
                      <Text className="grid__author">{d.votes}</Text>
                    </Box>
                  </Flex>
                </Box>
                {d.category && <Box className="mt-auto">
                  <Text as="span" className="grid__tag" fontSize={{base: 10, sm: 12}}>
                    #{d.category}
                  </Text>
                </Box>}
              </Box>
              <Image
                src={d.url}
                alt={d.title}
                _hover={{opacity: .8}}
              />
            </Box>
          ))}
        </Box>
      </Box>
  );
}

const mapStateToProps = ({photo}) => {
  return {photo};
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);