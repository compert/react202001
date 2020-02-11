import axios from 'axios'
import _ from 'lodash'

import apmConst from '../common/constants'

global.apmApiUri = apmConst.getApiUri()

const commonGetAPI = path => {
  return axios
    .get(`${global.apmApiUri}${path}`)
    .then(response => response)
    .catch(e => e)
}
const commonPostAPI = (path, data) => {
  const payload = _.get(data, 'payload', data)
  console.log('payload:', payload)
  console.log('apmApiUri:', `${global.apmApiUri}${path}`)
  return axios
    .post(`${global.apmApiUri}${path}`, payload)
    .then(response => response)
    .catch(e => e)
}

export const API = {
  loginUserInfo: data => commonPostAPI('/loginUserInfo', data),
}
