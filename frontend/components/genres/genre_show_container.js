import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  series: Object.keys(state.entities.series)
    .map(key => state.entities.series[key])
    .filter(series => series.genres.include(ownProps.match.id)),
  movies: Object.keys(state.entities.movies)
    .map(key => state.entities.movies[key])
    .filter(movie => movie.genres.include(ownProps.match.id))
});

export default connect(mSTP, null)()