import {combineReducers} from 'redux'
import sessionErrorsReducer from './user_auth/session_errors_reducer'

export default combineReducers({
  session: sessionErrorsReducer
});