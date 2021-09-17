import * as filterActions from 'store/actions/action-types/filter-actions'

const initState = {
  data: 'all',
  sortBy: 'default'
}

const filterReducer = (state = initState, action) => {

  switch (action.type) {
    
    case filterActions.INIT_FILTER:
      return {
        data: 'all',
        sortBy: 'default',
        lastAction: action.type
    }

    case filterActions.SET_FILTER:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default filterReducer