import { RECEIVE_USER, LOGOUT_USER } from "../../actions/session_actions"

const sessionReducer = (state={}, action) => {
  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      return {id: action.user.id, username: action.user.username};
    case LOGOUT_USER:
      return {currentUser: null};
    default:
      return state;
  }
};

export default sessionReducer