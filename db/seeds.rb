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
    shell_color: "red"
  )

  parts_unknown = Series.create!(
    title: "Anthony Bourdain: Parts Unknown",
    description: "Not just about the food but about the people.",
    content_rating: "TV-PG",
    network_id: cnn.id,
    year: 2013,
    thumbnail: get_signed_file_name("series/id=2/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=2/cover.jpg", s3),
    shell_color: "red"
  )
  no_reservations = Series.create!(
    title: "Anthony Bourdain: No Reservations",
    description: "Anthony Bourdain travels around the world, eating different kinds of food and meeting old friends along the way.",
    content_rating: "TV-PG",
    network_id: food_network.id,
    year: 2005,
    thumbnail: get_signed_file_name("series/id=3/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=3/cover.jpg", s3),
    shell_color: "lightblue"
  )
  food_wars = Series.create!(
    title: "Food Wars",
    description: "Weeb fight cooking.",
    content_rating: "TV-14",
    year: 2005,
    thumbnail: get_signed_file_name("series/id=4/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=4/cover.jpg", s3),
    shell_color: "orange"
  )
  emiya_menu = Series.create!(
    title: "Today's Menu for the Emiya Family",
    description: "weeb cooking",
    content_rating: "TV-14",
    year: 2018,
    thumbnail: get_signed_file_name("series/id=5/thumbnail.jpg", s3),
    cover: get_signed_file_name("series/id=5/cover.jpg", s3),
    shell_color: "lightblue"
  )

  # Movies
  jiro = Movie.create!(
    title: "Jiro Dreams of Sushi",
    description: "Watch da master.",
    content_rating: "PG",
    year: 2011,
    thumbnail: get_signed_file_name("movies/id=1/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=1/cover.jpg", s3),
    shell_color: "red"
  )
  ratatouille = Movie.create!(
    title: "Ratatouille",
    description: "A rat eventually learns to cook.",
    content_rating: "G",
    year: 2007,
    thumbnail: get_signed_file_name("movies/id=2/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=2/cover.jpg", s3),
    shell_color: "orange"
  )
  chef = Movie.create!(
    title: "Chef",
    description: "A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.",
    content_rating: "R",
    year: 2014,
    thumbnail: get_signed_file_name("movies/id=3/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=3/cover.jpg", s3),
    shell_color: "red"
  )
  food_inc = Movie.create!(
    title: "Food Inc.",
    description: "An unflattering look inside America's corporate controlled food industry.",
    content_rating: "PG",
    year: 2008,
    thumbnail: get_signed_file_name("movies/id=4/thumbnail.jpg", s3),
    cover: get_signed_file_name("movies/id=4/cover.jpg", s3),
    shell_color: "green"
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
end
