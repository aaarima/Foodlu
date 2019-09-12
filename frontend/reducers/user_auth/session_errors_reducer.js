import { RECEIVE_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";
import { TOGGLE_LOGIN_PAGE } from "../../actions/ui_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  let newState = state.slice();

  switch (action.type) {
    case RECEIVE_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      if (action.errors.responseJSON) return action.errors.responseJSON;
      return [action.errors.responseTEXT];
    case TOGGLE_LOGIN_PAGE:
      return [];
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;