class Network < ApplicationRecord
  validates :name, presence: true

  has_many :series
end
