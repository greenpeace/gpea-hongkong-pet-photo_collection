import { FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text
} from "@chakra-ui/react";
import { connect } from "react-redux";

function Index({imageId, voting}) {
  const [voteNumber, setVoteNumber] = useState(0);
  useEffect(() => {
   const getVote = voting.find(d=> d.name === imageId)
   if(getVote){
    setVoteNumber(getVote.count)
   }
  }, [voting]);

  return (
    <Flex direction={{base: 'row'}} align={`center`}>
      <FaHeart/> <Box px={2}><Text fontWeight={700}>{voteNumber}</Text></Box>
    </Flex>
  );
}

const mapStateToProps = ({voting}) => {
  return {voting: voting.data};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // openModal: () => {
    //   dispatch({ type: modalActions.OPEN_MODAL });
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);