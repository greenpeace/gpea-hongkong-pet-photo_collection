import { call, put, select } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as votingActions from 'store/actions/action-types/voting-actions'
import * as photoActions from 'store/actions/action-types/photo-actions'

export function* getVoting() {
  try {
    const state = yield select();
    const voting = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection-voting`)
    .then((response) => {
      return response.data.records
    })
    .catch(function (error) {
      console.log(error);
    }));

    const count = _(voting)
    .groupBy('id')
    .map((items, id) => {
      return ({ id, count: items.length })
    })
    .value();

    const photoData = state.photo.data
    const merged = yield _.merge(_.keyBy(photoData, 'id'), _.keyBy(count, 'id'));
    const values = yield _.values(merged).filter(d=> !_.isEmpty(d.url)).map(d=>{
      if(!('count' in d)){
        return({
          ...d,
          count: 0
        })
      }
      return d
    });

    yield put({ type: photoActions.MERGE_PHOTO_DATA, data: values});
    yield put({ type: votingActions.SET_VOTING_SUCCESS, data: count});

  } catch (e) {
  }
}

export function* addVoting(action) {
  try {
    const addVotingResult = yield call(() => axios
    .post(`${process.env.G_SHEET}/photo-collection-voting`, action.data, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then(function (res) {
      return res
    })
    .catch(function (error) {
      console.log(error);
    }));

    if(addVotingResult.statusText === "OK"){
      yield put({ type: votingActions.ADD_VOTING_SUCCESS});
      yield put({ type: votingActions.SET_VOTING});
    }

  } catch (e) {
  }
}