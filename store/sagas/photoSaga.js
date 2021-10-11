import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import _ from 'lodash'
import * as photoActions from 'store/actions/action-types/photo-actions'

export function* getPhoto() {
  try {
    let fetchURLs = []
    let photoResult = []

    const getPhotoTotal = yield call(() =>
      axios
        .get(
          `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&limit=1`
        )
        .then((response) => {
          return response.data.totalCount
        })
        .catch(function (error) {
          console.log(error)
        })
    )

    for (let i = 0; i < getPhotoTotal; i += 100) {
      fetchURLs = [
        ...fetchURLs,
        `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&offset=${i}`,
      ]
    }

    const allPhoto = yield call(() =>
      axios
        .all(fetchURLs.map((d) => axios.get(d)))
        .then(
          axios.spread(async (...res) => {
            await res.map((d) => photoResult.push(d.data.records))
            return photoResult.flat(1)
          })
        )
        .then((data) => {
          const resData = {
            records: data
              .map((d) => ({
                ...d,
                qEco: d.url.replace(
                  '/upload/',
                  '/upload/c_fit,w_480,q_auto:low/'
                ),
                qBest: d.url.replace(
                  '/upload/',
                  '/upload/c_fit,w_1920,q_auto:best/'
                ),
                newTimestamp: new Date(d.timestamp).getTime(),
              }))
              .sort((a, b) => b.newTimestamp - a.newTimestamp),
          }
          return resData
        })

        .catch(function (error) {
          console.log(error)
        })
    )

    // const photos = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}`)
    // .then((response) => response.data)
    // .then((data) => {
    //   const resData = {
    //     ...data,
    //     records: data.records.map(d=>({
    //       ...d,
    //       qEco: d.url.replace("/upload/", "/upload/c_fit,w_480,q_25/"),
    //       qBest: d.url.replace("/upload/", "/upload/c_fit,w_1280,q_auto:best/"),
    //       newTimestamp: new Date(d.timestamp).getTime()
    //     })).sort((a,b)=> b.newTimestamp - a.newTimestamp)
    //   }
    //   return resData
    // })
    // .catch(function (error) {
    //   console.log(error);
    // }));

    yield put({ type: photoActions.SET_PHOTO_SUCCESS, data: allPhoto.records })
  } catch (e) {}
}
