import { connect } from 'react-redux'
import { createUser } from '../../actions/session_actions'
import SignUp from './signup'
import { toggleModal, toggleLoginPage } from "../../actions/ui_actions";

const mSTP = state => ({
  errors: state.errors.session,
});

const mDTP = dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
  toggleModal: () => dispatch(toggleModal()),
  toggleLoginPage: () => dispatch(toggleLoginPage())
});

export default connect(mSTP, mDTP)(SignUp)