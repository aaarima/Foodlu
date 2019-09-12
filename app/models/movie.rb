class Movie < ApplicationRecord
  validates :description, :content_rating, :year, presence: true
  validates :title, presence: true, uniqueness: true

  has_many :genre_joins, as: :watchable
end
