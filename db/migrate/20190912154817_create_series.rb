class CreateSeries < ActiveRecord::Migration[5.2]
  def change
    create_table :series do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :content_rating, null: false
      t.integer :network_id, null: false
      t.integer :year, null: false
      t.timestamps
    end
  end
end
