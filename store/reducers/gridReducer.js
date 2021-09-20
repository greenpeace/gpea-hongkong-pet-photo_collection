import * as gridActions from 'store/actions/action-types/grid-actions'

const initState = {
  data: 'normal'
}

const gridReducer = (state = initState, action) => {

  switch (action.type) {
    
    case gridActions.INIT_GRID:
      return {
        data: 'normal',
        lastAction: action.type
    }

    case gridActions.SET_GRID:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default gridReducer