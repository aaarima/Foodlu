not_include = Set["created_at", "updated_at",]

@series.each do |series|
  json.set! series.id do
    json.extract! series, *series.attributes.keys.reject { |key| not_include.include?(key) }
    json.watchable_type "series"
    json.thumbnail url_for series.thumbnail
    json.cover url_for series.cover
    json.genres series.genres.map { |genre| genre.id }
    json.episodes series.episodes.map { |episode| episode.id }
  end
end