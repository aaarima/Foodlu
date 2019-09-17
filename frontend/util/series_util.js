export const fetchSeries = () => (
  $.ajax({
    url: '/api/series',
    method: 'GET'
  })
);