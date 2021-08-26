import * as signupActions from 'store/actions/action-types/signup-actions'

const initState = {
  data: {},
  form: {
    email: '',
    password: '',
    confirm_password: '',
    marketing: false
  },
  type: 'mail',
  errorMessage: null,
  lastAction: null
}

const signupReducer = (state = initState, action) => {

  switch (action.type) {
    
    case signupActions.CREATE_USER:
      return {
        ...state,
        lastAction: action.type
    }

    case signupActions.CREATE_USER_FAIL:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case signupActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
    }

    case signupActions.SIGNUP_FORM_RESET:
      return {
        ...state,
        errorMessage: null,
        lastAction: null
    }


    case signupActions.SIGNUP_FORM_SET:
      return {
        form: {
          ...state.form,
          ...action.input
        },
        type: state.type,
        errorMessage: null,
        lastAction: null
    }

    default:
      return state
  }
}

export default signupReducer