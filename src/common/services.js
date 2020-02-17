import axios from 'axios'
import _ from 'lodash'

import apmConst from './constants'

global.apiUri = apmConst.getApiUri()

axios.defaults.headers.common = {}
axios.defaults.headers.common.accept = 'application/json'

const commonAPI = (path, data, method) => {
  const payload = _.get(data, 'payload', data)
  return axios({
    url: `${global.apiUri}${path}`,
    method,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
    data: method === 'POST' ? payload : undefined,
  })
    .then(response => response.data)
    .catch(e => e)
}
const commonGetAPI = (path, data) => {
  return commonAPI(path, data, 'GET')
}
const commonPostAPI = (path, data) => {
  return commonAPI(path, data, 'POST')
}
const getPlayloadResult = response => _.get(response, 'payload.result', false)
const getPlayloadValue = response => _.get(response, 'payload.value', false)

export const API = {
  loginUserInfo: data => commonPostAPI('/loginUserInfo', data),

  getResult: response => getPlayloadResult(response),
  getData: response => getPlayloadValue(response),
}
