import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';
import * as photoActions from 'store/actions/action-types/photo-actions';

export function* getPhoto() {
  try {
    let fetchURLs = [];
    let photoResult = [];

    const getPhotoTotal = yield call(() =>
      axios
        .get(
          `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&limit=1`
        )
        .then((response) => {
          return response.data.totalCount;
        })
        .catch(function (error) {
          console.log(error);
        })
    );

    for (let i = 0; i < getPhotoTotal; i += 100) {
      fetchURLs = [
        ...fetchURLs,
        `${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&offset=${i}`,
      ];
    }

    const allPhoto = yield call(() =>
      axios
        .all(fetchURLs.map((d) => axios.get(d)))
        .then(
          axios.spread(async (...res) => {
            await res.map((d) => photoResult.push(d.data.records));
            return photoResult.flat(1);
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
          };
          return resData;
        })

        .catch(function (error) {
          console.log(error);
        })
    );

    console.log(`allPhoto-`, allPhoto);

    // const state = yield select();
    // const getCurrentPhoto = state.photo

    // const photos = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}&offset=${getCurrentPhoto.data?.length}`)
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

    // const state = yield select();
    // const getCurrentPhoto = state.photo

    // console.log(`getCurrentPhoto--`,getCurrentPhoto)

    yield put({
      type: photoActions.SET_PHOTO_SUCCESS,
      data: allPhoto.records,
      total: allPhoto.totalCount,
    });

    // yield put({ type: photoActions.SET_PHOTO_SUCCESS, data: allPhoto.records })
  } catch (e) {}
}

export function* updatePhoto() {
  try {
    const CATES = {
      all: `全部`,
      lantauLandscape: `大嶼風景`,
      lantauEcology: '大嶼生態',
    };
    let result = [];
    const state = yield select();
    const getCurrentPhoto = state.photo?.data;
    const getCurrentPhotoTotal = state.photo?.total;
    const getCurrentSortBy = state.filter.sortBy;
    const getCurrentFilter = state.filter.data;

    switch (getCurrentSortBy) {
      case 'defaultDESC':
        result = _.orderBy(getCurrentPhoto, ['newTimestamp'], ['desc']);
        break;
      case 'defaultASC':
        result = _.orderBy(getCurrentPhoto, ['newTimestamp'], ['asc']);
        break;
      case 'votesDESC':
        result = _.orderBy(getCurrentPhoto, ['count'], ['desc']);
        break;
      case 'votesASC':
        result = _.orderBy(getCurrentPhoto, ['count'], ['asc']);
        break;

      default:
        result = getCurrentPhoto;
        break;
    }

    if (getCurrentFilter !== 'all') {
      result = yield call(() =>
        result.filter((d) => d.category === CATES[filter])
      );
    }

    yield put({
      type: photoActions.UPDATE_PHOTO_SORTING,
      data: result,
      total: getCurrentPhotoTotal,
    });
  } catch (e) {}
}
