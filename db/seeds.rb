# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
ActiveRecord::Base.transaction do
  User.destroy_all

  User.create(email: "demo@email.com", password: "123456", age: 20, first_name: "Demo", last_name: "login")
  User.create(email: "aaron@gmail.com", password: "123456", first_name: "Aaron", last_name: "Arima", age: 24, middle_initial: "Y")

end
