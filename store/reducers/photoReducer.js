import * as photoActions from 'store/actions/action-types/photo-actions'

const initState = {
  data: [],
  // voting: {}
}

const photoReducer = (state = initState, action) => {

  switch (action.type) {
    
    case photoActions.SET_PHOTO:
      return {
        ...state,
        lastAction: action.type
    }

    case photoActions.SET_PHOTO_FAIL:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case photoActions.SET_PHOTO_SUCCESS:
      return {
        ...state,
        data: action.data,
        // voting: action.voting,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default photoReducer