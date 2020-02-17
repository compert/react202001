import _ from 'lodash'

import {USER_LOGIN} from '../actions'
import {API} from '../../common/services'

const initialState = {
  isLogged: false,
  userId: '',
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN.REQUEST:
      return {
        ...state,
        isLogged: false,
        userId: _.get(action, 'payload.userId', ''),
      }
    case USER_LOGIN.SUCCESS: {
      if (API.getResult(action)) {
        const data = API.getData(action)
        return {
          ...state,
          isLogged: true,
        }
      }
      return initialState
    }
    case USER_LOGIN.FAILURE:
      return {
        ...state,
        isLogged: false,
      }
    case USER_LOGIN.INIT:
      return {
        ...initialState,
      }
    default:
      return {
        ...state,
      }
  }
}
