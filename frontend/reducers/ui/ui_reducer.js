import { TOGGLE_LOGIN_PAGE, TOGGLE_MODAL } from "../../actions/ui_actions";

// hide any elements that are on top of the modal if turning modal off
const turnOffAllPopups = (newState) => {
  if (newState.modal) {
    Object.keys(newState).forEach(el => {
      if (el !== "modal") {
        newState[el] = !newState[el]
      }
    })
  }
};

const uiReducer = (state={}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {
    case TOGGLE_LOGIN_PAGE:
      newState.login = !state.login;
      return newState;
    case TOGGLE_MODAL:
      turnOffAllPopups(newState);
      newState.modal = !state.modal;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;