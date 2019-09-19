export const fetchEpisodes = () => (
  $.ajax({
    url: '/api/episodes',
    method: 'GET'
  })
);

export const fetchSeriesEpisodes = seriesId => (
  $.ajax({
    url: `/api/series/${seriesId}/episodes`,
    method: 'GET'
  })
);