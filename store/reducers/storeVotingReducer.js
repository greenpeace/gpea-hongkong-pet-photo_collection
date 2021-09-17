import * as storeVotingActions from 'store/actions/action-types/store-voting-actions'

const initState = {
  data: [],
  lastAction: null
}

const votingReducer = (state = initState, action) => {

  switch (action.type) {
    
    case storeVotingActions.STORE_VOTING:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case storeVotingActions.STORE_VOTING_FAIL:
      return {
        ...state,
        lastAction: action.type
    }

    case storeVotingActions.STORE_VOTING_SUCCESS:
      return {
        ...state,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default votingReducer