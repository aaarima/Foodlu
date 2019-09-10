import rootReducer from "../reducers/root";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk"
import logger from "redux-logger"

const configureStore = (initialState={}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
};

export default configureStore;