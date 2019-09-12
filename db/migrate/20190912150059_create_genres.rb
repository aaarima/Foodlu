class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.index :title, unique: true
      t.timestamps
    end
  end
end
