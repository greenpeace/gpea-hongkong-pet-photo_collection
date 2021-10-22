import * as photoActions from 'store/actions/action-types/photo-actions'

const initState = {
  data: [],
  total: 0,
  lantauEcologyTotal: 0,
  lantauLandscapeTotal: 0,
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
        total: action.total,
        lastAction: action.type,
        lantauEcologyTotal: action.lantauEcologyTotal,
        lantauLandscapeTotal: action.lantauLandscapeTotal,
    }

    case photoActions.UPDATE_PHOTO_SORTING:
      return {
        ...state,
        data: action.data,
        // voting: action.voting,
        total: action.total,
        lastAction: action.type
    }

    case photoActions.MERGE_PHOTO_DATA:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case photoActions.UPDATE_PHOTO:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }
    



    default:
      return state
  }
}

export default photoReducer