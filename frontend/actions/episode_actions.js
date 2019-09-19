import * as APIUtil from "../util/episode_util";

export const RECEIVE_SERIES_EPISODES = "RECEIVE_SERIES_EPISODES";
export const RECEIVE_EPISODES = "RECEIVE_EPISODES";

export const receiveEpisodes = episodes => ({
  type: RECEIVE_EPISODES,
  episodes
});

export const receiveSeriesEpisodes = episodes => ({
  type: RECEIVE_SERIES_EPISODES,
  episodes
});

export const fetchEpisodes = () => dispatch => (
  APIUtil.fetchEpisodes().then(episodes => dispatch(receiveEpisodes(episodes)))
);

export const fetchSeriesEpisodes = seriesId => dispatch => (
  APIUtil.fetchSeriesEpisodes(seriesId).then(episodes => dispatch(receiveSeriesEpisodes(episodes)))
);