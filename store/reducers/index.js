// Imports: Dependencies
import { combineReducers } from 'redux';

import signup from 'store/reducers/signupReducer';
import user from 'store/reducers/userReducer';
import modal from 'store/reducers/modalReducer';
import photo from 'store/reducers/photoReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  initialState: {},
  signup,
  modal,
  user,
  photo
});

// Exports
export default rootReducer;
