import rootReducer from "../reducers/root";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk"
import logger from "redux-logger"

const configureStore = (initialState={}) => {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;