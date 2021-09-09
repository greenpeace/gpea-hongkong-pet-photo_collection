/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as photoActions from 'store/actions/action-types/photo-actions'
import * as photo from 'store/sagas/photoSaga'

function* rootSaga() {
  yield all([
    takeLatest(photoActions.SET_PHOTO, photo.getPhoto),
  ])
}

export default rootSaga