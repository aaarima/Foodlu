class Movie < ApplicationRecord
  validates :description, :content_rating, :year, presence: true
  validates :title, presence: true, uniqueness: true

  has_one_attached :movie
  has_one_attached :thumbnail
end
