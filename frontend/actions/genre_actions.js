import * as APIUtil from "../util/genre_util";

export const RECEIVE_GENRES = "RECEIVE_GENRES";

export const receiveSeries = (genres) => ({
  type: RECEIVE_GENRES,
  genres
});

export const fetchGenres = () => dispatch => (
  APIUtil.fetchGenres().then(genres => dispatch(receiveSeries(genres)))
);