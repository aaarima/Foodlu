import { connect } from 'react-redux'
import Section from "../sections/section";
import { toggleMovieShow, updateCurrentShow } from "../../actions/ui_actions";

const mSTP = state => ({
  items: Object.keys(state.entities.movies).map(key => state.entities.movies[key]),
  label: "Movies"
});

const mDTP = dispatch => ({
  toggleMovieShow: () => dispatch(toggleMovieShow()),
  updateCurrentShow: show => dispatch(updateCurrentShow(show))
});

export default connect(mSTP, mDTP)(Section)