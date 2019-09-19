class Episode < ApplicationRecord
  validates :title, :description, :length, :season_number, :episode_number, :series_id, presence: true
  has_one_attached :thumbnail
  has_one_attached :video

  belongs_to :series
end
