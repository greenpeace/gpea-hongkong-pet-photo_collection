/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as photoActions from 'store/actions/action-types/photo-actions'
import * as votingActions from 'store/actions/action-types/voting-actions'
import * as photo from 'store/sagas/photoSaga'
import * as voting from 'store/sagas/votingSaga'

function* rootSaga() {
  yield all([
    takeLatest(photoActions.SET_PHOTO, photo.getPhoto),
    takeLatest(photoActions.SET_PHOTO_SUCCESS, voting.getVoting),
    takeLatest(votingActions.ADD_VOTING, voting.addVoting),
  ])
}

export default rootSaga