import _ from 'lodash'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const INIT = 'INIT'

function createRequestTypes(base) {
  const types = [REQUEST, SUCCESS, FAILURE, INIT]
  return types.reduce((accumulator, type) => {
    accumulator[type] = `${base}_${type}`
    return accumulator
  }, {})
}

function actionCreator(type, payload = {}) {
  return {type, payload}
}

function createActionObject(action) {
  return {
    request: (data, rest) => _.merge(actionCreator(action[REQUEST], data), rest),
    success: data => actionCreator(action[SUCCESS], data),
    failure: data => actionCreator(action[FAILURE], data),
    init: data => actionCreator(action[INIT], data),
  }
}

export const USER_LOGIN = createRequestTypes('USER_LOGIN')

export const actionUserLogin = createActionObject(USER_LOGIN)
