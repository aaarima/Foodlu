class Movie < ApplicationRecord
  validates :description, :content_rating, :year, presence: true
  validates :title, presence: true, uniqueness: true

  has_many :genre_joins, as: :watchable

  has_many :genres,
           through: :genre_joins,
           source: :genre

  has_one_attached :thumbnail
  has_one_attached :cover
  has_one_attached :video
end
