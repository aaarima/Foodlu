import Welcome from "./welcome";
import {connect} from 'react-redux'
import {toggleLoginPage, toggleModal} from "../../actions/ui_actions";

const mDTP = dispatch => ({
  toggleLoginPage: () => dispatch(toggleLoginPage()),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(null, mDTP)(Welcome)