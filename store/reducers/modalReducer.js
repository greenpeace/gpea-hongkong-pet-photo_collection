import * as modalActions from 'store/actions/action-types/modal-actions'

const initState = {
  isOpen: false
}

const modalReducer = (state = initState, action) => {

  switch (action.type) {
    
    case modalActions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        lastAction: action.type
    }

    case modalActions.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        lastAction: action.type
    }

    default:
      return state
  }
}

export default modalReducer