import UserDropdown from "./user_dropdown";
import { connect } from "react-redux"
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
  user: state.session
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(UserDropdown)