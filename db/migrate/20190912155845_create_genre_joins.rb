class CreateGenreJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_joins do |t|
      t.integer :genre_id, null: false
      t.integer :watchable_id, null: false
      t.string :watchable_type, null: false
      t.timestamps
      t.index :genre_id
    end
  end
end
