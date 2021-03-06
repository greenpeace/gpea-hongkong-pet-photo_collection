import * as userActions from 'store/actions/action-types/user-actions'

const initState = {
  data: {},
}

const userReducer = (state = initState, action) => {

  switch (action.type) {
    
    case userActions.SET_USER:
      return {
        ...state,
        lastAction: action.type
    }

    case userActions.SET_USER_FAIL:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case userActions.SET_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default userReducer