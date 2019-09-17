import * as APIUtil from "../util/series_util";

export const RECEIVE_SERIES = "RECEIVE_SERIES";

export const receiveSeries = (series) => ({
  type: RECEIVE_SERIES,
  series
});

export const fetchSeries = () => dispatch => (
  APIUtil.fetchSeries().then(series => dispatch(receiveSeries(series)))
);