import { call, put, select } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as photoActions from 'store/actions/action-types/photo-actions'

export function* getPhoto() {
  try {
    // const photos = await axios
    //   .get(`${process.env.G_SHEET}/photo-collection`)
    //   .then((response) => response.data)
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // const voting = await axios.get(`${process.env.G_SHEET}/photo-collection-voting`)
    // .then((response) => response.data)
    // .catch(function (error) {
    //   console.log(error);
    // })

    const photos = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection`)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    }));

    console.log(`photos--`,photos)

    const voting = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection-voting`)
    .then((response) => response.data.records)
    .catch(function (error) {
      console.log(error);
    }));

    console.log(`voting--`,voting)

    const count = _(voting)
    .groupBy('id')
    .map((items, name) => ({ name, count: items.length }))
    .value();

    console.log(`count--`,count)

    yield put({ type: photoActions.SET_PHOTO_SUCCESS, data: photos.records});
  } catch (e) {
    // yield put({ type: collectionActions.SHOPIFY_COLLECTION_CONNECTION_FAIL, e });
  }
}