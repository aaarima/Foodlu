class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :length, null: false
      t.integer :season_number, null: false
      t.string :episode_number, null: false
      t.integer :series_id, null: false
      t.index :title
      t.index :series_id
      t.timestamps
    end
  end
end
