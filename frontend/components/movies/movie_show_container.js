import { connect } from 'react-redux'
import { toggleModal,  updateCurrentVideo } from "../../actions/ui_actions";
import MovieShow from "./movie_show";

const mSTP = state => ({
  active: state.ui.movie,
  show: state.ui.show,
  genres: (state.ui.show && state.ui.show.watchableType === "movie" ? state.entities.movies[state.ui.show.id].genres.map(id => state.entities.genres[id]) : {})
});

const mDTP = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  updateCurrentVideo: video => dispatch(updateCurrentVideo(video))
});

export default connect(mSTP, mDTP)(MovieShow)