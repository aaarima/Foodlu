import { RECEIVE_USER, LOGOUT_USER } from "../../actions/session_actions"

const sessionReducer = (state={}, action) => {
  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default sessionReducer