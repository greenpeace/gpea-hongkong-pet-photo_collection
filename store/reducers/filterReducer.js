import * as filterActions from 'store/actions/action-types/filter-actions'

const initState = {
  data: 'all',
  sortBy: 'defaultDESC'
}

const filterReducer = (state = initState, action) => {

  switch (action.type) {
    
    case filterActions.INIT_FILTER:
      return {
        ...state,
        data: 'all',
        lastAction: action.type
    }

    case filterActions.SET_FILTER:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case filterActions.INIT_SORTING:
      return {
        ...state,
        sortBy: 'default',
        lastAction: action.type
    }

    case filterActions.SET_SORTING:
      return {
        ...state,
        sortBy: action.data,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default filterReducer