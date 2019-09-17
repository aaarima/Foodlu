import { connect } from 'react-redux'
import { fetchGenres } from '../../actions/genre_actions'
import { fetchMovies } from '../../actions/movie_actions'
import { fetchSeries } from '../../actions/series_actions'
import Home from "./home";

const mSTP = state => ({
  movies: state.entities.movies,
  series: state.entities.series,
  genres: state.entities.genres
});

const mDTP = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
  fetchMovies: () => dispatch(fetchMovies()),
  fetchSeries: () => dispatch(fetchSeries())
});

export default connect(mSTP, mDTP)(Home)