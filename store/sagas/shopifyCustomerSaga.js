import { call, put } from 'redux-saga/effects'
import axios from "axios";
import _ from "lodash"
import * as userActions from '@store/actions/action-types/signup-actions'
import * as loginActions from '@store/actions/action-types/login-actions'


export function* signup(actions) {
  const {input} = actions
  try {
    const { data } = yield call(() => axios.post(`/api/shopify/customer/create`, {input}));
    if(data.status==='OK'){
      yield put({ type: userActions.CREATE_CUSTOMER_SUCCESS, data });
    } else {
      yield put({ type: userActions.CREATE_CUSTOMER_FAIL, data });
    }
  } catch (e) {
    yield put({ type: userActions.CREATE_CUSTOMER_FAIL });
  }
}

export function* login(actions) {
  const {input} = actions
  try {
    const { data } = yield call(() => axios.post(`/api/shopify/customer/customerAccessTokenCreate`, {input}));
    if(data.status==='OK'){
      yield put({ type: loginActions.LOGIN_CUSTOMER_SUCCESS, data: data.customerAccessToken });
    } else {
      yield put({ type: loginActions.LOGIN_CUSTOMER_FAIL, data: data.customerUserErrors[0] });
    }
  } catch (e) {
    yield put({ type: loginActions.LOGIN_CUSTOMER_FAIL, data: data.customerUserErrors[0] });
  }
}
