import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware, {END} from 'redux-saga'

import rootSaga from './sagas'
import reducer from './reducers'
import apmConst from '../../src/common/constants'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  const store = createStore(
    reducer,
    initialState,
    apmConst.PRODUCTION ? applyMiddleware(...middlewares) : composeWithDevTools(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)
  store.close = () => store.dispatch(END)
  return store
}
