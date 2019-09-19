import { connect } from 'react-redux';
import { closeCurrentVideo } from "../../actions/ui_actions";
import Video from "./video";


const mSTP = state => ({
  video: state.ui.video
});

const mDTP = dispatch => ({
  closeCurrentVideo: () => dispatch(closeCurrentVideo())
});

export default connect(mSTP, mDTP)(Video)