import * as APIUtil from "../util/movie_util";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveSeries = (movies) => ({
  type: RECEIVE_MOVIES,
  movies
});

export const fetchMovies = () => dispatch => (
  APIUtil.fetchMovies().then(movies => dispatch(receiveSeries(movies)))
);