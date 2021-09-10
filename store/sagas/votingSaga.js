import { call, put, select } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as votingActions from 'store/actions/action-types/voting-actions'

export function* getVoting() {
  try {
    const voting = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection-voting`)
    .then((response) => {
      return response.data.records
    })
    .catch(function (error) {
      console.log(error);
    }));

    const count = _(voting)
    .groupBy('id')
    .map((items, name) => ({ name, count: items.length }))
    .value();

    yield put({ type: votingActions.SET_VOTING_SUCCESS, data: count});
  } catch (e) {
  }
}

export function* addVoting(action) {
  console.log(`demo voting`)
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
    }

  } catch (e) {
  }
}