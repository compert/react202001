import axios from 'axios'
import _ from 'lodash'

import apmConst from '../common/constants'

global.apmApiUri = apmConst.getApiUri()

const commonAPI = (path, data, method) => {
  const payload = _.get(data, 'payload', data)
  return axios({
    url: `${global.apmApiUri}${path}`,
    method,
    headers: {
      'content-type': 'application/json',
    },
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

export const API = {
  loginUserInfo: data => commonPostAPI('/loginUserInfo', data),
}
