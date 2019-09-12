import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { toggleModal, toggleLoginPage } from "../../actions/ui_actions";
import SignIn from './signin'

const mSTP = state => ({
  errors: state.errors.session,
  active: state.ui.login
});

const mDTP = dispatch => ({
  login: (user) => dispatch(login(user)),
  toggleModal: () => dispatch(toggleModal()),
  toggleLoginPage: () => dispatch(toggleLoginPage())
});

export default connect(mSTP, mDTP)(SignIn)