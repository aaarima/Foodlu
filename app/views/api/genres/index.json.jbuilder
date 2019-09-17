not_include = Set["created_at", "updated_at"]

@genres.each do |genre|
  json.set! genre.id do
    json.extract! genre, *genre.attributes.keys.reject { |key| not_include.include? key }
    json.movies genre.movies.map { |movie| movie.id }
    json.series genre.series.map { |series| series.id }
  end
end