// Imports: Dependencies
import { combineReducers } from 'redux';

import signup from 'store/reducers/signupReducer';
import user from 'store/reducers/userReducer';
import modal from 'store/reducers/modalReducer';
import photo from 'store/reducers/photoReducer';
import voting from 'store/reducers/votingReducer';
import storeVoting from 'store/reducers/storeVotingReducer';
import filter from 'store/reducers/filterReducer';
import hiddenForm from 'store/reducers/hiddenFormReducer'
import grid from 'store/reducers/gridReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  initialState: {},
  signup,
  modal,
  user,
  photo,
  voting,
  storeVoting,
  filter,
  hiddenForm,
  grid
});

// Exports
export default rootReducer;
