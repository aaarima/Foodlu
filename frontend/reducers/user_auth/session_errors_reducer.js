import { RECEIVE_USER, RECEIVE_SESSION_ERRORS } from "../../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  let newState = state.slice();

  switch (action.type) {
    case RECEIVE_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      if (action.errors.responseJSON) return newState.concat(action.errors.responseJSON);
      return newState.concat([action.errors.responseTEXT]);
    default:
      return state;
  }
};

export default sessionErrorsReducer;