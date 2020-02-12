import {call, put, takeEvery, all, fork} from 'redux-saga/effects'
import _ from 'lodash'

import {actionUserLogin} from './actions'
import {API} from '../common/services'

function* commonFn(data, action, apiFn) {
  const response = yield call(apiFn, data)
  if (_.get(response, 'result', false)) {
    yield put(action.success(response))
    if (typeof data.cbSuccess === 'function') {
      data.cbSuccess(response)
    }
  } else {
    yield put(action.failure(response))
    if (typeof data.cbFailure === 'function') {
      data.cbFailure(response)
    }
  }
}

/** *************************************************************************** */
/** ****************************** WORKERS ************************************ */
/** *************************************************************************** */

function* userLogin(data) {
  yield commonFn(data, actionUserLogin, API.loginUserInfo)
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

function* watchUserLogin() {
  yield takeEvery(actionUserLogin.request().type, userLogin)
}

export default function* rootSaga() {
  yield all([fork(watchUserLogin)])
}
