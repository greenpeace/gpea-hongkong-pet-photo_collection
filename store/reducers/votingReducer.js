import * as votingActions from 'store/actions/action-types/voting-actions'

const initState = {
  data: [],
}

const votingReducer = (state = initState, action) => {

  switch (action.type) {
    
    case votingActions.SET_VOTING:
      return {
        ...state,
        lastAction: action.type
    }

    case votingActions.SET_VOTING_FAIL:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case votingActions.SET_VOTING_SUCCESS:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default votingReducer