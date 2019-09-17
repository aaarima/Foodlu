import { RECEIVE_SERIES } from "../../actions/series_actions";

const seriesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SERIES:
      return action.series;
    default:
      return state;
  }
};

export default seriesReducer;