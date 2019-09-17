class Genre < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true

  has_many :genre_joins

  has_many :series,
           through: :genre_joins,
           source: :watchable,
           source_type: :Series
  has_many :movies,
           through: :genre_joins,
           source: :watchable,
           source_type: :Movie
end
