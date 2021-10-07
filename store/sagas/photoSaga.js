import { call, put, select } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as photoActions from 'store/actions/action-types/photo-actions'

export function* getPhoto() {
  try {
    const photos = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}`)
    .then((response) => response.data)
    .then((data) => {
      const resData = {
        ...data,
        records: data.records.map(d=>({
          ...d,
          qEco: d.url.replace("/upload/", "/upload/c_fit,w_480,q_25/"),
          qBest: d.url.replace("/upload/", "/upload/c_fit,w_1280,q_auto:best/"),
          newTimestamp: new Date(d.timestamp).getTime()
        })).sort((a,b)=> b.newTimestamp - a.newTimestamp)
      }
      return resData
    })
    .catch(function (error) {
      console.log(error);
    }));

    yield put({ type: photoActions.SET_PHOTO_SUCCESS, data: photos.records});
  } catch (e) {
  }
}