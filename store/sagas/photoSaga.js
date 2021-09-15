import { call, put, select } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as photoActions from 'store/actions/action-types/photo-actions'

export function* getPhoto() {
  try {
    const photos = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}`)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    }));

    yield put({ type: photoActions.SET_PHOTO_SUCCESS, data: photos.records});
  } catch (e) {
  }
}