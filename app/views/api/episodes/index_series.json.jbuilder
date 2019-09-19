not_include = Set["created_at", "updated_at"]
@episodes.each do |episode|
  json.set! episode.id do
    json.extract! episode, *episode.attributes.keys.reject { |key| not_include.include?(key) }
    json.thumbnail url_for(episode.thumbnail)
    json.video url_for(episode.video)
  end
end