import { connect } from 'react-redux';
import { updateCurrentVideo } from "../../actions/ui_actions";
import EpisodeExpander from "./episode";

const mDTP = dispatch => ({
  updateCurrentVideo: video => dispatch(updateCurrentVideo(video))
});

export default connect(null, mDTP)(EpisodeExpander);