import { FaHeart } from "react-icons/fa";
import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Flex
} from "@chakra-ui/react";
import { connect } from "react-redux";
import * as modalActions from 'store/actions/action-types/modal-actions'

function Index({openModal}) {
  return (
    <Box gridColumn={"-moz-initial"} p={4}>
        <Box className="masonry">
          {[...Array(12)].map((d, i) => (
            <Box className="grid" key={i} onClick={()=>openModal()} cursor={'pointer'} _hover={{opacity: .8}}>
              <Image
                src={`https://source.unsplash.com/random/${
                  Math.random() * 100
                }`}
              />
              <Box className="grid__body">
                <Box className="relative">
                  <Heading className="grid__title">Title {i + 1}</Heading>
                  <Flex direction={'row'} align={'center'}>
                    <FaHeart/>
                    <Box pl={2}>
                      <Text className="grid__author">0</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box className="mt-auto">
                  <Text as="span" className="grid__tag" fontSize={{base: 10, sm: 12}}>
                    #生態環境
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch({ type: modalActions.OPEN_MODAL });
    }
  };
};

export default connect(null, mapDispatchToProps)(Index);