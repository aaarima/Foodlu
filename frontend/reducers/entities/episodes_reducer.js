import { RECEIVE_SERIES_EPISODES, RECEIVE_EPISODES } from "../../actions/episode_actions";

const episodeReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_EPISODES:
      return action.episodes;
    case RECEIVE_SERIES_EPISODES:
      Object.keys(action.episodes).forEach(episodeId => {
        newState[episodeId] = action.episodes[episodeId]
      });
      return newState;
    default:
      return state;
  }
};

export default episodeReducer;