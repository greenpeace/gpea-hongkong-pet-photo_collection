// Imports: Dependencies
import { combineReducers } from 'redux';

import signup from 'store/reducers/signupReducer';
import user from 'store/reducers/userReducer';
import modal from 'store/reducers/modalReducer';
import photo from 'store/reducers/photoReducer';
import voting from 'store/reducers/votingReducer';
import storeVoting from 'store/reducers/storeVotingReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  initialState: {},
  signup,
  modal,
  user,
  photo,
  voting,
  storeVoting
});

// Exports
export default rootReducer;
