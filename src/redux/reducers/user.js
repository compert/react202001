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
      }
    case USER_LOGIN.SUCCESS: {
      if (API.getResult(action)) {
        const data = API.getData(action)
        return {
          ...state,
          isLogged: true,
          userId: _.get(data, 'userId', ''),
        }
      }
      return initialState
    }
    case USER_LOGIN.INIT:
    case USER_LOGIN.FAILURE:
      return {
        ...initialState,
        code: API.getCode(action),
      }
    default:
      return {
        ...state,
      }
  }
}
