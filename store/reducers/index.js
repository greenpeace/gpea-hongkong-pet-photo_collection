// Imports: Dependencies
import { combineReducers } from 'redux';

import signup from 'store/reducers/signupReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  initialState: {},
  signup,
});

// Exports
export default rootReducer;
