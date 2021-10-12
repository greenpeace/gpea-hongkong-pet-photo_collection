import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';

function Index({ imageId, voting, storeVoting, count }) {
  const [voteNumber, setVoteNumber] = useState(0);
  useEffect(() => {
    const getVote = voting.find((d) => d.name === imageId);
    if (getVote) {
      setVoteNumber(getVote.count);
    }
  }, [voting]);

  return (
    <Flex direction={{ base: 'row' }} align={`center`}>
      {storeVoting.indexOf(imageId) !== -1 ? (
        <AiFillHeart />
      ) : (
        <AiOutlineHeart />
      )}
      <Box px={2}>
        {count && count > 0 && <Text fontWeight={700}>{count}</Text>}
      </Box>
    </Flex>
  );
}

const mapStateToProps = ({ voting, storeVoting }) => {
  return { voting: voting.data, storeVoting: storeVoting.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // openModal: () => {
    //   dispatch({ type: modalActions.OPEN_MODAL });
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
