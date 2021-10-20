import { call, put, select } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as votingActions from 'store/actions/action-types/voting-actions'
import * as photoActions from 'store/actions/action-types/photo-actions'

export function* getVoting() {
  try {
    let fetchURLs = [];
    let voteResult = [];
    const getVotingTotal = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection-voting?limit=1`)
    .then((response) => {      
      return response.data.totalCount
    })
    .catch(function (error) {
      console.log(error);
    }));

    for (let i = 0; i < getVotingTotal; i+=100) {
      fetchURLs = [...fetchURLs, `${process.env.G_SHEET}/photo-collection-voting?offset=${i}`]
    }

    const allVoting = yield call(() => axios.all(
      fetchURLs.map(d =>axios.get(d))
    )

    // const allVoting = yield call(() => axios.all([
    //   //TODO:
    //   axios.get(`${process.env.G_SHEET}/photo-collection-voting`), 
    //   axios.get(`${process.env.G_SHEET}/photo-collection-voting?offset=100`),
    //   axios.get(`${process.env.G_SHEET}/photo-collection-voting?offset=200`)
    // ])
    .then(axios.spread(async (...res) => {
      await res.map(d => voteResult.push(d.data.records))
      return voteResult.flat(1)
    })).catch(function (error) {
      console.log(error);
    }));

    const state = yield select();
    // const voting = yield call(() => axios.get(`${process.env.G_SHEET}/photo-collection-voting`)
    // .then((response) => {      
    //   return response.data.records
    // })
    // .catch(function (error) {
    //   console.log(error);
    // }));

    // console.log(`voting--`,voting)
    // console.log(`allVoting--`,allVoting)

    const count = _(allVoting)
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