class Movie < ApplicationRecord
  validates :description, :content_rating, :year, presence: true
  validates :title, presence: true, uniqueness: true
end
