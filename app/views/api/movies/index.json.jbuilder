not_include = Set["created_at", "updated_at"]

@movies.each do |movie|
  json.set! movie.id do
    json.extract! movie, *movie.attributes.keys.reject { |key| not_include.include?(key) }
    json.watchable_type "movie"
    json.thumbnail url_for(movie.thumbnail)
    json.cover url_for(movie.cover)
    json.genres movie.genres.map { |genre| genre.id }
  end
end