import {
  TOGGLE_LOGIN_PAGE,
  TOGGLE_MODAL,
  TOGGLE_MOVIE_SHOW,
  TOGGLE_SERIES_SHOW,
  UPDATE_CURRENT_VIDEO,
  UPDATE_CURRENT_SHOW
} from "../../actions/ui_actions";
import { RECEIVE_USER } from "../../actions/session_actions";

// hide any elements that are on top of the modal if turning modal off
const turnOffAllPopups = (newState) => {
  if (newState.modal) {
    Object.keys(newState).forEach(el => {
      if (el !== "modal" && el !== "video") {
        newState[el] = !newState[el]
      }
    })
  }
};

const uiReducer = (state={}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {
    case TOGGLE_SERIES_SHOW:
      newState.series = !state.series;
      return newState;
    case TOGGLE_MOVIE_SHOW:
      newState.movie = !state.movie;
      return newState;
    case UPDATE_CURRENT_SHOW:
      newState.show = action.show;
      return newState;
    case UPDATE_CURRENT_VIDEO:
      newState.video = action.video;
      return newState;
    case TOGGLE_LOGIN_PAGE:
      newState.login = !state.login;
      return newState;
    case TOGGLE_MODAL:
      turnOffAllPopups(newState);
      newState.modal = !state.modal;
      return newState;
    case RECEIVE_USER:
      newState.modal = false;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;