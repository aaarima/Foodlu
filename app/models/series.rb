class Series < ApplicationRecord
  validates :title, :description, :content_rating, :year, :network_id, presence: true

  belongs_to :network
  has_many :genre_joins, as: :watchable
end
