import sessionReducer from "./user_auth/session_reducer"
import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer"
import errorsReducer from "./errors_reducer"
import ui_reducer from "./ui/ui_reducer";

export default combineReducers({
  session: sessionReducer,
  // entities: entitiesReducer,
  errors: errorsReducer,
  ui: ui_reducer
})