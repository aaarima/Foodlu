import { connect } from 'react-redux'
import { fetchGenres } from '../../actions/genre_actions'
import { fetchMovies } from '../../actions/movie_actions'
import { fetchSeries } from '../../actions/series_actions'
import { fetchEpisodes } from "../../actions/episode_actions";
import { updateCurrentShow, toggleSeriesShow, toggleMovieShow, toggleModal } from "../../actions/ui_actions";
import Home from "./home";

const mSTP = state => ({
  movies: state.entities.movies,
  series: state.entities.series,
  genres: state.entities.genres
});

const mDTP = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  fetchMovies: () => dispatch(fetchMovies()),
  fetchSeries: () => dispatch(fetchSeries()),
  fetchEpisodes: () => dispatch(fetchEpisodes()),
  updateCurrentShow: show => dispatch(updateCurrentShow(show)),
  toggleSeriesShow:  () => dispatch(toggleSeriesShow()),
  toggleMovieShow: () => dispatch(toggleMovieShow()),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mSTP, mDTP)(Home)