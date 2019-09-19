class Series < ApplicationRecord
  validates :title, :description, :content_rating, :year, presence: true

  belongs_to :network, optional: true
  has_many :genre_joins, as: :watchable
  has_many :genres,
           through: :genre_joins,
           source: :genre

  has_many :episodes

  has_one_attached :thumbnail
  has_one_attached :cover
end
