class GenreJoin < ApplicationRecord
  validates :genre_id, :watchable_id, :watchable_type, presence: true

  belongs_to :watchable, polymorphic: true
end
