@episodes.each do |episode|
  json.set! episode.id do
    json.title episode.title
  end
end