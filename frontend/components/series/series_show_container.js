import { connect } from 'react-redux'
import { toggleModal, updateCurrentVideo } from "../../actions/ui_actions";
import { fetchSeriesEpisodes } from "../../actions/episode_actions";
import SeriesShow from "./series_show";

const mSTP = state => ({
  active: state.ui.series,
  show: state.ui.show,
  genres: (state.ui.show && state.ui.show.watchableType === "series" ? state.entities.series[state.ui.show.id].genres.map(id => state.entities.genres[id]) : {}),
  episodes: (state.ui.show && state.ui.show.watchableType === "series" ? state.ui.show.episodes.map(id => state.entities.episodes[id]) : {})
});

const mDTP = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  updateCurrentVideo: video => dispatch(updateCurrentVideo(video)),
  fetchSeriesEpisodes: seriesId => dispatch(fetchSeriesEpisodes(seriesId))
});

export default connect(mSTP, mDTP)(SeriesShow)