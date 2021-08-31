import * as signupActions from 'store/actions/action-types/signup-actions'

const initState = {
  data: {},
}

const signupReducer = (state = initState, action) => {

  switch (action.type) {
    
    case signupActions.SET_USER:
      return {
        ...state,
        lastAction: action.type
    }

    case signupActions.SET_USER_FAIL:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case signupActions.SET_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default signupReducer