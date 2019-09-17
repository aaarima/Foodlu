import { RECEIVE_MOVIES } from "../../actions/movie_actions";

const moviesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    default:
      return state;
  }
};

export default moviesReducer;