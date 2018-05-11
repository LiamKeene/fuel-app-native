import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools }          from "remote-redux-devtools"
// import createSagaMiddleware             from "redux-saga"

import RootReducer from "./reducers"

export default function configureStore(initialState) {
  // const SagaMiddleware = createSagaMiddleware()
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })
  return {
    ...createStore(
      RootReducer,
      initialState,
      composeEnhancers(applyMiddleware(SagaMiddleware))
    ),
    // runSaga: SagaMiddleware.run
  }
}
