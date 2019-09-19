# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# This method is to find already uploaded s3 files and attach them to the relevant active_storage associations when
# seeding.
Aws.config.update(
  credentials: Aws::Credentials.new(
    Rails.application.credentials.aws[:access_key_id],
    Rails.application.credentials.aws[:secret_access_key]
  )
)
s3 = Aws::S3::Resource.new(region: "us-west-1").bucket(Rails.env.production? ? "foodlu-prod" : "foodlu-dev")

def get_signed_file_name(path, s3)
  obj = s3.object(path)
  blob = ActiveStorage::Blob.create_before_direct_upload!(
    filename: obj.key,
    content_type: obj.content_type,
    byte_size: obj.size,
    checksum: obj.etag.gsub('"', "")
  )
  blob.update_attributes key: obj.key
  blob.signed_id
end

ActiveRecord::Base.transaction do
  User.destroy_all
  # reset auto increment
  User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

  GenreJoin.destroy_all
  GenreJoin.connection.execute('ALTER SEQUENCE genres_id_seq RESTART WITH 1')

  Genre.destroy_all
  Genre.connection.execute('ALTER SEQUENCE genres_id_seq RESTART WITH 1')

  Network.destroy_all
  Network.connection.execute('ALTER SEQUENCE networks_id_seq RESTART WITH 1')

  Series.destroy_all
  Series.connection.execute('ALTER SEQUENCE series_id_seq RESTART WITH 1')

  Movie.destroy_all
  Movie.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')

  Episode.destroy_all
  Episode.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')

  User.create!(email: "demo@email.com", password: "123456", age: 20, first_name: "Demo", last_name: "login")
  User.create!(email: "aaron@gmail.com", password: "123456", first_name: "Aaron", last_name: "Arima", age: 24, middle_initial: "Y")

  # Genres
  action = Genre.create!(title: "Action", description: "Action genre. Guess its like cooking really hard")
  documentary = Genre.create!(title: "Documentary", description: "Most of the videos are probably here.")
  anime = Genre.create!(title: "Anime", description: "Weebs everywhere.")
  instructional = Genre.create!(title: "Instructional", description: "Actually helpful videos")
  reality = Genre.create!(title: "Reality", description: "Kinda like real life. Kinda...")
  kids = Genre.create!(title: "Kids", description: "cool kids only")
  comedy = Genre.create!(title: "Comedy", description: "funny ****")

  # Networks
  cnn = Network.create!(name: "CNN")
  food_network = Network.create!(name: "Food Network")
  fox = Network.create!(name: "Fox")

  # Series
  hells_kitchen = Series.create!(
    title: "Hell's Kitchen",
    description: "Gordon Ramsey yelling at people",
    content_rating: "TV-14",
    network_id: fox.id,
    year: 2005,
    thumbnail: get_signed_file_name("series/id=1/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=1/cover.jpg", s3),
    shell_color: "#ad1515"
  )

  parts_unknown = Series.create!(
    title: "Anthony Bourdain: Parts Unknown",
    description: "Not just about the food but about the people.",
    content_rating: "TV-PG",
    network_id: cnn.id,
    year: 2013,
    thumbnail: get_signed_file_name("series/id=2/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=2/cover.jpg", s3),
    shell_color: "#ad1515"
  )

  no_reservations = Series.create!(
    title: "Anthony Bourdain: No Reservations",
    description: "Anthony Bourdain travels around the world, eating different kinds of food and meeting old friends along the way.",
    content_rating: "TV-PG",
    network_id: food_network.id,
    year: 2005,
    thumbnail: get_signed_file_name("series/id=3/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=3/cover.jpg", s3),
    shell_color: "#6ba0c9"
  )

  food_wars = Series.create!(
    title: "Food Wars",
    description: "Weeb fight cooking.",
    content_rating: "TV-14",
    year: 2005,
    thumbnail: get_signed_file_name("series/id=4/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=4/cover.jpg", s3),
    shell_color: "#d6993c"
  )

  emiya_menu = Series.create!(
    title: "Today's Menu for the Emiya Family",
    description: "weeb cooking",
    content_rating: "TV-14",
    year: 2018,
    thumbnail: get_signed_file_name("series/id=5/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=5/cover.jpg", s3),
    shell_color: "#76cede"
  )

  # Movies
  jiro = Movie.create!(
    title: "Jiro Dreams of Sushi",
    description: "Watch da master.",
    content_rating: "PG",
    year: 2011,
    thumbnail: get_signed_file_name("movies/id=1/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=1/cover.jpg", s3),
    video: get_signed_file_name("movies/id=1/main.mp4", s3),
    shell_color: "#e36b6b"
  )

  ratatouille = Movie.create!(
    title: "Ratatouille",
    description: "A rat eventually learns to cook.",
    content_rating: "G",
    year: 2007,
    thumbnail: get_signed_file_name("movies/id=2/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=2/cover.jpg", s3),
    video: get_signed_file_name("movies/id=2/main.mp4", s3),
    shell_color: "#d6993c"
  )

  chef = Movie.create!(
    title: "Chef",
    description: "A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.",
    content_rating: "R",
    year: 2014,
    thumbnail: get_signed_file_name("movies/id=3/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=3/cover.jpg", s3),
    video: get_signed_file_name("movies/id=3/main.mp4", s3),
    shell_color: "#e3e378"
  )

  food_inc = Movie.create!(
    title: "Food Inc.",
    description: "An unflattering look inside America's corporate controlled food industry.",
    content_rating: "PG",
    year: 2008,
    thumbnail: get_signed_file_name("movies/id=4/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=4/cover.jpg", s3),
    video: get_signed_file_name("movies/id=4/main.mp4", s3),
    shell_color: "#5f9e51"
  )

  # genre_joins
  # Joining genres and movies/series
  GenreJoin.create!(
    genre_id: action.id,
    watchable_id: food_wars.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: anime.id,
    watchable_id: food_wars.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: reality.id,
    watchable_id: hells_kitchen.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: action.id,
    watchable_id: hells_kitchen.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: instructional.id,
    watchable_id: emiya_menu.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: anime.id,
    watchable_id: emiya_menu.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: documentary.id,
    watchable_id: no_reservations.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: documentary.id,
    watchable_id: parts_unknown.id,
    watchable_type: 'Series'
  )

  GenreJoin.create!(
    genre_id: documentary.id,
    watchable_id: jiro.id,
    watchable_type: 'Movie'
  )

  GenreJoin.create!(
    genre_id: kids.id,
    watchable_id: ratatouille.id,
    watchable_type: 'Movie'
  )

  GenreJoin.create!(
    genre_id: comedy.id,
    watchable_id: chef.id,
    watchable_type: 'Movie'
  )

  GenreJoin.create!(
    genre_id: documentary.id,
    watchable_id: food_inc.id,
    watchable_type: 'Movie'
  )

  # episodes
  Episode.create!(
    title: "Day 1",
    description: "Who will be eliminated?",
    episode_number: 1,
    season_number: 1,
    series_id: hells_kitchen.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=1/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=1/main.mp4", s3)
  )

  Episode.create!(
    title: "Day 2",
    description: "Who will be eliminated?",
    episode_number: 2,
    season_number: 1,
    series_id: hells_kitchen.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=2/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=2/main.mp4", s3)
  )

  Episode.create!(
    title: "Day 3",
    description: "Who will be eliminated?",
    episode_number: 3,
    season_number: 1,
    series_id: hells_kitchen.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=3/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=3/main.mp4", s3)
  )

  Episode.create!(
    title: "Myanmar",
    description: "With the slight relaxation of control by the government of Myanmar (Burma), Tony is finally able to explore one of the most fabled and beautiful areas of Asia.",
    episode_number: 1,
    season_number: 1,
    series_id: parts_unknown.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=4/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=4/main.mp4", s3)
  )

  Episode.create!(
    title: "Koreatown, Los Angeles",
    description: "Tony visits the three square-mile area of Los Angeles known as Koreatown, where he finds a tight-knit community still marked by the 1992 Rodney King riots. Tony travels throughout the community with chef Roy Choi and artist David Choe to see how much the town has evolved and how other cultures have integrated into Koreatown, and to see what it was like to grow up Korean American.",
    episode_number: 2,
    season_number: 1,
    series_id: parts_unknown.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=5/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=5/main.mp4", s3)
  )

  Episode.create!(
    title: "Colombia",
    description: "The public face of Colombia has changed immensely over the past ten years and is still changing for the better. Tony will explore several regions of the country from the mountains down to the Caribbean coast to the coca leaf growing inland formerly controlled by drug cartels.",
    episode_number: 3,
    season_number: 1,
    series_id: parts_unknown.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=6/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=6/main.mp4", s3)
  )

  Episode.create!(
    title: "France: Why the French Don't Suck",
    description: "Tony's debut episode of this new series has him visiting Paris. He explores the city's famous catacombs, tries some absinthe, checks out one of the city's major meat markets, and spends the night in the room where Oscar Wilde died.",
    episode_number: 1,
    season_number: 1,
    series_id: no_reservations.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=7/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=7/main.mp4", s3)
  )

  Episode.create!(
    title: "Iceland: Hello Darkness My Old Friend",
    description: "This week Anthony travels to Reykjavík, Iceland, where in winter the volcanic islands see only about four hours of sunlight a day. Anthony finds the darkness comforting and learns how the Icelanders contend with the dark days - eating, drinking, spending time at the spa, and pumping iron! Tony tries Hákarl (fermented shark). Later, he visits the famous Blue Lagoon.",
    episode_number: 2,
    season_number: 1,
    series_id: no_reservations.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=8/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=8/main.mp4", s3)
  )

  Episode.create!(
    title: "New Jersey",
    description: "Tony visits the state of New Jersey. He takes us on a trip through his birthplace trying to dispel some common misconceptions of the Garden State. We learn about The Sopranos and other NJ landmarks as Tony reminisces. He also meets up with Nari Kye, an assistant, who teaches him Korean food.",
    episode_number: 3,
    season_number: 1,
    series_id: no_reservations.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=9/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=9/main.mp4", s3)
  )

  Episode.create!(
    title: "An Endless Wasteland",
    description: "Yukihira is a popular neighborhood restaurant where Yukihira Soma helps out in the hopes of surpassing his father as a chef one day.",
    episode_number: 1,
    season_number: 1,
    series_id: food_wars.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=10/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=10/main.mp4", s3)
  )

  Episode.create!(
    title: "God Tongue",
    description: "Under his father's orders, Soma attempts to transfer into one of Japan's top culinary schools, Togetsu Tea House Culinary Academy.",
    episode_number: 2,
    season_number: 1,
    series_id: food_wars.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=11/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=11/main.mp4", s3)
  )

  Episode.create!(
    title: "That Chef Never Smiles",
    description: "Just barely squeaking past the academy's transfer exam, Soma causes and uproar at the opening ceremony by making a brash speech in front of the entire class.",
    episode_number: 3,
    season_number: 1,
    series_id: food_wars.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=12/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=12/main.mp4", s3)
  )

  Episode.create!(
    title: "Toshikoshi Soba",
    description: "It is New Year’s Eve. Shirou and Saber are done cleaning the house, and they go grocery shopping for dinner. ",
    episode_number: 1,
    season_number: 1,
    series_id: emiya_menu.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=13/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=13/main.mp4", s3)
  )

  Episode.create!(
    title: "Salmon, Mushroom and Butter Baked in Foil",
    description: "Shirou is out for grocery shopping. While walking down a shopping district and thinking about the menu for the night, he comes across Lancer who works at a fish market. ",
    episode_number: 2,
    season_number: 1,
    series_id: emiya_menu.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=14/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=14/main.mp4", s3)
  )

  Episode.create!(
    title: "Spring Chirashizushi",
    description: "On Girls’ Day, Shirou and the team invite Illyasviel to the Emiya residence so she can get a taste of Japanese culture. ",
    episode_number: 3,
    season_number: 1,
    series_id: emiya_menu.id,
    length: 120,
    thumbnail: get_signed_file_name("episodes/id=15/thumbnail.jpg", s3),
    video: get_signed_file_name("episodes/id=15/main.mp4", s3)
  )

end
