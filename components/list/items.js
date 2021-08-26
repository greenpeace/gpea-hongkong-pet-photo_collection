import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import * as modalActions from 'store/actions/action-types/modal-actions'

function Index({openModal}) {
  return (
    <Box gridColumn={"-moz-initial"} p={4}>
        <Box className="masonry">
          {[...Array(12)].map((d, i) => (
            <Box className="grid" key={i} onClick={()=>openModal()}>
              <Image
                src={`https://source.unsplash.com/random/${
                  Math.random() * 100
                }`}
              />
              <Box className="grid__body">
                <Box className="relative">
                  <Heading className="grid__title">Title {i + 1}</Heading>
                  <Text className="grid__author">Author</Text>
                </Box>
                <Box className="mt-auto">
                  <Text as="span" className="grid__tag">
                    #Tag name
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