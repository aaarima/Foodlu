import { connect } from 'react-redux';
import {
  toggleModal,
  toggleMovieShow,
  toggleSeriesShow,
  updateCurrentShow,
  updateCurrentVideo
} from "../../actions/ui_actions";
import { fetchSeriesEpisodes } from "../../actions/episode_actions";
import MiniExpander from "./mini";

const mSTP = state => ({
  genres: state.entities.genres
});

const mDTP = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  toggleMovieShow: () => dispatch(toggleMovieShow()),
  toggleSeriesShow: () => dispatch(toggleSeriesShow()),
  updateCurrentShow: show => dispatch(updateCurrentShow(show)),
  updateCurrentVideo: video => dispatch(updateCurrentVideo(video)),
  fetchSeriesEpisodes: seriesId => dispatch(fetchSeriesEpisodes(seriesId))
});

export default connect(mSTP, mDTP)(MiniExpander);