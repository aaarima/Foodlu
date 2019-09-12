import Modal from "./modal";
import { connect } from 'react-redux'
import { toggleModal } from "../../actions/ui_actions";

const mSTP = state => ({
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mSTP, mDTP)(Modal)