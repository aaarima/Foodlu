export const fetchMovies = () => (
  $.ajax({
    url: '/api/movies',
    method: 'GET'
  })
);