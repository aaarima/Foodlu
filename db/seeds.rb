# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

s3 = Aws::S3::Resource.new(region: "us-west-1").bucket(Rails.env.production? ? "foodlu-prod" : "foodlu-dev")

class AmazonFileGetter
  def initialize(s3)
    @s3 = s3
  end

  def get_file_by_name(filename)

  end
end

ActiveRecord::Base.transaction do
  User.destroy_all
  # reset auto increment
  User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

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

  # Networks
  cnn = Network.create!(name: "CNN")
  food_network = Network.create!(name: "Food Network")
  fox = Network.create!(name: "Fox")

  # Series
  Series.create!(
    title: "Hell's Kitchen",
    description: "Gordon Ramsey yelling at people",
    content_rating: "TV-14",
    network_id: fox.id,
    year: 2005
  )
  Series.create!(
    title: "Anthony Bourdain: Parts Unknown",
    description: "Not just about the food but about the people.",
    content_rating: "TV-PG",
    network_id: cnn.id,
    year: 2013
  )
  Series.create!(
    title: "Anthony Bourdain: No Reservations",
    description: "Anthony Bourdain travels around the world, eating different kinds of food and meeting old friends along the way.",
    content_rating: "TV-PG",
    network_id: food_network.id,
    year: 2005
  )
  Series.create!(
    title: "Food Wars",
    description: "Weeb fight cooking.",
    content_rating: "TV-14",
    year: 2005
  )

  # Movies
  Movie.create!(
    title: "Jiro Dreams of Sushi",
    description: "Watch da master.",
    content_rating: "PG",
    year: 2011
  )
  Movie.create!(
    title: "Ratatouille",
    description: "A rat eventually learns to cook.",
    content_rating: "G",
    year: 2007
  )

end
